/*:
 * @plugindesc ChangeTitleScreenImage
 * @author Sang Hendrix: Idea, debug, the brain. ChatGPT: code, debug
 *
 * @param ImageList
 * @type struct<ImageSwitch>[]
 * @desc List of title screen images with the corresponding switch ID.
 * @default []
 *
 * @help This plugin changes the title screen image based on switches.
 *
 */

/*~struct~ImageSwitch:
 * @param switchId
 * @type switch
 * @desc The switch ID that determines if this image should be used.
 * @default 0
 *
 * @param imageName
 * @type file
 * @dir img/titles1
 * @desc The title screen image file name.
 * @default
 *
 */

(function() {
    const pluginName = "ChangeTitleScreenImage";
    const parameters = PluginManager.parameters(pluginName);
    const imageList = JSON.parse(parameters["ImageList"] || "[]")
        .map(imageSwitch => JSON.parse(imageSwitch));
    const storageKey = "ChangeTitleScreenImage.imageStatus";
    let imageStatus = {};

    try {
        imageStatus = JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch (_) {
        imageStatus = {};
    }

    const request = new XMLHttpRequest();
    request.open("GET", "imageStatus.json", true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            try {
                const defaults = JSON.parse(request.responseText);
                Object.assign(imageStatus, defaults, imageStatus);
            } catch (_) {
                // Keep the local status if imageStatus.json is unavailable or invalid.
            }
        }
    };
    request.send();

    const saveImageStatus = () => {
        try {
            localStorage.setItem(storageKey, JSON.stringify(imageStatus));
        } catch (_) {
            // Some privacy modes disable persistent browser storage.
        }
    };

    const _Scene_Title_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        _Scene_Title_createBackground.call(this);
        const activeImage = imageList.find(img => imageStatus[img.switchId]);
        if (activeImage && this._backSprite1) {
            this._backSprite1.bitmap = ImageManager.loadTitle1(activeImage.imageName);
        }
    };

    const _Game_Switches_setValue = Game_Switches.prototype.setValue;
    Game_Switches.prototype.setValue = function(switchId, value) {
        _Game_Switches_setValue.call(this, switchId, value);

        const switchImage = imageList.find(img => img.switchId === switchId.toString());
        if (switchImage) {
            if (value) {
                imageList.forEach(img => {
                    const otherSwitchId = Number(img.switchId);
                    if (img.switchId !== switchId.toString()) {
                        imageStatus[img.switchId] = false;
                        _Game_Switches_setValue.call(this, otherSwitchId, false);
                    }
                });
            }
            imageStatus[switchId] = value;
            saveImageStatus();
        }
    };
})();
