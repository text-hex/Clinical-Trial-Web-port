/*:
 * @target MZ
 * @plugindesc Shows web port and game credits near the bottom-left of the title screen.
 * @author Text_Hex
 *
 * @help
 * Adds the game credit lines to the title screen only.
 */

(function () {
    "use strict";

    function createCreditsSprite(scene) {
        const sprite = new Sprite();
        sprite.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
        sprite.bitmap.fontSize = 18;
        sprite.bitmap.textColor = "#ffffff";
        sprite.bitmap.outlineColor = "rgba(0, 0, 0, 0.8)";
        sprite.bitmap.outlineWidth = 2;

        const x = 16;
        const secondLineY = Graphics.boxHeight - 26;
        const firstLineY = secondLineY - 22;
        sprite.bitmap.drawText("Web port by Text_Hex", x, firstLineY, 360, 24, "left");
        sprite.bitmap.drawText("Clinical Trial by Homie", x, secondLineY, 360, 24, "left");
        scene.addChild(sprite);
        return sprite;
    }

    const _Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function () {
        _Scene_Title_create.call(this);
        createCreditsSprite(this);
    };

})();
