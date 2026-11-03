/*:
 * @author Synrec/Kylestclr
 * @plugindesc v1.1 Replaces menu scene with options scene
 * @target MZ
 * 
 * @help
 * Save, load and game end will be added to options window.
 * 
 * @param Replace Menu With Options
 * @desc Replaces default menu scene with scene options
 * @type boolean
 * @default true
 * 
 * @param Save Command Name
 * @desc Text for save command
 * @type text
 * @default Save
 * 
 * @param Load Command Name
 * @desc Text for load command
 * @type text
 * @default Load
 * 
 * @param Game End Command Name
 * @desc Text for game end command
 * @type text
 * @default Exit Game
 * 
 */

const Syn_MenuOptions = {};
Syn_MenuOptions.Plugin = PluginManager.parameters(`Synrec_OptionsMenu`);
Syn_MenuOptions.USE_OPTIONS = eval(Syn_MenuOptions.Plugin['Replace Menu With Options']);

Syn_MenuOptions.SAVE_NAME = Syn_MenuOptions.Plugin['Save Command Name'];
Syn_MenuOptions.LOAD_NAME = Syn_MenuOptions.Plugin['Load Command Name'];
Syn_MenuOptions.EXIT_NAME = Syn_MenuOptions.Plugin['Game End Command Name'];

Syn_MenuOptions_WinOptns_Init = Window_Options.prototype.initialize;
Window_Options.prototype.initialize = function(rect) {
    Syn_MenuOptions_WinOptns_Init.call(this, ...arguments);
    this.select(SceneManager._saved_options_index || 0);
    this.reselect();
}

Syn_MenuOptions_WinOptns_MkCmdList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    this.addSaveLoadOptions();
    Syn_MenuOptions_WinOptns_MkCmdList.call(this, ...arguments);
    this.addExitOption();
}

Window_Options.prototype.addGeneralOptions = function() {
    // this.addCommand(TextManager.alwaysDash, "alwaysDash");
    // this.addCommand(TextManager.commandRemember, "commandRemember");
    // this.addCommand(TextManager.touchUI, "touchUI");
}

Window_Options.prototype.addSaveLoadOptions = function(){
    this.addSaveOption();
    this.addLoadOption();
}

Window_Options.prototype.addSaveOption = function(){
    if(Syn_MenuOptions.SAVE_NAME){
        this.addCommand(Syn_MenuOptions.SAVE_NAME, "save");
    }
}

Window_Options.prototype.addLoadOption = function(){
    if(Syn_MenuOptions.LOAD_NAME && DataManager.isAnySavefileExists()){
        this.addCommand(Syn_MenuOptions.LOAD_NAME, "load");
    }
}

Window_Options.prototype.addExitOption = function(){
    if(Syn_MenuOptions.EXIT_NAME){
        this.addCommand(Syn_MenuOptions.EXIT_NAME, "exit");
    }
}

Syn_MenuOptions_WinOptns_StsTxt = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    const symbol = this.commandSymbol(index);
    const no_sts = ["save", "load", "exit"];
    if(no_sts.includes(symbol))return '';
    return Syn_MenuOptions_WinOptns_StsTxt.call(this, ...arguments);
}

Syn_MenuOptions_WinOptns_ProcOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    const scn_sym = ["save", "load", "exit"];
    const index = this.index();
    const symbol = this.commandSymbol(index);
    if(scn_sym.includes(symbol)){
        SceneManager._saved_options_index = this.index();
        switch(symbol){
            case "save": return SceneManager.push(Scene_Save);
            case "load": return SceneManager.push(Scene_Load);
            case "exit": return SceneManager.push(Scene_GameEnd);
        }
    }
    Syn_MenuOptions_WinOptns_ProcOk.call(this);
}

Syn_MenuOptions_ScnOptns_CrtWin = Scene_Options.prototype.createOptionsWindow;
Scene_Options.prototype.createOptionsWindow = function() {
    Syn_MenuOptions_ScnOptns_CrtWin.call(this, ...arguments);
    this.adjustButtonWindow();
}

Scene_Options.prototype.adjustButtonWindow = function(){
    // const options_window = this._optionsWindow;
    // const window_layer = this._windowLayer;
    // if(window_layer){
    //     const windows = window_layer.children;
    //     windows.forEach((window)=>{
    //         if(window instanceof Window_ButtonAssist){
    //             window.width = options_window.width;
    //             window.x = options_window.x;
    //             window.refresh();
    //         }
    //     })
    // }
}

Syn_MenuOptions_ScnOptns_PopScn = Scene_Options.prototype.popScene;
Scene_Options.prototype.popScene = function() {
    const options_window = this._optionsWindow;
    SceneManager._saved_options_index = options_window.index();
    Syn_MenuOptions_ScnOptns_PopScn.call(this);
}

Syn_MenuOptions_ScnMap_CallMnu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
    if(Syn_MenuOptions.USE_OPTIONS){
        SceneManager._saved_options_index = 0;
        SoundManager.playOk();
        SceneManager.push(Scene_Options);
        $gameTemp.clearDestination();
        this._mapNameWindow.hide();
        this._waitCount = 2;
    }else{
        Syn_MenuOptions_ScnMap_CallMnu.call(this);
    }
}