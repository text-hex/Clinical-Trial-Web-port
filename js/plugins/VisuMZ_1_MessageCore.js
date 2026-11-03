//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.46;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.46] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV file that will contain all of the text used to
 * translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * ---
 * 
 * === How to Edit the Language CSV ===
 * 
 * The Language CSV is structured as a normal CSV file would be, which also
 * means it can be modified in programs like Microsoft Excel or Google Sheets.
 * We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV file in programs like notepad directly
 * due to the way certain things like commas (,) are handled and how easy it is
 * to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV file via the spreadsheet editor (Excel or Google
 * Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
 * 
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MessageCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const filename = data[0].trim();\\\\n    const index = parseInt(data[1] || '0');\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    const filename = $gameMessage.faceName();\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (textState.drawing && this.constructor === Window_Message) {\\\\n    this.setTextDelay(delay);\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default default
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

function _0x24cf(_0x18053a,_0x5212e8){const _0x258c82=_0x258c();return _0x24cf=function(_0x24cf85,_0x2f130e){_0x24cf85=_0x24cf85-0xc9;let _0x307e6f=_0x258c82[_0x24cf85];return _0x307e6f;},_0x24cf(_0x18053a,_0x5212e8);}const _0x5c5568=_0x24cf;(function(_0x29f5d5,_0xd370f0){const _0x5020e1=_0x24cf,_0x590de6=_0x29f5d5();while(!![]){try{const _0x1e14fd=parseInt(_0x5020e1(0xdc))/0x1+-parseInt(_0x5020e1(0x1a5))/0x2+-parseInt(_0x5020e1(0x23d))/0x3+-parseInt(_0x5020e1(0x1fc))/0x4*(-parseInt(_0x5020e1(0x2ee))/0x5)+parseInt(_0x5020e1(0x3a2))/0x6*(-parseInt(_0x5020e1(0x33b))/0x7)+-parseInt(_0x5020e1(0x353))/0x8+parseInt(_0x5020e1(0x35d))/0x9;if(_0x1e14fd===_0xd370f0)break;else _0x590de6['push'](_0x590de6['shift']());}catch(_0x138647){_0x590de6['push'](_0x590de6['shift']());}}}(_0x258c,0xc6fb4));var label=_0x5c5568(0x260),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5c5568(0x1fd)](function(_0x1d7779){const _0x26fd50=_0x5c5568;return _0x1d7779['status']&&_0x1d7779[_0x26fd50(0x21f)][_0x26fd50(0x1e3)]('['+label+']');})[0x0];function _0x258c(){const _0xfcf980=['updateBitmap','kKxCU','upper\x20center','_itemChoiceAtypeId','round','down-right','postConvertEscapeCharacters','partyMemberName','वाह','in\x20order\x20for\x20VisuMZ_1_MessageCore\x20to\x20work.','onLocalizationXhrLoad','ARRAYNUM','Distance','isSkillTypeMatchForUse','_macroBypassWordWrap','otaiM','_pictureTextCache','Waouh','processCharacter','96803ruYwIt','true','resetWordWrap','ParseStateNotetags','text','setChoices','안녕히\x20가세요','adjustShowChoiceCancel','<CENTER>','xNnpJ','fQRGi','iFAnl','choice','_scriptCall','crisis','mainFontSize','messageRows','ezxBy','updateEvents','placeCancelButton','adjustShowChoiceExtension','ShuffleArray','Wow','_commonEventId','6117320cZnoGX','KUYoS','currentCommand','Window_Message_needsNewPage','upright','textColor','process_VisuMZ_MessageCore_AutoColor','levelUp','TtiNy','lowerright','12391425IcfLNe','Game_Party_initialize','choiceListHelpWindowRect','PictureTextChange','up-right','constructor','ChoiceWindowProperties','<COLORLOCK>','KlQqd','addChildAt','COMMONEVENT','drawBackCenteredPicture','startX','\x5c%1','convertTextAlignmentEscapeCharacters','QDymi','loadPicture','maxCols','getPreservedFontSettings','WRNmP','textSpeed','Window_Base_update','exit','SWITCHES','Settings','Enemies','startY','makeItemList','rtl','_choiceCancelType','drawPictureText','processTextAlignmentChange','Mvgfa','#acacac','fontSize','_autoSizeCheck','_helpWindow','list','_choices','addGeneralOptions','unshift','setPictureTextBuffer','processMessageCoreEscapeActions','pgpyO','bitmap','rJKvk','value','test','RelativePXPY','battleUserName','Korean','processCustomWait','getLanguageName','follower','cWczp','Game_Message_setChoices','VariableID','_targets','CSV\x20file\x20cannot\x20be\x20created.\x0aPlease\x20enter\x20Playtest\x20mode.\x0a','ANY','_cancelButton','Halo','பிரியாவிடை','messageCoreTextSpeed','ChoiceWindowMaxRows','makeCommandListShuffle','reduce','asTDV','filename','72lRvAuW','Enable','down','JSON','moveBy','process_VisuMZ_MessageCore_TextCodes_Action','</LEFT>','addCommand','VisuMZ_4_ExtraEnemyDrops','downright','_messageCommonEvents','lineHeight','yes','shift','WRAPJPBREAK','Blcah','_textDelayCount','Guau','Hejdå','fontItalic','MessageWidth','ISQky','setHelpWindow','WORD_WRAP_PADDING','addContinuousShowTextCommands','Window_Message_synchronizeNameBox','vMyWe','SfwTD','isWordWrapEnabled','Chinese(Traditional)','preemptive','setChoiceListLineHeight','outputHeight','getChoiceListMaxRows','#6dcff6','こんにちは','setMessageWindowRows','Norwegian','choiceTextAlign','hide','applyChoiceHelpDescriptions','faceWidth','HIDE','getMessageWindowRows','itemChoiceActorId','ParseSkillNotetags','command101','Skills','addContinuousShowChoices','actorName','substr','qnchn','TextCodeReplace','FontBiggerCap','databaseObjectName','Scene_Message_createChoiceListWindow','GNXpK','splice','isInputting','qMLPZ','PictureTextRefresh','_texts','onProcessCharacter','convertShowChoiceEscapeCodes','push','itemChoiceStypeId','open','down\x20center','ChoiceWindowLineHeight','kfYZQ','Game_Party_gainItem','jqXls','Viszontlátásra','addMessageCoreLocalizationCommand','moveTo','rnnXC','calcMoveEasing','_choiceIndexArray','getColor','parse','Uau','setChoiceListMinChoiceWidth','openLocalizationFolder','dQLEz','changeValue','getChoiceMessageDistance','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','setWordWrap','_wordWrap','contentsHeight','setLastPluginCommandInterpreter','Selamat\x20tinggal','updateBackground','ConfigManager_applyData','Αντίο','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','qnmqw','getChoiceListMaxColumns','_choiceHelpDescriptions','VisuMZ_4_ExtraEnemyDrops\x20needs\x20to\x20be\x20updated\x20','getPictureTextBuffer','updatePictureText','AutoColorRegExp','XEhBE','OffsetX','xUIru','call','vXlhE','parseChoiceText','_messageOffsetY','createContents','EachMessageEnd','updateXyOffsets','messageWidth','ITALIC','battleTargetName','type','adjustShowChoiceDefault','StretchDimmedBg','Hungarian','requestChoiceBackgroundImage','lYbPz','setChoiceListHelpWindow','BOLD','choiceAlignText','drawCustomBackgroundColor','ஆஹா','registerSelfEvent','Languages.csv','obtainEscapeParam','initialize','Spanish','commandSymbol','messagePositionReset','lowerleft','pageup','apply','NameBoxWindowDefaultColor','Window_Options_statusText','MessageRows','battle\x20party','battle\x20actor','TextSpeed','systemColor','blt','JWSzs','LineBreakSpace','initMessageCore','middlecenter','applyData','STRUCT','_moveTargetY','dirname','item','tOQSY','jBZYI','quantity','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','SelectSkill','Hello','Polish','right','attachPictureText','Do\x20widzenia','kVcOs','sort','TextColor','updateRelativePosition','Romanian','WCeGw','FontSmallerCap','VJwmg','drawItemContents','_resetRect','processAutoColorWords','ceil','findTargetSprite','cNVFq','WwcUV','setupEvents','join','VisuMZ_3_ActSeqCamera','setWaitMode','processPxTextCode','getLastPluginCommandInterpreter','gainItem','अलविदा','Ουάου','isColorLocked','changeVolume','getInputButtonString','AdjustRect','contents','Portuguese','States','createPictureText','pink','<%1>','windowX','messageCoreLocalization','Näkemiin','SplitJpCnCharacters','До\x20свидания','_positionType','glAwS','Weapons','EquipTypeID','jhEFQ','#fff799','ConvertTextAutoColorRegExpFriendly','choices','tCEys','Adeus','_moveDuration','convertHardcodedEscapeReplacements','applyMoveEasing','clamp','_pictureId','outLineColor','ActorID','Window_Options_changeVolume','isChoiceEnabled','armor','event','commandName','LineHeight','<B>','MsgWindowOffsetY','close','\x1bCOLORLOCK[0]','ParseWeaponNotetags','Turkish','_target','FontChangeValue','processNewLine','ParseArmorNotetags','createLocalizationCsvFile','_itemChoiceStypeId','GCKBK','TEXTALIGNMENT','terminateMessage','_pictureTextWidth','_relativePosition','itemChoiceItypeId','substring','toUpperCase','Game_Interpreter_PluginCommand','addChoiceDistance','Window_Message_terminateMessage','CENTERPICTURE','_pictureTextWindow','indent','format','setLastGainedItemData','midright','updateTransform','processDrawPicture','_autoSizeRegexp','actor','CreateAutoColorRegExpListEntries','height','convertVariableEscapeCharacters','Please\x20restart\x20the\x20game.','setFaceImage','Bitmap_drawText','ZaZSB','MxHpH','rMnwS','\x1bTEXTALIGNMENT[3]','ODFkP','drawPictureTextZone','drawTextEx','changeTextColor','etypeId','convertButtonAssistText','visuMzTextLocaleStatusText','setSkillChoice','cBsCV','Indonesian','start\x20.\x5cdata','Farewell','Cześć','updateAutoPosition','upleft','ParseAllNotetags','clearActorNameAutoColor','SHOW','innerHeight','bxmMw','followers','processFontChangeItalic','updateForcedPlacement','AutoColor','refresh','Vau','padding','_textColorStack','ConvertParams','FUNC','addMessageCommonEvent','resizePictureText','setBackground','_autoPosRegExp','\x1bI[%1]','Actors','\x1bi[%1]%2','itemHeight','Name','pagedown','yQTYQ','match','MOemk','_pictureTextBuffer','updateDimensions','getMessageWindowWidth','registerCommand','isHelpWindowWordWrap','length','convertButtonAssistEscapeCharacters','qIUUd','black','<LEFT>','SelectArmor','iconIndex','boxHeight','Window_Base_processAllText','YKmEE','resetFontSettings','itemChoiceActor','สวัสดี','processAutoPosition','return\x20\x27','downcenter','prepareWordWrapEscapeCharacters','Type','obtainItem','MsgWindowOffsetX','process_VisuMZ_MessageCore_TextCodes_Replace','boxWidth','MESSAGE_CORE_PLUGIN_NAME','makeData','TextColor%1','Window_ChoiceList_callCancelHandler','বিদায়','updateOffsetPosition','hLbnu','TextMacros','ARRAYSTR','zRGCI','move','_maxShuffleChoices','calcWindowHeight','Arrivederci','Languages','getPictureTextData','Localization','setColorLock','choiceRows','_pictureTextSprite','WordWrap','_dimmerSprite','\x1bWrapBreak[0]','name','_data','TextManager_message','map\x20event','clearPictures','callCancelHandler','ALL','ZezIp','isWeapon','isBreakShowTextCommands','TextAlign','parseLocalizedText','slice','String_format','<WORDWRAP>','nmZJC','wBuVI','center','<BR>','setPictureText','requestPictureTextRefresh','setHelpWindowWordWrap','writeFileSync','FSCJR','width','780409OoHBvc','makeCommandListScriptCall','TextStr','Window_Base_textSizeEx','FastForwardKey','NUM','_index','Danish','updateNameBoxMove','currentExt','_refreshPauseSign','_eventId','midleft','ScfOf','colSpacing','getChoiceListMinChoiceWidth','Window_NameBox_refresh','VisuMZ_1_SkillsStatesCore','clearRect','processWrapBreak','Window_Base_changeTextColor','rjCvz','victory','makeDeepCopy','lastGainedObjectQuantity','choicePositionType','statusText','anchorPictureText','DdKSL','members','blue','fontBold','GWZQq','version','remove','clearAllPictureTexts','prepareForcedPositionEscapeCharacters','maxChoiceWidth','Game_Map_setupEvents','flushTextState','_itemChoiceItypeId','setChoiceListMaxColumns','(((','stretchDimmerSprite','max','green','_pictures','aDzpL','split','ParseClassNotetags','Game_Screen_erasePicture','[0]','Japanese','_pictureTextRefresh','itemBackColor1','autoPositionOffsetY','Hoşça\x20kal','numVisibleRows','ParseItemNotetags','YDslh','setChoiceListTextAlign','forEach','isChoiceWindow','status','QEHFh','addedWidth','qDWvu','MsCsk',')))','drawChoiceLocationImage','Key','ChoiceWindowTextAlign','windowWidth','\x1bCOLORLOCK[1]','weapon','sZoYf','convertFontSettingsEscapeCharacters','isRunning','registerResetRect','helpWordWrap','show','aCYfT','gLpvg','setMessageWindowWordWrap','atvuq','lower\x20right','data/','getStartingChoiceWidth','processActorNameAutoColorChanges','min','WRAPBREAK','AutoColorBypassList','white','getTextAlignment','updateMessageCommonEvents','Adiós','Swedish','isClosed','Items','AddOption','MaxCols','iWbcj','Farvel','cTQvl','prepareShowTextFollowups','map','messageWordWrap','_autoPositionTarget','fCwdo','pHcXv','ParseLocalizationCsv','wXMTf','GET','setText','Window_Base_processNewLine','\x1bBOLD[1]','MLLrK','isVisuMzLocalizationEnabled','upper\x20left','map\x20actor','erasePicture','needsNewPage','Undefined','dimColor2','textSpeedStatusText','autoPositionOffsetX','Szia','TcmBJ','ENABLE','wtypeId','cXYgZ','selectDefault','CommonEvent','CheckCompatibility','_textAlignment','LCPyL','addExtraShowChoices','MwKTc','up\x20right','createChoiceListWindow','NameBoxWindowOffsetY','middleright','PSUKc','IQQcu','MaxRows','jqISh','Game_Map_initialize','index','defaultColor','tqcbJ','Thai','ওহে','isMessageWindowWordWrap','Привет','udaKt','DNnJW','map\x20player','Window_Base_initialize','Window_Message_isTriggered','upper-left','ARRAYFUNC','வணக்கம்','setWeaponChoice','\x1bTEXTALIGNMENT[1]','outputWidth','CSV\x20file\x20has\x20not\x20been\x20made.\x0a','gradientFillRect','normalColor','VisuMZ_1_EventsMoveCore','return\x200','_lastPluginCommandInterpreter','_itemChoiceWtypeId','Sbohem','Window_NameBox_updatePlacement','Scene_Boot_onDatabaseLoaded','easeOut','UNDEFINED!','LVcVC','Hűha','Window_ChoiceList','up\x20left','changePaintOpacity','gbWDs','Yscoc','_messageOffsetX','Greek','emerge','drawBackPicture','processPreviousColor','trim','brown','Hei','Italian','clear','requestPictureTextRefreshAll','nQPaS','Sprite_Picture_updateBitmap','drawTextTopAligned','Russian','changeTextSpeed','IpnEC','729630wKvRjy','isSceneBattle','refreshDimmerBitmap','Vay','\x1bWrapJpBreak[0]','English','PictureTextErase','synchronizeNameBox','Window_Help_refresh','getPictureText','_moveTargetWidth','NKiGr','Window_Options_addGeneralOptions','JoAFr','random','_currentAutoSize','ParseAddedText','stringify','Window_EventItem_includes','Window_Base_processControlCharacter','system','_indent','isSceneMap','Window_MessageLog','isCommandEnabled','convertEscapeCharacters','choiceDistance','WeaponTypeID','Wah','_nameBoxWindow','getCurrentLanguage','qSfZQ','makeSkillList','obtainEscapeString','OffsetY','isAutoColorAffected','canMove','processFontChangeBold','UqdTu','none','choiceMinWidth','RdzbQ','outlineWidth','Armors','textSizeExRaw','itemChoiceAtypeId','loadDatabase','prepareAutoSizeEscapeCharacters','Hindi','requestChoiceForegroundImage','choiceCols','ActionJS','application/csv','convertLockColorsEscapeCharacters','addMessageCoreCommands','#ffc8e0','HcMPD','skill','itemPadding','_action','eraseAllPictureTexts','AeWZg','includes','middleleft','leader','uppercenter','processCommonEvent','DefaultOutlineWidth','Sprite_Picture_update','realPictureId','nextEventCode','clampPlacementPosition','getMessageWindowXyOffsets','AddAutoColor','onLocalizationXhrError','textCodeResult','inputtingAction','_messageWindow','scale','<RIGHT>','</COLORLOCK>','updateAutoSizePosition','onChoice','_interpreter','command357','HouoK','add','44VhzRWQ','filter','nRkIf','wZoXO','updateHelp','erasePictureTextBuffer','some','preFlushTextState','resetPositionX','ExtraEnemyDrops','lower-right','_autoColorActorNames','_itemChoiceEtypeId','Window_Message_processEscapeCharacter','PICTURE','clearCommandList','createTextState','_wholeMoveDuration','upperright','Match','maxCommands','strokeRect','xaxVT','updatePlacement','#ffffff','Salut','down-center','up-left','visible','message','ConfigManager_makeData','MessageWindowXyOffsets','prototype','Default','skills','description','Czech','ParseEnemyNotetags','Chinese(Simplified)','TextCodeActions','\x1bTEXTALIGNMENT','drawing','outlineColor','\x1bTEXTALIGNMENT[0]','AFpsY','isRTL','_colorLock','inBattle','Classes','processColorLock','DataManager_loadDatabase','returnPreservedFontSettings','textWidth','mdVeZ','mainFontFace','setupItemChoice','zoomScale','createChoiceListHelpWindow','Bengali','_moveTargetX','fiaYu','isContinuePrepareShowTextCommands','</CENTER>','preConvertEscapeCharacters','bind','1922400QCmAze','convertMessageCoreEscapeActions','needsPictureTextRefresh','textCodeCheck','convertChoiceMacros','\x1bi[%1]','updateMove','prepareShowTextCommand','ARRAYEVAL','paintOpacity','_pictureText','roRtV','Padding','UHGzW','Ha\x20det','exec','setMessageWindowXyOffsets','down\x20left','Slovak','ajaty','thLhq','SzRJW','callOkHandler','#c69c6d','setTextAlignment','\x1bC[%1]%2\x1bPREVCOLOR[0]','applyDatabaseAutoColor','Good-bye','getLastGainedItemData','processControlCharacter','midcenter','clearChoiceHelpDescriptions','updateOverlappingY','oBSpH','#f26c4f','MessageCore','ARRAYSTRUCT','onNewPageMessageCore','setPositionType','Greeting','getChoiceListTextAlign','setArmorChoice','gUREu','EVAL','getChoiceIndent','setRelativePosition','addMessageCoreTextSpeedCommand','addLoadListener','setChoiceMessageDistance','makeFontSmaller','getSkillTypes','Window_Options_isVolumeSymbol','नमस्ते','ofCYm','left','maxLines','processAllText','TextJS','bFfKG','itemChoiceEtypeId','path','_showFast','_moveEasingType','Game_Map_updateEvents','Would\x20you\x20like\x20the\x20plugin\x20to\x20create\x20the\x20base\x20CSV\x20file?\x0a\x0a','안녕하세요','down-left','addedHeight','lyKNY','code','bEUoT','choiceLineHeight','<I>','_choiceListHelpWindow','_pictureTextHeight','convertTextMacros','Au\x20revoir','convertBaseEscapeCharacters','HMOXI','registerActorNameAutoColorChanges','processDrawCenteredPicture','up-center','changeChoiceBackgroundColor','Game_System_initialize','_centerMessageWindow','isVolumeSymbol','setupChoices','itemRect','switchOutTextForLocalization','update','isBusy','maxShuffleChoices','start','loadLocalization','_textMacroFound','DefaultLocale','resetTextColor','egyYd','processAutoSize','purple','powerDownColor','TightWrap','gray','processEscapeCharacter','map\x20party','さようなら','contentsBack','openness','instantTextSpeed','Scene_Options_maxCommands','SelectWeapon','KIPtX','fontFace','Window_Message_updatePlacement','_textDelay','KKQfL','textLocale','FjOhX','itemRectWithPadding','jdKpI','_list','Window_ItemList_drawItemNumber','NameBoxWindowOffsetX','Вау','hasPictureText','CsvFilename','VisuMZ_0_CoreEngine','SkillTypeID','Game_Interpreter_setupChoices','upperleft','initTextAlignement','changeVisuMzTextLocale','vESmL','Hej','_itemChoiceVariableId','oGcGO','powerUpColor','overrideMimeType','setupShuffleChoices','isClosing','MessageWindow','makeFontBigger','convertNewPageTextStateMacros','isChoiceVisible','UjCbA','_itemChoiceActorId','_lastGainedItemData','default','launchMessageCommonEvent','makeCommandList','lower\x20left','DQvVl','messageCoreWindowX','SortObjectByKeyLength','_scene','RLRgm','up\x20center','Window_Base_processEscapeCharacter','</WORDWRAP>','getRandomTextFromPool','PdMbF','itemChoiceWtypeId','isPressed','General','innerWidth','EndPadding','NRBLz','choiceIndexArray','responseText','Window_ChoiceList_windowX','MinWidth','sNeTf','yellow','isOptionValid','processTextAlignmentX','EachMessageStart','_messagePositionReset','270010itkyPO','STR','send','Hallo','Tot\x20ziens','processStoredAutoColorChanges','escapeStart','Ciao','battle\x20enemy','convertBackslashCharacters','red','textSizeEx','drawItemNumber','convertMessageCoreEscapeReplacements','indexOf','replace','prepareShowTextPluginCommandFollowups','getLocalizedText','floor','process_VisuMZ_MessageCore_TextMacros','_forcedPosition','Hola','windowPadding','CreateAutoColorFor','Rows','isTriggered','updateChoiceListHelpWindowPlacement','faceName','#a186be','_MessageCoreSettings','isSkill','PREVCOLOR','MessageWindowProperties','defeat','getChoiceListLineHeight','activate','anchor','Merhaba','jqKMe','parameters','CreateAutoColorRegExpLists','textSizeExWordWrap','EkQMX','Window_ChoiceList_updatePlacement','toLowerCase','setMessageWindowWidth','WAIT','setup','battleActionName','#707070','German','onDatabaseLoaded','clearFlags','Ahoj','Window_Message_newPage','bCZXf','setChoiceListMaxRows','anyPictureTextChanges'];_0x258c=function(){return _0xfcf980;};return _0x258c();}VisuMZ[label][_0x5c5568(0x375)]=VisuMZ[label][_0x5c5568(0x375)]||{},VisuMZ[_0x5c5568(0x4cb)]=function(_0x5cc656,_0x457137){const _0x4a8fac=_0x5c5568;for(const _0x31e8e7 in _0x457137){if(_0x4a8fac(0x3b7)!==_0x4a8fac(0x231)){if(_0x31e8e7[_0x4a8fac(0x4d8)](/(.*):(.*)/i)){const _0x217aa3=String(RegExp['$1']),_0x1d66b9=String(RegExp['$2'])[_0x4a8fac(0x497)]()[_0x4a8fac(0x199)]();let _0xbf5c2e,_0x391363,_0x906bb0;switch(_0x1d66b9){case _0x4a8fac(0xe1):_0xbf5c2e=_0x457137[_0x31e8e7]!==''?Number(_0x457137[_0x31e8e7]):0x0;break;case _0x4a8fac(0x333):_0x391363=_0x457137[_0x31e8e7]!==''?JSON[_0x4a8fac(0x3f1)](_0x457137[_0x31e8e7]):[],_0xbf5c2e=_0x391363[_0x4a8fac(0x145)](_0x2469e0=>Number(_0x2469e0));break;case _0x4a8fac(0x268):_0xbf5c2e=_0x457137[_0x31e8e7]!==''?eval(_0x457137[_0x31e8e7]):null;break;case _0x4a8fac(0x245):_0x391363=_0x457137[_0x31e8e7]!==''?JSON['parse'](_0x457137[_0x31e8e7]):[],_0xbf5c2e=_0x391363[_0x4a8fac(0x145)](_0x407283=>eval(_0x407283));break;case _0x4a8fac(0x3a5):_0xbf5c2e=_0x457137[_0x31e8e7]!==''?JSON[_0x4a8fac(0x3f1)](_0x457137[_0x31e8e7]):'';break;case'ARRAYJSON':_0x391363=_0x457137[_0x31e8e7]!==''?JSON[_0x4a8fac(0x3f1)](_0x457137[_0x31e8e7]):[],_0xbf5c2e=_0x391363[_0x4a8fac(0x145)](_0x2b0273=>JSON[_0x4a8fac(0x3f1)](_0x2b0273));break;case _0x4a8fac(0x4cc):_0xbf5c2e=_0x457137[_0x31e8e7]!==''?new Function(JSON['parse'](_0x457137[_0x31e8e7])):new Function(_0x4a8fac(0x185));break;case _0x4a8fac(0x17c):_0x391363=_0x457137[_0x31e8e7]!==''?JSON[_0x4a8fac(0x3f1)](_0x457137[_0x31e8e7]):[],_0xbf5c2e=_0x391363['map'](_0x3df39c=>new Function(JSON[_0x4a8fac(0x3f1)](_0x3df39c)));break;case _0x4a8fac(0x2ef):_0xbf5c2e=_0x457137[_0x31e8e7]!==''?String(_0x457137[_0x31e8e7]):'';break;case _0x4a8fac(0x4fd):_0x391363=_0x457137[_0x31e8e7]!==''?JSON['parse'](_0x457137[_0x31e8e7]):[],_0xbf5c2e=_0x391363['map'](_0x18648b=>String(_0x18648b));break;case _0x4a8fac(0x438):_0x906bb0=_0x457137[_0x31e8e7]!==''?JSON[_0x4a8fac(0x3f1)](_0x457137[_0x31e8e7]):{},_0x5cc656[_0x217aa3]={},VisuMZ['ConvertParams'](_0x5cc656[_0x217aa3],_0x906bb0);continue;case _0x4a8fac(0x261):_0x391363=_0x457137[_0x31e8e7]!==''?JSON['parse'](_0x457137[_0x31e8e7]):[],_0xbf5c2e=_0x391363[_0x4a8fac(0x145)](_0x38a817=>VisuMZ[_0x4a8fac(0x4cb)]({},JSON[_0x4a8fac(0x3f1)](_0x38a817)));break;default:continue;}_0x5cc656[_0x217aa3]=_0xbf5c2e;}}else this['onProcessCharacter'](_0x1822b9),_0x274e3b[_0x4a8fac(0x21c)][_0x4a8fac(0x33a)][_0x4a8fac(0x40c)](this,_0x49d565);}return _0x5cc656;},(_0x213663=>{const _0x32149a=_0x5c5568,_0x4fb670=_0x213663[_0x32149a(0x50c)];for(const _0x2238be of dependencies){if(!Imported[_0x2238be]){alert(_0x32149a(0x401)[_0x32149a(0x49e)](_0x4fb670,_0x2238be)),SceneManager['exit']();break;}}const _0x21ccea=_0x213663['description'];if(_0x21ccea[_0x32149a(0x4d8)](/\[Version[ ](.*?)\]/i)){if('KUYoS'!==_0x32149a(0x354))return _0x4fffbf[_0x32149a(0x260)][_0x32149a(0x17a)][_0x32149a(0x40c)](this)||_0x1c7980[_0x32149a(0x2df)](_0x64b11e['MessageCore'][_0x32149a(0x375)][_0x32149a(0x2e0)]['FastForwardKey']);else{const _0x565523=Number(RegExp['$1']);_0x565523!==VisuMZ[label]['version']&&('vXlhE'!==_0x32149a(0x40d)?this[_0x32149a(0x1c5)]():(alert(_0x32149a(0x3f8)[_0x32149a(0x49e)](_0x4fb670,_0x565523)),SceneManager[_0x32149a(0x373)]()));}}if(_0x21ccea[_0x32149a(0x4d8)](/\[Tier[ ](\d+)\]/i)){const _0x281e70=Number(RegExp['$1']);_0x281e70<tier?_0x32149a(0x1fa)===_0x32149a(0x2e3)?(this['initTextAlignement'](),this[_0x32149a(0x33d)](),this[_0x32149a(0x12a)](_0x10f509)):(alert(_0x32149a(0x43f)[_0x32149a(0x49e)](_0x4fb670,_0x281e70,tier)),SceneManager[_0x32149a(0x373)]()):tier=Math[_0x32149a(0x108)](_0x281e70,tier);}VisuMZ[_0x32149a(0x4cb)](VisuMZ[label][_0x32149a(0x375)],_0x213663[_0x32149a(0x315)]);})(pluginData),PluginManager[_0x5c5568(0x4dd)](pluginData[_0x5c5568(0x50c)],'ChoiceWindowDistance',_0x5b07a8=>{const _0x474766=_0x5c5568;VisuMZ[_0x474766(0x4cb)](_0x5b07a8,_0x5b07a8);const _0x8c1feb=Number(_0x5b07a8[_0x474766(0x334)])||0x0;$gameSystem[_0x474766(0x26d)](_0x8c1feb);}),PluginManager['registerCommand'](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x363),_0x49d43a=>{const _0x49a1ab=_0x5c5568;VisuMZ[_0x49a1ab(0x4cb)](_0x49d43a,_0x49d43a);const _0x5744d2=_0x49d43a[_0x49a1ab(0x483)]||$gameSystem[_0x49a1ab(0x310)]()||0x1,_0x2ca305=_0x49d43a[_0x49a1ab(0x2e7)]??0x60,_0x392e4f=_0x49d43a[_0x49a1ab(0x16c)]||$gameSystem[_0x49a1ab(0x3c3)]()||0x1,_0x2de69c=_0x49d43a[_0x49a1ab(0x140)]||$gameSystem[_0x49a1ab(0x403)]()||0x1,_0x528721=_0x49d43a[_0x49a1ab(0xcd)]['toLowerCase']()||_0x49a1ab(0x2d0);$gameSystem['setChoiceListLineHeight'](_0x5744d2),$gameSystem[_0x49a1ab(0x3f3)](_0x2ca305),$gameSystem[_0x49a1ab(0x326)](_0x392e4f),$gameSystem[_0x49a1ab(0x105)](_0x2de69c),$gameSystem['setChoiceListTextAlign'](_0x528721);}),PluginManager[_0x5c5568(0x4dd)](pluginData['name'],_0x5c5568(0x30e),_0x314677=>{const _0x673ae8=_0x5c5568;VisuMZ['ConvertParams'](_0x314677,_0x314677);const _0xa5fca7=_0x314677[_0x673ae8(0x306)]||$gameSystem['getMessageWindowRows']()||0x1,_0xe13dc4=_0x314677['Width']||$gameSystem[_0x673ae8(0x4dc)]()||0x1;$gameTemp[_0x673ae8(0x291)]=!![];const _0x293e9f=_0x314677['WordWrap'][_0x673ae8(0x31a)]();$gameSystem[_0x673ae8(0x3c6)](_0xa5fca7),$gameSystem['setMessageWindowWidth'](_0xe13dc4);if([_0x673ae8(0x33c),'false'][_0x673ae8(0x1e3)](_0x293e9f)){if(_0x673ae8(0x433)===_0x673ae8(0x433))$gameSystem['setMessageWindowWordWrap'](eval(_0x293e9f));else{if(this[_0x673ae8(0x30b)]===_0x1e6741)this['initMessageCore']();if(this['_MessageCoreSettings']['messageWidth']===_0x3e604a)this['initMessageCore']();return this[_0x673ae8(0x30b)][_0x673ae8(0x413)];}}const _0x459163=SceneManager[_0x673ae8(0x2d7)][_0x673ae8(0x1f2)];_0x459163&&(_0x673ae8(0x44b)===_0x673ae8(0x44b)?(_0x459163[_0x673ae8(0x33d)](),_0x459163[_0x673ae8(0x4db)](),_0x459163[_0x673ae8(0x410)]()):(_0x35764c[_0x673ae8(0x1e1)](_0x28cd63),_0x3b9d4b[_0x673ae8(0x201)](_0x417b68)));}),PluginManager['registerCommand'](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x21b),_0x3b04c9=>{const _0x5c2776=_0x5c5568;VisuMZ['ConvertParams'](_0x3b04c9,_0x3b04c9),$gameSystem[_0x5c2776(0x24d)](_0x3b04c9[_0x5c2776(0x40a)],_0x3b04c9[_0x5c2776(0x1c7)]);const _0x512446=SceneManager[_0x5c2776(0x2d7)]['_messageWindow'];_0x512446&&(_0x512446[_0x5c2776(0x33d)](),_0x512446[_0x5c2776(0x4db)](),_0x512446[_0x5c2776(0x410)]());}),PluginManager[_0x5c5568(0x4dd)](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x2ab),_0x25c245=>{const _0x4b0851=_0x5c5568;VisuMZ[_0x4b0851(0x4cb)](_0x25c245,_0x25c245),$gameMessage[_0x4b0851(0x17e)](_0x25c245[_0x4b0851(0x395)]||0x0,_0x25c245[_0x4b0851(0x1c0)]||0x0);const _0x4d38de=$gameTemp[_0x4b0851(0x45a)]();if(_0x4d38de)_0x4d38de['setWaitMode']('message');}),PluginManager[_0x5c5568(0x4dd)](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x4e4),_0x5bf586=>{const _0x742e50=_0x5c5568;VisuMZ['ConvertParams'](_0x5bf586,_0x5bf586),$gameMessage[_0x742e50(0x266)](_0x5bf586[_0x742e50(0x395)]||0x0,_0x5bf586['ArmorTypeID']||0x0,_0x5bf586[_0x742e50(0x470)]||0x0);const _0x541392=$gameTemp[_0x742e50(0x45a)]();if(_0x541392)_0x541392['setWaitMode'](_0x742e50(0x219));}),PluginManager[_0x5c5568(0x4dd)](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x440),_0xb1432c=>{const _0x6881d4=_0x5c5568;VisuMZ[_0x6881d4(0x4cb)](_0xb1432c,_0xb1432c),$gameMessage[_0x6881d4(0x4b6)](_0xb1432c['VariableID']||0x0,_0xb1432c[_0x6881d4(0x47d)]||0x0,_0xb1432c[_0x6881d4(0x2bc)]||0x0);const _0x1ebb15=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1ebb15)_0x1ebb15[_0x6881d4(0x458)]('message');}),PluginManager[_0x5c5568(0x4dd)](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x360),_0x1da83c=>{const _0x4465e0=_0x5c5568;VisuMZ[_0x4465e0(0x4cb)](_0x1da83c,_0x1da83c);const _0x32d739=_0x1da83c['PictureIDs']||[],_0x46e765=_0x1da83c[_0x4465e0(0x249)]||0x0,_0x31ef76=['upperleft','up',_0x4465e0(0x20e),_0x4465e0(0x273),'center',_0x4465e0(0x443),'lowerleft',_0x4465e0(0x3a4),_0x4465e0(0x35c)];for(const _0x51539d of _0x32d739){$gameScreen[_0x4465e0(0x386)](_0x51539d,_0x46e765);for(const _0x4a58c0 of _0x31ef76){if(_0x1da83c[_0x4a58c0]===undefined)continue;$gameScreen['setPictureText'](_0x51539d,_0x1da83c[_0x4a58c0],_0x4a58c0);}}}),PluginManager['registerCommand'](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x1ab),_0x2bdd4c=>{const _0x1e1024=_0x5c5568;VisuMZ[_0x1e1024(0x4cb)](_0x2bdd4c,_0x2bdd4c);const _0xfdd06d=_0x2bdd4c['PictureIDs']||[];for(const _0x2941e8 of _0xfdd06d){$gameScreen[_0x1e1024(0x1e1)](_0x2941e8),$gameScreen[_0x1e1024(0x201)](_0x2941e8);}}),PluginManager[_0x5c5568(0x4dd)](pluginData[_0x5c5568(0x50c)],_0x5c5568(0x3de),_0x41dc17=>{const _0x6613a4=_0x5c5568;$gameScreen[_0x6613a4(0x19e)]();}),VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x18a)]=Scene_Boot[_0x5c5568(0x21c)][_0x5c5568(0x321)],Scene_Boot[_0x5c5568(0x21c)][_0x5c5568(0x321)]=function(){const _0x558244=_0x5c5568;VisuMZ[_0x558244(0x260)]['Scene_Boot_onDatabaseLoaded'][_0x558244(0x40c)](this),VisuMZ[_0x558244(0x260)]['CheckCompatibility'](),this[_0x558244(0x3a7)](),this[_0x558244(0x4f3)](),this[_0x558244(0x301)](),this[_0x558244(0x359)]();},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x161)]=function(){const _0x5336b7=_0x5c5568;if(Imported[_0x5336b7(0x3aa)]&&VisuMZ[_0x5336b7(0x205)][_0x5336b7(0xfd)]<1.09){if('oGcGO'!==_0x5336b7(0x2c4)){if(this[_0x5336b7(0x30b)]===_0x46c81f)this[_0x5336b7(0x435)]();if(this[_0x5336b7(0x30b)]['messageRows']===_0x54353f)this[_0x5336b7(0x435)]();return this['_MessageCoreSettings'][_0x5336b7(0x34b)];}else{let _0x404954='';_0x404954+='VisuMZ_4_ExtraEnemyDrops\x20needs\x20to\x20be\x20updated\x20',_0x404954+=_0x5336b7(0x331),alert(_0x404954),SceneManager[_0x5336b7(0x373)]();}}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x2d6)]=function(_0x648332){const _0x30857c=_0x5c5568,_0x5a2c69=VisuMZ[_0x30857c(0x260)][_0x30857c(0x375)][_0x648332];_0x5a2c69[_0x30857c(0x447)]((_0x370b04,_0x49cce1)=>{const _0x4acb80=_0x30857c;if(!_0x370b04||!_0x49cce1)return-0x1;return _0x49cce1[_0x4acb80(0x20f)][_0x4acb80(0x4df)]-_0x370b04[_0x4acb80(0x20f)][_0x4acb80(0x4df)];});},Scene_Boot[_0x5c5568(0x21c)]['process_VisuMZ_MessageCore_TextCodes_Action']=function(){const _0x595c7a=_0x5c5568;VisuMZ[_0x595c7a(0x260)][_0x595c7a(0x2d6)]('TextCodeActions');for(const _0x519602 of VisuMZ['MessageCore']['Settings']['TextCodeActions']){_0x519602[_0x595c7a(0x20f)]=_0x519602[_0x595c7a(0x20f)][_0x595c7a(0x497)](),_0x519602['textCodeCheck']=new RegExp('\x1b'+_0x519602[_0x595c7a(0x20f)],'gi'),_0x519602[_0x595c7a(0x1f0)]='\x1b'+_0x519602['Match'];if(_0x519602[_0x595c7a(0x4f0)]==='')_0x519602['textCodeResult']+=_0x595c7a(0x10f);}},Scene_Boot[_0x5c5568(0x21c)][_0x5c5568(0x4f3)]=function(){const _0x5875b8=_0x5c5568;VisuMZ[_0x5875b8(0x260)]['SortObjectByKeyLength'](_0x5875b8(0x3d6));for(const _0x407f7e of VisuMZ[_0x5875b8(0x260)][_0x5875b8(0x375)]['TextCodeReplace']){if('RLRgm'===_0x5875b8(0x2d8))_0x407f7e['textCodeCheck']=new RegExp('\x1b'+_0x407f7e[_0x5875b8(0x20f)]+_0x407f7e[_0x5875b8(0x4f0)],'gi'),_0x407f7e[_0x5875b8(0xde)]!==''&&_0x407f7e[_0x5875b8(0xde)]!==_0x5875b8(0x156)?_0x407f7e[_0x5875b8(0x1f0)]=new Function(_0x5875b8(0x4ed)+_0x407f7e[_0x5875b8(0xde)][_0x5875b8(0x2fd)](/\\/g,'\x1b')+'\x27'):_0x407f7e['textCodeResult']=_0x407f7e[_0x5875b8(0x276)];else{const _0x4c031c=_0x535b24['$1'][_0x5875b8(0x10c)](',')[_0x5875b8(0x145)](_0x4e5b69=>_0x1ec8ef(_0x4e5b69)||0x0);for(const _0x5ceff1 of _0x4c031c){if(_0x3d1f32[_0x5875b8(0x38b)](_0x5ceff1))return![];}return!![];}}},Scene_Boot[_0x5c5568(0x21c)]['process_VisuMZ_MessageCore_TextMacros']=function(){const _0x5b98fe=_0x5c5568;for(const _0x1e66d8 of VisuMZ['MessageCore'][_0x5b98fe(0x375)]['TextMacros']){_0x1e66d8[_0x5b98fe(0x240)]=new RegExp('\x5c['+_0x1e66d8['Match']+'\x5c]','gi');if(_0x1e66d8[_0x5b98fe(0xde)]!==''&&_0x1e66d8['TextStr']!==_0x5b98fe(0x156)){let _0x584c73=_0x1e66d8[_0x5b98fe(0xde)];_0x584c73=_0x584c73['replace'](/\\/g,'\x1b'),_0x584c73=_0x584c73[_0x5b98fe(0x2fd)]('\x27','\x5c\x27'),_0x584c73=_0x584c73[_0x5b98fe(0x2fd)]('\x22','\x5c\x22'),_0x1e66d8['textCodeResult']=new Function(_0x5b98fe(0x4ed)+_0x584c73+'\x27');}else _0x1e66d8[_0x5b98fe(0x1f0)]=_0x1e66d8[_0x5b98fe(0x276)];}},Scene_Boot['prototype'][_0x5c5568(0x359)]=function(){const _0x28d1ea=_0x5c5568,_0x1a2499=VisuMZ[_0x28d1ea(0x260)]['Settings'][_0x28d1ea(0x4c6)];!VisuMZ[_0x28d1ea(0x4be)]&&(VisuMZ[_0x28d1ea(0x260)]['AddAutoColor']($dataClasses,_0x1a2499[_0x28d1ea(0x22c)]),VisuMZ['MessageCore']['AddAutoColor']($dataSkills,_0x1a2499[_0x28d1ea(0x3d1)]),VisuMZ[_0x28d1ea(0x260)][_0x28d1ea(0x1ee)]($dataItems,_0x1a2499[_0x28d1ea(0x13e)]),VisuMZ[_0x28d1ea(0x260)][_0x28d1ea(0x1ee)]($dataWeapons,_0x1a2499[_0x28d1ea(0x46f)]),VisuMZ[_0x28d1ea(0x260)]['AddAutoColor']($dataArmors,_0x1a2499[_0x28d1ea(0x1d0)]),VisuMZ['MessageCore'][_0x28d1ea(0x1ee)]($dataEnemies,_0x1a2499['Enemies']),VisuMZ[_0x28d1ea(0x260)][_0x28d1ea(0x1ee)]($dataStates,_0x1a2499[_0x28d1ea(0x464)])),VisuMZ[_0x28d1ea(0x260)]['CreateAutoColorRegExpLists']();},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x137)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x5c5568(0x484),'</B>',_0x5c5568(0x285),'</I>',_0x5c5568(0x4e3),_0x5c5568(0x3a8),_0x5c5568(0x343),_0x5c5568(0x23a),_0x5c5568(0x1f4),'</RIGHT>',_0x5c5568(0x364),_0x5c5568(0x1f5),_0x5c5568(0x106),_0x5c5568(0x120),_0x5c5568(0xd1),_0x5c5568(0x2db),_0x5c5568(0xd5),'<LINE\x20BREAK>',_0x5c5568(0x20a),_0x5c5568(0x49b),_0x5c5568(0x367),_0x5c5568(0x31c),_0x5c5568(0x4c0),_0x5c5568(0x3cc),_0x5c5568(0x15c),'DISABLE','SWITCH',_0x5c5568(0x374),_0x5c5568(0xc9),_0x5c5568(0x398)],VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x1ee)]=function(_0x33bf27,_0x47d016){const _0x4e348e=_0x5c5568;if(_0x47d016<=0x0)return;const _0x3c53cc=_0x33bf27;for(const _0x4d3528 of _0x3c53cc){if(_0x4e348e(0x171)===_0x4e348e(0x127)){const _0x953f10=_0x2f3d86[_0x4e348e(0x112)](),_0x31277f=_0x35a696['dimColor2'](),_0x538d62=_0x1d988b??_0x5c1131[_0x4e348e(0x112)](),_0x43aba4=_0x2c674b??_0x4a69f8,_0x24dfd2=_0x2c89eb['x'],_0x3d9754=_0x183007['y'],_0x55ff30=_0x48bc27[_0x4e348e(0xdb)],_0x1d982c=_0x3d7c1b[_0x4e348e(0x4a6)];this['contentsBack'][_0x4e348e(0x182)](_0x24dfd2,_0x3d9754,_0x55ff30,_0x1d982c,_0x538d62,_0x43aba4,!![]),_0x3319aa&&this['contentsBack'][_0x4e348e(0x182)](_0x24dfd2,_0x3d9754,_0x55ff30,_0x1d982c,_0x953f10,_0x43aba4,!![]),this[_0x4e348e(0x2a7)][_0x4e348e(0x211)](_0x24dfd2,_0x3d9754,_0x55ff30,_0x1d982c,_0x953f10);}else{if(!_0x4d3528)continue;VisuMZ[_0x4e348e(0x260)]['CreateAutoColorFor'](_0x4d3528,_0x47d016);}}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x316)]=function(){const _0x5c937e=_0x5c5568;VisuMZ[_0x5c937e(0x260)][_0x5c937e(0x408)]=[];for(let _0x120108=0x1;_0x120108<=0x1f;_0x120108++){if(_0x5c937e(0x4c2)===_0x5c937e(0x148))return this[_0x5c937e(0x2ce)]||0x0;else{const _0xc5611c=_0x5c937e(0x4f7)[_0x5c937e(0x49e)](_0x120108),_0x1d4636=VisuMZ[_0x5c937e(0x260)][_0x5c937e(0x375)][_0x5c937e(0x4c6)][_0xc5611c];_0x1d4636[_0x5c937e(0x447)]((_0xedaa98,_0x3fa7e2)=>{const _0x30a76a=_0x5c937e;if(!_0xedaa98||!_0x3fa7e2)return-0x1;return _0x3fa7e2['length']-_0xedaa98[_0x30a76a(0x4df)];}),this[_0x5c937e(0x4a5)](_0x1d4636,_0x120108);}}},VisuMZ['MessageCore'][_0x5c5568(0x4a5)]=function(_0x2f1aa6,_0x315f89){const _0x5e8091=_0x5c5568;for(const _0x359153 of _0x2f1aa6){if(_0x5e8091(0x16d)==='BmUvU')return _0x477b47;else{if(_0x359153[_0x5e8091(0x4df)]<=0x0)continue;if(/^\d+$/[_0x5e8091(0x38c)](_0x359153))continue;let _0x4b15e2=VisuMZ[_0x5e8091(0x260)]['ConvertTextAutoColorRegExpFriendly'](_0x359153);if(_0x359153[_0x5e8091(0x4d8)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x3c68f0=new RegExp(_0x4b15e2,'i');else var _0x3c68f0=new RegExp('\x5cb'+_0x4b15e2+'\x5cb','g');VisuMZ[_0x5e8091(0x260)][_0x5e8091(0x408)][_0x5e8091(0x3e2)]([_0x3c68f0,'\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x5e8091(0x49e)](_0x315f89,_0x359153)]);}}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x473)]=function(_0x559a41){const _0x29fc20=_0x5c5568;return _0x559a41=_0x559a41[_0x29fc20(0x2fd)](/(\W)/gi,(_0x2764a7,_0x19450c)=>_0x29fc20(0x36a)[_0x29fc20(0x49e)](_0x19450c)),_0x559a41;},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x10d)]=VisuMZ[_0x5c5568(0x10d)],VisuMZ['ParseClassNotetags']=function(_0x1e9cfa){const _0xbfd16e=_0x5c5568;VisuMZ[_0xbfd16e(0x260)]['ParseClassNotetags'][_0xbfd16e(0x40c)](this,_0x1e9cfa);const _0x59f273=VisuMZ['MessageCore']['Settings'][_0xbfd16e(0x4c6)];VisuMZ[_0xbfd16e(0x260)][_0xbfd16e(0x305)](_0x1e9cfa,_0x59f273[_0xbfd16e(0x22c)]);},VisuMZ['MessageCore'][_0x5c5568(0x3cf)]=VisuMZ[_0x5c5568(0x3cf)],VisuMZ[_0x5c5568(0x3cf)]=function(_0x5cfff0){const _0x2020ff=_0x5c5568;VisuMZ[_0x2020ff(0x260)]['ParseSkillNotetags']['call'](this,_0x5cfff0);const _0xa8fc81=VisuMZ[_0x2020ff(0x260)][_0x2020ff(0x375)][_0x2020ff(0x4c6)];VisuMZ[_0x2020ff(0x260)][_0x2020ff(0x305)](_0x5cfff0,_0xa8fc81['Skills']);},0x7,VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x116)]=VisuMZ['ParseItemNotetags'],VisuMZ[_0x5c5568(0x116)]=function(_0x434a84){const _0x47a92e=_0x5c5568;VisuMZ[_0x47a92e(0x260)]['ParseItemNotetags']['call'](this,_0x434a84);const _0x241bd5=VisuMZ[_0x47a92e(0x260)][_0x47a92e(0x375)][_0x47a92e(0x4c6)];VisuMZ['MessageCore']['CreateAutoColorFor'](_0x434a84,_0x241bd5[_0x47a92e(0x13e)]);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x488)]=VisuMZ[_0x5c5568(0x488)],VisuMZ[_0x5c5568(0x488)]=function(_0x5adbae){const _0x116772=_0x5c5568;VisuMZ[_0x116772(0x260)][_0x116772(0x488)][_0x116772(0x40c)](this,_0x5adbae);const _0x515205=VisuMZ[_0x116772(0x260)][_0x116772(0x375)]['AutoColor'];VisuMZ[_0x116772(0x260)][_0x116772(0x305)](_0x5adbae,_0x515205[_0x116772(0x46f)]);},VisuMZ[_0x5c5568(0x260)]['ParseArmorNotetags']=VisuMZ['ParseArmorNotetags'],VisuMZ['ParseArmorNotetags']=function(_0x15413a){const _0x4751a0=_0x5c5568;VisuMZ['MessageCore']['ParseArmorNotetags'][_0x4751a0(0x40c)](this,_0x15413a);const _0xfce1fa=VisuMZ[_0x4751a0(0x260)]['Settings'][_0x4751a0(0x4c6)];VisuMZ['MessageCore'][_0x4751a0(0x305)](_0x15413a,_0xfce1fa[_0x4751a0(0x1d0)]);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x221)]=VisuMZ[_0x5c5568(0x221)],VisuMZ['ParseEnemyNotetags']=function(_0x2f76cb){const _0x4ef1d2=_0x5c5568;VisuMZ[_0x4ef1d2(0x260)][_0x4ef1d2(0x221)][_0x4ef1d2(0x40c)](this,_0x2f76cb);const _0x1e1eda=VisuMZ[_0x4ef1d2(0x260)][_0x4ef1d2(0x375)]['AutoColor'];VisuMZ[_0x4ef1d2(0x260)]['CreateAutoColorFor'](_0x2f76cb,_0x1e1eda[_0x4ef1d2(0x376)]);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x33e)]=VisuMZ['ParseStateNotetags'],VisuMZ[_0x5c5568(0x33e)]=function(_0x3e2ebc){const _0x4cc741=_0x5c5568;VisuMZ[_0x4cc741(0x260)][_0x4cc741(0x33e)][_0x4cc741(0x40c)](this,_0x3e2ebc);const _0x1fe31c=VisuMZ[_0x4cc741(0x260)][_0x4cc741(0x375)]['AutoColor'];VisuMZ[_0x4cc741(0x260)][_0x4cc741(0x305)](_0x3e2ebc,_0x1fe31c[_0x4cc741(0x464)]);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x305)]=function(_0xeb4aa3,_0x50e8c1){const _0x188bd0=_0x5c5568;if(_0x50e8c1<=0x0)return;const _0x5b8ab6=VisuMZ['MessageCore'][_0x188bd0(0x375)]['AutoColor'][_0x188bd0(0x448)+_0x50e8c1];let _0x45daa0=_0xeb4aa3[_0x188bd0(0x50c)][_0x188bd0(0x199)]();if(/^\d+$/[_0x188bd0(0x38c)](_0x45daa0))return;if(VisuMZ[_0x188bd0(0x260)][_0x188bd0(0x137)][_0x188bd0(0x1e3)](_0x45daa0[_0x188bd0(0x497)]()))return;_0x45daa0=_0x45daa0[_0x188bd0(0x2fd)](/\\I\[(\d+)\]/gi,''),_0x45daa0=_0x45daa0['replace'](/\x1bI\[(\d+)\]/gi,'');if(_0x45daa0[_0x188bd0(0x4df)]<=0x0)return;if(_0x45daa0[_0x188bd0(0x4d8)](/-----/i))return;_0x5b8ab6['push'](_0x45daa0);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x22e)]=DataManager[_0x5c5568(0x1d3)],DataManager[_0x5c5568(0x1d3)]=function(){const _0x107b6e=_0x5c5568;VisuMZ[_0x107b6e(0x260)][_0x107b6e(0x22e)]['call'](this),this[_0x107b6e(0x29a)]();},DataManager[_0x5c5568(0x29a)]=function(){const _0xf0ed3d=_0x5c5568;if(!TextManager[_0xf0ed3d(0x151)]())return;const _0x52e0e2=VisuMZ['MessageCore'][_0xf0ed3d(0x375)]['Localization'],_0x118896=_0x52e0e2[_0xf0ed3d(0x2ba)]||'';if(!_0x118896)return;const _0x479b28='$dataLocalization',_0x45b90f=new XMLHttpRequest(),_0x5b1efe=_0xf0ed3d(0x132)+_0x118896;window[_0x479b28]=null,_0x45b90f[_0xf0ed3d(0x3e4)](_0xf0ed3d(0x14c),_0x5b1efe),_0x45b90f[_0xf0ed3d(0x2c6)](_0xf0ed3d(0x1d9)),_0x45b90f['onload']=()=>this[_0xf0ed3d(0x332)](_0x45b90f,_0x479b28),_0x45b90f['onerror']=()=>this[_0xf0ed3d(0x1ef)](),_0x45b90f[_0xf0ed3d(0x2f0)]();},DataManager[_0x5c5568(0x332)]=function(_0x40699d,_0x343556){const _0x506ff3=_0x5c5568;if(_0x40699d[_0x506ff3(0x11b)]>=0x190)return;const _0x4bdabc=_0x40699d[_0x506ff3(0x2e5)];window[_0x343556]=VisuMZ['MessageCore']['ParseLocalizationCsv'](_0x4bdabc);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x14a)]=function(_0x511717){const _0x6f8d01=_0x5c5568,_0x33dd8b=_0x511717[_0x6f8d01(0x10c)]('\x0a'),_0x204dfa=_0x33dd8b[0x0][_0x6f8d01(0x10c)](';'),_0x17993c={};return _0x33dd8b[_0x6f8d01(0xcf)](0x1)[_0x6f8d01(0x119)](_0x430908=>{const _0x42e72f=_0x6f8d01;if(_0x42e72f(0x409)!==_0x42e72f(0x409))_0x2e5685-=_0x3640f2[_0x42e72f(0x4a6)]+0x8,_0x442642-=this[_0x42e72f(0x4a6)];else{let _0x41e87f=[],_0x4ce6d2='',_0x2b71a6=![];for(let _0x4b31de=0x0;_0x4b31de<_0x430908[_0x42e72f(0x4df)];_0x4b31de++){if(_0x42e72f(0x283)!==_0x42e72f(0xda)){let _0xd640ac=_0x430908[_0x4b31de];if(_0xd640ac==='\x22')_0x42e72f(0xf1)!=='nOSSN'?_0x2b71a6&&_0x430908[_0x4b31de+0x1]==='\x22'?(_0x4ce6d2+=_0xd640ac,_0x4b31de++):_0x2b71a6=!_0x2b71a6:(this['width']=_0xd099a2[_0x42e72f(0x135)](this['width'],_0x4e6e4e['width']),this[_0x42e72f(0x4a6)]=_0x4572dc[_0x42e72f(0x135)](this['height'],_0x364971[_0x42e72f(0x4a6)]));else{if(_0xd640ac===';'&&!_0x2b71a6){if(_0x42e72f(0x314)===_0x42e72f(0x28b)){for(const _0x4a92bc of _0x439680[_0x42e72f(0x260)][_0x42e72f(0x375)][_0x42e72f(0x3d6)]){_0x5eb424[_0x42e72f(0x4d8)](_0x4a92bc[_0x42e72f(0x240)])&&(_0x26f798=_0x5af9a2[_0x42e72f(0x2fd)](_0x4a92bc[_0x42e72f(0x240)],_0x4a92bc['textCodeResult'][_0x42e72f(0x23c)](this)),_0x33ef10=this[_0x42e72f(0x4a7)](_0x3acebd));}return _0x4845c9;}else _0x41e87f[_0x42e72f(0x3e2)](_0x4ce6d2),_0x4ce6d2='';}else{if(_0x42e72f(0x3bd)!==_0x42e72f(0x14b))_0x4ce6d2+=_0xd640ac;else return'';}}}else this[_0x42e72f(0x4b0)](_0x580f66);}if(_0x4ce6d2)_0x41e87f[_0x42e72f(0x3e2)](_0x4ce6d2);const _0xb09d64=_0x41e87f[0x0][_0x42e72f(0x2fd)](/^"|"$/g,'')[_0x42e72f(0x31a)]()[_0x42e72f(0x199)]();_0x17993c[_0xb09d64]=_0x204dfa['slice'](0x1)[_0x42e72f(0x39f)]((_0x1ce0e8,_0xdb2f2f,_0x5a2dc5)=>{const _0x381614=_0x42e72f;return _0x1ce0e8[_0xdb2f2f]=(_0x41e87f[_0x5a2dc5+0x1]||'')[_0x381614(0x2fd)](/^"|"$/g,''),_0x1ce0e8;},{});}}),_0x17993c;},DataManager['onLocalizationXhrError']=function(){const _0x40faf4=_0x5c5568;let _0x21c091='';_0x21c091+='You\x20do\x20not\x20have\x20a\x20language\x20CSV\x20set\x20up.\x0a',_0x21c091+=_0x40faf4(0x27d);if(confirm(_0x21c091))Utils[_0x40faf4(0x2ea)](_0x40faf4(0x38c))?(_0x21c091='CSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.\x0a',alert(_0x21c091),this[_0x40faf4(0x48e)](),this[_0x40faf4(0x3f4)](),_0x21c091=''):_0x21c091=_0x40faf4(0x397);else{if(_0x40faf4(0x2b4)!==_0x40faf4(0x2b2))_0x21c091=_0x40faf4(0x181);else{const _0x50a375=_0x46e526[_0x40faf4(0x36d)](_0x42c786);_0x50a375[_0x40faf4(0x26c)](this[_0x40faf4(0x121)][_0x40faf4(0x23c)](this,_0x9d4e29,![],_0x15ab17,_0x160253,_0x50a375));}}_0x21c091+=_0x40faf4(0x4a8),alert(_0x21c091),SceneManager[_0x40faf4(0x373)]();},DataManager[_0x5c5568(0x48e)]=function(){const _0x2147a9=_0x5c5568,_0x4a4c88=[_0x2147a9(0x122),'English',_0x2147a9(0x236),_0x2147a9(0x222),_0x2147a9(0x3bf),_0x2147a9(0x220),_0x2147a9(0xe3),'Dutch','Finnish','French',_0x2147a9(0x320),_0x2147a9(0x195),_0x2147a9(0x1d5),_0x2147a9(0x419),_0x2147a9(0x4b8),_0x2147a9(0x19c),_0x2147a9(0x110),_0x2147a9(0x38f),_0x2147a9(0x3c7),_0x2147a9(0x442),_0x2147a9(0x463),_0x2147a9(0x44a),_0x2147a9(0x1a2),_0x2147a9(0x24f),_0x2147a9(0x425),_0x2147a9(0x13c),'Tamil',_0x2147a9(0x172),_0x2147a9(0x489)],_0x133bb9=[_0x2147a9(0x264),_0x2147a9(0x441),'হ্যালো','你好','你好','Ahoj',_0x2147a9(0x2c2),_0x2147a9(0x2f1),_0x2147a9(0x19b),'Bonjour','Hallo','Γειά\x20σου',_0x2147a9(0x271),_0x2147a9(0x15a),_0x2147a9(0x39a),_0x2147a9(0x2f5),_0x2147a9(0x3c5),_0x2147a9(0x27e),_0x2147a9(0x19b),_0x2147a9(0x4bb),'Olá',_0x2147a9(0x215),_0x2147a9(0x175),_0x2147a9(0x323),_0x2147a9(0x303),_0x2147a9(0x2c2),_0x2147a9(0x17d),_0x2147a9(0x4eb),_0x2147a9(0x313)],_0x3a1220=[_0x2147a9(0x4ba),_0x2147a9(0x258),_0x2147a9(0x4f9),'再见','再見',_0x2147a9(0x188),_0x2147a9(0x142),_0x2147a9(0x2f2),_0x2147a9(0x46a),_0x2147a9(0x289),'Auf\x20Wiedersehen',_0x2147a9(0x400),_0x2147a9(0x45c),_0x2147a9(0x3ea),_0x2147a9(0x3fd),_0x2147a9(0x502),_0x2147a9(0x2a6),_0x2147a9(0x341),_0x2147a9(0x24b),_0x2147a9(0x445),_0x2147a9(0x476),'La\x20revedere',_0x2147a9(0x46c),'Zbohom',_0x2147a9(0x13b),_0x2147a9(0x3b4),_0x2147a9(0x39b),'ลาก่อน',_0x2147a9(0x114)],_0x55f066=[_0x2147a9(0x351),_0x2147a9(0x351),_0x2147a9(0x173),'哇','哇','Ó',_0x2147a9(0x351),'Wauw',_0x2147a9(0x4c8),_0x2147a9(0x339),_0x2147a9(0x351),_0x2147a9(0x45d),_0x2147a9(0x330),_0x2147a9(0x18e),_0x2147a9(0x1c1),_0x2147a9(0x351),'ワオ','와우','Oi','O',_0x2147a9(0x3f2),_0x2147a9(0x3f2),_0x2147a9(0x2b8),'Ó',_0x2147a9(0x3b3),'Oj',_0x2147a9(0x420),'ว้าว',_0x2147a9(0x1a8)],_0x53f262=[_0x4a4c88,_0x133bb9,_0x3a1220,_0x55f066],_0x4e1bea=_0x53f262[_0x2147a9(0x145)](_0x39639e=>_0x39639e[_0x2147a9(0x456)](';'))[_0x2147a9(0x456)]('\x0a'),_0x396cf7=VisuMZ['MessageCore'][_0x2147a9(0x375)]['Localization'],_0x5b668a=_0x396cf7[_0x2147a9(0x2ba)]||_0x2147a9(0x422),_0x1dc7ed=require(_0x2147a9(0x279)),_0x2635c4=_0x1dc7ed[_0x2147a9(0x43a)](process['mainModule'][_0x2147a9(0x3a1)]),_0x1c71db=_0x1dc7ed[_0x2147a9(0x456)](_0x2635c4,_0x2147a9(0x132)),_0x2707dd=_0x1c71db+_0x5b668a,_0xb08486=require('fs');return _0xb08486[_0x2147a9(0xd9)](_0x2707dd,_0x4e1bea),_0x2707dd;},DataManager[_0x5c5568(0x3f4)]=function(){const _0xe3f97e=_0x5c5568,{exec:_0x5e430b}=require('child_process');_0x5e430b(_0xe3f97e(0x4b9)),_0x5e430b('open\x20.\x5cdata');},SceneManager[_0x5c5568(0x1a6)]=function(){const _0x3679be=_0x5c5568;return this[_0x3679be(0x2d7)]&&this['_scene'][_0x3679be(0x362)]===Scene_Battle;},SceneManager[_0x5c5568(0x1bb)]=function(){const _0xd2603e=_0x5c5568;return this[_0xd2603e(0x2d7)]&&this[_0xd2603e(0x2d7)][_0xd2603e(0x362)]===Scene_Map;},ConfigManager[_0x5c5568(0x2b1)]=VisuMZ[_0x5c5568(0x260)]['Settings'][_0x5c5568(0x505)][_0x5c5568(0x29c)]||_0x5c5568(0x1aa),ConfigManager[_0x5c5568(0x371)]=VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x375)]['TextSpeed']['Default'],VisuMZ['MessageCore'][_0x5c5568(0x21a)]=ConfigManager[_0x5c5568(0x4f6)],ConfigManager[_0x5c5568(0x4f6)]=function(){const _0x50d1e4=_0x5c5568,_0x227240=VisuMZ[_0x50d1e4(0x260)]['ConfigManager_makeData']['call'](this);return TextManager['isVisuMzLocalizationEnabled']()&&(_0x227240[_0x50d1e4(0x2b1)]=this[_0x50d1e4(0x2b1)]),_0x227240['textSpeed']=this[_0x50d1e4(0x371)],_0x227240;},VisuMZ['MessageCore']['ConfigManager_applyData']=ConfigManager[_0x5c5568(0x437)],ConfigManager['applyData']=function(_0x1bf554){const _0x2f914a=_0x5c5568;VisuMZ[_0x2f914a(0x260)][_0x2f914a(0x3ff)][_0x2f914a(0x40c)](this,_0x1bf554);if(TextManager[_0x2f914a(0x151)]()){if('textLocale'in _0x1bf554){if(_0x2f914a(0x2dd)===_0x2f914a(0x453))return _0x4669e9[_0x2f914a(0x403)]();else this[_0x2f914a(0x2b1)]=String(_0x1bf554[_0x2f914a(0x2b1)]);}else{if(_0x2f914a(0x3f5)!==_0x2f914a(0x2ac))this[_0x2f914a(0x2b1)]=VisuMZ[_0x2f914a(0x260)][_0x2f914a(0x375)][_0x2f914a(0x505)][_0x2f914a(0x29c)]||_0x2f914a(0x1aa);else{_0x2c5f43[_0x2f914a(0x260)][_0x2f914a(0x10d)][_0x2f914a(0x40c)](this,_0x211123);const _0x459d8e=_0x5fd383['MessageCore']['Settings'][_0x2f914a(0x4c6)];_0x3cb628[_0x2f914a(0x260)][_0x2f914a(0x305)](_0x18b408,_0x459d8e['Classes']);}}}_0x2f914a(0x371)in _0x1bf554?this[_0x2f914a(0x371)]=Number(_0x1bf554[_0x2f914a(0x371)])[_0x2f914a(0x47a)](0x1,0xb):this[_0x2f914a(0x371)]=VisuMZ['MessageCore']['Settings']['TextSpeed'][_0x2f914a(0x21d)];},TextManager[_0x5c5568(0x469)]=VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x375)][_0x5c5568(0x505)][_0x5c5568(0x4d5)],TextManager[_0x5c5568(0x39c)]=VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x375)][_0x5c5568(0x430)][_0x5c5568(0x4d5)],TextManager['instantTextSpeed']=VisuMZ[_0x5c5568(0x260)]['Settings'][_0x5c5568(0x430)]['Instant'],VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x50e)]=TextManager[_0x5c5568(0x219)],TextManager[_0x5c5568(0x219)]=function(_0x56f57d){const _0x15e4cf=_0x5c5568,_0x54bc4e=[_0x15e4cf(0x35a),_0x15e4cf(0x196),_0x15e4cf(0x3c0),'surprise',_0x15e4cf(0xf2),_0x15e4cf(0x30f),_0x15e4cf(0x2f4),'obtainExp','obtainGold',_0x15e4cf(0x4f1)];let _0x6abf09=VisuMZ[_0x15e4cf(0x260)]['TextManager_message'][_0x15e4cf(0x40c)](this,_0x56f57d);return _0x54bc4e[_0x15e4cf(0x1e3)](_0x56f57d)&&(_0x6abf09=_0x15e4cf(0x2db)+_0x6abf09),_0x6abf09;},TextManager[_0x5c5568(0x151)]=function(){const _0x32ed07=_0x5c5568;return VisuMZ[_0x32ed07(0x260)][_0x32ed07(0x375)]['Localization'][_0x32ed07(0x3a3)];},TextManager[_0x5c5568(0xce)]=function(_0x120776){const _0x51d512=_0x5c5568;if(!this[_0x51d512(0x151)]())return _0x120776;return _0x120776=String(_0x120776)['replace'](/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x5149b,_0x36c915)=>this[_0x51d512(0x2ff)](String(_0x36c915))),_0x120776=String(_0x120776)[_0x51d512(0x2fd)](/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x117662,_0x4dd7ba)=>this['getLocalizedText'](String(_0x4dd7ba))),_0x120776=String(_0x120776)[_0x51d512(0x2fd)](/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x2333cf,_0x3a09fa)=>this[_0x51d512(0x2ff)](String(_0x3a09fa))),_0x120776;},TextManager[_0x5c5568(0x2ff)]=function(_0x202a7e){const _0x186657=_0x5c5568;if(!$dataLocalization)return'';const _0x4e39a4=$dataLocalization[_0x202a7e[_0x186657(0x31a)]()[_0x186657(0x199)]()];if(!_0x4e39a4)return;const _0x5e9948=ConfigManager[_0x186657(0x2b1)]||_0x186657(0x1aa);let _0x42afd2=_0x4e39a4[_0x5e9948]||_0x186657(0x18c);return _0x42afd2=_0x42afd2['replace'](/\\/g,'\x1b'),_0x42afd2=_0x42afd2[_0x186657(0x2fd)](/<SEMI(?:|-COLON|COLON)>/gi,';'),_0x42afd2;},TextManager[_0x5c5568(0x391)]=function(_0x560baa){const _0x319ff7=_0x5c5568;return VisuMZ[_0x319ff7(0x260)][_0x319ff7(0x375)][_0x319ff7(0x505)][_0x560baa]||'';},TextManager[_0x5c5568(0x1c3)]=function(){const _0x1cabb5=_0x5c5568,_0x2d727d=ConfigManager[_0x1cabb5(0x2b1)]||_0x1cabb5(0x1aa);return this[_0x1cabb5(0x391)](_0x2d727d);},TextManager['getLanguageAt']=function(_0x4612e1){const _0x5132b8=_0x5c5568,_0x5d5f93=VisuMZ[_0x5132b8(0x260)][_0x5132b8(0x375)]['Localization'][_0x5132b8(0x503)]||[];let _0x1e37ce=_0x5d5f93[_0x5132b8(0x2fc)](ConfigManager['textLocale']||_0x5132b8(0x1aa));_0x1e37ce+=_0x4612e1;const _0x333797=_0x5d5f93[_0x1e37ce]||'';return this[_0x5132b8(0x391)](_0x333797);},Game_Temp[_0x5c5568(0x21c)][_0x5c5568(0x3fc)]=function(_0xe1aff6){const _0x2badc9=_0x5c5568;this[_0x2badc9(0x186)]=_0xe1aff6;},Game_Temp[_0x5c5568(0x21c)][_0x5c5568(0x45a)]=function(){const _0x31ce0e=_0x5c5568;return this[_0x31ce0e(0x186)];},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x498)]=Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x1f9)],Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x1f9)]=function(_0x5a8be5){const _0x48ec2a=_0x5c5568;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x48ec2a(0x260)]['Game_Interpreter_PluginCommand']['call'](this,_0x5a8be5);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x290)]=Game_System[_0x5c5568(0x21c)][_0x5c5568(0x424)],Game_System[_0x5c5568(0x21c)][_0x5c5568(0x424)]=function(){const _0xfa9c2a=_0x5c5568;VisuMZ[_0xfa9c2a(0x260)][_0xfa9c2a(0x290)]['call'](this),this[_0xfa9c2a(0x435)]();},Game_System['prototype']['initMessageCore']=function(){const _0x21b780=_0x5c5568,_0x4a386a=VisuMZ[_0x21b780(0x260)]['Settings']['General'],_0x1c98aa=VisuMZ[_0x21b780(0x260)]['Settings']['WordWrap'];this[_0x21b780(0x30b)]={'messageRows':_0x4a386a[_0x21b780(0x42d)],'messageWidth':_0x4a386a[_0x21b780(0x3b6)],'messageWordWrap':_0x1c98aa[_0x21b780(0x2c9)],'helpWordWrap':_0x1c98aa['HelpWindow'],'choiceLineHeight':_0x4a386a[_0x21b780(0x3e6)],'choiceMinWidth':_0x4a386a['ChoiceWindowMinWidth']??0x60,'choiceRows':_0x4a386a[_0x21b780(0x39d)],'choiceCols':_0x4a386a['ChoiceWindowMaxCols'],'choiceTextAlign':_0x4a386a[_0x21b780(0x123)],'choiceDistance':0x0},this[_0x21b780(0x194)]===undefined&&(this['_messageOffsetX']=_0x4a386a[_0x21b780(0x4f2)],this[_0x21b780(0x40f)]=_0x4a386a[_0x21b780(0x485)]);},Game_System[_0x5c5568(0x21c)]['getMessageWindowRows']=function(){const _0x3a4af6=_0x5c5568;if(this[_0x3a4af6(0x30b)]===undefined)this[_0x3a4af6(0x435)]();if(this['_MessageCoreSettings'][_0x3a4af6(0x34b)]===undefined)this['initMessageCore']();return this[_0x3a4af6(0x30b)]['messageRows'];},Game_System[_0x5c5568(0x21c)]['setMessageWindowRows']=function(_0x34a981){const _0x2cc5e0=_0x5c5568;if(this[_0x2cc5e0(0x30b)]===undefined)this[_0x2cc5e0(0x435)]();if(this[_0x2cc5e0(0x30b)][_0x2cc5e0(0x34b)]===undefined)this[_0x2cc5e0(0x435)]();this[_0x2cc5e0(0x30b)]['messageRows']=_0x34a981||0x1;},Game_System[_0x5c5568(0x21c)]['getMessageWindowWidth']=function(){const _0x335995=_0x5c5568;if(this[_0x335995(0x30b)]===undefined)this[_0x335995(0x435)]();if(this[_0x335995(0x30b)][_0x335995(0x413)]===undefined)this['initMessageCore']();return this[_0x335995(0x30b)][_0x335995(0x413)];},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x31b)]=function(_0x2b9759){const _0x302c16=_0x5c5568;if(this[_0x302c16(0x30b)]===undefined)this[_0x302c16(0x435)]();if(this[_0x302c16(0x30b)][_0x302c16(0x413)]===undefined)this[_0x302c16(0x435)]();_0x2b9759=Math['ceil'](_0x2b9759);if(_0x2b9759%0x2!==0x0)_0x2b9759+=0x1;this[_0x302c16(0x30b)][_0x302c16(0x413)]=_0x2b9759||0x2;},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x174)]=function(){const _0x3ea479=_0x5c5568;if(this[_0x3ea479(0x30b)]===undefined)this[_0x3ea479(0x435)]();if(this[_0x3ea479(0x30b)][_0x3ea479(0x146)]===undefined)this[_0x3ea479(0x435)]();return this[_0x3ea479(0x30b)][_0x3ea479(0x146)];},Game_System['prototype'][_0x5c5568(0x12f)]=function(_0x1e6789){const _0x3174c0=_0x5c5568;if(this[_0x3174c0(0x30b)]===undefined)this[_0x3174c0(0x435)]();if(this['_MessageCoreSettings'][_0x3174c0(0x146)]===undefined)this['initMessageCore']();this[_0x3174c0(0x30b)]['messageWordWrap']=_0x1e6789;},Game_System['prototype'][_0x5c5568(0x1ed)]=function(){const _0x16710f=_0x5c5568;if(this['_messageOffsetX']===undefined){if(_0x16710f(0x471)===_0x16710f(0x325)){this[_0x16710f(0x207)]===_0x119d71&&this['registerActorNameAutoColorChanges']();for(_0x5229e5 of this[_0x16710f(0x207)]){_0xe237b6=_0x5a370d['replace'](_0x34d9e8[0x0],_0xe0ccc1[0x1]);}return _0x180158;}else{const _0x47f723=VisuMZ['MessageCore'][_0x16710f(0x375)][_0x16710f(0x2e0)];this[_0x16710f(0x194)]=_0x47f723['MsgWindowOffsetX'],this[_0x16710f(0x40f)]=_0x47f723[_0x16710f(0x485)];}}return{'x':this['_messageOffsetX']||0x0,'y':this[_0x16710f(0x40f)]||0x0};},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x24d)]=function(_0x4a7b32,_0x5a39dd){const _0xa9d954=_0x5c5568;if(this['_MessageCoreSettings']===undefined)this[_0xa9d954(0x435)]();this[_0xa9d954(0x194)]=_0x4a7b32,this[_0xa9d954(0x40f)]=_0x5a39dd;},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x4de)]=function(){const _0x137967=_0x5c5568;if(this[_0x137967(0x30b)]===undefined)this['initMessageCore']();if(this[_0x137967(0x30b)]['helpWordWrap']===undefined)this['initMessageCore']();return this[_0x137967(0x30b)]['helpWordWrap'];},Game_System[_0x5c5568(0x21c)][_0x5c5568(0xd8)]=function(_0x4a6948){const _0x2a2a4b=_0x5c5568;if(this[_0x2a2a4b(0x30b)]===undefined)this[_0x2a2a4b(0x435)]();if(this[_0x2a2a4b(0x30b)][_0x2a2a4b(0x12b)]===undefined)this[_0x2a2a4b(0x435)]();this['_MessageCoreSettings'][_0x2a2a4b(0x12b)]=_0x4a6948;},Game_System['prototype'][_0x5c5568(0x310)]=function(){const _0x436ee1=_0x5c5568;if(this[_0x436ee1(0x30b)]===undefined)this[_0x436ee1(0x435)]();if(this[_0x436ee1(0x30b)][_0x436ee1(0x284)]===undefined)this['initMessageCore']();return this[_0x436ee1(0x30b)][_0x436ee1(0x284)];},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x3c1)]=function(_0x123187){const _0x365ae2=_0x5c5568;if(this[_0x365ae2(0x30b)]===undefined)this['initMessageCore']();if(this[_0x365ae2(0x30b)]['choiceLineHeight']===undefined)this[_0x365ae2(0x435)]();this[_0x365ae2(0x30b)][_0x365ae2(0x284)]=_0x123187||0x1;},Game_System['prototype']['getChoiceListMinChoiceWidth']=function(){const _0x5f09dd=_0x5c5568;if(this[_0x5f09dd(0x30b)]===undefined)this[_0x5f09dd(0x435)]();return this[_0x5f09dd(0x30b)][_0x5f09dd(0x1cd)]??0x60;},Game_System['prototype']['setChoiceListMinChoiceWidth']=function(_0x20455f){const _0x515b40=_0x5c5568;if(this[_0x515b40(0x30b)]===undefined)this['initMessageCore']();this['_MessageCoreSettings'][_0x515b40(0x1cd)]=_0x20455f||0x0;},Game_System[_0x5c5568(0x21c)]['getChoiceListMaxRows']=function(){const _0x42a1c9=_0x5c5568;if(this[_0x42a1c9(0x30b)]===undefined)this[_0x42a1c9(0x435)]();if(this[_0x42a1c9(0x30b)]['choiceRows']===undefined)this[_0x42a1c9(0x435)]();return this[_0x42a1c9(0x30b)][_0x42a1c9(0x507)];},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x326)]=function(_0x49ff8f){const _0x29e326=_0x5c5568;if(this[_0x29e326(0x30b)]===undefined)this[_0x29e326(0x435)]();if(this[_0x29e326(0x30b)]['choiceRows']===undefined)this[_0x29e326(0x435)]();this[_0x29e326(0x30b)][_0x29e326(0x507)]=_0x49ff8f||0x1;},Game_System['prototype'][_0x5c5568(0x403)]=function(){const _0x220a5a=_0x5c5568;if(this[_0x220a5a(0x30b)]===undefined)this[_0x220a5a(0x435)]();if(this[_0x220a5a(0x30b)][_0x220a5a(0x1d7)]===undefined)this[_0x220a5a(0x435)]();return this[_0x220a5a(0x30b)]['choiceCols'];},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x105)]=function(_0x332e53){const _0x4d8d02=_0x5c5568;if(this[_0x4d8d02(0x30b)]===undefined)this[_0x4d8d02(0x435)]();if(this[_0x4d8d02(0x30b)][_0x4d8d02(0x1d7)]===undefined)this[_0x4d8d02(0x435)]();this[_0x4d8d02(0x30b)]['choiceCols']=_0x332e53||0x1;},Game_System['prototype'][_0x5c5568(0x265)]=function(){const _0x3a338f=_0x5c5568;if(this[_0x3a338f(0x30b)]===undefined)this['initMessageCore']();if(this[_0x3a338f(0x30b)][_0x3a338f(0x3c8)]===undefined)this[_0x3a338f(0x435)]();return this[_0x3a338f(0x30b)][_0x3a338f(0x3c8)];},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x118)]=function(_0x322863){const _0x4cf928=_0x5c5568;if(this[_0x4cf928(0x30b)]===undefined)this[_0x4cf928(0x435)]();if(this[_0x4cf928(0x30b)]['choiceTextAlign']===undefined)this[_0x4cf928(0x435)]();this['_MessageCoreSettings'][_0x4cf928(0x3c8)]=_0x322863[_0x4cf928(0x31a)]();},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x3f7)]=function(){const _0x4d299e=_0x5c5568;if(this[_0x4d299e(0x30b)]===undefined)this['initMessageCore']();return this['_MessageCoreSettings'][_0x4d299e(0x1bf)]||0x0;},Game_System[_0x5c5568(0x21c)][_0x5c5568(0x26d)]=function(_0x255c37){const _0x40feb5=_0x5c5568;if(this[_0x40feb5(0x30b)]===undefined)this[_0x40feb5(0x435)]();this[_0x40feb5(0x30b)][_0x40feb5(0x1bf)]=_0x255c37||0x0;},Game_Message['prototype']['setWeaponChoice']=function(_0x358958,_0x430d52){const _0x235c0c=_0x5c5568;this['_itemChoiceVariableId']=_0x358958,this['_itemChoiceItypeId']=_0x235c0c(0x126),this[_0x235c0c(0x187)]=_0x430d52,this[_0x235c0c(0x208)]=0x0;},Game_Message['prototype']['itemChoiceWtypeId']=function(){return this['_itemChoiceWtypeId']||0x0;},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x266)]=function(_0x227fb5,_0x343793,_0x37d102){const _0x2d0525=_0x5c5568;this[_0x2d0525(0x2c3)]=_0x227fb5,this[_0x2d0525(0x104)]=_0x2d0525(0x480),this['_itemChoiceAtypeId']=_0x343793,this['_itemChoiceEtypeId']=_0x37d102;},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x1d2)]=function(){const _0x104845=_0x5c5568;return this[_0x104845(0x32b)]||0x0;},Game_Message['prototype'][_0x5c5568(0x278)]=function(){const _0x4d9acc=_0x5c5568;return this[_0x4d9acc(0x208)]||0x0;},Game_Message[_0x5c5568(0x21c)]['setSkillChoice']=function(_0x383e1e,_0x576482,_0x516ddd){const _0x358b7a=_0x5c5568;this[_0x358b7a(0x2c3)]=_0x383e1e,this[_0x358b7a(0x104)]=_0x358b7a(0x1de),this[_0x358b7a(0x2ce)]=_0x576482,this[_0x358b7a(0x48f)]=_0x516ddd;},Game_Message['prototype'][_0x5c5568(0x3ce)]=function(){const _0x7d9165=_0x5c5568;return this[_0x7d9165(0x2ce)]||0x0;},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x4ea)]=function(){const _0x5259ef=_0x5c5568;return $gameActors[_0x5259ef(0x4a4)](this[_0x5259ef(0x3ce)]())||$gameParty[_0x5259ef(0x1e5)]()||null;},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x3e3)]=function(){return this['_itemChoiceStypeId']||0x0;},VisuMZ[_0x5c5568(0x260)]['Game_Message_setChoices']=Game_Message['prototype'][_0x5c5568(0x340)],Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x340)]=function(_0x59cc18,_0x3e1243,_0x188e6a){const _0x4fceae=_0x5c5568;this['_scriptCall']=!![],VisuMZ[_0x4fceae(0x260)][_0x4fceae(0x394)]['call'](this,_0x59cc18,_0x3e1243,_0x188e6a);},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x2c7)]=function(){const _0x195838=_0x5c5568;this[_0x195838(0x348)]=![],this[_0x195838(0x3ef)]=[];const _0x20b354=this[_0x195838(0x383)][_0x195838(0x4df)];this[_0x195838(0x500)]=_0x20b354;let _0x374f70=![];for(let _0x5e6bda=0x0;_0x5e6bda<_0x20b354;_0x5e6bda++){if('mQGJK'!=='mQGJK')_0x71f958['text']=this['prepareWordWrapEscapeCharacters'](_0x482520['text']),this['_macroBypassWordWrap']=!![];else{let _0x380280=this[_0x195838(0x383)][_0x5e6bda];if(_0x380280[_0x195838(0x4d8)](/<SHUFFLE>/gi)){if(_0x195838(0x3e7)===_0x195838(0x46e))return'\x1bC[%1]%2\x1bPREVCOLOR[0]'['format'](_0x40c350,_0x50064e);else _0x374f70=!![],_0x380280=_0x380280[_0x195838(0x2fd)](/<SHUFFLE>/gi,'');}_0x380280[_0x195838(0x4d8)](/<SHUFFLE:[ ](\d+)>/gi)&&(_0x374f70=!![],this[_0x195838(0x500)]=Math[_0x195838(0x135)](Number(RegExp['$1']),this['_maxShuffleChoices']),_0x380280=_0x380280[_0x195838(0x2fd)](/<SHUFFLE:[ ](\d+)>/gi,'')),this[_0x195838(0x3ef)]['push'](_0x5e6bda),this[_0x195838(0x383)][_0x5e6bda]=_0x380280;}}if(_0x374f70){if('rxxfd'!==_0x195838(0x192)){this[_0x195838(0x3ef)]=VisuMZ[_0x195838(0x260)][_0x195838(0x350)](this[_0x195838(0x3ef)]);if(this['choiceCancelType']()!==-0x2)this[_0x195838(0x37a)]=-0x1;}else this[_0x195838(0x2fe)](_0x2c1626);}},VisuMZ[_0x5c5568(0x260)]['ShuffleArray']=function(_0x248838){const _0x23c871=_0x5c5568;var _0x52e9df,_0x4f4c2b,_0x43a0b0;for(_0x43a0b0=_0x248838[_0x23c871(0x4df)]-0x1;_0x43a0b0>0x0;_0x43a0b0--){_0x52e9df=Math[_0x23c871(0x300)](Math[_0x23c871(0x1b3)]()*(_0x43a0b0+0x1)),_0x4f4c2b=_0x248838[_0x43a0b0],_0x248838[_0x43a0b0]=_0x248838[_0x52e9df],_0x248838[_0x52e9df]=_0x4f4c2b;}return _0x248838;},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x2e4)]=function(){const _0x10b333=_0x5c5568;if(!this[_0x10b333(0x3ef)])this[_0x10b333(0x2c7)]();return this['_choiceIndexArray'];},Game_Message[_0x5c5568(0x21c)][_0x5c5568(0x298)]=function(){const _0x3eaaac=_0x5c5568;if(this[_0x3eaaac(0x500)]===undefined)this[_0x3eaaac(0x2c7)]();return this[_0x3eaaac(0x500)];},VisuMZ['MessageCore']['Game_Screen_clearPictures']=Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x510)],Game_Screen[_0x5c5568(0x21c)]['clearPictures']=function(){const _0x202ebb=_0x5c5568;VisuMZ[_0x202ebb(0x260)]['Game_Screen_clearPictures'][_0x202ebb(0x40c)](this),this['clearAllPictureTexts']();},Game_Screen['prototype']['clearAllPictureTexts']=function(){const _0xddcca9=_0x5c5568;this['_pictureText']=[],this[_0xddcca9(0x4da)]=[],this['_pictureTextRefresh']=[];},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x504)]=function(_0x3abdc0){const _0x1a6a68=_0x5c5568;if(this['_pictureText']===undefined)this['clearAllPictureTexts']();const _0x34cd25=this[_0x1a6a68(0x1ea)](_0x3abdc0);return this[_0x1a6a68(0x247)][_0x34cd25]=this[_0x1a6a68(0x247)][_0x34cd25]||{},this[_0x1a6a68(0x247)][_0x34cd25];},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x1ae)]=function(_0x4598c3,_0x20fdcd){const _0x243e2d=_0x5c5568;return _0x20fdcd=_0x20fdcd[_0x243e2d(0x31a)]()[_0x243e2d(0x199)](),this[_0x243e2d(0x504)](_0x4598c3)[_0x20fdcd]||'';},Game_Screen['prototype'][_0x5c5568(0xd6)]=function(_0x554d8d,_0x1d0d87,_0x48a079){const _0x2bb95d=_0x5c5568;_0x48a079=_0x48a079[_0x2bb95d(0x31a)]()[_0x2bb95d(0x199)](),this[_0x2bb95d(0x504)](_0x554d8d)[_0x48a079]=_0x1d0d87||'',this[_0x2bb95d(0xd7)](_0x554d8d,!![]);},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x1e1)]=function(_0x59c8b2){const _0x4dad6a=_0x5c5568;if(this[_0x4dad6a(0x247)]===undefined)this['clearAllPictureTexts']();const _0x14dac8=this[_0x4dad6a(0x1ea)](_0x59c8b2);this[_0x4dad6a(0x247)][_0x14dac8]=null,this[_0x4dad6a(0xd7)](_0x59c8b2,!![]);},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x406)]=function(_0x560d99){const _0x3aba82=_0x5c5568;if(this[_0x3aba82(0x247)]===undefined)this['clearAllPictureTexts']();const _0x2390e0=this[_0x3aba82(0x1ea)](_0x560d99);return this[_0x3aba82(0x4da)][_0x2390e0]||0x0;},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x386)]=function(_0x285deb,_0x516fc2){const _0x23eedb=_0x5c5568;if(this['_pictureText']===undefined)this['clearAllPictureTexts']();const _0x50bb32=this[_0x23eedb(0x1ea)](_0x285deb);this['_pictureTextBuffer'][_0x50bb32]=Math[_0x23eedb(0x108)](0x0,_0x516fc2);},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x201)]=function(_0x6806e6){const _0x484801=_0x5c5568;if(this[_0x484801(0x247)]===undefined)this[_0x484801(0xff)]();const _0x45bcde=this['realPictureId'](_0x6806e6);this[_0x484801(0x4da)][_0x45bcde]=undefined;},VisuMZ[_0x5c5568(0x260)]['Game_Screen_erasePicture']=Game_Screen['prototype']['erasePicture'],Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x154)]=function(_0x26dce0){const _0x240d8d=_0x5c5568;VisuMZ['MessageCore'][_0x240d8d(0x10e)][_0x240d8d(0x40c)](this,_0x26dce0),this[_0x240d8d(0x1e1)](_0x26dce0),this[_0x240d8d(0x201)](_0x26dce0),this[_0x240d8d(0xd7)](_0x26dce0,!![]);},Game_Screen[_0x5c5568(0x21c)]['requestPictureTextRefreshAll']=function(){const _0x423bcd=_0x5c5568;for(const _0x3b8c4b of this[_0x423bcd(0x10a)]){if(_0x423bcd(0x36c)===_0x423bcd(0x36c)){if(_0x3b8c4b){let _0x1da108=this[_0x423bcd(0x10a)][_0x423bcd(0x2fc)](_0x3b8c4b);this[_0x423bcd(0xd7)](_0x1da108);}}else this[_0x423bcd(0x381)][_0x423bcd(0x19d)](),this[_0x423bcd(0x381)]['hide']();}},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0xd7)]=function(_0x1a6f0f,_0x46a429){const _0xbd854b=_0x5c5568;this[_0xbd854b(0x111)]=this['_pictureTextRefresh']||[],(this[_0xbd854b(0x2b9)](_0x1a6f0f)||_0x46a429)&&this[_0xbd854b(0x111)][_0xbd854b(0x3e2)](_0x1a6f0f);},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x23f)]=function(_0x1eb738){const _0x21cdc8=_0x5c5568;return this[_0x21cdc8(0x111)]=this[_0x21cdc8(0x111)]||[],this['_pictureTextRefresh'][_0x21cdc8(0x1e3)](_0x1eb738);},Game_Screen[_0x5c5568(0x21c)]['clearPictureTextRefresh']=function(_0x2764ca){const _0x689380=_0x5c5568;this['_pictureTextRefresh']=this[_0x689380(0x111)]||[],this['_pictureTextRefresh']['remove'](_0x2764ca);},Game_Screen[_0x5c5568(0x21c)][_0x5c5568(0x2b9)]=function(_0x4fd0a2){const _0x5486a0=_0x5c5568,_0x46fa3f=[_0x5486a0(0x2be),'up',_0x5486a0(0x20e),_0x5486a0(0x273),_0x5486a0(0xd4),'right',_0x5486a0(0x428),'down',_0x5486a0(0x35c)];return _0x46fa3f[_0x5486a0(0x202)](_0x1498ab=>this[_0x5486a0(0x1ae)](_0x4fd0a2,_0x1498ab)!=='');},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x35e)]=Game_Party['prototype']['initialize'],Game_Party[_0x5c5568(0x21c)][_0x5c5568(0x424)]=function(){const _0x61761a=_0x5c5568;VisuMZ[_0x61761a(0x260)]['Game_Party_initialize'][_0x61761a(0x40c)](this),this[_0x61761a(0x435)]();},Game_Party[_0x5c5568(0x21c)][_0x5c5568(0x435)]=function(){const _0xa571ce=_0x5c5568;this[_0xa571ce(0x2cf)]={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party['prototype']['getLastGainedItemData']=function(){const _0x394ae9=_0x5c5568;if(this[_0x394ae9(0x2cf)]===undefined)this['initMessageCore']();return this[_0x394ae9(0x2cf)];},Game_Party['prototype'][_0x5c5568(0x49f)]=function(_0xc9da1a,_0xcd9e22){const _0x3c5b21=_0x5c5568;if(this['_lastGainedItemData']===undefined)this[_0x3c5b21(0x435)]();if(!_0xc9da1a)return;if(DataManager['isItem'](_0xc9da1a))this['_lastGainedItemData']['type']=0x0;else{if(DataManager[_0x3c5b21(0xcb)](_0xc9da1a)){if(_0x3c5b21(0x3bc)===_0x3c5b21(0x3bc))this['_lastGainedItemData']['type']=0x1;else return this['_wordWrap']=_0x52e005,'';}else DataManager['isArmor'](_0xc9da1a)&&(this[_0x3c5b21(0x2cf)]['type']=0x2);}this['_lastGainedItemData']['id']=_0xc9da1a['id'],this[_0x3c5b21(0x2cf)][_0x3c5b21(0x43e)]=_0xcd9e22;},VisuMZ[_0x5c5568(0x260)]['Game_Party_gainItem']=Game_Party[_0x5c5568(0x21c)][_0x5c5568(0x45b)],Game_Party['prototype'][_0x5c5568(0x45b)]=function(_0x20d3a6,_0x43cff5,_0x1d16cf){const _0x13dce5=_0x5c5568;VisuMZ[_0x13dce5(0x260)][_0x13dce5(0x3e8)][_0x13dce5(0x40c)](this,_0x20d3a6,_0x43cff5,_0x1d16cf),_0x43cff5>0x0&&this[_0x13dce5(0x49f)](_0x20d3a6,_0x43cff5);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x16e)]=Game_Map['prototype'][_0x5c5568(0x424)],Game_Map[_0x5c5568(0x21c)][_0x5c5568(0x424)]=function(){const _0x36ddb2=_0x5c5568;VisuMZ[_0x36ddb2(0x260)][_0x36ddb2(0x16e)][_0x36ddb2(0x40c)](this),this[_0x36ddb2(0x3ac)]=[];},VisuMZ[_0x5c5568(0x260)]['Game_Map_setupEvents']=Game_Map[_0x5c5568(0x21c)][_0x5c5568(0x455)],Game_Map[_0x5c5568(0x21c)]['setupEvents']=function(){const _0x36c344=_0x5c5568;VisuMZ[_0x36c344(0x260)][_0x36c344(0x102)][_0x36c344(0x40c)](this),this[_0x36c344(0x3ac)]=[];},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x27c)]=Game_Map[_0x5c5568(0x21c)][_0x5c5568(0x34d)],Game_Map[_0x5c5568(0x21c)]['updateEvents']=function(){const _0xd32c56=_0x5c5568;VisuMZ[_0xd32c56(0x260)][_0xd32c56(0x27c)][_0xd32c56(0x40c)](this),this['updateMessageCommonEvents']();},Game_Map['prototype'][_0x5c5568(0x4cd)]=function(_0x1174c8){const _0xfd57de=_0x5c5568;if(!$dataCommonEvents[_0x1174c8])return;this[_0xfd57de(0x3ac)]=this['_messageCommonEvents']||[];const _0x32001d=this[_0xfd57de(0x1f8)][_0xfd57de(0xe7)],_0xb89944=new Game_MessageCommonEvent(_0x1174c8,_0x32001d);this[_0xfd57de(0x3ac)]['push'](_0xb89944);},Game_Map[_0x5c5568(0x21c)][_0x5c5568(0x13a)]=function(){const _0x16384c=_0x5c5568;this['_messageCommonEvents']=this['_messageCommonEvents']||[];for(const _0x2e904f of this[_0x16384c(0x3ac)]){!_0x2e904f['_interpreter']?this[_0x16384c(0x3ac)][_0x16384c(0xfe)](_0x2e904f):_0x16384c(0x252)==='EJCbC'?_0x2822be>=0x0?this['y']-=_0x5b6ebf:this['y']=_0x30a309[_0x16384c(0x300)]((_0x141d1f-this['height']-_0x696265)/0x2):_0x2e904f[_0x16384c(0x296)]();}},VisuMZ['MessageCore']['Game_Map_refresh']=Game_Map[_0x5c5568(0x21c)][_0x5c5568(0x4c7)],Game_Map['prototype'][_0x5c5568(0x4c7)]=function(){const _0x33f625=_0x5c5568;VisuMZ['MessageCore']['Game_Map_refresh'][_0x33f625(0x40c)](this),$gameScreen[_0x33f625(0x19e)]();},Game_Interpreter['MESSAGE_CORE_PLUGIN_NAME']=pluginData[_0x5c5568(0x50c)],Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x3d0)]=function(_0x1ca3fd){const _0x1ce1d2=_0x5c5568;if($gameMessage[_0x1ce1d2(0x297)]())return![];return this['prepareShowTextCommand'](_0x1ca3fd),this[_0x1ce1d2(0x3ba)](_0x1ca3fd),this['prepareShowTextFollowups'](_0x1ca3fd),this[_0x1ce1d2(0x458)]('message'),!![];},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x244)]=function(_0x445b2a){const _0x23e867=_0x5c5568;$gameMessage[_0x23e867(0x4a9)](_0x445b2a[0x0],_0x445b2a[0x1]),$gameMessage[_0x23e867(0x4cf)](_0x445b2a[0x2]),$gameMessage[_0x23e867(0x263)](_0x445b2a[0x3]),$gameMessage['setSpeakerName'](_0x445b2a[0x4]);},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x3ba)]=function(_0x189496){const _0x12ed56=_0x5c5568;while(this['isContinuePrepareShowTextCommands']()){this['_index']++;if(this['currentCommand']()[_0x12ed56(0x282)]===0x191){let _0x2c28ed=this[_0x12ed56(0x355)]()[_0x12ed56(0x315)][0x0];_0x2c28ed=VisuMZ[_0x12ed56(0x260)][_0x12ed56(0x1b5)](_0x2c28ed),$gameMessage[_0x12ed56(0x1fb)](_0x2c28ed);}if(this[_0x12ed56(0xcc)]())break;}},Game_Interpreter['prototype'][_0x5c5568(0x239)]=function(){const _0x1e1d57=_0x5c5568;return this[_0x1e1d57(0x1eb)]()===0x65&&$gameSystem['getMessageWindowRows']()>0x4?!![]:'nupbB'!==_0x1e1d57(0x3da)?this[_0x1e1d57(0x1eb)]()===0x191:!![];},VisuMZ['MessageCore'][_0x5c5568(0x1b5)]=function(_0x4b6362){const _0x5dd2dc=_0x5c5568,_0x141c8f=VisuMZ['MessageCore'][_0x5dd2dc(0x375)][_0x5dd2dc(0x2e0)];return _0x4b6362=(_0x141c8f[_0x5dd2dc(0x2ec)]||'')+_0x4b6362+(_0x141c8f[_0x5dd2dc(0x411)]||''),_0x4b6362=_0x4b6362[_0x5dd2dc(0x2fd)](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x4b6362=_0x4b6362[_0x5dd2dc(0x2fd)](/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi,(_0x4fd37a,_0xf869e8)=>this[_0x5dd2dc(0x2dc)](_0xf869e8)),_0x4b6362;},VisuMZ[_0x5c5568(0x260)]['getRandomTextFromPool']=function(_0x597b60){const _0x1240d8=_0x5c5568,_0x4f94ef=_0x597b60[_0x1240d8(0x10c)]('|')['map'](_0x1d2dd3=>_0x1d2dd3['trim']())['remove']('')[_0x1240d8(0xfe)](null);return _0x4f94ef[Math['randomInt'](_0x4f94ef[_0x1240d8(0x4df)])];},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0xcc)]=function(){const _0x4144f7=_0x5c5568;if(this[_0x4144f7(0x355)]()&&this['currentCommand']()[_0x4144f7(0x315)][0x0][_0x4144f7(0x4d8)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0x4144f7(0x3df)][_0x4144f7(0x4df)]>=$gameSystem[_0x4144f7(0x3cd)]()&&this[_0x4144f7(0x1eb)]()!==0x191;},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x144)]=function(_0x3d9669){const _0x4a631a=_0x5c5568;switch(this[_0x4a631a(0x1eb)]()){case 0x66:this[_0x4a631a(0xe2)]++,this['setupChoices'](this[_0x4a631a(0x355)]()['parameters']);break;case 0x67:this['_index']++,this['setupNumInput'](this[_0x4a631a(0x355)]()[_0x4a631a(0x315)]);break;case 0x68:this[_0x4a631a(0xe2)]++,this[_0x4a631a(0x233)](this[_0x4a631a(0x355)]()[_0x4a631a(0x315)]);break;case 0x165:const _0x3d0c2a=this[_0x4a631a(0x2b5)][this[_0x4a631a(0xe2)]+0x1],_0x4cfb47=_0x3d0c2a['parameters'];if(_0x4cfb47[0x0]===Game_Interpreter[_0x4a631a(0x4f5)]){if(_0x4a631a(0x212)!==_0x4a631a(0x346))this[_0x4a631a(0x2fe)](_0x4cfb47);else{if(this[_0x4a631a(0x247)]===_0x13302c)this['clearAllPictureTexts']();const _0x4cceed=this[_0x4a631a(0x1ea)](_0x1ec926);return this[_0x4a631a(0x4da)][_0x4cceed]||0x0;}}break;}},VisuMZ[_0x5c5568(0x260)]['Game_Interpreter_setupChoices']=Game_Interpreter['prototype'][_0x5c5568(0x293)],Game_Interpreter['prototype'][_0x5c5568(0x293)]=function(_0x4d93b4){const _0x2ffef1=_0x5c5568;_0x4d93b4=this[_0x2ffef1(0x3d2)](),VisuMZ[_0x2ffef1(0x260)][_0x2ffef1(0x2bd)][_0x2ffef1(0x40c)](this,_0x4d93b4),$gameMessage['setupShuffleChoices']();},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x3d2)]=function(){const _0x31573f=_0x5c5568,_0xf718d8=this['_index'],_0x254f98=[];let _0x4f01f5=0x0;this[_0x31573f(0xe2)]++;while(this[_0x31573f(0xe2)]<this['_list']['length']){if(this[_0x31573f(0x355)]()[_0x31573f(0x49d)]===this[_0x31573f(0x1ba)]){if(this[_0x31573f(0x355)]()[_0x31573f(0x282)]===0x194&&this[_0x31573f(0x1eb)]()!==0x66)break;else{if(this['currentCommand']()[_0x31573f(0x282)]===0x66){if('chhwx'==='chhwx')this[_0x31573f(0x34f)](_0x4f01f5,this[_0x31573f(0x355)](),_0xf718d8),this[_0x31573f(0xe2)]-=0x2;else return _0x4f6b7f[_0x31573f(0x265)]()!==_0x31573f(0x2d0)?_0x31573f(0x467)[_0x31573f(0x49e)](_0x3b0699['getChoiceListTextAlign']()):'';}else this[_0x31573f(0x355)]()[_0x31573f(0x282)]===0x192&&(this['currentCommand']()['parameters'][0x0]=_0x4f01f5,_0x4f01f5++);}}this[_0x31573f(0xe2)]++;}return this[_0x31573f(0xe2)]=_0xf718d8,this[_0x31573f(0x355)]()[_0x31573f(0x315)];},Game_Interpreter[_0x5c5568(0x21c)]['adjustShowChoiceExtension']=function(_0x16d8e2,_0x3b723c,_0x56ad6c){const _0x2422d7=_0x5c5568;this[_0x2422d7(0x417)](_0x16d8e2,_0x3b723c,_0x56ad6c),this[_0x2422d7(0x342)](_0x16d8e2,_0x3b723c,_0x56ad6c),this[_0x2422d7(0x164)](_0x3b723c,_0x56ad6c);},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x417)]=function(_0x413cbe,_0x3e4cea,_0xc19053){const _0x521fae=_0x5c5568;if(_0x3e4cea[_0x521fae(0x315)][0x2]<0x0)return;const _0x85ed6b=_0x3e4cea[_0x521fae(0x315)][0x2]+_0x413cbe;this['_list'][_0xc19053][_0x521fae(0x315)][0x2]=_0x85ed6b;},Game_Interpreter[_0x5c5568(0x21c)]['adjustShowChoiceCancel']=function(_0x3fb7ee,_0x16f8b8,_0x48feaa){const _0x564312=_0x5c5568;if(_0x16f8b8[_0x564312(0x315)][0x1]>=0x0){var _0x72d125=_0x16f8b8[_0x564312(0x315)][0x1]+_0x3fb7ee;this[_0x564312(0x2b5)][_0x48feaa][_0x564312(0x315)][0x1]=_0x72d125;}else _0x16f8b8[_0x564312(0x315)][0x1]===-0x2&&(this['_list'][_0x48feaa]['parameters'][0x1]=_0x16f8b8[_0x564312(0x315)][0x1]);},Game_Interpreter[_0x5c5568(0x21c)]['addExtraShowChoices']=function(_0x24b0c4,_0x593f90){const _0x30bd4e=_0x5c5568;for(const _0x304e27 of _0x24b0c4[_0x30bd4e(0x315)][0x0]){if(_0x30bd4e(0x365)!==_0x30bd4e(0x228))this[_0x30bd4e(0x2b5)][_0x593f90][_0x30bd4e(0x315)][0x0][_0x30bd4e(0x3e2)](_0x304e27);else{const _0x79c5c8=_0x561ce9[_0x30bd4e(0x2b1)];return _0x10a98d[_0x30bd4e(0x391)](_0x79c5c8);}}this[_0x30bd4e(0x2b5)][_0x30bd4e(0x3db)](this['_index']-0x1,0x2);},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x2fe)]=function(_0x3c704c){const _0xd7b29c=_0x5c5568,_0x516339=_0x3c704c[0x1];if(_0x516339===_0xd7b29c(0x2ab)){if(_0xd7b29c(0x11f)===_0xd7b29c(0x11f))this[_0xd7b29c(0xe2)]++,this[_0xd7b29c(0x17e)](_0x3c704c);else{const _0x2b402b=_0x4c505d(_0x27b564['$1']);_0x2b402b<_0x181e11?(_0x278d15('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x342411,_0x2b402b,_0x21ba29)),_0x491df0[_0xd7b29c(0x373)]()):_0x559cee=_0x2c67c6[_0xd7b29c(0x108)](_0x2b402b,_0x5d6662);}}else{if(_0x516339==='SelectArmor')'WwcUV'===_0xd7b29c(0x454)?(this[_0xd7b29c(0xe2)]++,this[_0xd7b29c(0x266)](_0x3c704c)):(this[_0xd7b29c(0x435)](_0x23ed6a),_0x176d71[_0xd7b29c(0x260)]['Window_Base_initialize'][_0xd7b29c(0x40c)](this,_0x35901e));else _0x516339===_0xd7b29c(0x440)&&Imported[_0xd7b29c(0xed)]&&(this['_index']++,this[_0xd7b29c(0x4b6)](_0x3c704c));}},Game_Interpreter[_0x5c5568(0x21c)]['setWeaponChoice']=function(_0x925c86){const _0x38d2d7=_0x5c5568,_0x2b5dca=JSON[_0x38d2d7(0x3f1)](JSON[_0x38d2d7(0x1b6)](_0x925c86[0x3]));VisuMZ[_0x38d2d7(0x4cb)](_0x2b5dca,_0x2b5dca),$gameMessage[_0x38d2d7(0x17e)](_0x2b5dca[_0x38d2d7(0x395)]||0x0,_0x2b5dca[_0x38d2d7(0x1c0)]||0x0);},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x266)]=function(_0x288ab0){const _0xa5d2b2=_0x5c5568,_0x1c9991=JSON[_0xa5d2b2(0x3f1)](JSON[_0xa5d2b2(0x1b6)](_0x288ab0[0x3]));VisuMZ[_0xa5d2b2(0x4cb)](_0x1c9991,_0x1c9991),$gameMessage[_0xa5d2b2(0x266)](_0x1c9991[_0xa5d2b2(0x395)]||0x0,_0x1c9991['ArmorTypeID']||0x0,_0x1c9991[_0xa5d2b2(0x470)]||0x0);},Game_Interpreter[_0x5c5568(0x21c)][_0x5c5568(0x4b6)]=function(_0x387604){const _0x320a4c=_0x5c5568,_0x419733=JSON['parse'](JSON[_0x320a4c(0x1b6)](_0x387604[0x3]));VisuMZ['ConvertParams'](_0x419733,_0x419733),$gameMessage[_0x320a4c(0x4b6)](_0x419733[_0x320a4c(0x395)]||0x0,_0x419733[_0x320a4c(0x47d)]||0x0,_0x419733[_0x320a4c(0x2bc)]||0x0);};function Game_MessageCommonEvent(){const _0x3d04df=_0x5c5568;this[_0x3d04df(0x424)](...arguments);}Game_MessageCommonEvent[_0x5c5568(0x21c)]['initialize']=function(_0x33261f,_0x55b519){const _0x16ab17=_0x5c5568;this[_0x16ab17(0x352)]=_0x33261f,this['_eventId']=_0x55b519||0x0,this['refresh']();},Game_MessageCommonEvent['prototype']['event']=function(){const _0x4bbbcc=_0x5c5568;return $dataCommonEvents[this[_0x4bbbcc(0x352)]];},Game_MessageCommonEvent['prototype'][_0x5c5568(0x382)]=function(){const _0x100c70=_0x5c5568;return this[_0x100c70(0x481)]()[_0x100c70(0x382)];},Game_MessageCommonEvent[_0x5c5568(0x21c)]['refresh']=function(){const _0x156fe0=_0x5c5568;this['_interpreter']=new Game_Interpreter(),this['_interpreter'][_0x156fe0(0x31d)](this[_0x156fe0(0x382)](),this[_0x156fe0(0xe7)]);},Game_MessageCommonEvent[_0x5c5568(0x21c)][_0x5c5568(0x296)]=function(){const _0x45ab97=_0x5c5568;this[_0x45ab97(0x1f8)]&&(this[_0x45ab97(0x1f8)][_0x45ab97(0x129)]()?this[_0x45ab97(0x1f8)][_0x45ab97(0x296)]():_0x45ab97(0x4e1)!==_0x45ab97(0x4e1)?_0x4fb839=!_0x4486cd:this[_0x45ab97(0x19d)]());},Game_MessageCommonEvent['prototype']['clear']=function(){this['_interpreter']=null;},Scene_Message[_0x5c5568(0x21c)]['messageWindowRect']=function(){const _0x5519e6=_0x5c5568,_0x5ed896=Math[_0x5519e6(0x135)](Graphics['width'],$gameSystem['getMessageWindowWidth']()),_0x478cd7=$gameSystem['getMessageWindowRows'](),_0xd0e89f=this['calcWindowHeight'](_0x478cd7,![]),_0x4bf328=(Graphics[_0x5519e6(0x4f4)]-_0x5ed896)/0x2,_0x532638=0x0;return new Rectangle(_0x4bf328,_0x532638,_0x5ed896,_0xd0e89f);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x3d9)]=Scene_Message[_0x5c5568(0x21c)][_0x5c5568(0x167)],Scene_Message['prototype'][_0x5c5568(0x167)]=function(){const _0xd65e70=_0x5c5568;VisuMZ[_0xd65e70(0x260)]['Scene_Message_createChoiceListWindow']['call'](this),this['createChoiceListHelpWindow']();},Scene_Message[_0x5c5568(0x21c)][_0x5c5568(0x235)]=function(){const _0x55764c=_0x5c5568,_0xf0503f=this['choiceListHelpWindowRect'](),_0x54abb2=new Window_Help(_0xf0503f);_0x54abb2[_0x55764c(0x3c9)](),this['_choiceListWindow'][_0x55764c(0x3b8)](_0x54abb2),this['_messageWindow'][_0x55764c(0x41c)](_0x54abb2),this['addWindow'](_0x54abb2),this[_0x55764c(0x286)]=_0x54abb2;},Scene_Message[_0x5c5568(0x21c)][_0x5c5568(0x35f)]=function(){const _0xa37fb5=_0x5c5568,_0x3b1d34=0x0,_0x50f884=0x0,_0xcbf52b=Graphics[_0xa37fb5(0x4f4)],_0x347830=this[_0xa37fb5(0x501)](0x2,![]);return new Rectangle(_0x3b1d34,_0x50f884,_0xcbf52b,_0x347830);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x41c)]=function(_0x567978){const _0x3a6553=_0x5c5568;this[_0x3a6553(0x286)]=_0x567978;},Window_Message['prototype'][_0x5c5568(0x308)]=function(){const _0x12a278=_0x5c5568;if(!this[_0x12a278(0x286)])return;const _0x41607b=this[_0x12a278(0x286)];_0x41607b&&(_0x41607b['y']=this['y']>0x0?0x0:Graphics[_0x12a278(0x4e6)]-_0x41607b[_0x12a278(0x4a6)]);},VisuMZ['MessageCore'][_0x5c5568(0x2aa)]=Scene_Options[_0x5c5568(0x21c)][_0x5c5568(0x210)],Scene_Options[_0x5c5568(0x21c)][_0x5c5568(0x210)]=function(){const _0x53272f=_0x5c5568;let _0x4e692a=VisuMZ[_0x53272f(0x260)][_0x53272f(0x2aa)][_0x53272f(0x40c)](this);const _0x11a2d0=VisuMZ[_0x53272f(0x260)]['Settings'];if(_0x11a2d0[_0x53272f(0x430)][_0x53272f(0x461)]){_0x11a2d0[_0x53272f(0x505)][_0x53272f(0x13f)]&&TextManager[_0x53272f(0x151)]()&&_0x4e692a++;if(_0x11a2d0['TextSpeed'][_0x53272f(0x13f)])_0x4e692a++;}return _0x4e692a;},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x1a0)]=Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x328)],Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x328)]=function(){const _0x2f11a6=_0x5c5568;VisuMZ[_0x2f11a6(0x260)][_0x2f11a6(0x1a0)][_0x2f11a6(0x40c)](this),this[_0x2f11a6(0x465)]();},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x1e9)]=Sprite_Picture['prototype'][_0x5c5568(0x296)],Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x296)]=function(){const _0x4577ab=_0x5c5568;VisuMZ[_0x4577ab(0x260)][_0x4577ab(0x1e9)][_0x4577ab(0x40c)](this),this['updatePictureText']();},Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x407)]=function(){const _0x165ac1=_0x5c5568;if(!this[_0x165ac1(0x218)])return;this[_0x165ac1(0x4ce)](),this[_0x165ac1(0xf7)](),this[_0x165ac1(0x37b)](),this[_0x165ac1(0x444)]();},Sprite_Picture[_0x5c5568(0x21c)]['createPictureText']=function(){const _0x5d6b56=_0x5c5568;if(this[_0x5d6b56(0x49c)])return;if(this['_pictureTextSprite'])return;const _0x71e9c0=new Rectangle(0x0,0x0,0x0,0x0);this['_pictureTextWindow']=new Window_Base(_0x71e9c0),this[_0x5d6b56(0x49c)][_0x5d6b56(0x4c9)]=0x0,this[_0x5d6b56(0x508)]=new Sprite(),this[_0x5d6b56(0x366)](this[_0x5d6b56(0x508)],0x0),this['_pictureTextWidth']=0x0,this[_0x5d6b56(0x287)]=0x0,this[_0x5d6b56(0x338)]={};},Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x4ce)]=function(){const _0xb98ec2=_0x5c5568;if(!this[_0xb98ec2(0x49c)])return;if(this[_0xb98ec2(0x493)]===this[_0xb98ec2(0xdb)]&&this['_pictureTextHeight']===this['height'])return;this[_0xb98ec2(0x493)]=this[_0xb98ec2(0xdb)],this[_0xb98ec2(0x287)]=this['height'],this[_0xb98ec2(0x338)]={},this[_0xb98ec2(0x49c)][_0xb98ec2(0x4ff)](0x0,0x0,this[_0xb98ec2(0xdb)],this[_0xb98ec2(0x4a6)]);},Sprite_Picture['prototype'][_0x5c5568(0xf7)]=function(){const _0x4a5dbc=_0x5c5568;if(!this['_pictureTextSprite'])return;this[_0x4a5dbc(0x508)][_0x4a5dbc(0x312)]['x']=this[_0x4a5dbc(0x312)]['x'],this[_0x4a5dbc(0x508)][_0x4a5dbc(0x312)]['y']=this[_0x4a5dbc(0x312)]['y'];},Sprite_Picture['prototype'][_0x5c5568(0x37b)]=function(){const _0x1497fa=_0x5c5568;if(!this[_0x1497fa(0x49c)])return;if(!this[_0x1497fa(0x327)]())return;const _0x522f13=[_0x1497fa(0x2be),'up',_0x1497fa(0x20e),_0x1497fa(0x273),'center',_0x1497fa(0x443),_0x1497fa(0x428),_0x1497fa(0x3a4),_0x1497fa(0x35c)];this[_0x1497fa(0x49c)][_0x1497fa(0x410)]();for(const _0x40c785 of _0x522f13){this['drawPictureTextZone'](_0x40c785);}},Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x327)]=function(){const _0x1fc246=_0x5c5568;if($gameScreen[_0x1fc246(0x23f)](this['_pictureId']))return!![];const _0x4baa0a=['upperleft','up',_0x1fc246(0x20e),_0x1fc246(0x273),_0x1fc246(0xd4),_0x1fc246(0x443),_0x1fc246(0x428),_0x1fc246(0x3a4),_0x1fc246(0x35c)];for(const _0x274081 of _0x4baa0a){const _0x2edb99=$gameScreen[_0x1fc246(0x1ae)](this['_pictureId'],_0x274081);if(this[_0x1fc246(0x338)][_0x274081]===_0x2edb99)continue;return!![];}return![];},Sprite_Picture[_0x5c5568(0x21c)][_0x5c5568(0x4b0)]=function(_0x2b8d6a){const _0x504ffc=_0x5c5568;$gameScreen['clearPictureTextRefresh'](this['_pictureId']);const _0x40019b=$gameScreen['getPictureText'](this[_0x504ffc(0x47b)],_0x2b8d6a);this[_0x504ffc(0x338)][_0x2b8d6a]=_0x40019b;const _0x72e9f1=this[_0x504ffc(0x49c)][_0x504ffc(0x2f9)](_0x40019b);let _0x5d2196=$gameScreen[_0x504ffc(0x406)](this[_0x504ffc(0x47b)]),_0x260bb3=_0x5d2196,_0x408c3a=_0x5d2196;if(['up',_0x504ffc(0xd4),'down'][_0x504ffc(0x1e3)](_0x2b8d6a))_0x260bb3=Math[_0x504ffc(0x300)]((this[_0x504ffc(0xdb)]-_0x72e9f1[_0x504ffc(0xdb)])/0x2);else[_0x504ffc(0x20e),_0x504ffc(0x443),'lowerright']['includes'](_0x2b8d6a)&&(_0x260bb3=Math['floor'](this[_0x504ffc(0xdb)]-_0x72e9f1[_0x504ffc(0xdb)]-_0x5d2196));if([_0x504ffc(0x273),_0x504ffc(0xd4),_0x504ffc(0x443)][_0x504ffc(0x1e3)](_0x2b8d6a))_0x408c3a=Math[_0x504ffc(0x300)]((this[_0x504ffc(0x4a6)]-_0x72e9f1[_0x504ffc(0x4a6)])/0x2);else[_0x504ffc(0x428),'down',_0x504ffc(0x35c)][_0x504ffc(0x1e3)](_0x2b8d6a)&&(_0x408c3a=Math[_0x504ffc(0x300)](this[_0x504ffc(0x4a6)]-_0x72e9f1[_0x504ffc(0x4a6)]-_0x5d2196));this[_0x504ffc(0x49c)][_0x504ffc(0x4b1)](_0x40019b,_0x260bb3,_0x408c3a);},Sprite_Picture['prototype'][_0x5c5568(0x444)]=function(){const _0x1df3c6=_0x5c5568;if(!this[_0x1df3c6(0x49c)])return;if(!this[_0x1df3c6(0x508)])return;this[_0x1df3c6(0x508)][_0x1df3c6(0x389)]=this[_0x1df3c6(0x49c)][_0x1df3c6(0x462)];},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x179)]=Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x424)],Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x424)]=function(_0x2009e1){const _0x1b9ee9=_0x5c5568;this[_0x1b9ee9(0x435)](_0x2009e1),VisuMZ[_0x1b9ee9(0x260)][_0x1b9ee9(0x179)][_0x1b9ee9(0x40c)](this,_0x2009e1);},Window_Base[_0x5c5568(0x21c)]['initMessageCore']=function(_0x4c4aa5){const _0x42cf97=_0x5c5568;this['initTextAlignement'](),this[_0x42cf97(0x33d)](),this[_0x42cf97(0x12a)](_0x4c4aa5);},Window_Base['prototype'][_0x5c5568(0x2bf)]=function(){const _0x30322a=_0x5c5568;this[_0x30322a(0x255)](_0x30322a(0x2d0));},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x255)]=function(_0x2f3fb8){const _0x46387c=_0x5c5568;this[_0x46387c(0x162)]=_0x2f3fb8;},Window_Base['prototype']['getTextAlignment']=function(){const _0x6ad566=_0x5c5568;return this[_0x6ad566(0x162)];},VisuMZ[_0x5c5568(0x260)]['Window_Base_textSizeEx']=Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x2f9)],Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x2f9)]=function(_0x5e65c8){const _0x41fc67=_0x5c5568;return this[_0x41fc67(0x33d)](),VisuMZ[_0x41fc67(0x260)][_0x41fc67(0xdf)][_0x41fc67(0x40c)](this,_0x5e65c8);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x1d1)]=function(_0x25ae74){const _0x589704=_0x5c5568;return VisuMZ[_0x589704(0x260)]['Window_Base_textSizeEx']['call'](this,_0x25ae74);},VisuMZ[_0x5c5568(0x260)]['Window_Base_processAllText']=Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x275)],Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x275)]=function(_0x3f79fd){const _0x2da2dd=_0x5c5568;VisuMZ[_0x2da2dd(0x260)][_0x2da2dd(0x4e7)]['call'](this,_0x3f79fd);if(_0x3f79fd['drawing'])this[_0x2da2dd(0x255)]('default');},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x33d)]=function(){const _0x57b601=_0x5c5568;this[_0x57b601(0x3f9)](![]);},Window_Base['prototype']['isWordWrapEnabled']=function(){const _0xba6958=_0x5c5568;return this[_0xba6958(0x3fa)];},Window_Base[_0x5c5568(0x21c)]['setWordWrap']=function(_0x219d0c){return this['_wordWrap']=_0x219d0c,'';},Window_Base['prototype'][_0x5c5568(0x12a)]=function(_0x48a3fe){const _0x267b1f=_0x5c5568;this[_0x267b1f(0x44f)]=JsonEx[_0x267b1f(0xf3)](_0x48a3fe);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x4e9)]=function(){const _0xc5bc6a=_0x5c5568;this[_0xc5bc6a(0x462)][_0xc5bc6a(0x2ad)]=$gameSystem[_0xc5bc6a(0x232)](),this['contents'][_0xc5bc6a(0x37f)]=$gameSystem[_0xc5bc6a(0x34a)](),this[_0xc5bc6a(0x462)]['fontBold']=![],this['contents'][_0xc5bc6a(0x3b5)]=![],this[_0xc5bc6a(0x29d)]();},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x29d)]=function(){const _0x17be8d=_0x5c5568;this[_0x17be8d(0x4b2)](ColorManager[_0x17be8d(0x183)]()),this['changeOutlineColor'](ColorManager[_0x17be8d(0x226)]());const _0x47ca1d=VisuMZ[_0x17be8d(0x260)][_0x17be8d(0x375)]['General'];_0x47ca1d[_0x17be8d(0x1e8)]===undefined&&(_0x17be8d(0x388)==='OooRA'?(this['_scriptCall']=!![],_0x407277[_0x17be8d(0x260)][_0x17be8d(0x394)]['call'](this,_0x4a688d,_0x5a88a4,_0x17706c)):_0x47ca1d[_0x17be8d(0x1e8)]=0x3),this[_0x17be8d(0x462)][_0x17be8d(0x1cf)]=_0x47ca1d[_0x17be8d(0x1e8)],this[_0x17be8d(0x506)](![]);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x506)]=function(_0x2f50d6){const _0x481c56=_0x5c5568;this[_0x481c56(0x22a)]=_0x2f50d6;},Window_Base[_0x5c5568(0x21c)]['isColorLocked']=function(){const _0x47cfc2=_0x5c5568;return this[_0x47cfc2(0x22a)];},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x1c8)]=function(){return![];},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x36f)]=function(){const _0x1c1bf5=_0x5c5568,_0x5807be=[_0x1c1bf5(0x2ad),_0x1c1bf5(0x37f),_0x1c1bf5(0xfb),_0x1c1bf5(0x3b5),'textColor',_0x1c1bf5(0x47c),_0x1c1bf5(0x1cf),_0x1c1bf5(0x246)];let _0x802dd1={};for(const _0x271632 of _0x5807be){_0x802dd1[_0x271632]=this[_0x1c1bf5(0x462)][_0x271632];}return _0x802dd1;},Window_Base['prototype'][_0x5c5568(0x22f)]=function(_0x24f1dd){const _0x24827b=_0x5c5568;for(const _0x448510 in _0x24f1dd){this[_0x24827b(0x462)][_0x448510]=_0x24f1dd[_0x448510];}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x372)]=Window_Base['prototype']['update'],Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x296)]=function(){const _0x4df24f=_0x5c5568;VisuMZ[_0x4df24f(0x260)]['Window_Base_update'][_0x4df24f(0x40c)](this),this[_0x4df24f(0x243)]();},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x1c9)]=function(){return![];},Window_Base['prototype'][_0x5c5568(0x243)]=function(){const _0x14de29=_0x5c5568;this[_0x14de29(0x477)]>0x0&&(this[_0x14de29(0x1c9)]()&&(this['x']=this[_0x14de29(0x479)](this['x'],this[_0x14de29(0x237)]),this['y']=this['applyMoveEasing'](this['y'],this['_moveTargetY']),this['width']=this[_0x14de29(0x479)](this['width'],this[_0x14de29(0x1af)]),this[_0x14de29(0x4a6)]=this[_0x14de29(0x479)](this[_0x14de29(0x4a6)],this['_moveTargetHeight']),this[_0x14de29(0x1ec)]()),this[_0x14de29(0x477)]--);},Window_Base[_0x5c5568(0x21c)]['clampPlacementPosition']=function(_0x7096c,_0x881ef){const _0xe730df=_0x5c5568;!_0x7096c&&(this[_0xe730df(0xdb)]=Math[_0xe730df(0x135)](this[_0xe730df(0xdb)],Graphics[_0xe730df(0xdb)]),this[_0xe730df(0x4a6)]=Math[_0xe730df(0x135)](this[_0xe730df(0x4a6)],Graphics['height']));if(!_0x881ef){const _0x1451e3=-(Math[_0xe730df(0x300)](Graphics[_0xe730df(0xdb)]-Graphics[_0xe730df(0x4f4)])/0x2),_0x5ae914=_0x1451e3+Graphics[_0xe730df(0xdb)]-this[_0xe730df(0xdb)],_0x1e94ca=-(Math[_0xe730df(0x300)](Graphics['height']-Graphics[_0xe730df(0x4e6)])/0x2),_0x5b1495=_0x1e94ca+Graphics[_0xe730df(0x4a6)]-this[_0xe730df(0x4a6)];this['x']=this['x'][_0xe730df(0x47a)](_0x1451e3,_0x5ae914),this['y']=this['y'][_0xe730df(0x47a)](_0x1e94ca,_0x5b1495);}},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x479)]=function(_0x976d19,_0x149d5b){const _0x25954b=_0x5c5568,_0x1beea5=this[_0x25954b(0x477)],_0x2e2e22=this['_wholeMoveDuration'],_0x5f96f2=this['calcMoveEasing']((_0x2e2e22-_0x1beea5)/_0x2e2e22),_0x556e9d=this[_0x25954b(0x3ee)]((_0x2e2e22-_0x1beea5+0x1)/_0x2e2e22),_0x60b02f=(_0x976d19-_0x149d5b*_0x5f96f2)/(0x1-_0x5f96f2);return _0x60b02f+(_0x149d5b-_0x60b02f)*_0x556e9d;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x3ee)]=function(_0x31e9e9){const _0x334af1=_0x5c5568,_0x230277=0x2;switch(this[_0x334af1(0x27b)]){case 0x0:return _0x31e9e9;case 0x1:return this['easeIn'](_0x31e9e9,_0x230277);case 0x2:return this[_0x334af1(0x18b)](_0x31e9e9,_0x230277);case 0x3:return this['easeInOut'](_0x31e9e9,_0x230277);default:if(Imported[_0x334af1(0x2bb)])return VisuMZ['applyMoveEasing'](_0x31e9e9,this[_0x334af1(0x27b)]);else{if(_0x334af1(0x2e8)!=='zqaXQ')return _0x31e9e9;else{_0x209386['MessageCore'][_0x334af1(0x48d)][_0x334af1(0x40c)](this,_0x28382b);const _0x2338a6=_0x4e7668['MessageCore']['Settings']['AutoColor'];_0x1beaa2[_0x334af1(0x260)][_0x334af1(0x305)](_0x4ccf16,_0x2338a6['Armors']);}}}},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x3ec)]=function(_0x2745ac,_0x3a3aec,_0x908d20,_0x5c2e80,_0x805a45,_0x3299ad){const _0xe20dff=_0x5c5568;this['_moveTargetX']=_0x2745ac,this[_0xe20dff(0x439)]=_0x3a3aec,this['_moveTargetWidth']=_0x908d20||this['width'],this['_moveTargetHeight']=_0x5c2e80||this['height'],this[_0xe20dff(0x477)]=_0x805a45||0x1;if(this[_0xe20dff(0x477)]<=0x0)this['_moveDuration']=0x1;this[_0xe20dff(0x20d)]=this['_moveDuration'],this[_0xe20dff(0x27b)]=_0x3299ad||0x0;if(_0x805a45<=0x0)this[_0xe20dff(0x243)]();},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x3a6)]=function(_0x263b3f,_0x2d805c,_0x409455,_0x286e8b,_0x44c8ad,_0x3cdb9d){const _0x29223d=_0x5c5568;this['_moveTargetX']=this['x']+_0x263b3f,this[_0x29223d(0x439)]=this['y']+_0x2d805c,this[_0x29223d(0x1af)]=this[_0x29223d(0xdb)]+(_0x409455||0x0),this['_moveTargetHeight']=this[_0x29223d(0x4a6)]+(_0x286e8b||0x0),this[_0x29223d(0x477)]=_0x44c8ad||0x1;if(this[_0x29223d(0x477)]<=0x0)this[_0x29223d(0x477)]=0x1;this['_wholeMoveDuration']=this['_moveDuration'],this[_0x29223d(0x27b)]=_0x3cdb9d||0x0;if(_0x44c8ad<=0x0)this[_0x29223d(0x243)]();},Window_Base[_0x5c5568(0x21c)]['resetRect']=function(_0x5cb471,_0x18665b){const _0x2e3dd6=_0x5c5568;this['moveTo'](this['_resetRect']['x'],this[_0x2e3dd6(0x44f)]['y'],this[_0x2e3dd6(0x44f)][_0x2e3dd6(0xdb)],this[_0x2e3dd6(0x44f)]['height'],_0x5cb471,_0x18665b);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0xf0)]=Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x4b2)],Window_Base[_0x5c5568(0x21c)]['changeTextColor']=function(_0xe3d5f){const _0x43545c=_0x5c5568;if(this[_0x43545c(0x45e)]())return;_0xe3d5f=_0xe3d5f[_0x43545c(0x2fd)](/\,/g,''),this['_textColorStack']=this[_0x43545c(0x4ca)]||[],this[_0x43545c(0x4ca)][_0x43545c(0x385)](this[_0x43545c(0x462)]['textColor']),VisuMZ[_0x43545c(0x260)]['Window_Base_changeTextColor'][_0x43545c(0x40c)](this,_0xe3d5f);},Window_Base['prototype'][_0x5c5568(0x198)]=function(_0x494eca){const _0x336c87=_0x5c5568;this['obtainEscapeParam'](_0x494eca);if(this[_0x336c87(0x45e)]())return;_0x494eca[_0x336c87(0x225)]&&(this[_0x336c87(0x4ca)]=this['_textColorStack']||[],this[_0x336c87(0x462)][_0x336c87(0x358)]=this[_0x336c87(0x4ca)][_0x336c87(0x3af)]()||ColorManager[_0x336c87(0x183)]());},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x1be)]=function(_0xef0be){const _0x48a03b=_0x5c5568;return _0xef0be=this[_0x48a03b(0x288)](_0xef0be),_0xef0be=this[_0x48a03b(0x2f7)](_0xef0be),_0xef0be=this[_0x48a03b(0x4a7)](_0xef0be),_0xef0be=this['convertButtonAssistEscapeCharacters'](_0xef0be),_0xef0be=this[_0x48a03b(0x23b)](_0xef0be),_0xef0be=this['convertShowChoiceEscapeCodes'](_0xef0be),_0xef0be=this['convertFontSettingsEscapeCharacters'](_0xef0be),_0xef0be=this[_0x48a03b(0x36b)](_0xef0be),_0xef0be=this[_0x48a03b(0x1da)](_0xef0be),_0xef0be=this[_0x48a03b(0x28a)](_0xef0be),_0xef0be=this[_0x48a03b(0x478)](_0xef0be),_0xef0be=this[_0x48a03b(0x23e)](_0xef0be),_0xef0be=this[_0x48a03b(0x2fb)](_0xef0be),_0xef0be=this['postConvertEscapeCharacters'](_0xef0be),_0xef0be=this[_0x48a03b(0x4a7)](_0xef0be),_0xef0be=this['processAutoColorWords'](_0xef0be),_0xef0be=this[_0x48a03b(0x4ef)](_0xef0be),_0xef0be;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x288)]=function(_0x2e5b01){const _0x443187=_0x5c5568;this['_textMacroFound']=![];for(const _0x45e332 of VisuMZ['MessageCore'][_0x443187(0x375)][_0x443187(0x4fc)]){if(_0x2e5b01[_0x443187(0x4d8)](_0x45e332[_0x443187(0x240)])){if(_0x443187(0x2b0)===_0x443187(0x2b0))this[_0x443187(0x29b)]=!![],_0x2e5b01=_0x2e5b01[_0x443187(0x2fd)](_0x45e332[_0x443187(0x240)],_0x45e332[_0x443187(0x1f0)][_0x443187(0x23c)](this));else{const _0x353dac=_0x38accc[_0x443187(0x260)]['Settings'][_0x443187(0x4c6)];let _0x5d1747=0x0;if(_0x34d7bb===_0x3c4eb2)_0x5d1747=_0x353dac[_0x443187(0x4d2)];if(_0x2ed17d===_0x4c1cdf)_0x5d1747=_0x353dac[_0x443187(0x22c)];if(_0x47551a===_0x2900c6)_0x5d1747=_0x353dac[_0x443187(0x3d1)];if(_0x469a0a===_0x475e31)_0x5d1747=_0x353dac[_0x443187(0x13e)];if(_0x46f46a===_0x579463)_0x5d1747=_0x353dac['Weapons'];if(_0x4c47a9===_0x4035e3)_0x5d1747=_0x353dac['Armors'];if(_0xd83907===_0x1c83e1)_0x5d1747=_0x353dac[_0x443187(0x376)];if(_0x4a7938===_0x9110e5)_0x5d1747=_0x353dac[_0x443187(0x464)];return _0x5d1747>0x0&&(_0x4f40ed='\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x443187(0x49e)](_0x5d1747,_0x125b6b)),_0x16b85d;}}}return _0x2e5b01;},Window_Base[_0x5c5568(0x21c)]['convertBackslashCharacters']=function(_0x3e4238){const _0x44f812=_0x5c5568;return _0x3e4238=_0x3e4238[_0x44f812(0x2fd)](/\\/g,'\x1b'),_0x3e4238=_0x3e4238['replace'](/\x1b\x1b/g,'\x5c'),_0x3e4238;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x4a7)]=function(_0x1d24af){const _0x5d00f3=_0x5c5568;for(;;){if(_0x1d24af[_0x5d00f3(0x4d8)](/\\V\[(\d+)\]/gi))_0x1d24af=_0x1d24af[_0x5d00f3(0x2fd)](/\\V\[(\d+)\]/gi,(_0x4d075a,_0x1e069f)=>this[_0x5d00f3(0x2f7)](String($gameVariables[_0x5d00f3(0x38b)](parseInt(_0x1e069f)))));else{if(_0x1d24af[_0x5d00f3(0x4d8)](/\x1bV\[(\d+)\]/gi))_0x1d24af=_0x1d24af[_0x5d00f3(0x2fd)](/\x1bV\[(\d+)\]/gi,(_0x168e54,_0x30d1b5)=>this[_0x5d00f3(0x2f7)](String($gameVariables['value'](parseInt(_0x30d1b5)))));else break;}}return _0x1d24af;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x4e0)]=function(_0x243332){const _0x4fdfb3=_0x5c5568;if(Imported['VisuMZ_0_CoreEngine']){if('QXZut'===_0x4fdfb3(0x18d))return _0x3a3c3a['MessageCore']['Window_EventItem_includes'][_0x4fdfb3(0x40c)](this,_0x335f13);else _0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Up (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)]('up')),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Left (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)](_0x4fdfb3(0x273))),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Right (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)](_0x4fdfb3(0x443))),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Down (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)](_0x4fdfb3(0x3a4))),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Ok (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)]('ok')),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Cancel (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)]('cancel')),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<Menu (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)]('menu')),_0x243332=_0x243332['replace'](/<Shift (?:KEY|BUTTON)>/gi,this[_0x4fdfb3(0x4b4)](_0x4fdfb3(0x3af))),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this['convertButtonAssistText'](_0x4fdfb3(0x429))),_0x243332=_0x243332[_0x4fdfb3(0x2fd)](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this['convertButtonAssistText'](_0x4fdfb3(0x4d6)));}return _0x243332;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x4b4)]=function(_0x3f54c8){const _0x4166ce=_0x5c5568;let _0x2c74dc=TextManager[_0x4166ce(0x460)](_0x3f54c8)||'';return _0x2c74dc=this[_0x4166ce(0x2f7)](_0x2c74dc),_0x2c74dc=this[_0x4166ce(0x4a7)](_0x2c74dc),_0x2c74dc[_0x4166ce(0x199)]();},Window_Base[_0x5c5568(0x21c)]['preConvertEscapeCharacters']=function(_0x4d07ab){const _0x503f27=_0x5c5568;return _0x4d07ab=this[_0x503f27(0x295)](_0x4d07ab),this[_0x503f27(0x28c)](),_0x4d07ab;},Window_Base[_0x5c5568(0x21c)]['switchOutTextForLocalization']=function(_0x38dfc3){const _0x29701e=_0x5c5568;return _0x38dfc3=TextManager[_0x29701e(0xce)](_0x38dfc3),_0x38dfc3;},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0xd0)]=String[_0x5c5568(0x21c)][_0x5c5568(0x49e)],String[_0x5c5568(0x21c)][_0x5c5568(0x49e)]=function(){const _0xd3d255=_0x5c5568;let _0x276057=this;return _0x276057=TextManager[_0xd3d255(0xce)](_0x276057),VisuMZ[_0xd3d255(0x260)]['String_format'][_0xd3d255(0x42a)](_0x276057,arguments);},VisuMZ[_0x5c5568(0x260)]['Bitmap_drawText']=Bitmap[_0x5c5568(0x21c)]['drawText'],Bitmap['prototype']['drawText']=function(_0x3f582f,_0x45b22,_0x384aa3,_0x4d8334,_0x3a8ab8,_0x353480){const _0x5eae55=_0x5c5568;_0x3f582f=TextManager[_0x5eae55(0xce)](_0x3f582f),VisuMZ[_0x5eae55(0x260)][_0x5eae55(0x4aa)]['call'](this,_0x3f582f,_0x45b22,_0x384aa3,_0x4d8334,_0x3a8ab8,_0x353480);},VisuMZ[_0x5c5568(0x260)]['Bitmap_drawTextTopAligned']=Bitmap[_0x5c5568(0x21c)][_0x5c5568(0x1a1)],Bitmap[_0x5c5568(0x21c)]['drawTextTopAligned']=function(_0x154fdf,_0x55ce4f,_0x1a7074,_0x66b598,_0x17a415,_0x88cf17){const _0x586b93=_0x5c5568;_0x154fdf=TextManager['parseLocalizedText'](_0x154fdf),VisuMZ[_0x586b93(0x260)]['Bitmap_drawTextTopAligned']['call'](this,_0x154fdf,_0x55ce4f,_0x1a7074,_0x66b598,_0x17a415,_0x88cf17);},Window_Base[_0x5c5568(0x21c)]['postConvertEscapeCharacters']=function(_0x1fd530){return _0x1fd530;},Window_Base['prototype'][_0x5c5568(0x3e1)]=function(_0x42e0e6){const _0xec64a0=_0x5c5568;return this[_0xec64a0(0x11a)]()&&(_0x42e0e6=_0x42e0e6['replace'](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x42e0e6=_0x42e0e6[_0xec64a0(0x2fd)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x42e0e6=_0x42e0e6[_0xec64a0(0x2fd)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x42e0e6=_0x42e0e6['replace'](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x42e0e6=_0x42e0e6[_0xec64a0(0x2fd)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x42e0e6=_0x42e0e6[_0xec64a0(0x2fd)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,''),_0x42e0e6=_0x42e0e6[_0xec64a0(0x2fd)](/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi,''),_0x42e0e6=_0x42e0e6[_0xec64a0(0x2fd)](/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi,'')),_0x42e0e6;},Window_Base[_0x5c5568(0x21c)]['isChoiceWindow']=function(){const _0x1974ae=_0x5c5568,_0x1ffa29=[_0x1974ae(0x18f),_0x1974ae(0x1bc)];return _0x1ffa29[_0x1974ae(0x1e3)](this[_0x1974ae(0x362)][_0x1974ae(0x50c)]);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x128)]=function(_0x4e4f12){const _0x561453=_0x5c5568;return _0x4e4f12=_0x4e4f12['replace'](/<B>/gi,_0x561453(0x14f)),_0x4e4f12=_0x4e4f12['replace'](/<\/B>/gi,'\x1bBOLD[0]'),_0x4e4f12=_0x4e4f12[_0x561453(0x2fd)](/<I>/gi,'\x1bITALIC[1]'),_0x4e4f12=_0x4e4f12[_0x561453(0x2fd)](/<\/I>/gi,'\x1bITALIC[0]'),_0x4e4f12;},Window_Base['prototype'][_0x5c5568(0x36b)]=function(_0xb9e54d){const _0x1b3c86=_0x5c5568;return _0xb9e54d=_0xb9e54d[_0x1b3c86(0x2fd)](/<LEFT>/gi,_0x1b3c86(0x17f)),_0xb9e54d=_0xb9e54d['replace'](/<\/LEFT>/gi,'\x1bTEXTALIGNMENT[0]'),_0xb9e54d=_0xb9e54d[_0x1b3c86(0x2fd)](/<CENTER>/gi,'\x1bTEXTALIGNMENT[2]'),_0xb9e54d=_0xb9e54d['replace'](/<\/CENTER>/gi,_0x1b3c86(0x227)),_0xb9e54d=_0xb9e54d[_0x1b3c86(0x2fd)](/<RIGHT>/gi,_0x1b3c86(0x4ae)),_0xb9e54d=_0xb9e54d[_0x1b3c86(0x2fd)](/<\/RIGHT>/gi,_0x1b3c86(0x227)),_0xb9e54d;},Window_Base[_0x5c5568(0x21c)]['convertLockColorsEscapeCharacters']=function(_0x5895bb){const _0x398ed0=_0x5c5568;return _0x5895bb=_0x5895bb[_0x398ed0(0x2fd)](/<COLORLOCK>/gi,_0x398ed0(0x125)),_0x5895bb=_0x5895bb[_0x398ed0(0x2fd)](/<\/COLORLOCK>/gi,_0x398ed0(0x487)),_0x5895bb=_0x5895bb['replace'](/\(\(\(/gi,'\x1bCOLORLOCK[1]'),_0x5895bb=_0x5895bb[_0x398ed0(0x2fd)](/\)\)\)/gi,'\x1bCOLORLOCK[0]'),_0x5895bb;},Window_Base['prototype']['convertBaseEscapeCharacters']=function(_0x17aeb5){const _0xe43ee0=_0x5c5568;return _0x17aeb5=_0x17aeb5[_0xe43ee0(0x2fd)](/\x1bN\[(\d+)\]/gi,(_0x1d2d32,_0x5b2a96)=>this[_0xe43ee0(0x3d3)](parseInt(_0x5b2a96))),_0x17aeb5=_0x17aeb5[_0xe43ee0(0x2fd)](/\x1bP\[(\d+)\]/gi,(_0x1bed69,_0x5480af)=>this[_0xe43ee0(0x32f)](parseInt(_0x5480af))),_0x17aeb5=_0x17aeb5[_0xe43ee0(0x2fd)](/\x1bG/gi,TextManager['currencyUnit']),_0x17aeb5;},Window_Base[_0x5c5568(0x21c)]['convertHardcodedEscapeReplacements']=function(_0x33e10d){const _0x3d681d=_0x5c5568;return _0x33e10d=_0x33e10d[_0x3d681d(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x3d681d(0x415)]()),_0x33e10d=_0x33e10d[_0x3d681d(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x3d681d(0x38e)]()),_0x33e10d=_0x33e10d[_0x3d681d(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this['battleActionName'](!![])),_0x33e10d=_0x33e10d[_0x3d681d(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x3d681d(0x31e)](![])),_0x33e10d;},Window_Base[_0x5c5568(0x21c)]['battleTargetName']=function(){const _0x12da67=_0x5c5568;if(!SceneManager[_0x12da67(0x1a6)]())return'';if(BattleManager['_target'])return BattleManager[_0x12da67(0x48a)][_0x12da67(0x50c)]();if(BattleManager['_targets'][0x0])return BattleManager[_0x12da67(0x396)][0x0]['name']();return'';},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x38e)]=function(){const _0x2b0329=_0x5c5568;if(!SceneManager['isSceneBattle']())return'';let _0x49e884=null;return _0x49e884=BattleManager['_subject'],!_0x49e884&&BattleManager[_0x2b0329(0x3dc)]()&&(_0x49e884=BattleManager[_0x2b0329(0x4a4)]()),_0x49e884?_0x49e884[_0x2b0329(0x50c)]():'';},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x31e)]=function(_0x588bec){const _0x14b6a4=_0x5c5568;if(!SceneManager[_0x14b6a4(0x1a6)]())return'';let _0x30e1ef=BattleManager[_0x14b6a4(0x1e0)]||null;!_0x30e1ef&&BattleManager[_0x14b6a4(0x3dc)]()&&(_0x14b6a4(0x1ff)===_0x14b6a4(0x3a0)?(this['_commonEventId']=_0x5a6f44,this[_0x14b6a4(0xe7)]=_0x5138fa||0x0,this[_0x14b6a4(0x4c7)]()):_0x30e1ef=BattleManager[_0x14b6a4(0x1f1)]());if(_0x30e1ef&&_0x30e1ef[_0x14b6a4(0x43b)]()){let _0x27129f='';if(_0x588bec)_0x27129f+=_0x14b6a4(0x4d1)[_0x14b6a4(0x49e)](_0x30e1ef[_0x14b6a4(0x43b)]()[_0x14b6a4(0x4e5)]);return _0x27129f+=_0x30e1ef[_0x14b6a4(0x43b)]()[_0x14b6a4(0x50c)],_0x27129f;}return'';},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x23e)]=function(_0x3d791a){const _0x285449=_0x5c5568;for(const _0x37b25d of VisuMZ[_0x285449(0x260)][_0x285449(0x375)][_0x285449(0x223)]){if(_0x285449(0x277)===_0x285449(0x251)){const _0x10e09d=_0x4043f6['name'],_0x2b82e1=this['getChoiceIndent'](_0x10e09d),_0x3baacc=this[_0x285449(0x2f9)](_0x10e09d)[_0x285449(0xdb)]+_0x2b82e1,_0x3b2d0b=_0x275cfc[_0x285449(0x451)](_0x3baacc)+this[_0x285449(0x1df)]()*0x2;_0x8b632d=_0x4374db[_0x285449(0x108)](_0x2a01e6,_0x3b2d0b);}else _0x3d791a['match'](_0x37b25d[_0x285449(0x240)])&&(_0x3d791a=_0x3d791a['replace'](_0x37b25d[_0x285449(0x240)],_0x37b25d['textCodeResult']),_0x3d791a=this['convertVariableEscapeCharacters'](_0x3d791a));}return _0x3d791a;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x2fb)]=function(_0x27b778){const _0x10039b=_0x5c5568;for(const _0x1fd07e of VisuMZ[_0x10039b(0x260)][_0x10039b(0x375)][_0x10039b(0x3d6)]){_0x10039b(0x4e8)===_0x10039b(0x10b)?'textLocale'in _0x41f89e?this['textLocale']=_0x231f52(_0x4ed207[_0x10039b(0x2b1)]):this[_0x10039b(0x2b1)]=_0x53f054[_0x10039b(0x260)]['Settings']['Localization'][_0x10039b(0x29c)]||_0x10039b(0x1aa):_0x27b778['match'](_0x1fd07e[_0x10039b(0x240)])&&(_0x27b778=_0x27b778['replace'](_0x1fd07e['textCodeCheck'],_0x1fd07e[_0x10039b(0x1f0)][_0x10039b(0x23c)](this)),_0x27b778=this[_0x10039b(0x4a7)](_0x27b778));}return _0x27b778;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x3d3)]=function(_0x386414){const _0x2b0199=_0x5c5568,_0x27e140=_0x386414>=0x1?$gameActors[_0x2b0199(0x4a4)](_0x386414):null,_0x88f202=_0x27e140?_0x27e140[_0x2b0199(0x50c)]():'',_0x426cfa=Number(VisuMZ[_0x2b0199(0x260)][_0x2b0199(0x375)][_0x2b0199(0x4c6)][_0x2b0199(0x4d2)]);return this[_0x2b0199(0x1c8)]()&&_0x426cfa!==0x0?_0x2b0199(0x12e)!==_0x2b0199(0x12e)?(_0x22bf95=_0x567352[_0x2b0199(0x2fd)](/<LEFT>/gi,_0x2b0199(0x17f)),_0x383ba9=_0x309250[_0x2b0199(0x2fd)](/<\/LEFT>/gi,_0x2b0199(0x227)),_0x21510b=_0x9ea3d[_0x2b0199(0x2fd)](/<CENTER>/gi,'\x1bTEXTALIGNMENT[2]'),_0x1ac508=_0xd220d8[_0x2b0199(0x2fd)](/<\/CENTER>/gi,_0x2b0199(0x227)),_0x58d7ed=_0x98966b[_0x2b0199(0x2fd)](/<RIGHT>/gi,_0x2b0199(0x4ae)),_0x3c8585=_0x106006[_0x2b0199(0x2fd)](/<\/RIGHT>/gi,_0x2b0199(0x227)),_0x1b9f4e):_0x2b0199(0x256)[_0x2b0199(0x49e)](_0x426cfa,_0x88f202):_0x88f202;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x32f)]=function(_0x44ea46){const _0x340b4c=_0x5c5568,_0x4c034e=_0x44ea46>=0x1?$gameParty['members']()[_0x44ea46-0x1]:null,_0x3b32fb=_0x4c034e?_0x4c034e[_0x340b4c(0x50c)]():'',_0x4c4502=Number(VisuMZ['MessageCore']['Settings']['AutoColor'][_0x340b4c(0x4d2)]);return this['isAutoColorAffected']()&&_0x4c4502!==0x0?_0x340b4c(0x256)[_0x340b4c(0x49e)](_0x4c4502,_0x3b32fb):_0x3b32fb;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x450)]=function(_0x2c3ef7){const _0x4de5a6=_0x5c5568;return this[_0x4de5a6(0x1c8)]()&&(_0x2c3ef7=this[_0x4de5a6(0x2f3)](_0x2c3ef7),_0x2c3ef7=this[_0x4de5a6(0x134)](_0x2c3ef7)),_0x2c3ef7;},Window_Base['prototype'][_0x5c5568(0x2f3)]=function(_0x4c42a9){const _0x3ceb8b=_0x5c5568;for(autoColor of VisuMZ[_0x3ceb8b(0x260)][_0x3ceb8b(0x408)]){_0x4c42a9=_0x4c42a9[_0x3ceb8b(0x2fd)](autoColor[0x0],autoColor[0x1]);}return _0x4c42a9;},Window_Base['prototype']['clearActorNameAutoColor']=function(){this['_autoColorActorNames']=[];},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x28c)]=function(){const _0x157fa3=_0x5c5568;this[_0x157fa3(0x4bf)]();const _0x446e91=VisuMZ[_0x157fa3(0x260)][_0x157fa3(0x375)][_0x157fa3(0x4c6)],_0x543c98=_0x446e91[_0x157fa3(0x4d2)];if(_0x543c98<=0x0)return;for(const _0x5e80db of $gameActors[_0x157fa3(0x50d)]){if(_0x157fa3(0x37d)===_0x157fa3(0x4af))this['_autoColorActorNames']=[];else{if(!_0x5e80db)continue;const _0x5f0f6c=_0x5e80db[_0x157fa3(0x50c)]();if(_0x5f0f6c[_0x157fa3(0x199)]()['length']<=0x0)continue;if(/^\d+$/['test'](_0x5f0f6c))continue;if(_0x5f0f6c['match'](/-----/i))continue;let _0x26e5ec=VisuMZ[_0x157fa3(0x260)][_0x157fa3(0x473)](_0x5f0f6c);const _0x378b49=new RegExp('\x5cb'+_0x26e5ec+'\x5cb','g'),_0x3797ab='\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x157fa3(0x49e)](_0x543c98,_0x5f0f6c);this[_0x157fa3(0x207)][_0x157fa3(0x3e2)]([_0x378b49,_0x3797ab]);}}},Window_Base['prototype'][_0x5c5568(0x134)]=function(_0x40f7b1){const _0x5b144b=_0x5c5568;this[_0x5b144b(0x207)]===undefined&&this[_0x5b144b(0x28c)]();for(autoColor of this[_0x5b144b(0x207)]){_0x40f7b1=_0x40f7b1[_0x5b144b(0x2fd)](autoColor[0x0],autoColor[0x1]);}return _0x40f7b1;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x3d8)]=function(_0x2c2da6,_0x19ef66,_0x32e31){const _0x101820=_0x5c5568;if(!_0x2c2da6)return'';const _0x18a459=_0x2c2da6[_0x19ef66];let _0x143f29='';if(_0x18a459&&_0x32e31&&_0x18a459[_0x101820(0x4e5)]){if(_0x101820(0x24a)!=='Yiaqt'){const _0x5919f1=_0x101820(0x4d3);_0x143f29=_0x5919f1[_0x101820(0x49e)](_0x18a459[_0x101820(0x4e5)],_0x18a459[_0x101820(0x50c)]);}else this['_lastGainedItemData']={'type':0x0,'id':0x0,'quantity':0x0};}else _0x18a459?_0x143f29=_0x18a459[_0x101820(0x50c)]:_0x143f29='';return this['isAutoColorAffected']()&&(_0x143f29=this[_0x101820(0x257)](_0x143f29,_0x2c2da6)),_0x143f29;},Window_Base[_0x5c5568(0x21c)]['lastGainedObjectIcon']=function(){const _0x662c00=_0x5c5568,_0xd8a0be=$gameParty['getLastGainedItemData']();if(_0xd8a0be['id']<0x0)return'';let _0x345c7b=null;if(_0xd8a0be[_0x662c00(0x416)]===0x0)_0x345c7b=$dataItems[_0xd8a0be['id']];if(_0xd8a0be[_0x662c00(0x416)]===0x1)_0x345c7b=$dataWeapons[_0xd8a0be['id']];if(_0xd8a0be['type']===0x2)_0x345c7b=$dataArmors[_0xd8a0be['id']];if(!_0x345c7b)return'';return _0x662c00(0x242)[_0x662c00(0x49e)](_0x345c7b[_0x662c00(0x4e5)]);},Window_Base[_0x5c5568(0x21c)]['lastGainedObjectName']=function(_0x117d35){const _0x4baa58=_0x5c5568,_0x271a50=$gameParty[_0x4baa58(0x259)]();if(_0x271a50['id']<0x0)return'';let _0x1a6de3=null;if(_0x271a50[_0x4baa58(0x416)]===0x0)_0x1a6de3=$dataItems[_0x271a50['id']];if(_0x271a50[_0x4baa58(0x416)]===0x1)_0x1a6de3=$dataWeapons[_0x271a50['id']];if(_0x271a50[_0x4baa58(0x416)]===0x2)_0x1a6de3=$dataArmors[_0x271a50['id']];if(!_0x1a6de3)return'';return _0x117d35?'\x1bi[%1]%2'[_0x4baa58(0x49e)](_0x1a6de3[_0x4baa58(0x4e5)],_0x1a6de3[_0x4baa58(0x50c)]):_0x1a6de3[_0x4baa58(0x50c)];},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0xf4)]=function(){const _0x2c5861=_0x5c5568,_0xd54a9a=$gameParty[_0x2c5861(0x259)]();if(_0xd54a9a['id']<=0x0)return'';return _0xd54a9a['quantity'];},Window_Base['prototype'][_0x5c5568(0x257)]=function(_0x136c5f,_0x482f66){const _0x173db8=_0x5c5568,_0x54f744=VisuMZ[_0x173db8(0x260)][_0x173db8(0x375)][_0x173db8(0x4c6)];let _0x35ccf7=0x0;if(_0x482f66===$dataActors)_0x35ccf7=_0x54f744[_0x173db8(0x4d2)];if(_0x482f66===$dataClasses)_0x35ccf7=_0x54f744[_0x173db8(0x22c)];if(_0x482f66===$dataSkills)_0x35ccf7=_0x54f744[_0x173db8(0x3d1)];if(_0x482f66===$dataItems)_0x35ccf7=_0x54f744[_0x173db8(0x13e)];if(_0x482f66===$dataWeapons)_0x35ccf7=_0x54f744[_0x173db8(0x46f)];if(_0x482f66===$dataArmors)_0x35ccf7=_0x54f744[_0x173db8(0x1d0)];if(_0x482f66===$dataEnemies)_0x35ccf7=_0x54f744[_0x173db8(0x376)];if(_0x482f66===$dataStates)_0x35ccf7=_0x54f744[_0x173db8(0x464)];return _0x35ccf7>0x0&&(_0x136c5f=_0x173db8(0x256)['format'](_0x35ccf7,_0x136c5f)),_0x136c5f;},Window_Base[_0x5c5568(0x21c)]['prepareWordWrapEscapeCharacters']=function(_0x747024){const _0x521d78=_0x5c5568;if(_0x747024[_0x521d78(0x1e3)](_0x521d78(0x224))){if(_0x521d78(0x281)===_0x521d78(0x4d7)){if(this[_0x521d78(0x45e)]())return;_0x429833=_0x42e58c[_0x521d78(0x2fd)](/\,/g,''),this[_0x521d78(0x4ca)]=this['_textColorStack']||[],this[_0x521d78(0x4ca)]['unshift'](this[_0x521d78(0x462)][_0x521d78(0x358)]),_0x491398[_0x521d78(0x260)]['Window_Base_changeTextColor'][_0x521d78(0x40c)](this,_0x104c65);}else return this['setWordWrap'](![]),_0x747024=_0x747024[_0x521d78(0x2fd)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x747024;}_0x747024=_0x747024[_0x521d78(0x2fd)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x1da33c,_0x511704)=>this['setWordWrap'](!![])),_0x747024=_0x747024[_0x521d78(0x2fd)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x22f2e8,_0x115f43)=>this[_0x521d78(0x3f9)](![])),_0x747024=_0x747024[_0x521d78(0x2fd)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x15fb71,_0x77226d)=>this['setWordWrap'](![]));if(_0x747024[_0x521d78(0x4d8)](Window_Message[_0x521d78(0x4a3)]))this[_0x521d78(0x3f9)](![]);else _0x747024[_0x521d78(0x4d8)](Window_Message[_0x521d78(0x4d0)])&&this[_0x521d78(0x3f9)](![]);if(!this[_0x521d78(0x3be)]())return _0x747024=_0x747024[_0x521d78(0x2fd)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x747024;if(_0x747024[_0x521d78(0x4df)]<=0x0)return _0x747024;return _0x747024[_0x521d78(0x4d8)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)&&(_0x747024=VisuMZ[_0x521d78(0x260)][_0x521d78(0x46b)](_0x747024)[_0x521d78(0x456)]('')),VisuMZ[_0x521d78(0x260)][_0x521d78(0x375)][_0x521d78(0x509)][_0x521d78(0x434)]?(_0x747024=_0x747024[_0x521d78(0x2fd)](/[\n\r]+/g,'\x20'),_0x747024=_0x747024[_0x521d78(0x2fd)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x747024=_0x747024[_0x521d78(0x2fd)](/[\n\r]+/g,''),_0x747024=_0x747024['replace'](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x747024=this['addWrapBreakAfterPunctuation'](_0x747024),_0x747024=_0x747024[_0x521d78(0x10c)]('\x20')[_0x521d78(0x456)](_0x521d78(0x50b)),_0x747024=_0x747024[_0x521d78(0x2fd)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x747024=_0x747024[_0x521d78(0x2fd)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x747024;},VisuMZ['MessageCore'][_0x5c5568(0x46b)]=function(_0x39a9db){const _0x38f3b4=_0x5c5568;let _0x29ba61=[],_0x15ffdb='';while(_0x39a9db[_0x38f3b4(0x4df)]>0x0){const _0x710a2f=_0x39a9db['charAt'](0x0);_0x39a9db=_0x39a9db['slice'](0x1),_0x710a2f[_0x38f3b4(0x4d8)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)?(_0x15ffdb[_0x38f3b4(0x4df)]>0x0&&(_0x29ba61[_0x38f3b4(0x3e2)](_0x15ffdb),_0x15ffdb=''),_0x29ba61['push'](_0x710a2f+_0x38f3b4(0x1a9))):_0x15ffdb+=_0x710a2f;}return _0x15ffdb[_0x38f3b4(0x4df)]>0x0&&(_0x29ba61[_0x38f3b4(0x3e2)](_0x15ffdb),_0x15ffdb=''),_0x29ba61;},Window_Base[_0x5c5568(0x21c)]['addWrapBreakAfterPunctuation']=function(_0x7e266a){return _0x7e266a;},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x14e)]=Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x48c)],Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x48c)]=function(_0x39ba40){const _0xb1ea=_0x5c5568;VisuMZ[_0xb1ea(0x260)]['Window_Base_processNewLine'][_0xb1ea(0x40c)](this,_0x39ba40),this['processTextAlignmentX'](_0x39ba40);},VisuMZ[_0x5c5568(0x260)]['Window_Base_processControlCharacter']=Window_Base[_0x5c5568(0x21c)]['processControlCharacter'],Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x25a)]=function(_0x481c21,_0x58e2ed){const _0x3dd463=_0x5c5568;VisuMZ[_0x3dd463(0x260)][_0x3dd463(0x1b8)][_0x3dd463(0x40c)](this,_0x481c21,_0x58e2ed);if(_0x58e2ed===_0x3dd463(0x50b))this['processWrapBreak'](_0x481c21);else _0x58e2ed===_0x3dd463(0x1a9)&&this[_0x3dd463(0xef)](_0x481c21,!![]);},Window_Base['prototype']['obtainEscapeString']=function(_0x3b8dcf){const _0x436b7d=_0x5c5568;var _0x329300=/^\<(.*?)\>/['exec'](_0x3b8dcf[_0x436b7d(0x33f)]['slice'](_0x3b8dcf[_0x436b7d(0x16f)]));return _0x329300?_0x436b7d(0x2cd)!==_0x436b7d(0x2cd)?_0x54281d:(_0x3b8dcf['index']+=_0x329300[0x0][_0x436b7d(0x4df)],String(_0x329300[0x0][_0x436b7d(0xcf)](0x1,_0x329300[0x0][_0x436b7d(0x4df)]-0x1))):'';},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x2da)]=Window_Base['prototype'][_0x5c5568(0x2a4)],Window_Base[_0x5c5568(0x21c)]['processEscapeCharacter']=function(_0x27269e,_0x46cfe8){const _0x39ee57=_0x5c5568;switch(_0x27269e){case'C':if(_0x46cfe8['drawing']){if(_0x39ee57(0x2d4)===_0x39ee57(0x2d4))VisuMZ[_0x39ee57(0x260)][_0x39ee57(0x2da)][_0x39ee57(0x40c)](this,_0x27269e,_0x46cfe8);else{if(this['_MessageCoreSettings']===_0x3cf58b)this[_0x39ee57(0x435)]();this[_0x39ee57(0x30b)]['choiceMinWidth']=_0x2adb02||0x0;}}else this['obtainEscapeParam'](_0x46cfe8);break;case'I':case'{':case'}':VisuMZ['MessageCore'][_0x39ee57(0x2da)][_0x39ee57(0x40c)](this,_0x27269e,_0x46cfe8);break;case'FS':this['processFsTextCode'](_0x46cfe8);break;case'PX':this[_0x39ee57(0x459)](_0x46cfe8);break;case'PY':this['processPyTextCode'](_0x46cfe8);break;case _0x39ee57(0x41d):this[_0x39ee57(0x1ca)](this[_0x39ee57(0x423)](_0x46cfe8));break;case _0x39ee57(0x49b):this[_0x39ee57(0x28d)](_0x46cfe8);break;case'COLORLOCK':this[_0x39ee57(0x22d)](_0x46cfe8);break;case _0x39ee57(0x367):this[_0x39ee57(0x1e7)](_0x46cfe8);break;case _0x39ee57(0x414):this[_0x39ee57(0x4c4)](this[_0x39ee57(0x423)](_0x46cfe8));break;case _0x39ee57(0x20a):this[_0x39ee57(0x4a2)](_0x46cfe8);break;case _0x39ee57(0x30d):this[_0x39ee57(0x198)](_0x46cfe8);break;case _0x39ee57(0x491):this[_0x39ee57(0x37c)](_0x46cfe8);break;case _0x39ee57(0x31c):this[_0x39ee57(0x390)](_0x46cfe8);break;case _0x39ee57(0x136):this[_0x39ee57(0xef)](_0x46cfe8);break;case _0x39ee57(0x3b0):this[_0x39ee57(0xef)](_0x46cfe8,!![]);break;default:this[_0x39ee57(0x387)](_0x27269e,_0x46cfe8);}},Window_Base[_0x5c5568(0x21c)]['processMessageCoreEscapeActions']=function(_0x104317,_0x33b187){const _0x10a2df=_0x5c5568;for(const _0x32c990 of VisuMZ['MessageCore'][_0x10a2df(0x375)]['TextCodeActions']){if(_0x10a2df(0x4ac)===_0x10a2df(0x4ac)){if(_0x32c990['Match']===_0x104317){if('fBECV'==='fBECV'){if(_0x32c990[_0x10a2df(0x4f0)]==='')this['obtainEscapeParam'](_0x33b187);_0x32c990[_0x10a2df(0x1d8)][_0x10a2df(0x40c)](this,_0x33b187);if(this[_0x10a2df(0x362)]===Window_Message){const _0x6ffdb2=_0x32c990[_0x10a2df(0x160)]||0x0;if(_0x6ffdb2>0x0)this[_0x10a2df(0x2d1)](_0x6ffdb2);}}else{_0x127dda[_0x10a2df(0x260)][_0x10a2df(0x49a)][_0x10a2df(0x40c)](this),this[_0x10a2df(0x322)]();if(this[_0x10a2df(0x2ed)])this['messagePositionReset']();}}}else _0x2b7cdb[_0x10a2df(0x260)]['Window_Base_update'][_0x10a2df(0x40c)](this),this[_0x10a2df(0x243)]();}},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x2ca)]=function(){const _0x70486d=_0x5c5568;this[_0x70486d(0x462)][_0x70486d(0x37f)]+=VisuMZ[_0x70486d(0x260)][_0x70486d(0x375)]['General'][_0x70486d(0x48b)],this[_0x70486d(0x462)][_0x70486d(0x37f)]=Math['min'](this[_0x70486d(0x462)]['fontSize'],VisuMZ[_0x70486d(0x260)][_0x70486d(0x375)][_0x70486d(0x2e0)]['FontBiggerCap']);},Window_Base['prototype'][_0x5c5568(0x26e)]=function(){const _0x25cfc6=_0x5c5568;this[_0x25cfc6(0x462)][_0x25cfc6(0x37f)]-=VisuMZ[_0x25cfc6(0x260)][_0x25cfc6(0x375)][_0x25cfc6(0x2e0)][_0x25cfc6(0x48b)],this[_0x25cfc6(0x462)][_0x25cfc6(0x37f)]=Math[_0x25cfc6(0x108)](this['contents'][_0x25cfc6(0x37f)],VisuMZ[_0x25cfc6(0x260)][_0x25cfc6(0x375)][_0x25cfc6(0x2e0)][_0x25cfc6(0x44c)]);},Window_Base[_0x5c5568(0x21c)]['processFsTextCode']=function(_0x4c1f7c){const _0x16fb97=_0x5c5568,_0x278f94=this[_0x16fb97(0x423)](_0x4c1f7c);this['contents']['fontSize']=_0x278f94[_0x16fb97(0x47a)](VisuMZ['MessageCore'][_0x16fb97(0x375)][_0x16fb97(0x2e0)][_0x16fb97(0x44c)],VisuMZ[_0x16fb97(0x260)][_0x16fb97(0x375)][_0x16fb97(0x2e0)][_0x16fb97(0x3d7)]);},Window_Base[_0x5c5568(0x21c)]['maxFontSizeInLine']=function(_0x11cd03){const _0x594592=_0x5c5568;let _0x5cd37d=this['contents'][_0x594592(0x37f)];const _0x1332f6=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x4b687b=_0x1332f6[_0x594592(0x24c)](_0x11cd03);if(!_0x4b687b)break;const _0x10a1d6=String(_0x4b687b[0x1])[_0x594592(0x497)]();if(_0x10a1d6==='{')_0x594592(0x3b1)===_0x594592(0x4fe)?_0x3196c4=_0x13b9a2(_0x43e8c3['$1'])[_0x594592(0x31a)]()[_0x594592(0x199)]():this['makeFontBigger']();else{if(_0x10a1d6==='}')this['makeFontSmaller']();else _0x10a1d6==='FS'&&('tXzYT'!=='hwOTK'?this['contents'][_0x594592(0x37f)]=parseInt(_0x4b687b[0x3])['clamp'](VisuMZ[_0x594592(0x260)][_0x594592(0x375)][_0x594592(0x2e0)][_0x594592(0x44c)],VisuMZ[_0x594592(0x260)]['Settings'][_0x594592(0x2e0)][_0x594592(0x3d7)]):_0x2662c1=_0x389d07[_0x594592(0x2fd)](_0x5cfcdc[0x0],_0x3275d0[0x1]));}this[_0x594592(0x462)]['fontSize']>_0x5cd37d&&(_0x594592(0x1cb)==='TwdvC'?(this[_0x594592(0x50a)]['x']=_0x5d9e94[_0x594592(0x32c)](this[_0x594592(0xdb)]/0x2),this['_dimmerSprite'][_0x594592(0x312)]['x']=0.5,this[_0x594592(0x50a)]['scale']['x']=_0x4a9616[_0x594592(0xdb)]):_0x5cd37d=this[_0x594592(0x462)]['fontSize']);}return _0x5cd37d;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x459)]=function(_0x2192c9){const _0x44bbd1=_0x5c5568;_0x2192c9['x']=this[_0x44bbd1(0x423)](_0x2192c9);if(VisuMZ[_0x44bbd1(0x260)]['Settings'][_0x44bbd1(0x2e0)][_0x44bbd1(0x38d)]){if(_0x44bbd1(0x318)===_0x44bbd1(0x1fe))return this[_0x44bbd1(0x423)](_0x3a6ec9);else _0x2192c9['x']+=_0x2192c9['startX'];}},Window_Base[_0x5c5568(0x21c)]['processPyTextCode']=function(_0x5c0c8f){const _0x512ac1=_0x5c5568;_0x5c0c8f['y']=this[_0x512ac1(0x423)](_0x5c0c8f),VisuMZ[_0x512ac1(0x260)]['Settings'][_0x512ac1(0x2e0)][_0x512ac1(0x38d)]&&(_0x5c0c8f['y']+=_0x5c0c8f[_0x512ac1(0x377)]);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x1ca)]=function(_0xaca091){const _0x334b40=_0x5c5568;this[_0x334b40(0x462)][_0x334b40(0xfb)]=!!_0xaca091;},Window_Base['prototype']['processFontChangeItalic']=function(_0x4e3e39){const _0x5c08e5=_0x5c5568;this[_0x5c08e5(0x462)][_0x5c08e5(0x3b5)]=!!_0x4e3e39;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x37c)]=function(_0x3f56f9){const _0x1bfc81=_0x5c5568,_0x1ba921=this['obtainEscapeParam'](_0x3f56f9);if(!_0x3f56f9[_0x1bfc81(0x225)])return;switch(_0x1ba921){case 0x0:this[_0x1bfc81(0x255)](_0x1bfc81(0x2d0));return;case 0x1:this['setTextAlignment'](_0x1bfc81(0x273));break;case 0x2:this['setTextAlignment'](_0x1bfc81(0xd4));break;case 0x3:this[_0x1bfc81(0x255)](_0x1bfc81(0x443));break;}this[_0x1bfc81(0x2eb)](_0x3f56f9);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x2eb)]=function(_0x244502){const _0x2662da=_0x5c5568;if(!_0x244502[_0x2662da(0x225)])return;if(_0x244502[_0x2662da(0x379)])return;if(this[_0x2662da(0x139)]()===_0x2662da(0x2d0))return;let _0x316d52=_0x244502['text'][_0x2662da(0x2fc)]('\x1bTEXTALIGNMENT',_0x244502['index']+0x1),_0x1a154d=_0x244502[_0x2662da(0x33f)][_0x2662da(0x2fc)]('\x0a',_0x244502[_0x2662da(0x16f)]+0x1);if(_0x316d52<0x0)_0x316d52=_0x244502[_0x2662da(0x33f)]['length']+0x1;if(_0x1a154d>0x0)_0x316d52=Math[_0x2662da(0x135)](_0x316d52,_0x1a154d);const _0x483a7e=_0x244502[_0x2662da(0x33f)]['substring'](_0x244502['index'],_0x316d52),_0x3ec22e=this['textSizeExTextAlignment'](_0x483a7e)[_0x2662da(0xdb)],_0x599591=_0x244502['width']||this[_0x2662da(0x2e1)]-0x8,_0x2fb760=this[_0x2662da(0x362)]===Window_Message&&$gameMessage[_0x2662da(0x309)]()!=='';switch(this['getTextAlignment']()){case _0x2662da(0x273):_0x244502['x']=_0x244502['startX'];break;case _0x2662da(0xd4):_0x244502['x']=_0x244502[_0x2662da(0x369)],_0x244502['x']+=Math[_0x2662da(0x300)]((_0x599591-_0x3ec22e)/0x2);_0x2fb760&&(_0x244502['x']-=_0x244502[_0x2662da(0x369)]/0x2);break;case'right':_0x244502['x']=_0x599591-_0x3ec22e+_0x244502[_0x2662da(0x369)];if(_0x2fb760){if(_0x2662da(0x40b)===_0x2662da(0x38a)){let _0x260e20='';_0x260e20+=_0x2662da(0x405),_0x260e20+=_0x2662da(0x331),_0x591b44(_0x260e20),_0x1ebc90[_0x2662da(0x373)]();}else _0x244502['x']-=_0x244502[_0x2662da(0x369)];}break;}},Window_Base[_0x5c5568(0x21c)]['textSizeExTextAlignment']=function(_0xaaba0a){const _0xef69c1=_0x5c5568;_0xaaba0a=_0xaaba0a[_0xef69c1(0x2fd)](/\x1b!/g,''),_0xaaba0a=_0xaaba0a[_0xef69c1(0x2fd)](/\x1b\|/g,''),_0xaaba0a=_0xaaba0a[_0xef69c1(0x2fd)](/\x1b\./g,'');const _0x4c86ba=this[_0xef69c1(0x20c)](_0xaaba0a,0x0,0x0,0x0),_0x2eedee=this[_0xef69c1(0x36f)]();return _0x4c86ba[_0xef69c1(0x225)]=![],this[_0xef69c1(0x275)](_0x4c86ba),this[_0xef69c1(0x22f)](_0x2eedee),{'width':_0x4c86ba[_0xef69c1(0x180)],'height':_0x4c86ba['outputHeight']};},Window_Base[_0x5c5568(0x3b9)]=VisuMZ['MessageCore'][_0x5c5568(0x375)][_0x5c5568(0x509)][_0x5c5568(0x2e2)]||0x0,Window_Base[_0x5c5568(0x21c)][_0x5c5568(0xef)]=function(_0x407a56,_0x246279){const _0x2846ab=_0x5c5568,_0x261181=(_0x407a56[_0x2846ab(0x379)]?-0x1:0x1)*this[_0x2846ab(0x230)]('\x20');if(!_0x246279)_0x407a56['x']+=_0x261181;if(this[_0x2846ab(0x423)](_0x407a56)>0x0&&!_0x246279)_0x407a56['x']+=_0x261181;if(_0x407a56['rtl'])return;let _0x4a4a71;_0x246279?_0x4a4a71=_0x407a56[_0x2846ab(0x33f)][_0x2846ab(0x2fc)](_0x2846ab(0x1a9),_0x407a56[_0x2846ab(0x16f)]+0x1):_0x4a4a71=_0x407a56[_0x2846ab(0x33f)][_0x2846ab(0x2fc)]('\x1bWrapBreak[0]',_0x407a56['index']+0x1);let _0xaa19cd=_0x407a56[_0x2846ab(0x33f)][_0x2846ab(0x2fc)]('\x0a',_0x407a56[_0x2846ab(0x16f)]+0x1);if(_0x4a4a71<0x0)_0x4a4a71=_0x407a56[_0x2846ab(0x33f)][_0x2846ab(0x4df)]+0x1;if(_0xaa19cd>0x0)_0x4a4a71=Math[_0x2846ab(0x135)](_0x4a4a71,_0xaa19cd);const _0xb9c5f3=_0x407a56[_0x2846ab(0x33f)][_0x2846ab(0x496)](_0x407a56[_0x2846ab(0x16f)],_0x4a4a71),_0x266f9d=this[_0x2846ab(0x317)](_0xb9c5f3)['width'];let _0x53a917=_0x407a56[_0x2846ab(0xdb)]||this['innerWidth'];_0x53a917-=Window_Base['WORD_WRAP_PADDING'];if(this[_0x2846ab(0x362)]===Window_Message){if('bMMKR'==='PnaCt'){let _0x2e20d1='';if(_0x27b9ea)_0x2e20d1+=_0x2846ab(0x4d1)[_0x2846ab(0x49e)](_0x4756bb[_0x2846ab(0x43b)]()['iconIndex']);return _0x2e20d1+=_0x469285[_0x2846ab(0x43b)]()[_0x2846ab(0x50c)],_0x2e20d1;}else{const _0x1fb0e6=$gameMessage['faceName']()===''?0x0:ImageManager[_0x2846ab(0x3cb)]+0x14;_0x53a917-=_0x1fb0e6,VisuMZ[_0x2846ab(0x260)][_0x2846ab(0x375)][_0x2846ab(0x509)][_0x2846ab(0x2a2)]&&(_0x2846ab(0x163)===_0x2846ab(0x163)?_0x53a917-=_0x1fb0e6:_0x38a603=_0x2846ab(0x397));}}let _0x23f937=![];_0x407a56['x']+_0x266f9d>_0x407a56[_0x2846ab(0x369)]+_0x53a917&&(_0x2846ab(0x250)!==_0x2846ab(0x35b)?_0x23f937=!![]:(_0x27ceb2=_0x22fe7b['getColor'](_0x258013['$1'])['trim'](),_0x2b2151=_0x3781aa[_0x2846ab(0x3f0)](_0x166045['$2'])[_0x2846ab(0x199)](),_0x264aab=!![])),_0x266f9d===0x0&&(_0x2846ab(0x238)===_0x2846ab(0x238)?_0x23f937=![]:(_0x11e882[_0x2846ab(0x3e2)](_0x23b84b),_0x3acaad='')),_0x23f937&&(_0x2846ab(0x3d5)!==_0x2846ab(0x3d5)?_0xfc6a18[_0x2846ab(0x4d8)](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x587b85=_0xdc9caa[_0x2846ab(0x108)](_0x9b986c,_0x5d959e(_0x7cd8ce['$1']))):_0x407a56[_0x2846ab(0x33f)]=_0x407a56[_0x2846ab(0x33f)]['slice'](0x0,_0x407a56['index'])+'\x0a'+_0x407a56[_0x2846ab(0x33f)][_0x2846ab(0x3d4)](_0x407a56[_0x2846ab(0x16f)]));},Window_Base['prototype'][_0x5c5568(0x317)]=function(_0x324c29){const _0x3d7299=_0x5c5568,_0x557136=this[_0x3d7299(0x20c)](_0x324c29,0x0,0x0,0x0),_0x1dfcba=this[_0x3d7299(0x36f)]();return _0x557136[_0x3d7299(0x225)]=![],this['setWordWrap'](![]),this[_0x3d7299(0x275)](_0x557136),this[_0x3d7299(0x3f9)](!![]),this[_0x3d7299(0x22f)](_0x1dfcba),{'width':_0x557136['outputWidth'],'height':_0x557136[_0x3d7299(0x3c2)]};},Window_Base['prototype'][_0x5c5568(0x1e7)]=function(_0x10600d){const _0xf58878=_0x5c5568;return this[_0xf58878(0x423)](_0x10600d);},Window_Base['prototype'][_0x5c5568(0x4a2)]=function(_0x265043){const _0x47b2c8=_0x5c5568,_0x273e04=this[_0x47b2c8(0x1c6)](_0x265043)[_0x47b2c8(0x10c)](',');if(!_0x265043['drawing'])return;const _0x4a4aab=_0x273e04[0x0]['trim'](),_0x591d0e=_0x273e04[0x1]||0x0,_0x140634=_0x273e04[0x2]||0x0,_0x17c640=ImageManager[_0x47b2c8(0x36d)](_0x4a4aab),_0xad68d7=this['contents'][_0x47b2c8(0x246)];_0x17c640[_0x47b2c8(0x26c)](this[_0x47b2c8(0x197)][_0x47b2c8(0x23c)](this,_0x17c640,_0x265043['x'],_0x265043['y'],_0x591d0e,_0x140634,_0xad68d7));},Window_Base[_0x5c5568(0x21c)]['drawBackPicture']=function(_0x5aa90c,_0xe658ee,_0x2f8569,_0x4343ae,_0x217190,_0x2f71d2){const _0x29a41a=_0x5c5568;_0x4343ae=_0x4343ae||_0x5aa90c[_0x29a41a(0xdb)],_0x217190=_0x217190||_0x5aa90c[_0x29a41a(0x4a6)],this[_0x29a41a(0x2a7)][_0x29a41a(0x246)]=_0x2f71d2,this[_0x29a41a(0x2a7)][_0x29a41a(0x432)](_0x5aa90c,0x0,0x0,_0x5aa90c[_0x29a41a(0xdb)],_0x5aa90c[_0x29a41a(0x4a6)],_0xe658ee,_0x2f8569,_0x4343ae,_0x217190),this[_0x29a41a(0x2a7)]['paintOpacity']=0xff;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x28d)]=function(_0x119356){const _0x46629a=_0x5c5568,_0x2e108a=this[_0x46629a(0x1c6)](_0x119356)['split'](',');if(!_0x119356[_0x46629a(0x225)])return;const _0x14a8d0=_0x2e108a[0x0]['trim'](),_0x316245=ImageManager[_0x46629a(0x36d)](_0x14a8d0),_0x3a04cf=JsonEx[_0x46629a(0xf3)](_0x119356),_0x3d1aa0=this['contents'][_0x46629a(0x246)];_0x316245[_0x46629a(0x26c)](this[_0x46629a(0x368)][_0x46629a(0x23c)](this,_0x316245,_0x3a04cf,_0x3d1aa0));},Window_Base[_0x5c5568(0x21c)]['drawBackCenteredPicture']=function(_0x1f0563,_0x151e6e,_0x4514e2){const _0x9329a4=_0x5c5568,_0x449c51=_0x151e6e[_0x9329a4(0xdb)]||this[_0x9329a4(0x2e1)],_0x5c4357=this[_0x9329a4(0xe2)]!==undefined?this[_0x9329a4(0x4d4)]():this[_0x9329a4(0x4c1)],_0x218fbb=_0x449c51/_0x1f0563[_0x9329a4(0xdb)],_0x1b9051=_0x5c4357/_0x1f0563[_0x9329a4(0x4a6)],_0x46af88=Math['min'](_0x218fbb,_0x1b9051,0x1),_0x1525bc=this[_0x9329a4(0xe2)]!==undefined?(this[_0x9329a4(0x2b3)](0x0)[_0x9329a4(0x4a6)]-this[_0x9329a4(0x3ad)]())/0x2:0x0,_0xb7d618=_0x1f0563[_0x9329a4(0xdb)]*_0x46af88,_0x38a24c=_0x1f0563[_0x9329a4(0x4a6)]*_0x46af88,_0x382db1=Math['floor']((_0x449c51-_0xb7d618)/0x2)+_0x151e6e[_0x9329a4(0x369)],_0x418996=Math[_0x9329a4(0x300)]((_0x5c4357-_0x38a24c)/0x2)+_0x151e6e[_0x9329a4(0x377)]-_0x1525bc*0x2;this[_0x9329a4(0x2a7)]['paintOpacity']=_0x4514e2,this['contentsBack'][_0x9329a4(0x432)](_0x1f0563,0x0,0x0,_0x1f0563[_0x9329a4(0xdb)],_0x1f0563['height'],_0x382db1,_0x418996,_0xb7d618,_0x38a24c),this[_0x9329a4(0x2a7)]['paintOpacity']=0xff;},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x22d)]=function(_0x2cfdc6){const _0x4056a9=_0x5c5568,_0x235f03=this[_0x4056a9(0x423)](_0x2cfdc6);if(_0x2cfdc6[_0x4056a9(0x225)])this['setColorLock'](_0x235f03>0x0);},Window_Base[_0x5c5568(0x21c)][_0x5c5568(0x390)]=function(_0x32b275){const _0x19991d=_0x5c5568,_0xa32964=this[_0x19991d(0x423)](_0x32b275);this['constructor']===Window_Message&&_0x32b275['drawing']&&(_0x19991d(0x370)!==_0x19991d(0x370)?(_0x2e33c[_0x19991d(0x260)][_0x19991d(0x35e)][_0x19991d(0x40c)](this),this[_0x19991d(0x435)]()):this['startWait'](_0xa32964));},Window_Help['prototype']['resetWordWrap']=function(){const _0x3ff153=_0x5c5568;this[_0x3ff153(0x3f9)]($gameSystem[_0x3ff153(0x4de)]());},Window_Help[_0x5c5568(0x21c)][_0x5c5568(0x1c8)]=function(){return!![];},VisuMZ['MessageCore']['Window_Help_refresh']=Window_Help['prototype'][_0x5c5568(0x4c7)],Window_Help[_0x5c5568(0x21c)]['refresh']=function(){const _0x1deda8=_0x5c5568;this[_0x1deda8(0x4bf)](),VisuMZ[_0x1deda8(0x260)][_0x1deda8(0x1ad)][_0x1deda8(0x40c)](this),this[_0x1deda8(0x33d)]();},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x1b1)]=Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x384)],Window_Options['prototype'][_0x5c5568(0x384)]=function(){const _0x18e20e=_0x5c5568;VisuMZ[_0x18e20e(0x260)][_0x18e20e(0x1b1)][_0x18e20e(0x40c)](this),this[_0x18e20e(0x1db)]();},Window_Options[_0x5c5568(0x21c)]['addMessageCoreCommands']=function(){const _0x26621f=_0x5c5568;VisuMZ[_0x26621f(0x260)][_0x26621f(0x375)][_0x26621f(0x505)]['AddOption']&&TextManager[_0x26621f(0x151)]()&&this[_0x26621f(0x3eb)]();if(VisuMZ[_0x26621f(0x260)][_0x26621f(0x375)][_0x26621f(0x430)][_0x26621f(0x13f)]){if('gOOub'!==_0x26621f(0x4d9))this['addMessageCoreTextSpeedCommand']();else var _0x438f63=new _0x4d7b7a('\x5cb'+_0x38a793+'\x5cb','g');}},Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x3eb)]=function(){const _0x10f99b=_0x5c5568,_0x303b2e=TextManager[_0x10f99b(0x469)],_0x1ae3d9=_0x10f99b(0x2b1);this[_0x10f99b(0x3a9)](_0x303b2e,_0x1ae3d9);},Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x26b)]=function(){const _0x2252c5=_0x5c5568,_0x6f4e72=TextManager['messageCoreTextSpeed'],_0x2ce518=_0x2252c5(0x371);this[_0x2252c5(0x3a9)](_0x6f4e72,_0x2ce518);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x42c)]=Window_Options['prototype']['statusText'],Window_Options[_0x5c5568(0x21c)][_0x5c5568(0xf6)]=function(_0x213483){const _0x357852=_0x5c5568,_0x175421=this[_0x357852(0x426)](_0x213483);if(_0x175421===_0x357852(0x2b1))return this[_0x357852(0x4b5)]();if(_0x175421===_0x357852(0x371))return this['textSpeedStatusText']();return VisuMZ[_0x357852(0x260)][_0x357852(0x42c)][_0x357852(0x40c)](this,_0x213483);},Window_Options['prototype'][_0x5c5568(0x4b5)]=function(){const _0x1c8a3c=_0x5c5568,_0xe0c3c6=ConfigManager[_0x1c8a3c(0x2b1)];return TextManager['getLanguageName'](_0xe0c3c6);},Window_Options['prototype'][_0x5c5568(0x158)]=function(){const _0x505b50=_0x5c5568,_0xb1dca6=this['getConfigValue'](_0x505b50(0x371));return _0xb1dca6>0xa?TextManager[_0x505b50(0x2a9)]:_0xb1dca6;},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x270)]=Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x292)],Window_Options['prototype'][_0x5c5568(0x292)]=function(_0x199234){const _0x4f78dd=_0x5c5568;if(_0x199234===_0x4f78dd(0x2b1))return!![];if(_0x199234===_0x4f78dd(0x371))return!![];return VisuMZ['MessageCore']['Window_Options_isVolumeSymbol'][_0x4f78dd(0x40c)](this,_0x199234);},VisuMZ[_0x5c5568(0x260)]['Window_Options_changeVolume']=Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x45f)],Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x45f)]=function(_0x13df3f,_0x4b19b6,_0x3224e8){const _0x426d09=_0x5c5568;if(_0x13df3f===_0x426d09(0x2b1))return this[_0x426d09(0x2c0)](_0x4b19b6,_0x3224e8);if(_0x13df3f==='textSpeed')return this[_0x426d09(0x1a3)](_0x13df3f,_0x4b19b6,_0x3224e8);VisuMZ[_0x426d09(0x260)][_0x426d09(0x47e)][_0x426d09(0x40c)](this,_0x13df3f,_0x4b19b6,_0x3224e8);},Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x2c0)]=function(_0x14f412,_0x26510b){const _0xc0dc45=_0x5c5568,_0x29ee77=VisuMZ['MessageCore']['Settings'][_0xc0dc45(0x505)][_0xc0dc45(0x503)]||[],_0x283d6c=ConfigManager[_0xc0dc45(0x2b1)];let _0x4e254f=_0x29ee77[_0xc0dc45(0x2fc)](_0x283d6c);_0x4e254f+=_0x14f412?0x1:-0x1;if(_0x4e254f>=_0x29ee77['length'])_0x4e254f=_0x26510b?0x0:_0x29ee77['length']-0x1;if(_0x4e254f<0x0)_0x4e254f=_0x26510b?_0x29ee77[_0xc0dc45(0x4df)]-0x1:0x0;this[_0xc0dc45(0x3f6)](_0xc0dc45(0x2b1),_0x29ee77[_0x4e254f]);},Window_Options[_0x5c5568(0x21c)][_0x5c5568(0x1a3)]=function(_0x4d68d6,_0x84fc81,_0x280c54){const _0x44aeaf=_0x5c5568,_0x3d9f5a=this['getConfigValue'](_0x4d68d6),_0x4b7e39=0x1,_0x29860e=_0x3d9f5a+(_0x84fc81?_0x4b7e39:-_0x4b7e39);_0x29860e>0xb&&_0x280c54?this[_0x44aeaf(0x3f6)](_0x4d68d6,0x1):this[_0x44aeaf(0x3f6)](_0x4d68d6,_0x29860e['clamp'](0x1,0xb));},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x3fb)]=function(){const _0x513669=_0x5c5568;let _0x57df8e=Window_Base[_0x513669(0x21c)][_0x513669(0x3fb)][_0x513669(0x40c)](this);return _0x57df8e-=this['addedHeight'](),_0x57df8e;},Window_Message[_0x5c5568(0x21c)]['refreshDimmerBitmap']=function(){const _0x30804a=_0x5c5568;Window_Base[_0x30804a(0x21c)]['refreshDimmerBitmap']['call'](this),VisuMZ[_0x30804a(0x260)][_0x30804a(0x375)][_0x30804a(0x2e0)][_0x30804a(0x418)]&&(_0x30804a(0x193)!=='Yscoc'?this[_0x30804a(0x286)]=_0x38023a:this['stretchDimmerSprite']());},Window_Message['prototype'][_0x5c5568(0x107)]=function(){const _0x3ecd40=_0x5c5568;this[_0x3ecd40(0x50a)]['x']=Math['round'](this[_0x3ecd40(0xdb)]/0x2),this[_0x3ecd40(0x50a)][_0x3ecd40(0x312)]['x']=0.5,this[_0x3ecd40(0x50a)][_0x3ecd40(0x1f3)]['x']=Graphics['width'];},VisuMZ[_0x5c5568(0x260)]['Window_Message_clearFlags']=Window_Message[_0x5c5568(0x21c)]['clearFlags'],Window_Message['prototype'][_0x5c5568(0x322)]=function(){const _0x47ded9=_0x5c5568;VisuMZ['MessageCore']['Window_Message_clearFlags'][_0x47ded9(0x40c)](this),this[_0x47ded9(0x4bf)](),this[_0x47ded9(0x33d)](),this[_0x47ded9(0x506)](![]),this[_0x47ded9(0x255)]('default'),this['setTextDelay'](VisuMZ['MessageCore'][_0x47ded9(0x375)]['General']['MessageTextDelay']);},Window_Message[_0x5c5568(0x21c)]['resetWordWrap']=function(){const _0x4239b8=_0x5c5568;this[_0x4239b8(0x3f9)]($gameSystem[_0x4239b8(0x174)]());},Window_Message['prototype'][_0x5c5568(0x1c8)]=function(){return!![];},Window_Message[_0x5c5568(0x21c)]['setTextDelay']=function(_0x593db5){const _0x547493=_0x5c5568,_0x5769d8=0xb-ConfigManager[_0x547493(0x371)];_0x593db5=Math[_0x547493(0x32c)](_0x593db5*_0x5769d8),this['_textDelayCount']=_0x593db5,this[_0x547493(0x2af)]=_0x593db5;},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x17a)]=Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x307)],Window_Message['prototype'][_0x5c5568(0x307)]=function(){const _0x15a76d=_0x5c5568;return VisuMZ[_0x15a76d(0x260)][_0x15a76d(0x17a)][_0x15a76d(0x40c)](this)||Input[_0x15a76d(0x2df)](VisuMZ[_0x15a76d(0x260)][_0x15a76d(0x375)][_0x15a76d(0x2e0)][_0x15a76d(0xe0)]);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x2ae)]=Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x213)],Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x213)]=function(){const _0x11e0ea=_0x5c5568;let _0x349cbd=this['y'];this['x']=Math[_0x11e0ea(0x32c)]((Graphics['boxWidth']-this['width'])/0x2),VisuMZ['MessageCore'][_0x11e0ea(0x2ae)][_0x11e0ea(0x40c)](this);if(this[_0x11e0ea(0x147)])this['y']=_0x349cbd;this['updateXyOffsets'](),this['updateForcedPlacement'](),this[_0x11e0ea(0x1ec)](),this['updateChoiceListHelpWindowPlacement']();},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x324)]=Window_Message[_0x5c5568(0x21c)]['newPage'],Window_Message[_0x5c5568(0x21c)]['newPage']=function(_0x5f0faa){const _0x4c669d=_0x5c5568;this[_0x4c669d(0x2cb)](_0x5f0faa),this[_0x4c669d(0x262)](_0x5f0faa),VisuMZ['MessageCore'][_0x4c669d(0x324)]['call'](this,_0x5f0faa),this[_0x4c669d(0x410)]();},Window_Message['prototype'][_0x5c5568(0x2cb)]=function(_0x204aa4){const _0x5832d0=_0x5c5568;if(!_0x204aa4)return;this[_0x5832d0(0x336)]=![],_0x204aa4[_0x5832d0(0x33f)]=this['convertTextMacros'](_0x204aa4[_0x5832d0(0x33f)]);if(this[_0x5832d0(0x29b)]){if(_0x5832d0(0x130)!==_0x5832d0(0x130))return _0x47cb1b;else _0x204aa4[_0x5832d0(0x33f)]=this['prepareWordWrapEscapeCharacters'](_0x204aa4[_0x5832d0(0x33f)]),this[_0x5832d0(0x336)]=!![];}},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x4ef)]=function(_0x35da2c){const _0x234da5=_0x5c5568;if(this[_0x234da5(0x336)])return _0x35da2c;return Window_Base[_0x234da5(0x21c)][_0x234da5(0x4ef)][_0x234da5(0x40c)](this,_0x35da2c);},Window_Message['prototype']['onNewPageMessageCore']=function(_0x1cc1d2){const _0x1eef85=_0x5c5568;this[_0x1eef85(0x100)](_0x1cc1d2),this[_0x1eef85(0x1d4)](_0x1cc1d2),this[_0x1eef85(0x4db)]();},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x49a)]=Window_Message[_0x5c5568(0x21c)]['terminateMessage'],Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x492)]=function(){const _0x48d3fc=_0x5c5568;VisuMZ[_0x48d3fc(0x260)]['Window_Message_terminateMessage'][_0x48d3fc(0x40c)](this),this[_0x48d3fc(0x322)]();if(this[_0x48d3fc(0x2ed)])this[_0x48d3fc(0x427)]();},Window_Message[_0x5c5568(0x21c)]['updateDimensions']=function(){const _0x21c5ba=_0x5c5568;this['width']=$gameSystem[_0x21c5ba(0x4dc)]()+this[_0x21c5ba(0x11d)]();;this[_0x21c5ba(0xdb)]=Math['min'](Graphics[_0x21c5ba(0xdb)],this['width']);const _0x5e6f70=$gameSystem[_0x21c5ba(0x3cd)]();this[_0x21c5ba(0x4a6)]=SceneManager[_0x21c5ba(0x2d7)][_0x21c5ba(0x501)](_0x5e6f70,![])+this[_0x21c5ba(0x280)](),this[_0x21c5ba(0x4a6)]=Math[_0x21c5ba(0x135)](Graphics[_0x21c5ba(0x4a6)],this['height']);if($gameTemp['_centerMessageWindow'])this[_0x21c5ba(0x204)]();},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x11d)]=function(){return 0x0;},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x280)]=function(){return 0x0;},Window_Message['prototype'][_0x5c5568(0x204)]=function(){const _0x5a956c=_0x5c5568;this['x']=(Graphics[_0x5a956c(0x4f4)]-this[_0x5a956c(0xdb)])/0x2,$gameTemp[_0x5a956c(0x291)]=undefined,this[_0x5a956c(0x1ec)]();},Window_Message['prototype'][_0x5c5568(0x243)]=function(){const _0x35abf3=_0x5c5568,_0x1187e3={'x':this['x'],'y':this['y']};Window_Base[_0x35abf3(0x21c)]['updateMove']['call'](this),this[_0x35abf3(0xe4)](_0x1187e3);},Window_Message['prototype'][_0x5c5568(0x1c9)]=function(){return!![];},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0xe4)]=function(_0x41b617){const _0x2064d8=_0x5c5568;if(this['_nameBoxWindow']){if(_0x2064d8(0x1a4)===_0x2064d8(0xd3)){if(this[_0x2064d8(0x30b)]===_0x59c6c3)this[_0x2064d8(0x435)]();return this[_0x2064d8(0x30b)][_0x2064d8(0x1cd)]??0x60;}else this[_0x2064d8(0x1c2)]['x']+=this['x']-_0x41b617['x'],this['_nameBoxWindow']['y']+=this['y']-_0x41b617['y'];}},Window_Message[_0x5c5568(0x21c)]['resetRect']=function(_0x244901,_0x14815b){const _0x36aee0=_0x5c5568;this[_0x36aee0(0x3ec)](this[_0x36aee0(0x44f)]['x'],this[_0x36aee0(0x46d)]*(Graphics[_0x36aee0(0x4e6)]-this[_0x36aee0(0x4a6)])/0x2,this['_resetRect'][_0x36aee0(0xdb)],this[_0x36aee0(0x44f)][_0x36aee0(0x4a6)],_0x244901,_0x14815b);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x1e7)]=function(_0x3dae11){const _0x209219=_0x5c5568,_0x26529f=Window_Base[_0x209219(0x21c)][_0x209219(0x1e7)][_0x209219(0x40c)](this,_0x3dae11);_0x3dae11[_0x209219(0x225)]&&this[_0x209219(0x2d1)](_0x26529f);},Window_Message[_0x5c5568(0x21c)]['launchMessageCommonEvent']=function(_0x35f7ed){const _0x50177d=_0x5c5568;if($gameParty[_0x50177d(0x22b)]()){}else $gameMap[_0x50177d(0x4cd)](_0x35f7ed);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x33a)]=function(_0x2f3fa6){const _0x380204=_0x5c5568;this[_0x380204(0x3b2)]--,this[_0x380204(0x3b2)]<=0x0&&(this[_0x380204(0x3e0)](_0x2f3fa6),Window_Base[_0x380204(0x21c)][_0x380204(0x33a)][_0x380204(0x40c)](this,_0x2f3fa6));},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x3e0)]=function(_0x5ac712){const _0x1d6c82=_0x5c5568;this[_0x1d6c82(0x3b2)]=this[_0x1d6c82(0x2af)];if(this[_0x1d6c82(0x2af)]<=0x0)this[_0x1d6c82(0x27a)]=!![];},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x209)]=Window_Message[_0x5c5568(0x21c)]['processEscapeCharacter'],Window_Message['prototype'][_0x5c5568(0x2a4)]=function(_0x1234e8,_0x417795){const _0x5bfb9b=_0x5c5568;!_0x417795[_0x5bfb9b(0x225)]?Window_Base[_0x5bfb9b(0x21c)][_0x5bfb9b(0x2a4)][_0x5bfb9b(0x40c)](this,_0x1234e8,_0x417795):VisuMZ[_0x5bfb9b(0x260)][_0x5bfb9b(0x209)]['call'](this,_0x1234e8,_0x417795);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x356)]=Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x155)],Window_Message['prototype'][_0x5c5568(0x155)]=function(_0x23ed5e){const _0x150e3a=_0x5c5568;if(this['_currentAutoSize']){if(_0x150e3a(0x3e9)===_0x150e3a(0x3e9))return![];else this['_helpWindow'][_0x150e3a(0x19d)](),this['_helpWindow']['hide']();}return VisuMZ[_0x150e3a(0x260)]['Window_Message_needsNewPage'][_0x150e3a(0x40c)](this,_0x23ed5e);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x100)]=function(_0x66e94c){const _0x11d77f=_0x5c5568;let _0xc94393=_0x66e94c[_0x11d77f(0x33f)];this['_forcedPosition']={};if(this[_0x11d77f(0x3be)]())return _0xc94393;_0xc94393=_0xc94393[_0x11d77f(0x2fd)](/<POSITION:[ ]*(.*?)>/gi,(_0x66a7c5,_0x37e06d)=>{const _0x4fbba7=_0x11d77f,_0x3e13c5=_0x37e06d[_0x4fbba7(0x10c)](',')[_0x4fbba7(0x145)](_0xd5b2a=>Number(_0xd5b2a)||0x0);if(_0x3e13c5[0x0]!==undefined)this[_0x4fbba7(0x302)]['x']=Number(_0x3e13c5[0x0]);if(_0x3e13c5[0x1]!==undefined)this['_forcedPosition']['y']=Number(_0x3e13c5[0x1]);if(_0x3e13c5[0x2]!==undefined)this[_0x4fbba7(0x302)]['width']=Number(_0x3e13c5[0x2]);if(_0x3e13c5[0x3]!==undefined)this[_0x4fbba7(0x302)][_0x4fbba7(0x4a6)]=Number(_0x3e13c5[0x3]);return'';}),_0xc94393=_0xc94393[_0x11d77f(0x2fd)](/<COORDINATES:[ ]*(.*?)>/gi,(_0x20ad7e,_0x211e43)=>{const _0x9526b8=_0x11d77f;if('lwtVM'===_0x9526b8(0x3ed))return!![];else{const _0x2064e4=_0x211e43['split'](',')[_0x9526b8(0x145)](_0x320b8f=>Number(_0x320b8f)||0x0);if(_0x2064e4[0x0]!==undefined)this[_0x9526b8(0x302)]['x']=Number(_0x2064e4[0x0]);if(_0x2064e4[0x1]!==undefined)this[_0x9526b8(0x302)]['y']=Number(_0x2064e4[0x1]);return'';}}),_0xc94393=_0xc94393[_0x11d77f(0x2fd)](/<DIMENSIONS:[ ]*(.*?)>/gi,(_0x5d7b6e,_0x426230)=>{const _0x7415b2=_0x11d77f;if(_0x7415b2(0x29e)==='egyYd'){const _0x20011d=_0x426230['split'](',')[_0x7415b2(0x145)](_0xb94032=>Number(_0xb94032)||0x0);if(_0x20011d[0x0]!==undefined)this[_0x7415b2(0x302)][_0x7415b2(0xdb)]=Number(_0x20011d[0x2]);if(_0x20011d[0x1]!==undefined)this[_0x7415b2(0x302)][_0x7415b2(0x4a6)]=Number(_0x20011d[0x3]);return'';}else return this['processAutoSize'](_0x51264f,!![],!![]),this[_0x7415b2(0x4ec)](_0x7415b2(0x1cc)),'';}),_0xc94393=_0xc94393[_0x11d77f(0x2fd)](/<OFFSET:[ ]*(.*?)>/gi,(_0x2ed689,_0x37969b)=>{const _0x2da6ba=_0x11d77f,_0x27e1ed=_0x37969b[_0x2da6ba(0x10c)](',')['map'](_0x419e6f=>Number(_0x419e6f)||0x0);let _0x2bcd61=_0x27e1ed[0x0]||0x0,_0x25e0da=_0x27e1ed[0x1]||0x0;return $gameSystem['setMessageWindowXyOffsets'](_0x2bcd61,_0x25e0da),'';}),_0x66e94c[_0x11d77f(0x33f)]=_0xc94393;},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x412)]=function(){const _0x11364f=$gameSystem['getMessageWindowXyOffsets']();this['x']+=_0x11364f['x'],this['y']+=_0x11364f['y'];},Window_Message['prototype'][_0x5c5568(0x4c5)]=function(){const _0x4a79df=_0x5c5568;this[_0x4a79df(0x302)]=this[_0x4a79df(0x302)]||{};const _0x503987=['x','y','width',_0x4a79df(0x4a6)];for(const _0x49f7b6 of _0x503987){if('ZezIp'!==_0x4a79df(0xca))_0x417bdd=_0xb1829b[_0x4a79df(0x300)](this['height']-_0x5680ef['height']-_0x30fb39);else{if(this[_0x4a79df(0x302)][_0x49f7b6]!==undefined){if('sQFTK'!==_0x4a79df(0x475))this[_0x49f7b6]=Number(this[_0x4a79df(0x302)][_0x49f7b6]);else{const _0x46d5c4=_0x1d1db3['messageCoreTextSpeed'],_0x4a16a6=_0x4a79df(0x371);this[_0x4a79df(0x3a9)](_0x46d5c4,_0x4a16a6);}}}}},Window_Message['prototype'][_0x5c5568(0x1d4)]=function(_0x1faddc){const _0x6723e=_0x5c5568;this[_0x6723e(0x1b4)]=![];let _0x53da4f=_0x1faddc[_0x6723e(0x33f)];_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x22dc8f=_0x6723e;return this['processAutoSize'](_0x53da4f,!![],!![]),this[_0x22dc8f(0x4ec)](_0x22dc8f(0x1cc)),'';}),_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x30113d=_0x6723e;return this[_0x30113d(0x29f)](_0x53da4f,!![],![]),this['processAutoPosition'](_0x30113d(0x1cc)),'';}),_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x11cd14=_0x6723e;return this[_0x11cd14(0x29f)](_0x53da4f,![],!![]),this[_0x11cd14(0x4ec)](_0x11cd14(0x1cc)),'';});if(SceneManager[_0x6723e(0x1a6)]())_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x3350ea,_0x4014bd)=>{const _0x42027d=_0x6723e;return this['processAutoSize'](_0x53da4f,!![],!![]),this['processAutoPosition'](_0x42027d(0x42f),Number(_0x4014bd)||0x1),'';}),_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x58cbf4,_0x4dab9d)=>{const _0x16dc9c=_0x6723e;return _0x16dc9c(0x165)!==_0x16dc9c(0x393)?(this[_0x16dc9c(0x29f)](_0x53da4f,!![],!![]),this[_0x16dc9c(0x4ec)](_0x16dc9c(0x42e),Number(_0x4dab9d)||0x0),''):_0x264d5c['MessageCore'][_0x16dc9c(0x375)][_0x16dc9c(0x505)][_0x16dc9c(0x3a3)];}),_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x4b08d1,_0x4d437c)=>{const _0x2bc791=_0x6723e;return this[_0x2bc791(0x29f)](_0x53da4f,!![],!![]),this[_0x2bc791(0x4ec)](_0x2bc791(0x2f6),Number(_0x4d437c)||0x0),'';});else{if(SceneManager['isSceneMap']()){if('fISsm'!=='fISsm')return this[_0x6723e(0x1f2)]['x']+this[_0x6723e(0x1f2)][_0x6723e(0xdb)]-this[_0x6723e(0x124)]();else _0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x215411,_0x267e9d)=>{const _0x10744b=_0x6723e;if('xPbBo'==='nwhmi'){if(!_0xbcb0a7[_0x10744b(0x38b)](_0x21c347))return![];}else return this[_0x10744b(0x29f)](_0x53da4f,!![],!![]),this[_0x10744b(0x4ec)](_0x10744b(0x178),0x0),'';}),_0x53da4f=_0x53da4f['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x50ec52,_0x3bd635)=>{const _0x21e542=_0x6723e;return this[_0x21e542(0x29f)](_0x53da4f,!![],!![]),this[_0x21e542(0x4ec)](_0x21e542(0x153),Number(_0x3bd635)||0x1),'';}),_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x3dace6,_0x23f776)=>{const _0x4d22df=_0x6723e;return this['processAutoSize'](_0x53da4f,!![],!![]),this[_0x4d22df(0x4ec)](_0x4d22df(0x2a5),Number(_0x23f776)||0x0),'';}),_0x53da4f=_0x53da4f[_0x6723e(0x2fd)](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x2d6203,_0x3132dc)=>{const _0x3a165b=_0x6723e;return _0x3a165b(0x149)!==_0x3a165b(0x345)?(this['processAutoSize'](_0x53da4f,!![],!![]),this[_0x3a165b(0x4ec)](_0x3a165b(0x50f),Number(_0x3132dc)||0x0),''):this[_0x3a165b(0x481)]()[_0x3a165b(0x382)];});}}_0x1faddc['text']=_0x53da4f;},Window_Message[_0x5c5568(0x4a3)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message[_0x5c5568(0x4d0)]=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message[_0x5c5568(0x21c)]['processAutoSize']=function(_0x19eb3e,_0x3a6d44,_0x133729){const _0x5d11ef=_0x5c5568;_0x19eb3e=_0x19eb3e['replace'](Window_Message[_0x5d11ef(0x4a3)],''),_0x19eb3e=_0x19eb3e[_0x5d11ef(0x2fd)](Window_Message[_0x5d11ef(0x4d0)],''),this[_0x5d11ef(0x380)]=!![],this[_0x5d11ef(0x1b4)]=!![],this['setWordWrap'](![]);const _0x42e4e4=this[_0x5d11ef(0x1d1)](_0x19eb3e);if(_0x3a6d44){if(_0x5d11ef(0x25e)==='cqwyn'){_0x33edf1[_0x5d11ef(0x4cb)](_0x524099,_0x2d18fa);const _0x480851=_0x4bb946(_0x5680a9[_0x5d11ef(0x334)])||0x0;_0x463ba0[_0x5d11ef(0x26d)](_0x480851);}else{let _0x105422=_0x42e4e4['width']+$gameSystem[_0x5d11ef(0x304)]()*0x2+0x6;const _0x463606=$gameMessage[_0x5d11ef(0x309)]()!=='',_0x2aca77=ImageManager[_0x5d11ef(0x3cb)],_0x206ae6=0x14;_0x105422+=_0x463606?_0x2aca77+_0x206ae6:0x4;if(_0x105422%0x2!==0x0)_0x105422+=0x1;$gameSystem[_0x5d11ef(0x31b)](_0x105422);}}if(_0x133729){if(_0x5d11ef(0x11c)===_0x5d11ef(0x12d))this[_0x5d11ef(0x194)]=_0xd2befc[_0x5d11ef(0x4f2)],this[_0x5d11ef(0x40f)]=_0x4f251c[_0x5d11ef(0x485)];else{let _0x3cef1c=Math['ceil'](_0x42e4e4[_0x5d11ef(0x4a6)]/this[_0x5d11ef(0x3ad)]());$gameSystem[_0x5d11ef(0x3c6)](_0x3cef1c);}}this[_0x5d11ef(0x1f6)](),this[_0x5d11ef(0xe6)](),this['_autoSizeCheck']=![],this[_0x5d11ef(0x2ed)]=!![];},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x1f6)]=function(){const _0x4c4182=_0x5c5568;this[_0x4c4182(0x4db)](),this[_0x4c4182(0x213)](),this[_0x4c4182(0x204)](),this[_0x4c4182(0x4a1)](),this[_0x4c4182(0x462)][_0x4c4182(0x19d)](),this[_0x4c4182(0x410)]();},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x4ec)]=function(_0x13d0d0,_0x4fca04){const _0x348cec=_0x5c5568;switch(_0x13d0d0['toLowerCase']()[_0x348cec(0x199)]()){case _0x348cec(0x42f):this[_0x348cec(0x147)]=$gameActors[_0x348cec(0x4a4)](_0x4fca04);break;case _0x348cec(0x42e):this[_0x348cec(0x147)]=$gameParty[_0x348cec(0xf9)]()[_0x4fca04-0x1];break;case _0x348cec(0x2f6):this[_0x348cec(0x147)]=$gameTroop[_0x348cec(0xf9)]()[_0x4fca04-0x1];break;case _0x348cec(0x178):this['_autoPositionTarget']=$gamePlayer;break;case'map\x20actor':const _0x2bb7a6=$gameActors[_0x348cec(0x4a4)](_0x4fca04)[_0x348cec(0x16f)]();_0x2bb7a6===0x0?this[_0x348cec(0x147)]=$gamePlayer:_0x348cec(0x16b)==='IQQcu'?this['_autoPositionTarget']=$gamePlayer[_0x348cec(0x4c3)]()[_0x348cec(0x392)](_0x2bb7a6-0x1):(this[_0x348cec(0x3b2)]--,this[_0x348cec(0x3b2)]<=0x0&&(this[_0x348cec(0x3e0)](_0x60c60),_0x1f9c47['prototype']['processCharacter'][_0x348cec(0x40c)](this,_0x1e6a4d)));break;case _0x348cec(0x2a5):_0x4fca04===0x1?this['_autoPositionTarget']=$gamePlayer:this[_0x348cec(0x147)]=$gamePlayer['followers']()[_0x348cec(0x392)](_0x4fca04-0x2);break;case _0x348cec(0x50f):this[_0x348cec(0x147)]=$gameMap[_0x348cec(0x481)](_0x4fca04);break;}this['_autoPositionTarget']&&this['updateAutoPosition']();},VisuMZ['MessageCore'][_0x5c5568(0x3bb)]=Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x1ac)],Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x1ac)]=function(){const _0x41b62a=_0x5c5568;this[_0x41b62a(0x4bc)](),VisuMZ[_0x41b62a(0x260)][_0x41b62a(0x3bb)][_0x41b62a(0x40c)](this);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x4bc)]=function(){const _0x4ff442=_0x5c5568;if(!this[_0x4ff442(0x147)])return;const _0x9b9c5b=SceneManager[_0x4ff442(0x2d7)];if(!_0x9b9c5b)return;const _0x2c9382=_0x9b9c5b['_spriteset'];if(!_0x2c9382)return;const _0x2db849=_0x2c9382[_0x4ff442(0x452)](this[_0x4ff442(0x147)]);if(!_0x2db849)return;let _0x14417e=_0x2db849['x'];if(SceneManager['isSceneMap']())_0x14417e*=$gameScreen[_0x4ff442(0x234)]();else{if(SceneManager['isSceneBattle']()&&Imported[_0x4ff442(0x457)]){let _0x5285fe=_0x2db849['x']-Graphics[_0x4ff442(0x4f4)]*_0x2c9382['anchor']['x'];_0x14417e+=_0x5285fe*(_0x2c9382['scale']['x']-0x1);}}_0x14417e-=this[_0x4ff442(0xdb)]/0x2,_0x14417e-=(Graphics['width']-Graphics[_0x4ff442(0x4f4)])/0x2,_0x14417e+=this[_0x4ff442(0x159)]();let _0x31f0ed=_0x2db849['y'];if(SceneManager[_0x4ff442(0x1bb)]())'EGAbI'==='EGAbI'?(_0x31f0ed-=_0x2db849['height']+0x8,_0x31f0ed*=$gameScreen['zoomScale'](),_0x31f0ed-=this[_0x4ff442(0x4a6)]*$gameScreen['zoomScale']()):this[_0x4ff442(0x26e)]();else{if(SceneManager[_0x4ff442(0x1a6)]()&&Imported[_0x4ff442(0x457)]){if(_0x4ff442(0x4ab)!==_0x4ff442(0x4ab))_0x518aba['x']-=_0x2c64c9[_0x4ff442(0x369)]/0x2;else{let _0x549a51=_0x2db849[_0x4ff442(0x4a6)]*_0x2c9382[_0x4ff442(0x1f3)]['y'];_0x31f0ed-=this['height']*_0x2c9382['scale']['y']+_0x549a51+0x8;let _0x365df1=_0x2db849['y']-Graphics[_0x4ff442(0x4e6)]*_0x2c9382[_0x4ff442(0x312)]['y'];_0x31f0ed+=_0x365df1*(_0x2c9382['scale']['y']-0x1);}}else _0x31f0ed-=_0x2db849['height']+0x8,_0x31f0ed-=this[_0x4ff442(0x4a6)];}_0x31f0ed-=(Graphics[_0x4ff442(0x4a6)]-Graphics[_0x4ff442(0x4e6)])/0x2,_0x31f0ed+=this[_0x4ff442(0x113)]();const _0x3e520f=$gameSystem[_0x4ff442(0x1ed)]();_0x14417e+=_0x3e520f['x'],_0x31f0ed+=_0x3e520f['y'],this['x']=Math[_0x4ff442(0x32c)](_0x14417e),this['y']=Math[_0x4ff442(0x32c)](_0x31f0ed),this[_0x4ff442(0x1ec)](!![],![]),this[_0x4ff442(0x302)]=this['_forcedPosition']||{},this['_forcedPosition']['x']=this['x'],this[_0x4ff442(0x302)]['y']=this['y'],this['_forcedPosition']['width']=this['width'],this[_0x4ff442(0x302)][_0x4ff442(0x4a6)]=this['height'],this[_0x4ff442(0x1c2)]['updatePlacement']();},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x159)]=function(){return 0x0;},Window_Message['prototype'][_0x5c5568(0x113)]=function(){return 0x0;},Window_Message[_0x5c5568(0x21c)]['messagePositionReset']=function(){const _0x5326ae=_0x5c5568;this[_0x5326ae(0x2ed)]=![],this[_0x5326ae(0x147)]=undefined,$gameSystem[_0x5326ae(0x435)](),this[_0x5326ae(0x1f6)](),this[_0x5326ae(0x2a8)]=0x0;},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x23b)]=function(_0x270ac9){const _0x1e6cb8=_0x5c5568;return Window_Base[_0x1e6cb8(0x21c)][_0x1e6cb8(0x23b)][_0x1e6cb8(0x40c)](this,_0x270ac9);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x32e)]=function(_0x2a779d){const _0x28ea64=_0x5c5568;return Window_Base[_0x28ea64(0x21c)][_0x28ea64(0x32e)][_0x28ea64(0x40c)](this,_0x2a779d);},Window_Message[_0x5c5568(0x21c)][_0x5c5568(0x103)]=function(_0x5df4dd){const _0x108a63=_0x5c5568;this[_0x108a63(0x203)](_0x5df4dd),Window_Base['prototype'][_0x108a63(0x103)]['call'](this,_0x5df4dd),this['postFlushTextState'](_0x5df4dd);},Window_Message['prototype']['preFlushTextState']=function(_0x8f1c24){},Window_Message[_0x5c5568(0x21c)]['postFlushTextState']=function(_0x2590ed){},Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x1c8)]=function(){return![];},Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x29d)]=function(){const _0x110845=_0x5c5568;Window_Base[_0x110845(0x21c)][_0x110845(0x29d)][_0x110845(0x40c)](this),this['changeTextColor'](this[_0x110845(0x170)]());},Window_NameBox['prototype']['defaultColor']=function(){const _0x2aa3b3=_0x5c5568,_0xf60906=VisuMZ[_0x2aa3b3(0x260)][_0x2aa3b3(0x375)]['General'][_0x2aa3b3(0x42b)];return ColorManager[_0x2aa3b3(0x358)](_0xf60906);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x189)]=Window_NameBox[_0x5c5568(0x21c)]['updatePlacement'],Window_NameBox['prototype'][_0x5c5568(0x213)]=function(){const _0xe9f8d2=_0x5c5568;VisuMZ[_0xe9f8d2(0x260)]['Window_NameBox_updatePlacement'][_0xe9f8d2(0x40c)](this),this[_0xe9f8d2(0x449)](),this[_0xe9f8d2(0x4fa)](),this[_0xe9f8d2(0x1ec)](),this[_0xe9f8d2(0x25d)]();},Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x23b)]=function(_0x10d740){const _0x5a35a8=_0x5c5568;return _0x10d740=_0x10d740[_0x5a35a8(0x2fd)](/<LEFT>/gi,this[_0x5a35a8(0x26a)][_0x5a35a8(0x23c)](this,0x0)),_0x10d740=_0x10d740['replace'](/<CENTER>/gi,this[_0x5a35a8(0x26a)][_0x5a35a8(0x23c)](this,0x5)),_0x10d740=_0x10d740[_0x5a35a8(0x2fd)](/<RIGHT>/gi,this[_0x5a35a8(0x26a)][_0x5a35a8(0x23c)](this,0xa)),_0x10d740=_0x10d740[_0x5a35a8(0x2fd)](/<POSITION:[ ](\d+)>/gi,(_0x463127,_0x4af6a1)=>this[_0x5a35a8(0x26a)](parseInt(_0x4af6a1))),_0x10d740=_0x10d740[_0x5a35a8(0x2fd)](/<\/LEFT>/gi,''),_0x10d740=_0x10d740[_0x5a35a8(0x2fd)](/<\/CENTER>/gi,''),_0x10d740=_0x10d740[_0x5a35a8(0x2fd)](/<\/RIGHT>/gi,''),_0x10d740=_0x10d740[_0x5a35a8(0x199)](),Window_Base[_0x5a35a8(0x21c)][_0x5a35a8(0x23b)][_0x5a35a8(0x40c)](this,_0x10d740);},Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x26a)]=function(_0x11f157){const _0x4252c6=_0x5c5568;return this[_0x4252c6(0x494)]=_0x11f157,'';},Window_NameBox['prototype'][_0x5c5568(0x449)]=function(){const _0xd5d699=_0x5c5568;if($gameMessage['isRTL']())return;this[_0xd5d699(0x494)]=this[_0xd5d699(0x494)]||0x0;const _0x3795fa=this['_messageWindow'],_0x126884=Math[_0xd5d699(0x300)](_0x3795fa['width']*this[_0xd5d699(0x494)]/0xa);this['x']=_0x3795fa['x']+_0x126884-Math[_0xd5d699(0x300)](this[_0xd5d699(0xdb)]/0x2),this['x']=this['x'][_0xd5d699(0x47a)](_0x3795fa['x'],_0x3795fa['x']+_0x3795fa['width']-this['width']);},Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x4fa)]=function(){const _0x107289=_0x5c5568;if($gameMessage[_0x107289(0x229)]())return;this[_0x107289(0x494)]=this[_0x107289(0x494)]||0x0;const _0x20c727=VisuMZ[_0x107289(0x260)][_0x107289(0x375)][_0x107289(0x2e0)]['NameBoxWindowOffsetX'],_0x2daa79=VisuMZ['MessageCore']['Settings'][_0x107289(0x2e0)][_0x107289(0x168)],_0x2c8650=(0x5-this[_0x107289(0x494)])/0x5;this['x']+=Math[_0x107289(0x300)](_0x20c727*_0x2c8650),this['y']+=_0x2daa79;},Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x25d)]=function(){const _0x3a7b87=_0x5c5568,_0xcabf9c=this[_0x3a7b87(0x1f2)],_0x52bc50=_0xcabf9c['y'],_0xb584cb=VisuMZ[_0x3a7b87(0x260)][_0x3a7b87(0x375)][_0x3a7b87(0x2e0)][_0x3a7b87(0x168)];if(_0x52bc50>this['y']&&_0x52bc50<this['y']+this[_0x3a7b87(0x4a6)]-_0xb584cb){if(_0x3a7b87(0x1e2)===_0x3a7b87(0x1e2))this['y']=_0xcabf9c['y']+_0xcabf9c['height'];else return this[_0x3a7b87(0x11a)]()&&(_0x5d57c7=_0x55f9d4[_0x3a7b87(0x2fd)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x39dd9b=_0x5630bc[_0x3a7b87(0x2fd)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x13cdb7=_0x412da6[_0x3a7b87(0x2fd)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x5d888b=_0x22ec70[_0x3a7b87(0x2fd)](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x1571e6=_0x10d26f[_0x3a7b87(0x2fd)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x3f471c=_0x5b85ab[_0x3a7b87(0x2fd)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,''),_0x529769=_0xabcabc[_0x3a7b87(0x2fd)](/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi,''),_0x72a8e2=_0x329b31['replace'](/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi,'')),_0x14bc18;}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0xec)]=Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x4c7)],Window_NameBox[_0x5c5568(0x21c)][_0x5c5568(0x4c7)]=function(){const _0x10764b=_0x5c5568;this[_0x10764b(0x494)]=0x0,VisuMZ[_0x10764b(0x260)][_0x10764b(0xec)][_0x10764b(0x40c)](this);},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x3be)]=function(){return![];},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x1c8)]=function(){return!![];},Window_ChoiceList['prototype'][_0x5c5568(0x4d4)]=function(){const _0x3e5e3e=_0x5c5568;return $gameSystem[_0x3e5e3e(0x310)]()+0x8;},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x36e)]=function(){const _0x2586ce=_0x5c5568;return $gameSystem[_0x2586ce(0x403)]();},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x299)]=function(){const _0x847958=_0x5c5568;this[_0x847958(0x4c7)](),this[_0x847958(0x15f)](),this[_0x847958(0x3e4)](),this[_0x847958(0x311)]();},Window_ChoiceList['prototype'][_0x5c5568(0x253)]=function(){const _0x58bfdf=_0x5c5568;$gameMessage[_0x58bfdf(0x1f7)](this[_0x58bfdf(0xe5)]()),this['_messageWindow']['terminateMessage'](),this[_0x58bfdf(0x486)]();if(this['_helpWindow']){if(_0x58bfdf(0x272)===_0x58bfdf(0x402))return _0x54b639[_0x58bfdf(0x260)][_0x58bfdf(0x375)][_0x58bfdf(0x505)][_0x3e1f45]||'';else this[_0x58bfdf(0x381)][_0x58bfdf(0x19d)](),this[_0x58bfdf(0x381)][_0x58bfdf(0x3c9)]();}},VisuMZ['MessageCore']['Window_ChoiceList_callCancelHandler']=Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x511)],Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x511)]=function(){const _0x4a9208=_0x5c5568;VisuMZ['MessageCore'][_0x4a9208(0x4f8)][_0x4a9208(0x40c)](this);if(this[_0x4a9208(0x381)]){if('twZpm'==='twZpm')this[_0x4a9208(0x381)][_0x4a9208(0x19d)](),this[_0x4a9208(0x381)][_0x4a9208(0x3c9)]();else{_0x37cc46[_0x4a9208(0x260)][_0x4a9208(0x2d6)]('TextCodeActions');for(const _0xf1a647 of _0x2bc510[_0x4a9208(0x260)][_0x4a9208(0x375)]['TextCodeActions']){_0xf1a647[_0x4a9208(0x20f)]=_0xf1a647[_0x4a9208(0x20f)]['toUpperCase'](),_0xf1a647[_0x4a9208(0x240)]=new _0x75cbab('\x1b'+_0xf1a647['Match'],'gi'),_0xf1a647[_0x4a9208(0x1f0)]='\x1b'+_0xf1a647[_0x4a9208(0x20f)];if(_0xf1a647[_0x4a9208(0x4f0)]==='')_0xf1a647['textCodeResult']+='[0]';}}}},Window_ChoiceList[_0x5c5568(0x21c)]['refresh']=function(){const _0x1b258a=_0x5c5568;this[_0x1b258a(0x20b)](),this['makeCommandList'](),this[_0x1b258a(0x1f2)]&&(this[_0x1b258a(0x213)](),this[_0x1b258a(0x34e)]()),this[_0x1b258a(0x410)](),this[_0x1b258a(0x3fe)](),this[_0x1b258a(0x1a7)](),Window_Selectable['prototype'][_0x1b258a(0x4c7)][_0x1b258a(0x40c)](this);},Window_ChoiceList[_0x5c5568(0x21c)]['makeCommandList']=function(){const _0x156cb9=_0x5c5568;$gameMessage[_0x156cb9(0x348)]?this['makeCommandListScriptCall']():this[_0x156cb9(0x39e)](),this[_0x156cb9(0x25c)](),this['applyChoiceHelpDescriptions']();},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0xdd)]=function(){const _0x5d9722=_0x5c5568,_0x470687=$gameMessage[_0x5d9722(0x474)]();let _0x17cf8e=0x0;for(let _0x47d93a of _0x470687){_0x47d93a=this['convertChoiceMacros'](_0x47d93a);if(this[_0x5d9722(0x2cc)](_0x47d93a)){if(_0x5d9722(0x267)==='uWkgt'){const _0x3282ef=_0x5d9722(0x4f7)[_0x5d9722(0x49e)](_0x2a1460),_0x1bbc5a=_0x5a1e92['MessageCore'][_0x5d9722(0x375)][_0x5d9722(0x4c6)][_0x3282ef];_0x1bbc5a[_0x5d9722(0x447)]((_0x549854,_0x3a96af)=>{const _0x53a265=_0x5d9722;if(!_0x549854||!_0x3a96af)return-0x1;return _0x3a96af[_0x53a265(0x4df)]-_0x549854[_0x53a265(0x4df)];}),this[_0x5d9722(0x4a5)](_0x1bbc5a,_0x4f19ea);}else{const _0x532337=this[_0x5d9722(0x40e)](_0x47d93a),_0xdaea39=this[_0x5d9722(0x47f)](_0x47d93a);this[_0x5d9722(0x3a9)](_0x532337,'choice',_0xdaea39,_0x17cf8e);}}_0x17cf8e++;}},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x39e)]=function(){const _0x78ea17=_0x5c5568,_0x292b5d=$gameMessage[_0x78ea17(0x474)](),_0x203364=$gameMessage[_0x78ea17(0x2e4)](),_0x2bb7c5=$gameMessage[_0x78ea17(0x298)](),_0x39185b=_0x292b5d[_0x78ea17(0x4df)];let _0x2bce08=0x0;for(let _0x3366a2=0x0;_0x3366a2<_0x39185b;_0x3366a2++){if(this[_0x78ea17(0x2b5)]['length']>=_0x2bb7c5)break;const _0x3c0349=_0x203364[_0x3366a2];let _0xc2d7f6=_0x292b5d[_0x3c0349];if(_0xc2d7f6===undefined)continue;_0xc2d7f6=this['convertChoiceMacros'](_0xc2d7f6);if(this['isChoiceVisible'](_0xc2d7f6)){const _0x28b38d=this[_0x78ea17(0x40e)](_0xc2d7f6),_0x56f60a=this[_0x78ea17(0x47f)](_0xc2d7f6);this[_0x78ea17(0x3a9)](_0x28b38d,_0x78ea17(0x347),_0x56f60a,_0x3c0349);}_0x2bce08++;}},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x241)]=function(_0x19b93e){const _0x124382=_0x5c5568;return Window_Base[_0x124382(0x21c)][_0x124382(0x288)][_0x124382(0x40c)](this,_0x19b93e);},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x2cc)]=function(_0x2f71b4){const _0x139819=_0x5c5568;if(Imported[_0x139819(0x184)])$gameMessage[_0x139819(0x421)]();if(_0x2f71b4['match'](/<HIDE>/i))return![];if(_0x2f71b4[_0x139819(0x4d8)](/<SHOW>/i))return!![];if(_0x2f71b4[_0x139819(0x4d8)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x595aa1=RegExp['$1'][_0x139819(0x10c)](',')['map'](_0x529e6f=>Number(_0x529e6f)||0x0);for(const _0x5cfe8b of _0x595aa1){if(!$gameSwitches[_0x139819(0x38b)](_0x5cfe8b))return![];}return!![];}if(_0x2f71b4['match'](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){if('SslKL'===_0x139819(0x117)){let _0x292408=_0xb5eacb[_0x139819(0xdb)]+_0x28696f[_0x139819(0x304)]()*0x2+0x6;const _0x2fb6df=_0x5d8769[_0x139819(0x309)]()!=='',_0x4cfa0b=_0x501483['faceWidth'],_0x35b0a8=0x14;_0x292408+=_0x2fb6df?_0x4cfa0b+_0x35b0a8:0x4;if(_0x292408%0x2!==0x0)_0x292408+=0x1;_0x55d694[_0x139819(0x31b)](_0x292408);}else{const _0x497785=RegExp['$1'][_0x139819(0x10c)](',')[_0x139819(0x145)](_0x2bf816=>Number(_0x2bf816)||0x0);for(const _0x401080 of _0x497785){if(!$gameSwitches[_0x139819(0x38b)](_0x401080))return![];}return!![];}}if(_0x2f71b4[_0x139819(0x4d8)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x153104=RegExp['$1'][_0x139819(0x10c)](',')['map'](_0x4b714c=>Number(_0x4b714c)||0x0);for(const _0x46780a of _0x153104){if($gameSwitches[_0x139819(0x38b)](_0x46780a))return!![];}return![];}if(_0x2f71b4[_0x139819(0x4d8)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x2e9c04=RegExp['$1']['split'](',')[_0x139819(0x145)](_0x56ea2a=>Number(_0x56ea2a)||0x0);for(const _0x2a888f of _0x2e9c04){if(!$gameSwitches[_0x139819(0x38b)](_0x2a888f))return!![];}return![];}if(_0x2f71b4[_0x139819(0x4d8)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x139819(0x4ad)!==_0x139819(0x15b)){const _0x30dae6=RegExp['$1']['split'](',')['map'](_0x37cd26=>Number(_0x37cd26)||0x0);for(const _0x21f408 of _0x30dae6){if(_0x139819(0x15e)===_0x139819(0x2c1)){const _0x6f3126={'x':this['x'],'y':this['y']};_0x2098d8['prototype'][_0x139819(0x243)]['call'](this),this[_0x139819(0xe4)](_0x6f3126);}else{if(!$gameSwitches[_0x139819(0x38b)](_0x21f408))return!![];}}return![];}else{_0x2a0c01['MessageCore']['ParseWeaponNotetags'][_0x139819(0x40c)](this,_0x18a066);const _0x40c880=_0x346bbd[_0x139819(0x260)]['Settings'][_0x139819(0x4c6)];_0x220370[_0x139819(0x260)][_0x139819(0x305)](_0x174e4f,_0x40c880['Weapons']);}}if(_0x2f71b4[_0x139819(0x4d8)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x32f949=RegExp['$1'][_0x139819(0x10c)](',')[_0x139819(0x145)](_0x368c06=>Number(_0x368c06)||0x0);for(const _0x4be7be of _0x32f949){if($gameSwitches[_0x139819(0x38b)](_0x4be7be))return![];}return!![];}return!![];},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x40e)]=function(_0x277d3e){const _0x5a8e1a=_0x5c5568;let _0x4531a0=_0x277d3e;return _0x4531a0=_0x4531a0[_0x5a8e1a(0x2fd)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x4531a0=_0x4531a0[_0x5a8e1a(0x2fd)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x4531a0;},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x47f)]=function(_0x385216){const _0x1313c4=_0x5c5568;if(Imported['VisuMZ_1_EventsMoveCore'])$gameMessage['registerSelfEvent']();if(_0x385216[_0x1313c4(0x4d8)](/<DISABLE>/i))return![];if(_0x385216[_0x1313c4(0x4d8)](/<ENABLE>/i))return!![];if(_0x385216[_0x1313c4(0x4d8)](/<ENABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3427c3=RegExp['$1']['split'](',')[_0x1313c4(0x145)](_0x33d866=>Number(_0x33d866)||0x0);for(const _0x3e5cce of _0x3427c3){if(!$gameSwitches['value'](_0x3e5cce))return![];}return!![];}if(_0x385216['match'](/<ENABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x438cc7=RegExp['$1'][_0x1313c4(0x10c)](',')[_0x1313c4(0x145)](_0x213d1e=>Number(_0x213d1e)||0x0);for(const _0x3b9821 of _0x438cc7){if(!$gameSwitches[_0x1313c4(0x38b)](_0x3b9821))return![];}return!![];}if(_0x385216[_0x1313c4(0x4d8)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x54f329=RegExp['$1'][_0x1313c4(0x10c)](',')['map'](_0x387b32=>Number(_0x387b32)||0x0);for(const _0x3abc6b of _0x54f329){if($gameSwitches['value'](_0x3abc6b))return!![];}return![];}if(_0x385216['match'](/<DISABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x979912=RegExp['$1'][_0x1313c4(0x10c)](',')[_0x1313c4(0x145)](_0x3b25d8=>Number(_0x3b25d8)||0x0);for(const _0x1514be of _0x979912){if(!$gameSwitches[_0x1313c4(0x38b)](_0x1514be))return!![];}return![];}if(_0x385216[_0x1313c4(0x4d8)](/<DISABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4b32ee=RegExp['$1'][_0x1313c4(0x10c)](',')[_0x1313c4(0x145)](_0x6769ee=>Number(_0x6769ee)||0x0);for(const _0x32bb95 of _0x4b32ee){if(_0x1313c4(0x1ce)!==_0x1313c4(0x4b7)){if(!$gameSwitches[_0x1313c4(0x38b)](_0x32bb95))return!![];}else _0xa9d80b[_0x1313c4(0x260)][_0x1313c4(0x14e)][_0x1313c4(0x40c)](this,_0xbd1c8f),this[_0x1313c4(0x2eb)](_0x3f55e0);}return![];}if(_0x385216[_0x1313c4(0x4d8)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x1313c4(0x41b)!==_0x1313c4(0x1c4)){const _0x5c58e0=RegExp['$1'][_0x1313c4(0x10c)](',')[_0x1313c4(0x145)](_0x1fa7e7=>Number(_0x1fa7e7)||0x0);for(const _0x4dc075 of _0x5c58e0){if($gameSwitches[_0x1313c4(0x38b)](_0x4dc075))return![];}return!![];}else{if(_0x3edb32['isRTL']())return;this['_relativePosition']=this['_relativePosition']||0x0;const _0x2098df=_0x114007[_0x1313c4(0x260)][_0x1313c4(0x375)]['General'][_0x1313c4(0x2b7)],_0x2f9b61=_0x252cee[_0x1313c4(0x260)][_0x1313c4(0x375)][_0x1313c4(0x2e0)][_0x1313c4(0x168)],_0x4c8b59=(0x5-this[_0x1313c4(0x494)])/0x5;this['x']+=_0x246900[_0x1313c4(0x300)](_0x2098df*_0x4c8b59),this['y']+=_0x2f9b61;}}return!![];},Window_ChoiceList['prototype'][_0x5c5568(0x25c)]=function(){const _0x3dc7d8=_0x5c5568;this['_choiceHelpDescriptions']={},this[_0x3dc7d8(0x381)]&&(this[_0x3dc7d8(0x381)][_0x3dc7d8(0x19d)](),this[_0x3dc7d8(0x381)]['hide']());},Window_ChoiceList['prototype'][_0x5c5568(0x3ca)]=function(){const _0x129304=_0x5c5568,_0x1677f0=/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;for(const _0x52efb2 of this[_0x129304(0x2b5)]){if(_0x129304(0x1b2)==='uzUTD'){let _0x53603d=this;return _0x53603d=_0x1d931f[_0x129304(0xce)](_0x53603d),_0x39c23b[_0x129304(0x260)][_0x129304(0xd0)]['apply'](_0x53603d,arguments);}else{if(!_0x52efb2)continue;const _0x19c6f2=this[_0x129304(0x2b5)]['indexOf'](_0x52efb2);if(_0x52efb2['name']['match'](_0x1677f0)){const _0xd6ca8a=String(RegExp['$1']);this[_0x129304(0x404)][_0x19c6f2]=_0xd6ca8a[_0x129304(0x199)](),_0x52efb2[_0x129304(0x50c)]=_0x52efb2[_0x129304(0x50c)][_0x129304(0x2fd)](_0x1677f0,'')[_0x129304(0x199)]();}else _0x129304(0x4fb)===_0x129304(0xe9)?(_0x195f6f[_0x129304(0x4df)]>0x0&&(_0x39675f[_0x129304(0x3e2)](_0x3b781b),_0x38297e=''),_0x2c55ed['push'](_0x3229f5+'\x1bWrapJpBreak[0]')):this[_0x129304(0x404)][_0x19c6f2]='';}}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x319)]=Window_ChoiceList['prototype'][_0x5c5568(0x213)],Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x213)]=function(){const _0x4d868=_0x5c5568;VisuMZ[_0x4d868(0x260)][_0x4d868(0x319)][_0x4d868(0x40c)](this),this[_0x4d868(0x499)](),this[_0x4d868(0x1ec)]();},Window_ChoiceList['prototype'][_0x5c5568(0x34e)]=function(){const _0x48a39f=_0x5c5568;if(!this[_0x48a39f(0x399)])return;const _0x40d6fa=0x8,_0x13ec5a=this[_0x48a39f(0x399)],_0x37aa56=this['x']+this[_0x48a39f(0xdb)],_0x4b9174=Math[_0x48a39f(0x300)]((Graphics[_0x48a39f(0xdb)]-Graphics[_0x48a39f(0x4f4)])/0x2);_0x37aa56>=Graphics['boxWidth']+_0x4b9174-_0x13ec5a[_0x48a39f(0xdb)]+_0x40d6fa?_0x48a39f(0xf8)==='DdKSL'?_0x13ec5a['x']=-_0x13ec5a[_0x48a39f(0xdb)]-_0x40d6fa:_0x14b54a=_0x498db0[_0x48a39f(0x300)]((this[_0x48a39f(0xdb)]-_0x1aa8db[_0x48a39f(0xdb)])/0x2):_0x13ec5a['x']=this[_0x48a39f(0xdb)]+_0x40d6fa,_0x13ec5a['y']=this[_0x48a39f(0x4a6)]/0x2-_0x13ec5a[_0x48a39f(0x4a6)]/0x2;},VisuMZ['MessageCore']['Window_ChoiceList_windowX']=Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x468)],Window_ChoiceList[_0x5c5568(0x21c)]['windowX']=function(){const _0x29354c=_0x5c5568;if(this[_0x29354c(0x1f2)]){if(_0x29354c(0x446)!==_0x29354c(0x248))return this[_0x29354c(0x2d5)]();else this[_0x29354c(0x2b1)]=_0x5cd68f(_0x3f4293[_0x29354c(0x2b1)]);}else{if('Qgztp'!==_0x29354c(0xfc))return VisuMZ['MessageCore'][_0x29354c(0x2e6)][_0x29354c(0x40c)](this);else{const _0x386f5f=this[_0x29354c(0x2b3)](_0x332556),_0x3826b5=this[_0x29354c(0x41e)](),_0x369ea8=_0x3826b5+this[_0x29354c(0x482)](_0x3cfa91);this[_0x29354c(0x191)](this[_0x29354c(0x1bd)](_0x4925ad));const _0x45a27d=this['textSizeEx'](_0x369ea8)['height'],_0x1a2684=_0x386f5f['x']+this['getChoiceIndent'](_0x369ea8),_0x1ef019=_0x13c6f4[_0x29354c(0x108)](_0x386f5f['y'],_0x386f5f['y']+_0x11e49a['round']((_0x386f5f[_0x29354c(0x4a6)]-_0x45a27d)/0x2));this[_0x29354c(0x4b1)](_0x369ea8,_0x1a2684,_0x1ef019,_0x386f5f[_0x29354c(0xdb)]),this[_0x29354c(0x28f)](_0x1c79a0),this[_0x29354c(0x41a)](_0x375ec9,_0x369ea8,_0x386f5f);}}},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x2d5)]=function(){const _0x170689=_0x5c5568,_0x2d8252=$gameMessage[_0x170689(0xf5)]();if(_0x2d8252===0x1)return(Graphics[_0x170689(0x4f4)]-this[_0x170689(0x124)]())/0x2;else return _0x2d8252===0x2?this[_0x170689(0x1f2)]['x']+this['_messageWindow'][_0x170689(0xdb)]-this[_0x170689(0x124)]():this[_0x170689(0x1f2)]['x'];},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x124)]=function(){const _0x5af624=_0x5c5568,_0x436d51=(this[_0x5af624(0x101)]()+this[_0x5af624(0xea)]())*this[_0x5af624(0x36e)]()+this[_0x5af624(0x4c9)]*0x2;return Math['min'](_0x436d51,Graphics[_0x5af624(0xdb)]);},Window_ChoiceList['prototype'][_0x5c5568(0x115)]=function(){const _0x45c773=_0x5c5568,_0x3a4366=$gameMessage[_0x45c773(0x474)]()[_0x45c773(0x145)](_0x57e442=>this['convertChoiceMacros'](_0x57e442))[_0x45c773(0x1fd)](_0x4d1554=>this[_0x45c773(0x2cc)](_0x4d1554));let _0x3c272c=Math[_0x45c773(0x451)](_0x3a4366[_0x45c773(0x4df)]/this[_0x45c773(0x36e)]());if(!$gameMessage[_0x45c773(0x348)]){if(_0x45c773(0x490)===_0x45c773(0x43c))return _0x3da7be=_0xab6a83[_0x45c773(0x2fd)](/<COLORLOCK>/gi,_0x45c773(0x125)),_0x5798aa=_0x40d6a8[_0x45c773(0x2fd)](/<\/COLORLOCK>/gi,_0x45c773(0x487)),_0x57cc9f=_0x52984d['replace'](/\(\(\(/gi,_0x45c773(0x125)),_0x50bb77=_0x34b658[_0x45c773(0x2fd)](/\)\)\)/gi,_0x45c773(0x487)),_0x3fc76e;else{const _0x40516c=$gameMessage['maxShuffleChoices']();_0x3c272c=Math['ceil'](Math['min'](_0x40516c,_0x3a4366['length'])/this[_0x45c773(0x36e)]());}}return Math[_0x45c773(0x108)](0x1,Math[_0x45c773(0x135)](_0x3c272c,this['maxLines']()));},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x274)]=function(){const _0xa52bca=_0x5c5568,_0x405287=this[_0xa52bca(0x1f2)],_0x4e3a79=_0x405287?_0x405287['y']:0x0,_0x346bd6=_0x405287?_0x405287['height']:0x0,_0x36408b=Graphics[_0xa52bca(0x4e6)]/0x2;if(_0x4e3a79<_0x36408b&&_0x4e3a79+_0x346bd6>_0x36408b){if(_0xa52bca(0x150)!==_0xa52bca(0x177))return 0x4;else this['_pictureText']=[],this[_0xa52bca(0x4da)]=[],this[_0xa52bca(0x111)]=[];}else{if('nQPaS'===_0xa52bca(0x19f))return $gameSystem[_0xa52bca(0x3c3)]();else _0x2dccea[_0xa52bca(0x260)]['Window_Message_processEscapeCharacter']['call'](this,_0x474938,_0x2da46b);}},Window_ChoiceList[_0x5c5568(0x21c)]['maxChoiceWidth']=function(){const _0x578259=_0x5c5568;let _0x46d414=this[_0x578259(0x133)]();for(const _0x3c32d9 of this[_0x578259(0x2b5)]){const _0x2845ca=_0x3c32d9[_0x578259(0x50c)],_0x40d075=this[_0x578259(0x269)](_0x2845ca),_0x264908=this['textSizeEx'](_0x2845ca)[_0x578259(0xdb)]+_0x40d075,_0x83b3cb=Math[_0x578259(0x451)](_0x264908)+this[_0x578259(0x1df)]()*0x2;_0x46d414=Math[_0x578259(0x108)](_0x46d414,_0x83b3cb);}return _0x46d414;},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x133)]=function(){const _0x3df569=_0x5c5568;let _0x11b6f2=$gameSystem[_0x3df569(0xeb)]();const _0x3bf34e=$gameMessage[_0x3df569(0x474)]();for(const _0x5936d6 of _0x3bf34e){if(_0x5936d6[_0x3df569(0x4d8)](/<CHOICE WIDTH:[ ](\d+)>/gi)){if(_0x3df569(0x1b0)!=='ovZGA')_0x11b6f2=Math[_0x3df569(0x108)](_0x11b6f2,Number(RegExp['$1']));else{if(_0x1fba8d['wtypeId']!==_0x2a859e)return![];}}}return Math[_0x3df569(0x108)](_0x11b6f2,0x1);},Window_ChoiceList[_0x5c5568(0x21c)]['addChoiceDistance']=function(){const _0x3b1c9f=_0x5c5568,_0x25c43e=$gameSystem[_0x3b1c9f(0x3f7)]()||0x0,_0x33dc7f=this[_0x3b1c9f(0x1f2)]['y'],_0x2e710f=this[_0x3b1c9f(0x1f2)][_0x3b1c9f(0x4a6)],_0x4ed107=this['_messageWindow'][_0x3b1c9f(0x1c2)],_0x3a25bd=_0x4ed107[_0x3b1c9f(0x2a8)]>0x0&&_0x4ed107['width']>0x0,_0x3568cb=_0x3a25bd?_0x4ed107[_0x3b1c9f(0x4a6)]:0x0;if(_0x25c43e<0x0&&(this[_0x3b1c9f(0x1f2)][_0x3b1c9f(0x13d)]()||this[_0x3b1c9f(0x1f2)][_0x3b1c9f(0x2c8)]()))this['y']=Math[_0x3b1c9f(0x32c)]((Graphics[_0x3b1c9f(0x4e6)]-this[_0x3b1c9f(0x4a6)])/0x2);else{if(_0x33dc7f>=Graphics[_0x3b1c9f(0x4e6)]/0x2){if(_0x25c43e>=0x0)this['y']-=_0x25c43e;else{if(_0x3b1c9f(0x3dd)==='IYIVg')return _0x2104a5=this[_0x3b1c9f(0x288)](_0x21c77f),_0x30ff1c=this[_0x3b1c9f(0x2f7)](_0x24df04),_0x2c0124=this[_0x3b1c9f(0x4a7)](_0x48e1ef),_0x5e75eb=this[_0x3b1c9f(0x4e0)](_0x1aad2e),_0x11b7a5=this[_0x3b1c9f(0x23b)](_0x4b15c0),_0x168266=this[_0x3b1c9f(0x3e1)](_0x4b67b6),_0x115947=this[_0x3b1c9f(0x128)](_0x15c0e9),_0x2967fa=this[_0x3b1c9f(0x36b)](_0x5627f5),_0x28a0e0=this['convertLockColorsEscapeCharacters'](_0x2981bf),_0x1fe55f=this[_0x3b1c9f(0x28a)](_0x4c2e8e),_0x37fa5f=this[_0x3b1c9f(0x478)](_0x3ab61c),_0x293d80=this['convertMessageCoreEscapeActions'](_0x20bed6),_0x28b570=this[_0x3b1c9f(0x2fb)](_0x261de1),_0xb343e1=this[_0x3b1c9f(0x32e)](_0x180ab8),_0x46d8fa=this[_0x3b1c9f(0x4a7)](_0x5b663a),_0x113cba=this[_0x3b1c9f(0x450)](_0x6dd3e3),_0x332971=this[_0x3b1c9f(0x4ef)](_0x4dbc3e),_0x2c00d3;else this['y']=Math[_0x3b1c9f(0x300)]((_0x33dc7f-this['height']-_0x3568cb)/0x2);}}else{if(_0x3b1c9f(0xd2)!=='ugCdR'){if(_0x25c43e>=0x0)this['y']+=_0x25c43e;else{if(_0x3b1c9f(0x44d)!==_0x3b1c9f(0x44d)){const _0x15c54d=_0x1744ba[_0x3b1c9f(0xf5)]();if(_0x15c54d===0x1)return(_0x43f64e[_0x3b1c9f(0x4f4)]-this['windowWidth']())/0x2;else return _0x15c54d===0x2?this[_0x3b1c9f(0x1f2)]['x']+this[_0x3b1c9f(0x1f2)][_0x3b1c9f(0xdb)]-this[_0x3b1c9f(0x124)]():this[_0x3b1c9f(0x1f2)]['x'];}else{const _0x103d18=Graphics[_0x3b1c9f(0x4e6)]-(_0x33dc7f+_0x2e710f+_0x3568cb);this['y']+=Math[_0x3b1c9f(0x300)]((_0x103d18-this[_0x3b1c9f(0x4a6)])/0x2)+_0x3568cb;}}}else this['_pictureTextRefresh']=this[_0x3b1c9f(0x111)]||[],(this[_0x3b1c9f(0x2b9)](_0x4c881d)||_0x79df05)&&this[_0x3b1c9f(0x111)][_0x3b1c9f(0x3e2)](_0x28446e);}}},Window_ChoiceList[_0x5c5568(0x21c)]['drawItem']=function(_0x388771){const _0x3c7e0f=_0x5c5568,_0x55af4a=this[_0x3c7e0f(0x1d6)](_0x388771);if(_0x55af4a){if(_0x3c7e0f(0x11e)===_0x3c7e0f(0x176)){const _0x5a2ad0=_0x151255['$1'][_0x3c7e0f(0x10c)](',')[_0x3c7e0f(0x145)](_0x27598f=>_0x1479a0(_0x27598f)||0x0);for(const _0x4ebb7a of _0x5a2ad0){if(_0x3da480[_0x3c7e0f(0x38b)](_0x4ebb7a))return!![];}return![];}else{const _0x39fd98=ImageManager[_0x3c7e0f(0x36d)](_0x55af4a),_0x1c83f5=this['choiceAlignText'](),_0x12573b=_0x1c83f5+this['commandName'](_0x388771),_0x31847f=this[_0x3c7e0f(0x2b3)](_0x388771);_0x39fd98[_0x3c7e0f(0x26c)](this['drawChoiceLocationImage'][_0x3c7e0f(0x23c)](this,_0x388771,!![],_0x12573b,_0x31847f,_0x39fd98));return;}}this[_0x3c7e0f(0x44e)](_0x388771);},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x44e)]=function(_0x3cf7b5){const _0x38e554=_0x5c5568,_0x2e7fb4=this[_0x38e554(0x2b3)](_0x3cf7b5),_0x5c0231=this[_0x38e554(0x41e)](),_0x469c91=_0x5c0231+this[_0x38e554(0x482)](_0x3cf7b5);this[_0x38e554(0x191)](this[_0x38e554(0x1bd)](_0x3cf7b5));const _0x85aad0=this['textSizeEx'](_0x469c91)[_0x38e554(0x4a6)],_0x2fc61a=_0x2e7fb4['x']+this[_0x38e554(0x269)](_0x469c91),_0x399758=Math[_0x38e554(0x108)](_0x2e7fb4['y'],_0x2e7fb4['y']+Math[_0x38e554(0x32c)]((_0x2e7fb4['height']-_0x85aad0)/0x2));this[_0x38e554(0x4b1)](_0x469c91,_0x2fc61a,_0x399758,_0x2e7fb4[_0x38e554(0xdb)]),this[_0x38e554(0x28f)](_0x3cf7b5),this[_0x38e554(0x41a)](_0x3cf7b5,_0x469c91,_0x2e7fb4);},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x41e)]=function(){const _0x3d7887=_0x5c5568;return $gameSystem[_0x3d7887(0x265)]()!==_0x3d7887(0x2d0)?_0x3d7887(0x467)[_0x3d7887(0x49e)]($gameSystem['getChoiceListTextAlign']()):'';},Window_ChoiceList['prototype'][_0x5c5568(0x269)]=function(_0x4e853d){let _0x428cad=0x0;return _0x4e853d['match'](/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)&&(_0x428cad=Number(RegExp['$1'])),_0x428cad;},Window_ChoiceList[_0x5c5568(0x21c)]['changeChoiceBackgroundColor']=function(_0x3b1ec4){const _0x4da5f7=_0x5c5568;if(!Imported[_0x4da5f7(0x2bb)])return;const _0x20c596=this[_0x4da5f7(0x482)](_0x3b1ec4);let _0x4fbee4=![],_0xbfd7ff=![],_0x49b00b=ColorManager['itemBackColor1'](),_0x4bf6cd=ColorManager['itemBackColor2']();if(_0x20c596['match'](/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi))_0x49b00b=ColorManager[_0x4da5f7(0x3f0)](RegExp['$1'])[_0x4da5f7(0x199)](),_0x4bf6cd=ColorManager[_0x4da5f7(0x3f0)](RegExp['$2'])[_0x4da5f7(0x199)](),_0x4fbee4=!![];else{if(_0x20c596[_0x4da5f7(0x4d8)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)){if(_0x4da5f7(0x344)===_0x4da5f7(0x344)){let _0x32a88a=String(RegExp['$1'])[_0x4da5f7(0x31a)]()[_0x4da5f7(0x199)]();switch(_0x32a88a){case _0x4da5f7(0x2f8):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x25f),_0xbfd7ff=!![];break;case'orange':_0x49b00b=_0x4bf6cd='#fbaf5d',_0xbfd7ff=!![];break;case _0x4da5f7(0x2e9):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x472),_0xbfd7ff=!![];break;case _0x4da5f7(0x109):_0x49b00b=_0x4bf6cd='#7cc576',_0xbfd7ff=!![];break;case _0x4da5f7(0xfa):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x3c4),_0xbfd7ff=!![];break;case _0x4da5f7(0x2a0):case'violet':_0x49b00b=_0x4bf6cd=_0x4da5f7(0x30a),_0xbfd7ff=!![];break;case _0x4da5f7(0x19a):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x254),_0xbfd7ff=!![];break;case _0x4da5f7(0x466):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x1dc),_0xbfd7ff=!![];break;case _0x4da5f7(0x138):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x214),_0xbfd7ff=!![];break;case _0x4da5f7(0x2a3):case'grey':_0x49b00b=_0x4bf6cd=_0x4da5f7(0x37e),_0xbfd7ff=!![];break;case _0x4da5f7(0x4e2):_0x49b00b=_0x4bf6cd=_0x4da5f7(0x31f),_0xbfd7ff=!![];break;case _0x4da5f7(0x3ae):_0x49b00b=_0x4bf6cd=ColorManager[_0x4da5f7(0x2c5)](),_0xbfd7ff=!![];break;case'no':_0x49b00b=_0x4bf6cd=ColorManager[_0x4da5f7(0x2a1)](),_0xbfd7ff=!![];break;case _0x4da5f7(0x1b9):_0x49b00b=_0x4bf6cd=ColorManager[_0x4da5f7(0x431)](),_0xbfd7ff=!![];break;case _0x4da5f7(0x349):_0x49b00b=_0x4bf6cd=ColorManager['crisisColor'](),_0xbfd7ff=!![];break;default:_0x49b00b=_0x4bf6cd=ColorManager[_0x4da5f7(0x3f0)](_0x32a88a),_0xbfd7ff=!![];break;}_0x4fbee4=!![];}else return!![];}}if(!_0x4fbee4)return;const _0x4c2a40=this[_0x4da5f7(0x294)](_0x3b1ec4);this[_0x4da5f7(0x2a7)]['clearRect'](_0x4c2a40['x'],_0x4c2a40['y'],_0x4c2a40[_0x4da5f7(0xdb)],_0x4c2a40[_0x4da5f7(0x4a6)]),this[_0x4da5f7(0x41f)](_0x4c2a40,_0x49b00b,_0x4bf6cd,_0xbfd7ff);},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x41f)]=function(_0x4623e8,_0x58a601,_0x203154,_0x39571f){const _0x4fadb9=_0x5c5568,_0x56a03a=ColorManager[_0x4fadb9(0x112)](),_0x24c0e0=ColorManager[_0x4fadb9(0x157)](),_0x59d0a6=_0x58a601??ColorManager[_0x4fadb9(0x112)](),_0x1d2fd2=_0x203154??_0x58a601,_0x217dad=_0x4623e8['x'],_0x3745b9=_0x4623e8['y'],_0x5e659a=_0x4623e8[_0x4fadb9(0xdb)],_0x283653=_0x4623e8[_0x4fadb9(0x4a6)];this[_0x4fadb9(0x2a7)]['gradientFillRect'](_0x217dad,_0x3745b9,_0x5e659a,_0x283653,_0x59d0a6,_0x1d2fd2,!![]),_0x39571f&&this[_0x4fadb9(0x2a7)][_0x4fadb9(0x182)](_0x217dad,_0x3745b9,_0x5e659a,_0x283653,_0x56a03a,_0x1d2fd2,!![]),this[_0x4fadb9(0x2a7)][_0x4fadb9(0x211)](_0x217dad,_0x3745b9,_0x5e659a,_0x283653,_0x56a03a);},Window_ChoiceList[_0x5c5568(0x21c)]['requestChoiceForegroundImage']=function(_0xf6550e){const _0x1d4343=_0x5c5568,_0x59a099=this[_0x1d4343(0x41e)](),_0x4caecb=_0x59a099+this[_0x1d4343(0x482)](_0xf6550e);let _0x51e0a7='';if(_0x4caecb[_0x1d4343(0x4d8)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x51e0a7=String(RegExp['$1'])[_0x1d4343(0x199)]();else _0x4caecb[_0x1d4343(0x4d8)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x1d4343(0x34c)!==_0x1d4343(0x34c)?(_0xcdf0eb=_0x1e7d2e['replace'](_0x52f9b9['textCodeCheck'],_0x14d1a4[_0x1d4343(0x1f0)][_0x1d4343(0x23c)](this)),_0x536958=this[_0x1d4343(0x4a7)](_0xe2a56e)):_0x51e0a7=String(RegExp['$2'])['trim']());return _0x51e0a7;},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x41a)]=function(_0x3cacfb,_0x1759f9,_0x1353ca){const _0x11672e=_0x5c5568;let _0x710154='';if(_0x1759f9[_0x11672e(0x4d8)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)){if(_0x11672e(0x141)!==_0x11672e(0x141)){_0x4a9e95['MessageCore'][_0x11672e(0x1b8)][_0x11672e(0x40c)](this,_0x5eb2d1,_0x461760);if(_0x2384f2===_0x11672e(0x50b))this[_0x11672e(0xef)](_0x6efacf);else _0xf790d0===_0x11672e(0x1a9)&&this[_0x11672e(0xef)](_0x5189f7,!![]);}else _0x710154=String(RegExp['$1'])['trim']();}else _0x1759f9[_0x11672e(0x4d8)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x11672e(0x337)===_0x11672e(0x337)?_0x710154=String(RegExp['$2'])[_0x11672e(0x199)]():(this['clearCommandList'](),this[_0x11672e(0x2d2)](),this[_0x11672e(0x1f2)]&&(this['updatePlacement'](),this[_0x11672e(0x34e)]()),this[_0x11672e(0x410)](),this['updateBackground'](),this[_0x11672e(0x1a7)](),_0x49ffcd[_0x11672e(0x21c)][_0x11672e(0x4c7)][_0x11672e(0x40c)](this)));if(_0x710154){const _0x342509=ImageManager[_0x11672e(0x36d)](_0x710154);_0x342509[_0x11672e(0x26c)](this['drawChoiceLocationImage'][_0x11672e(0x23c)](this,_0x3cacfb,![],_0x1759f9,_0x1353ca,_0x342509));}},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x121)]=function(_0x555bc7,_0x456170,_0x81f0e0,_0x4cc52b,_0x60ca08){const _0x5cf6d9=_0x5c5568,_0x12345b=this[_0x5cf6d9(0x41e)](),_0x58a4ff=_0x12345b+this['commandName'](_0x555bc7);if(_0x81f0e0!==_0x58a4ff)return;const _0x11e19b=this[_0x5cf6d9(0x2b3)](_0x555bc7);if(['x','y',_0x5cf6d9(0xdb),_0x5cf6d9(0x4a6)][_0x5cf6d9(0x202)](_0x404e6f=>_0x11e19b[_0x404e6f]!==_0x4cc52b[_0x404e6f]))return;let _0x362aad=0x0,_0x249429='';if(_0x456170&&_0x58a4ff[_0x5cf6d9(0x4d8)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)){}else{if(_0x456170&&_0x58a4ff['match'](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i))_0x249429=String(RegExp['$1'])[_0x5cf6d9(0x31a)]()['trim']();else!_0x456170&&_0x58a4ff[_0x5cf6d9(0x4d8)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x249429=String(RegExp['$1'])[_0x5cf6d9(0x31a)]()[_0x5cf6d9(0x199)]());}switch(_0x249429){case _0x5cf6d9(0x428):case'lower-left':case _0x5cf6d9(0x2d3):case'downleft':case _0x5cf6d9(0x27f):case _0x5cf6d9(0x24e):case'1':_0x362aad=0x1;break;case'lowercenter':case'lower-center':case'lower\x20center':case _0x5cf6d9(0x4ee):case _0x5cf6d9(0x216):case _0x5cf6d9(0x3e5):case _0x5cf6d9(0x3a4):case'2':_0x362aad=0x2;break;case _0x5cf6d9(0x35c):case _0x5cf6d9(0x206):case _0x5cf6d9(0x131):case _0x5cf6d9(0x3ab):case _0x5cf6d9(0x32d):case'down\x20right':case'3':_0x362aad=0x3;break;case _0x5cf6d9(0xe8):case _0x5cf6d9(0x1e4):case _0x5cf6d9(0x273):case'4':_0x362aad=0x4;break;case _0x5cf6d9(0x25b):case _0x5cf6d9(0x436):case _0x5cf6d9(0xd4):case'centered':case'5':_0x362aad=0x5;break;case _0x5cf6d9(0x4a0):case _0x5cf6d9(0x169):case _0x5cf6d9(0x443):case'6':_0x362aad=0x6;break;case _0x5cf6d9(0x2be):case _0x5cf6d9(0x17b):case _0x5cf6d9(0x152):case _0x5cf6d9(0x4bd):case _0x5cf6d9(0x217):case _0x5cf6d9(0x190):case'7':_0x362aad=0x7;break;case _0x5cf6d9(0x1e6):case'upper-center':case _0x5cf6d9(0x32a):case'upcenter':case _0x5cf6d9(0x28e):case _0x5cf6d9(0x2d9):case'up':case'8':_0x362aad=0x8;break;case'upperright':case'upper-right':case'upper\x20right':case _0x5cf6d9(0x357):case _0x5cf6d9(0x361):case _0x5cf6d9(0x166):case'9':_0x362aad=0x9;break;}const _0x4cab3e=_0x456170?this['contents']:this[_0x5cf6d9(0x2a7)],_0x62150b=this[_0x5cf6d9(0x294)](_0x555bc7);if(!_0x456170){if('HkuyT'===_0x5cf6d9(0x329))return _0x52c529=_0x425062['replace'](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x5cf6d9(0x415)]()),_0x144c1f=_0x2b3ed3[_0x5cf6d9(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x5cf6d9(0x38e)]()),_0x4735c1=_0x3997a7[_0x5cf6d9(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x5cf6d9(0x31e)](!![])),_0x18ccf6=_0x43df3d[_0x5cf6d9(0x2fd)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x5cf6d9(0x31e)](![])),_0xad524b;else _0x4cab3e[_0x5cf6d9(0xee)](_0x62150b['x']-0x1,_0x62150b['y']-0x1,_0x62150b['width']+0x2,_0x62150b[_0x5cf6d9(0x4a6)]+0x2);}const _0x56822e=_0x62150b['x']+0x2,_0x3c7a68=_0x62150b['y']+0x2,_0x111255=_0x62150b[_0x5cf6d9(0xdb)]-0x4,_0x2b9961=_0x62150b[_0x5cf6d9(0x4a6)]-0x4,_0x1e7f4c=_0x60ca08[_0x5cf6d9(0xdb)],_0x4a05fb=_0x60ca08[_0x5cf6d9(0x4a6)];let _0x59bebf=_0x56822e,_0x56359d=_0x3c7a68,_0x2c6f7b=_0x111255,_0x265308=_0x2b9961;const _0x1a7b5e=_0x111255/_0x1e7f4c,_0x5d29e6=_0x2b9961/_0x4a05fb;let _0xfde8e9=Math['min'](_0x1a7b5e,_0x5d29e6);if(_0x456170)_0xfde8e9=Math['min'](_0xfde8e9,0x1);_0x362aad!==0x0&&('HcMPD'===_0x5cf6d9(0x1dd)?(_0x2c6f7b=Math[_0x5cf6d9(0x32c)](_0x1e7f4c*_0xfde8e9),_0x265308=Math[_0x5cf6d9(0x32c)](_0x4a05fb*_0xfde8e9)):_0x2d8ec7['y']=this['y']>0x0?0x0:_0x5c6956[_0x5cf6d9(0x4e6)]-_0x4fac93[_0x5cf6d9(0x4a6)]);switch(_0x362aad){case 0x1:case 0x4:case 0x7:_0x59bebf=_0x56822e;break;case 0x2:case 0x5:case 0x8:_0x59bebf+=Math['round']((_0x111255-_0x2c6f7b)/0x2);break;case 0x3:case 0x6:case 0x9:_0x59bebf+=_0x111255-_0x2c6f7b;break;}switch(_0x362aad){case 0x7:case 0x8:case 0x9:_0x56359d=_0x3c7a68;break;case 0x4:case 0x5:case 0x6:_0x56359d+=Math['round']((_0x2b9961-_0x265308)/0x2);break;case 0x1:case 0x2:case 0x3:_0x56359d+=_0x2b9961-_0x265308;break;}_0x4cab3e['blt'](_0x60ca08,0x0,0x0,_0x1e7f4c,_0x4a05fb,_0x59bebf,_0x56359d,_0x2c6f7b,_0x265308),_0x456170&&(_0x5cf6d9(0x43d)===_0x5cf6d9(0x43d)?this[_0x5cf6d9(0x44e)](_0x555bc7):_0x4ad317=_0x5c4cd4[_0x5cf6d9(0x300)](this[_0x5cf6d9(0xdb)]-_0x505869['width']-_0x117c61));},Window_ChoiceList[_0x5c5568(0x21c)][_0x5c5568(0x200)]=function(){const _0x1d3520=_0x5c5568;this[_0x1d3520(0x381)][_0x1d3520(0x19d)]();if(!this[_0x1d3520(0x404)])return;const _0x2328ff=this[_0x1d3520(0x16f)]();this[_0x1d3520(0x404)][_0x2328ff]?(this[_0x1d3520(0x381)][_0x1d3520(0x14d)](this[_0x1d3520(0x404)][_0x2328ff]),this[_0x1d3520(0x381)][_0x1d3520(0x12c)]()):(this[_0x1d3520(0x381)][_0x1d3520(0x19d)](),this[_0x1d3520(0x381)][_0x1d3520(0x3c9)]());},Window_EventItem['prototype'][_0x5c5568(0x378)]=function(){const _0xfd1366=_0x5c5568,_0x108385=$gameMessage[_0xfd1366(0x495)]();if(_0x108385===_0xfd1366(0x1de)&&Imported['VisuMZ_1_SkillsStatesCore']){if('KACPI'==='KACPI')this[_0xfd1366(0x1c5)]();else{const _0x525bd7=this[_0xfd1366(0x477)],_0x385e27=this[_0xfd1366(0x20d)],_0x24ebdf=this[_0xfd1366(0x3ee)]((_0x385e27-_0x525bd7)/_0x385e27),_0x338dd4=this['calcMoveEasing']((_0x385e27-_0x525bd7+0x1)/_0x385e27),_0x56babc=(_0x407398-_0x48db12*_0x24ebdf)/(0x1-_0x24ebdf);return _0x56babc+(_0x498ff7-_0x56babc)*_0x338dd4;}}else Window_ItemList[_0xfd1366(0x21c)][_0xfd1366(0x378)][_0xfd1366(0x40c)](this);},Window_EventItem[_0x5c5568(0x21c)][_0x5c5568(0x1c5)]=function(){const _0x6c14de=_0x5c5568,_0x228931=$gameMessage[_0x6c14de(0x4ea)]();this[_0x6c14de(0x50d)]=_0x228931?_0x228931[_0x6c14de(0x21e)]()['filter'](_0x335f1a=>this[_0x6c14de(0x1e3)](_0x335f1a)):[],this['includes'](null)&&this[_0x6c14de(0x50d)][_0x6c14de(0x3e2)](null);},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x1b7)]=Window_EventItem[_0x5c5568(0x21c)][_0x5c5568(0x1e3)],Window_EventItem['prototype'][_0x5c5568(0x1e3)]=function(_0x2b4bc2){const _0x4e5c47=_0x5c5568,_0x34b821=$gameMessage[_0x4e5c47(0x495)]();if(_0x34b821===_0x4e5c47(0x126)){if(_0x4e5c47(0x143)===_0x4e5c47(0x16a)){const _0x4a9977=_0x2e4848[_0x4e5c47(0x10c)](',')[_0x4e5c47(0x145)](_0x312b57=>_0x1704b8(_0x312b57)||0x0);if(_0x4a9977[0x0]!==_0x15320d)this[_0x4e5c47(0x302)]['x']=_0x5d8c83(_0x4a9977[0x0]);if(_0x4a9977[0x1]!==_0x506a71)this[_0x4e5c47(0x302)]['y']=_0x2230e4(_0x4a9977[0x1]);return'';}else{if(!DataManager[_0x4e5c47(0xcb)](_0x2b4bc2))return![];const _0x27f283=$gameMessage[_0x4e5c47(0x2de)]();if(_0x27f283>0x0){if(_0x2b4bc2[_0x4e5c47(0x15d)]!==_0x27f283)return![];}return!![];}}else{if(_0x34b821===_0x4e5c47(0x480)){if(!DataManager['isArmor'](_0x2b4bc2))return![];const _0x59e20f=$gameMessage[_0x4e5c47(0x1d2)]();if(_0x59e20f>0x0){if(_0x2b4bc2['atypeId']!==_0x59e20f)return![];}const _0x4a5132=$gameMessage[_0x4e5c47(0x278)]();if(_0x4a5132>0x0){if(_0x2b4bc2[_0x4e5c47(0x4b3)]!==_0x4a5132)return![];}return!![];}else{if(_0x34b821===_0x4e5c47(0x1de)){if(!DataManager[_0x4e5c47(0x30c)](_0x2b4bc2))return![];const _0x33f61a=$gameMessage['itemChoiceActor']();if(_0x33f61a['isSkillHidden'](_0x2b4bc2))return![];if(!_0x33f61a[_0x4e5c47(0x335)](_0x2b4bc2))return![];const _0x5b7c32=$gameMessage[_0x4e5c47(0x3e3)]();if(_0x5b7c32>0x0){const _0x18fa80=DataManager[_0x4e5c47(0x26f)](_0x2b4bc2);if(!_0x18fa80['includes'](_0x5b7c32))return![];}return!![];}else return VisuMZ[_0x4e5c47(0x260)][_0x4e5c47(0x1b7)][_0x4e5c47(0x40c)](this,_0x2b4bc2);}}},VisuMZ[_0x5c5568(0x260)][_0x5c5568(0x2b6)]=Window_ItemList[_0x5c5568(0x21c)][_0x5c5568(0x2fa)],Window_ItemList[_0x5c5568(0x21c)][_0x5c5568(0x2fa)]=function(_0x4a2c44,_0x4a251b,_0x2ccb73,_0x520d51){const _0x3ed45d=_0x5c5568,_0x2d3801=$gameMessage[_0x3ed45d(0x495)]();if(_0x2d3801===_0x3ed45d(0x1de)){const _0x17f1dc=$gameMessage[_0x3ed45d(0x4ea)]();this['drawSkillCost'](_0x17f1dc,_0x4a2c44,_0x4a251b,_0x2ccb73,_0x520d51);}else VisuMZ[_0x3ed45d(0x260)][_0x3ed45d(0x2b6)][_0x3ed45d(0x40c)](this,_0x4a2c44,_0x4a251b,_0x2ccb73,_0x520d51);};