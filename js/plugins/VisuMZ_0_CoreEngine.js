//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.80;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.80] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * Version 1.80: January 18, 2024
 * * RPG Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
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
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"true","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadeCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * "Don't" will consolidate both into "Escape".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x163f4f=_0x3c87;(function(_0x546a64,_0x157ce8){const _0x2544c2=_0x3c87,_0x48050f=_0x546a64();while(!![]){try{const _0x5b7348=-parseInt(_0x2544c2(0x463))/0x1+-parseInt(_0x2544c2(0x4f1))/0x2+-parseInt(_0x2544c2(0x3af))/0x3+parseInt(_0x2544c2(0x474))/0x4+parseInt(_0x2544c2(0x7db))/0x5+parseInt(_0x2544c2(0x467))/0x6*(-parseInt(_0x2544c2(0x417))/0x7)+-parseInt(_0x2544c2(0x410))/0x8*(-parseInt(_0x2544c2(0x797))/0x9);if(_0x5b7348===_0x157ce8)break;else _0x48050f['push'](_0x48050f['shift']());}catch(_0xa715d1){_0x48050f['push'](_0x48050f['shift']());}}}(_0x4931,0xb9b22));var label='CoreEngine',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x163f4f(0x333)](function(_0x11d3a9){const _0x2134c5=_0x163f4f;return _0x11d3a9[_0x2134c5(0x3a9)]&&_0x11d3a9[_0x2134c5(0x9e2)][_0x2134c5(0x2b2)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x163f4f(0x403)]||{},VisuMZ['ConvertParams']=function(_0x3f1f75,_0x3df7b5){const _0x3f8cd8=_0x163f4f;for(const _0x56a2fa in _0x3df7b5){if('MkBJM'!==_0x3f8cd8(0x7cd))this['_actorWindow']['setBackgroundType'](_0x3f3c74['layoutSettings'][_0x3f8cd8(0x5af)]);else{if(_0x56a2fa['match'](/(.*):(.*)/i)){if('pksZa'===_0x3f8cd8(0x8d0)){const _0x4af488=String(RegExp['$1']),_0x357d0e=String(RegExp['$2'])[_0x3f8cd8(0x5ca)]()[_0x3f8cd8(0x376)]();let _0x3d115b,_0x3f2ba3,_0x3907d0;switch(_0x357d0e){case _0x3f8cd8(0x679):_0x3d115b=_0x3df7b5[_0x56a2fa]!==''?Number(_0x3df7b5[_0x56a2fa]):0x0;break;case _0x3f8cd8(0x132):_0x3f2ba3=_0x3df7b5[_0x56a2fa]!==''?JSON['parse'](_0x3df7b5[_0x56a2fa]):[],_0x3d115b=_0x3f2ba3[_0x3f8cd8(0x8cf)](_0x5e4498=>Number(_0x5e4498));break;case'EVAL':_0x3d115b=_0x3df7b5[_0x56a2fa]!==''?eval(_0x3df7b5[_0x56a2fa]):null;break;case _0x3f8cd8(0x8cd):_0x3f2ba3=_0x3df7b5[_0x56a2fa]!==''?JSON['parse'](_0x3df7b5[_0x56a2fa]):[],_0x3d115b=_0x3f2ba3[_0x3f8cd8(0x8cf)](_0x4211cd=>eval(_0x4211cd));break;case _0x3f8cd8(0x91f):_0x3d115b=_0x3df7b5[_0x56a2fa]!==''?JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa]):'';break;case _0x3f8cd8(0x2da):_0x3f2ba3=_0x3df7b5[_0x56a2fa]!==''?JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa]):[],_0x3d115b=_0x3f2ba3[_0x3f8cd8(0x8cf)](_0x53f9e4=>JSON['parse'](_0x53f9e4));break;case _0x3f8cd8(0x325):_0x3d115b=_0x3df7b5[_0x56a2fa]!==''?new Function(JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa])):new Function(_0x3f8cd8(0x9c5));break;case _0x3f8cd8(0x9aa):_0x3f2ba3=_0x3df7b5[_0x56a2fa]!==''?JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa]):[],_0x3d115b=_0x3f2ba3[_0x3f8cd8(0x8cf)](_0x371f05=>new Function(JSON[_0x3f8cd8(0x7f9)](_0x371f05)));break;case'STR':_0x3d115b=_0x3df7b5[_0x56a2fa]!==''?String(_0x3df7b5[_0x56a2fa]):'';break;case _0x3f8cd8(0x91d):_0x3f2ba3=_0x3df7b5[_0x56a2fa]!==''?JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa]):[],_0x3d115b=_0x3f2ba3['map'](_0x3ac4da=>String(_0x3ac4da));break;case _0x3f8cd8(0x886):_0x3907d0=_0x3df7b5[_0x56a2fa]!==''?JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa]):{},_0x3f1f75[_0x4af488]={},VisuMZ[_0x3f8cd8(0x2d3)](_0x3f1f75[_0x4af488],_0x3907d0);continue;case'ARRAYSTRUCT':_0x3f2ba3=_0x3df7b5[_0x56a2fa]!==''?JSON[_0x3f8cd8(0x7f9)](_0x3df7b5[_0x56a2fa]):[],_0x3d115b=_0x3f2ba3['map'](_0x4fa9c1=>VisuMZ[_0x3f8cd8(0x2d3)]({},JSON['parse'](_0x4fa9c1)));break;default:continue;}_0x3f1f75[_0x4af488]=_0x3d115b;}else{const _0x400685=this[_0x3f8cd8(0x6f5)],_0x5bbeb3=_0x50cde3['max'](0x0,this[_0x3f8cd8(0x48b)]-_0x400685*0x2),_0x45ae80=_0x254e39[_0x3f8cd8(0x69d)](0x0,this[_0x3f8cd8(0x903)]-_0x400685*0x2),_0x5d7683=this['_backSprite'],_0x29d15e=_0x5d7683['children'][0x0];_0x5d7683[_0x3f8cd8(0x2dc)]=this['_windowskin'],_0x5d7683[_0x3f8cd8(0x62d)](0x0,0x0,0x60,0x60),_0x5d7683[_0x3f8cd8(0x7c5)](_0x400685,_0x400685),_0x5d7683['scale']['x']=_0x5bbeb3/0x60,_0x5d7683['scale']['y']=_0x45ae80/0x60,_0x29d15e['bitmap']=this[_0x3f8cd8(0x68f)],_0x29d15e[_0x3f8cd8(0x62d)](0x0,0x60,0x60,0x60),_0x29d15e[_0x3f8cd8(0x7c5)](0x0,0x0,_0x5bbeb3,_0x45ae80),_0x29d15e['scale']['x']=0x1/_0x5d7683[_0x3f8cd8(0x701)]['x'],_0x29d15e['scale']['y']=0x1/_0x5d7683[_0x3f8cd8(0x701)]['y'],_0x5d7683[_0x3f8cd8(0x56a)](this['_colorTone']);}}}}return _0x3f1f75;},VisuMZ['CoreEngine'][_0x163f4f(0x329)]=SceneManager[_0x163f4f(0x1ab)],SceneManager['exit']=function(){const _0x22171b=_0x163f4f;VisuMZ[_0x22171b(0x28e)][_0x22171b(0x329)][_0x22171b(0x17d)](this);if(Utils[_0x22171b(0x3b4)]>=_0x22171b(0x175)){if(typeof nw===_0x22171b(0x1ba))nw['App'][_0x22171b(0x3d5)]();}},(_0x54b7c6=>{const _0x4b60b3=_0x163f4f,_0x1275de=_0x54b7c6[_0x4b60b3(0x4d6)];for(const _0x5ac20c of dependencies){if(!Imported[_0x5ac20c]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x4b60b3(0x889)](_0x1275de,_0x5ac20c)),SceneManager['exit']();break;}}const _0x4452d9=_0x54b7c6['description'];if(_0x4452d9[_0x4b60b3(0x4be)](/\[Version[ ](.*?)\]/i)){if('udgYh'===_0x4b60b3(0x8cc))this[_0x4b60b3(0x5e6)]=new _0x481ad1(),this['_dimmerSprite'][_0x4b60b3(0x2dc)]=new _0x2e3985(0x0,0x0),this['_dimmerSprite']['x']=0x0,this[_0x4b60b3(0x84f)](this['_dimmerSprite']);else{const _0x3545e6=Number(RegExp['$1']);_0x3545e6!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x1275de,_0x3545e6)),SceneManager[_0x4b60b3(0x1ab)]());}}if(_0x4452d9['match'](/\[Tier[ ](\d+)\]/i)){const _0x10174b=Number(RegExp['$1']);if(_0x10174b<tier){if(_0x4b60b3(0x5e1)!==_0x4b60b3(0x5e1))return _0x17d543[_0x4b60b3(0x720)]['NumberRect'][_0x4b60b3(0x17d)](this);else alert(_0x4b60b3(0x6d7)[_0x4b60b3(0x889)](_0x1275de,_0x10174b,tier)),SceneManager[_0x4b60b3(0x1ab)]();}else'irzpi'==='aBqCG'?this[_0x4b60b3(0x43e)]=(_0x8d5507(_0x5df9b3['$1'])||0x1)[_0x4b60b3(0x933)](0x1,0xa):tier=Math[_0x4b60b3(0x69d)](_0x10174b,tier);}VisuMZ[_0x4b60b3(0x2d3)](VisuMZ[label]['Settings'],_0x54b7c6[_0x4b60b3(0x346)]);})(pluginData),((()=>{const _0x283817=_0x163f4f;if(VisuMZ['CoreEngine'][_0x283817(0x403)][_0x283817(0x7f7)][_0x283817(0x174)]??!![]){if(_0x283817(0x2fb)===_0x283817(0x2fb))for(const _0x542a06 in $plugins){if(_0x283817(0x40a)==='Cnntq')this[_0x283817(0x146)]();else{const _0x504f9a=$plugins[_0x542a06];_0x504f9a[_0x283817(0x4d6)][_0x283817(0x4be)](/(.*)\/(.*)/i)&&(_0x504f9a[_0x283817(0x4d6)]=String(RegExp['$2']['trim']()));}}else this[_0x283817(0x8c4)]['setBackgroundType'](_0x41e1e9['layoutSettings']['ListBgType']);}})()),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x2f6),_0x3ba3ff=>{const _0x3cf499=_0x163f4f;if(!SceneManager[_0x3cf499(0x60e)])return;if(!SceneManager[_0x3cf499(0x60e)]['_spriteset'])return;VisuMZ[_0x3cf499(0x2d3)](_0x3ba3ff,_0x3ba3ff);const _0x82c9b=Math[_0x3cf499(0x7f1)](_0x3ba3ff[_0x3cf499(0x495)]),_0x44a938=Math[_0x3cf499(0x7f1)](_0x3ba3ff['pointY']);$gameTemp['requestPointAnimation'](_0x82c9b,_0x44a938,_0x3ba3ff[_0x3cf499(0x1a5)],_0x3ba3ff['Mirror'],_0x3ba3ff['Mute']);}),PluginManager[_0x163f4f(0x941)](pluginData['name'],'AudioChangeBgmVolume',_0x1c850f=>{const _0x4a057a=_0x163f4f;VisuMZ[_0x4a057a(0x2d3)](_0x1c850f,_0x1c850f);const _0x2942c8=Math['round'](_0x1c850f[_0x4a057a(0x56c)])[_0x4a057a(0x933)](0x0,0x64),_0x2f94d3=AudioManager[_0x4a057a(0x1cd)];if(_0x2f94d3){if('sJWwP'!==_0x4a057a(0x719))_0x2f94d3[_0x4a057a(0x56c)]=_0x2942c8,_0x2f94d3[_0x4a057a(0x9e0)]=AudioManager['_bgmBuffer'][_0x4a057a(0x6e4)](),AudioManager[_0x4a057a(0x791)](_0x2f94d3),AudioManager[_0x4a057a(0x907)](_0x2f94d3,_0x2f94d3['pos']),AudioManager[_0x4a057a(0x8bd)][_0x4a057a(0x25f)](_0x2f94d3[_0x4a057a(0x9e0)]);else{if(this[_0x4a057a(0x6b8)]===_0x4a057a(0x995)&&!_0x482b84['isArrowPressed']())return;if(_0x32a16a[_0x4a057a(0xa0d)]())return;_0x15b307[_0x4a057a(0x28e)][_0x4a057a(0x487)][_0x4a057a(0x17d)](this,_0x391e3a),this[_0x4a057a(0x382)](_0x4a057a(0x1fe));}}}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x4f3),_0x121bdf=>{const _0x36f9c9=_0x163f4f;VisuMZ[_0x36f9c9(0x2d3)](_0x121bdf,_0x121bdf);const _0xbb149a=Math[_0x36f9c9(0x7f1)](_0x121bdf[_0x36f9c9(0x26a)])['clamp'](0x32,0x96),_0x378e09=AudioManager[_0x36f9c9(0x1cd)];_0x378e09&&(_0x378e09[_0x36f9c9(0x26a)]=_0xbb149a,_0x378e09['pos']=AudioManager[_0x36f9c9(0x8bd)]['seek'](),AudioManager[_0x36f9c9(0x791)](_0x378e09),AudioManager[_0x36f9c9(0x907)](_0x378e09,_0x378e09[_0x36f9c9(0x9e0)]),AudioManager[_0x36f9c9(0x8bd)][_0x36f9c9(0x25f)](_0x378e09[_0x36f9c9(0x9e0)]));}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x910),_0x5782ca=>{const _0x108c1e=_0x163f4f;VisuMZ[_0x108c1e(0x2d3)](_0x5782ca,_0x5782ca);const _0x49cc62=Math[_0x108c1e(0x7f1)](_0x5782ca[_0x108c1e(0x516)])[_0x108c1e(0x933)](-0x64,0x64),_0x19660b=AudioManager[_0x108c1e(0x1cd)];if(_0x19660b){if(_0x108c1e(0x1d9)===_0x108c1e(0x1d9))_0x19660b[_0x108c1e(0x516)]=_0x49cc62,_0x19660b[_0x108c1e(0x9e0)]=AudioManager[_0x108c1e(0x8bd)][_0x108c1e(0x6e4)](),AudioManager['updateBgmParameters'](_0x19660b),AudioManager[_0x108c1e(0x907)](_0x19660b,_0x19660b[_0x108c1e(0x9e0)]),AudioManager[_0x108c1e(0x8bd)][_0x108c1e(0x25f)](_0x19660b[_0x108c1e(0x9e0)]);else for(const _0x4335a9 of _0x1ce506[_0x108c1e(0x5c4)]){if(_0x4335a9[_0x108c1e(0x946)]['call'](this)){const _0x1d6314=_0x4335a9[_0x108c1e(0x655)];let _0x3559e3=_0x4335a9['TextStr'];if(['',_0x108c1e(0x22c)]['includes'](_0x3559e3))_0x3559e3=_0x4335a9[_0x108c1e(0x7fe)][_0x108c1e(0x17d)](this);const _0x206e43=_0x4335a9[_0x108c1e(0x7fb)][_0x108c1e(0x17d)](this),_0x37ca9c=_0x4335a9[_0x108c1e(0x105)][_0x108c1e(0x17d)](this);this['addCommand'](_0x3559e3,_0x1d6314,_0x206e43,_0x37ca9c),this[_0x108c1e(0x82d)](_0x1d6314,_0x4335a9[_0x108c1e(0x584)][_0x108c1e(0x295)](this,_0x37ca9c));}}}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x8c2),_0x36aac4=>{const _0x4323e3=_0x163f4f;VisuMZ[_0x4323e3(0x2d3)](_0x36aac4,_0x36aac4);const _0x338f95=Math[_0x4323e3(0x7f1)](_0x36aac4[_0x4323e3(0x56c)])[_0x4323e3(0x933)](0x0,0x64),_0x5028a3=AudioManager[_0x4323e3(0x6d9)];_0x5028a3&&(_0x5028a3[_0x4323e3(0x56c)]=_0x338f95,_0x5028a3[_0x4323e3(0x9e0)]=AudioManager[_0x4323e3(0x6fb)][_0x4323e3(0x6e4)](),AudioManager[_0x4323e3(0x970)](_0x5028a3),AudioManager[_0x4323e3(0x5a5)](_0x5028a3,_0x5028a3[_0x4323e3(0x9e0)]),AudioManager[_0x4323e3(0x6fb)][_0x4323e3(0x25f)](_0x5028a3['pos']));}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x844),_0x1390ec=>{const _0x4daf0f=_0x163f4f;VisuMZ[_0x4daf0f(0x2d3)](_0x1390ec,_0x1390ec);const _0x3eed01=Math[_0x4daf0f(0x7f1)](_0x1390ec[_0x4daf0f(0x26a)])[_0x4daf0f(0x933)](0x32,0x96),_0x4dc121=AudioManager['_currentBgs'];_0x4dc121&&(_0x4dc121[_0x4daf0f(0x26a)]=_0x3eed01,_0x4dc121[_0x4daf0f(0x9e0)]=AudioManager[_0x4daf0f(0x6fb)][_0x4daf0f(0x6e4)](),AudioManager['updateBgsParameters'](_0x4dc121),AudioManager['playBgs'](_0x4dc121,_0x4dc121[_0x4daf0f(0x9e0)]),AudioManager['_bgsBuffer'][_0x4daf0f(0x25f)](_0x4dc121[_0x4daf0f(0x9e0)]));}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x71a),_0xd58454=>{const _0x16e0a4=_0x163f4f;VisuMZ[_0x16e0a4(0x2d3)](_0xd58454,_0xd58454);const _0x2ce3a7=Math[_0x16e0a4(0x7f1)](_0xd58454[_0x16e0a4(0x516)])[_0x16e0a4(0x933)](-0x64,0x64),_0xd41584=AudioManager['_currentBgs'];_0xd41584&&('BbCTm'==='BbCTm'?(_0xd41584[_0x16e0a4(0x516)]=_0x2ce3a7,_0xd41584[_0x16e0a4(0x9e0)]=AudioManager[_0x16e0a4(0x6fb)]['seek'](),AudioManager[_0x16e0a4(0x970)](_0xd41584),AudioManager['playBgs'](_0xd41584,_0xd41584[_0x16e0a4(0x9e0)]),AudioManager['_bgsBuffer']['_startPlaying'](_0xd41584[_0x16e0a4(0x9e0)])):(_0x3738de[_0x16e0a4(0x28e)][_0x16e0a4(0x6c3)][_0x16e0a4(0x17d)](this),this[_0x16e0a4(0x14f)]()));}),PluginManager[_0x163f4f(0x941)](pluginData['name'],'DebugConsoleLastControllerID',_0x335e3c=>{const _0x3b66d9=_0x163f4f;if(!$gameTemp[_0x3b66d9(0x92a)]())return;const _0x32a2e2=Input['getLastUsedGamepadType']();navigator[_0x3b66d9(0x9d6)]&&navigator[_0x3b66d9(0x9d6)][_0x3b66d9(0x2d7)](_0x32a2e2);}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x18a),_0x48e6bb=>{const _0x24ffa6=_0x163f4f;if(!$gameTemp[_0x24ffa6(0x92a)]())return;if(!Utils['isNwjs']())return;SceneManager[_0x24ffa6(0x60e)][_0x24ffa6(0x113)]=![],VisuMZ[_0x24ffa6(0x28e)][_0x24ffa6(0x347)]();}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x932),_0x385a9d=>{const _0x31f34c=_0x163f4f;if(!$gameTemp['isPlaytest']())return;if(!Utils['isNwjs']())return;SceneManager['_scene'][_0x31f34c(0x113)]=![],VisuMZ['CoreEngine'][_0x31f34c(0x4b5)]();}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],'ExportCurMapText',_0x5d6783=>{const _0x19f4fc=_0x163f4f;if(!$gameTemp[_0x19f4fc(0x92a)]())return;if(!Utils[_0x19f4fc(0x7b4)]())return;if(!$gameMap)return;if($gameMap[_0x19f4fc(0x305)]()<=0x0)return;VisuMZ[_0x19f4fc(0x2d3)](_0x5d6783,_0x5d6783);const _0x1ce325=_0x19f4fc(0x1a3)[_0x19f4fc(0x889)]($gameMap[_0x19f4fc(0x305)]()[_0x19f4fc(0x5bb)](0x3)),_0x461a1a=VisuMZ['CoreEngine'][_0x19f4fc(0x389)]($gameMap[_0x19f4fc(0x305)]());VisuMZ[_0x19f4fc(0x28e)][_0x19f4fc(0x8bb)](_0x461a1a,_0x1ce325,!![]);}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x1e4),_0x350d7e=>{const _0xb5632e=_0x163f4f;if(!$gameTemp[_0xb5632e(0x92a)]())return;if(!Utils[_0xb5632e(0x7b4)]())return;if(!$gameParty[_0xb5632e(0x7d6)]())return;VisuMZ[_0xb5632e(0x2d3)](_0x350d7e,_0x350d7e);const _0x4cdb1f=_0xb5632e(0x266)[_0xb5632e(0x889)]($gameTroop[_0xb5632e(0x7bf)][_0xb5632e(0x5bb)](0x4)),_0x5f01e3=VisuMZ[_0xb5632e(0x28e)]['ExtractStrFromTroop']($gameTroop[_0xb5632e(0x7bf)]);VisuMZ[_0xb5632e(0x28e)]['ExportString'](_0x5f01e3,_0x4cdb1f,!![]);}),VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8bb)]=function(_0x9ef29b,_0x1f82ca,_0x5e9bd1){const _0x3e2602=_0x163f4f,_0x57e29f=require('fs');let _0x554a72=_0x3e2602(0x230)[_0x3e2602(0x889)](_0x1f82ca||'0');_0x57e29f[_0x3e2602(0x919)](_0x554a72,_0x9ef29b,_0xe6015d=>{const _0x2d8000=_0x3e2602;if(_0xe6015d)throw err;else{if(_0x5e9bd1){if(_0x2d8000(0x3bd)==='rjBPP'){if(_0x3d5273[_0x2d8000(0x92a)]())_0x23dc7d[_0x2d8000(0x5b5)](_0x2d8000(0x35e)[_0x2d8000(0x889)](_0x5eb7eb));}else alert(_0x2d8000(0x254)[_0x2d8000(0x889)](_0x554a72));}}});},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x347)]=function(){const _0x5b580a=_0x163f4f,_0x214b26=[];for(const _0x298051 of $dataMapInfos){if(_0x5b580a(0x820)!=='JPBsg'){const _0x42fce6=_0x5b580a(0x106);this[_0x5b580a(0x221)]=this[_0x5b580a(0x221)]||{};if(this[_0x5b580a(0x221)][_0x42fce6])return this[_0x5b580a(0x221)][_0x42fce6];const _0x2dbcce=_0x5ac420[_0x5b580a(0x28e)][_0x5b580a(0x403)]['Color'][_0x5b580a(0x2ed)];return this[_0x5b580a(0x1ea)](_0x42fce6,_0x2dbcce);}else{if(!_0x298051)continue;_0x214b26[_0x5b580a(0x9ca)](_0x298051['id']);}}const _0x409de0=_0x214b26[_0x5b580a(0xf7)]*0x64+Math[_0x5b580a(0x9a0)](0x64);alert(_0x5b580a(0x2e3)[_0x5b580a(0x889)](_0x409de0)),this[_0x5b580a(0x982)]=[],this[_0x5b580a(0x429)]=$dataMap;for(const _0x33cc77 of _0x214b26){VisuMZ[_0x5b580a(0x28e)][_0x5b580a(0x1bc)](_0x33cc77);}setTimeout(VisuMZ[_0x5b580a(0x28e)][_0x5b580a(0x42a)][_0x5b580a(0x295)](this),_0x409de0);},VisuMZ[_0x163f4f(0x28e)]['loadMapData']=function(_0xdf4cfe){const _0x51f5a9=_0x163f4f,_0x45e260=_0x51f5a9(0x9a4)[_0x51f5a9(0x889)](_0xdf4cfe[_0x51f5a9(0x5bb)](0x3)),_0x55b0e1=new XMLHttpRequest(),_0x3d2714=_0x51f5a9(0x6bc)+_0x45e260;_0x55b0e1[_0x51f5a9(0x724)](_0x51f5a9(0x5d3),_0x3d2714),_0x55b0e1[_0x51f5a9(0x6dd)](_0x51f5a9(0x3a8)),_0x55b0e1[_0x51f5a9(0x878)]=()=>this[_0x51f5a9(0x6f4)](_0x55b0e1,_0xdf4cfe,_0x45e260,_0x3d2714),_0x55b0e1['onerror']=()=>DataManager[_0x51f5a9(0x838)](_0x51f5a9(0x6ea),_0x45e260,_0x3d2714),_0x55b0e1['send']();},VisuMZ[_0x163f4f(0x28e)]['storeMapData']=function(_0x399b32,_0x8d388c,_0x23b4b4,_0xac4994){const _0x3de7cb=_0x163f4f;$dataMap=JSON[_0x3de7cb(0x7f9)](_0x399b32[_0x3de7cb(0x8ba)]),DataManager[_0x3de7cb(0x483)]($dataMap),this['_storedMapText'][_0x8d388c]=VisuMZ[_0x3de7cb(0x28e)]['ExtractStrFromMap'](_0x8d388c),$dataMap=this[_0x3de7cb(0x429)];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x42a)]=function(){const _0x74ac0b=_0x163f4f,_0x3ec8a1=_0x74ac0b(0xea);this[_0x74ac0b(0x982)][_0x74ac0b(0x816)](undefined)[_0x74ac0b(0x816)]('')[_0x74ac0b(0x816)](null);const _0x12cd59=this[_0x74ac0b(0x982)]['join']('\x0a\x0a\x0a\x0a\x0a')['trim']();VisuMZ[_0x74ac0b(0x28e)][_0x74ac0b(0x8bb)](_0x12cd59,_0x3ec8a1,!![]),SceneManager[_0x74ac0b(0x60e)][_0x74ac0b(0x113)]=!![];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x389)]=function(_0x3ac5c8){const _0x5a2ec0=_0x163f4f;if(!$dataMap)return'';let _0x5f08f5='█'[_0x5a2ec0(0x378)](0x46)+'\x0a\x0a',_0x29c5d1='═'[_0x5a2ec0(0x378)](0x46)+'\x0a\x0a',_0x39e0c6='';this['_commonEventLayers']=0x0;for(const _0x5f502a of $dataMap[_0x5a2ec0(0x8f7)]){if(!_0x5f502a)continue;let _0x128ea7=_0x5f502a['id'],_0x30e4e1=_0x5f502a[_0x5a2ec0(0x4d6)],_0x525781=_0x5f502a[_0x5a2ec0(0x85d)];for(const _0x20da79 of _0x525781){if(_0x5a2ec0(0x1db)===_0x5a2ec0(0x1db)){const _0x153bb1=_0x525781['indexOf'](_0x20da79)+0x1;let _0x347fbb=_0x29c5d1+_0x5a2ec0(0x368),_0x487a84=VisuMZ[_0x5a2ec0(0x28e)][_0x5a2ec0(0x685)](_0x20da79[_0x5a2ec0(0x41e)]);if(_0x487a84['length']>0x0){if(_0x39e0c6[_0x5a2ec0(0xf7)]>0x0)_0x39e0c6+=_0x29c5d1+_0x5a2ec0(0x924);else{if(_0x5a2ec0(0x9ae)!=='Vnrfu'){var _0x269260=_0x2bff85(_0x17b1c8['$1'])/0x64;_0x45a452+=_0x269260;}else{const _0x5da2d8=$dataMapInfos[_0x3ac5c8]['name'];_0x39e0c6+=_0x5f08f5+'〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x5a2ec0(0x889)](_0x3ac5c8,_0x5da2d8||_0x5a2ec0(0x424))+_0x5f08f5;}}_0x39e0c6+=_0x347fbb['format'](_0x128ea7,_0x30e4e1,_0x153bb1,_0x487a84);}}else{let _0x278d92=_0x3ad295;if(_0x278d92[0x0]==='0')return _0x278d92;if(_0x278d92[_0x278d92[_0x5a2ec0(0xf7)]-0x1]==='.')return _0x5b94e8(_0x278d92)[_0x5a2ec0(0xef)](_0x248390,_0x384ef2)+'.';else return _0x278d92[_0x278d92[_0x5a2ec0(0xf7)]-0x1]===','?_0x1e9988(_0x278d92)['toLocaleString'](_0x5dfeac,_0x2de7de)+',':_0x4bda3b(_0x278d92)[_0x5a2ec0(0xef)](_0x3369ea,_0x54ffae);}}}return _0x39e0c6[_0x5a2ec0(0xf7)]>0x0&&(_0x39e0c6+=_0x29c5d1),_0x39e0c6;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x4b5)]=function(){const _0x144020=_0x163f4f,_0x171b54=$dataTroops['length']*0xa+Math[_0x144020(0x9a0)](0xa);alert(_0x144020(0x5fb)[_0x144020(0x889)](_0x171b54));const _0x132f3e=[];for(const _0x2d0d54 of $dataTroops){if(!_0x2d0d54)continue;const _0x3c08b6=_0x2d0d54['id'];_0x132f3e[_0x3c08b6]=VisuMZ[_0x144020(0x28e)]['ExtractStrFromTroop'](_0x3c08b6);}setTimeout(VisuMZ[_0x144020(0x28e)][_0x144020(0x9f3)][_0x144020(0x295)](this,_0x132f3e),_0x171b54);},VisuMZ['CoreEngine'][_0x163f4f(0x9b1)]=function(_0x20e0dc){const _0x3564db=_0x163f4f;if(!$dataTroops[_0x20e0dc])return'';let _0x507358='█'[_0x3564db(0x378)](0x46)+'\x0a\x0a',_0x1fc581='═'['repeat'](0x46)+'\x0a\x0a',_0x4ed476='';this[_0x3564db(0x69f)]=0x0;const _0x301659=$dataTroops[_0x20e0dc];let _0x2092c6=_0x301659['pages'];for(const _0xaa68be of _0x2092c6){const _0x3fc8de=_0x2092c6['indexOf'](_0xaa68be)+0x1;let _0x194994=_0x1fc581+_0x3564db(0xa0a),_0x4a894e=VisuMZ[_0x3564db(0x28e)][_0x3564db(0x685)](_0xaa68be[_0x3564db(0x41e)]);if(_0x4a894e['length']>0x0){if(_0x4ed476[_0x3564db(0xf7)]>0x0)_0x4ed476+=_0x1fc581+_0x3564db(0x924);else{if(_0x3564db(0x356)!==_0x3564db(0x356))return _0x58cf11&&_0x21e308[_0x3564db(0x312)]&&_0x5538ce[_0x3564db(0x312)]['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?_0x2cb69c(_0x631908['$1']):_0xc051c1[_0x3564db(0x28e)][_0x3564db(0x403)][_0x3564db(0x7f7)]['EncounterRateMinimum'];else _0x4ed476+=_0x507358+'〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x3564db(0x889)](_0x20e0dc,_0x301659[_0x3564db(0x4d6)]||_0x3564db(0x424))+_0x507358;}_0x4ed476+=_0x194994[_0x3564db(0x889)](_0x3fc8de,_0x4a894e);}}return _0x4ed476[_0x3564db(0xf7)]>0x0&&('vtbbs'==='SXcpc'?this[_0x3564db(0x9a5)]():_0x4ed476+=_0x1fc581),_0x4ed476;},VisuMZ[_0x163f4f(0x28e)]['exportAllTroopStrings']=function(_0x4fae87){const _0xb68cf1=_0x163f4f,_0x5c303a=_0xb68cf1(0x264);_0x4fae87[_0xb68cf1(0x816)](undefined)[_0xb68cf1(0x816)]('')['remove'](null);const _0x2aab51=_0x4fae87[_0xb68cf1(0x307)](_0xb68cf1(0x924))['trim']();VisuMZ['CoreEngine'][_0xb68cf1(0x8bb)](_0x2aab51,_0x5c303a,!![]),SceneManager[_0xb68cf1(0x60e)][_0xb68cf1(0x113)]=!![];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x685)]=function(_0x35ee0e){const _0x443ab6=_0x163f4f;let _0xec350='\x0a'+'─'[_0x443ab6(0x378)](0x46)+'\x0a',_0x5dddd5='\x0a'+'┄'[_0x443ab6(0x378)](0x46)+'\x0a',_0x2aef5c='';for(const _0x474374 of _0x35ee0e){if('EtNby'===_0x443ab6(0x4cf)){if(_0x179ac7===_0x443ab6(0x684))_0x2c8dcd=_0x443ab6(0x8a4);if(_0x1c05cb==='menu')_0x6c8a2a=_0x443ab6(0x8a4);}else{if(!_0x474374)continue;if(_0x474374[_0x443ab6(0x255)]===0x65){if(_0x443ab6(0x8e7)==='WwnET')_0x2aef5c+=_0xec350+'\x0a',_0x2aef5c+=_0x443ab6(0x3e9),_0x474374['parameters'][0x4]!==''&&_0x474374[_0x443ab6(0x346)][0x4]!==undefined&&(_0x2aef5c+=_0x443ab6(0x30b)[_0x443ab6(0x889)](_0x474374[_0x443ab6(0x346)][0x4]));else return _0x30b2f5[_0x443ab6(0x28e)][_0x443ab6(0x403)][_0x443ab6(0x7f7)][_0x443ab6(0x96c)]?0x0:_0x56a80e[_0x443ab6(0x28e)][_0x443ab6(0x11b)][_0x443ab6(0x17d)](this,_0x18bbc0);}else{if(_0x474374[_0x443ab6(0x255)]===0x191){if(_0x443ab6(0x224)==='VIDTc'){_0x2fda2b['ConvertParams'](_0x4393e3,_0x458b41);const _0x102691=_0x28d935['round'](_0x59bd81[_0x443ab6(0x516)])[_0x443ab6(0x933)](-0x64,0x64),_0x2fecb0=_0x3a5913[_0x443ab6(0x6d9)];_0x2fecb0&&(_0x2fecb0[_0x443ab6(0x516)]=_0x102691,_0x2fecb0['pos']=_0x1d1b75['_bgsBuffer'][_0x443ab6(0x6e4)](),_0x33abaf[_0x443ab6(0x970)](_0x2fecb0),_0x34eab8[_0x443ab6(0x5a5)](_0x2fecb0,_0x2fecb0[_0x443ab6(0x9e0)]),_0x43cff6[_0x443ab6(0x6fb)][_0x443ab6(0x25f)](_0x2fecb0[_0x443ab6(0x9e0)]));}else _0x2aef5c+=_0x443ab6(0x6b0)[_0x443ab6(0x889)](_0x474374['parameters'][0x0]);}else{if(_0x474374[_0x443ab6(0x255)]===0x192)_0x2aef5c+=_0xec350,_0x2aef5c+=_0x443ab6(0x609)[_0x443ab6(0x889)](_0x5dddd5,_0x474374[_0x443ab6(0x346)][0x0]+0x1,_0x474374[_0x443ab6(0x346)][0x1]);else{if(_0x474374[_0x443ab6(0x255)]===0x193){if(_0x443ab6(0x55b)===_0x443ab6(0x55b))_0x2aef5c+=_0xec350,_0x2aef5c+=_0x443ab6(0x186)[_0x443ab6(0x889)](_0x5dddd5);else{const _0x38671c=[this[_0x443ab6(0xfc)],this[_0x443ab6(0x934)]];for(const _0x62c480 of _0x38671c){_0x62c480&&(_0x62c480['visible']=this['isScrollBarVisible']()&&this[_0x443ab6(0x20a)]());}}}else{if(_0x474374[_0x443ab6(0x255)]===0x194)_0x2aef5c+=_0xec350,_0x2aef5c+=_0x443ab6(0x20c)['format'](_0x5dddd5);else{if(_0x474374[_0x443ab6(0x255)]===0x69)_0x2aef5c+=_0xec350+'\x0a',_0x2aef5c+=_0x443ab6(0x4d5);else{if(_0x474374[_0x443ab6(0x255)]===0x6c){if('GlIcQ'!==_0x443ab6(0x74e)){var _0x20e248=_0x5c22cc(_0x485c99['$1']);_0x3bec61*=_0x20e248;}else _0x2aef5c+=_0xec350+'\x0a',_0x2aef5c+='》Comment《\x0a%1\x0a'[_0x443ab6(0x889)](_0x474374[_0x443ab6(0x346)][0x0]);}else{if(_0x474374[_0x443ab6(0x255)]===0x198)_0x443ab6(0x64b)===_0x443ab6(0x1c7)?this['processKeyboardDigitChange']():_0x2aef5c+=_0x443ab6(0x6b0)[_0x443ab6(0x889)](_0x474374['parameters'][0x0]);else{if(_0x474374['code']===0x75){if(_0x443ab6(0x681)===_0x443ab6(0x1b0)){if(this[_0x443ab6(0x15a)]>0x63)return this[_0x443ab6(0x7a8)](_0x305b1f);return _0x437af4[_0x443ab6(0x28e)][_0x443ab6(0x99a)][_0x443ab6(0x17d)](this,_0x20591c);}else{const _0x606b1c=$dataCommonEvents[_0x474374[_0x443ab6(0x346)][0x0]];if(_0x606b1c&&this[_0x443ab6(0x69f)]<=0xa){this[_0x443ab6(0x69f)]++;let _0x21f098=VisuMZ[_0x443ab6(0x28e)][_0x443ab6(0x685)](_0x606b1c[_0x443ab6(0x41e)]);_0x21f098['length']>0x0&&(_0x2aef5c+=_0xec350,_0x2aef5c+=_0x5dddd5,_0x2aef5c+='〘Common\x20Event\x20%1:\x20%2〙\x20Start'[_0x443ab6(0x889)](_0x606b1c['id'],_0x606b1c['name']),_0x2aef5c+=_0x5dddd5,_0x2aef5c+=_0x21f098,_0x2aef5c+=_0x5dddd5,_0x2aef5c+='〘Common\x20Event\x20%1:\x20%2〙\x20End'[_0x443ab6(0x889)](_0x606b1c['id'],_0x606b1c[_0x443ab6(0x4d6)]),_0x2aef5c+=_0x5dddd5),this[_0x443ab6(0x69f)]--;}}}}}}}}}}}}}if(_0x2aef5c[_0x443ab6(0xf7)]>0x0){if(_0x443ab6(0xa06)!==_0x443ab6(0xa06)){if(_0x1dcdc8[_0x443ab6(0xf7)]>0x0)_0xc0bbfc+=_0x1928d6+_0x443ab6(0x924);else{const _0x30f883=_0x3f87bf[_0x42c498][_0x443ab6(0x4d6)];_0x1a3357+=_0x1a43b2+'〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x443ab6(0x889)](_0x2f467d,_0x30f883||_0x443ab6(0x424))+_0x284f2e;}_0x23abe3+=_0x16c540[_0x443ab6(0x889)](_0x215eed,_0xd2b25a,_0x391ab7,_0x4353f2);}else _0x2aef5c+=_0xec350;}return _0x2aef5c;},PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x14a),_0x47a34d=>{const _0x2d2eba=_0x163f4f;VisuMZ[_0x2d2eba(0x2d3)](_0x47a34d,_0x47a34d);const _0x508995=_0x47a34d['URL'];VisuMZ[_0x2d2eba(0x85f)](_0x508995);}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x9d3),_0x37d259=>{const _0x20a828=_0x163f4f;VisuMZ[_0x20a828(0x2d3)](_0x37d259,_0x37d259);const _0x2b5ed0=_0x37d259['value']||0x0;$gameParty['gainGold'](_0x2b5ed0);}),PluginManager['registerCommand'](pluginData['name'],_0x163f4f(0x4df),_0x5c6447=>{const _0x142a31=_0x163f4f;if(!SceneManager[_0x142a31(0x2f5)]())return;VisuMZ[_0x142a31(0x2d3)](_0x5c6447,_0x5c6447);const _0x2b88d4=_0x5c6447[_0x142a31(0x951)];SceneManager['_scene'][_0x142a31(0x5c2)](_0x2b88d4);}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],'PictureCoordinatesMode',_0x4cac95=>{const _0x58db9a=_0x163f4f;if(!$gameTemp[_0x58db9a(0x92a)]())return;if(!Utils[_0x58db9a(0x7b4)]())return;VisuMZ[_0x58db9a(0x2d3)](_0x4cac95,_0x4cac95);const _0x293af0=_0x4cac95['PictureID']||0x1;$gameTemp[_0x58db9a(0x26e)]=_0x293af0;}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x9c9),_0x43a59b=>{const _0x1ee237=_0x163f4f;VisuMZ['ConvertParams'](_0x43a59b,_0x43a59b);const _0x6189bd=_0x43a59b['pictureId']||0x1,_0x49b930=_0x43a59b['easingType']||_0x1ee237(0x972),_0x36562d=$gameScreen[_0x1ee237(0x404)](_0x6189bd);_0x36562d&&(_0x1ee237(0x3cf)!==_0x1ee237(0x571)?_0x36562d[_0x1ee237(0x278)](_0x49b930):_0x135afe['isOptionValid'](_0x1ee237(0x760))&&_0x40c008[_0x1ee237(0x28e)]['Settings'][_0x1ee237(0x7f7)][_0x1ee237(0x6c2)]?this[_0x1ee237(0x8a0)]():_0x110492[_0x1ee237(0x28e)][_0x1ee237(0x3a6)][_0x1ee237(0x17d)](this));}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x20b),_0x14afdb=>{const _0x3f74e6=_0x163f4f;for(let _0xbab3be=0x1;_0xbab3be<=0x64;_0xbab3be++){if(_0x3f74e6(0x6cd)===_0x3f74e6(0x646)){if(this[_0x3f74e6(0x723)]()||this[_0x3f74e6(0x413)]())return;if(this[_0x3f74e6(0x49f)]<=0x0)return;this[_0x3f74e6(0x49f)]--,this[_0x3f74e6(0x49f)]<=0x0&&(this[_0x3f74e6(0x90c)](),this['_text']='');}else $gameScreen['erasePicture'](_0xbab3be);}}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x9bb),_0x3a089c=>{const _0x306b5d=_0x163f4f;VisuMZ['ConvertParams'](_0x3a089c,_0x3a089c);const _0x20c4aa=Math[_0x306b5d(0x112)](_0x3a089c[_0x306b5d(0x507)],_0x3a089c[_0x306b5d(0x38e)]),_0x350f3d=Math['max'](_0x3a089c[_0x306b5d(0x507)],_0x3a089c[_0x306b5d(0x38e)]);for(let _0x206521=_0x20c4aa;_0x206521<=_0x350f3d;_0x206521++){if('vzZEM'!==_0x306b5d(0x66a)){if(this[_0x306b5d(0x859)]()[_0x306b5d(0x8f3)]&&_0x517bcd[_0x306b5d(0x99f)]()===0x1){this[_0x306b5d(0x87e)]=this[_0x306b5d(0x859)]()['displayY'];return;}_0x25e3e0['CoreEngine'][_0x306b5d(0x755)]['call'](this,_0x40561a);}else $gameScreen[_0x306b5d(0x3eb)](_0x206521);}}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],'PictureRotateBy',_0x1f03f8=>{const _0x40b13c=_0x163f4f;VisuMZ[_0x40b13c(0x2d3)](_0x1f03f8,_0x1f03f8);const _0x363c1c=Math[_0x40b13c(0x7f1)](_0x1f03f8[_0x40b13c(0x558)])[_0x40b13c(0x933)](0x1,0x64),_0x1b9654=-Number(_0x1f03f8[_0x40b13c(0x42c)]||0x0),_0x5512a5=Math[_0x40b13c(0x69d)](_0x1f03f8[_0x40b13c(0x757)]||0x0,0x0),_0x4bee4c=_0x1f03f8[_0x40b13c(0x2a8)]||_0x40b13c(0x972),_0x5804b4=_0x1f03f8['Wait'],_0x23af9c=$gameScreen[_0x40b13c(0x404)](_0x363c1c);if(!_0x23af9c)return;_0x23af9c['changeAnglePlusData'](_0x1b9654,_0x5512a5,_0x4bee4c);if(_0x5804b4){const _0x30164b=$gameTemp[_0x40b13c(0x19d)]();if(_0x30164b)_0x30164b[_0x40b13c(0x626)](_0x5512a5);}}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],'PictureRotate',_0x959415=>{const _0xc80383=_0x163f4f;VisuMZ[_0xc80383(0x2d3)](_0x959415,_0x959415);const _0x3b0a54=Math[_0xc80383(0x7f1)](_0x959415[_0xc80383(0x558)])[_0xc80383(0x933)](0x1,0x64),_0x4210db=-Number(_0x959415['TargetAngle']||0x0),_0x3fc043=Math[_0xc80383(0x69d)](_0x959415[_0xc80383(0x757)]||0x0,0x0),_0x28d7e6=_0x959415['easingType']||_0xc80383(0x972),_0x5b0ebd=_0x959415['Wait'],_0x2ef50f=$gameScreen[_0xc80383(0x404)](_0x3b0a54);if(!_0x2ef50f)return;_0x2ef50f['setAnglePlusData'](_0x4210db,_0x3fc043,_0x28d7e6);if(_0x5b0ebd){if(_0xc80383(0x5ab)===_0xc80383(0x5ab)){const _0x37664a=$gameTemp[_0xc80383(0x19d)]();if(_0x37664a)_0x37664a[_0xc80383(0x626)](_0x3fc043);}else this[_0xc80383(0x9b5)]((_0x47e5ee+_0x97149)%_0x21b2b9);}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x1d5),_0x17ece4=>{const _0x3feaf9=_0x163f4f;VisuMZ['ConvertParams'](_0x17ece4,_0x17ece4);const _0x1424c7=Math[_0x3feaf9(0x7f1)](_0x17ece4['PictureID'])['clamp'](0x1,0x64),_0x358c36=_0x17ece4[_0x3feaf9(0x403)],_0x55768d=_0x358c36[_0x3feaf9(0x43c)][_0x3feaf9(0x933)](0x0,0x1),_0x509cb2=Math['round'](_0x358c36[_0x3feaf9(0x95a)]||0x0),_0x5e5949=Math[_0x3feaf9(0x7f1)](_0x358c36['PositionY']||0x0),_0x1a48c1=Math[_0x3feaf9(0x7f1)](_0x358c36[_0x3feaf9(0x31e)]||0x0),_0x15ba3c=Math[_0x3feaf9(0x7f1)](_0x358c36['ScaleY']||0x0),_0x325317=Math[_0x3feaf9(0x7f1)](_0x358c36[_0x3feaf9(0x5f5)])[_0x3feaf9(0x933)](0x0,0xff),_0x28c3df=_0x358c36['BlendMode'],_0x261265='VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2',_0x57f4ae=_0x17ece4['Smooth']?_0x3feaf9(0x151):_0x3feaf9(0x93d),_0x1034b6=_0x261265[_0x3feaf9(0x889)](_0x17ece4[_0x3feaf9(0x77c)],_0x57f4ae);$gameScreen[_0x3feaf9(0x448)](_0x1424c7,_0x1034b6,_0x55768d,_0x509cb2,_0x5e5949,_0x1a48c1,_0x15ba3c,_0x325317,_0x28c3df);}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],'ScreenShake',_0x4d0031=>{const _0x3250eb=_0x163f4f;VisuMZ[_0x3250eb(0x2d3)](_0x4d0031,_0x4d0031);const _0x504bd9=_0x4d0031['Type']||_0x3250eb(0x214),_0x4e0076=_0x4d0031['Power'][_0x3250eb(0x933)](0x1,0x9),_0x19a1a9=_0x4d0031[_0x3250eb(0x62c)][_0x3250eb(0x933)](0x1,0x9),_0x4d0f77=_0x4d0031[_0x3250eb(0x757)]||0x1,_0x1471e2=_0x4d0031[_0x3250eb(0x69a)];$gameScreen[_0x3250eb(0x703)](_0x504bd9),$gameScreen['startShake'](_0x4e0076,_0x19a1a9,_0x4d0f77);if(_0x1471e2){if(_0x3250eb(0x28a)===_0x3250eb(0x28a)){const _0x296e3f=$gameTemp[_0x3250eb(0x19d)]();if(_0x296e3f)_0x296e3f[_0x3250eb(0x626)](_0x4d0f77);}else{const _0x298cbc=_0x174e4b[_0x3250eb(0x26e)]||0x0;(_0x298cbc<0x0||_0x298cbc>0x64||_0x58a825[_0x3250eb(0x1d8)]()||_0x4a1ffc[_0x3250eb(0x31c)]('cancel'))&&(_0xdfb18a['_pictureCoordinatesMode']=_0x38acf6,_0x2c8c3b[_0x3250eb(0x3c1)](),_0x2bfc7f['clear']());const _0x22cd62=_0xf3561d['picture'](_0x298cbc);return _0x22cd62&&(_0x22cd62['_x']=_0xeed136['_x'],_0x22cd62['_y']=_0x1e9813['_y']),_0x4d7b02[_0x3250eb(0x28e)][_0x3250eb(0x645)](),_0x423104[_0x3250eb(0x26e)]!==_0x1305d4;}}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x3aa),_0x1e700e=>{const _0x1192d6=_0x163f4f;if($gameParty['inBattle']())return;VisuMZ[_0x1192d6(0x2d3)](_0x1e700e,_0x1e700e);const _0x38cc04=_0x1e700e[_0x1192d6(0x497)],_0x5e5900=(_0x1e700e[_0x1192d6(0x290)]||0x0)/0x64;for(const _0x547177 of _0x38cc04){const _0x58fa1b=Math[_0x1192d6(0x214)]()<=_0x5e5900;$gameSwitches['setValue'](_0x547177,_0x58fa1b);}}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x996),_0x5c473a=>{const _0x5964d1=_0x163f4f;if($gameParty[_0x5964d1(0x7d6)]())return;VisuMZ['ConvertParams'](_0x5c473a,_0x5c473a);const _0xb5a357=Math[_0x5964d1(0x112)](_0x5c473a['StartID'],_0x5c473a[_0x5964d1(0x38e)]),_0x10a31e=Math['max'](_0x5c473a[_0x5964d1(0x507)],_0x5c473a[_0x5964d1(0x38e)]),_0x11d6b7=(_0x5c473a['Chance']||0x0)/0x64;for(let _0x133c03=_0xb5a357;_0x133c03<=_0x10a31e;_0x133c03++){if(_0x5964d1(0x79f)!==_0x5964d1(0x6f9)){const _0x3036e9=Math[_0x5964d1(0x214)]()<=_0x11d6b7;$gameSwitches['setValue'](_0x133c03,_0x3036e9);}else this[_0x5964d1(0x3f0)]+=_0x53ee2b['round']((_0x53149c[_0x5964d1(0x107)]-0x270)/0x2),this['_screenY']-=_0x1f1738[_0x5964d1(0x966)]((_0x1032f8[_0x5964d1(0x107)]-_0x1683fd[_0x5964d1(0x37c)])/0x2),_0x19c22b[_0x5964d1(0x784)]()?this['_screenX']-=_0x31d17c['floor']((_0x18cc5a[_0x5964d1(0x60a)]-_0x5bfef7[_0x5964d1(0x2a2)])/0x2):this[_0x5964d1(0x8ec)]+=_0xd65c90[_0x5964d1(0x7f1)]((_0x1baa7b[_0x5964d1(0x2a2)]-0x330)/0x2);}}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x1e3),_0x49f762=>{const _0x55c2ea=_0x163f4f;if($gameParty[_0x55c2ea(0x7d6)]())return;VisuMZ[_0x55c2ea(0x2d3)](_0x49f762,_0x49f762);const _0x2d83a4=_0x49f762[_0x55c2ea(0x497)];for(const _0x4c12c9 of _0x2d83a4){const _0x517c89=$gameSwitches[_0x55c2ea(0x30d)](_0x4c12c9);$gameSwitches[_0x55c2ea(0x5a7)](_0x4c12c9,!_0x517c89);}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x9dc),_0xad5a5=>{const _0x486953=_0x163f4f;if($gameParty['inBattle']())return;VisuMZ[_0x486953(0x2d3)](_0xad5a5,_0xad5a5);const _0x15cdeb=Math[_0x486953(0x112)](_0xad5a5[_0x486953(0x507)],_0xad5a5[_0x486953(0x38e)]),_0x56ed5f=Math[_0x486953(0x69d)](_0xad5a5[_0x486953(0x507)],_0xad5a5[_0x486953(0x38e)]);for(let _0x510f7c=_0x15cdeb;_0x510f7c<=_0x56ed5f;_0x510f7c++){if(_0x486953(0x43d)!==_0x486953(0x43d)){const _0x234ef5=_0x3a9246[_0x486953(0x28e)][_0x486953(0x403)]['ControllerButtons'];for(const _0x4c4e0c of _0x234ef5){const _0x5a70af=(_0x4c4e0c[_0x486953(0x3a1)]||'')['toLowerCase']()[_0x486953(0x376)](),_0x40f956=(_0x4c4e0c[_0x486953(0x9ad)]||'')[_0x486953(0x787)]()[_0x486953(0x376)]();_0x2bc28a[_0x486953(0x28e)][_0x486953(0x93e)][_0x5a70af]=_0x4c4e0c,_0x5e5622[_0x486953(0x28e)]['ControllerMatches'][_0x40f956]=_0x5a70af;}}else{const _0x5d16b6=$gameSwitches[_0x486953(0x30d)](_0x510f7c);$gameSwitches['setValue'](_0x510f7c,!_0x5d16b6);}}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x59b),_0x33e00a=>{const _0x13d333=_0x163f4f;VisuMZ['ConvertParams'](_0x33e00a,_0x33e00a);const _0x491ced=_0x33e00a[_0x13d333(0x10c)]||0x1;$gameSystem[_0x13d333(0x19b)](_0x491ced);}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x6e9),_0x124c55=>{const _0x4ec3e6=_0x163f4f;if($gameParty[_0x4ec3e6(0x7d6)]())return;VisuMZ[_0x4ec3e6(0x2d3)](_0x124c55,_0x124c55);const _0x1224e7=_0x124c55[_0x4ec3e6(0x10c)];if(_0x1224e7[_0x4ec3e6(0x4be)](/Front/i)){if(_0x4ec3e6(0xfe)===_0x4ec3e6(0x33f))return _0x421b43[_0x4ec3e6(0x8f4)]([_0x4ec3e6(0x985)]);else $gameSystem['setSideView'](![]);}else{if(_0x1224e7[_0x4ec3e6(0x4be)](/Side/i)){if('PoLyY'!==_0x4ec3e6(0x109)){_0x538d9b-=_0x4563ef;if(_0x55f9bf<=0x0)_0x896641=0x0;this[_0x4ec3e6(0x9b5)](_0x51ac51);}else $gameSystem['setSideView'](!![]);}else{if(_0x4ec3e6(0x7ab)===_0x4ec3e6(0x7ab))$gameSystem[_0x4ec3e6(0x73d)](!$gameSystem[_0x4ec3e6(0x784)]());else{for(const _0x308f33 of this[_0x4ec3e6(0x4ad)]){!_0x308f33[_0x4ec3e6(0x872)]()&&this[_0x4ec3e6(0x471)](_0x308f33);}this['processFauxAnimationRequests']();}}}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x6fd),_0x2ed921=>{const _0x16e906=_0x163f4f;if($gameParty[_0x16e906(0x7d6)]())return;VisuMZ[_0x16e906(0x2d3)](_0x2ed921,_0x2ed921);const _0x5ce917=[_0x16e906(0x905),'bgs','me','se'];for(const _0x131760 of _0x5ce917){if(_0x16e906(0x3cb)===_0x16e906(0x9f1)){var _0x4bab06=_0x154e37(_0x72e2a1['$1'])/0x64;_0x547b10+=_0x4bab06;}else{const _0xde3d50=_0x2ed921[_0x131760],_0x164f11='%1/'['format'](_0x131760);for(const _0xa659b6 of _0xde3d50){if(_0x16e906(0x65b)===_0x16e906(0x3b8))return _0x252fa8[_0x16e906(0x720)][_0x16e906(0x1bf)][_0x16e906(0x17d)](this);else AudioManager[_0x16e906(0x117)](_0x164f11,_0xa659b6);}}}}),PluginManager['registerCommand'](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x74a),_0x163238=>{const _0x114aa1=_0x163f4f;if($gameParty[_0x114aa1(0x7d6)]())return;VisuMZ[_0x114aa1(0x2d3)](_0x163238,_0x163238);const _0x18aaf0=[_0x114aa1(0x6b7),_0x114aa1(0x499),_0x114aa1(0x7b6),_0x114aa1(0x819),_0x114aa1(0x172),_0x114aa1(0x2d0),_0x114aa1(0x741),_0x114aa1(0x54f),_0x114aa1(0x669),_0x114aa1(0x1fa),_0x114aa1(0x7ec),_0x114aa1(0x204),_0x114aa1(0x18c),'titles2'];for(const _0x42d3be of _0x18aaf0){if(_0x114aa1(0x715)===_0x114aa1(0x715)){const _0x2d53aa=_0x163238[_0x42d3be],_0xb4080=_0x114aa1(0x694)[_0x114aa1(0x889)](_0x42d3be);for(const _0x12121e of _0x2d53aa){_0x114aa1(0x3dd)!==_0x114aa1(0x3dd)?this[_0x114aa1(0x67a)]['setBackgroundType'](_0x32fc69['layoutSettings'][_0x114aa1(0x3b9)]):ImageManager[_0x114aa1(0x23e)](_0xb4080,_0x12121e);}}else _0x50b60f[_0x114aa1(0x28e)][_0x114aa1(0x619)]['call'](this),this[_0x114aa1(0x9fc)]();}}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x500),_0x5c1d85=>{const _0x2118cb=_0x163f4f;if($gameParty[_0x2118cb(0x7d6)]())return;VisuMZ['ConvertParams'](_0x5c1d85,_0x5c1d85);const _0x5777a1=_0x5c1d85[_0x2118cb(0x10c)][_0x2118cb(0x5ca)]()[_0x2118cb(0x376)](),_0x24f0bf=VisuMZ[_0x2118cb(0x28e)]['CreateBattleSystemID'](_0x5777a1);$gameSystem[_0x2118cb(0x647)](_0x24f0bf);}),VisuMZ['CoreEngine']['CreateBattleSystemID']=function(_0x20ccc0){const _0x405f72=_0x163f4f;_0x20ccc0=_0x20ccc0||_0x405f72(0x6c1),_0x20ccc0=String(_0x20ccc0)[_0x405f72(0x5ca)]()[_0x405f72(0x376)]();switch(_0x20ccc0){case _0x405f72(0x8bc):return 0x0;case _0x405f72(0x9f0):Imported[_0x405f72(0x521)]&&(_0x405f72(0x370)!==_0x405f72(0x370)?(_0x3ca692[_0x405f72(0x28e)][_0x405f72(0x1b8)]['call'](this),this['updateAnglePlus']()):ConfigManager[_0x405f72(0x610)]=!![]);return 0x1;case _0x405f72(0x550):Imported[_0x405f72(0x521)]&&(ConfigManager['atbActive']=![]);return 0x2;case'CTB':if(Imported[_0x405f72(0x118)]){if(_0x405f72(0x6a9)!==_0x405f72(0x6a9))_0xc74fdc[_0x405f72(0x28e)][_0x405f72(0x71f)][_0x405f72(0x17d)](this),this['_colorCache']=this['_colorCache']||{};else return _0x405f72(0x25c);}break;case _0x405f72(0x41c):if(Imported[_0x405f72(0x4ff)])return _0x405f72(0x978)===_0x405f72(0x1f8)?_0x4ca617['CoreEngine'][_0x405f72(0x883)][_0x405f72(0x17d)](this,_0x3a0f04):_0x405f72(0x41c);break;case _0x405f72(0x954):if(Imported[_0x405f72(0x9df)])return _0x405f72(0x863)===_0x405f72(0x863)?_0x405f72(0x954):!![];break;case'FTB':if(Imported['VisuMZ_2_BattleSystemFTB']){if('ZMHDm'===_0x405f72(0x298))this[_0x405f72(0x9c4)][_0x405f72(0x6cf)]=this[_0x405f72(0x9c4)]['target'];else return'FTB';}break;case _0x405f72(0x5c0):if(Imported[_0x405f72(0x59a)])return'OTB';break;case _0x405f72(0x74c):if(Imported['VisuMZ_2_BattleSystemETB'])return'ETB';break;case _0x405f72(0x9a2):if(Imported[_0x405f72(0x761)])return'PTB';break;}return $dataSystem[_0x405f72(0x49e)];},PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x98b),_0x5bb641=>{const _0x52b5ad=_0x163f4f;VisuMZ[_0x52b5ad(0x2d3)](_0x5bb641,_0x5bb641);const _0x4f33a4=_0x5bb641[_0x52b5ad(0x10c)]||0x1;$gameSystem['setWindowPadding'](_0x4f33a4);}),PluginManager[_0x163f4f(0x941)](pluginData[_0x163f4f(0x4d6)],_0x163f4f(0x38a),_0x321db6=>{VisuMZ['ConvertParams'](_0x321db6,_0x321db6);const _0x551a77=_0x321db6['text']||'';$textPopup(_0x551a77);}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x8be),_0x429931=>{const _0x11d290=_0x163f4f;VisuMZ[_0x11d290(0x2d3)](_0x429931,_0x429931);const _0xa8011c=_0x429931['id']||0x1,_0x405b74=_0x429931[_0x11d290(0x5e0)],_0x484cbe=_0x429931[_0x11d290(0x987)]||0x0;let _0x54f2f3=$gameVariables[_0x11d290(0x30d)](_0xa8011c)||0x0;switch(_0x405b74){case'=':_0x54f2f3=_0x484cbe;break;case'+':_0x54f2f3+=_0x484cbe;break;case'-':_0x54f2f3-=_0x484cbe;break;case'*':_0x54f2f3*=_0x484cbe;break;case'/':_0x54f2f3/=_0x484cbe;break;case'%':_0x54f2f3%=_0x484cbe;break;}_0x54f2f3=_0x54f2f3||0x0,$gameVariables['setValue'](_0xa8011c,_0x54f2f3);}),PluginManager[_0x163f4f(0x941)](pluginData['name'],_0x163f4f(0x4c6),_0x2de5c0=>{const _0x1ea890=_0x163f4f;VisuMZ[_0x1ea890(0x2d3)](_0x2de5c0,_0x2de5c0);const _0xcafcba=_0x2de5c0['id']()||0x1,_0xde2ff6=_0x2de5c0[_0x1ea890(0x5e0)],_0x3e1305=_0x2de5c0['operand']()||0x0;let _0x30fab8=$gameVariables[_0x1ea890(0x30d)](_0xcafcba)||0x0;switch(_0xde2ff6){case'=':_0x30fab8=_0x3e1305;break;case'+':_0x30fab8+=_0x3e1305;break;case'-':_0x30fab8-=_0x3e1305;break;case'*':_0x30fab8*=_0x3e1305;break;case'/':_0x30fab8/=_0x3e1305;break;case'%':_0x30fab8%=_0x3e1305;break;}_0x30fab8=_0x30fab8||0x0,$gameVariables['setValue'](_0xcafcba,_0x30fab8);}),VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x751)]=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x8ee)]=function(){const _0x30410f=_0x163f4f;VisuMZ['CoreEngine'][_0x30410f(0x751)][_0x30410f(0x17d)](this),this['process_VisuMZ_CoreEngine_RegExp'](),this['process_VisuMZ_CoreEngine_Notetags'](),this['process_VisuMZ_CoreEngine_Settings'](),this[_0x30410f(0x961)](),this[_0x30410f(0x7a1)](),this[_0x30410f(0x314)](),VisuMZ[_0x30410f(0x2be)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x895)]={},Scene_Boot['prototype'][_0x163f4f(0x926)]=function(){const _0x5c0fe9=_0x163f4f,_0x2e1ef0=['MAXHP',_0x5c0fe9(0x408),'ATK',_0x5c0fe9(0x3c2),_0x5c0fe9(0x92c),_0x5c0fe9(0x88a),'AGI',_0x5c0fe9(0x18d)],_0x47614c=[_0x5c0fe9(0x1a0),_0x5c0fe9(0x7f6),_0x5c0fe9(0x213),_0x5c0fe9(0x80a),_0x5c0fe9(0x66f),_0x5c0fe9(0x52f),_0x5c0fe9(0x61e),_0x5c0fe9(0x98f),_0x5c0fe9(0x58e),'TRG'],_0x4dea20=[_0x5c0fe9(0x2ff),_0x5c0fe9(0x28f),'REC','PHA','MCR','TCR',_0x5c0fe9(0x232),_0x5c0fe9(0x80e),_0x5c0fe9(0x3a4),'EXR'],_0x35645b=[_0x2e1ef0,_0x47614c,_0x4dea20],_0x327a41=[_0x5c0fe9(0x7e3),_0x5c0fe9(0x735),'Plus2',_0x5c0fe9(0x9ef),_0x5c0fe9(0x477),_0x5c0fe9(0x4a5),_0x5c0fe9(0x1d0),_0x5c0fe9(0x176),_0x5c0fe9(0x194),'Flat2'];for(const _0x125946 of _0x35645b){let _0x5bab73='';if(_0x125946===_0x2e1ef0)_0x5bab73='param';if(_0x125946===_0x47614c)_0x5bab73=_0x5c0fe9(0x603);if(_0x125946===_0x4dea20)_0x5bab73=_0x5c0fe9(0x165);for(const _0x4676a2 of _0x327a41){let _0xa0dc88=_0x5c0fe9(0x159)[_0x5c0fe9(0x889)](_0x5bab73,_0x4676a2);VisuMZ['CoreEngine'][_0x5c0fe9(0x895)][_0xa0dc88]=[],VisuMZ[_0x5c0fe9(0x28e)]['RegExp'][_0xa0dc88+'JS']=[];let _0xdeaee9=_0x5c0fe9(0x3c4);if([_0x5c0fe9(0x7e3),_0x5c0fe9(0x176)][_0x5c0fe9(0x2b2)](_0x4676a2)){if('wixxw'===_0x5c0fe9(0x1ec))_0xdeaee9+=_0x5c0fe9(0x921);else return this[_0x5c0fe9(0x1cc)]()['hit']+0.05;}else{if([_0x5c0fe9(0x735),_0x5c0fe9(0x194)]['includes'](_0x4676a2))_0xdeaee9+='([\x5c+\x5c-]\x5cd+)([%％])>';else{if(['Plus2','Flat2']['includes'](_0x4676a2))_0xdeaee9+=_0x5c0fe9(0x35a);else{if(_0x4676a2===_0x5c0fe9(0x9ef)){if(_0x5c0fe9(0x953)===_0x5c0fe9(0x953))_0xdeaee9+=_0x5c0fe9(0x80d);else{if(_0x154215[_0x5c0fe9(0x92a)]())_0x50a60c[_0x5c0fe9(0x5b5)](_0x5784c1);}}else{if(_0x4676a2===_0x5c0fe9(0x4a5))_0xdeaee9+=_0x5c0fe9(0x71e);else _0x4676a2===_0x5c0fe9(0x1d0)&&(_0xdeaee9+=_0x5c0fe9(0x892));}}}}for(const _0x3d3f68 of _0x125946){let _0x422ed6=_0x4676a2[_0x5c0fe9(0x865)](/[\d+]/g,'')['toUpperCase']();const _0x301a34=_0xdeaee9[_0x5c0fe9(0x889)](_0x3d3f68,_0x422ed6);VisuMZ[_0x5c0fe9(0x28e)][_0x5c0fe9(0x895)][_0xa0dc88]['push'](new RegExp(_0x301a34,'i'));const _0xe91fc9=_0x5c0fe9(0x274)[_0x5c0fe9(0x889)](_0x3d3f68,_0x422ed6);VisuMZ[_0x5c0fe9(0x28e)][_0x5c0fe9(0x895)][_0xa0dc88+'JS'][_0x5c0fe9(0x9ca)](new RegExp(_0xe91fc9,'i'));}}}},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x9d5)]=function(){const _0x23d01e=_0x163f4f;if(VisuMZ[_0x23d01e(0x2be)])return;},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x1b1)]=function(){const _0x1831e6=_0x163f4f,_0x452981=VisuMZ[_0x1831e6(0x28e)]['Settings'];_0x452981['QoL']['OpenConsole']&&VisuMZ[_0x1831e6(0x8cb)](!![]);_0x452981['QoL'][_0x1831e6(0x39f)]&&(Input[_0x1831e6(0x157)][0x23]=_0x1831e6(0x364),Input['keyMapper'][0x24]='home');if(_0x452981[_0x1831e6(0x490)]){const _0x25739e=_0x452981[_0x1831e6(0x490)];_0x25739e[_0x1831e6(0x8c0)]=_0x25739e[_0x1831e6(0x8c0)]||'\x5c}❪SHIFT❫\x5c{',_0x25739e['KeyTAB']=_0x25739e[_0x1831e6(0x27f)]||'\x5c}❪TAB❫\x5c{';}_0x452981['KeyboardInput'][_0x1831e6(0x615)]&&(Input[_0x1831e6(0x157)][0x57]='up',Input['keyMapper'][0x41]=_0x1831e6(0xa04),Input[_0x1831e6(0x157)][0x53]=_0x1831e6(0x70f),Input[_0x1831e6(0x157)][0x44]='right',Input[_0x1831e6(0x157)][0x45]='pagedown'),_0x452981['KeyboardInput'][_0x1831e6(0x63f)]&&(Input['keyMapper'][0x52]=_0x1831e6(0x91c)),_0x452981[_0x1831e6(0x67d)][_0x1831e6(0x60f)]=_0x452981['Param'][_0x1831e6(0x60f)][_0x1831e6(0x8cf)](_0x2ef60b=>_0x2ef60b['toUpperCase']()['trim']()),_0x452981[_0x1831e6(0x67d)][_0x1831e6(0x3bf)]=_0x452981[_0x1831e6(0x67d)][_0x1831e6(0x3bf)][_0x1831e6(0x8cf)](_0x3068c1=>_0x3068c1[_0x1831e6(0x5ca)]()['trim']()),_0x452981[_0x1831e6(0x7f7)][_0x1831e6(0x7fa)]=_0x452981['QoL'][_0x1831e6(0x7fa)]??!![],_0x452981[_0x1831e6(0x7f7)][_0x1831e6(0x33a)]=_0x452981[_0x1831e6(0x7f7)][_0x1831e6(0x33a)]??!![];},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x961)]=function(){const _0x9733fe=_0x163f4f;this[_0x9733fe(0x7a5)]();},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x7a5)]=function(){const _0x926686=_0x163f4f,_0x2094e0=VisuMZ[_0x926686(0x28e)]['Settings'][_0x926686(0x3b1)];for(const _0x30c468 of _0x2094e0){const _0x3691dd=_0x30c468[_0x926686(0x1ef)][_0x926686(0x865)](/[ ]/g,''),_0x3900d0=_0x30c468[_0x926686(0x783)];VisuMZ[_0x926686(0x28e)][_0x926686(0x8dc)](_0x3691dd,_0x3900d0);}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8dc)]=function(_0x5b8d64,_0x1f68da){const _0x2f12a6=_0x163f4f;if(!!window[_0x5b8d64]){if(_0x2f12a6(0x27d)!==_0x2f12a6(0x6ed)){if($gameTemp[_0x2f12a6(0x92a)]())console[_0x2f12a6(0x5b5)](_0x2f12a6(0x35e)[_0x2f12a6(0x889)](_0x5b8d64));}else return _0x26c110[_0x2f12a6(0x28e)][_0x2f12a6(0x403)]['Window'][_0x2f12a6(0x565)];}const _0xddec85=_0x2f12a6(0x44b)[_0x2f12a6(0x889)](_0x5b8d64,_0x1f68da);window[_0x5b8d64]=new Function(_0xddec85);},Scene_Boot[_0x163f4f(0x5b0)]['process_VisuMZ_CoreEngine_CustomParameters']=function(){const _0xe4a691=_0x163f4f,_0x12e38f=VisuMZ['CoreEngine'][_0xe4a691(0x403)][_0xe4a691(0x922)];if(!_0x12e38f)return;for(const _0x20d030 of _0x12e38f){if(!_0x20d030)continue;VisuMZ['CoreEngine'][_0xe4a691(0x89d)](_0x20d030);}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x56b)]={},VisuMZ[_0x163f4f(0x28e)]['CustomParamIcons']={},VisuMZ[_0x163f4f(0x28e)]['CustomParamType']={},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x85a)]={},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x89d)]=function(_0x401715){const _0x267811=_0x163f4f,_0xcf7d14=_0x401715[_0x267811(0x239)],_0x594233=_0x401715[_0x267811(0x822)],_0x23a0a2=_0x401715[_0x267811(0x673)],_0x3c209f=_0x401715['Type'],_0x3427d1=new Function(_0x401715['ValueJS']);VisuMZ['CoreEngine'][_0x267811(0x56b)][_0xcf7d14[_0x267811(0x5ca)]()[_0x267811(0x376)]()]=_0x594233,VisuMZ[_0x267811(0x28e)][_0x267811(0x27c)][_0xcf7d14[_0x267811(0x5ca)]()[_0x267811(0x376)]()]=_0x23a0a2,VisuMZ[_0x267811(0x28e)][_0x267811(0x6bb)][_0xcf7d14['toUpperCase']()['trim']()]=_0x3c209f,VisuMZ['CoreEngine'][_0x267811(0x85a)][_0xcf7d14[_0x267811(0x5ca)]()[_0x267811(0x376)]()]=_0xcf7d14,Object[_0x267811(0x9d2)](Game_BattlerBase[_0x267811(0x5b0)],_0xcf7d14,{'get'(){const _0x34b643=_0x267811,_0x98c9ea=_0x3427d1[_0x34b643(0x17d)](this);return _0x3c209f===_0x34b643(0x534)?Math[_0x34b643(0x7f1)](_0x98c9ea):_0x98c9ea;}});},VisuMZ[_0x163f4f(0x28e)]['ControllerButtons']={},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x183)]={},Scene_Boot[_0x163f4f(0x5b0)]['process_VisuMZ_CoreEngine_ControllerButtons']=function(){const _0x285c75=_0x163f4f,_0x2ae58c=VisuMZ[_0x285c75(0x28e)][_0x285c75(0x403)]['ControllerButtons'];for(const _0x401a23 of _0x2ae58c){if(_0x285c75(0x618)===_0x285c75(0x855))this['cursorUp'](_0x4f4a2f[_0x285c75(0x31c)]('up'));else{const _0x21f970=(_0x401a23[_0x285c75(0x3a1)]||'')[_0x285c75(0x787)]()[_0x285c75(0x376)](),_0x29501f=(_0x401a23[_0x285c75(0x9ad)]||'')['toLowerCase']()[_0x285c75(0x376)]();VisuMZ['CoreEngine'][_0x285c75(0x93e)][_0x21f970]=_0x401a23,VisuMZ[_0x285c75(0x28e)][_0x285c75(0x183)][_0x29501f]=_0x21f970;}}},VisuMZ['ParseAllNotetags']=function(){const _0x5aef99=_0x163f4f;for(const _0x45c455 of $dataActors){if(_0x5aef99(0x2a7)==='vqaoP')switch(_0x585244[_0x5aef99(0x28e)][_0x5aef99(0x403)][_0x5aef99(0x7f7)][_0x5aef99(0x4eb)]){case _0x5aef99(0x867):return!![];case'normal':return![];default:return _0x50c73e[_0x5aef99(0x28e)]['Graphics_defaultStretchMode'][_0x5aef99(0x17d)](this);}else{if(_0x45c455)VisuMZ[_0x5aef99(0x940)](_0x45c455);}}for(const _0x5087fc of $dataClasses){if(_0x5087fc)VisuMZ['ParseClassNotetags'](_0x5087fc);}for(const _0x3e098d of $dataSkills){if(_0x3e098d)VisuMZ['ParseSkillNotetags'](_0x3e098d);}for(const _0x135d81 of $dataItems){if(_0x5aef99(0x862)!==_0x5aef99(0x281)){if(_0x135d81)VisuMZ[_0x5aef99(0x405)](_0x135d81);}else{if(_0x5a9f81)_0x1c5eb6[_0x5aef99(0x9d7)](_0x2d4563);}}for(const _0xaf4cc2 of $dataWeapons){if(_0xaf4cc2)VisuMZ[_0x5aef99(0xf6)](_0xaf4cc2);}for(const _0x52db46 of $dataArmors){if(_0x52db46)VisuMZ[_0x5aef99(0x9d7)](_0x52db46);}for(const _0x3ac756 of $dataEnemies){if(_0x3ac756)VisuMZ['ParseEnemyNotetags'](_0x3ac756);}for(const _0x2659ee of $dataStates){if(_0x2659ee)VisuMZ[_0x5aef99(0x5ba)](_0x2659ee);}for(const _0x3fc9b5 of $dataTilesets){if(_0x3fc9b5)VisuMZ['ParseTilesetNotetags'](_0x3fc9b5);}},VisuMZ[_0x163f4f(0x940)]=function(_0xfe2ad3){},VisuMZ[_0x163f4f(0x1c8)]=function(_0x40a74a){},VisuMZ[_0x163f4f(0x247)]=function(_0x1b722a){},VisuMZ[_0x163f4f(0x405)]=function(_0x9dce82){},VisuMZ['ParseWeaponNotetags']=function(_0x3e2b48){},VisuMZ['ParseArmorNotetags']=function(_0x685b76){},VisuMZ['ParseEnemyNotetags']=function(_0x424c89){},VisuMZ[_0x163f4f(0x5ba)]=function(_0xe1f45f){},VisuMZ[_0x163f4f(0x528)]=function(_0x4a9b2d){},VisuMZ['CoreEngine']['ParseActorNotetags']=VisuMZ[_0x163f4f(0x940)],VisuMZ[_0x163f4f(0x940)]=function(_0x4b07dd){const _0x316fd2=_0x163f4f;VisuMZ['CoreEngine'][_0x316fd2(0x940)][_0x316fd2(0x17d)](this,_0x4b07dd);const _0xae7efd=_0x4b07dd['note'];if(_0xae7efd[_0x316fd2(0x4be)](/<MAX LEVEL:[ ](\d+)>/i)){_0x4b07dd[_0x316fd2(0x42d)]=Number(RegExp['$1']);if(_0x4b07dd['maxLevel']===0x0)_0x4b07dd['maxLevel']=Number[_0x316fd2(0x4e7)];}_0xae7efd[_0x316fd2(0x4be)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x4b07dd[_0x316fd2(0x523)]=Math[_0x316fd2(0x112)](Number(RegExp['$1']),_0x4b07dd[_0x316fd2(0x42d)]));},VisuMZ[_0x163f4f(0x28e)]['ParseClassNotetags']=VisuMZ[_0x163f4f(0x1c8)],VisuMZ[_0x163f4f(0x1c8)]=function(_0x38c83b){const _0x5ac396=_0x163f4f;VisuMZ[_0x5ac396(0x28e)][_0x5ac396(0x1c8)][_0x5ac396(0x17d)](this,_0x38c83b);if(_0x38c83b[_0x5ac396(0x6f8)])for(const _0x527978 of _0x38c83b[_0x5ac396(0x6f8)]){_0x527978[_0x5ac396(0x312)][_0x5ac396(0x4be)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x527978[_0x5ac396(0x15a)]=Math['max'](Number(RegExp['$1']),0x1));}},VisuMZ['CoreEngine'][_0x163f4f(0x510)]=VisuMZ[_0x163f4f(0x510)],VisuMZ[_0x163f4f(0x510)]=function(_0x588aa8){const _0x578411=_0x163f4f;VisuMZ[_0x578411(0x28e)]['ParseEnemyNotetags'][_0x578411(0x17d)](this,_0x588aa8),_0x588aa8[_0x578411(0x15a)]=0x1;const _0x3c3562=_0x588aa8[_0x578411(0x312)];if(_0x3c3562[_0x578411(0x4be)](/<LEVEL:[ ](\d+)>/i))_0x588aa8[_0x578411(0x15a)]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<MAXHP:[ ](\d+)>/i))_0x588aa8[_0x578411(0x937)][0x0]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<MAXMP:[ ](\d+)>/i))_0x588aa8[_0x578411(0x937)][0x1]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<ATK:[ ](\d+)>/i))_0x588aa8['params'][0x2]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<DEF:[ ](\d+)>/i))_0x588aa8[_0x578411(0x937)][0x3]=Number(RegExp['$1']);if(_0x3c3562['match'](/<MAT:[ ](\d+)>/i))_0x588aa8[_0x578411(0x937)][0x4]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<MDF:[ ](\d+)>/i))_0x588aa8[_0x578411(0x937)][0x5]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<AGI:[ ](\d+)>/i))_0x588aa8[_0x578411(0x937)][0x6]=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<LUK:[ ](\d+)>/i))_0x588aa8['params'][0x7]=Number(RegExp['$1']);if(_0x3c3562['match'](/<EXP:[ ](\d+)>/i))_0x588aa8['exp']=Number(RegExp['$1']);if(_0x3c3562[_0x578411(0x4be)](/<GOLD:[ ](\d+)>/i))_0x588aa8[_0x578411(0x5f2)]=Number(RegExp['$1']);},VisuMZ[_0x163f4f(0x28e)]['Graphics_defaultStretchMode']=Graphics[_0x163f4f(0xa0c)],Graphics[_0x163f4f(0xa0c)]=function(){const _0x10a622=_0x163f4f;switch(VisuMZ[_0x10a622(0x28e)][_0x10a622(0x403)][_0x10a622(0x7f7)][_0x10a622(0x4eb)]){case _0x10a622(0x867):return!![];case _0x10a622(0x9e6):return![];default:return VisuMZ[_0x10a622(0x28e)][_0x10a622(0x851)][_0x10a622(0x17d)](this);}},VisuMZ['CoreEngine']['Graphics_printError']=Graphics[_0x163f4f(0x7cc)],Graphics[_0x163f4f(0x7cc)]=function(_0x3e4d26,_0x277886,_0x24cb6e=null){const _0x416cfa=_0x163f4f;VisuMZ[_0x416cfa(0x28e)]['Graphics_printError'][_0x416cfa(0x17d)](this,_0x3e4d26,_0x277886,_0x24cb6e),VisuMZ['ShowDevTools'](![]);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1b5)]=Graphics[_0x163f4f(0x854)],Graphics['_centerElement']=function(_0x40894a){const _0x1f9849=_0x163f4f;VisuMZ[_0x1f9849(0x28e)]['Graphics_centerElement'][_0x1f9849(0x17d)](this,_0x40894a),this[_0x1f9849(0x7ae)](_0x40894a);},Graphics[_0x163f4f(0x7ae)]=function(_0x4d1500){const _0x5401e2=_0x163f4f;if(VisuMZ[_0x5401e2(0x28e)][_0x5401e2(0x403)][_0x5401e2(0x7f7)]['FontSmoothing']){if(_0x5401e2(0x2bb)!==_0x5401e2(0x4fb))_0x4d1500['style'][_0x5401e2(0x140)]='none';else return _0x4c88e3[_0x5401e2(0x720)]['ListRect'][_0x5401e2(0x17d)](this);}VisuMZ[_0x5401e2(0x28e)][_0x5401e2(0x403)][_0x5401e2(0x7f7)][_0x5401e2(0x434)]&&(_0x4d1500['style'][_0x5401e2(0x578)]=_0x5401e2(0x8a9));const _0x235545=Math[_0x5401e2(0x69d)](0x0,Math[_0x5401e2(0x966)](_0x4d1500[_0x5401e2(0x60a)]*this['_realScale'])),_0x994fcd=Math['max'](0x0,Math[_0x5401e2(0x966)](_0x4d1500['height']*this[_0x5401e2(0x3e7)]));_0x4d1500['style'][_0x5401e2(0x60a)]=_0x235545+'px',_0x4d1500[_0x5401e2(0x9bd)][_0x5401e2(0x107)]=_0x994fcd+'px';},VisuMZ[_0x163f4f(0x28e)]['Bitmap_initialize']=Bitmap[_0x163f4f(0x5b0)]['initialize'],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(_0x20e690,_0x363787){const _0x2f8434=_0x163f4f;VisuMZ[_0x2f8434(0x28e)][_0x2f8434(0xf0)][_0x2f8434(0x17d)](this,_0x20e690,_0x363787),this[_0x2f8434(0x411)]=!(VisuMZ[_0x2f8434(0x28e)][_0x2f8434(0x403)][_0x2f8434(0x7f7)]['PixelateImageRendering']??!![]);},Bitmap[_0x163f4f(0x5b0)]['markCoreEngineModified']=function(){const _0xc94339=_0x163f4f;this[_0xc94339(0x1c3)]=!![];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8d6)]=Sprite[_0x163f4f(0x5b0)][_0x163f4f(0x374)],Sprite[_0x163f4f(0x5b0)][_0x163f4f(0x374)]=function(){const _0x36bb2d=_0x163f4f;if(this['_texture'])VisuMZ['CoreEngine'][_0x36bb2d(0x8d6)]['call'](this);this[_0x36bb2d(0x335)]();},Sprite[_0x163f4f(0x5b0)]['destroyCoreEngineMarkedBitmaps']=function(){const _0x387c89=_0x163f4f;if(!this[_0x387c89(0x2dc)])return;if(!this[_0x387c89(0x2dc)][_0x387c89(0x1c3)])return;this[_0x387c89(0x2dc)][_0x387c89(0x821)]&&!this[_0x387c89(0x12f)][_0x387c89(0x821)][_0x387c89(0x6b9)]&&this[_0x387c89(0x2dc)]['destroy']();},VisuMZ[_0x163f4f(0x28e)]['Bitmap_resize']=Bitmap[_0x163f4f(0x5b0)]['resize'],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x440)]=function(_0x30057c,_0x44045b){const _0x390123=_0x163f4f;VisuMZ[_0x390123(0x28e)][_0x390123(0x4aa)]['call'](this,_0x30057c,_0x44045b),this[_0x390123(0x9db)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x997)]=Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x9e9)],Bitmap[_0x163f4f(0x5b0)]['blt']=function(_0x1c1ae4,_0x176955,_0x53ecac,_0x215a63,_0xf6085d,_0x25ad84,_0x53ff52,_0x566e73,_0x458330){const _0x3e4545=_0x163f4f;_0x176955=Math[_0x3e4545(0x7f1)](_0x176955),_0x53ecac=Math['round'](_0x53ecac),_0x215a63=Math[_0x3e4545(0x7f1)](_0x215a63),_0xf6085d=Math[_0x3e4545(0x7f1)](_0xf6085d),_0x25ad84=Math[_0x3e4545(0x7f1)](_0x25ad84),_0x53ff52=Math[_0x3e4545(0x7f1)](_0x53ff52),VisuMZ[_0x3e4545(0x28e)]['Bitmap_blt'][_0x3e4545(0x17d)](this,_0x1c1ae4,_0x176955,_0x53ecac,_0x215a63,_0xf6085d,_0x25ad84,_0x53ff52,_0x566e73,_0x458330),this[_0x3e4545(0x9db)]();},VisuMZ['CoreEngine'][_0x163f4f(0x48e)]=Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x519)],Bitmap[_0x163f4f(0x5b0)]['clearRect']=function(_0x2a7710,_0x4f7452,_0x3e7c36,_0x29eaba){const _0x3f025e=_0x163f4f;VisuMZ[_0x3f025e(0x28e)][_0x3f025e(0x48e)][_0x3f025e(0x17d)](this,_0x2a7710,_0x4f7452,_0x3e7c36,_0x29eaba),this['markCoreEngineModified']();},VisuMZ['CoreEngine'][_0x163f4f(0x485)]=Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x575)],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x575)]=function(_0x184b82,_0x374de2,_0x723f71,_0x341485,_0xa09a2){const _0x1de308=_0x163f4f;VisuMZ['CoreEngine'][_0x1de308(0x485)][_0x1de308(0x17d)](this,_0x184b82,_0x374de2,_0x723f71,_0x341485,_0xa09a2),this[_0x1de308(0x9db)]();},VisuMZ['CoreEngine'][_0x163f4f(0x68e)]=Bitmap[_0x163f4f(0x5b0)]['strokeRect'],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x37a)]=function(_0x3b6b43,_0x4d8277,_0x1d29c8,_0x1d96a3,_0x127a1b){const _0x5ff4c8=_0x163f4f;VisuMZ[_0x5ff4c8(0x28e)][_0x5ff4c8(0x68e)][_0x5ff4c8(0x17d)](this,_0x3b6b43,_0x4d8277,_0x1d29c8,_0x1d96a3,_0x127a1b),this[_0x5ff4c8(0x9db)]();},VisuMZ['CoreEngine']['Bitmap_gradientFillRect']=Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x8ce)],Bitmap['prototype']['gradientFillRect']=function(_0x5e8391,_0x192d5d,_0x31a435,_0x1293c0,_0x1fc0f8,_0x5f4058,_0x26e7bb){const _0x520295=_0x163f4f;VisuMZ[_0x520295(0x28e)][_0x520295(0x349)][_0x520295(0x17d)](this,_0x5e8391,_0x192d5d,_0x31a435,_0x1293c0,_0x1fc0f8,_0x5f4058,_0x26e7bb),this[_0x520295(0x9db)]();},VisuMZ['CoreEngine'][_0x163f4f(0x8d9)]=Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x4f9)],Bitmap['prototype'][_0x163f4f(0x4f9)]=function(_0x30ce38,_0x453c05,_0x4c5623,_0x52231c){const _0x1f160f=_0x163f4f;_0x30ce38=Math[_0x1f160f(0x7f1)](_0x30ce38),_0x453c05=Math[_0x1f160f(0x7f1)](_0x453c05),_0x4c5623=Math[_0x1f160f(0x7f1)](_0x4c5623),VisuMZ[_0x1f160f(0x28e)]['Bitmap_drawCircle'][_0x1f160f(0x17d)](this,_0x30ce38,_0x453c05,_0x4c5623,_0x52231c),this[_0x1f160f(0x9db)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x482)]=Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x327)],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x327)]=function(_0x29545b){const _0x3e5fd0=_0x163f4f;return Math[_0x3e5fd0(0x35f)](VisuMZ[_0x3e5fd0(0x28e)][_0x3e5fd0(0x482)]['call'](this,_0x29545b));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x566)]=Bitmap['prototype']['drawText'],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x887)]=function(_0x3c5250,_0x1d4f0d,_0x164e85,_0x490e50,_0x3b59da,_0x43deb9){const _0x4a9ad7=_0x163f4f;_0x1d4f0d=Math[_0x4a9ad7(0x7f1)](_0x1d4f0d),_0x164e85=Math[_0x4a9ad7(0x7f1)](_0x164e85),_0x490e50=Math[_0x4a9ad7(0x7f1)](_0x490e50),_0x3b59da=Math['round'](_0x3b59da),VisuMZ[_0x4a9ad7(0x28e)][_0x4a9ad7(0x566)][_0x4a9ad7(0x17d)](this,_0x3c5250,_0x1d4f0d,_0x164e85,_0x490e50,_0x3b59da,_0x43deb9),this[_0x4a9ad7(0x9db)]();},VisuMZ['CoreEngine'][_0x163f4f(0x3da)]=Bitmap[_0x163f4f(0x5b0)]['_drawTextOutline'],Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x1e8)]=function(_0x57b802,_0xab8bb2,_0x4f7638,_0x90b19e){const _0x19fe73=_0x163f4f;VisuMZ[_0x19fe73(0x28e)][_0x19fe73(0x403)]['QoL']['FontShadows']?this[_0x19fe73(0x8d2)](_0x57b802,_0xab8bb2,_0x4f7638,_0x90b19e):VisuMZ['CoreEngine']['Bitmap_drawTextOutline'][_0x19fe73(0x17d)](this,_0x57b802,_0xab8bb2,_0x4f7638,_0x90b19e);},Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x8d2)]=function(_0x19b8c6,_0x1347a5,_0x3a9d15,_0x181db9){const _0x15a5eb=_0x163f4f,_0x2d75d1=this['context'];_0x2d75d1[_0x15a5eb(0x58b)]=this[_0x15a5eb(0x628)],_0x2d75d1[_0x15a5eb(0x7dc)](_0x19b8c6,_0x1347a5+0x2,_0x3a9d15+0x2,_0x181db9);},VisuMZ['CoreEngine'][_0x163f4f(0x37b)]=Input[_0x163f4f(0x3c1)],Input[_0x163f4f(0x3c1)]=function(){const _0xa91dbd=_0x163f4f;VisuMZ['CoreEngine'][_0xa91dbd(0x37b)][_0xa91dbd(0x17d)](this),this[_0xa91dbd(0x2f9)]=undefined,this[_0xa91dbd(0x3e6)]=undefined,this[_0xa91dbd(0x14c)]=Input[_0xa91dbd(0x246)];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x3e1)]=Input['update'],Input['update']=function(){const _0x540e85=_0x163f4f;VisuMZ[_0x540e85(0x28e)]['Input_update'][_0x540e85(0x17d)](this);if(this[_0x540e85(0x14c)])this['_gamepadWait']--;},VisuMZ[_0x163f4f(0x28e)]['Input_pollGamepads']=Input['_pollGamepads'],Input[_0x163f4f(0x7de)]=function(){const _0x4a2e7f=_0x163f4f;if(this[_0x4a2e7f(0x14c)])return;VisuMZ['CoreEngine']['Input_pollGamepads'][_0x4a2e7f(0x17d)](this);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x340)]=Input['_setupEventHandlers'],Input['_setupEventHandlers']=function(){const _0x51514b=_0x163f4f;VisuMZ[_0x51514b(0x28e)]['Input_setupEventHandlers']['call'](this),document[_0x51514b(0x2ef)]('keypress',this[_0x51514b(0x32b)][_0x51514b(0x295)](this));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x509)]=Input[_0x163f4f(0x8bf)],Input[_0x163f4f(0x8bf)]=function(_0x30bfa7){const _0x4e98f2=_0x163f4f;this['_inputSpecialKeyCode']=_0x30bfa7['keyCode'],VisuMZ[_0x4e98f2(0x28e)]['Input_onKeyDown'][_0x4e98f2(0x17d)](this,_0x30bfa7),this[_0x4e98f2(0x762)](null);},Input['_onKeyPress']=function(_0x248c10){const _0x4235ae=_0x163f4f;this[_0x4235ae(0x299)](_0x248c10);},Input[_0x163f4f(0x299)]=function(_0x2e5195){const _0x537a27=_0x163f4f;this[_0x537a27(0x3e6)]=_0x2e5195[_0x537a27(0x388)];let _0x488001=String['fromCharCode'](_0x2e5195[_0x537a27(0x8a3)]);this[_0x537a27(0x2f9)]===undefined?_0x537a27(0x462)!==_0x537a27(0x484)?this[_0x537a27(0x2f9)]=_0x488001:this[_0x537a27(0x93a)]=this[_0x537a27(0x859)]()['displayX']:'Vgrwg'==='Vgrwg'?this['_inputString']+=_0x488001:_0x49658b['VisuMZ_2_BattleSystemBTB']&&(this[_0x537a27(0x2ec)]=_0x537a27(0x954));},VisuMZ['CoreEngine'][_0x163f4f(0x66e)]=Input['_shouldPreventDefault'],Input[_0x163f4f(0x6a4)]=function(_0x2ef89c){const _0x3f0671=_0x163f4f;if(_0x2ef89c===0x8)return![];return VisuMZ['CoreEngine'][_0x3f0671(0x66e)][_0x3f0671(0x17d)](this,_0x2ef89c);},Input[_0x163f4f(0x3b5)]=function(_0x1195a0){const _0x139d82=_0x163f4f;if(_0x1195a0[_0x139d82(0x4be)](/backspace/i))return this['_inputSpecialKeyCode']===0x8;if(_0x1195a0[_0x139d82(0x4be)](/enter/i))return this['_inputSpecialKeyCode']===0xd;if(_0x1195a0[_0x139d82(0x4be)](/escape/i))return this[_0x139d82(0x3e6)]===0x1b;},Input[_0x163f4f(0xa0d)]=function(){const _0x1d7fb2=_0x163f4f;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x1d7fb2(0x1b2)](this[_0x1d7fb2(0x3e6)]);},Input[_0x163f4f(0x4cd)]=function(){const _0x520a17=_0x163f4f;return[0x25,0x26,0x27,0x28][_0x520a17(0x1b2)](this[_0x520a17(0x3e6)]);},Input['isGamepadConnected']=function(){const _0x2440ee=_0x163f4f;if(navigator[_0x2440ee(0x21a)]){if('zdraV'!==_0x2440ee(0x710))return this[_0x2440ee(0x4ec)][_0x2440ee(0xf7)]>0x0;else{const _0x6771dc=navigator[_0x2440ee(0x21a)]();if(_0x6771dc)for(const _0x53551e of _0x6771dc){if(_0x2440ee(0x840)===_0x2440ee(0x840)){if(_0x53551e&&_0x53551e[_0x2440ee(0x893)]){if(_0x2440ee(0x6ec)!==_0x2440ee(0x241))return!![];else return;}}else{if(this[_0x2440ee(0x275)])_0x46ce31[_0x2440ee(0x28e)]['Sprite_destroy']['call'](this);this[_0x2440ee(0x335)]();}}}}return![];},Input['isGamepadTriggered']=function(){const _0x3ed140=_0x163f4f;if(navigator[_0x3ed140(0x21a)]){const _0x549961=navigator[_0x3ed140(0x21a)]();if(_0x549961){if(_0x3ed140(0x925)===_0x3ed140(0x925))for(const _0x2296fb of _0x549961){if(_0x3ed140(0x13c)===_0x3ed140(0x5c8)){if(_0x4a435f[_0x3ed140(0x7d6)]())return;_0x2404fe['ConvertParams'](_0x217b2f,_0x13f391);const _0x1b6fc7=_0x115d66[_0x3ed140(0x112)](_0x324474['StartID'],_0x4bc2e8['EndingID']),_0x263449=_0x43570c[_0x3ed140(0x69d)](_0x5f243d['StartID'],_0x217f10[_0x3ed140(0x38e)]),_0x484d85=(_0x331c78['Chance']||0x0)/0x64;for(let _0x4eebeb=_0x1b6fc7;_0x4eebeb<=_0x263449;_0x4eebeb++){const _0x40522e=_0x5380d3[_0x3ed140(0x214)]()<=_0x484d85;_0x11a871[_0x3ed140(0x5a7)](_0x4eebeb,_0x40522e);}}else{if(_0x2296fb&&_0x2296fb[_0x3ed140(0x893)]){if(this[_0x3ed140(0x657)](_0x2296fb))return!![];if(this[_0x3ed140(0x871)](_0x2296fb))return!![];}}}else{var _0x14d561=_0x559e23(_0x403f52['$1']);_0x401e1f+=_0x14d561;}}}return![];},Input[_0x163f4f(0x657)]=function(_0xb0cb40){const _0x2deb43=_0x163f4f,_0x4ffc7d=_0xb0cb40[_0x2deb43(0x5f3)];for(let _0x4bbe2b=0x0;_0x4bbe2b<_0x4ffc7d[_0x2deb43(0xf7)];_0x4bbe2b++){if(_0x4ffc7d[_0x4bbe2b][_0x2deb43(0x426)])return!![];}return![];},Input['isGamepadAxisMoved']=function(_0x2ae4c9){const _0x54a148=_0x2ae4c9['axes'],_0x1c6544=0.5;if(_0x54a148[0x0]<-_0x1c6544)return!![];if(_0x54a148[0x0]>_0x1c6544)return!![];if(_0x54a148[0x1]<-_0x1c6544)return!![];if(_0x54a148[0x1]>_0x1c6544)return!![];return![];},Input[_0x163f4f(0x226)]=function(){const _0x34fb22=_0x163f4f;return this[_0x34fb22(0x777)]||null;},Input[_0x163f4f(0x762)]=function(_0xefd63d){const _0x522e0c=_0x163f4f;this[_0x522e0c(0x777)]=_0xefd63d;},VisuMZ[_0x163f4f(0x28e)]['Input_updateGamepadState']=Input[_0x163f4f(0x149)],Input[_0x163f4f(0x149)]=function(_0x3e9010){const _0x3f4c6b=_0x163f4f;VisuMZ[_0x3f4c6b(0x28e)][_0x3f4c6b(0x70c)][_0x3f4c6b(0x17d)](this,_0x3e9010);if(this[_0x3f4c6b(0x657)](_0x3e9010)||this[_0x3f4c6b(0x871)](_0x3e9010)){if(_0x3f4c6b(0x1e2)!==_0x3f4c6b(0x1e2)){let _0x1d9bb3=_0x1b967a[_0x3f4c6b(0x28e)][_0x3f4c6b(0x91a)][_0x3f4c6b(0x17d)](this);return this[_0x3f4c6b(0x5b8)]()&&(_0x1d9bb3*=_0x5294ec[_0x3f4c6b(0x99f)]()),_0x1d9bb3;}else this[_0x3f4c6b(0x762)](_0x3e9010);}},Input[_0x163f4f(0x94e)]=function(){const _0x5a1487=_0x163f4f;return this[_0x5a1487(0x777)]?this['_lastGamepad']['id']:_0x5a1487(0x144);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x661)]=Tilemap[_0x163f4f(0x5b0)][_0x163f4f(0x89b)],Tilemap['prototype'][_0x163f4f(0x89b)]=function(_0x55e14f,_0x1ba47e,_0x1c6914,_0x218dbe){const _0x2a8ee7=_0x163f4f;if($gameMap&&$gameMap[_0x2a8ee7(0x22e)]())return;VisuMZ['CoreEngine'][_0x2a8ee7(0x661)][_0x2a8ee7(0x17d)](this,_0x55e14f,_0x1ba47e,_0x1c6914,_0x218dbe);},Tilemap['Renderer']['prototype'][_0x163f4f(0x49d)]=function(){const _0x10a1a4=_0x163f4f;this[_0x10a1a4(0x574)]();for(let _0x38a54d=0x0;_0x38a54d<Tilemap[_0x10a1a4(0x75d)][_0x10a1a4(0x92e)];_0x38a54d++){if('fZAdT'===_0x10a1a4(0x545)){const _0xb073a4=new PIXI[(_0x10a1a4(0x554))]();_0xb073a4['setSize'](0x800,0x800),VisuMZ[_0x10a1a4(0x28e)][_0x10a1a4(0x403)][_0x10a1a4(0x7f7)][_0x10a1a4(0x434)]&&(_0xb073a4[_0x10a1a4(0x9af)]=PIXI[_0x10a1a4(0x524)]['NEAREST']),this[_0x10a1a4(0x399)]['push'](_0xb073a4);}else{if(_0x2255ca)_0x3fb775[_0x10a1a4(0x940)](_0x40546a);}}},WindowLayer[_0x163f4f(0x5b0)][_0x163f4f(0x4c7)]=function(){const _0x31329f=_0x163f4f;return SceneManager&&SceneManager[_0x31329f(0x60e)]?SceneManager[_0x31329f(0x60e)][_0x31329f(0x5c3)]():!![];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x161)]=WindowLayer[_0x163f4f(0x5b0)][_0x163f4f(0x73a)],WindowLayer[_0x163f4f(0x5b0)][_0x163f4f(0x73a)]=function render(_0x19e969){const _0x33f8b4=_0x163f4f;this[_0x33f8b4(0x4c7)]()?VisuMZ[_0x33f8b4(0x28e)]['WindowLayer_render'][_0x33f8b4(0x17d)](this,_0x19e969):this[_0x33f8b4(0x95c)](_0x19e969);},WindowLayer[_0x163f4f(0x5b0)][_0x163f4f(0x95c)]=function render(_0x8b258c){const _0x5257d7=_0x163f4f;if(!this['visible'])return;const _0x19ba79=new PIXI[(_0x5257d7(0x260))](),_0x3b7a58=_0x8b258c['gl'],_0x587036=this[_0x5257d7(0x4ef)][_0x5257d7(0x5d2)]();_0x8b258c[_0x5257d7(0x44d)][_0x5257d7(0x6db)](),_0x19ba79[_0x5257d7(0x367)]=this[_0x5257d7(0x367)],_0x8b258c[_0x5257d7(0x860)][_0x5257d7(0x68d)](),_0x3b7a58['enable'](_0x3b7a58[_0x5257d7(0x447)]);while(_0x587036[_0x5257d7(0xf7)]>0x0){if(_0x5257d7(0x3ab)==='ceExx'){const _0x55ce0c=_0x587036[_0x5257d7(0x531)]();_0x55ce0c[_0x5257d7(0x73e)]&&_0x55ce0c[_0x5257d7(0x4c2)]&&_0x55ce0c['openness']>0x0&&(_0x3b7a58[_0x5257d7(0x5fc)](_0x3b7a58[_0x5257d7(0x418)],0x0,~0x0),_0x3b7a58[_0x5257d7(0x23a)](_0x3b7a58[_0x5257d7(0x83f)],_0x3b7a58['KEEP'],_0x3b7a58[_0x5257d7(0x83f)]),_0x55ce0c['render'](_0x8b258c),_0x8b258c[_0x5257d7(0x860)]['flush'](),_0x19ba79['clear'](),_0x3b7a58[_0x5257d7(0x5fc)](_0x3b7a58[_0x5257d7(0x553)],0x1,~0x0),_0x3b7a58['stencilOp'](_0x3b7a58[_0x5257d7(0x72f)],_0x3b7a58[_0x5257d7(0x72f)],_0x3b7a58[_0x5257d7(0x72f)]),_0x3b7a58[_0x5257d7(0x5d7)](_0x3b7a58[_0x5257d7(0x116)],_0x3b7a58[_0x5257d7(0x29f)]),_0x19ba79['render'](_0x8b258c),_0x8b258c[_0x5257d7(0x860)][_0x5257d7(0x68d)](),_0x3b7a58['blendFunc'](_0x3b7a58[_0x5257d7(0x29f)],_0x3b7a58[_0x5257d7(0x3d8)]));}else this[_0x5257d7(0x9e7)]=!![],this['update'](),_0x21db1f[_0x5257d7(0x5e2)](),this[_0x5257d7(0x9e7)]=![];}_0x3b7a58[_0x5257d7(0x63e)](_0x3b7a58[_0x5257d7(0x447)]),_0x3b7a58['clear'](_0x3b7a58[_0x5257d7(0x742)]),_0x3b7a58[_0x5257d7(0x343)](0x0),_0x8b258c[_0x5257d7(0x860)][_0x5257d7(0x68d)]();for(const _0xe77c31 of this[_0x5257d7(0x4ef)]){_0x5257d7(0x259)===_0x5257d7(0x259)?!_0xe77c31[_0x5257d7(0x73e)]&&_0xe77c31[_0x5257d7(0x4c2)]&&_0xe77c31[_0x5257d7(0x73a)](_0x8b258c):(_0x3efb9e[_0x5257d7(0x28e)][_0x5257d7(0x843)][_0x5257d7(0x17d)](this),_0x33876f[_0x5257d7(0x5a0)]()&&this[_0x5257d7(0x464)]());}_0x8b258c[_0x5257d7(0x860)][_0x5257d7(0x68d)]();},DataManager[_0x163f4f(0x2b8)]=function(_0xeab7bc){const _0x1e638f=_0x163f4f;return this['isItem'](_0xeab7bc)&&_0xeab7bc[_0x1e638f(0x4fa)]===0x2;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x63b)]=DataManager[_0x163f4f(0x46a)],DataManager[_0x163f4f(0x46a)]=function(){const _0x17157b=_0x163f4f;VisuMZ[_0x17157b(0x28e)][_0x17157b(0x63b)][_0x17157b(0x17d)](this),this[_0x17157b(0x8df)](),this[_0x17157b(0x592)]();},DataManager['reservePlayTestNewGameCommonEvent']=function(){const _0x352d2a=_0x163f4f;if($gameTemp[_0x352d2a(0x92a)]()){const _0x5e52fb=VisuMZ[_0x352d2a(0x28e)][_0x352d2a(0x403)][_0x352d2a(0x7f7)]['NewGameCommonEvent'];if(_0x5e52fb>0x0)$gameTemp['reserveCommonEvent'](_0x5e52fb);}},DataManager['reserveNewGameCommonEvent']=function(){const _0x1a65d4=_0x163f4f,_0x15618c=VisuMZ[_0x1a65d4(0x28e)]['Settings'][_0x1a65d4(0x7f7)][_0x1a65d4(0x3c6)]||0x0;if(_0x15618c>0x0)$gameTemp['reserveCommonEvent'](_0x15618c);},DataManager[_0x163f4f(0x4b0)]=function(_0x22b5a5){const _0x5717bb=_0x163f4f,_0x1ec862=$dataTroops[_0x22b5a5];if(!_0x1ec862)return'';let _0x337d92='';_0x337d92+=_0x1ec862[_0x5717bb(0x4d6)];for(const _0x316610 of _0x1ec862['pages']){for(const _0x3a833a of _0x316610['list']){[0x6c,0x198][_0x5717bb(0x2b2)](_0x3a833a[_0x5717bb(0x255)])&&(_0x337d92+='\x0a',_0x337d92+=_0x3a833a['parameters'][0x0]);}}return _0x337d92;};(VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)]['QoL'][_0x163f4f(0x20d)]??!![])&&($scene=null,VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x152)]=Scene_Base['prototype']['create'],Scene_Base[_0x163f4f(0x5b0)]['create']=function(){const _0x33aea4=_0x163f4f;VisuMZ[_0x33aea4(0x28e)]['Scene_Base_create'][_0x33aea4(0x17d)](this),$scene=this;},$spriteset=null,VisuMZ[_0x163f4f(0x28e)]['Scene_Map_createSpriteset']=Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x208)],Scene_Map['prototype'][_0x163f4f(0x208)]=function(){const _0x5112a3=_0x163f4f;VisuMZ[_0x5112a3(0x28e)][_0x5112a3(0x365)][_0x5112a3(0x17d)](this),$spriteset=this[_0x5112a3(0x518)];},VisuMZ[_0x163f4f(0x28e)]['Scene_Battle_createSpriteset']=Scene_Battle['prototype']['createSpriteset'],Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x208)]=function(){const _0x196c47=_0x163f4f;VisuMZ[_0x196c47(0x28e)][_0x196c47(0x145)][_0x196c47(0x17d)](this),$spriteset=this[_0x196c47(0x518)];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x139)]=Scene_Base[_0x163f4f(0x5b0)]['terminate'],Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x993)]=function(){const _0x5fc926=_0x163f4f;VisuMZ[_0x5fc926(0x28e)]['Scene_Base_terminate']['call'](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x2df)]=BattleManager[_0x163f4f(0x168)],BattleManager[_0x163f4f(0x168)]=function(_0x27296c){const _0xb7bb30=_0x163f4f;VisuMZ[_0xb7bb30(0x28e)][_0xb7bb30(0x2df)]['call'](this,_0x27296c),$subject=this[_0xb7bb30(0x4a1)],$targets=this['_targets'],$target=this[_0xb7bb30(0x1f2)]||this[_0xb7bb30(0x722)][0x0];},$event=null,VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x5f6)]=Game_Event[_0x163f4f(0x5b0)][_0x163f4f(0x21c)],Game_Event['prototype'][_0x163f4f(0x21c)]=function(){const _0x56f399=_0x163f4f;VisuMZ[_0x56f399(0x28e)][_0x56f399(0x5f6)]['call'](this),$event=this;},VisuMZ['CoreEngine']['Scene_Map_update']=Scene_Map['prototype'][_0x163f4f(0x168)],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x2a10b2=_0x163f4f;VisuMZ[_0x2a10b2(0x28e)][_0x2a10b2(0x629)]['call'](this),$gameMap['updateCurrentEvent']();},Game_Map['prototype']['updateCurrentEvent']=function(){const _0x3e3e0a=_0x163f4f;if(!this[_0x3e3e0a(0x9d1)]()&&$event!==null){if(_0x3e3e0a(0x4e3)===_0x3e3e0a(0x97d)){const _0x67acd6='AllTroops';_0x3dec93[_0x3e3e0a(0x816)](_0x117b91)['remove']('')[_0x3e3e0a(0x816)](null);const _0x1dfeee=_0x5311fd[_0x3e3e0a(0x307)](_0x3e3e0a(0x924))[_0x3e3e0a(0x376)]();_0x2511a2[_0x3e3e0a(0x28e)][_0x3e3e0a(0x8bb)](_0x1dfeee,_0x67acd6,!![]),_0x5d68c0[_0x3e3e0a(0x60e)][_0x3e3e0a(0x113)]=!![];}else $event=null;}},$commonEvent=function(_0x506fa2){const _0xf4861a=_0x163f4f;if($gameTemp)$gameTemp[_0xf4861a(0x7e5)](_0x506fa2);},$onceParallel=function(_0x2fed05,_0x5177cd){const _0xa34abb=_0x163f4f;if(SceneManager[_0xa34abb(0x2f5)]()){if(_0xa34abb(0x304)!==_0xa34abb(0x304)){if(_0x3b0975[_0xa34abb(0x7d6)]())return;_0x36e4ee[_0xa34abb(0x2d3)](_0x1689c1,_0x238906);const _0xdb395f=[_0xa34abb(0x6b7),_0xa34abb(0x499),_0xa34abb(0x7b6),_0xa34abb(0x819),_0xa34abb(0x172),'faces',_0xa34abb(0x741),_0xa34abb(0x54f),_0xa34abb(0x669),_0xa34abb(0x1fa),_0xa34abb(0x7ec),'tilesets',_0xa34abb(0x18c),_0xa34abb(0x94f)];for(const _0x10af94 of _0xdb395f){const _0x3a69eb=_0x4209db[_0x10af94],_0x490bc4=_0xa34abb(0x694)[_0xa34abb(0x889)](_0x10af94);for(const _0x293537 of _0x3a69eb){_0x53ee31['loadBitmap'](_0x490bc4,_0x293537);}}}else $scene[_0xa34abb(0x5c2)](_0x2fed05,_0x5177cd);}else{if(SceneManager[_0xa34abb(0x756)]()){if(_0xa34abb(0x927)!==_0xa34abb(0x74f)){if(Imported[_0xa34abb(0x5bf)])$scene[_0xa34abb(0x5c2)](_0x2fed05);else $gameTemp&&$gameTemp[_0xa34abb(0x92a)]()&&alert(_0xa34abb(0xf8));}else return![];}else $gameTemp&&$gameTemp[_0xa34abb(0x92a)]()&&alert(_0xa34abb(0x94c));}});;StorageManager[_0x163f4f(0x61f)]=function(_0x5ebb84){return new Promise((_0x594977,_0x1ec6ce)=>{const _0x46d73f=_0x3c87;if(_0x46d73f(0x102)===_0x46d73f(0x8c6))return _0x298999[_0x46d73f(0x720)][_0x46d73f(0x252)]['call'](this);else try{const _0x2d2cd4=pako['deflate'](_0x5ebb84,{'to':_0x46d73f(0x22d),'level':0x1});if(_0x2d2cd4[_0x46d73f(0xf7)]>=0xc350){}_0x594977(_0x2d2cd4);}catch(_0x2a1d1f){_0x1ec6ce(_0x2a1d1f);}});},TextManager[_0x163f4f(0x2b4)]=['','','','CANCEL','','',_0x163f4f(0x556),'',_0x163f4f(0x53d),_0x163f4f(0x489),'','',_0x163f4f(0x6d8),'ENTER',_0x163f4f(0x6ce),'',_0x163f4f(0x3ff),_0x163f4f(0x3f8),'ALT',_0x163f4f(0x8d1),_0x163f4f(0x5c7),'KANA','EISU','JUNJA','FINAL','HANJA','',_0x163f4f(0x445),_0x163f4f(0x400),'NONCONVERT',_0x163f4f(0x37e),'MODECHANGE',_0x163f4f(0x55d),_0x163f4f(0x2b5),_0x163f4f(0x395),_0x163f4f(0x19a),'HOME','LEFT','UP','RIGHT','DOWN',_0x163f4f(0x6e8),'PRINT',_0x163f4f(0x5d5),_0x163f4f(0x7be),'INSERT','DELETE','','0','1','2','3','4','5','6','7','8','9',_0x163f4f(0x49b),'SEMICOLON','LESS_THAN',_0x163f4f(0x1c0),'GREATER_THAN',_0x163f4f(0x279),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x163f4f(0x181),'',_0x163f4f(0x537),'',_0x163f4f(0x401),'NUMPAD0',_0x163f4f(0x51a),_0x163f4f(0x51e),_0x163f4f(0x971),_0x163f4f(0x6f1),'NUMPAD5',_0x163f4f(0x9e8),_0x163f4f(0x20e),_0x163f4f(0x68c),_0x163f4f(0x5de),_0x163f4f(0x4c4),_0x163f4f(0x268),'SEPARATOR','SUBTRACT',_0x163f4f(0x748),_0x163f4f(0x973),'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',_0x163f4f(0x780),_0x163f4f(0x782),_0x163f4f(0x283),_0x163f4f(0x79d),'F15',_0x163f4f(0x373),'F17',_0x163f4f(0x220),_0x163f4f(0x192),_0x163f4f(0x608),'F21',_0x163f4f(0x24f),_0x163f4f(0x721),_0x163f4f(0x332),'','','','','','','','',_0x163f4f(0x270),_0x163f4f(0x262),_0x163f4f(0x3bc),_0x163f4f(0x875),_0x163f4f(0x8b2),'WIN_OEM_FJ_LOYA',_0x163f4f(0x712),'','','','','','','','','',_0x163f4f(0x832),_0x163f4f(0x6a0),_0x163f4f(0x976),_0x163f4f(0xa0e),_0x163f4f(0x38c),_0x163f4f(0x704),'AMPERSAND','UNDERSCORE',_0x163f4f(0x73f),_0x163f4f(0x35b),'ASTERISK','PLUS',_0x163f4f(0x792),_0x163f4f(0x568),_0x163f4f(0x436),'CLOSE_CURLY_BRACKET',_0x163f4f(0x7e0),'','','','',_0x163f4f(0x34b),_0x163f4f(0x345),'VOLUME_UP','','',_0x163f4f(0x525),_0x163f4f(0x1c0),'COMMA',_0x163f4f(0x47a),_0x163f4f(0x5ee),_0x163f4f(0x2f1),_0x163f4f(0x3e3),'','','','','','','','','','','','','','','','','','','','','','','','','','',_0x163f4f(0x828),_0x163f4f(0x6d4),_0x163f4f(0x77b),_0x163f4f(0x51f),'',_0x163f4f(0x2b7),_0x163f4f(0x23c),'',_0x163f4f(0x82b),'WIN_ICO_00','','WIN_ICO_CLEAR','','',_0x163f4f(0x9f6),_0x163f4f(0x40c),_0x163f4f(0x7b9),_0x163f4f(0x18f),_0x163f4f(0x98d),_0x163f4f(0x353),_0x163f4f(0x261),'WIN_OEM_ATTN',_0x163f4f(0x15c),'WIN_OEM_COPY',_0x163f4f(0x61d),_0x163f4f(0x1d4),_0x163f4f(0x473),_0x163f4f(0x42b),_0x163f4f(0x9fb),'EXSEL','EREOF',_0x163f4f(0x453),_0x163f4f(0x76d),'','PA1','WIN_OEM_CLEAR',''],TextManager[_0x163f4f(0x8b8)]=VisuMZ['CoreEngine'][_0x163f4f(0x403)]['ButtonAssist'][_0x163f4f(0xa03)],TextManager[_0x163f4f(0x4b6)]=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x490)][_0x163f4f(0x16d)],TextManager[_0x163f4f(0x47d)]=VisuMZ[_0x163f4f(0x28e)]['Settings'][_0x163f4f(0x490)][_0x163f4f(0x3b0)],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x883)]=TextManager['param'],TextManager[_0x163f4f(0x357)]=function(_0x14ea2a){const _0x6e013a=_0x163f4f;if(typeof _0x14ea2a===_0x6e013a(0x454)){if(_0x6e013a(0x4af)!==_0x6e013a(0x4af)){if(this['_coreEngineShakeStyle']===_0x305aff)this[_0x6e013a(0x6eb)]();this[_0x6e013a(0x60b)]=_0xfddda3[_0x6e013a(0x787)]()[_0x6e013a(0x376)]();}else return VisuMZ['CoreEngine'][_0x6e013a(0x883)][_0x6e013a(0x17d)](this,_0x14ea2a);}else return this[_0x6e013a(0x540)](_0x14ea2a);},TextManager[_0x163f4f(0x540)]=function(_0x17fb52){const _0x5d7a14=_0x163f4f;_0x17fb52=String(_0x17fb52||'')[_0x5d7a14(0x5ca)]();const _0x555679=VisuMZ['CoreEngine'][_0x5d7a14(0x403)][_0x5d7a14(0x67d)];if(_0x17fb52===_0x5d7a14(0x9f7))return $dataSystem[_0x5d7a14(0x988)][_0x5d7a14(0x937)][0x0];if(_0x17fb52===_0x5d7a14(0x408))return $dataSystem[_0x5d7a14(0x988)][_0x5d7a14(0x937)][0x1];if(_0x17fb52===_0x5d7a14(0x65f))return $dataSystem[_0x5d7a14(0x988)][_0x5d7a14(0x937)][0x2];if(_0x17fb52==='DEF')return $dataSystem['terms'][_0x5d7a14(0x937)][0x3];if(_0x17fb52===_0x5d7a14(0x92c))return $dataSystem['terms'][_0x5d7a14(0x937)][0x4];if(_0x17fb52===_0x5d7a14(0x88a))return $dataSystem[_0x5d7a14(0x988)][_0x5d7a14(0x937)][0x5];if(_0x17fb52===_0x5d7a14(0x70a))return $dataSystem[_0x5d7a14(0x988)]['params'][0x6];if(_0x17fb52==='LUK')return $dataSystem[_0x5d7a14(0x988)]['params'][0x7];if(_0x17fb52===_0x5d7a14(0x1a0))return _0x555679[_0x5d7a14(0x44f)];if(_0x17fb52===_0x5d7a14(0x7f6))return _0x555679['XParamVocab1'];if(_0x17fb52===_0x5d7a14(0x213))return _0x555679[_0x5d7a14(0x8da)];if(_0x17fb52===_0x5d7a14(0x80a))return _0x555679[_0x5d7a14(0x3d4)];if(_0x17fb52==='MEV')return _0x555679['XParamVocab4'];if(_0x17fb52===_0x5d7a14(0x52f))return _0x555679['XParamVocab5'];if(_0x17fb52===_0x5d7a14(0x61e))return _0x555679[_0x5d7a14(0x9f2)];if(_0x17fb52==='HRG')return _0x555679['XParamVocab7'];if(_0x17fb52===_0x5d7a14(0x58e))return _0x555679[_0x5d7a14(0x494)];if(_0x17fb52==='TRG')return _0x555679[_0x5d7a14(0x6b3)];if(_0x17fb52===_0x5d7a14(0x2ff))return _0x555679[_0x5d7a14(0x52b)];if(_0x17fb52==='GRD')return _0x555679['SParamVocab1'];if(_0x17fb52===_0x5d7a14(0xa01))return _0x555679[_0x5d7a14(0x977)];if(_0x17fb52===_0x5d7a14(0x852))return _0x555679[_0x5d7a14(0x9a3)];if(_0x17fb52===_0x5d7a14(0x991))return _0x555679[_0x5d7a14(0x579)];if(_0x17fb52===_0x5d7a14(0x234))return _0x555679[_0x5d7a14(0x5d9)];if(_0x17fb52==='PDR')return _0x555679[_0x5d7a14(0x62e)];if(_0x17fb52===_0x5d7a14(0x80e))return _0x555679[_0x5d7a14(0x301)];if(_0x17fb52===_0x5d7a14(0x3a4))return _0x555679[_0x5d7a14(0x99b)];if(_0x17fb52===_0x5d7a14(0x861))return _0x555679[_0x5d7a14(0x880)];if(VisuMZ[_0x5d7a14(0x28e)]['CustomParamNames'][_0x17fb52])return _0x5d7a14(0x468)!=='iJkWb'?_0x47f478[_0x5d7a14(0x28e)]['Settings'][_0x5d7a14(0x142)][_0x5d7a14(0x366)]||_0x5d7a14(0x6a6):VisuMZ['CoreEngine'][_0x5d7a14(0x56b)][_0x17fb52];return'';},TextManager['getInputButtonString']=function(_0x537e2f){const _0xa67d70=_0x163f4f,_0x29c4ec=Input[_0xa67d70(0x94e)]();return _0x29c4ec==='Keyboard'?this[_0xa67d70(0x12c)](_0x537e2f):this['getControllerInputButtonString'](_0x29c4ec,_0x537e2f);},TextManager[_0x163f4f(0x12c)]=function(_0x3878f9){const _0x14cc5a=_0x163f4f,_0x479a84=VisuMZ[_0x14cc5a(0x28e)]['Settings'][_0x14cc5a(0x490)][_0x14cc5a(0x5a1)];if(!_0x479a84){if(_0x14cc5a(0x876)!==_0x14cc5a(0x6a1)){if(_0x3878f9==='cancel')_0x3878f9=_0x14cc5a(0x8a4);if(_0x3878f9===_0x14cc5a(0x2a0))_0x3878f9='escape';}else return _0xd85556[_0x14cc5a(0x5b0)][_0x14cc5a(0x78e)][_0x14cc5a(0x17d)](this);}let _0x42a785=[];for(let _0xedafa6 in Input[_0x14cc5a(0x157)]){_0xedafa6=Number(_0xedafa6);if(_0xedafa6>=0x60&&_0xedafa6<=0x69)continue;if([0x12,0x20]['includes'](_0xedafa6))continue;if(_0x3878f9===Input[_0x14cc5a(0x157)][_0xedafa6]){if('KzAzm'==='IDztP'){this[_0x14cc5a(0x20f)]=_0x14cc5a(0x6fe),this[_0x14cc5a(0x9cf)]=_0x14cc5a(0x6fe),this['_lastY']=_0x14cc5a(0x6fe);const _0x5ea1f5=this[_0x14cc5a(0x358)]();_0x9edb2['prototype'][_0x14cc5a(0x52c)][_0x14cc5a(0x17d)](this,_0x5ea1f5),this[_0x14cc5a(0x50f)](0x2);}else _0x42a785[_0x14cc5a(0x9ca)](_0xedafa6);}}for(let _0x553cf6=0x0;_0x553cf6<_0x42a785[_0x14cc5a(0xf7)];_0x553cf6++){_0x42a785[_0x553cf6]=TextManager[_0x14cc5a(0x2b4)][_0x42a785[_0x553cf6]];}return this['makeInputButtonString'](_0x42a785);},TextManager[_0x163f4f(0x8f4)]=function(_0x50a64c){const _0x20f900=_0x163f4f,_0x1b1349=VisuMZ['CoreEngine'][_0x20f900(0x403)]['ButtonAssist'],_0x2ae639=_0x1b1349[_0x20f900(0x285)],_0x360c44=_0x50a64c['pop'](),_0xba3936=_0x20f900(0x7c8)[_0x20f900(0x889)](_0x360c44);return _0x1b1349[_0xba3936]?_0x1b1349[_0xba3936]:_0x2ae639[_0x20f900(0x889)](_0x360c44);},TextManager[_0x163f4f(0x2e1)]=function(_0x551ab4,_0x483ca0){const _0xad9042=_0x163f4f,_0x1055c9=VisuMZ[_0xad9042(0x28e)][_0xad9042(0x403)][_0xad9042(0x490)],_0x101550=_0x1055c9[_0xad9042(0x227)],_0x2f6ffd=this[_0xad9042(0x5ec)](_0x551ab4),_0x3bcd79=this[_0xad9042(0x5ec)](_0x483ca0);return _0x101550[_0xad9042(0x889)](_0x2f6ffd,_0x3bcd79);},TextManager['getControllerInputButtonString']=function(_0x2500e9,_0x267e73){const _0x362b87=_0x163f4f,_0x32ed2f=_0x2500e9[_0x362b87(0x787)]()[_0x362b87(0x376)](),_0x24efb9=VisuMZ[_0x362b87(0x28e)]['ControllerButtons'][_0x32ed2f];if(!_0x24efb9)return this[_0x362b87(0x40d)](_0x2500e9,_0x267e73);return _0x24efb9[_0x267e73]||this[_0x362b87(0x12c)](_0x2500e9,_0x267e73);},TextManager[_0x163f4f(0x40d)]=function(_0xa5f879,_0xaae922){const _0x302134=_0x163f4f,_0x15ecb4=_0xa5f879['toLowerCase']()['trim']();for(const _0x1e83a7 in VisuMZ[_0x302134(0x28e)][_0x302134(0x183)]){if(_0x302134(0x67f)!==_0x302134(0x67f)){const _0x5e64fb=_0x4599de[_0x302134(0x19d)]();if(_0x5e64fb)_0x5e64fb[_0x302134(0x626)](_0x5c20b0);}else{if(_0x15ecb4[_0x302134(0x2b2)](_0x1e83a7)){const _0x11ea73=VisuMZ[_0x302134(0x28e)][_0x302134(0x183)][_0x1e83a7],_0x286213=VisuMZ[_0x302134(0x28e)][_0x302134(0x93e)][_0x11ea73];return _0x286213[_0xaae922]||this[_0x302134(0x12c)](_0xaae922);}}}return this['getKeyboardInputButtonString'](_0xaae922);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x71f)]=ColorManager[_0x163f4f(0x53b)],ColorManager[_0x163f4f(0x53b)]=function(){const _0x9087a1=_0x163f4f;VisuMZ[_0x9087a1(0x28e)]['ColorManager_loadWindowskin'][_0x9087a1(0x17d)](this),this[_0x9087a1(0x221)]=this[_0x9087a1(0x221)]||{};},ColorManager['getColorDataFromPluginParameters']=function(_0x2deeb1,_0x464be7){const _0x16992e=_0x163f4f;return _0x464be7=String(_0x464be7),this['_colorCache']=this[_0x16992e(0x221)]||{},_0x464be7['match'](/#(.*)/i)?this[_0x16992e(0x221)][_0x2deeb1]=_0x16992e(0x773)['format'](String(RegExp['$1'])):this[_0x16992e(0x221)][_0x2deeb1]=this[_0x16992e(0x570)](Number(_0x464be7)),this[_0x16992e(0x221)][_0x2deeb1];},ColorManager[_0x163f4f(0x191)]=function(_0x567d6a){const _0x3aa335=_0x163f4f;_0x567d6a=String(_0x567d6a);if(_0x567d6a['match'](/#(.*)/i)){if(_0x3aa335(0x188)!=='rgHvC')return _0x3aa335(0x773)[_0x3aa335(0x889)](String(RegExp['$1']));else{var _0x1eee16=_0x4d286f(_0x45d543['$1']);_0x51b0a5+=_0x1eee16;}}else return this[_0x3aa335(0x570)](Number(_0x567d6a));},ColorManager[_0x163f4f(0x72e)]=function(){const _0x494265=_0x163f4f;this[_0x494265(0x221)]={};},ColorManager[_0x163f4f(0x7e1)]=function(){const _0x134eac=_0x163f4f,_0x2c6ed5=_0x134eac(0x2c9);this[_0x134eac(0x221)]=this[_0x134eac(0x221)]||{};if(this[_0x134eac(0x221)][_0x2c6ed5])return this[_0x134eac(0x221)][_0x2c6ed5];const _0x1995c2=VisuMZ[_0x134eac(0x28e)][_0x134eac(0x403)][_0x134eac(0x142)]['ColorNormal'];return this[_0x134eac(0x1ea)](_0x2c6ed5,_0x1995c2);},ColorManager['systemColor']=function(){const _0x9173d3=_0x163f4f,_0x48f83b='_stored_systemColor';this['_colorCache']=this[_0x9173d3(0x221)]||{};if(this[_0x9173d3(0x221)][_0x48f83b])return this[_0x9173d3(0x221)][_0x48f83b];const _0x1a7976=VisuMZ[_0x9173d3(0x28e)]['Settings']['Color'][_0x9173d3(0x4e1)];return this[_0x9173d3(0x1ea)](_0x48f83b,_0x1a7976);},ColorManager[_0x163f4f(0x6b6)]=function(){const _0x58cf98=_0x163f4f,_0x4e6794=_0x58cf98(0x962);this['_colorCache']=this[_0x58cf98(0x221)]||{};if(this['_colorCache'][_0x4e6794])return this[_0x58cf98(0x221)][_0x4e6794];const _0x4cc9b0=VisuMZ['CoreEngine']['Settings'][_0x58cf98(0x142)][_0x58cf98(0x562)];return this[_0x58cf98(0x1ea)](_0x4e6794,_0x4cc9b0);},ColorManager[_0x163f4f(0x40e)]=function(){const _0x243127=_0x163f4f,_0xe56567=_0x243127(0x5d0);this[_0x243127(0x221)]=this[_0x243127(0x221)]||{};if(this[_0x243127(0x221)][_0xe56567])return this[_0x243127(0x221)][_0xe56567];const _0x277a45=VisuMZ[_0x243127(0x28e)][_0x243127(0x403)]['Color'][_0x243127(0x639)];return this[_0x243127(0x1ea)](_0xe56567,_0x277a45);},ColorManager[_0x163f4f(0x8ef)]=function(){const _0x29c003=_0x163f4f,_0x56c22b=_0x29c003(0x811);this['_colorCache']=this[_0x29c003(0x221)]||{};if(this['_colorCache'][_0x56c22b])return this[_0x29c003(0x221)][_0x56c22b];const _0x275f4d=VisuMZ['CoreEngine'][_0x29c003(0x403)][_0x29c003(0x142)][_0x29c003(0x50e)];return this[_0x29c003(0x1ea)](_0x56c22b,_0x275f4d);},ColorManager[_0x163f4f(0x8f8)]=function(){const _0x41d374=_0x163f4f,_0x2d6eb3=_0x41d374(0x288);this[_0x41d374(0x221)]=this[_0x41d374(0x221)]||{};if(this[_0x41d374(0x221)][_0x2d6eb3])return this[_0x41d374(0x221)][_0x2d6eb3];const _0xd0777d=VisuMZ['CoreEngine']['Settings'][_0x41d374(0x142)]['ColorHPGauge1'];return this[_0x41d374(0x1ea)](_0x2d6eb3,_0xd0777d);},ColorManager[_0x163f4f(0x7a6)]=function(){const _0x244828=_0x163f4f,_0x4cf26c=_0x244828(0x601);this['_colorCache']=this[_0x244828(0x221)]||{};if(this['_colorCache'][_0x4cf26c])return this[_0x244828(0x221)][_0x4cf26c];const _0x18aa79=VisuMZ[_0x244828(0x28e)][_0x244828(0x403)][_0x244828(0x142)][_0x244828(0x8a1)];return this[_0x244828(0x1ea)](_0x4cf26c,_0x18aa79);},ColorManager[_0x163f4f(0x920)]=function(){const _0xcec05b=_0x163f4f,_0x1e5dc2=_0xcec05b(0x98e);this[_0xcec05b(0x221)]=this['_colorCache']||{};if(this[_0xcec05b(0x221)][_0x1e5dc2])return this[_0xcec05b(0x221)][_0x1e5dc2];const _0x30dcb7=VisuMZ[_0xcec05b(0x28e)][_0xcec05b(0x403)][_0xcec05b(0x142)]['ColorMPGauge1'];return this['getColorDataFromPluginParameters'](_0x1e5dc2,_0x30dcb7);},ColorManager[_0x163f4f(0x90d)]=function(){const _0x1d3093=_0x163f4f,_0x13fc50='_stored_mpGaugeColor2';this['_colorCache']=this['_colorCache']||{};if(this[_0x1d3093(0x221)][_0x13fc50])return this[_0x1d3093(0x221)][_0x13fc50];const _0x596d2b=VisuMZ['CoreEngine'][_0x1d3093(0x403)]['Color'][_0x1d3093(0x47f)];return this[_0x1d3093(0x1ea)](_0x13fc50,_0x596d2b);},ColorManager[_0x163f4f(0x53e)]=function(){const _0x2cd65b=_0x163f4f,_0x302f78=_0x2cd65b(0x58a);this[_0x2cd65b(0x221)]=this[_0x2cd65b(0x221)]||{};if(this[_0x2cd65b(0x221)][_0x302f78])return this[_0x2cd65b(0x221)][_0x302f78];const _0x2e24dd=VisuMZ['CoreEngine']['Settings']['Color'][_0x2cd65b(0x974)];return this['getColorDataFromPluginParameters'](_0x302f78,_0x2e24dd);},ColorManager[_0x163f4f(0x736)]=function(){const _0x20bc22=_0x163f4f,_0x10ef99=_0x20bc22(0x856);this[_0x20bc22(0x221)]=this[_0x20bc22(0x221)]||{};if(this[_0x20bc22(0x221)][_0x10ef99])return this[_0x20bc22(0x221)][_0x10ef99];const _0x470d72=VisuMZ['CoreEngine'][_0x20bc22(0x403)][_0x20bc22(0x142)][_0x20bc22(0x544)];return this['getColorDataFromPluginParameters'](_0x10ef99,_0x470d72);},ColorManager[_0x163f4f(0x222)]=function(){const _0x56e784=_0x163f4f,_0x974ec7=_0x56e784(0x2f2);this[_0x56e784(0x221)]=this[_0x56e784(0x221)]||{};if(this['_colorCache'][_0x974ec7])return this[_0x56e784(0x221)][_0x974ec7];const _0x5670d7=VisuMZ['CoreEngine']['Settings'][_0x56e784(0x142)]['ColorPowerDown'];return this['getColorDataFromPluginParameters'](_0x974ec7,_0x5670d7);},ColorManager[_0x163f4f(0x825)]=function(){const _0x12123d=_0x163f4f,_0x5008c7=_0x12123d(0x4b7);this[_0x12123d(0x221)]=this[_0x12123d(0x221)]||{};if(this[_0x12123d(0x221)][_0x5008c7])return this[_0x12123d(0x221)][_0x5008c7];const _0x4f4e30=VisuMZ['CoreEngine'][_0x12123d(0x403)]['Color'][_0x12123d(0x433)];return this[_0x12123d(0x1ea)](_0x5008c7,_0x4f4e30);},ColorManager[_0x163f4f(0x202)]=function(){const _0x8fb5b3=_0x163f4f,_0x5da00b='_stored_ctGaugeColor2';this[_0x8fb5b3(0x221)]=this[_0x8fb5b3(0x221)]||{};if(this[_0x8fb5b3(0x221)][_0x5da00b])return this['_colorCache'][_0x5da00b];const _0x3c74bb=VisuMZ[_0x8fb5b3(0x28e)][_0x8fb5b3(0x403)][_0x8fb5b3(0x142)][_0x8fb5b3(0x1a7)];return this[_0x8fb5b3(0x1ea)](_0x5da00b,_0x3c74bb);},ColorManager[_0x163f4f(0x71c)]=function(){const _0x3add81=_0x163f4f,_0x10110b=_0x3add81(0x184);this['_colorCache']=this[_0x3add81(0x221)]||{};if(this[_0x3add81(0x221)][_0x10110b])return this[_0x3add81(0x221)][_0x10110b];const _0x5e4baf=VisuMZ[_0x3add81(0x28e)]['Settings']['Color'][_0x3add81(0x2c2)];return this['getColorDataFromPluginParameters'](_0x10110b,_0x5e4baf);},ColorManager[_0x163f4f(0x22a)]=function(){const _0x5e8f96=_0x163f4f,_0x4dbfc8=_0x5e8f96(0x380);this['_colorCache']=this[_0x5e8f96(0x221)]||{};if(this[_0x5e8f96(0x221)][_0x4dbfc8])return this[_0x5e8f96(0x221)][_0x4dbfc8];const _0x5a8c8c=VisuMZ[_0x5e8f96(0x28e)][_0x5e8f96(0x403)][_0x5e8f96(0x142)][_0x5e8f96(0x4a8)];return this['getColorDataFromPluginParameters'](_0x4dbfc8,_0x5a8c8c);},ColorManager['tpCostColor']=function(){const _0x381ae5=_0x163f4f,_0x4dc546=_0x381ae5(0x7bd);this[_0x381ae5(0x221)]=this['_colorCache']||{};if(this['_colorCache'][_0x4dc546])return this[_0x381ae5(0x221)][_0x4dc546];const _0x45655e=VisuMZ[_0x381ae5(0x28e)][_0x381ae5(0x403)]['Color']['ColorTPCost'];return this[_0x381ae5(0x1ea)](_0x4dc546,_0x45655e);},ColorManager[_0x163f4f(0x677)]=function(){const _0xb7551e=_0x163f4f,_0x32851b='_stored_pendingColor';this[_0xb7551e(0x221)]=this[_0xb7551e(0x221)]||{};if(this[_0xb7551e(0x221)][_0x32851b])return this['_colorCache'][_0x32851b];const _0x531721=VisuMZ[_0xb7551e(0x28e)]['Settings'][_0xb7551e(0x142)][_0xb7551e(0x1f5)];return this[_0xb7551e(0x1ea)](_0x32851b,_0x531721);},ColorManager['expGaugeColor1']=function(){const _0x38312f=_0x163f4f,_0x4bea94='_stored_expGaugeColor1';this[_0x38312f(0x221)]=this[_0x38312f(0x221)]||{};if(this[_0x38312f(0x221)][_0x4bea94])return this[_0x38312f(0x221)][_0x4bea94];const _0x547d6e=VisuMZ[_0x38312f(0x28e)][_0x38312f(0x403)]['Color']['ColorExpGauge1'];return this['getColorDataFromPluginParameters'](_0x4bea94,_0x547d6e);},ColorManager['expGaugeColor2']=function(){const _0x7a0ed7=_0x163f4f,_0x1d50b1='_stored_expGaugeColor2';this['_colorCache']=this[_0x7a0ed7(0x221)]||{};if(this[_0x7a0ed7(0x221)][_0x1d50b1])return this[_0x7a0ed7(0x221)][_0x1d50b1];const _0x808d57=VisuMZ[_0x7a0ed7(0x28e)][_0x7a0ed7(0x403)][_0x7a0ed7(0x142)][_0x7a0ed7(0x308)];return this[_0x7a0ed7(0x1ea)](_0x1d50b1,_0x808d57);},ColorManager['maxLvGaugeColor1']=function(){const _0x42b65f=_0x163f4f,_0x140e72='_stored_maxLvGaugeColor1';this[_0x42b65f(0x221)]=this[_0x42b65f(0x221)]||{};if(this[_0x42b65f(0x221)][_0x140e72])return this[_0x42b65f(0x221)][_0x140e72];const _0x491844=VisuMZ['CoreEngine'][_0x42b65f(0x403)][_0x42b65f(0x142)][_0x42b65f(0x72d)];return this['getColorDataFromPluginParameters'](_0x140e72,_0x491844);},ColorManager[_0x163f4f(0x945)]=function(){const _0x209900=_0x163f4f,_0x24ad8b='_stored_maxLvGaugeColor2';this[_0x209900(0x221)]=this[_0x209900(0x221)]||{};if(this['_colorCache'][_0x24ad8b])return this[_0x209900(0x221)][_0x24ad8b];const _0x235d74=VisuMZ['CoreEngine']['Settings'][_0x209900(0x142)][_0x209900(0x652)];return this['getColorDataFromPluginParameters'](_0x24ad8b,_0x235d74);},ColorManager[_0x163f4f(0x801)]=function(_0x4b5e1e){const _0x1d1cd5=_0x163f4f;return VisuMZ['CoreEngine'][_0x1d1cd5(0x403)][_0x1d1cd5(0x142)][_0x1d1cd5(0x502)][_0x1d1cd5(0x17d)](this,_0x4b5e1e);},ColorManager[_0x163f4f(0x5fd)]=function(_0x286996){const _0x36b8fa=_0x163f4f;return VisuMZ[_0x36b8fa(0x28e)]['Settings'][_0x36b8fa(0x142)][_0x36b8fa(0x5b6)][_0x36b8fa(0x17d)](this,_0x286996);},ColorManager[_0x163f4f(0x772)]=function(_0x378397){const _0x583ac1=_0x163f4f;return VisuMZ[_0x583ac1(0x28e)]['Settings'][_0x583ac1(0x142)][_0x583ac1(0xf1)][_0x583ac1(0x17d)](this,_0x378397);},ColorManager[_0x163f4f(0x4ab)]=function(_0x5271dd){const _0xc5c277=_0x163f4f;return VisuMZ[_0xc5c277(0x28e)][_0xc5c277(0x403)][_0xc5c277(0x142)][_0xc5c277(0x60c)][_0xc5c277(0x17d)](this,_0x5271dd);},ColorManager[_0x163f4f(0x6a8)]=function(_0x319629){const _0x219074=_0x163f4f;return VisuMZ[_0x219074(0x28e)]['Settings']['Color'][_0x219074(0x23f)][_0x219074(0x17d)](this,_0x319629);},ColorManager[_0x163f4f(0x628)]=function(){const _0x5e568e=_0x163f4f;return VisuMZ[_0x5e568e(0x28e)][_0x5e568e(0x403)][_0x5e568e(0x142)][_0x5e568e(0x375)];},ColorManager['outlineColorDmg']=function(){const _0x3ab888=_0x163f4f;return VisuMZ[_0x3ab888(0x28e)]['Settings'][_0x3ab888(0x142)]['OutlineColorDmg']||_0x3ab888(0x6a6);},ColorManager[_0x163f4f(0x627)]=function(){const _0x3e754e=_0x163f4f;return VisuMZ[_0x3e754e(0x28e)]['Settings'][_0x3e754e(0x142)]['OutlineColorGauge']||_0x3e754e(0x75b);},ColorManager[_0x163f4f(0x3ef)]=function(){const _0x141a7e=_0x163f4f;return VisuMZ[_0x141a7e(0x28e)][_0x141a7e(0x403)]['Color'][_0x141a7e(0x611)];},ColorManager['dimColor2']=function(){const _0x3d2f22=_0x163f4f;return VisuMZ[_0x3d2f22(0x28e)][_0x3d2f22(0x403)][_0x3d2f22(0x142)][_0x3d2f22(0x901)];},ColorManager[_0x163f4f(0x30a)]=function(){const _0x5318eb=_0x163f4f;return VisuMZ[_0x5318eb(0x28e)][_0x5318eb(0x403)][_0x5318eb(0x142)][_0x5318eb(0x5e8)];},ColorManager[_0x163f4f(0x623)]=function(){const _0xd98264=_0x163f4f;return VisuMZ['CoreEngine'][_0xd98264(0x403)]['Color']['ItemBackColor2'];},SceneManager[_0x163f4f(0x9de)]=[],SceneManager['isSceneBattle']=function(){const _0x2d76a6=_0x163f4f;return this['_scene']&&this[_0x2d76a6(0x60e)]['constructor']===Scene_Battle;},SceneManager[_0x163f4f(0x2f5)]=function(){const _0x554a66=_0x163f4f;return this['_scene']&&this[_0x554a66(0x60e)][_0x554a66(0x2d2)]===Scene_Map;},SceneManager[_0x163f4f(0x115)]=function(){const _0x19a635=_0x163f4f;return this[_0x19a635(0x60e)]&&this['_scene']instanceof Scene_Map;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1aa)]=SceneManager['initialize'],SceneManager['initialize']=function(){const _0x45a065=_0x163f4f;VisuMZ[_0x45a065(0x28e)][_0x45a065(0x1aa)][_0x45a065(0x17d)](this),this[_0x45a065(0x3fb)]();},VisuMZ[_0x163f4f(0x28e)]['SceneManager_onKeyDown']=SceneManager[_0x163f4f(0x600)],SceneManager[_0x163f4f(0x600)]=function(_0x46e47a){const _0x5cb53f=_0x163f4f;if($gameTemp)this['onKeyDownKeysF6F7'](_0x46e47a);VisuMZ[_0x5cb53f(0x28e)][_0x5cb53f(0x28b)][_0x5cb53f(0x17d)](this,_0x46e47a);},SceneManager[_0x163f4f(0x134)]=function(_0x45b786){const _0x17f4c0=_0x163f4f;if(!_0x45b786[_0x17f4c0(0x76e)]&&!_0x45b786['altKey']){if(_0x17f4c0(0x8eb)===_0x17f4c0(0x257))return _0x17f4c0(0x954);else switch(_0x45b786[_0x17f4c0(0x388)]){case 0x52:this[_0x17f4c0(0x700)]();break;case 0x54:this['playTestShiftT']();break;case 0x75:this[_0x17f4c0(0x328)]();break;case 0x76:if(Input[_0x17f4c0(0x947)](_0x17f4c0(0x531))||Input[_0x17f4c0(0x947)]('ctrl'))return;this['playTestF7']();break;}}},SceneManager[_0x163f4f(0x328)]=function(){const _0x2e496e=_0x163f4f;if($gameTemp[_0x2e496e(0x92a)]()&&VisuMZ[_0x2e496e(0x28e)][_0x2e496e(0x403)][_0x2e496e(0x7f7)][_0x2e496e(0x659)]){ConfigManager[_0x2e496e(0x683)]!==0x0?(ConfigManager[_0x2e496e(0x7d8)]=0x0,ConfigManager[_0x2e496e(0x692)]=0x0,ConfigManager[_0x2e496e(0x87a)]=0x0,ConfigManager[_0x2e496e(0x683)]=0x0):(ConfigManager[_0x2e496e(0x7d8)]=0x64,ConfigManager[_0x2e496e(0x692)]=0x64,ConfigManager[_0x2e496e(0x87a)]=0x64,ConfigManager[_0x2e496e(0x683)]=0x64);ConfigManager[_0x2e496e(0x211)]();if(this[_0x2e496e(0x60e)][_0x2e496e(0x2d2)]===Scene_Options){if(this[_0x2e496e(0x60e)]['_optionsWindow'])this[_0x2e496e(0x60e)][_0x2e496e(0x108)]['refresh']();if(this[_0x2e496e(0x60e)]['_listWindow'])this[_0x2e496e(0x60e)][_0x2e496e(0x8c4)]['refresh']();}}},SceneManager[_0x163f4f(0x5e3)]=function(){const _0x5991f6=_0x163f4f;$gameTemp['isPlaytest']()&&VisuMZ[_0x5991f6(0x28e)][_0x5991f6(0x403)][_0x5991f6(0x7f7)]['F7key']&&($gameTemp['_playTestFastMode']=!$gameTemp['_playTestFastMode']);},SceneManager[_0x163f4f(0x700)]=function(){const _0x3cfc72=_0x163f4f;if(!VisuMZ[_0x3cfc72(0x28e)]['Settings'][_0x3cfc72(0x7f7)]['ShiftR_Toggle'])return;if(!$gameTemp[_0x3cfc72(0x92a)]())return;if(!SceneManager['isSceneBattle']())return;if(!Input[_0x3cfc72(0x947)]('shift'))return;for(const _0x42cdab of $gameParty[_0x3cfc72(0x81a)]()){if(!_0x42cdab)continue;_0x42cdab[_0x3cfc72(0x590)]();}},SceneManager[_0x163f4f(0x835)]=function(){const _0x54850d=_0x163f4f;if(!VisuMZ['CoreEngine'][_0x54850d(0x403)]['QoL'][_0x54850d(0x33a)])return;if(!$gameTemp[_0x54850d(0x92a)]())return;if(!SceneManager[_0x54850d(0x756)]())return;if(!Input[_0x54850d(0x947)](_0x54850d(0x531)))return;for(const _0x20e9db of $gameParty[_0x54850d(0x81a)]()){if(!_0x20e9db)continue;_0x20e9db[_0x54850d(0x4ed)](_0x20e9db[_0x54850d(0x1dc)]());}},SceneManager[_0x163f4f(0x3fb)]=function(){const _0xe153e2=_0x163f4f;this['_sideButtonLayout']=![],this['_hideButtons']=!VisuMZ[_0xe153e2(0x28e)][_0xe153e2(0x403)]['UI'][_0xe153e2(0x7e4)];},SceneManager[_0x163f4f(0x904)]=function(_0x59f240){const _0x183ee0=_0x163f4f;VisuMZ[_0x183ee0(0x28e)][_0x183ee0(0x403)]['UI'][_0x183ee0(0x8e1)]&&(this[_0x183ee0(0x7d9)]=_0x59f240);},SceneManager[_0x163f4f(0x5a0)]=function(){const _0xa4a0aa=_0x163f4f;return this[_0xa4a0aa(0x7d9)];},SceneManager['areButtonsHidden']=function(){return this['_hideButtons'];},SceneManager[_0x163f4f(0xfa)]=function(){const _0x3b9387=_0x163f4f;return this['areButtonsHidden']()||this[_0x3b9387(0x5a0)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1fb)]=SceneManager[_0x163f4f(0x90b)],SceneManager[_0x163f4f(0x90b)]=function(){const _0x307ee5=_0x163f4f;return VisuMZ[_0x307ee5(0x28e)][_0x307ee5(0x403)]['QoL'][_0x307ee5(0x9a8)]?VisuMZ[_0x307ee5(0x28e)][_0x307ee5(0x1fb)][_0x307ee5(0x17d)](this):_0x307ee5(0x103)!==_0x307ee5(0x103)?this['_lastGamepad']||null:!![];},SceneManager['catchException']=function(_0x2e88b6){const _0x196904=_0x163f4f;if(_0x2e88b6 instanceof Error)this[_0x196904(0x3b7)](_0x2e88b6);else _0x2e88b6 instanceof Array&&_0x2e88b6[0x0]==='LoadError'?this[_0x196904(0x240)](_0x2e88b6):this[_0x196904(0x369)](_0x2e88b6);this['stop']();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8c5)]=BattleManager[_0x163f4f(0x850)],BattleManager[_0x163f4f(0x850)]=function(){const _0x49bec6=_0x163f4f;return VisuMZ['CoreEngine'][_0x49bec6(0x403)][_0x49bec6(0x7f7)][_0x49bec6(0x805)]?this[_0x49bec6(0x337)]():VisuMZ[_0x49bec6(0x28e)][_0x49bec6(0x8c5)][_0x49bec6(0x17d)](this);},BattleManager[_0x163f4f(0x337)]=function(){const _0x4e7b89=_0x163f4f;return $gameParty[_0x4e7b89(0x758)](),SoundManager[_0x4e7b89(0x1df)](),this[_0x4e7b89(0x120)](),!![];},BattleManager[_0x163f4f(0x229)]=function(){return $gameSystem['getBattleSystem']()>=0x1;},BattleManager['isActiveTpb']=function(){const _0x170290=_0x163f4f;return $gameSystem[_0x170290(0x61c)]()===0x1;},VisuMZ[_0x163f4f(0x28e)]['Game_Temp_initialize']=Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Game_Temp[_0x163f4f(0x5b0)]['initialize']=function(){const _0x4d87fc=_0x163f4f;VisuMZ[_0x4d87fc(0x28e)][_0x4d87fc(0x360)]['call'](this),this[_0x4d87fc(0x2c7)](),this[_0x4d87fc(0x82a)](),this[_0x4d87fc(0x663)]();},Game_Temp[_0x163f4f(0x5b0)]['forceOutOfPlaytest']=function(){const _0x68094b=_0x163f4f;VisuMZ[_0x68094b(0x28e)][_0x68094b(0x403)][_0x68094b(0x7f7)][_0x68094b(0x96b)]&&(this[_0x68094b(0x868)]=![]);},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x320)]=function(_0x1090ef){const _0x5c4a6c=_0x163f4f;this[_0x5c4a6c(0x394)]=_0x1090ef;},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x19d)]=function(){const _0x59bc0c=_0x163f4f;return this[_0x59bc0c(0x394)];},Game_Temp[_0x163f4f(0x5b0)]['clearForcedGameTroopSettingsCoreEngine']=function(){const _0x5d435d=_0x163f4f;this[_0x5d435d(0x442)]=undefined,this[_0x5d435d(0x2ec)]=undefined;},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x1b4)]=function(_0x46f15f){const _0x43e826=_0x163f4f;if($gameMap&&$dataMap&&$dataMap[_0x43e826(0x312)]){if(_0x43e826(0x286)===_0x43e826(0x218))return _0xec54c2[_0x43e826(0x5b0)][_0x43e826(0x952)][_0x43e826(0x17d)](this);else this[_0x43e826(0x882)]($dataMap[_0x43e826(0x312)]);}const _0x4d4d2d=$dataTroops[_0x46f15f];if(_0x4d4d2d){let _0x49bb21=DataManager[_0x43e826(0x4b0)](_0x4d4d2d['id']);this['parseForcedGameTroopSettingsCoreEngine'](_0x49bb21);}},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x882)]=function(_0x27d1cf){const _0xd6c5c8=_0x163f4f;if(!_0x27d1cf)return;if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this[_0xd6c5c8(0x442)]='FV';else{if(_0x27d1cf['match'](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))_0xd6c5c8(0x5e7)!==_0xd6c5c8(0x8e8)?this[_0xd6c5c8(0x442)]='SV':this[_0xd6c5c8(0x2f8)]={'duration':0x0,'wholeDuration':0x0,'type':'LINEAR','targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0xd6c5c8(0x701)]['x'],'targetScaleY':this[_0xd6c5c8(0x701)]['y'],'targetOpacity':this['opacity'],'targetBackOpacity':this[_0xd6c5c8(0x94d)],'targetContentsOpacity':this[_0xd6c5c8(0x890)]};else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x5957cc=String(RegExp['$1']);if(_0x5957cc[_0xd6c5c8(0x4be)](/(?:FRONTVIEW|FRONT VIEW|FV)/i)){if(_0xd6c5c8(0x3be)===_0xd6c5c8(0x3be))this[_0xd6c5c8(0x442)]='FV';else{const _0x4eba55=_0xd6c5c8(0xea);this[_0xd6c5c8(0x982)][_0xd6c5c8(0x816)](_0x163642)[_0xd6c5c8(0x816)]('')[_0xd6c5c8(0x816)](null);const _0x302051=this['_storedMapText']['join']('\x0a\x0a\x0a\x0a\x0a')['trim']();_0x39391a[_0xd6c5c8(0x28e)]['ExportString'](_0x302051,_0x4eba55,!![]),_0x589e1d[_0xd6c5c8(0x60e)][_0xd6c5c8(0x113)]=!![];}}else _0x5957cc['match'](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0xd6c5c8(0x442)]='SV');}}}if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:DTB)>/i))this[_0xd6c5c8(0x2ec)]=0x0;else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:TPB|ATB)[ ]ACTIVE>/i))_0xd6c5c8(0x1cb)===_0xd6c5c8(0x4e6)?_0x163a82[_0xd6c5c8(0x28e)][_0xd6c5c8(0x9d4)][_0xd6c5c8(0x17d)](this):this[_0xd6c5c8(0x2ec)]=0x1;else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0xd6c5c8(0x2ec)]=0x2;else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:CTB)>/i))Imported[_0xd6c5c8(0x118)]&&(this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x25c));else{if(_0x27d1cf['match'](/<(?:STB)>/i))Imported[_0xd6c5c8(0x4ff)]&&(this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x41c));else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:BTB)>/i))Imported[_0xd6c5c8(0x9df)]&&(this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x954));else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:FTB)>/i))_0xd6c5c8(0x6ac)!=='fFkHy'?this[_0xd6c5c8(0x17f)]=[]:Imported[_0xd6c5c8(0x197)]&&(this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x32e));else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:OTB)>/i)){if(Imported[_0xd6c5c8(0x59a)]){if(_0xd6c5c8(0x32d)===_0xd6c5c8(0x166))for(let _0x36b52e=0x1;_0x36b52e<=0x64;_0x36b52e++){_0x141462[_0xd6c5c8(0x3eb)](_0x36b52e);}else this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x5c0);}}else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:ETB)>/i)){if(Imported['VisuMZ_2_BattleSystemETB']){if('DMgSo'!=='DMgSo'){const _0x2a739b=_0x19565e[_0xd6c5c8(0x655)];let _0x175f1a=_0x4746b4['TextStr'];if(['','Untitled'][_0xd6c5c8(0x2b2)](_0x175f1a))_0x175f1a=_0x389eae['TextJS'][_0xd6c5c8(0x17d)](this);const _0x173683=_0x43d6bc[_0xd6c5c8(0x7fb)][_0xd6c5c8(0x17d)](this),_0x3e061f=_0x19659d[_0xd6c5c8(0x105)][_0xd6c5c8(0x17d)](this);this[_0xd6c5c8(0x508)](_0x175f1a,_0x2a739b,_0x173683,_0x3e061f),this['setHandler'](_0x2a739b,_0x1faaa5[_0xd6c5c8(0x584)][_0xd6c5c8(0x295)](this,_0x3e061f));}else this[_0xd6c5c8(0x2ec)]='ETB';}}else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:PTB)>/i)){if(_0xd6c5c8(0x728)===_0xd6c5c8(0x638))this['_drawTextShadow'](_0x5caaa6,_0x3c42df,_0x5846c7,_0x57e34b);else{if(Imported[_0xd6c5c8(0x761)]){if(_0xd6c5c8(0x6be)!==_0xd6c5c8(0x6be)){if(!_0x32a2c1['isPlaytest']())return;if(!_0x3f1b69[_0xd6c5c8(0x7b4)]())return;if(!_0x1813a0)return;if(_0x5e93cf[_0xd6c5c8(0x305)]()<=0x0)return;_0x77bd94['ConvertParams'](_0xb7745b,_0x56533f);const _0x4a457a='Map%1'[_0xd6c5c8(0x889)](_0x31531a['mapId']()[_0xd6c5c8(0x5bb)](0x3)),_0x293a1d=_0x1da97f['CoreEngine']['ExtractStrFromMap'](_0x4f6cc2[_0xd6c5c8(0x305)]());_0x558256[_0xd6c5c8(0x28e)][_0xd6c5c8(0x8bb)](_0x293a1d,_0x4a457a,!![]);}else this[_0xd6c5c8(0x2ec)]='PTB';}}}else{if(_0x27d1cf[_0xd6c5c8(0x4be)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x11b2fc=String(RegExp['$1']);if(_0x11b2fc['match'](/DTB/i)){if('WRFjm'===_0xd6c5c8(0xf4))this['_forcedBattleSys']=0x0;else{if(_0x32d26b[_0xd6c5c8(0x92a)]())_0x3b430d[_0xd6c5c8(0x5b5)](_0x22cb7b);}}else{if(_0x11b2fc[_0xd6c5c8(0x4be)](/(?:TPB|ATB)[ ]ACTIVE/i))_0xd6c5c8(0x3ee)==='TwApc'?this[_0xd6c5c8(0x2ec)]=0x1:(_0x569afb[_0xd6c5c8(0x28e)][_0xd6c5c8(0x751)][_0xd6c5c8(0x17d)](this),this['process_VisuMZ_CoreEngine_RegExp'](),this['process_VisuMZ_CoreEngine_Notetags'](),this['process_VisuMZ_CoreEngine_Settings'](),this[_0xd6c5c8(0x961)](),this[_0xd6c5c8(0x7a1)](),this['process_VisuMZ_CoreEngine_ControllerButtons'](),_0x49f678['ParseAllNotetags']());else{if(_0x11b2fc[_0xd6c5c8(0x4be)](/(?:TPB|ATB)[ ]WAIT/i))this[_0xd6c5c8(0x2ec)]=0x2;else{if(_0x11b2fc[_0xd6c5c8(0x4be)](/CTB/i))Imported[_0xd6c5c8(0x118)]&&(this['_forcedBattleSys']=_0xd6c5c8(0x25c));else{if(_0x11b2fc['match'](/STB/i))_0xd6c5c8(0x310)!==_0xd6c5c8(0x4cc)?Imported['VisuMZ_2_BattleSystemSTB']&&(_0xd6c5c8(0x18e)===_0xd6c5c8(0x912)?(this[_0xd6c5c8(0x393)](),_0x5d3225[_0xd6c5c8(0x5e2)]()):this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x41c)):_0x23496c[_0xd6c5c8(0x118)]&&(this['_forcedBattleSys']=_0xd6c5c8(0x25c));else{if(_0x11b2fc[_0xd6c5c8(0x4be)](/BTB/i))Imported[_0xd6c5c8(0x9df)]&&(this['_forcedBattleSys']='BTB');else{if(_0x11b2fc[_0xd6c5c8(0x4be)](/FTB/i))_0xd6c5c8(0x8af)==='verrX'?this[_0xd6c5c8(0x30e)]=_0x53a46e:Imported[_0xd6c5c8(0x197)]&&(this[_0xd6c5c8(0x2ec)]='FTB');else{if(_0x11b2fc[_0xd6c5c8(0x4be)](/OTB/i))Imported[_0xd6c5c8(0x59a)]&&(this['_forcedBattleSys']=_0xd6c5c8(0x5c0));else{if(_0x11b2fc['match'](/ETB/i))Imported[_0xd6c5c8(0x291)]&&(this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x74c));else _0x11b2fc[_0xd6c5c8(0x4be)](/PTB/i)&&(Imported[_0xd6c5c8(0x761)]&&(this[_0xd6c5c8(0x2ec)]=_0xd6c5c8(0x9a2)));}}}}}}}}}}}}}}}}}}}},Game_Temp[_0x163f4f(0x5b0)]['createFauxAnimationQueue']=function(){const _0x16d389=_0x163f4f;this[_0x16d389(0x888)]=[];},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x769)]=function(_0xf30401,_0xe721d0,_0x457317,_0x17a627){const _0x32d430=_0x163f4f;if(!this['showFauxAnimations']())return;_0x457317=_0x457317||![],_0x17a627=_0x17a627||![];if($dataAnimations[_0xe721d0]){const _0x459223={'targets':_0xf30401,'animationId':_0xe721d0,'mirror':_0x457317,'mute':_0x17a627};this[_0x32d430(0x888)][_0x32d430(0x9ca)](_0x459223);for(const _0x1ef146 of _0xf30401){_0x1ef146[_0x32d430(0x217)]&&_0x1ef146[_0x32d430(0x217)]();}}},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x522)]=function(){return!![];},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x836)]=function(){const _0xd27cef=_0x163f4f;return this[_0xd27cef(0x888)]['shift']();},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x663)]=function(){const _0x51bbc7=_0x163f4f;this[_0x51bbc7(0x17f)]=[];},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x8e3)]=function(_0x1ef43e,_0x275943,_0x4a5aee,_0x86da83,_0x145f87){const _0x5a9873=_0x163f4f;if(!this['showPointAnimations']())return;_0x86da83=_0x86da83||![],_0x145f87=_0x145f87||![];if($dataAnimations[_0x4a5aee]){const _0x3e663a={'x':_0x1ef43e,'y':_0x275943,'animationId':_0x4a5aee,'mirror':_0x86da83,'mute':_0x145f87};this[_0x5a9873(0x17f)]['push'](_0x3e663a);}},Game_Temp['prototype'][_0x163f4f(0x549)]=function(){return!![];},Game_Temp[_0x163f4f(0x5b0)][_0x163f4f(0x2e2)]=function(){const _0x4285e8=_0x163f4f;return this[_0x4285e8(0x17f)][_0x4285e8(0x531)]();},VisuMZ['CoreEngine'][_0x163f4f(0x137)]=Game_System[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Game_System['prototype'][_0x163f4f(0x52c)]=function(){const _0x3f8881=_0x163f4f;VisuMZ['CoreEngine'][_0x3f8881(0x137)][_0x3f8881(0x17d)](this),this[_0x3f8881(0x263)]();},Game_System[_0x163f4f(0x5b0)][_0x163f4f(0x263)]=function(){const _0x5419eb=_0x163f4f;this['_CoreEngineSettings']={'SideView':$dataSystem['optSideView'],'BattleSystem':this['initialBattleSystem'](),'FontSize':$dataSystem[_0x5419eb(0x653)][_0x5419eb(0x2a4)],'Padding':0xc};},Game_System[_0x163f4f(0x5b0)][_0x163f4f(0x784)]=function(){const _0x192715=_0x163f4f;if($gameTemp[_0x192715(0x442)]==='SV')return!![];else{if($gameTemp[_0x192715(0x442)]==='FV')return![];}if(this[_0x192715(0x460)]===undefined)this[_0x192715(0x263)]();if(this['_CoreEngineSettings'][_0x192715(0x97a)]===undefined)this[_0x192715(0x263)]();return this[_0x192715(0x460)]['SideView'];},Game_System['prototype']['setSideView']=function(_0x195f79){const _0x31bcc5=_0x163f4f;if(this[_0x31bcc5(0x460)]===undefined)this[_0x31bcc5(0x263)]();if(this[_0x31bcc5(0x460)][_0x31bcc5(0x97a)]===undefined)this['initCoreEngine']();this[_0x31bcc5(0x460)][_0x31bcc5(0x97a)]=_0x195f79;},Game_System[_0x163f4f(0x5b0)][_0x163f4f(0x200)]=function(){const _0x1025a6=_0x163f4f;if(this[_0x1025a6(0x460)]===undefined)this[_0x1025a6(0x263)]();this[_0x1025a6(0x460)][_0x1025a6(0x6fc)]=this['initialBattleSystem']();},Game_System[_0x163f4f(0x5b0)][_0x163f4f(0x9b6)]=function(){const _0x52c6b7=_0x163f4f,_0xceacbe=(VisuMZ['CoreEngine'][_0x52c6b7(0x403)]['BattleSystem']||'DATABASE')['toUpperCase']()['trim']();return VisuMZ[_0x52c6b7(0x28e)][_0x52c6b7(0x698)](_0xceacbe);},Game_System['prototype'][_0x163f4f(0x61c)]=function(){const _0x533263=_0x163f4f;if($gameTemp[_0x533263(0x2ec)]!==undefined)return $gameTemp[_0x533263(0x2ec)];if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();if(this[_0x533263(0x460)][_0x533263(0x6fc)]===undefined)this[_0x533263(0x200)]();return this[_0x533263(0x460)]['BattleSystem'];},Game_System[_0x163f4f(0x5b0)][_0x163f4f(0x647)]=function(_0x546fb9){const _0x318612=_0x163f4f;if(this[_0x318612(0x460)]===undefined)this[_0x318612(0x263)]();if(this[_0x318612(0x460)][_0x318612(0x6fc)]===undefined)this['resetBattleSystem']();this[_0x318612(0x460)]['BattleSystem']=_0x546fb9;},Game_System['prototype'][_0x163f4f(0x212)]=function(){const _0x53af08=_0x163f4f;if(this[_0x53af08(0x460)]===undefined)this[_0x53af08(0x263)]();if(this[_0x53af08(0x460)][_0x53af08(0x6ca)]===undefined)this['initCoreEngine']();return this[_0x53af08(0x460)]['FontSize'];},Game_System['prototype'][_0x163f4f(0x19b)]=function(_0x834aa2){const _0x2ca881=_0x163f4f;if(this[_0x2ca881(0x460)]===undefined)this['initCoreEngine']();if(this[_0x2ca881(0x460)]['TimeProgress']===undefined)this[_0x2ca881(0x263)]();this[_0x2ca881(0x460)]['FontSize']=_0x834aa2;},Game_System[_0x163f4f(0x5b0)]['windowPadding']=function(){const _0x5813fd=_0x163f4f;if(this[_0x5813fd(0x460)]===undefined)this['initCoreEngine']();if(this[_0x5813fd(0x460)][_0x5813fd(0x5b3)]===undefined)this[_0x5813fd(0x263)]();return this['_CoreEngineSettings'][_0x5813fd(0x5b3)];},Game_System['prototype'][_0x163f4f(0x3f9)]=function(_0x4bdc5c){const _0x18932b=_0x163f4f;if(this[_0x18932b(0x460)]===undefined)this[_0x18932b(0x263)]();if(this['_CoreEngineSettings'][_0x18932b(0x2c8)]===undefined)this[_0x18932b(0x263)]();this[_0x18932b(0x460)][_0x18932b(0x5b3)]=_0x4bdc5c;},VisuMZ['CoreEngine'][_0x163f4f(0x302)]=Game_Screen[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Game_Screen[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(){const _0x1311d6=_0x163f4f;VisuMZ['CoreEngine'][_0x1311d6(0x302)][_0x1311d6(0x17d)](this),this[_0x1311d6(0x6eb)]();},Game_Screen[_0x163f4f(0x5b0)][_0x163f4f(0x6eb)]=function(){const _0x2047fe=_0x163f4f,_0x22c770=VisuMZ['CoreEngine'][_0x2047fe(0x403)][_0x2047fe(0x969)];this['_coreEngineShakeStyle']=_0x22c770?.[_0x2047fe(0x4c3)]||'random';},Game_Screen[_0x163f4f(0x5b0)][_0x163f4f(0x979)]=function(){const _0x59c308=_0x163f4f;if(this[_0x59c308(0x60b)]===undefined)this['initCoreEngineScreenShake']();return this[_0x59c308(0x60b)];},Game_Screen[_0x163f4f(0x5b0)]['setCoreEngineScreenShakeStyle']=function(_0x8edd26){const _0x54e0e2=_0x163f4f;if(this[_0x54e0e2(0x60b)]===undefined)this[_0x54e0e2(0x6eb)]();this[_0x54e0e2(0x60b)]=_0x8edd26['toLowerCase']()[_0x54e0e2(0x376)]();},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x5b8)]=function(){const _0x31db52=_0x163f4f;if($gameParty['inBattle']())return![];return this[_0x31db52(0x561)]()&&this['onlyfilename']()[_0x31db52(0x572)](0x0)==='!';},Game_Picture[_0x163f4f(0x5b0)]['onlyfilename']=function(){const _0x11b7a4=_0x163f4f;return this[_0x11b7a4(0x9f4)][_0x11b7a4(0x824)]('/')[_0x11b7a4(0x9cc)]();},VisuMZ[_0x163f4f(0x28e)]['Game_Picture_x']=Game_Picture[_0x163f4f(0x5b0)]['x'],Game_Picture[_0x163f4f(0x5b0)]['x']=function(){const _0x23dc1b=_0x163f4f;return this['isMapScrollLinked']()?this[_0x23dc1b(0x959)]():'Gttng'===_0x23dc1b(0x3ce)?_0xa67cdf[_0x23dc1b(0x1c2)]:VisuMZ[_0x23dc1b(0x28e)][_0x23dc1b(0x714)][_0x23dc1b(0x17d)](this);},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x959)]=function(){const _0x4c2edb=_0x163f4f,_0x314478=$gameMap['displayX']()*$gameMap['tileWidth']();return(this['_x']-_0x314478)*$gameScreen[_0x4c2edb(0x99f)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1ff)]=Game_Picture[_0x163f4f(0x5b0)]['y'],Game_Picture[_0x163f4f(0x5b0)]['y']=function(){const _0x5994b0=_0x163f4f;if(this[_0x5994b0(0x5b8)]())return this['yScrollLinkedOffset']();else{if(_0x5994b0(0x423)!==_0x5994b0(0x4a0))return VisuMZ[_0x5994b0(0x28e)]['Game_Picture_y'][_0x5994b0(0x17d)](this);else this['_forcedBattleSys']=_0x5994b0(0x954);}},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x582)]=function(){const _0x3ba216=_0x163f4f,_0x4c8a74=$gameMap[_0x3ba216(0x8d4)]()*$gameMap[_0x3ba216(0x8b6)]();return(this['_y']-_0x4c8a74)*$gameScreen[_0x3ba216(0x99f)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x91a)]=Game_Picture[_0x163f4f(0x5b0)]['scaleX'],Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0xa09)]=function(){const _0x16db04=_0x163f4f;let _0x399665=VisuMZ[_0x16db04(0x28e)][_0x16db04(0x91a)][_0x16db04(0x17d)](this);if(this[_0x16db04(0x5b8)]()){if('ZELat'===_0x16db04(0x8f5))_0x399665*=$gameScreen[_0x16db04(0x99f)]();else return this[_0x16db04(0x1a6)]['canEquip'](_0x2659d7);}return _0x399665;},VisuMZ['CoreEngine']['Game_Picture_scaleY']=Game_Picture[_0x163f4f(0x5b0)]['scaleY'],Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x7c0)]=function(){const _0xeb54=_0x163f4f;let _0x3509a5=VisuMZ['CoreEngine'][_0xeb54(0x4c1)]['call'](this);return this[_0xeb54(0x5b8)]()&&(_0x3509a5*=$gameScreen[_0xeb54(0x99f)]()),_0x3509a5;},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x278)]=function(_0x1a99a3){this['_coreEasingType']=_0x1a99a3;},VisuMZ[_0x163f4f(0x28e)]['Game_Picture_calcEasing']=Game_Picture[_0x163f4f(0x5b0)]['calcEasing'],Game_Picture['prototype'][_0x163f4f(0x377)]=function(_0x41f567){const _0x185fa6=_0x163f4f;return this[_0x185fa6(0x7b8)]=this[_0x185fa6(0x7b8)]||0x0,[0x0,0x1,0x2,0x3]['includes'](this['_coreEasingType'])?_0x185fa6(0x594)===_0x185fa6(0x594)?VisuMZ[_0x185fa6(0x28e)][_0x185fa6(0x21b)]['call'](this,_0x41f567):_0x636f7c[_0x185fa6(0x5b0)][_0x185fa6(0x156)]['call'](this,_0x45f570):VisuMZ['ApplyEasing'](_0x41f567,this[_0x185fa6(0x7b8)]);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x57e)]=Game_Picture['prototype'][_0x163f4f(0x3d6)],Game_Picture[_0x163f4f(0x5b0)]['initRotation']=function(){const _0x585f56=_0x163f4f;VisuMZ['CoreEngine']['Game_Picture_initRotation']['call'](this),this[_0x585f56(0x94a)]();},Game_Picture[_0x163f4f(0x5b0)]['initRotationCoreEngine']=function(){const _0x37687b=_0x163f4f;this[_0x37687b(0x9c4)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':_0x37687b(0x972)};},VisuMZ['CoreEngine']['Game_Picture_angle']=Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x95b)],Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x95b)]=function(){const _0x4e12d1=_0x163f4f;let _0x1a1537=VisuMZ[_0x4e12d1(0x28e)][_0x4e12d1(0x17a)][_0x4e12d1(0x17d)](this);return _0x1a1537+=this[_0x4e12d1(0x322)](),_0x1a1537;},Game_Picture['prototype'][_0x163f4f(0x322)]=function(){const _0x121720=_0x163f4f;if(this[_0x121720(0x9c4)]===undefined)this['initRotationCoreEngine']();return this[_0x121720(0x9c4)][_0x121720(0x6cf)]||0x0;},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x34d)]=function(_0x2702f9,_0x54460d,_0x27eda2){const _0x5e2086=_0x163f4f;if(this[_0x5e2086(0x9c4)]===undefined)this[_0x5e2086(0x94a)]();this[_0x5e2086(0x9c4)][_0x5e2086(0x36a)]=_0x2702f9||0x0,this['_anglePlus']['duration']=_0x54460d||0x0,this[_0x5e2086(0x9c4)][_0x5e2086(0x237)]=_0x54460d||0x0,this[_0x5e2086(0x9c4)][_0x5e2086(0x2a8)]=_0x27eda2||_0x5e2086(0x972);if(_0x54460d<=0x0){if(_0x5e2086(0x798)!==_0x5e2086(0x798)){_0x6fa4bf['CoreEngine'][_0x5e2086(0x7d1)][_0x5e2086(0x17d)](this);if(!_0x53f06f[_0x5e2086(0x85b)])this[_0x5e2086(0x630)]();}else this['_anglePlus']['current']=this[_0x5e2086(0x9c4)][_0x5e2086(0x36a)];}},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x67c)]=function(_0x2202ce,_0xb2b7b7,_0x57068f){const _0x36f815=_0x163f4f;if(this[_0x36f815(0x9c4)]===undefined)this[_0x36f815(0x94a)]();this[_0x36f815(0x9c4)][_0x36f815(0x36a)]+=_0x2202ce||0x0,this[_0x36f815(0x9c4)][_0x36f815(0x171)]=_0xb2b7b7||0x0,this['_anglePlus'][_0x36f815(0x237)]=_0xb2b7b7||0x0,this[_0x36f815(0x9c4)][_0x36f815(0x2a8)]=_0x57068f||'Linear',_0xb2b7b7<=0x0&&(this[_0x36f815(0x9c4)][_0x36f815(0x6cf)]=this[_0x36f815(0x9c4)][_0x36f815(0x36a)]);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1b8)]=Game_Picture[_0x163f4f(0x5b0)]['updateRotation'],Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x79c)]=function(){const _0x1886e0=_0x163f4f;VisuMZ['CoreEngine'][_0x1886e0(0x1b8)][_0x1886e0(0x17d)](this),this[_0x1886e0(0x153)]();},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x153)]=function(){const _0xb1e056=_0x163f4f;if(this[_0xb1e056(0x9c4)]===undefined)this[_0xb1e056(0x94a)]();const _0x21bd30=this[_0xb1e056(0x9c4)];if(_0x21bd30[_0xb1e056(0x171)]<=0x0)return;_0x21bd30[_0xb1e056(0x6cf)]=this[_0xb1e056(0x66b)](_0x21bd30['current'],_0x21bd30[_0xb1e056(0x36a)]),_0x21bd30['duration']--,_0x21bd30[_0xb1e056(0x171)]<=0x0&&(_0xb1e056(0x1f1)!==_0xb1e056(0x1f1)?this[_0xb1e056(0x45d)]():_0x21bd30['current']=_0x21bd30[_0xb1e056(0x36a)]);},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x66b)]=function(_0x265ea6,_0x1049f6){const _0x5b75d1=_0x163f4f,_0x2eb3ca=this[_0x5b75d1(0x9c4)],_0x55bd34=_0x2eb3ca[_0x5b75d1(0x2a8)],_0x2642fb=_0x2eb3ca[_0x5b75d1(0x171)],_0x2d0e50=_0x2eb3ca[_0x5b75d1(0x237)],_0x4681da=VisuMZ['ApplyEasing']((_0x2d0e50-_0x2642fb)/_0x2d0e50,_0x55bd34),_0x138b9c=VisuMZ[_0x5b75d1(0x32a)]((_0x2d0e50-_0x2642fb+0x1)/_0x2d0e50,_0x55bd34),_0x225193=(_0x265ea6-_0x1049f6*_0x4681da)/(0x1-_0x4681da);return _0x225193+(_0x1049f6-_0x225193)*_0x138b9c;},VisuMZ['CoreEngine'][_0x163f4f(0x89e)]=Game_Action[_0x163f4f(0x5b0)]['itemHit'],Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x136)]=function(_0x14c1f8){const _0x571ea2=_0x163f4f;return VisuMZ[_0x571ea2(0x28e)][_0x571ea2(0x403)][_0x571ea2(0x7f7)][_0x571ea2(0x96c)]?this[_0x571ea2(0x3a7)](_0x14c1f8):VisuMZ[_0x571ea2(0x28e)]['Game_Action_itemHit']['call'](this,_0x14c1f8);},Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x3a7)]=function(_0x279eba){const _0x26bfa5=_0x163f4f,_0x69a62d=this[_0x26bfa5(0x130)](_0x279eba),_0x273d8e=this[_0x26bfa5(0x80c)](_0x279eba),_0x3f37d4=this['targetEvaRate'](_0x279eba);return _0x69a62d*(_0x273d8e-_0x3f37d4);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x11b)]=Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x591)],Game_Action['prototype'][_0x163f4f(0x591)]=function(_0x27f859){const _0x40670e=_0x163f4f;return VisuMZ[_0x40670e(0x28e)][_0x40670e(0x403)][_0x40670e(0x7f7)][_0x40670e(0x96c)]?0x0:'GhYpg'!==_0x40670e(0x8a6)?VisuMZ[_0x40670e(0x28e)]['Game_Action_itemEva'][_0x40670e(0x17d)](this,_0x27f859):_0x40670e(0x41c);},Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x130)]=function(_0x2a9f94){const _0x5812ea=_0x163f4f;return this[_0x5812ea(0x427)]()[_0x5812ea(0x34f)]*0.01;},Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x80c)]=function(_0x19e104){const _0x6bb3d3=_0x163f4f;if(VisuMZ[_0x6bb3d3(0x28e)]['Settings'][_0x6bb3d3(0x7f7)][_0x6bb3d3(0x532)]&&this['isItem']())return 0x1;if(this['isPhysical']()){if(_0x6bb3d3(0x1be)==='tYxtn'){if(this[_0x6bb3d3(0x460)]===_0x8d9b76)this[_0x6bb3d3(0x263)]();this[_0x6bb3d3(0x460)][_0x6bb3d3(0x6fc)]=this['initialBattleSystem']();}else return VisuMZ[_0x6bb3d3(0x28e)][_0x6bb3d3(0x403)][_0x6bb3d3(0x7f7)]['AccuracyBoost']&&this['subject']()['isActor']()?this['subject']()[_0x6bb3d3(0x52d)]+0.05:_0x6bb3d3(0x64e)===_0x6bb3d3(0x64e)?this['subject']()[_0x6bb3d3(0x52d)]:_0xc16871[_0x6bb3d3(0x5ec)](_0x6bb3d3(0x5f1));}else return 0x1;},Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x4a7)]=function(_0x51ee9c){const _0x3e528a=_0x163f4f;if(this[_0x3e528a(0x1cc)]()['isActor']()===_0x51ee9c[_0x3e528a(0x4d7)]())return 0x0;if(this[_0x3e528a(0x1f3)]())return VisuMZ[_0x3e528a(0x28e)][_0x3e528a(0x403)][_0x3e528a(0x7f7)][_0x3e528a(0x532)]&&_0x51ee9c[_0x3e528a(0x384)]()?_0x51ee9c[_0x3e528a(0x276)]-0.05:_0x51ee9c[_0x3e528a(0x276)];else return this[_0x3e528a(0x5ce)]()?_0x51ee9c[_0x3e528a(0x1c2)]:0x0;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x2f4)]=Game_Action[_0x163f4f(0x5b0)]['updateLastTarget'],Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x2d5)]=function(_0x5407d0){const _0x16e5e3=_0x163f4f;VisuMZ[_0x16e5e3(0x28e)][_0x16e5e3(0x2f4)][_0x16e5e3(0x17d)](this,_0x5407d0);if(VisuMZ[_0x16e5e3(0x28e)]['Settings'][_0x16e5e3(0x7f7)][_0x16e5e3(0x96c)])return;const _0x17de2d=_0x5407d0[_0x16e5e3(0xa00)]();_0x17de2d['missed']&&(0x1-this[_0x16e5e3(0x591)](_0x5407d0)>this[_0x16e5e3(0x136)](_0x5407d0)&&(_0x17de2d['missed']=![],_0x17de2d[_0x16e5e3(0x4c0)]=!![]));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1cf)]=Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x8ab)],Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x8ab)]=function(){const _0x29e7d8=_0x163f4f;this['_cache']={},VisuMZ[_0x29e7d8(0x28e)][_0x29e7d8(0x1cf)][_0x29e7d8(0x17d)](this);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x437)]=Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x595)],Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x595)]=function(){const _0xb8d3b9=_0x163f4f;this[_0xb8d3b9(0x84c)]={},VisuMZ['CoreEngine'][_0xb8d3b9(0x437)][_0xb8d3b9(0x17d)](this);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x2d6)]=function(_0x297802){const _0x402f49=_0x163f4f;return this[_0x402f49(0x84c)]=this[_0x402f49(0x84c)]||{},this[_0x402f49(0x84c)][_0x297802]!==undefined;},Game_BattlerBase[_0x163f4f(0x5b0)]['paramPlus']=function(_0x3131b4){const _0x114462=_0x163f4f,_0x4e9abf=(_0x144a36,_0x3eff53)=>{const _0x2f7b61=_0x3c87;if('fMTrF'==='tvhRU')return _0x746df7&&this[_0x2f7b61(0x1a6)]?this[_0x2f7b61(0x1a6)][_0x2f7b61(0x8a5)](_0x48a3f4):_0x50ad65['CoreEngine'][_0x2f7b61(0x53f)][_0x2f7b61(0x17d)](this,_0x343fb0);else{if(!_0x3eff53)return _0x144a36;if(_0x3eff53[_0x2f7b61(0x312)][_0x2f7b61(0x4be)](VisuMZ[_0x2f7b61(0x28e)][_0x2f7b61(0x895)]['paramPlus'][_0x3131b4])){var _0x586b40=Number(RegExp['$1']);_0x144a36+=_0x586b40;}if(_0x3eff53[_0x2f7b61(0x312)]['match'](VisuMZ[_0x2f7b61(0x28e)]['RegExp']['paramPlusJS'][_0x3131b4])){if('ewOze'!==_0x2f7b61(0x2bd)){var _0x20e42e=String(RegExp['$1']);try{_0x144a36+=eval(_0x20e42e);}catch(_0x4d4ea0){if(_0x2f7b61(0x11d)!==_0x2f7b61(0xf9)){if($gameTemp['isPlaytest']())console['log'](_0x4d4ea0);}else this[_0x2f7b61(0x3c1)]();}}else _0xea555+=_0x2f7b61(0x6b0)[_0x2f7b61(0x889)](_0x3d3add[_0x2f7b61(0x346)][0x0]);}return _0x144a36;}};return this['traitObjects']()[_0x114462(0x22b)](_0x4e9abf,this[_0x114462(0x34a)][_0x3131b4]);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x980)]=function(_0x45e9e3){const _0x2ad7f8=_0x163f4f;var _0x2ce0c7=_0x2ad7f8(0x78c)+(this[_0x2ad7f8(0x4d7)]()?'Actor':_0x2ad7f8(0x8f6))+_0x2ad7f8(0x739)+_0x45e9e3;if(this[_0x2ad7f8(0x2d6)](_0x2ce0c7))return this['_cache'][_0x2ce0c7];this['_cache'][_0x2ce0c7]=eval(VisuMZ[_0x2ad7f8(0x28e)][_0x2ad7f8(0x403)]['Param'][_0x2ce0c7]);const _0x250d2f=(_0x5532b0,_0x1e06d6)=>{const _0x3ef363=_0x2ad7f8;if(_0x3ef363(0x96e)===_0x3ef363(0x96e)){if(!_0x1e06d6)return _0x5532b0;if(_0x1e06d6['note']['match'](VisuMZ[_0x3ef363(0x28e)][_0x3ef363(0x895)][_0x3ef363(0x980)][_0x45e9e3])){if(_0x3ef363(0x845)==='nIkna'){var _0x9eb41=Number(RegExp['$1']);if(_0x9eb41===0x0)_0x9eb41=Number[_0x3ef363(0x4e7)];_0x5532b0=Math[_0x3ef363(0x69d)](_0x5532b0,_0x9eb41);}else{const _0x55c9a8=_0x4d9ebd[_0x3ef363(0x28e)][_0x3ef363(0x403)][_0x3ef363(0x7b1)];if(!_0x55c9a8)return![];if(_0x14ecc8[_0x3ef363(0x3b4)]>=_0x3ef363(0x917)&&!_0x55c9a8[_0x3ef363(0x812)])return![];return _0x55c9a8[_0x3ef363(0x606)];}}if(_0x1e06d6[_0x3ef363(0x312)][_0x3ef363(0x4be)](VisuMZ[_0x3ef363(0x28e)]['RegExp'][_0x3ef363(0x5a8)][_0x45e9e3])){if(_0x3ef363(0x12e)!==_0x3ef363(0xeb)){var _0x36f2b8=String(RegExp['$1']);try{if(_0x3ef363(0x2dd)===_0x3ef363(0x803)){const _0x26eab5=_0x5484a1[_0x290d42],_0x444921=_0x3ef363(0x694)[_0x3ef363(0x889)](_0x1e17cb);for(const _0x45cabb of _0x26eab5){_0x3f015d[_0x3ef363(0x23e)](_0x444921,_0x45cabb);}}else _0x5532b0=Math[_0x3ef363(0x69d)](_0x5532b0,Number(eval(_0x36f2b8)));}catch(_0x26118f){if($gameTemp[_0x3ef363(0x92a)]())console[_0x3ef363(0x5b5)](_0x26118f);}}else{if(!this[_0x3ef363(0x746)]())return;this['refresh']();}}return _0x5532b0;}else this[_0x3ef363(0x245)]();};if(this[_0x2ad7f8(0x84c)][_0x2ce0c7]===0x0)this[_0x2ad7f8(0x84c)][_0x2ce0c7]=Number[_0x2ad7f8(0x4e7)];return this['_cache'][_0x2ce0c7]=this['traitObjects']()[_0x2ad7f8(0x22b)](_0x250d2f,this[_0x2ad7f8(0x84c)][_0x2ce0c7]),this[_0x2ad7f8(0x84c)][_0x2ce0c7];},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x4c9)]=function(_0x402faf){const _0x2886c4=_0x163f4f,_0x21767c=this['traitsPi'](Game_BattlerBase[_0x2886c4(0x66d)],_0x402faf),_0x4d057a=(_0x2d8b32,_0x50c393)=>{const _0x54611e=_0x2886c4;if(!_0x50c393)return _0x2d8b32;if(_0x50c393['note'][_0x54611e(0x4be)](VisuMZ[_0x54611e(0x28e)][_0x54611e(0x895)][_0x54611e(0x8d7)][_0x402faf])){var _0x5267e3=Number(RegExp['$1'])/0x64;_0x2d8b32*=_0x5267e3;}if(_0x50c393[_0x54611e(0x312)][_0x54611e(0x4be)](VisuMZ[_0x54611e(0x28e)][_0x54611e(0x895)][_0x54611e(0x6ad)][_0x402faf])){var _0x5267e3=Number(RegExp['$1']);_0x2d8b32*=_0x5267e3;}if(_0x50c393[_0x54611e(0x312)]['match'](VisuMZ[_0x54611e(0x28e)][_0x54611e(0x895)][_0x54611e(0x9c6)][_0x402faf])){if(_0x54611e(0x1d6)!==_0x54611e(0x1d6))return _0x7f3362[_0x54611e(0x720)][_0x54611e(0x7e7)]['call'](this);else{var _0xc8e68e=String(RegExp['$1']);try{_0x2d8b32*=eval(_0xc8e68e);}catch(_0x37f25b){if($gameTemp['isPlaytest']())console[_0x54611e(0x5b5)](_0x37f25b);}}}return _0x2d8b32;};return this[_0x2886c4(0x9c8)]()[_0x2886c4(0x22b)](_0x4d057a,_0x21767c);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x84b)]=function(_0x5463be){const _0x230e26=_0x163f4f,_0x409001=(_0x9ae805,_0x3227e7)=>{const _0x4c4edc=_0x3c87;if('VxwTS'===_0x4c4edc(0x3f4)){if(!_0x3227e7)return _0x9ae805;if(_0x3227e7[_0x4c4edc(0x312)][_0x4c4edc(0x4be)](VisuMZ[_0x4c4edc(0x28e)][_0x4c4edc(0x895)][_0x4c4edc(0x7c9)][_0x5463be])){var _0x142774=Number(RegExp['$1']);_0x9ae805+=_0x142774;}if(_0x3227e7[_0x4c4edc(0x312)]['match'](VisuMZ[_0x4c4edc(0x28e)][_0x4c4edc(0x895)][_0x4c4edc(0x19c)][_0x5463be])){var _0x126727=String(RegExp['$1']);try{_0x9ae805+=eval(_0x126727);}catch(_0x3c4ff5){if($gameTemp['isPlaytest']())console[_0x4c4edc(0x5b5)](_0x3c4ff5);}}return _0x9ae805;}else _0x1521ea[_0x4c4edc(0x56c)]=_0x1da9eb,_0x569d79[_0x4c4edc(0x9e0)]=_0x376ae4[_0x4c4edc(0x8bd)][_0x4c4edc(0x6e4)](),_0x15b49b['updateBgmParameters'](_0x10f3e8),_0x3133de[_0x4c4edc(0x907)](_0x432d97,_0x3d1165[_0x4c4edc(0x9e0)]),_0x2c8621['_bgmBuffer'][_0x4c4edc(0x25f)](_0x4d91aa[_0x4c4edc(0x9e0)]);};return this[_0x230e26(0x9c8)]()[_0x230e26(0x22b)](_0x409001,0x0);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x357)]=function(_0x79bfcd){const _0x3c3ff9=_0x163f4f;let _0x592c8a=_0x3c3ff9(0x357)+_0x79bfcd+_0x3c3ff9(0x7a9);if(this[_0x3c3ff9(0x2d6)](_0x592c8a))return this[_0x3c3ff9(0x84c)][_0x592c8a];return this['_cache'][_0x592c8a]=Math[_0x3c3ff9(0x7f1)](VisuMZ['CoreEngine'][_0x3c3ff9(0x403)][_0x3c3ff9(0x67d)][_0x3c3ff9(0x9e4)][_0x3c3ff9(0x17d)](this,_0x79bfcd)),this['_cache'][_0x592c8a];},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x85c)]=function(_0x33d2de){const _0x50b6d7=_0x163f4f,_0x4042a3=(_0x1309f8,_0x51cf63)=>{const _0x45a754=_0x3c87;if(!_0x51cf63)return _0x1309f8;if(_0x51cf63[_0x45a754(0x312)][_0x45a754(0x4be)](VisuMZ[_0x45a754(0x28e)][_0x45a754(0x895)][_0x45a754(0x8ac)][_0x33d2de])){if(_0x45a754(0x1a1)!==_0x45a754(0x1a1))_0x31856a[_0x45a754(0x9c3)]();else{var _0x1e74b6=Number(RegExp['$1'])/0x64;_0x1309f8+=_0x1e74b6;}}if(_0x51cf63[_0x45a754(0x312)][_0x45a754(0x4be)](VisuMZ[_0x45a754(0x28e)][_0x45a754(0x895)][_0x45a754(0x238)][_0x33d2de])){var _0x1e74b6=Number(RegExp['$1']);_0x1309f8+=_0x1e74b6;}if(_0x51cf63[_0x45a754(0x312)]['match'](VisuMZ['CoreEngine'][_0x45a754(0x895)]['xparamPlusJS'][_0x33d2de])){if('mwdqy'!=='mwdqy')_0x53c5cd+=_0x192cd1+_0x45a754(0x924);else{var _0x373388=String(RegExp['$1']);try{_0x1309f8+=eval(_0x373388);}catch(_0x36c8f7){if($gameTemp[_0x45a754(0x92a)]())console[_0x45a754(0x5b5)](_0x36c8f7);}}}return _0x1309f8;};return this[_0x50b6d7(0x9c8)]()['reduce'](_0x4042a3,0x0);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x3e0)]=function(_0x48f33c){const _0x59eb00=_0x163f4f,_0x48fc3b=(_0x5eb8f3,_0x3de5fc)=>{const _0xfbd2b2=_0x3c87;if(!_0x3de5fc)return _0x5eb8f3;if(_0x3de5fc['note'][_0xfbd2b2(0x4be)](VisuMZ[_0xfbd2b2(0x28e)]['RegExp']['xparamRate1'][_0x48f33c])){if(_0xfbd2b2(0x5ae)==='xjXkX'){var _0x2c355d=Number(RegExp['$1'])/0x64;_0x5eb8f3*=_0x2c355d;}else _0xf25a12[_0xfbd2b2(0x5b0)][_0xfbd2b2(0x3bb)]['call'](this),this[_0xfbd2b2(0x9fc)]();}if(_0x3de5fc['note'][_0xfbd2b2(0x4be)](VisuMZ[_0xfbd2b2(0x28e)][_0xfbd2b2(0x895)]['xparamRate2'][_0x48f33c])){if(_0xfbd2b2(0x580)==='qhNwk'){const _0x968dcd=this[_0xfbd2b2(0x48b)],_0x4e88cd=this[_0xfbd2b2(0x903)],_0x493f35=0x18,_0x3c5add=_0x493f35/0x2,_0x278605=0x60+_0x493f35,_0x4fef74=0x0+_0x493f35;this[_0xfbd2b2(0x612)]['bitmap']=this[_0xfbd2b2(0x68f)],this[_0xfbd2b2(0x612)][_0xfbd2b2(0x740)]['x']=0.5,this[_0xfbd2b2(0x612)][_0xfbd2b2(0x740)]['y']=0.5,this['_downArrowSprite']['setFrame'](_0x278605+_0x3c5add,_0x4fef74+_0x3c5add+_0x493f35,_0x493f35,_0x3c5add),this[_0xfbd2b2(0x612)][_0xfbd2b2(0x7c5)](_0x4c1b88[_0xfbd2b2(0x7f1)](_0x968dcd/0x2),_0x3179ec[_0xfbd2b2(0x7f1)](_0x4e88cd-_0x3c5add)),this[_0xfbd2b2(0x81b)][_0xfbd2b2(0x2dc)]=this[_0xfbd2b2(0x68f)],this[_0xfbd2b2(0x81b)][_0xfbd2b2(0x740)]['x']=0.5,this['_upArrowSprite'][_0xfbd2b2(0x740)]['y']=0.5,this[_0xfbd2b2(0x81b)][_0xfbd2b2(0x62d)](_0x278605+_0x3c5add,_0x4fef74,_0x493f35,_0x3c5add),this[_0xfbd2b2(0x81b)][_0xfbd2b2(0x7c5)](_0x33ade8['round'](_0x968dcd/0x2),_0x46e58f['round'](_0x3c5add));}else{var _0x2c355d=Number(RegExp['$1']);_0x5eb8f3*=_0x2c355d;}}if(_0x3de5fc[_0xfbd2b2(0x312)]['match'](VisuMZ[_0xfbd2b2(0x28e)][_0xfbd2b2(0x895)][_0xfbd2b2(0x8f1)][_0x48f33c])){var _0x362c82=String(RegExp['$1']);try{_0xfbd2b2(0x621)===_0xfbd2b2(0x621)?_0x5eb8f3*=eval(_0x362c82):(this[_0xfbd2b2(0x859)]()['centerX']&&(this[_0xfbd2b2(0x93a)]=this[_0xfbd2b2(0x859)]()[_0xfbd2b2(0x2fc)]),this[_0xfbd2b2(0x859)]()[_0xfbd2b2(0x8f3)]&&(this[_0xfbd2b2(0x87e)]=this[_0xfbd2b2(0x859)]()[_0xfbd2b2(0x8d4)]));}catch(_0x5074f4){if('ymhZe'!==_0xfbd2b2(0x745))_0x452c48[_0xfbd2b2(0x28e)]['Scene_Map_createSpriteset']['call'](this),_0x35574b=this[_0xfbd2b2(0x518)];else{if($gameTemp[_0xfbd2b2(0x92a)]())console[_0xfbd2b2(0x5b5)](_0x5074f4);}}}return _0x5eb8f3;};return this[_0x59eb00(0x9c8)]()[_0x59eb00(0x22b)](_0x48fc3b,0x1);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x235)]=function(_0x2e2d07){const _0xc2982e=_0x163f4f,_0x539fbb=(_0x4e3b85,_0x5ca458)=>{const _0x487b68=_0x3c87;if(!_0x5ca458)return _0x4e3b85;if(_0x5ca458[_0x487b68(0x312)][_0x487b68(0x4be)](VisuMZ[_0x487b68(0x28e)][_0x487b68(0x895)][_0x487b68(0x732)][_0x2e2d07])){if(_0x487b68(0x203)===_0x487b68(0x203)){var _0x1739b1=Number(RegExp['$1'])/0x64;_0x4e3b85+=_0x1739b1;}else this['_cancelButton']['y']=0x0;}if(_0x5ca458[_0x487b68(0x312)][_0x487b68(0x4be)](VisuMZ['CoreEngine'][_0x487b68(0x895)]['xparamFlat2'][_0x2e2d07])){if(_0x487b68(0x64d)!=='PEBRh'){const _0x7c839=_0x2ae2fd[_0x487b68(0x8b4)],_0x511c63=0.5;if(_0x7c839[0x0]<-_0x511c63)return!![];if(_0x7c839[0x0]>_0x511c63)return!![];if(_0x7c839[0x1]<-_0x511c63)return!![];if(_0x7c839[0x1]>_0x511c63)return!![];return![];}else{var _0x1739b1=Number(RegExp['$1']);_0x4e3b85+=_0x1739b1;}}if(_0x5ca458['note'][_0x487b68(0x4be)](VisuMZ[_0x487b68(0x28e)][_0x487b68(0x895)][_0x487b68(0x6df)][_0x2e2d07])){if(_0x487b68(0x5a6)!==_0x487b68(0x3c8)){var _0x275ca0=String(RegExp['$1']);try{_0x487b68(0x3db)===_0x487b68(0x2cb)?(_0x269e1f[_0x487b68(0x28e)][_0x487b68(0x145)][_0x487b68(0x17d)](this),_0x4b5f25=this[_0x487b68(0x518)]):_0x4e3b85+=eval(_0x275ca0);}catch(_0x4df712){if($gameTemp[_0x487b68(0x92a)]())console['log'](_0x4df712);}}else{_0x32b7e2['prototype']['update'][_0x487b68(0x17d)](this),this[_0x487b68(0x929)]();if(this[_0x487b68(0x1a6)])this[_0x487b68(0x475)]();else this[_0x487b68(0x759)]!==''&&(this[_0x487b68(0x759)]='');}}return _0x4e3b85;};return this[_0xc2982e(0x9c8)]()['reduce'](_0x539fbb,0x0);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x603)]=function(_0x13b43e){const _0x20e5fd=_0x163f4f;let _0x17cb00=_0x20e5fd(0x603)+_0x13b43e+'Total';if(this['checkCacheKey'](_0x17cb00))return this[_0x20e5fd(0x84c)][_0x17cb00];return this[_0x20e5fd(0x84c)][_0x17cb00]=VisuMZ['CoreEngine']['Settings'][_0x20e5fd(0x67d)]['XParameterFormula']['call'](this,_0x13b43e),this[_0x20e5fd(0x84c)][_0x17cb00];},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x849)]=function(_0x5c3537){const _0x79a341=_0x163f4f,_0x23551a=(_0x12740d,_0x1c0175)=>{const _0x1f9583=_0x3c87;if(!_0x1c0175)return _0x12740d;if(_0x1c0175[_0x1f9583(0x312)][_0x1f9583(0x4be)](VisuMZ['CoreEngine'][_0x1f9583(0x895)][_0x1f9583(0x12b)][_0x5c3537])){if(_0x1f9583(0x911)!==_0x1f9583(0x613)){var _0x4af813=Number(RegExp['$1'])/0x64;_0x12740d+=_0x4af813;}else _0x3a24bb[_0x1f9583(0x59a)]&&(this['_forcedBattleSys']='OTB');}if(_0x1c0175[_0x1f9583(0x312)][_0x1f9583(0x4be)](VisuMZ['CoreEngine'][_0x1f9583(0x895)][_0x1f9583(0x764)][_0x5c3537])){var _0x4af813=Number(RegExp['$1']);_0x12740d+=_0x4af813;}if(_0x1c0175[_0x1f9583(0x312)]['match'](VisuMZ['CoreEngine']['RegExp'][_0x1f9583(0x5eb)][_0x5c3537])){if(_0x1f9583(0x472)!==_0x1f9583(0x8f0)){var _0x3e153d=String(RegExp['$1']);try{_0x12740d+=eval(_0x3e153d);}catch(_0x31eb5f){if($gameTemp[_0x1f9583(0x92a)]())console[_0x1f9583(0x5b5)](_0x31eb5f);}}else this[_0x1f9583(0x96f)]()&&_0x105f94&&this[_0x1f9583(0x999)]()===0x1&&this['index']()===this[_0x1f9583(0x8ca)]()-0x1?this[_0x1f9583(0x9b5)](0x0):_0x5a0da3[_0x1f9583(0x28e)]['Window_Selectable_cursorDown'][_0x1f9583(0x17d)](this,_0xaccb51);}return _0x12740d;};return this[_0x79a341(0x9c8)]()[_0x79a341(0x22b)](_0x23551a,0x0);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x86a)]=function(_0x78ebdf){const _0x5a14ec=_0x163f4f,_0x593b85=(_0x243c7a,_0x5783d1)=>{const _0x2884cb=_0x3c87;if(!_0x5783d1)return _0x243c7a;if(_0x5783d1['note']['match'](VisuMZ['CoreEngine']['RegExp'][_0x2884cb(0x2f3)][_0x78ebdf])){if(_0x2884cb(0x488)!==_0x2884cb(0x244)){var _0x29f71b=Number(RegExp['$1'])/0x64;_0x243c7a*=_0x29f71b;}else _0x2799df[_0x2884cb(0x5b0)][_0x2884cb(0x993)][_0x2884cb(0x17d)](this),!_0x532e65[_0x2884cb(0x33b)](_0x59ebff)&&(this[_0x2884cb(0x518)][_0x2884cb(0x168)](),this[_0x2884cb(0x98a)][_0x2884cb(0x5cb)](),this['_windowLayer'][_0x2884cb(0x4c2)]=![],_0x55ef69['snapForBackground']()),_0x5c42d2['clearZoom'](),this[_0x2884cb(0x5c9)]();}if(_0x5783d1[_0x2884cb(0x312)][_0x2884cb(0x4be)](VisuMZ[_0x2884cb(0x28e)][_0x2884cb(0x895)][_0x2884cb(0x64f)][_0x78ebdf])){var _0x29f71b=Number(RegExp['$1']);_0x243c7a*=_0x29f71b;}if(_0x5783d1[_0x2884cb(0x312)][_0x2884cb(0x4be)](VisuMZ[_0x2884cb(0x28e)]['RegExp']['sparamRateJS'][_0x78ebdf])){var _0x3f3dc7=String(RegExp['$1']);try{if('tBurx'===_0x2884cb(0x94b))_0x243c7a*=eval(_0x3f3dc7);else return _0x9b7ce3[_0x2884cb(0x28e)][_0x2884cb(0x11b)]['call'](this,_0x609b7c);}catch(_0x1450ad){if(_0x2884cb(0x5c1)===_0x2884cb(0x5c1)){if($gameTemp['isPlaytest']())console[_0x2884cb(0x5b5)](_0x1450ad);}else for(const _0x2f77c1 of _0x3b5ffb){if(_0x2f77c1&&_0x2f77c1[_0x2884cb(0x893)]){if(this[_0x2884cb(0x657)](_0x2f77c1))return!![];if(this[_0x2884cb(0x871)](_0x2f77c1))return!![];}}}}return _0x243c7a;};return this[_0x5a14ec(0x9c8)]()[_0x5a14ec(0x22b)](_0x593b85,0x1);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x12d)]=function(_0x1f95aa){const _0x49155c=_0x163f4f,_0x599b00=(_0x5aeda8,_0x210045)=>{const _0x1b1232=_0x3c87;if(_0x1b1232(0x957)!==_0x1b1232(0x498)){if(!_0x210045)return _0x5aeda8;if(_0x210045[_0x1b1232(0x312)][_0x1b1232(0x4be)](VisuMZ[_0x1b1232(0x28e)][_0x1b1232(0x895)]['sparamFlat1'][_0x1f95aa])){var _0xb4ae33=Number(RegExp['$1'])/0x64;_0x5aeda8+=_0xb4ae33;}if(_0x210045[_0x1b1232(0x312)]['match'](VisuMZ[_0x1b1232(0x28e)][_0x1b1232(0x895)][_0x1b1232(0x520)][_0x1f95aa])){var _0xb4ae33=Number(RegExp['$1']);_0x5aeda8+=_0xb4ae33;}if(_0x210045['note'][_0x1b1232(0x4be)](VisuMZ[_0x1b1232(0x28e)]['RegExp'][_0x1b1232(0x61b)][_0x1f95aa])){var _0x38b0a1=String(RegExp['$1']);try{if(_0x1b1232(0x2e9)===_0x1b1232(0x430))return _0x4ad55c[_0x1b1232(0x720)][_0x1b1232(0x306)][_0x1b1232(0x17d)](this);else _0x5aeda8+=eval(_0x38b0a1);}catch(_0x49f9b3){if($gameTemp[_0x1b1232(0x92a)]())console['log'](_0x49f9b3);}}return _0x5aeda8;}else{const _0x109cd1=this[_0x1b1232(0x480)](_0x43c7b8),_0x282a22=new(_0x109cd1?_0x48ca04:_0x57ca18)();_0x282a22['targetObjects']=_0x1eee96,_0x282a22[_0x1b1232(0x36e)](_0x1690b8,_0x517b50,_0x30feba,_0x1e848a),_0x282a22['setMute'](_0x1539e9),this[_0x1b1232(0x530)](_0x282a22),this[_0x1b1232(0x4ec)][_0x1b1232(0x9ca)](_0x282a22);}};return this['traitObjects']()[_0x49155c(0x22b)](_0x599b00,0x0);},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x165)]=function(_0x1595a5){const _0x4d2cdd=_0x163f4f;let _0x56c5ca=_0x4d2cdd(0x165)+_0x1595a5+'Total';if(this['checkCacheKey'](_0x56c5ca))return this[_0x4d2cdd(0x84c)][_0x56c5ca];return this[_0x4d2cdd(0x84c)][_0x56c5ca]=VisuMZ[_0x4d2cdd(0x28e)]['Settings'][_0x4d2cdd(0x67d)][_0x4d2cdd(0xa07)]['call'](this,_0x1595a5),this[_0x4d2cdd(0x84c)][_0x56c5ca];},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x2af)]=function(_0x3e2c76,_0x178b26){const _0x5d8ab7=_0x163f4f;if(typeof paramId==='number')return this['param'](_0x3e2c76);_0x3e2c76=String(_0x3e2c76||'')['toUpperCase']();if(_0x3e2c76===_0x5d8ab7(0x9f7))return this[_0x5d8ab7(0x357)](0x0);if(_0x3e2c76===_0x5d8ab7(0x408))return this[_0x5d8ab7(0x357)](0x1);if(_0x3e2c76===_0x5d8ab7(0x65f))return this[_0x5d8ab7(0x357)](0x2);if(_0x3e2c76===_0x5d8ab7(0x3c2))return this['param'](0x3);if(_0x3e2c76===_0x5d8ab7(0x92c))return this[_0x5d8ab7(0x357)](0x4);if(_0x3e2c76==='MDF')return this[_0x5d8ab7(0x357)](0x5);if(_0x3e2c76==='AGI')return this[_0x5d8ab7(0x357)](0x6);if(_0x3e2c76===_0x5d8ab7(0x18d))return this[_0x5d8ab7(0x357)](0x7);if(_0x3e2c76===_0x5d8ab7(0x1a0))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x603)](0x0)*0x64))+'%':this['xparam'](0x0);if(_0x3e2c76==='EVA')return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x603)](0x1)*0x64))+'%':this['xparam'](0x1);if(_0x3e2c76===_0x5d8ab7(0x213))return _0x178b26?String(Math['round'](this[_0x5d8ab7(0x603)](0x2)*0x64))+'%':this[_0x5d8ab7(0x603)](0x2);if(_0x3e2c76===_0x5d8ab7(0x80a))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x603)](0x3)*0x64))+'%':this[_0x5d8ab7(0x603)](0x3);if(_0x3e2c76==='MEV')return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this['xparam'](0x4)*0x64))+'%':this[_0x5d8ab7(0x603)](0x4);if(_0x3e2c76===_0x5d8ab7(0x52f))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this['xparam'](0x5)*0x64))+'%':this[_0x5d8ab7(0x603)](0x5);if(_0x3e2c76===_0x5d8ab7(0x61e))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x603)](0x6)*0x64))+'%':this[_0x5d8ab7(0x603)](0x6);if(_0x3e2c76===_0x5d8ab7(0x98f))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x603)](0x7)*0x64))+'%':this[_0x5d8ab7(0x603)](0x7);if(_0x3e2c76===_0x5d8ab7(0x58e))return _0x178b26?String(Math['round'](this[_0x5d8ab7(0x603)](0x8)*0x64))+'%':this[_0x5d8ab7(0x603)](0x8);if(_0x3e2c76===_0x5d8ab7(0x13b))return _0x178b26?String(Math['round'](this[_0x5d8ab7(0x603)](0x9)*0x64))+'%':this[_0x5d8ab7(0x603)](0x9);if(_0x3e2c76===_0x5d8ab7(0x2ff))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x165)](0x0)*0x64))+'%':this['sparam'](0x0);if(_0x3e2c76==='GRD')return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this['sparam'](0x1)*0x64))+'%':this[_0x5d8ab7(0x165)](0x1);if(_0x3e2c76===_0x5d8ab7(0xa01))return _0x178b26?String(Math['round'](this['sparam'](0x2)*0x64))+'%':this[_0x5d8ab7(0x165)](0x2);if(_0x3e2c76===_0x5d8ab7(0x852))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x165)](0x3)*0x64))+'%':this[_0x5d8ab7(0x165)](0x3);if(_0x3e2c76===_0x5d8ab7(0x991))return _0x178b26?String(Math['round'](this['sparam'](0x4)*0x64))+'%':this[_0x5d8ab7(0x165)](0x4);if(_0x3e2c76==='TCR')return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x165)](0x5)*0x64))+'%':this[_0x5d8ab7(0x165)](0x5);if(_0x3e2c76==='PDR')return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x165)](0x6)*0x64))+'%':this[_0x5d8ab7(0x165)](0x6);if(_0x3e2c76===_0x5d8ab7(0x80e))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x165)](0x7)*0x64))+'%':this['sparam'](0x7);if(_0x3e2c76===_0x5d8ab7(0x3a4))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this['sparam'](0x8)*0x64))+'%':this[_0x5d8ab7(0x165)](0x8);if(_0x3e2c76===_0x5d8ab7(0x861))return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](this[_0x5d8ab7(0x165)](0x9)*0x64))+'%':this[_0x5d8ab7(0x165)](0x9);if(VisuMZ[_0x5d8ab7(0x28e)][_0x5d8ab7(0x85a)][_0x3e2c76]){const _0x5e60d8=VisuMZ[_0x5d8ab7(0x28e)]['CustomParamAbb'][_0x3e2c76],_0x832301=this[_0x5e60d8];if(VisuMZ[_0x5d8ab7(0x28e)][_0x5d8ab7(0x6bb)][_0x3e2c76]===_0x5d8ab7(0x534)){if(_0x5d8ab7(0x160)!==_0x5d8ab7(0x754))return _0x832301;else this[_0x5d8ab7(0x458)](),this[_0x5d8ab7(0x16f)](),_0xd570e8[_0x5d8ab7(0x28e)][_0x5d8ab7(0x514)][_0x5d8ab7(0x17d)](this,_0x51ba1f);}else return _0x178b26?String(Math[_0x5d8ab7(0x7f1)](_0x832301*0x64))+'%':_0x832301;}return'';},Game_BattlerBase[_0x163f4f(0x5b0)][_0x163f4f(0x391)]=function(){const _0x201acb=_0x163f4f;return this['isAlive']()&&this[_0x201acb(0x990)]<this[_0x201acb(0x7ad)]*VisuMZ[_0x201acb(0x28e)][_0x201acb(0x403)]['Param'][_0x201acb(0x6ae)];},Game_Battler[_0x163f4f(0x5b0)][_0x163f4f(0x195)]=function(){const _0x4b3f67=_0x163f4f;SoundManager[_0x4b3f67(0x2c6)](),this['requestMotion'](_0x4b3f67(0x19e));},VisuMZ['CoreEngine'][_0x163f4f(0x99a)]=Game_Actor['prototype'][_0x163f4f(0x402)],Game_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x402)]=function(_0x6aa8a3){const _0x4f4b02=_0x163f4f;if(this[_0x4f4b02(0x15a)]>0x63)return this[_0x4f4b02(0x7a8)](_0x6aa8a3);return VisuMZ[_0x4f4b02(0x28e)][_0x4f4b02(0x99a)][_0x4f4b02(0x17d)](this,_0x6aa8a3);},Game_Actor['prototype'][_0x163f4f(0x7a8)]=function(_0x58f3ad){const _0x68590c=_0x163f4f,_0x385ebd=this[_0x68590c(0x50d)]()[_0x68590c(0x937)][_0x58f3ad][0x63],_0x2ede69=this[_0x68590c(0x50d)]()[_0x68590c(0x937)][_0x58f3ad][0x62];return _0x385ebd+(_0x385ebd-_0x2ede69)*(this[_0x68590c(0x15a)]-0x63);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x5ac)]=Game_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x33e)],Game_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x33e)]=function(_0x19b054,_0x518764){const _0x370b3e=_0x163f4f;$gameTemp['_changingClass']=!![],VisuMZ[_0x370b3e(0x28e)][_0x370b3e(0x5ac)][_0x370b3e(0x17d)](this,_0x19b054,_0x518764),$gameTemp[_0x370b3e(0x85b)]=undefined;},VisuMZ['CoreEngine']['Game_Actor_levelUp']=Game_Actor['prototype'][_0x163f4f(0x2e8)],Game_Actor['prototype'][_0x163f4f(0x2e8)]=function(){const _0x5b2adf=_0x163f4f;VisuMZ['CoreEngine']['Game_Actor_levelUp']['call'](this);if(!$gameTemp[_0x5b2adf(0x85b)])this[_0x5b2adf(0x630)]();},Game_Actor['prototype'][_0x163f4f(0x630)]=function(){const _0x3723b0=_0x163f4f;this[_0x3723b0(0x84c)]={};if(VisuMZ[_0x3723b0(0x28e)]['Settings'][_0x3723b0(0x7f7)]['LevelUpFullHp'])this[_0x3723b0(0x990)]=this[_0x3723b0(0x7ad)];if(VisuMZ[_0x3723b0(0x28e)][_0x3723b0(0x403)][_0x3723b0(0x7f7)][_0x3723b0(0x5cd)])this[_0x3723b0(0x8fd)]=this[_0x3723b0(0x169)];},Game_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x4f2)]=function(){const _0x238d2b=_0x163f4f;if(this[_0x238d2b(0x421)]())return 0x1;const _0x305407=this['nextLevelExp']()-this['currentLevelExp'](),_0x2849b5=this[_0x238d2b(0x432)]()-this[_0x238d2b(0x88c)]();return(_0x2849b5/_0x305407)['clamp'](0x0,0x1);},Game_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x9c8)]=function(){const _0x250b30=_0x163f4f,_0x282f13=Game_Battler['prototype'][_0x250b30(0x9c8)][_0x250b30(0x17d)](this);for(const _0x5843bc of this[_0x250b30(0x9cd)]()){_0x250b30(0x5a2)==='PWWqt'?_0x2afa2a=_0x250b30(0x1a9)['format'](_0x45d64b,_0xc0a279):_0x5843bc&&(_0x250b30(0x68b)===_0x250b30(0x6cc)?_0x6e483d[_0x250b30(0x28e)][_0x250b30(0x36b)][_0x250b30(0x17d)](this):_0x282f13[_0x250b30(0x9ca)](_0x5843bc));}return _0x282f13[_0x250b30(0x9ca)](this[_0x250b30(0x50d)](),this['actor']()),_0x282f13;},Object['defineProperty'](Game_Enemy[_0x163f4f(0x5b0)],_0x163f4f(0x15a),{'get':function(){const _0x42185a=_0x163f4f;return this[_0x42185a(0x1f4)]();},'configurable':!![]}),Game_Enemy[_0x163f4f(0x5b0)][_0x163f4f(0x1f4)]=function(){const _0x5f2d66=_0x163f4f;return this[_0x5f2d66(0x664)]()['level'];},Game_Enemy[_0x163f4f(0x5b0)][_0x163f4f(0x9c3)]=function(){const _0x54d05c=_0x163f4f;!this['_repositioned']&&(this['_screenY']+=Math[_0x54d05c(0x7f1)]((Graphics['height']-0x270)/0x2),this[_0x54d05c(0x3f0)]-=Math[_0x54d05c(0x966)]((Graphics['height']-Graphics[_0x54d05c(0x37c)])/0x2),$gameSystem['isSideView']()?'ryLFH'===_0x54d05c(0x3dc)?this[_0x54d05c(0x8ec)]-=Math['floor']((Graphics['width']-Graphics['boxWidth'])/0x2):this[_0x54d05c(0x887)](_0x42712d,_0x5eabbc,_0x305f14,_0x4739e6):this[_0x54d05c(0x8ec)]+=Math['round']((Graphics[_0x54d05c(0x2a2)]-0x330)/0x2)),this[_0x54d05c(0x309)]=!![];},Game_Party[_0x163f4f(0x5b0)][_0x163f4f(0x8a2)]=function(){const _0x27cded=_0x163f4f;return VisuMZ[_0x27cded(0x28e)][_0x27cded(0x403)][_0x27cded(0x33d)]['GoldMax'];},VisuMZ['CoreEngine'][_0x163f4f(0x4d1)]=Game_Party['prototype']['consumeItem'],Game_Party['prototype'][_0x163f4f(0x37f)]=function(_0x2ed79c){const _0x508a1a=_0x163f4f;if(VisuMZ[_0x508a1a(0x28e)][_0x508a1a(0x403)][_0x508a1a(0x7f7)][_0x508a1a(0x70d)]&&DataManager[_0x508a1a(0x2b8)](_0x2ed79c))return;VisuMZ[_0x508a1a(0x28e)]['Game_Party_consumeItem'][_0x508a1a(0x17d)](this,_0x2ed79c);},Game_Party[_0x163f4f(0x5b0)][_0x163f4f(0x896)]=function(){const _0x12bdcb=_0x163f4f,_0x4682ca=VisuMZ[_0x12bdcb(0x28e)][_0x12bdcb(0x403)][_0x12bdcb(0x7f7)],_0x45b3c3=_0x4682ca[_0x12bdcb(0x44c)]??0x63;let _0x3a06d4=[];(_0x4682ca[_0x12bdcb(0x3c0)]??!![])&&(_0x3a06d4=_0x3a06d4[_0x12bdcb(0x390)]($dataItems));(_0x4682ca['BTestWeapons']??!![])&&(_0x3a06d4=_0x3a06d4[_0x12bdcb(0x390)]($dataWeapons));if(_0x4682ca[_0x12bdcb(0x790)]??!![]){if('IqVxq'===_0x12bdcb(0x69e)){const _0xeb8061=_0x158325[_0x12bdcb(0x28e)][_0x12bdcb(0x403)][_0x12bdcb(0x969)];this['_coreEngineShakeStyle']=_0xeb8061?.[_0x12bdcb(0x4c3)]||_0x12bdcb(0x214);}else _0x3a06d4=_0x3a06d4[_0x12bdcb(0x390)]($dataArmors);}for(const _0x541d8d of _0x3a06d4){if(_0x12bdcb(0x4f6)==='kxfsM'){if(!_0x541d8d)continue;if(_0x541d8d['name'][_0x12bdcb(0x376)]()<=0x0)continue;if(_0x541d8d[_0x12bdcb(0x4d6)]['match'](/-----/i))continue;this[_0x12bdcb(0x3ec)](_0x541d8d,_0x45b3c3);}else{if(!this[_0x12bdcb(0x13d)])return;const _0x4acfbf=this['scrollbar'](_0x15af92),_0x3f7627=this[_0x12bdcb(0x63c)](_0x140e5d),_0x39467c=_0x5ac3e7?'horz':_0x12bdcb(0x48f),_0x245200=_0x4ffabc?_0x12bdcb(0x205):_0x12bdcb(0x2c4);(this[_0x12bdcb(0x13d)][_0x39467c]!==_0x4acfbf||this[_0x12bdcb(0x13d)][_0x245200]!==_0x3f7627)&&(this[_0x12bdcb(0x13d)][_0x39467c]=_0x4acfbf,this[_0x12bdcb(0x13d)][_0x245200]=_0x3f7627,this['refreshScrollBarBitmap'](_0x521acf,_0x4acfbf,_0x3f7627));}}},VisuMZ['CoreEngine'][_0x163f4f(0xa11)]=Game_Troop[_0x163f4f(0x5b0)]['setup'],Game_Troop['prototype']['setup']=function(_0x26cc37){const _0x49b224=_0x163f4f;$gameTemp[_0x49b224(0x7d3)](),$gameTemp[_0x49b224(0x1b4)](_0x26cc37),VisuMZ[_0x49b224(0x28e)][_0x49b224(0xa11)][_0x49b224(0x17d)](this,_0x26cc37);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x379)]=Game_Map['prototype']['setup'],Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x36e)]=function(_0x3371f2){const _0x5c7cec=_0x163f4f;VisuMZ[_0x5c7cec(0x28e)][_0x5c7cec(0x379)]['call'](this,_0x3371f2),this[_0x5c7cec(0x763)](),this[_0x5c7cec(0x54c)](_0x3371f2);},Game_Map['prototype'][_0x163f4f(0x54c)]=function(){const _0x126edc=_0x163f4f;this['_hideTileShadows']=VisuMZ[_0x126edc(0x28e)][_0x126edc(0x403)][_0x126edc(0x7f7)][_0x126edc(0x90f)]||![];const _0x8464c2=VisuMZ[_0x126edc(0x28e)]['Settings'][_0x126edc(0x7b1)],_0x5a186b=$dataMap?$dataMap[_0x126edc(0x312)]||'':'';if(_0x5a186b[_0x126edc(0x4be)](/<SHOW TILE SHADOWS>/i))this['_hideTileShadows']=![];else _0x5a186b[_0x126edc(0x4be)](/<HIDE TILE SHADOWS>/i)&&(this[_0x126edc(0x29e)]=!![]);if(_0x5a186b['match'](/<SCROLL LOCK X>/i))this[_0x126edc(0x859)]()[_0x126edc(0x992)]=!![],this[_0x126edc(0x859)]()[_0x126edc(0x2fc)]=_0x8464c2['DisplayLockX'];else _0x5a186b[_0x126edc(0x4be)](/<SCROLL LOCK X: (.*?)>/i)&&('gZsir'!=='gZsir'?_0x53f2cf[_0x126edc(0x31c)]('dashToggle')&&(_0x294e09[_0x126edc(0x63a)]=!_0x11ea57[_0x126edc(0x63a)],_0x1a21b8['save']()):(this[_0x126edc(0x859)]()['centerX']=!![],this[_0x126edc(0x859)]()['displayX']=Number(RegExp['$1'])));if(_0x5a186b[_0x126edc(0x4be)](/<SCROLL LOCK Y>/i))this[_0x126edc(0x859)]()[_0x126edc(0x8f3)]=!![],this[_0x126edc(0x859)]()[_0x126edc(0x8d4)]=_0x8464c2[_0x126edc(0x616)];else _0x5a186b[_0x126edc(0x4be)](/<SCROLL LOCK Y: (.*?)>/i)&&(this[_0x126edc(0x859)]()[_0x126edc(0x8f3)]=!![],this['centerCameraCheckData']()['displayY']=Number(RegExp['$1']));},Game_Map[_0x163f4f(0x5b0)]['areTileShadowsHidden']=function(){const _0x1d84df=_0x163f4f;if(this[_0x1d84df(0x29e)]===undefined)this['setupCoreEngine']();return this[_0x1d84df(0x29e)];},Game_Map['prototype'][_0x163f4f(0x763)]=function(){const _0x324e8e=_0x163f4f,_0x2de78c=VisuMZ[_0x324e8e(0x28e)][_0x324e8e(0x403)][_0x324e8e(0x7b1)];this['_centerCameraCheck']={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0x2de78c['AutoScrollLockX']){if(_0x324e8e(0x55f)===_0x324e8e(0x9d9))return _0x4871b6['CoreEngine'][_0x324e8e(0x89e)][_0x324e8e(0x17d)](this,_0x4487a9);else{const _0x11735c=Graphics['width']/this['tileWidth']();_0x11735c%0x1!==0x0&&Math[_0x324e8e(0x35f)](_0x11735c)===this[_0x324e8e(0x60a)]()&&!this[_0x324e8e(0x8fc)]()&&(this[_0x324e8e(0x2b1)][_0x324e8e(0x992)]=!![],this[_0x324e8e(0x2b1)]['displayX']=_0x2de78c['DisplayLockX']||0x0);}}if(_0x2de78c['AutoScrollLockY']){if('qAUVF'!==_0x324e8e(0x9ea)){const _0xa54d33=Graphics[_0x324e8e(0x107)]/this['tileHeight']();_0xa54d33%0x1!==0x0&&Math['ceil'](_0xa54d33)===this['height']()&&!this[_0x324e8e(0x670)]()&&(this[_0x324e8e(0x2b1)][_0x324e8e(0x8f3)]=!![],this[_0x324e8e(0x2b1)][_0x324e8e(0x8d4)]=_0x2de78c[_0x324e8e(0x616)]||0x0);}else return this[_0x324e8e(0x7b8)]=this[_0x324e8e(0x7b8)]||0x0,[0x0,0x1,0x2,0x3]['includes'](this['_coreEasingType'])?_0x12713c['CoreEngine']['Game_Picture_calcEasing'][_0x324e8e(0x17d)](this,_0x308e83):_0x5409ef[_0x324e8e(0x32a)](_0x33b813,this[_0x324e8e(0x7b8)]);}$gameScreen[_0x324e8e(0x99f)]()===0x1&&(this[_0x324e8e(0x859)]()[_0x324e8e(0x992)]&&(this[_0x324e8e(0x93a)]=this['centerCameraCheckData']()[_0x324e8e(0x2fc)]),this[_0x324e8e(0x859)]()['centerY']&&(this[_0x324e8e(0x87e)]=this[_0x324e8e(0x859)]()[_0x324e8e(0x8d4)]));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x409)]=Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x9b3)],Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x9b3)]=function(_0x23b054,_0x2cf312){const _0x5b644=_0x163f4f;VisuMZ['CoreEngine'][_0x5b644(0x409)][_0x5b644(0x17d)](this,_0x23b054,_0x2cf312);if($gameScreen[_0x5b644(0x99f)]()===0x1){!this['isLoopHorizontal']()&&this[_0x5b644(0x859)]()[_0x5b644(0x992)]&&(this[_0x5b644(0x93a)]=this[_0x5b644(0x859)]()[_0x5b644(0x2fc)]);if(!this[_0x5b644(0x670)]()&&this[_0x5b644(0x859)]()[_0x5b644(0x8f3)]){if(_0x5b644(0x935)!==_0x5b644(0x935)){this[_0x5b644(0x7df)][_0x5b644(0x3c1)]();for(let _0x1f29a3=0x1;_0x1f29a3<=0x5;_0x1f29a3++){this['drawSegment'](_0x1f29a3);}}else this[_0x5b644(0x87e)]=this['centerCameraCheckData']()[_0x5b644(0x8d4)];}}},Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x859)]=function(){const _0x3f6f83=_0x163f4f;if(this[_0x3f6f83(0x2b1)]===undefined)this[_0x3f6f83(0x763)]();return this[_0x3f6f83(0x2b1)];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x5a3)]=Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x711)],Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x711)]=function(_0x163efc){const _0x1255ef=_0x163f4f;if(this[_0x1255ef(0x859)]()[_0x1255ef(0x8f3)]&&$gameScreen[_0x1255ef(0x99f)]()===0x1){if(_0x1255ef(0x547)!=='sGibq'){const _0xc01a6e=_0x1255ef(0x576);this[_0x1255ef(0x221)]=this[_0x1255ef(0x221)]||{};if(this[_0x1255ef(0x221)][_0xc01a6e])return this[_0x1255ef(0x221)][_0xc01a6e];const _0x197388=_0x4e2e55['CoreEngine'][_0x1255ef(0x403)][_0x1255ef(0x142)][_0x1255ef(0x47f)];return this[_0x1255ef(0x1ea)](_0xc01a6e,_0x197388);}else{this[_0x1255ef(0x87e)]=this['centerCameraCheckData']()[_0x1255ef(0x8d4)];return;}}VisuMZ[_0x1255ef(0x28e)][_0x1255ef(0x5a3)]['call'](this,_0x163efc);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x87d)]=Game_Map[_0x163f4f(0x5b0)]['scrollLeft'],Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x92d)]=function(_0x376590){const _0x4b81d4=_0x163f4f;if(this[_0x4b81d4(0x859)]()[_0x4b81d4(0x992)]&&$gameScreen[_0x4b81d4(0x99f)]()===0x1){this[_0x4b81d4(0x93a)]=this[_0x4b81d4(0x859)]()[_0x4b81d4(0x2fc)];return;}VisuMZ[_0x4b81d4(0x28e)][_0x4b81d4(0x87d)][_0x4b81d4(0x17d)](this,_0x376590);},VisuMZ[_0x163f4f(0x28e)]['Game_Map_scrollRight']=Game_Map['prototype'][_0x163f4f(0x965)],Game_Map[_0x163f4f(0x5b0)]['scrollRight']=function(_0x1e8b50){const _0x478b55=_0x163f4f;if(this[_0x478b55(0x859)]()[_0x478b55(0x992)]&&$gameScreen[_0x478b55(0x99f)]()===0x1){this[_0x478b55(0x93a)]=this[_0x478b55(0x859)]()[_0x478b55(0x2fc)];return;}VisuMZ['CoreEngine'][_0x478b55(0x82e)][_0x478b55(0x17d)](this,_0x1e8b50);},VisuMZ['CoreEngine'][_0x163f4f(0x755)]=Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x8e0)],Game_Map[_0x163f4f(0x5b0)][_0x163f4f(0x8e0)]=function(_0x5662ae){const _0x2ef361=_0x163f4f;if(this[_0x2ef361(0x859)]()[_0x2ef361(0x8f3)]&&$gameScreen[_0x2ef361(0x99f)]()===0x1){if('NVuLm'===_0x2ef361(0x280)){this[_0x2ef361(0x87e)]=this[_0x2ef361(0x859)]()[_0x2ef361(0x8d4)];return;}else _0x54ef07=_0xe87aa9[_0x2ef361(0x390)](_0x1a97a4);}VisuMZ[_0x2ef361(0x28e)]['Game_Map_scrollUp'][_0x2ef361(0x17d)](this,_0x5662ae);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x504)]=Game_Character[_0x163f4f(0x5b0)][_0x163f4f(0x50b)],Game_Character[_0x163f4f(0x5b0)][_0x163f4f(0x50b)]=function(_0x3e20a9){const _0x10fd98=_0x163f4f;try{if(_0x10fd98(0x794)!==_0x10fd98(0x779))VisuMZ[_0x10fd98(0x28e)][_0x10fd98(0x504)][_0x10fd98(0x17d)](this,_0x3e20a9);else{const _0x37ab18=_0x303563[_0x10fd98(0x28e)][_0x10fd98(0x403)][_0x10fd98(0x446)];return this[_0x10fd98(0x5df)][_0x10fd98(0x6b8)]===_0x10fd98(0x995)?_0x37ab18[_0x10fd98(0x144)]||_0x10fd98(0x144):_0x37ab18[_0x10fd98(0x1fd)]||_0x10fd98(0x1fd);}}catch(_0x21ac49){if($gameTemp[_0x10fd98(0x92a)]())console['log'](_0x21ac49);}},Game_Player[_0x163f4f(0x5b0)][_0x163f4f(0x734)]=function(){const _0x1300a2=_0x163f4f,_0x5e658e=$gameMap[_0x1300a2(0x702)]();this[_0x1300a2(0x7af)]=Math[_0x1300a2(0x9a0)](_0x5e658e)+Math['randomInt'](_0x5e658e)+this['encounterStepsMinimum']();},Game_Player[_0x163f4f(0x5b0)][_0x163f4f(0x22f)]=function(){const _0x3c2bad=_0x163f4f;if($dataMap&&$dataMap[_0x3c2bad(0x312)]&&$dataMap[_0x3c2bad(0x312)]['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)){if(_0x3c2bad(0x667)!==_0x3c2bad(0x455))return Number(RegExp['$1']);else{const _0x20c72b=_0x552724[_0x3c2bad(0x5b0)]['traitObjects']['call'](this);for(const _0x6ad6e of this['equips']()){_0x6ad6e&&_0x20c72b['push'](_0x6ad6e);}return _0x20c72b[_0x3c2bad(0x9ca)](this[_0x3c2bad(0x50d)](),this[_0x3c2bad(0x699)]()),_0x20c72b;}}else return VisuMZ['CoreEngine'][_0x3c2bad(0x403)]['QoL'][_0x3c2bad(0x36d)];},VisuMZ['CoreEngine'][_0x163f4f(0x3b2)]=Game_Event[_0x163f4f(0x5b0)][_0x163f4f(0x452)],Game_Event['prototype']['isCollidedWithEvents']=function(_0x23de7a,_0x4f5469){const _0x451f6c=_0x163f4f;return this['isSmartEventCollisionOn']()?this[_0x451f6c(0x6c6)](_0x23de7a,_0x4f5469):VisuMZ[_0x451f6c(0x28e)][_0x451f6c(0x3b2)][_0x451f6c(0x17d)](this,_0x23de7a,_0x4f5469);},Game_Event[_0x163f4f(0x5b0)][_0x163f4f(0x555)]=function(){const _0x32915c=_0x163f4f;return VisuMZ[_0x32915c(0x28e)][_0x32915c(0x403)]['QoL']['SmartEventCollisionPriority'];},Game_Event[_0x163f4f(0x5b0)][_0x163f4f(0x6c6)]=function(_0x1f329e,_0x2cb456){const _0x130e47=_0x163f4f;if(!this[_0x130e47(0x24b)]())return![];else{const _0x3cc75f=$gameMap['eventsXyNt'](_0x1f329e,_0x2cb456)[_0x130e47(0x333)](_0x37bd25=>_0x37bd25[_0x130e47(0x24b)]());return _0x3cc75f[_0x130e47(0xf7)]>0x0;}},VisuMZ['CoreEngine'][_0x163f4f(0x57f)]=Game_Interpreter['prototype'][_0x163f4f(0x7c1)],Game_Interpreter[_0x163f4f(0x5b0)][_0x163f4f(0x7c1)]=function(_0x4cc0c2){const _0x5b40bf=_0x163f4f,_0x5befce=this[_0x5b40bf(0x1ed)]();if(_0x5befce[_0x5b40bf(0x4be)](/\/\/[ ]SCRIPT[ ]CALL/i)){if('EibXV'!==_0x5b40bf(0x559))_0x15bb93[_0x5b40bf(0x28e)][_0x5b40bf(0x403)][_0x5b40bf(0x7f7)][_0x5b40bf(0x665)]?this[_0x5b40bf(0x42e)]():_0x2472ef[_0x5b40bf(0x28e)][_0x5b40bf(0x682)][_0x5b40bf(0x17d)](this);else return this['runCombinedScrollingTextAsCode'](_0x5befce);}else return VisuMZ[_0x5b40bf(0x28e)][_0x5b40bf(0x57f)][_0x5b40bf(0x17d)](this,_0x4cc0c2);},Game_Interpreter['prototype'][_0x163f4f(0x1ed)]=function(){const _0x22ecc6=_0x163f4f;let _0x2f9193='',_0x3eb549=this[_0x22ecc6(0x88e)]+0x1;while(this['_list'][_0x3eb549]&&this[_0x22ecc6(0x6e3)][_0x3eb549][_0x22ecc6(0x255)]===0x195){_0x22ecc6(0x17b)==='Nbfbr'?(_0xc7432a['prototype'][_0x22ecc6(0x168)]['call'](this),this['updateKeyText']()):(_0x2f9193+=this['_list'][_0x3eb549][_0x22ecc6(0x346)][0x0]+'\x0a',_0x3eb549++);}return _0x2f9193;},Game_Interpreter['prototype'][_0x163f4f(0x397)]=function(_0x42b0ed){const _0x59c764=_0x163f4f;try{if(_0x59c764(0x2d4)===_0x59c764(0x2d4))eval(_0x42b0ed);else{var _0x1fc81d=_0x2b1ff2(_0x3427ea['$1']);_0x281c48+=_0x1fc81d;}}catch(_0x5eb5f2){$gameTemp['isPlaytest']()&&(console['log']('Show\x20Scrolling\x20Text\x20Script\x20Error'),console[_0x59c764(0x5b5)](_0x5eb5f2));}return!![];},VisuMZ['CoreEngine'][_0x163f4f(0x4de)]=Game_Interpreter['prototype']['command111'],Game_Interpreter['prototype'][_0x163f4f(0x749)]=function(_0x1376d2){const _0x1cb989=_0x163f4f;try{VisuMZ[_0x1cb989(0x28e)][_0x1cb989(0x4de)][_0x1cb989(0x17d)](this,_0x1376d2);}catch(_0x4908f0){if('rnaOk'===_0x1cb989(0xf2))$gameTemp['isPlaytest']()&&(console[_0x1cb989(0x5b5)](_0x1cb989(0x620)),console[_0x1cb989(0x5b5)](_0x4908f0)),this[_0x1cb989(0x4ce)]();else return this['isItem'](_0x27c332)&&_0x3845c0[_0x1cb989(0x4fa)]===0x2;}return!![];},VisuMZ['CoreEngine'][_0x163f4f(0x128)]=Game_Interpreter['prototype'][_0x163f4f(0x3e2)],Game_Interpreter[_0x163f4f(0x5b0)][_0x163f4f(0x3e2)]=function(_0x141bfd){const _0x6de649=_0x163f4f;try{VisuMZ[_0x6de649(0x28e)][_0x6de649(0x128)][_0x6de649(0x17d)](this,_0x141bfd);}catch(_0x448596){$gameTemp['isPlaytest']()&&(console[_0x6de649(0x5b5)](_0x6de649(0x6bf)),console[_0x6de649(0x5b5)](_0x448596));}return!![];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x857)]=Game_Interpreter[_0x163f4f(0x5b0)]['command355'],Game_Interpreter[_0x163f4f(0x5b0)][_0x163f4f(0x4fe)]=function(){const _0x3a3859=_0x163f4f;try{VisuMZ[_0x3a3859(0x28e)][_0x3a3859(0x857)][_0x3a3859(0x17d)](this);}catch(_0x580f4d){if('sRbUM'!==_0x3a3859(0x8f9))$gameTemp[_0x3a3859(0x92a)]()&&(console['log'](_0x3a3859(0x8ad)),console['log'](_0x580f4d));else{const _0x2cad49=_0x535d69[_0x3a3859(0x787)]()[_0x3a3859(0x376)](),_0x3bd987=_0x3d5b46['CoreEngine'][_0x3a3859(0x93e)][_0x2cad49];if(!_0x3bd987)return this[_0x3a3859(0x40d)](_0x24fe4a,_0x32f86c);return _0x3bd987[_0x497c03]||this[_0x3a3859(0x12c)](_0x25763c,_0x4f4952);}}return!![];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x54e)]=Game_Interpreter[_0x163f4f(0x5b0)][_0x163f4f(0x47c)],Game_Interpreter['prototype'][_0x163f4f(0x47c)]=function(_0x4f3d62){const _0x3095e3=_0x163f4f;return $gameTemp[_0x3095e3(0x320)](this),VisuMZ[_0x3095e3(0x28e)][_0x3095e3(0x54e)][_0x3095e3(0x17d)](this,_0x4f3d62);},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x5cf)]=function(){const _0x463573=_0x163f4f;return VisuMZ[_0x463573(0x28e)][_0x463573(0x403)]['UI'][_0x463573(0x486)];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x49a)]=function(){const _0x3ed719=_0x163f4f;return VisuMZ['CoreEngine'][_0x3ed719(0x403)]['UI'][_0x3ed719(0x2ee)];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x6da)]=function(){const _0x3075da=_0x163f4f;return VisuMZ['CoreEngine'][_0x3075da(0x403)]['UI'][_0x3075da(0x12a)];},Scene_Base[_0x163f4f(0x5b0)]['isRightInputMode']=function(){const _0x217831=_0x163f4f;return VisuMZ['CoreEngine'][_0x217831(0x403)]['UI']['RightMenus'];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x8d5)]=function(){const _0x374063=_0x163f4f;return VisuMZ[_0x374063(0x28e)][_0x374063(0x403)]['UI'][_0x374063(0x6de)];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x49c)]=function(){const _0x5e1936=_0x163f4f;return VisuMZ[_0x5e1936(0x28e)]['Settings']['UI'][_0x5e1936(0x596)];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x5c3)]=function(){const _0x2de304=_0x163f4f;return VisuMZ[_0x2de304(0x28e)][_0x2de304(0x403)]['Window'][_0x2de304(0x444)];},VisuMZ['CoreEngine'][_0x163f4f(0x2cc)]=Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x2bc)],Scene_Base[_0x163f4f(0x5b0)]['createWindowLayer']=function(){const _0x4c3dc1=_0x163f4f;VisuMZ[_0x4c3dc1(0x28e)]['Scene_Base_createWindowLayer'][_0x4c3dc1(0x17d)](this),this['createButtonAssistWindow'](),this[_0x4c3dc1(0x71d)](),this['_windowLayer']['x']=Math[_0x4c3dc1(0x7f1)](this[_0x4c3dc1(0x834)]['x']),this[_0x4c3dc1(0x834)]['y']=Math['round'](this[_0x4c3dc1(0x834)]['y']);},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x55e)]=function(){},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x71d)]=function(){const _0x474f48=_0x163f4f;this[_0x474f48(0x150)]=new Window_TextPopup(),this[_0x474f48(0x716)](this[_0x474f48(0x150)]);},$textPopup=function(_0x521af1){const _0x2c10ab=_0x163f4f,_0x4d5430=SceneManager[_0x2c10ab(0x60e)]['_textPopupWindow'];_0x4d5430[_0x2c10ab(0x7eb)](_0x521af1);},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x24d)]=function(){const _0x495f11=_0x163f4f;return TextManager[_0x495f11(0x2e1)](_0x495f11(0x287),_0x495f11(0x101));},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x52a)]=function(){return TextManager['getInputButtonString']('tab');},Scene_Base['prototype'][_0x163f4f(0x78e)]=function(){const _0x37ebb2=_0x163f4f;return TextManager[_0x37ebb2(0x5ec)](_0x37ebb2(0x531));},Scene_Base['prototype'][_0x163f4f(0x2a6)]=function(){const _0x1e218d=_0x163f4f;return TextManager[_0x1e218d(0x5ec)]('ok');},Scene_Base['prototype'][_0x163f4f(0x26d)]=function(){const _0x3a1462=_0x163f4f;return TextManager[_0x3a1462(0x5ec)](_0x3a1462(0x684));},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x75e)]=function(){const _0x3bb2c7=_0x163f4f;if(this[_0x3bb2c7(0x425)]&&this['_pageupButton']['visible']){if(_0x3bb2c7(0x1de)!==_0x3bb2c7(0x1de))return;else return TextManager[_0x3bb2c7(0x47d)];}else return'';},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x5e9)]=function(){return'';},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x952)]=function(){return'';},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x7a3)]=function(){return TextManager['buttonAssistOk'];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x87f)]=function(){const _0xfff45b=_0x163f4f;return TextManager[_0xfff45b(0x4b6)];},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x6b5)]=function(){return 0x0;},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x2e4)]=function(){return 0x0;},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x83a)]=function(){return 0x0;},Scene_Base['prototype'][_0x163f4f(0x1ac)]=function(){return 0x0;},Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x593)]=function(){return 0x0;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x198)]=Scene_Boot[_0x163f4f(0x5b0)]['loadSystemImages'],Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x7ba)]=function(){const _0x582f80=_0x163f4f;VisuMZ['CoreEngine'][_0x582f80(0x198)][_0x582f80(0x17d)](this),this[_0x582f80(0x3f3)]();},Scene_Boot['prototype'][_0x163f4f(0x3f3)]=function(){const _0x16fc9e=_0x163f4f,_0x1d8c47=['animations',_0x16fc9e(0x499),'battlebacks2',_0x16fc9e(0x819),_0x16fc9e(0x172),'faces',_0x16fc9e(0x741),_0x16fc9e(0x54f),_0x16fc9e(0x669),'sv_enemies',_0x16fc9e(0x7ec),_0x16fc9e(0x204),'titles1',_0x16fc9e(0x94f)];for(const _0x24d17a of _0x1d8c47){if('acORf'==='UmqwI')return 0xc0;else{const _0x395b77=VisuMZ[_0x16fc9e(0x28e)][_0x16fc9e(0x403)][_0x16fc9e(0x420)][_0x24d17a],_0x107f82=_0x16fc9e(0x694)[_0x16fc9e(0x889)](_0x24d17a);for(const _0x3a35db of _0x395b77){ImageManager[_0x16fc9e(0x23e)](_0x107f82,_0x3a35db);}}}},VisuMZ['CoreEngine'][_0x163f4f(0x3a6)]=Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x189)],Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x189)]=function(){const _0x2c9037=_0x163f4f;if(Utils[_0x2c9037(0x6dc)](_0x2c9037(0x760))&&VisuMZ['CoreEngine'][_0x2c9037(0x403)][_0x2c9037(0x7f7)][_0x2c9037(0x6c2)]){if(_0x2c9037(0xfd)===_0x2c9037(0xfd))this[_0x2c9037(0x8a0)]();else{const _0x414b08=_0x2c9037(0x58a);this[_0x2c9037(0x221)]=this[_0x2c9037(0x221)]||{};if(this['_colorCache'][_0x414b08])return this[_0x2c9037(0x221)][_0x414b08];const _0x29aeee=_0x33b849[_0x2c9037(0x28e)][_0x2c9037(0x403)][_0x2c9037(0x142)][_0x2c9037(0x974)];return this[_0x2c9037(0x1ea)](_0x414b08,_0x29aeee);}}else VisuMZ[_0x2c9037(0x28e)][_0x2c9037(0x3a6)][_0x2c9037(0x17d)](this);},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x8a0)]=function(){const _0x4d91e2=_0x163f4f;this['checkPlayerLocation'](),DataManager[_0x4d91e2(0x46a)](),SceneManager[_0x4d91e2(0x2c0)](Scene_Map);},Scene_Boot['prototype'][_0x163f4f(0x81d)]=function(){const _0x38bce8=_0x163f4f,_0x69316b=$dataSystem[_0x38bce8(0x653)][_0x38bce8(0x717)],_0x57d505=$dataSystem[_0x38bce8(0x653)][_0x38bce8(0x6f2)],_0x17993f=VisuMZ[_0x38bce8(0x28e)][_0x38bce8(0x403)]['UI'][_0x38bce8(0x6c8)];Graphics[_0x38bce8(0x2a2)]=_0x69316b-_0x17993f*0x2,Graphics[_0x38bce8(0x37c)]=_0x57d505-_0x17993f*0x2,this[_0x38bce8(0x4bc)]();},VisuMZ['CoreEngine'][_0x163f4f(0x5ef)]=Scene_Boot['prototype'][_0x163f4f(0x8ae)],Scene_Boot[_0x163f4f(0x5b0)]['updateDocumentTitle']=function(){const _0x25e7ea=_0x163f4f;this['isFullDocumentTitle']()?this[_0x25e7ea(0x245)]():VisuMZ[_0x25e7ea(0x28e)][_0x25e7ea(0x5ef)][_0x25e7ea(0x17d)](this);},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x599)]=function(){const _0x29873d=_0x163f4f;if(Scene_Title[_0x29873d(0x6b2)]==='')return![];if(Scene_Title['subtitle']===_0x29873d(0x2ba))return![];if(Scene_Title[_0x29873d(0x983)]==='')return![];if(Scene_Title[_0x29873d(0x983)]===_0x29873d(0x5cc))return![];return!![];},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x245)]=function(){const _0x1ca9e1=_0x163f4f,_0x25aff6=$dataSystem[_0x1ca9e1(0x776)],_0x3320e3=Scene_Title[_0x1ca9e1(0x6b2)]||'',_0x1d8248=Scene_Title[_0x1ca9e1(0x983)]||'',_0x11baab=VisuMZ[_0x1ca9e1(0x28e)]['Settings']['MenuLayout'][_0x1ca9e1(0x1fc)][_0x1ca9e1(0x906)],_0x552134=_0x11baab['format'](_0x25aff6,_0x3320e3,_0x1d8248);document[_0x1ca9e1(0x8c9)]=_0x552134;},Scene_Boot[_0x163f4f(0x5b0)][_0x163f4f(0x4bc)]=function(){const _0x1a89ee=_0x163f4f;if(VisuMZ[_0x1a89ee(0x28e)][_0x1a89ee(0x403)]['UI'][_0x1a89ee(0x8e1)]){if(_0x1a89ee(0x3ac)!==_0x1a89ee(0x3ac)){_0x24bd95[_0x1a89ee(0x2d3)](_0x29ce05,_0x2f46cd);const _0xc24b53=_0x4863e7[_0x1a89ee(0x30d)]||0x0;_0x4ff563[_0x1a89ee(0x916)](_0xc24b53);}else{const _0x5a8929=Graphics[_0x1a89ee(0x60a)]-Graphics[_0x1a89ee(0x2a2)]-VisuMZ[_0x1a89ee(0x28e)][_0x1a89ee(0x403)]['UI'][_0x1a89ee(0x6c8)]*0x2,_0x4bb80a=Sprite_Button[_0x1a89ee(0x5b0)][_0x1a89ee(0x7bc)][_0x1a89ee(0x17d)](this)*0x4;if(_0x5a8929>=_0x4bb80a)SceneManager[_0x1a89ee(0x904)](!![]);}}},Scene_Title[_0x163f4f(0x6b2)]=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x1fc)][_0x163f4f(0x2ba)],Scene_Title['version']=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x1fc)]['Version'],Scene_Title[_0x163f4f(0x323)]=VisuMZ[_0x163f4f(0x28e)]['Settings'][_0x163f4f(0x5c5)],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x15e)]=Scene_Title[_0x163f4f(0x5b0)][_0x163f4f(0x1c5)],Scene_Title[_0x163f4f(0x5b0)][_0x163f4f(0x1c5)]=function(){const _0x19067b=_0x163f4f;VisuMZ[_0x19067b(0x28e)]['Settings']['MenuLayout'][_0x19067b(0x1fc)][_0x19067b(0x1c5)]['call'](this);if(Scene_Title['subtitle']!==''&&Scene_Title[_0x19067b(0x6b2)]!==_0x19067b(0x2ba))this['drawGameSubtitle']();if(Scene_Title[_0x19067b(0x983)]!==''&&Scene_Title[_0x19067b(0x983)]!==_0x19067b(0x5cc))this['drawGameVersion']();},Scene_Title['prototype']['drawGameSubtitle']=function(){const _0x1022bc=_0x163f4f;VisuMZ[_0x1022bc(0x28e)]['Settings'][_0x1022bc(0x83d)][_0x1022bc(0x1fc)][_0x1022bc(0x5f8)]['call'](this);},Scene_Title['prototype']['drawGameVersion']=function(){const _0x41e5b2=_0x163f4f;VisuMZ[_0x41e5b2(0x28e)][_0x41e5b2(0x403)]['MenuLayout'][_0x41e5b2(0x1fc)][_0x41e5b2(0x964)][_0x41e5b2(0x17d)](this);},Scene_Title[_0x163f4f(0x5b0)]['createCommandWindow']=function(){const _0x2df0ed=_0x163f4f;this['createTitleButtons']();const _0xc7d41c=$dataSystem[_0x2df0ed(0x633)][_0x2df0ed(0x341)],_0x4abd30=this[_0x2df0ed(0x5f0)]();this[_0x2df0ed(0x3a3)]=new Window_TitleCommand(_0x4abd30),this[_0x2df0ed(0x3a3)][_0x2df0ed(0x50f)](_0xc7d41c);const _0x1f863e=this['commandWindowRect']();this[_0x2df0ed(0x3a3)][_0x2df0ed(0x7c5)](_0x1f863e['x'],_0x1f863e['y'],_0x1f863e[_0x2df0ed(0x60a)],_0x1f863e[_0x2df0ed(0x107)]),this['_commandWindow']['createContents'](),this['_commandWindow'][_0x2df0ed(0x595)](),this['_commandWindow'][_0x2df0ed(0x289)](),this[_0x2df0ed(0x92b)](this['_commandWindow']);},Scene_Title[_0x163f4f(0x5b0)]['commandWindowRows']=function(){const _0x2dacda=_0x163f4f;if(this['_commandWindow'])return this[_0x2dacda(0x3a3)][_0x2dacda(0x8ca)]();else{if(_0x2dacda(0x1a8)==='BFupi')return VisuMZ[_0x2dacda(0x28e)][_0x2dacda(0x403)][_0x2dacda(0x873)][_0x2dacda(0xf7)];else this[_0x2dacda(0x859)]()[_0x2dacda(0x992)]=!![],this[_0x2dacda(0x859)]()['displayX']=_0x425411(_0x2314d8['$1']);}},Scene_Title[_0x163f4f(0x5b0)][_0x163f4f(0x5f0)]=function(){const _0x295794=_0x163f4f;return VisuMZ[_0x295794(0x28e)][_0x295794(0x403)][_0x295794(0x83d)][_0x295794(0x1fc)][_0x295794(0x306)][_0x295794(0x17d)](this);},Scene_Title[_0x163f4f(0x5b0)][_0x163f4f(0x2a5)]=function(){const _0x213388=_0x163f4f;for(const _0xeee882 of Scene_Title[_0x213388(0x323)]){if(_0x213388(0x284)==='zscmO'){if(_0xd5deb['inBattle']())return;_0x269f0b[_0x213388(0x2d3)](_0x53a947,_0x393771);const _0x161d33=_0xd72d53[_0x213388(0x497)],_0x33166b=(_0xc01576[_0x213388(0x290)]||0x0)/0x64;for(const _0x28db79 of _0x161d33){const _0x26cd0c=_0x348d68[_0x213388(0x214)]()<=_0x33166b;_0x397c7b[_0x213388(0x5a7)](_0x28db79,_0x26cd0c);}}else{const _0x385405=new Sprite_TitlePictureButton(_0xeee882);this['addChild'](_0x385405);}}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x41d)]=Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Scene_Map['prototype'][_0x163f4f(0x52c)]=function(){const _0x521972=_0x163f4f;VisuMZ[_0x521972(0x28e)][_0x521972(0x41d)][_0x521972(0x17d)](this),$gameTemp[_0x521972(0x7d3)](),this[_0x521972(0x5c9)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x459)]=Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x955)],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x955)]=function(){const _0x2fa497=_0x163f4f;VisuMZ[_0x2fa497(0x28e)][_0x2fa497(0x459)][_0x2fa497(0x17d)](this),$gameTemp[_0x2fa497(0x695)]&&!$gameMessage['isBusy']()&&(this['updateMain'](),SceneManager[_0x2fa497(0x5e2)]());},Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x993)]=function(){const _0x59e658=_0x163f4f;Scene_Message[_0x59e658(0x5b0)]['terminate'][_0x59e658(0x17d)](this);if(!SceneManager[_0x59e658(0x33b)](Scene_Battle)){if(_0x59e658(0x7d0)!==_0x59e658(0x7ef))this['_spriteset'][_0x59e658(0x168)](),this[_0x59e658(0x98a)][_0x59e658(0x5cb)](),this[_0x59e658(0x834)]['visible']=![],SceneManager['snapForBackground']();else{this[_0x59e658(0x4ad)][_0x59e658(0x816)](_0x451a7a),this[_0x59e658(0x95f)](_0x159bf5);for(const _0x5479b8 of _0x22c85d[_0x59e658(0x338)]){_0x5479b8[_0x59e658(0x48c)]&&_0x5479b8[_0x59e658(0x48c)]();}_0x21f073[_0x59e658(0x374)]();}}$gameScreen[_0x59e658(0x706)](),this[_0x59e658(0x5c9)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x843)]=Scene_Map[_0x163f4f(0x5b0)]['createMenuButton'],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x297)]=function(){const _0x4d0d34=_0x163f4f;VisuMZ[_0x4d0d34(0x28e)][_0x4d0d34(0x843)]['call'](this),SceneManager[_0x4d0d34(0x5a0)]()&&this[_0x4d0d34(0x464)]();},Scene_Map['prototype']['moveMenuButtonSideButtonLayout']=function(){const _0x4bd502=_0x163f4f;this[_0x4bd502(0x6e5)]['x']=Graphics[_0x4bd502(0x2a2)]+0x4;},VisuMZ[_0x163f4f(0x28e)]['Scene_Map_updateScene']=Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x5dd)],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x5dd)]=function(){const _0x37333e=_0x163f4f;VisuMZ[_0x37333e(0x28e)][_0x37333e(0x331)][_0x37333e(0x17d)](this),this[_0x37333e(0x2c3)]();},Scene_Map[_0x163f4f(0x5b0)]['updateDashToggle']=function(){const _0x21467=_0x163f4f;if(Input['isTriggered'](_0x21467(0x91c))){if(_0x21467(0x76b)!==_0x21467(0x76b)){const _0x410983=this[_0x21467(0x765)],_0x52e519=_0x410983[_0x21467(0x23b)];_0x6a0253=_0x1ab543||0xffffffff;let _0x2a9e43=_0x2411be,_0x323653=_0x164bb5[_0x21467(0x7f1)](_0x29aafa+0x18/0x2+this[_0x21467(0x2a4)]*0.35);_0x291eaf===_0x21467(0x944)&&(_0x2a9e43+=_0x13309b/0x2),_0x1e567a==='right'&&(_0x2a9e43+=_0x3ebfc4),_0x410983[_0x21467(0x211)](),_0x410983[_0x21467(0x864)]=this[_0x21467(0x535)](),_0x410983['textAlign']=_0x1d349d,_0x410983[_0x21467(0x2ab)]=_0x21467(0x5b9),_0x410983[_0x21467(0x23b)]=0x1,this[_0x21467(0x1e8)](_0x26d4fd,_0x2a9e43,_0x323653,_0x42592a),_0x410983[_0x21467(0x23b)]=_0x52e519,this[_0x21467(0x6c0)](_0x4c1c2e,_0x2a9e43,_0x323653,_0x261f20),_0x410983[_0x21467(0x190)](),this['_baseTexture'][_0x21467(0x168)]();}else ConfigManager['alwaysDash']=!ConfigManager['alwaysDash'],ConfigManager[_0x21467(0x211)]();}},VisuMZ['CoreEngine']['Scene_Map_updateMain']=Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x393)],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x393)]=function(){const _0x14dd7e=_0x163f4f;VisuMZ[_0x14dd7e(0x28e)][_0x14dd7e(0x98c)]['call'](this),this[_0x14dd7e(0x24e)]();},Scene_Map['prototype'][_0x163f4f(0x5c9)]=function(){this['_onceParallelInterpreters']=[];},Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x24e)]=function(){const _0x4e7a26=_0x163f4f;if(!this[_0x4e7a26(0x9ba)])return;for(const _0x1d5de6 of this[_0x4e7a26(0x9ba)]){if(_0x4e7a26(0x8ea)!==_0x4e7a26(0x32f))_0x1d5de6&&_0x1d5de6[_0x4e7a26(0x168)]();else{const _0x48bd52=_0x59c2d0[_0x4e7a26(0x28e)][_0x4e7a26(0x403)]['MenuBg'][_0x4e7a26(0x78d)]??0x8;this[_0x4e7a26(0x918)]=new _0x482015['filters'][(_0x4e7a26(0x539))](_0x48bd52),this[_0x4e7a26(0x68a)]=new _0x4eb12e(),this[_0x4e7a26(0x68a)][_0x4e7a26(0x2dc)]=_0x8814e9[_0x4e7a26(0x5ea)](),this[_0x4e7a26(0x68a)][_0x4e7a26(0x470)]=[this[_0x4e7a26(0x918)]],this[_0x4e7a26(0x716)](this[_0x4e7a26(0x68a)]),this[_0x4e7a26(0x4ca)](0xc0),this[_0x4e7a26(0x4ca)](this[_0x4e7a26(0x930)]()),this[_0x4e7a26(0x21e)]();}}},Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x5c2)]=function(_0x1aced3,_0x5252fc){const _0x34549d=_0x163f4f,_0x35f98f=$dataCommonEvents[_0x1aced3];if(!_0x35f98f)return;const _0x374602=new Game_OnceParallelInterpreter();this[_0x34549d(0x52e)](_0x374602),_0x374602[_0x34549d(0x6ba)](_0x1aced3),_0x374602[_0x34549d(0x614)](_0x5252fc);},Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x52e)]=function(_0x2cacee){const _0x399c4e=_0x163f4f;this['_onceParallelInterpreters']=this[_0x399c4e(0x9ba)]||[],this[_0x399c4e(0x9ba)][_0x399c4e(0x9ca)](_0x2cacee);},Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x37d)]=function(_0x26a420){const _0x244c3a=_0x163f4f;this[_0x244c3a(0x9ba)]=this[_0x244c3a(0x9ba)]||[],this[_0x244c3a(0x9ba)][_0x244c3a(0x816)](_0x26a420);};function Game_OnceParallelInterpreter(){this['initialize'](...arguments);}Game_OnceParallelInterpreter[_0x163f4f(0x5b0)]=Object[_0x163f4f(0x3bb)](Game_Interpreter[_0x163f4f(0x5b0)]),Game_OnceParallelInterpreter[_0x163f4f(0x5b0)][_0x163f4f(0x2d2)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x163f4f(0x5b0)][_0x163f4f(0x6ba)]=function(_0x3587d4){const _0x418be2=_0x163f4f,_0x300f17=$dataCommonEvents[_0x3587d4];if(_0x300f17)this[_0x418be2(0x36e)](_0x300f17['list'],0x0);else{if(_0x418be2(0x7b2)!=='Nuzxa')this[_0x418be2(0x993)]();else{const _0x31c559=_0x5dd8c1[_0x418be2(0x13e)]();_0x31c559>_0x37d804&&(_0x10ea4d=_0x31c559,this[_0x418be2(0x897)](_0x6b35b8,_0xfc1e7f));}}},Game_OnceParallelInterpreter[_0x163f4f(0x5b0)][_0x163f4f(0x614)]=function(_0x1419e1){const _0x2b3cd3=_0x163f4f;this[_0x2b3cd3(0x362)]=_0x1419e1||0x0;},Game_OnceParallelInterpreter['prototype']['terminate']=function(){const _0x3dfeba=_0x163f4f;if(!SceneManager['isSceneMap']())return;SceneManager['_scene'][_0x3dfeba(0x37d)](this),Game_Interpreter[_0x3dfeba(0x5b0)][_0x3dfeba(0x993)][_0x3dfeba(0x17d)](this);},VisuMZ[_0x163f4f(0x28e)]['Scene_MenuBase_helpAreaTop']=Scene_MenuBase['prototype'][_0x163f4f(0x311)],Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x311)]=function(){const _0x15ea31=_0x163f4f;let _0x3d2c0c=0x0;return SceneManager[_0x15ea31(0xfa)]()?_0x3d2c0c=this[_0x15ea31(0x456)]():_0x3d2c0c=VisuMZ[_0x15ea31(0x28e)][_0x15ea31(0x51d)][_0x15ea31(0x17d)](this),_0x3d2c0c;},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x456)]=function(){const _0x2171e1=_0x163f4f;return this[_0x2171e1(0x49a)]()?this[_0x2171e1(0x7e8)]():_0x2171e1(0x6bd)!==_0x2171e1(0x6bd)?_0x51160e[_0x2171e1(0x81f)](_0x255379,'<','>'):0x0;},VisuMZ['CoreEngine'][_0x163f4f(0x752)]=Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x84e)],Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x84e)]=function(){const _0x374105=_0x163f4f;return SceneManager[_0x374105(0xfa)]()?this[_0x374105(0x398)]():VisuMZ[_0x374105(0x28e)][_0x374105(0x752)][_0x374105(0x17d)](this);},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x398)]=function(){const _0x474873=_0x163f4f;if(!this['isBottomHelpMode']()){if(_0x474873(0x4d2)!==_0x474873(0x385))return this[_0x474873(0x1d2)]();else _0x3a9985['VisuMZ_2_BattleSystemBTB']&&(this[_0x474873(0x2ec)]=_0x474873(0x954));}else{if(this['isMenuButtonAssistEnabled']()&&this[_0x474873(0x7a2)]()==='top'){if('rHDbD'!==_0x474873(0x768))this[_0x474873(0x173)][_0x474873(0x50f)](_0x585538[_0x474873(0x720)][_0x474873(0x17e)]);else return Window_ButtonAssist[_0x474873(0x5b0)][_0x474873(0x877)]();}else{if(_0x474873(0x82f)===_0x474873(0x82f))return 0x0;else _0x34d65e+=_0x55c52e+_0x474873(0x300)['format'](_0xf134e6,_0x39479f[_0x474873(0x4d6)]||_0x474873(0x424))+_0x30be35;}}},VisuMZ[_0x163f4f(0x28e)]['Scene_MenuBase_mainAreaHeight']=Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x830)],Scene_MenuBase['prototype'][_0x163f4f(0x830)]=function(){const _0x2264b6=_0x163f4f;let _0x8f14b1=0x0;return SceneManager['areButtonsOutsideMainUI']()?_0x8f14b1=this[_0x2264b6(0x984)]():_0x2264b6(0x631)!==_0x2264b6(0x631)?(_0x99e908[_0x2264b6(0x3c1)](),this['onNameOk']()):_0x8f14b1=VisuMZ[_0x2264b6(0x28e)]['Scene_MenuBase_mainAreaHeight'][_0x2264b6(0x17d)](this),this['isMenuButtonAssistEnabled']()&&this[_0x2264b6(0x7a2)]()!==_0x2264b6(0x45b)&&(_0x8f14b1-=Window_ButtonAssist[_0x2264b6(0x5b0)][_0x2264b6(0x877)]()),_0x8f14b1;},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x984)]=function(){const _0x5b30f4=_0x163f4f;return Graphics[_0x5b30f4(0x37c)]-this[_0x5b30f4(0x6c5)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x766)]=Scene_MenuBase['prototype']['createBackground'],Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x4dc)]=function(){const _0xcf38df=_0x163f4f,_0x235543=VisuMZ[_0xcf38df(0x28e)][_0xcf38df(0x403)][_0xcf38df(0x45f)][_0xcf38df(0x78d)]??0x8;this[_0xcf38df(0x918)]=new PIXI[(_0xcf38df(0x470))][(_0xcf38df(0x539))](_0x235543),this['_backgroundSprite']=new Sprite(),this[_0xcf38df(0x68a)]['bitmap']=SceneManager['backgroundBitmap'](),this[_0xcf38df(0x68a)]['filters']=[this[_0xcf38df(0x918)]],this[_0xcf38df(0x716)](this[_0xcf38df(0x68a)]),this[_0xcf38df(0x4ca)](0xc0),this['setBackgroundOpacity'](this[_0xcf38df(0x930)]()),this[_0xcf38df(0x21e)]();},Scene_MenuBase['prototype'][_0x163f4f(0x930)]=function(){const _0x33707f=_0x163f4f,_0x3d12a8=String(this[_0x33707f(0x2d2)]['name']),_0x208e2c=this[_0x33707f(0x725)](_0x3d12a8);if(_0x208e2c){if(_0x33707f(0x1af)!==_0x33707f(0x1af))_0x4148cb=_0x33707f(0x496)[_0x33707f(0x889)](_0x5c012b,_0x4789ab);else return _0x208e2c[_0x33707f(0x5c6)];}else return 0xc0;},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x21e)]=function(){const _0x1673d6=_0x163f4f,_0x26a70c=String(this[_0x1673d6(0x2d2)][_0x1673d6(0x4d6)]),_0x43752b=this['getCustomBackgroundSettings'](_0x26a70c);if(_0x43752b&&(_0x43752b[_0x1673d6(0x91b)]!==''||_0x43752b[_0x1673d6(0x414)]!=='')){if(_0x1673d6(0x282)===_0x1673d6(0x15b)){const _0x129373=_0x165b75[_0x1673d6(0x315)](_0x152fcd,_0x3d553d)[_0x1673d6(0x333)](_0x2c5a1a=>_0x2c5a1a[_0x1673d6(0x24b)]());return _0x129373[_0x1673d6(0xf7)]>0x0;}else this['_backSprite1']=new Sprite(ImageManager['loadTitle1'](_0x43752b[_0x1673d6(0x91b)])),this[_0x1673d6(0x124)]=new Sprite(ImageManager[_0x1673d6(0x100)](_0x43752b[_0x1673d6(0x414)])),this[_0x1673d6(0x716)](this[_0x1673d6(0x90a)]),this['addChild'](this[_0x1673d6(0x124)]),this['_backSprite1']['bitmap']['addLoadListener'](this[_0x1673d6(0x41a)][_0x1673d6(0x295)](this,this['_backSprite1'])),this[_0x1673d6(0x124)][_0x1673d6(0x2dc)][_0x1673d6(0x73b)](this['adjustSprite']['bind'](this,this['_backSprite2']));}},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x725)]=function(_0x5442c4){const _0x3641b2=_0x163f4f;return VisuMZ[_0x3641b2(0x28e)][_0x3641b2(0x403)][_0x3641b2(0x45f)][_0x5442c4]||VisuMZ[_0x3641b2(0x28e)][_0x3641b2(0x403)][_0x3641b2(0x45f)][_0x3641b2(0x796)];},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x41a)]=function(_0x3ddae2){const _0x2de0c4=_0x163f4f;this[_0x2de0c4(0x691)](_0x3ddae2),this[_0x2de0c4(0x86d)](_0x3ddae2);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x781)]=Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x439)],Scene_MenuBase['prototype']['createCancelButton']=function(){const _0xe835e9=_0x163f4f;VisuMZ[_0xe835e9(0x28e)][_0xe835e9(0x781)][_0xe835e9(0x17d)](this),SceneManager[_0xe835e9(0x5a0)]()&&this[_0xe835e9(0x250)]();},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x250)]=function(){const _0x15ac4c=_0x163f4f;this[_0x15ac4c(0x80b)]['x']=Graphics['boxWidth']+0x4;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x6d1)]=Scene_MenuBase[_0x163f4f(0x5b0)]['createPageButtons'],Scene_MenuBase['prototype'][_0x163f4f(0x9b7)]=function(){const _0x4994f3=_0x163f4f;VisuMZ[_0x4994f3(0x28e)]['Scene_MenuBase_createPageButtons'][_0x4994f3(0x17d)](this),SceneManager['isSideButtonLayout']()&&this[_0x4994f3(0x193)]();},Scene_MenuBase['prototype'][_0x163f4f(0x193)]=function(){const _0xb811cd=_0x163f4f;this[_0xb811cd(0x425)]['x']=-0x1*(this['_pageupButton']['width']+this[_0xb811cd(0x3d3)][_0xb811cd(0x60a)]+0x8),this[_0xb811cd(0x3d3)]['x']=-0x1*(this[_0xb811cd(0x3d3)][_0xb811cd(0x60a)]+0x4);},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x9cb)]=function(){const _0x13a078=_0x163f4f;return VisuMZ['CoreEngine'][_0x13a078(0x403)][_0x13a078(0x490)][_0x13a078(0x949)];},Scene_MenuBase[_0x163f4f(0x5b0)]['getButtonAssistLocation']=function(){const _0x4a5066=_0x163f4f;return SceneManager[_0x4a5066(0x5a0)]()||SceneManager[_0x4a5066(0x842)]()?VisuMZ[_0x4a5066(0x28e)][_0x4a5066(0x403)]['ButtonAssist']['Location']:'button';},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x55e)]=function(){const _0x12d2a8=_0x163f4f;if(!this[_0x12d2a8(0x9cb)]())return;const _0x276245=this['buttonAssistWindowRect']();this['_buttonAssistWindow']=new Window_ButtonAssist(_0x276245),this[_0x12d2a8(0x92b)](this['_buttonAssistWindow']);},Scene_MenuBase[_0x163f4f(0x5b0)]['buttonAssistWindowRect']=function(){const _0x241d52=_0x163f4f;return this[_0x241d52(0x7a2)]()==='button'?this[_0x241d52(0x46c)]():this['buttonAssistWindowSideRect']();},Scene_MenuBase[_0x163f4f(0x5b0)][_0x163f4f(0x46c)]=function(){const _0x118495=_0x163f4f,_0x11c5a0=ConfigManager[_0x118495(0x5f7)]?(Sprite_Button[_0x118495(0x5b0)][_0x118495(0x7bc)]()+0x6)*0x2:0x0,_0x383ba1=this[_0x118495(0x451)](),_0x15a3d5=Graphics['boxWidth']-_0x11c5a0*0x2,_0x11733a=this[_0x118495(0x49c)]();return new Rectangle(_0x11c5a0,_0x383ba1,_0x15a3d5,_0x11733a);},Scene_MenuBase['prototype'][_0x163f4f(0x39c)]=function(){const _0x45c823=_0x163f4f,_0x58cb9a=Graphics[_0x45c823(0x2a2)],_0x4a4931=Window_ButtonAssist['prototype'][_0x45c823(0x877)](),_0x249658=0x0;let _0x14381a=0x0;return this[_0x45c823(0x7a2)]()===_0x45c823(0x1ce)?_0x14381a=0x0:_0x14381a=Graphics[_0x45c823(0x37c)]-_0x4a4931,new Rectangle(_0x249658,_0x14381a,_0x58cb9a,_0x4a4931);},Scene_Menu[_0x163f4f(0x720)]=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)]['MainMenu'],VisuMZ[_0x163f4f(0x28e)]['Scene_Menu_create']=Scene_Menu[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)],Scene_Menu[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)]=function(){const _0x87bbf4=_0x163f4f;VisuMZ[_0x87bbf4(0x28e)][_0x87bbf4(0x963)][_0x87bbf4(0x17d)](this),this[_0x87bbf4(0x9fc)]();},Scene_Menu[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0x4f87f3=_0x163f4f;this[_0x4f87f3(0x3a3)]&&this[_0x4f87f3(0x3a3)][_0x4f87f3(0x50f)](Scene_Menu['layoutSettings'][_0x4f87f3(0x874)]),this[_0x4f87f3(0x7c6)]&&(_0x4f87f3(0x8e2)!=='KSeGj'?(this['_onceParallelInterpreters']=this[_0x4f87f3(0x9ba)]||[],this[_0x4f87f3(0x9ba)][_0x4f87f3(0x816)](_0x4fd5e4)):this[_0x4f87f3(0x7c6)][_0x4f87f3(0x50f)](Scene_Menu[_0x4f87f3(0x720)][_0x4f87f3(0x219)])),this[_0x4f87f3(0x70b)]&&this[_0x4f87f3(0x70b)][_0x4f87f3(0x50f)](Scene_Menu['layoutSettings'][_0x4f87f3(0x958)]);},Scene_Menu[_0x163f4f(0x5b0)]['commandWindowRect']=function(){const _0x519534=_0x163f4f;return Scene_Menu[_0x519534(0x720)][_0x519534(0x306)]['call'](this);},Scene_Menu[_0x163f4f(0x5b0)][_0x163f4f(0x342)]=function(){const _0x703ff4=_0x163f4f;return Scene_Menu[_0x703ff4(0x720)][_0x703ff4(0x900)][_0x703ff4(0x17d)](this);},Scene_Menu[_0x163f4f(0x5b0)]['statusWindowRect']=function(){const _0x29cac8=_0x163f4f;return Scene_Menu[_0x29cac8(0x720)][_0x29cac8(0x1f7)]['call'](this);},Scene_Item['layoutSettings']=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x847)],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x491)]=Scene_Item[_0x163f4f(0x5b0)]['create'],Scene_Item[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)]=function(){const _0x159418=_0x163f4f;VisuMZ['CoreEngine'][_0x159418(0x491)][_0x159418(0x17d)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Item[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0x21bb3c=_0x163f4f;this[_0x21bb3c(0x8e5)]&&this[_0x21bb3c(0x8e5)]['setBackgroundType'](Scene_Item[_0x21bb3c(0x720)][_0x21bb3c(0x19f)]);this[_0x21bb3c(0xf5)]&&(_0x21bb3c(0x5da)!==_0x21bb3c(0x36f)?this[_0x21bb3c(0xf5)][_0x21bb3c(0x50f)](Scene_Item['layoutSettings'][_0x21bb3c(0x396)]):_0x4e478a[_0x21bb3c(0x278)](_0x4b0bc8));if(this[_0x21bb3c(0x67a)]){if(_0x21bb3c(0x386)==='yvnTr'){const _0x5f031e=new _0x2f1119(),_0x4e393b=this[_0x21bb3c(0x11f)]();_0x5f031e['x']=_0x108d07['x']-_0x4e393b['x'],_0x5f031e['y']=_0x4f2b12['y']-_0x4e393b['y'],_0x5f031e['z']=0x64;const _0x46e340=this[_0x21bb3c(0x11f)]();return _0x46e340[_0x21bb3c(0x716)](_0x5f031e),[_0x5f031e];}else this['_itemWindow']['setBackgroundType'](Scene_Item[_0x21bb3c(0x720)]['ItemBgType']);}this[_0x21bb3c(0x449)]&&this[_0x21bb3c(0x449)][_0x21bb3c(0x50f)](Scene_Item['layoutSettings']['ActorBgType']);},Scene_Item['prototype'][_0x163f4f(0x649)]=function(){const _0x3fac98=_0x163f4f;return Scene_Item[_0x3fac98(0x720)]['HelpRect'][_0x3fac98(0x17d)](this);},Scene_Item[_0x163f4f(0x5b0)]['categoryWindowRect']=function(){const _0x4d39ef=_0x163f4f;return Scene_Item[_0x4d39ef(0x720)][_0x4d39ef(0x6e7)][_0x4d39ef(0x17d)](this);},Scene_Item[_0x163f4f(0x5b0)][_0x163f4f(0x8fe)]=function(){const _0x46f00f=_0x163f4f;return Scene_Item['layoutSettings'][_0x46f00f(0x59d)][_0x46f00f(0x17d)](this);},Scene_Item['prototype']['actorWindowRect']=function(){const _0xd443f7=_0x163f4f;return Scene_Item[_0xd443f7(0x720)][_0xd443f7(0x33c)][_0xd443f7(0x17d)](this);},Scene_Skill[_0x163f4f(0x720)]=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x4ac)],VisuMZ['CoreEngine'][_0x163f4f(0x79e)]=Scene_Skill[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)],Scene_Skill['prototype']['create']=function(){const _0x329c03=_0x163f4f;VisuMZ['CoreEngine'][_0x329c03(0x79e)][_0x329c03(0x17d)](this),this[_0x329c03(0x9fc)]();},Scene_Skill[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0x334883=_0x163f4f;if(this[_0x334883(0x8e5)]){if('budWR'!==_0x334883(0x80f))this[_0x334883(0x8e5)][_0x334883(0x50f)](Scene_Skill['layoutSettings'][_0x334883(0x19f)]);else{_0x456200[_0x334883(0x28e)]['Scene_Battle_update'][_0x334883(0x17d)](this);if(_0x2139c3[_0x334883(0x695)])this[_0x334883(0xed)]();}}this['_skillTypeWindow']&&this[_0x334883(0x206)]['setBackgroundType'](Scene_Skill[_0x334883(0x720)][_0x334883(0x908)]);this[_0x334883(0x70b)]&&(_0x334883(0x503)===_0x334883(0x8b1)?(_0x2c741c[_0x334883(0x28e)][_0x334883(0x551)][_0x334883(0x17d)](this),this['updatePictureSettings'](),this[_0x334883(0x696)](),this[_0x334883(0x84a)](),this[_0x334883(0x2fd)]()):this[_0x334883(0x70b)][_0x334883(0x50f)](Scene_Skill['layoutSettings']['StatusBgType']));if(this[_0x334883(0x67a)]){if('hfUHe'!==_0x334883(0x2e0)){this[_0x334883(0x3e6)]=_0x66cc19[_0x334883(0x388)];let _0x736bfc=_0x208ade[_0x334883(0x7fc)](_0x594f78['charCode']);this[_0x334883(0x2f9)]===_0x3447ad?this[_0x334883(0x2f9)]=_0x736bfc:this[_0x334883(0x2f9)]+=_0x736bfc;}else this[_0x334883(0x67a)]['setBackgroundType'](Scene_Skill['layoutSettings']['ItemBgType']);}this['_actorWindow']&&this[_0x334883(0x449)][_0x334883(0x50f)](Scene_Skill[_0x334883(0x720)][_0x334883(0x5af)]);},Scene_Skill['prototype'][_0x163f4f(0x649)]=function(){const _0x1b4452=_0x163f4f;return Scene_Skill[_0x1b4452(0x720)]['HelpRect']['call'](this);},Scene_Skill['prototype'][_0x163f4f(0x3f5)]=function(){const _0xa9d706=_0x163f4f;return Scene_Skill['layoutSettings'][_0xa9d706(0x604)][_0xa9d706(0x17d)](this);},Scene_Skill[_0x163f4f(0x5b0)]['statusWindowRect']=function(){const _0x436011=_0x163f4f;return Scene_Skill[_0x436011(0x720)][_0x436011(0x1f7)]['call'](this);},Scene_Skill[_0x163f4f(0x5b0)]['itemWindowRect']=function(){const _0x318cc5=_0x163f4f;return Scene_Skill[_0x318cc5(0x720)]['ItemRect'][_0x318cc5(0x17d)](this);},Scene_Skill[_0x163f4f(0x5b0)]['actorWindowRect']=function(){const _0x59cecb=_0x163f4f;return Scene_Skill[_0x59cecb(0x720)][_0x59cecb(0x33c)][_0x59cecb(0x17d)](this);},Scene_Equip[_0x163f4f(0x720)]=VisuMZ['CoreEngine'][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x95e)],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x705)]=Scene_Equip[_0x163f4f(0x5b0)]['create'],Scene_Equip[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)]=function(){const _0x4b486c=_0x163f4f;VisuMZ[_0x4b486c(0x28e)][_0x4b486c(0x705)][_0x4b486c(0x17d)](this),this[_0x4b486c(0x9fc)]();},Scene_Equip[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0x584cf8=_0x163f4f;this['_helpWindow']&&this[_0x584cf8(0x8e5)][_0x584cf8(0x50f)](Scene_Equip[_0x584cf8(0x720)]['HelpBgType']);this[_0x584cf8(0x70b)]&&this[_0x584cf8(0x70b)][_0x584cf8(0x50f)](Scene_Equip[_0x584cf8(0x720)][_0x584cf8(0x958)]);this[_0x584cf8(0x3a3)]&&(_0x584cf8(0x8a8)!==_0x584cf8(0x8a8)?this[_0x584cf8(0x8e5)][_0x584cf8(0x50f)](_0x21c713['layoutSettings'][_0x584cf8(0x19f)]):this[_0x584cf8(0x3a3)]['setBackgroundType'](Scene_Equip[_0x584cf8(0x720)][_0x584cf8(0x874)]));if(this[_0x584cf8(0x76a)]){if(_0x584cf8(0x1eb)==='AIVEZ'){_0xba5356['ConvertParams'](_0x5f2022,_0x1d3748);const _0x26a827=_0xcd5459[_0x584cf8(0x7f1)](_0x453c99[_0x584cf8(0x26a)])[_0x584cf8(0x933)](0x32,0x96),_0x28e74e=_0x28ce82[_0x584cf8(0x1cd)];_0x28e74e&&(_0x28e74e[_0x584cf8(0x26a)]=_0x26a827,_0x28e74e[_0x584cf8(0x9e0)]=_0x5b5b20[_0x584cf8(0x8bd)][_0x584cf8(0x6e4)](),_0x384e01[_0x584cf8(0x791)](_0x28e74e),_0x3e1c09[_0x584cf8(0x907)](_0x28e74e,_0x28e74e[_0x584cf8(0x9e0)]),_0x3a959f[_0x584cf8(0x8bd)][_0x584cf8(0x25f)](_0x28e74e['pos']));}else this['_slotWindow']['setBackgroundType'](Scene_Equip[_0x584cf8(0x720)][_0x584cf8(0x3f7)]);}if(this[_0x584cf8(0x67a)]){if(_0x584cf8(0x3fd)!=='RYwKH'){var _0x2b51ff=_0x52714b(_0x14a9aa['$1']);try{_0x222612+=_0x19f352(_0x2b51ff);}catch(_0x482669){if(_0x5321d0[_0x584cf8(0x92a)]())_0xfb09c4[_0x584cf8(0x5b5)](_0x482669);}}else this[_0x584cf8(0x67a)]['setBackgroundType'](Scene_Equip[_0x584cf8(0x720)]['ItemBgType']);}},Scene_Equip[_0x163f4f(0x5b0)][_0x163f4f(0x649)]=function(){const _0x5952cd=_0x163f4f;return Scene_Equip[_0x5952cd(0x720)][_0x5952cd(0x252)]['call'](this);},Scene_Equip[_0x163f4f(0x5b0)][_0x163f4f(0x8c3)]=function(){return Scene_Equip['layoutSettings']['StatusRect']['call'](this);},Scene_Equip['prototype']['commandWindowRect']=function(){const _0xca8e17=_0x163f4f;return Scene_Equip['layoutSettings'][_0xca8e17(0x306)]['call'](this);},Scene_Equip[_0x163f4f(0x5b0)][_0x163f4f(0x542)]=function(){return Scene_Equip['layoutSettings']['SlotRect']['call'](this);},Scene_Equip['prototype'][_0x163f4f(0x8fe)]=function(){const _0x445938=_0x163f4f;return Scene_Equip[_0x445938(0x720)][_0x445938(0x59d)][_0x445938(0x17d)](this);},Scene_Status['layoutSettings']=VisuMZ['CoreEngine'][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x6a7)],VisuMZ[_0x163f4f(0x28e)]['Scene_Status_create']=Scene_Status['prototype'][_0x163f4f(0x3bb)],Scene_Status[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)]=function(){const _0x5603b=_0x163f4f;VisuMZ[_0x5603b(0x28e)]['Scene_Status_create']['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Status[_0x163f4f(0x5b0)]['setCoreEngineUpdateWindowBg']=function(){const _0x5525e9=_0x163f4f;this[_0x5525e9(0x180)]&&this['_profileWindow'][_0x5525e9(0x50f)](Scene_Status[_0x5525e9(0x720)][_0x5525e9(0x9e1)]),this[_0x5525e9(0x70b)]&&this[_0x5525e9(0x70b)]['setBackgroundType'](Scene_Status[_0x5525e9(0x720)]['StatusBgType']),this[_0x5525e9(0x57d)]&&this['_statusParamsWindow']['setBackgroundType'](Scene_Status['layoutSettings'][_0x5525e9(0x225)]),this['_statusEquipWindow']&&this['_statusEquipWindow']['setBackgroundType'](Scene_Status[_0x5525e9(0x720)][_0x5525e9(0x17e)]);},Scene_Status['prototype'][_0x163f4f(0x5b1)]=function(){const _0x55dc12=_0x163f4f;return Scene_Status['layoutSettings'][_0x55dc12(0x81e)][_0x55dc12(0x17d)](this);},Scene_Status['prototype'][_0x163f4f(0x8c3)]=function(){const _0x23a503=_0x163f4f;return Scene_Status['layoutSettings'][_0x23a503(0x1f7)]['call'](this);},Scene_Status[_0x163f4f(0x5b0)]['statusParamsWindowRect']=function(){const _0x3dbf92=_0x163f4f;return Scene_Status['layoutSettings'][_0x3dbf92(0x1bf)]['call'](this);},Scene_Status[_0x163f4f(0x5b0)][_0x163f4f(0x89f)]=function(){const _0x3d76c6=_0x163f4f;return Scene_Status[_0x3d76c6(0x720)][_0x3d76c6(0x84d)][_0x3d76c6(0x17d)](this);},Scene_Options[_0x163f4f(0x720)]=VisuMZ['CoreEngine'][_0x163f4f(0x403)]['MenuLayout']['OptionsMenu'],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x619)]=Scene_Options[_0x163f4f(0x5b0)]['create'],Scene_Options[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)]=function(){const _0x24f990=_0x163f4f;VisuMZ[_0x24f990(0x28e)]['Scene_Options_create'][_0x24f990(0x17d)](this),this[_0x24f990(0x9fc)]();},Scene_Options[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0xfdec02=_0x163f4f;this[_0xfdec02(0x108)]&&this[_0xfdec02(0x108)][_0xfdec02(0x50f)](Scene_Options[_0xfdec02(0x720)][_0xfdec02(0x5f9)]);},Scene_Options[_0x163f4f(0x5b0)]['optionsWindowRect']=function(){const _0x593967=_0x163f4f;return Scene_Options['layoutSettings']['OptionsRect'][_0x593967(0x17d)](this);},Scene_Save[_0x163f4f(0x720)]=VisuMZ['CoreEngine'][_0x163f4f(0x403)][_0x163f4f(0x83d)]['SaveMenu'],Scene_Save['prototype'][_0x163f4f(0x3bb)]=function(){const _0x20b432=_0x163f4f;Scene_File[_0x20b432(0x5b0)][_0x20b432(0x3bb)][_0x20b432(0x17d)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Save[_0x163f4f(0x5b0)]['setCoreEngineUpdateWindowBg']=function(){const _0x53040f=_0x163f4f;this['_helpWindow']&&this['_helpWindow']['setBackgroundType'](Scene_Save[_0x53040f(0x720)][_0x53040f(0x19f)]),this[_0x53040f(0x8c4)]&&this[_0x53040f(0x8c4)][_0x53040f(0x50f)](Scene_Save['layoutSettings'][_0x53040f(0x296)]);},Scene_Save[_0x163f4f(0x5b0)]['helpWindowRect']=function(){const _0xc42bdf=_0x163f4f;return Scene_Save[_0xc42bdf(0x720)]['HelpRect'][_0xc42bdf(0x17d)](this);},Scene_Save['prototype'][_0x163f4f(0x185)]=function(){const _0x4935ca=_0x163f4f;return Scene_Save[_0x4935ca(0x720)][_0x4935ca(0xa05)][_0x4935ca(0x17d)](this);},Scene_Load['layoutSettings']=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x25b)],Scene_Load[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)]=function(){const _0x38816d=_0x163f4f;Scene_File[_0x38816d(0x5b0)][_0x38816d(0x3bb)][_0x38816d(0x17d)](this),this[_0x38816d(0x9fc)]();},Scene_Load[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0x360070=_0x163f4f;this['_helpWindow']&&this[_0x360070(0x8e5)]['setBackgroundType'](Scene_Load[_0x360070(0x720)][_0x360070(0x19f)]),this['_listWindow']&&(_0x360070(0x1b3)!=='jOaFI'?this['_listWindow'][_0x360070(0x50f)](Scene_Load[_0x360070(0x720)][_0x360070(0x296)]):_0x123c13[_0x360070(0x4ff)]&&(this[_0x360070(0x2ec)]='STB'));},Scene_Load[_0x163f4f(0x5b0)][_0x163f4f(0x649)]=function(){const _0x3eb43f=_0x163f4f;return Scene_Load[_0x3eb43f(0x720)][_0x3eb43f(0x252)][_0x3eb43f(0x17d)](this);},Scene_Load[_0x163f4f(0x5b0)][_0x163f4f(0x185)]=function(){const _0x81dd13=_0x163f4f;return Scene_Load['layoutSettings'][_0x81dd13(0xa05)][_0x81dd13(0x17d)](this);},Scene_GameEnd['layoutSettings']=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)]['MenuLayout']['GameEnd'],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x975)]=Scene_GameEnd[_0x163f4f(0x5b0)][_0x163f4f(0x4dc)],Scene_GameEnd[_0x163f4f(0x5b0)][_0x163f4f(0x4dc)]=function(){const _0x3338ab=_0x163f4f;Scene_MenuBase[_0x3338ab(0x5b0)][_0x3338ab(0x4dc)][_0x3338ab(0x17d)](this);},Scene_GameEnd['prototype'][_0x163f4f(0x3df)]=function(){const _0x45cdc4=_0x163f4f,_0x38e163=this['commandWindowRect']();this[_0x45cdc4(0x3a3)]=new Window_GameEnd(_0x38e163),this[_0x45cdc4(0x3a3)][_0x45cdc4(0x82d)](_0x45cdc4(0x684),this[_0x45cdc4(0x62f)][_0x45cdc4(0x295)](this)),this[_0x45cdc4(0x92b)](this[_0x45cdc4(0x3a3)]),this[_0x45cdc4(0x3a3)][_0x45cdc4(0x50f)](Scene_GameEnd[_0x45cdc4(0x720)][_0x45cdc4(0x874)]);},Scene_GameEnd[_0x163f4f(0x5b0)]['commandWindowRect']=function(){const _0x11b54d=_0x163f4f;return Scene_GameEnd[_0x11b54d(0x720)][_0x11b54d(0x306)]['call'](this);},Scene_Shop['layoutSettings']=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x727)],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x38f)]=Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x3bb)],Scene_Shop['prototype'][_0x163f4f(0x3bb)]=function(){const _0x344a9c=_0x163f4f;VisuMZ['CoreEngine'][_0x344a9c(0x38f)][_0x344a9c(0x17d)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Shop[_0x163f4f(0x5b0)]['setCoreEngineUpdateWindowBg']=function(){const _0x5b2779=_0x163f4f;this[_0x5b2779(0x8e5)]&&this[_0x5b2779(0x8e5)][_0x5b2779(0x50f)](Scene_Shop[_0x5b2779(0x720)][_0x5b2779(0x19f)]);this[_0x5b2779(0x7c6)]&&this[_0x5b2779(0x7c6)][_0x5b2779(0x50f)](Scene_Shop['layoutSettings']['GoldBgType']);this[_0x5b2779(0x3a3)]&&this[_0x5b2779(0x3a3)][_0x5b2779(0x50f)](Scene_Shop[_0x5b2779(0x720)][_0x5b2779(0x874)]);this[_0x5b2779(0x6e2)]&&this[_0x5b2779(0x6e2)]['setBackgroundType'](Scene_Shop[_0x5b2779(0x720)][_0x5b2779(0x251)]);this['_numberWindow']&&this[_0x5b2779(0x2ca)][_0x5b2779(0x50f)](Scene_Shop['layoutSettings']['NumberBgType']);if(this[_0x5b2779(0x70b)]){if(_0x5b2779(0x637)!==_0x5b2779(0x747))this[_0x5b2779(0x70b)][_0x5b2779(0x50f)](Scene_Shop[_0x5b2779(0x720)][_0x5b2779(0x958)]);else return _0x5b2779(0x32e);}this['_buyWindow']&&(_0x5b2779(0x7fd)===_0x5b2779(0x7fd)?this['_buyWindow'][_0x5b2779(0x50f)](Scene_Shop[_0x5b2779(0x720)][_0x5b2779(0x9ce)]):(_0x1b824b=_0x3f313f['round'](_0x1038fb),_0x3953b4=_0x71ae4d[_0x5b2779(0x7f1)](_0x4e3ae6),_0x50941b=_0x25309b[_0x5b2779(0x7f1)](_0x43ce34),_0x48acc5=_0x1ed66a[_0x5b2779(0x7f1)](_0x494d67),_0x3dbb79[_0x5b2779(0x28e)][_0x5b2779(0x566)]['call'](this,_0x47ecbd,_0x300686,_0x252393,_0x52bbed,_0x15be19,_0x41b291),this[_0x5b2779(0x9db)]())),this['_categoryWindow']&&this[_0x5b2779(0xf5)][_0x5b2779(0x50f)](Scene_Shop[_0x5b2779(0x720)][_0x5b2779(0x396)]),this[_0x5b2779(0x164)]&&this[_0x5b2779(0x164)][_0x5b2779(0x50f)](Scene_Shop['layoutSettings'][_0x5b2779(0x7ac)]);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x649)]=function(){const _0x4793c6=_0x163f4f;return Scene_Shop[_0x4793c6(0x720)][_0x4793c6(0x252)][_0x4793c6(0x17d)](this);},Scene_Shop[_0x163f4f(0x5b0)]['goldWindowRect']=function(){const _0xd7364a=_0x163f4f;return Scene_Shop[_0xd7364a(0x720)][_0xd7364a(0x900)]['call'](this);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x5f0)]=function(){const _0x6b3fe6=_0x163f4f;return Scene_Shop[_0x6b3fe6(0x720)][_0x6b3fe6(0x306)][_0x6b3fe6(0x17d)](this);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x4ee)]=function(){return Scene_Shop['layoutSettings']['DummyRect']['call'](this);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x457)]=function(){const _0xff39b4=_0x163f4f;return Scene_Shop[_0xff39b4(0x720)][_0xff39b4(0x5b2)]['call'](this);},Scene_Shop[_0x163f4f(0x5b0)]['statusWindowRect']=function(){const _0x2dfd8c=_0x163f4f;return Scene_Shop['layoutSettings'][_0x2dfd8c(0x1f7)]['call'](this);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x4bb)]=function(){const _0x2a94a3=_0x163f4f;return Scene_Shop['layoutSettings'][_0x2a94a3(0x29b)]['call'](this);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x654)]=function(){const _0x44bfc0=_0x163f4f;return Scene_Shop['layoutSettings'][_0x44bfc0(0x6e7)][_0x44bfc0(0x17d)](this);},Scene_Shop[_0x163f4f(0x5b0)][_0x163f4f(0x10d)]=function(){const _0x2a83ee=_0x163f4f;return Scene_Shop[_0x2a83ee(0x720)][_0x2a83ee(0x15d)][_0x2a83ee(0x17d)](this);},Scene_Name[_0x163f4f(0x720)]=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x83d)][_0x163f4f(0x517)],VisuMZ['CoreEngine'][_0x163f4f(0x277)]=Scene_Name['prototype'][_0x163f4f(0x3bb)],Scene_Name[_0x163f4f(0x5b0)]['create']=function(){const _0x425c95=_0x163f4f;VisuMZ[_0x425c95(0x28e)][_0x425c95(0x277)]['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x9fc)]=function(){const _0x1bb8d0=_0x163f4f;this[_0x1bb8d0(0x885)]&&this['_editWindow'][_0x1bb8d0(0x50f)](Scene_Name[_0x1bb8d0(0x720)]['EditBgType']);if(this[_0x1bb8d0(0x5df)]){if(_0x1bb8d0(0x231)===_0x1bb8d0(0x9b2))return _0xa64d68[_0x1bb8d0(0x720)]['StatusRect']['call'](this);else this['_inputWindow']['setBackgroundType'](Scene_Name[_0x1bb8d0(0x720)][_0x1bb8d0(0x7ff)]);}},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x6c5)]=function(){return 0x0;},Scene_Name[_0x163f4f(0x5b0)]['editWindowRect']=function(){const _0x10ad30=_0x163f4f;return Scene_Name['layoutSettings'][_0x10ad30(0x93c)][_0x10ad30(0x17d)](this);},Scene_Name['prototype'][_0x163f4f(0x730)]=function(){const _0x129322=_0x163f4f;return Scene_Name[_0x129322(0x720)][_0x129322(0x7e7)][_0x129322(0x17d)](this);},Scene_Name[_0x163f4f(0x5b0)]['EnableNameInput']=function(){const _0x4d1ade=_0x163f4f;if(!this[_0x4d1ade(0x5df)])return![];return VisuMZ[_0x4d1ade(0x28e)][_0x4d1ade(0x403)]['KeyboardInput'][_0x4d1ade(0x7c2)];},Scene_Name['prototype'][_0x163f4f(0x24d)]=function(){const _0x3dc0c9=_0x163f4f;if(this[_0x3dc0c9(0x7c2)]()&&this[_0x3dc0c9(0x5df)][_0x3dc0c9(0x6b8)]!==_0x3dc0c9(0x995))return _0x3dc0c9(0x789)!==_0x3dc0c9(0x789)?0.5*_0x56c092*_0x663ea3*((_0x3b55ca+0x1)*_0x22e5c6-_0x4286d8):TextManager[_0x3dc0c9(0x2e1)](_0x3dc0c9(0x287),_0x3dc0c9(0x101));return Scene_MenuBase[_0x3dc0c9(0x5b0)]['buttonAssistKey1'][_0x3dc0c9(0x17d)](this);},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x78e)]=function(){const _0x568121=_0x163f4f;if(this[_0x568121(0x7c2)]()){if('XsoUm'===_0x568121(0x78f)){const _0x3b5d64=this[_0x568121(0x404)]();!_0x3b5d64[_0x568121(0x740)]()?_0x5addfc[_0x568121(0x28e)][_0x568121(0x7cb)]['call'](this):(this[_0x568121(0x740)]['x']=_0x3b5d64[_0x568121(0x740)]()['x'],this[_0x568121(0x740)]['y']=_0x3b5d64[_0x568121(0x740)]()['y']);}else return TextManager['getInputButtonString']('tab');}else return Scene_MenuBase[_0x568121(0x5b0)][_0x568121(0x78e)][_0x568121(0x17d)](this);},Scene_Name['prototype'][_0x163f4f(0x2a6)]=function(){const _0x4509e4=_0x163f4f;if(this['EnableNameInput']()&&this[_0x4509e4(0x5df)][_0x4509e4(0x6b8)]===_0x4509e4(0x995)){if('yXkRL'!==_0x4509e4(0x273)){_0x6a173=_0x1e6101(_0x7b7c24)[_0x4509e4(0x5ca)]();const _0x4751f1=_0x58e55c[_0x4509e4(0x28e)][_0x4509e4(0x403)][_0x4509e4(0x67d)];if(_0x279963===_0x4509e4(0x9f7))return _0x4751f1['IconParam0'];if(_0x527bbc===_0x4509e4(0x408))return _0x4751f1[_0x4509e4(0x359)];if(_0x3d2c61===_0x4509e4(0x65f))return _0x4751f1[_0x4509e4(0x443)];if(_0x2b2fc6==='DEF')return _0x4751f1[_0x4509e4(0x65d)];if(_0x4c5e0b===_0x4509e4(0x92c))return _0x4751f1['IconParam4'];if(_0x1b570d===_0x4509e4(0x88a))return _0x4751f1[_0x4509e4(0x726)];if(_0x30f153===_0x4509e4(0x70a))return _0x4751f1['IconParam6'];if(_0xd88b9===_0x4509e4(0x18d))return _0x4751f1[_0x4509e4(0x97c)];if(_0x27c344===_0x4509e4(0x1a0))return _0x4751f1[_0x4509e4(0x27e)];if(_0x302e3e===_0x4509e4(0x7f6))return _0x4751f1['IconXParam1'];if(_0x2f4d37===_0x4509e4(0x213))return _0x4751f1['IconXParam2'];if(_0x5e9327===_0x4509e4(0x80a))return _0x4751f1[_0x4509e4(0x8e6)];if(_0x1977e1==='MEV')return _0x4751f1[_0x4509e4(0xa0b)];if(_0x42a7d3===_0x4509e4(0x52f))return _0x4751f1['IconXParam5'];if(_0x3def00==='CNT')return _0x4751f1['IconXParam6'];if(_0x1cb5a7==='HRG')return _0x4751f1[_0x4509e4(0x3e5)];if(_0x40720e===_0x4509e4(0x58e))return _0x4751f1[_0x4509e4(0x569)];if(_0x130447===_0x4509e4(0x13b))return _0x4751f1['IconXParam9'];if(_0x2bfb01==='TGR')return _0x4751f1[_0x4509e4(0x21f)];if(_0x21febf==='GRD')return _0x4751f1[_0x4509e4(0x989)];if(_0x530a95===_0x4509e4(0xa01))return _0x4751f1[_0x4509e4(0x121)];if(_0x259e73===_0x4509e4(0x852))return _0x4751f1[_0x4509e4(0x5e5)];if(_0x43e942===_0x4509e4(0x991))return _0x4751f1[_0x4509e4(0x27b)];if(_0x185d8a===_0x4509e4(0x234))return _0x4751f1[_0x4509e4(0x5d1)];if(_0x33644c===_0x4509e4(0x232))return _0x4751f1[_0x4509e4(0x826)];if(_0x37485d===_0x4509e4(0x80e))return _0x4751f1[_0x4509e4(0x3e8)];if(_0x334fe3===_0x4509e4(0x3a4))return _0x4751f1[_0x4509e4(0x129)];if(_0x3e1459==='EXR')return _0x4751f1[_0x4509e4(0x2e6)];if(_0x49f0ac[_0x4509e4(0x28e)][_0x4509e4(0x27c)][_0x254698])return _0x95c5ca[_0x4509e4(0x28e)][_0x4509e4(0x27c)][_0x3b9c1d]||0x0;return 0x0;}else return TextManager[_0x4509e4(0x8f4)](['ENTER']);}return Scene_MenuBase[_0x4509e4(0x5b0)][_0x4509e4(0x2a6)]['call'](this);},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x26d)]=function(){const _0x5ba66d=_0x163f4f;if(this[_0x5ba66d(0x7c2)]()&&this[_0x5ba66d(0x5df)][_0x5ba66d(0x6b8)]==='keyboard')return TextManager[_0x5ba66d(0x8f4)](['BKSP']);return Scene_MenuBase[_0x5ba66d(0x5b0)][_0x5ba66d(0x26d)][_0x5ba66d(0x17d)](this);},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x75e)]=function(){const _0x1e4aba=_0x163f4f;if(this[_0x1e4aba(0x7c2)]()&&this[_0x1e4aba(0x5df)][_0x1e4aba(0x6b8)]!==_0x1e4aba(0x995)){const _0x3e1247=VisuMZ['CoreEngine'][_0x1e4aba(0x403)][_0x1e4aba(0x446)];return _0x3e1247[_0x1e4aba(0x994)]||_0x1e4aba(0x1ee);}return Scene_MenuBase[_0x1e4aba(0x5b0)][_0x1e4aba(0x75e)]['call'](this);},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x952)]=function(){const _0x44ab5c=_0x163f4f;if(this[_0x44ab5c(0x7c2)]()){const _0x1b9c3d=VisuMZ[_0x44ab5c(0x28e)][_0x44ab5c(0x403)]['KeyboardInput'];return this[_0x44ab5c(0x5df)][_0x44ab5c(0x6b8)]===_0x44ab5c(0x995)?_0x1b9c3d[_0x44ab5c(0x144)]||'Keyboard':_0x1b9c3d[_0x44ab5c(0x1fd)]||'Manual';}else{if(_0x44ab5c(0x66c)!=='EiWqF'){const _0x903d42=_0x3f1b2a['_scene']['_textPopupWindow'];_0x903d42['addQueue'](_0x18ee0a);}else return Scene_MenuBase[_0x44ab5c(0x5b0)][_0x44ab5c(0x952)][_0x44ab5c(0x17d)](this);}},Scene_Name['prototype'][_0x163f4f(0x7a3)]=function(){const _0x2ce117=_0x163f4f;if(this[_0x2ce117(0x7c2)]()){if(_0x2ce117(0x97f)===_0x2ce117(0x97f)){const _0x31c77c=VisuMZ[_0x2ce117(0x28e)][_0x2ce117(0x403)][_0x2ce117(0x446)];if(this['_inputWindow']['_mode']===_0x2ce117(0x995)){if('Jlqpm'!==_0x2ce117(0x148))return _0x31c77c[_0x2ce117(0x86c)]||_0x2ce117(0x86c);else this[_0x2ce117(0x759)]='';}}else return _0x29d85f[_0x2ce117(0x1fd)]||_0x2ce117(0x1fd);}return Scene_MenuBase[_0x2ce117(0x5b0)][_0x2ce117(0x7a3)]['call'](this);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x61a)]=Scene_Name['prototype']['onInputOk'],Scene_Name['prototype'][_0x163f4f(0x7b5)]=function(){const _0x332ee5=_0x163f4f;if(this[_0x332ee5(0x324)]())this[_0x332ee5(0x45d)]();else{if(_0x332ee5(0x478)!==_0x332ee5(0x478)){const _0x460d5f=_0x4220dc[_0x332ee5(0x531)]();_0x460d5f[_0x332ee5(0x73e)]&&_0x460d5f[_0x332ee5(0x4c2)]&&_0x460d5f[_0x332ee5(0x319)]>0x0&&(_0x3de9e6[_0x332ee5(0x5fc)](_0x243798[_0x332ee5(0x418)],0x0,~0x0),_0x2f2a99[_0x332ee5(0x23a)](_0x5bbccf[_0x332ee5(0x83f)],_0x2e653e[_0x332ee5(0x83f)],_0x453c86[_0x332ee5(0x83f)]),_0x460d5f[_0x332ee5(0x73a)](_0x258c64),_0x4d6ee4[_0x332ee5(0x860)][_0x332ee5(0x68d)](),_0x1fa382[_0x332ee5(0x3c1)](),_0x22786b[_0x332ee5(0x5fc)](_0x3f5dd8[_0x332ee5(0x553)],0x1,~0x0),_0x33633a[_0x332ee5(0x23a)](_0x3b6e58['REPLACE'],_0x2d8c5e['REPLACE'],_0x48ff79[_0x332ee5(0x72f)]),_0x5253be['blendFunc'](_0x1e7d97['ZERO'],_0x4aa4a7['ONE']),_0x1ee6c1[_0x332ee5(0x73a)](_0x2e9b84),_0x2a30ef[_0x332ee5(0x860)][_0x332ee5(0x68d)](),_0x5deb64[_0x332ee5(0x5d7)](_0x2b6518[_0x332ee5(0x29f)],_0x229176['ONE_MINUS_SRC_ALPHA']));}else VisuMZ[_0x332ee5(0x28e)][_0x332ee5(0x61a)][_0x332ee5(0x17d)](this);}},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x324)]=function(){const _0x40c321=_0x163f4f,_0x24477c=VisuMZ[_0x40c321(0x28e)][_0x40c321(0x403)][_0x40c321(0x446)];if(!_0x24477c)return![];const _0x2023b8=_0x24477c[_0x40c321(0x6aa)];if(!_0x2023b8)return![];const _0x15b4dc=this[_0x40c321(0x885)]['name']()[_0x40c321(0x787)]();for(const _0xb51df1 of _0x2023b8){if(_0x15b4dc[_0x40c321(0x2b2)](_0xb51df1[_0x40c321(0x787)]()))return!![];}return![];},Scene_Name[_0x163f4f(0x5b0)][_0x163f4f(0x45d)]=function(){const _0x4804af=_0x163f4f;SoundManager[_0x4804af(0x1e5)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x4e5)]=Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x168)],Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x28a24f=_0x163f4f;VisuMZ['CoreEngine'][_0x28a24f(0x4e5)][_0x28a24f(0x17d)](this);if($gameTemp[_0x28a24f(0x695)])this[_0x28a24f(0xed)]();},Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0xed)]=function(){const _0x5041f5=_0x163f4f;!BattleManager[_0x5041f5(0x493)]()&&!this[_0x5041f5(0x9e7)]&&!$gameMessage['isBusy']()&&(_0x5041f5(0x8db)===_0x5041f5(0x718)?(this[_0x5041f5(0x859)]()[_0x5041f5(0x8f3)]=!![],this['centerCameraCheckData']()['displayY']=_0x2fcb77[_0x5041f5(0x616)]):(this[_0x5041f5(0x9e7)]=!![],this[_0x5041f5(0x168)](),SceneManager[_0x5041f5(0x5e2)](),this[_0x5041f5(0x9e7)]=![]));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x7a7)]=Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x439)],Scene_Battle[_0x163f4f(0x5b0)]['createCancelButton']=function(){const _0x3fd721=_0x163f4f;VisuMZ[_0x3fd721(0x28e)][_0x3fd721(0x7a7)]['call'](this),SceneManager['isSideButtonLayout']()&&this[_0x3fd721(0x83e)]();},Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x83e)]=function(){const _0x398aa9=_0x163f4f;this[_0x398aa9(0x80b)]['x']=Graphics[_0x398aa9(0x2a2)]+0x4;if(this[_0x398aa9(0x6da)]()){if(_0x398aa9(0x31d)!==_0x398aa9(0x923))this[_0x398aa9(0x80b)]['y']=Graphics[_0x398aa9(0x37c)]-this[_0x398aa9(0x49c)]();else return this['buttonAssistWindowButtonRect']();}else this[_0x398aa9(0x80b)]['y']=0x0;},VisuMZ[_0x163f4f(0x28e)]['Sprite_Button_initialize']=Sprite_Button[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Sprite_Button[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(_0x46428d){const _0x4feb03=_0x163f4f;VisuMZ[_0x4feb03(0x28e)]['Sprite_Button_initialize'][_0x4feb03(0x17d)](this,_0x46428d),this[_0x4feb03(0x199)]();},Sprite_Button[_0x163f4f(0x5b0)]['initButtonHidden']=function(){const _0x30a9fb=_0x163f4f,_0xfcb1d0=VisuMZ[_0x30a9fb(0x28e)][_0x30a9fb(0x403)]['UI'];this[_0x30a9fb(0x59e)]=![];switch(this[_0x30a9fb(0x1b6)]){case _0x30a9fb(0x684):this[_0x30a9fb(0x59e)]=!_0xfcb1d0[_0x30a9fb(0x55a)];break;case _0x30a9fb(0x287):case _0x30a9fb(0x101):this['_isButtonHidden']=!_0xfcb1d0[_0x30a9fb(0x1bd)];break;case _0x30a9fb(0x70f):case'up':case'down2':case _0x30a9fb(0x5aa):case'ok':this[_0x30a9fb(0x59e)]=!_0xfcb1d0[_0x30a9fb(0x348)];break;case _0x30a9fb(0x2a0):this[_0x30a9fb(0x59e)]=!_0xfcb1d0['menuShowButton'];break;}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x228)]=Sprite_Button[_0x163f4f(0x5b0)][_0x163f4f(0x3a5)],Sprite_Button['prototype'][_0x163f4f(0x3a5)]=function(){const _0x53764a=_0x163f4f;SceneManager['areButtonsHidden']()||this['_isButtonHidden']?_0x53764a(0x512)==='SthNw'?this[_0x53764a(0x9b9)]():this[_0x53764a(0x887)](this[_0x53764a(0x30d)](),_0x5cb519['x'],_0x1edf9a['y'],_0x5d6aaf[_0x53764a(0x60a)],_0x53764a(0x3fc)):VisuMZ[_0x53764a(0x28e)][_0x53764a(0x228)][_0x53764a(0x17d)](this);},Sprite_Button[_0x163f4f(0x5b0)][_0x163f4f(0x9b9)]=function(){const _0x19df3f=_0x163f4f;this[_0x19df3f(0x4c2)]=![],this[_0x19df3f(0x9f9)]=0x0,this['x']=Graphics[_0x19df3f(0x60a)]*0xa,this['y']=Graphics[_0x19df3f(0x107)]*0xa;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8de)]=Sprite_Battler['prototype']['startMove'],Sprite_Battler[_0x163f4f(0x5b0)][_0x163f4f(0x690)]=function(_0x351638,_0x3570ae,_0x4cf81c){const _0x1c1663=_0x163f4f;(this['_targetOffsetX']!==_0x351638||this[_0x1c1663(0x419)]!==_0x3570ae)&&(this['setMoveEasingType'](_0x1c1663(0x972)),this[_0x1c1663(0x636)]=_0x4cf81c),VisuMZ['CoreEngine'][_0x1c1663(0x8de)][_0x1c1663(0x17d)](this,_0x351638,_0x3570ae,_0x4cf81c);},Sprite_Battler['prototype'][_0x163f4f(0x7e6)]=function(_0x5aac9b){const _0x452f0a=_0x163f4f;this[_0x452f0a(0x50c)]=_0x5aac9b;},Sprite_Battler[_0x163f4f(0x5b0)][_0x163f4f(0x6d3)]=function(){const _0x44282a=_0x163f4f;if(this['_movementDuration']<=0x0)return;const _0x4bba59=this[_0x44282a(0x39b)],_0x488f81=this[_0x44282a(0x636)],_0x1004f9=this['_moveEasingType'];this['_offsetX']=this[_0x44282a(0x6a3)](this['_offsetX'],this[_0x44282a(0x9ff)],_0x4bba59,_0x488f81,_0x1004f9),this[_0x44282a(0xff)]=this[_0x44282a(0x6a3)](this[_0x44282a(0xff)],this[_0x44282a(0x419)],_0x4bba59,_0x488f81,_0x1004f9),this[_0x44282a(0x39b)]--;if(this[_0x44282a(0x39b)]<=0x0)this[_0x44282a(0x178)]();},Sprite_Battler[_0x163f4f(0x5b0)]['applyEasing']=function(_0x3ac98b,_0x2790e1,_0x2745ff,_0x45558d,_0x33f017){const _0x210755=_0x163f4f,_0x25c207=VisuMZ[_0x210755(0x32a)]((_0x45558d-_0x2745ff)/_0x45558d,_0x33f017||_0x210755(0x972)),_0x897ac3=VisuMZ['ApplyEasing']((_0x45558d-_0x2745ff+0x1)/_0x45558d,_0x33f017||_0x210755(0x972)),_0x2253db=(_0x3ac98b-_0x2790e1*_0x25c207)/(0x1-_0x25c207);return _0x2253db+(_0x2790e1-_0x2253db)*_0x897ac3;},VisuMZ['CoreEngine']['Sprite_Actor_setActorHome']=Sprite_Actor[_0x163f4f(0x5b0)]['setActorHome'],Sprite_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x372)]=function(_0x40b8d0){const _0x192d6d=_0x163f4f;if(VisuMZ[_0x192d6d(0x28e)]['Settings']['UI'][_0x192d6d(0x313)]){if(_0x192d6d(0x7c4)!=='DJOZP')this[_0x192d6d(0x771)](_0x40b8d0);else return this[_0x192d6d(0x3fa)];}else'xdhGJ'!==_0x192d6d(0x67b)?this[_0x192d6d(0x599)]()?this[_0x192d6d(0x245)]():_0x59fe33[_0x192d6d(0x28e)][_0x192d6d(0x5ef)][_0x192d6d(0x17d)](this):VisuMZ['CoreEngine']['Sprite_Actor_setActorHome'][_0x192d6d(0x17d)](this,_0x40b8d0);},Sprite_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x771)]=function(_0xe30cd5){const _0x406299=_0x163f4f;let _0x390e81=Math[_0x406299(0x7f1)](Graphics[_0x406299(0x60a)]/0x2+0xc0);_0x390e81-=Math[_0x406299(0x966)]((Graphics['width']-Graphics[_0x406299(0x2a2)])/0x2),_0x390e81+=_0xe30cd5*0x20;let _0xe5b2ea=Graphics['height']-0xc8-$gameParty[_0x406299(0x4c5)]()*0x30;_0xe5b2ea-=Math['floor']((Graphics['height']-Graphics[_0x406299(0x37c)])/0x2),_0xe5b2ea+=_0xe30cd5*0x30,this['setHome'](_0x390e81,_0xe5b2ea);},Sprite_Actor[_0x163f4f(0x5b0)]['retreat']=function(){this['startMove'](0x4b0,0x0,0x78);},Sprite_Animation[_0x163f4f(0x5b0)][_0x163f4f(0x607)]=function(_0x38be90){const _0x51f2b3=_0x163f4f;this[_0x51f2b3(0x416)]=_0x38be90;},VisuMZ[_0x163f4f(0x28e)]['Sprite_Animation_processSoundTimings']=Sprite_Animation[_0x163f4f(0x5b0)][_0x163f4f(0x8e9)],Sprite_Animation[_0x163f4f(0x5b0)][_0x163f4f(0x8e9)]=function(){const _0x4b7b59=_0x163f4f;if(this[_0x4b7b59(0x416)])return;VisuMZ[_0x4b7b59(0x28e)]['Sprite_Animation_processSoundTimings'][_0x4b7b59(0x17d)](this);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x4cb)]=Sprite_Animation[_0x163f4f(0x5b0)][_0x163f4f(0x1d1)],Sprite_Animation[_0x163f4f(0x5b0)][_0x163f4f(0x1d1)]=function(_0x473a04){const _0x2ba1d1=_0x163f4f;this['isAnimationOffsetXMirrored']()?this['setViewportCoreEngineFix'](_0x473a04):VisuMZ[_0x2ba1d1(0x28e)][_0x2ba1d1(0x4cb)][_0x2ba1d1(0x17d)](this,_0x473a04);},Sprite_Animation['prototype'][_0x163f4f(0x981)]=function(){const _0x5b67a4=_0x163f4f;if(!this[_0x5b67a4(0x265)])return![];const _0x562486=this[_0x5b67a4(0x265)][_0x5b67a4(0x4d6)]||'';if(_0x562486[_0x5b67a4(0x4be)](/<MIRROR OFFSET X>/i))return!![];if(_0x562486[_0x5b67a4(0x4be)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x5b67a4(0x28e)]['Settings'][_0x5b67a4(0x7f7)][_0x5b67a4(0x7d2)];},Sprite_Animation['prototype']['setViewportCoreEngineFix']=function(_0x4ad2a7){const _0xa4bffb=_0x163f4f,_0x3f0d91=this[_0xa4bffb(0x511)],_0x498a9d=this[_0xa4bffb(0x511)],_0x4c23f8=this[_0xa4bffb(0x265)][_0xa4bffb(0x688)]*(this[_0xa4bffb(0x7da)]?-0x1:0x1)-_0x3f0d91/0x2,_0x31e5fd=this[_0xa4bffb(0x265)][_0xa4bffb(0x915)]-_0x498a9d/0x2,_0x44abe6=this[_0xa4bffb(0x804)](_0x4ad2a7);_0x4ad2a7['gl'][_0xa4bffb(0x815)](_0x4c23f8+_0x44abe6['x'],_0x31e5fd+_0x44abe6['y'],_0x3f0d91,_0x498a9d);},Sprite_Animation[_0x163f4f(0x5b0)]['targetSpritePosition']=function(_0x25cfae){const _0x529217=_0x163f4f;if(_0x25cfae[_0x529217(0xf3)]){}const _0x36dc06=this[_0x529217(0x265)][_0x529217(0x4d6)];let _0xcc16ab=_0x25cfae[_0x529217(0x107)]*_0x25cfae[_0x529217(0x701)]['y'],_0x3b4e93=0x0,_0x582bfc=-_0xcc16ab/0x2;if(_0x36dc06[_0x529217(0x4be)](/<(?:HEAD|HEADER|TOP)>/i))_0x582bfc=-_0xcc16ab;if(_0x36dc06[_0x529217(0x4be)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x582bfc=0x0;if(this[_0x529217(0x265)][_0x529217(0x4f8)])_0x582bfc=0x0;if(_0x36dc06[_0x529217(0x4be)](/<(?:LEFT)>/i))_0x3b4e93=-_0x25cfae[_0x529217(0x60a)]/0x2;if(_0x36dc06['match'](/<(?:RIGHT)>/i))_0x3b4e93=_0x25cfae['width']/0x2;_0x36dc06[_0x529217(0x4be)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x3b4e93=Number(RegExp['$1'])*_0x25cfae[_0x529217(0x60a)]);_0x36dc06[_0x529217(0x4be)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x529217(0x3a2)!==_0x529217(0x3a2)?(this['updateScrollBarVisibility'](),this[_0x529217(0x15f)](!![]),this[_0x529217(0x15f)](![]),this[_0x529217(0x72c)](!![]),this[_0x529217(0x72c)](![])):_0x582bfc=(0x1-Number(RegExp['$1']))*-_0xcc16ab);_0x36dc06[_0x529217(0x4be)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x3b4e93=Number(RegExp['$1'])*_0x25cfae['width'],_0x582bfc=(0x1-Number(RegExp['$2']))*-_0xcc16ab);if(_0x36dc06[_0x529217(0x4be)](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x3b4e93+=Number(RegExp['$1']);if(_0x36dc06['match'](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x582bfc+=Number(RegExp['$1']);_0x36dc06['match'](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x3b4e93+=Number(RegExp['$1']),_0x582bfc+=Number(RegExp['$2']));const _0x1a442f=new Point(_0x3b4e93,_0x582bfc);return _0x25cfae['updateTransform'](),_0x25cfae[_0x529217(0x2d1)]['apply'](_0x1a442f);},Sprite_AnimationMV[_0x163f4f(0x5b0)]['setupRate']=function(){const _0x219bd5=_0x163f4f;this['_rate']=VisuMZ['CoreEngine']['Settings'][_0x219bd5(0x7f7)][_0x219bd5(0x30c)]??0x4,this[_0x219bd5(0x253)](),this[_0x219bd5(0x43e)]=this['_rate']['clamp'](0x1,0xa);},Sprite_AnimationMV[_0x163f4f(0x5b0)][_0x163f4f(0x253)]=function(){const _0x4fede0=_0x163f4f;if(!this[_0x4fede0(0x265)]);const _0x4e4cbc=this[_0x4fede0(0x265)][_0x4fede0(0x4d6)]||'';_0x4e4cbc[_0x4fede0(0x4be)](/<RATE:[ ](\d+)>/i)&&(_0x4fede0(0x62a)===_0x4fede0(0x62a)?this[_0x4fede0(0x43e)]=(Number(RegExp['$1'])||0x1)[_0x4fede0(0x933)](0x1,0xa):(_0x45a237+=_0x8d8ac+'\x0a',_0x43815f+=_0x4fede0(0x441)['format'](_0x25aa06['parameters'][0x0])));},Sprite_AnimationMV[_0x163f4f(0x5b0)][_0x163f4f(0x607)]=function(_0x94e0c2){const _0x56d1a7=_0x163f4f;this[_0x56d1a7(0x416)]=_0x94e0c2;},VisuMZ[_0x163f4f(0x28e)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV['prototype'][_0x163f4f(0x939)],Sprite_AnimationMV[_0x163f4f(0x5b0)][_0x163f4f(0x939)]=function(_0xe674f4){const _0xbff46e=_0x163f4f;this[_0xbff46e(0x416)]&&(_0xe674f4=JsonEx[_0xbff46e(0x10b)](_0xe674f4),_0xe674f4['se']&&(_0xe674f4['se'][_0xbff46e(0x56c)]=0x0)),VisuMZ[_0xbff46e(0x28e)][_0xbff46e(0x7ea)]['call'](this,_0xe674f4);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x355)]=Sprite_AnimationMV[_0x163f4f(0x5b0)][_0x163f4f(0x8dd)],Sprite_AnimationMV[_0x163f4f(0x5b0)][_0x163f4f(0x8dd)]=function(){const _0x2dc1f7=_0x163f4f;VisuMZ[_0x2dc1f7(0x28e)]['Sprite_AnimationMV_updatePosition'][_0x2dc1f7(0x17d)](this);if(this[_0x2dc1f7(0x265)][_0x2dc1f7(0x3f2)]===0x3){if(_0x2dc1f7(0x650)===_0x2dc1f7(0x650)){if(this['x']===0x0)this['x']=Math['round'](Graphics['width']/0x2);if(this['y']===0x0)this['y']=Math[_0x2dc1f7(0x7f1)](Graphics[_0x2dc1f7(0x107)]/0x2);}else _0x1819bb*=_0x41b4d9(_0x33fc0d);}},Sprite_Damage[_0x163f4f(0x5b0)][_0x163f4f(0x26f)]=function(_0x2b6f16){const _0x334b19=_0x163f4f;let _0x362035=Math[_0x334b19(0x223)](_0x2b6f16)['toString']();if(this[_0x334b19(0x361)]()){if(_0x334b19(0x86f)===_0x334b19(0x6c9)){if(this[_0x334b19(0x9c4)]===_0x4e0e0c)this['initRotationCoreEngine']();return this[_0x334b19(0x9c4)][_0x334b19(0x6cf)]||0x0;}else _0x362035=VisuMZ['GroupDigits'](_0x362035);}const _0x3a3523=this['fontSize'](),_0x108c6f=Math[_0x334b19(0x966)](_0x3a3523*0.75);for(let _0x5619bc=0x0;_0x5619bc<_0x362035[_0x334b19(0xf7)];_0x5619bc++){if('TOQCz'===_0x334b19(0x4b8)){const _0x24d4e6=this[_0x334b19(0x1ae)](_0x108c6f,_0x3a3523);_0x24d4e6[_0x334b19(0x2dc)][_0x334b19(0x887)](_0x362035[_0x5619bc],0x0,0x0,_0x108c6f,_0x3a3523,_0x334b19(0x944)),_0x24d4e6['x']=(_0x5619bc-(_0x362035['length']-0x1)/0x2)*_0x108c6f,_0x24d4e6['dy']=-_0x5619bc;}else{_0x2c2d75[_0x334b19(0x683)]!==0x0?(_0x480868[_0x334b19(0x7d8)]=0x0,_0x308a0a[_0x334b19(0x692)]=0x0,_0x58ec78['meVolume']=0x0,_0x44943d['seVolume']=0x0):(_0x28fa2d['bgmVolume']=0x64,_0x38e35f['bgsVolume']=0x64,_0x1ed15c[_0x334b19(0x87a)]=0x64,_0x3902ff['seVolume']=0x64);_0xd1c49[_0x334b19(0x211)]();if(this[_0x334b19(0x60e)]['constructor']===_0x1734bd){if(this[_0x334b19(0x60e)][_0x334b19(0x108)])this['_scene'][_0x334b19(0x108)]['refresh']();if(this[_0x334b19(0x60e)][_0x334b19(0x8c4)])this[_0x334b19(0x60e)][_0x334b19(0x8c4)][_0x334b19(0x595)]();}}}},Sprite_Damage[_0x163f4f(0x5b0)][_0x163f4f(0x361)]=function(){const _0x226481=_0x163f4f;return VisuMZ['CoreEngine']['Settings'][_0x226481(0x7f7)][_0x226481(0x267)];},Sprite_Damage[_0x163f4f(0x5b0)][_0x163f4f(0x77e)]=function(){return ColorManager['outlineColorDmg']();},VisuMZ['CoreEngine'][_0x163f4f(0x708)]=Sprite_Gauge[_0x163f4f(0x5b0)][_0x163f4f(0x4e2)],Sprite_Gauge[_0x163f4f(0x5b0)][_0x163f4f(0x4e2)]=function(){const _0x5a48a5=_0x163f4f;return VisuMZ['CoreEngine'][_0x5a48a5(0x708)]['call'](this)[_0x5a48a5(0x933)](0x0,0x1);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x7d7)]=Sprite_Gauge[_0x163f4f(0x5b0)]['currentValue'],Sprite_Gauge['prototype'][_0x163f4f(0x770)]=function(){const _0x577ecb=_0x163f4f;let _0x541fc3=VisuMZ[_0x577ecb(0x28e)][_0x577ecb(0x7d7)][_0x577ecb(0x17d)](this);return _0x541fc3;},Sprite_Gauge['prototype']['drawValue']=function(){const _0x4e9a4d=_0x163f4f;let _0x37ed3b=this[_0x4e9a4d(0x770)]();this[_0x4e9a4d(0x361)]()&&(_0x37ed3b=VisuMZ[_0x4e9a4d(0x53a)](_0x37ed3b));const _0x2f93ee=this[_0x4e9a4d(0x5db)]()-0x1,_0x31dfca=this[_0x4e9a4d(0x634)]?this['textHeight']():this[_0x4e9a4d(0x8b0)]();this['setupValueFont'](),this[_0x4e9a4d(0x2dc)]['drawText'](_0x37ed3b,0x0,0x0,_0x2f93ee,_0x31dfca,_0x4e9a4d(0x3fc));},Sprite_Gauge[_0x163f4f(0x5b0)][_0x163f4f(0x73c)]=function(){return 0x3;},Sprite_Gauge[_0x163f4f(0x5b0)]['useDigitGrouping']=function(){const _0x3910eb=_0x163f4f;return VisuMZ[_0x3910eb(0x28e)][_0x3910eb(0x403)]['QoL']['DigitGroupingGaugeSprites'];},Sprite_Gauge[_0x163f4f(0x5b0)][_0x163f4f(0x77e)]=function(){const _0x30f255=_0x163f4f;return ColorManager[_0x30f255(0x627)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x36b)]=Sprite_Picture['prototype'][_0x163f4f(0x23e)],Sprite_Picture[_0x163f4f(0x5b0)]['loadBitmap']=function(){const _0x1d4fb5=_0x163f4f;this['_pictureName']&&this['_pictureName'][_0x1d4fb5(0x4be)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x1d4fb5(0x3ae)](Number(RegExp['$1'])):VisuMZ[_0x1d4fb5(0x28e)]['Sprite_Picture_loadBitmap'][_0x1d4fb5(0x17d)](this);},Sprite_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x3ae)]=function(_0x41dbec){const _0x2b036f=_0x163f4f,_0x51f495=ImageManager[_0x2b036f(0x837)],_0x516f0c=ImageManager[_0x2b036f(0x24a)],_0xf2ff49=this[_0x2b036f(0x41b)][_0x2b036f(0x4be)](/SMOOTH/i);this[_0x2b036f(0x2dc)]=new Bitmap(_0x51f495,_0x516f0c);const _0x1bf635=ImageManager['loadSystem'](_0x2b036f(0x9a6)),_0x469449=_0x41dbec%0x10*_0x51f495,_0x16e58a=Math[_0x2b036f(0x966)](_0x41dbec/0x10)*_0x516f0c;this[_0x2b036f(0x2dc)][_0x2b036f(0x31f)]=_0xf2ff49,this[_0x2b036f(0x2dc)][_0x2b036f(0x9e9)](_0x1bf635,_0x469449,_0x16e58a,_0x51f495,_0x516f0c,0x0,0x0,_0x51f495,_0x516f0c);};function Sprite_TitlePictureButton(){this['initialize'](...arguments);}Sprite_TitlePictureButton['prototype']=Object['create'](Sprite_Clickable[_0x163f4f(0x5b0)]),Sprite_TitlePictureButton['prototype'][_0x163f4f(0x2d2)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(_0x18edf3){const _0x2d88d7=_0x163f4f;Sprite_Clickable[_0x2d88d7(0x5b0)][_0x2d88d7(0x52c)][_0x2d88d7(0x17d)](this),this[_0x2d88d7(0x28d)]=_0x18edf3,this[_0x2d88d7(0x146)]=null,this[_0x2d88d7(0x36e)]();},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x36e)]=function(){const _0x1b29e4=_0x163f4f;this['x']=Graphics['width'],this['y']=Graphics[_0x1b29e4(0x107)],this[_0x1b29e4(0x4c2)]=![],this[_0x1b29e4(0x3f6)]();},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x3f6)]=function(){const _0x4ca684=_0x163f4f;this[_0x4ca684(0x2dc)]=ImageManager[_0x4ca684(0x775)](this['_data']['PictureFilename']),this['bitmap'][_0x4ca684(0x73b)](this[_0x4ca684(0x737)][_0x4ca684(0x295)](this));},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x737)]=function(){const _0x5e1854=_0x163f4f;this[_0x5e1854(0x28d)][_0x5e1854(0x8b9)][_0x5e1854(0x17d)](this),this[_0x5e1854(0x28d)][_0x5e1854(0x814)][_0x5e1854(0x17d)](this),this[_0x5e1854(0x1b9)](this[_0x5e1854(0x28d)][_0x5e1854(0x584)][_0x5e1854(0x295)](this));},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x35499a=_0x163f4f;Sprite_Clickable['prototype'][_0x35499a(0x168)]['call'](this),this[_0x35499a(0x3a5)](),this[_0x35499a(0x2ea)]();},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x5cf)]=function(){const _0x5ad355=_0x163f4f;return VisuMZ[_0x5ad355(0x28e)][_0x5ad355(0x403)][_0x5ad355(0x83d)][_0x5ad355(0x1fc)][_0x5ad355(0x9b0)];},Sprite_TitlePictureButton['prototype'][_0x163f4f(0x3a5)]=function(){const _0x255c0f=_0x163f4f;this[_0x255c0f(0x680)]||this['_hovered']?this[_0x255c0f(0x9f9)]=0xff:_0x255c0f(0x431)==='UDrnM'?(this[_0x255c0f(0x9f9)]+=this['visible']?this[_0x255c0f(0x5cf)]():-0x1*this[_0x255c0f(0x5cf)](),this[_0x255c0f(0x9f9)]=Math[_0x255c0f(0x112)](0xc0,this[_0x255c0f(0x9f9)])):_0x309655+=_0x255c0f(0x35a);},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x1b9)]=function(_0x4a7e33){this['_clickHandler']=_0x4a7e33;},Sprite_TitlePictureButton[_0x163f4f(0x5b0)][_0x163f4f(0x848)]=function(){const _0x27e8dc=_0x163f4f;this[_0x27e8dc(0x146)]&&this['_clickHandler']();},VisuMZ['CoreEngine'][_0x163f4f(0x6c3)]=Spriteset_Base[_0x163f4f(0x5b0)]['initialize'],Spriteset_Base['prototype'][_0x163f4f(0x52c)]=function(){const _0x5e51f1=_0x163f4f;VisuMZ['CoreEngine'][_0x5e51f1(0x6c3)][_0x5e51f1(0x17d)](this),this[_0x5e51f1(0x14f)]();},Spriteset_Base['prototype']['initMembersCoreEngine']=function(){const _0x533af7=_0x163f4f;this['_fauxAnimationSprites']=[],this['_pointAnimationSprites']=[],this[_0x533af7(0x533)]=this[_0x533af7(0x701)]['x'],this[_0x533af7(0x7e9)]=this['scale']['y'];},VisuMZ[_0x163f4f(0x28e)]['Spriteset_Base_destroy']=Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x374)],Spriteset_Base[_0x163f4f(0x5b0)]['destroy']=function(_0x449c00){const _0x26223c=_0x163f4f;this[_0x26223c(0x458)](),this['removeAllPointAnimations'](),VisuMZ[_0x26223c(0x28e)][_0x26223c(0x514)][_0x26223c(0x17d)](this,_0x449c00);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x551)]=Spriteset_Base[_0x163f4f(0x5b0)]['update'],Spriteset_Base['prototype'][_0x163f4f(0x168)]=function(){const _0x438499=_0x163f4f;VisuMZ['CoreEngine'][_0x438499(0x551)]['call'](this),this[_0x438499(0x272)](),this[_0x438499(0x696)](),this[_0x438499(0x84a)](),this['updatePointAnimations']();},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x272)]=function(){},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x696)]=function(){const _0x24258d=_0x163f4f;if(!VisuMZ[_0x24258d(0x28e)][_0x24258d(0x403)][_0x24258d(0x7f7)]['AntiZoomPictures'])return;if(this[_0x24258d(0x533)]===this['scale']['x']&&this[_0x24258d(0x7e9)]===this[_0x24258d(0x701)]['y'])return;this['adjustPictureAntiZoom'](),this[_0x24258d(0x533)]=this[_0x24258d(0x701)]['x'],this['_cacheScaleY']=this[_0x24258d(0x701)]['y'];},Spriteset_Base['prototype'][_0x163f4f(0x4f4)]=function(){const _0x34dc98=_0x163f4f;if(SceneManager[_0x34dc98(0x2f5)]()&&Spriteset_Map['DETACH_PICTURE_CONTAINER'])return;else{if(SceneManager[_0x34dc98(0x756)]()&&Spriteset_Battle[_0x34dc98(0x350)])return;}this[_0x34dc98(0x701)]['x']!==0x0&&(this[_0x34dc98(0x2ae)]['scale']['x']=0x1/this['scale']['x'],this[_0x34dc98(0x2ae)]['x']=-(this['x']/this['scale']['x'])),this['scale']['y']!==0x0&&(this[_0x34dc98(0x2ae)][_0x34dc98(0x701)]['y']=0x1/this[_0x34dc98(0x701)]['y'],this[_0x34dc98(0x2ae)]['y']=-(this['y']/this[_0x34dc98(0x701)]['y']));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x326)]=Spriteset_Base['prototype']['updatePosition'],Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x8dd)]=function(){const _0x19f6f4=_0x163f4f;VisuMZ[_0x19f6f4(0x28e)][_0x19f6f4(0x326)][_0x19f6f4(0x17d)](this),this['updatePositionCoreEngine']();},Spriteset_Base['prototype'][_0x163f4f(0x2c5)]=function(){const _0x47496e=_0x163f4f;if(!$gameScreen)return;if($gameScreen['_shakeDuration']<=0x0)return;this['x']-=Math[_0x47496e(0x7f1)]($gameScreen[_0x47496e(0x643)]());const _0x3a89d9=$gameScreen[_0x47496e(0x979)]();switch($gameScreen[_0x47496e(0x979)]()){case _0x47496e(0x14e):this[_0x47496e(0x293)]();break;case'horizontal':this[_0x47496e(0xa08)]();break;case _0x47496e(0x351):this['updatePositionCoreEngineShakeVert']();break;default:this['updatePositionCoreEngineShakeRand']();break;}},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x293)]=function(){const _0x1de005=_0x163f4f,_0x145f52=VisuMZ['CoreEngine']['Settings'][_0x1de005(0x969)];if(_0x145f52&&_0x145f52[_0x1de005(0x4e4)]){if('MzDEd'!==_0x1de005(0x26c))return _0x145f52[_0x1de005(0x4e4)]['call'](this);else _0x22a43f[_0x1de005(0x28e)]['Game_Action_setAttack'][_0x1de005(0x17d)](this);}this['x']+=Math['round']($gameScreen[_0x1de005(0x643)]());},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x8e4)]=function(){const _0x3ed3cf=_0x163f4f,_0x458ea6=VisuMZ[_0x3ed3cf(0x28e)][_0x3ed3cf(0x403)][_0x3ed3cf(0x969)];if(_0x458ea6&&_0x458ea6['randomJS']){if('yKYci'==='qKmUx'){if(_0x1fb392[_0x3ed3cf(0x28e)][_0x3ed3cf(0x403)][_0x3ed3cf(0x7f7)][_0x3ed3cf(0x174)]??!![])for(const _0x321345 in _0x18abd4){const _0x3a14bd=_0xc21297[_0x321345];_0x3a14bd[_0x3ed3cf(0x4d6)][_0x3ed3cf(0x4be)](/(.*)\/(.*)/i)&&(_0x3a14bd[_0x3ed3cf(0x4d6)]=_0xb06d99(_0x21c960['$2'][_0x3ed3cf(0x376)]()));}}else return _0x458ea6[_0x3ed3cf(0x6b1)]['call'](this);}const _0x39cd89=$gameScreen['_shakePower']*0.75,_0x3c85af=$gameScreen[_0x3ed3cf(0x162)]*0.6,_0x116baf=$gameScreen['_shakeDuration'];this['x']+=Math[_0x3ed3cf(0x7f1)](Math[_0x3ed3cf(0x9a0)](_0x39cd89)-Math[_0x3ed3cf(0x9a0)](_0x3c85af))*(Math[_0x3ed3cf(0x112)](_0x116baf,0x1e)*0.5),this['y']+=Math[_0x3ed3cf(0x7f1)](Math['randomInt'](_0x39cd89)-Math['randomInt'](_0x3c85af))*(Math[_0x3ed3cf(0x112)](_0x116baf,0x1e)*0.5);},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0xa08)]=function(){const _0x5369a0=_0x163f4f,_0x37a45f=VisuMZ['CoreEngine'][_0x5369a0(0x403)]['ScreenShake'];if(_0x37a45f&&_0x37a45f['horzJS']){if('efZQr'!==_0x5369a0(0x46e))this[_0x5369a0(0x4e0)](_0x3689af);else return _0x37a45f[_0x5369a0(0x8c7)]['call'](this);}const _0x52d650=$gameScreen['_shakePower']*0.75,_0x55f48f=$gameScreen[_0x5369a0(0x162)]*0.6,_0x1ccf9e=$gameScreen[_0x5369a0(0x77d)];this['x']+=Math['round'](Math['randomInt'](_0x52d650)-Math[_0x5369a0(0x9a0)](_0x55f48f))*(Math[_0x5369a0(0x112)](_0x1ccf9e,0x1e)*0.5);},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x119)]=function(){const _0x2c9cd=_0x163f4f,_0x369047=VisuMZ[_0x2c9cd(0x28e)][_0x2c9cd(0x403)][_0x2c9cd(0x969)];if(_0x369047&&_0x369047[_0x2c9cd(0x7a4)])return _0x369047[_0x2c9cd(0x7a4)][_0x2c9cd(0x17d)](this);const _0x1d8c14=$gameScreen[_0x2c9cd(0x5e4)]*0.75,_0x681657=$gameScreen[_0x2c9cd(0x162)]*0.6,_0x544da3=$gameScreen[_0x2c9cd(0x77d)];this['y']+=Math[_0x2c9cd(0x7f1)](Math[_0x2c9cd(0x9a0)](_0x1d8c14)-Math[_0x2c9cd(0x9a0)](_0x681657))*(Math[_0x2c9cd(0x112)](_0x544da3,0x1e)*0.5);},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x84a)]=function(){const _0x2c6c5f=_0x163f4f;for(const _0x578618 of this[_0x2c6c5f(0x4ad)]){if(_0x2c6c5f(0x8a7)!==_0x2c6c5f(0x1d3))!_0x578618[_0x2c6c5f(0x872)]()&&this['removeFauxAnimation'](_0x578618);else return 0x0;}this[_0x2c6c5f(0x201)]();},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x201)]=function(){const _0x55e60f=_0x163f4f;for(;;){if(_0x55e60f(0x2ac)!==_0x55e60f(0x2ac))return _0x39be58['CoreEngine']['Settings'][_0x55e60f(0x7f7)][_0x55e60f(0x96c)]?this[_0x55e60f(0x3a7)](_0x49a3b8):_0x3f3d5d[_0x55e60f(0x28e)][_0x55e60f(0x89e)][_0x55e60f(0x17d)](this,_0x1f2b8a);else{const _0x406fa4=$gameTemp[_0x55e60f(0x836)]();if(_0x406fa4){if('beuKT'===_0x55e60f(0x65c))this[_0x55e60f(0x7b0)](_0x406fa4);else{var _0x1fe62c=_0x532e25(_0x4ec5aa['$1']);try{_0x2b7f7f*=_0x286a96(_0x1fe62c);}catch(_0x578dee){if(_0x39e124[_0x55e60f(0x92a)]())_0x5f4ad2[_0x55e60f(0x5b5)](_0x578dee);}}}else{if(_0x55e60f(0x4a2)===_0x55e60f(0x292))return this[_0x55e60f(0x595)]();else break;}}}},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x7b0)]=function(_0x17817f){const _0x429b4c=_0x163f4f,_0x3102fe=$dataAnimations[_0x17817f[_0x429b4c(0x7ed)]],_0x1d41bd=_0x17817f[_0x429b4c(0x2b9)],_0x565ed4=_0x17817f[_0x429b4c(0x69c)],_0x24eab3=_0x17817f[_0x429b4c(0x317)];let _0x3ad7ad=this[_0x429b4c(0x126)]();const _0x18ec94=this[_0x429b4c(0x1b7)]();if(this[_0x429b4c(0x9f5)](_0x3102fe)){if(_0x429b4c(0x513)!==_0x429b4c(0x513)){const _0x3e9876=_0x429b4c(0x184);this[_0x429b4c(0x221)]=this[_0x429b4c(0x221)]||{};if(this[_0x429b4c(0x221)][_0x3e9876])return this[_0x429b4c(0x221)][_0x3e9876];const _0x381135=_0x35209d[_0x429b4c(0x28e)]['Settings'][_0x429b4c(0x142)][_0x429b4c(0x2c2)];return this['getColorDataFromPluginParameters'](_0x3e9876,_0x381135);}else for(const _0x2e6204 of _0x1d41bd){this[_0x429b4c(0x54d)]([_0x2e6204],_0x3102fe,_0x565ed4,_0x3ad7ad,_0x24eab3),_0x3ad7ad+=_0x18ec94;}}else this['createFauxAnimationSprite'](_0x1d41bd,_0x3102fe,_0x565ed4,_0x3ad7ad,_0x24eab3);},Spriteset_Base['prototype'][_0x163f4f(0x6ee)]=function(_0xd92654,_0x27c52e,_0x290161,_0x521564){const _0xc22c6e=_0x163f4f,_0x238f71=this[_0xc22c6e(0x480)](_0x27c52e),_0x3c7263=new(_0x238f71?Sprite_AnimationMV:Sprite_Animation)(),_0x10680c=this[_0xc22c6e(0x35c)](_0xd92654),_0xc57bd4=this[_0xc22c6e(0x126)](),_0x7e0da5=_0x521564>_0xc57bd4?this[_0xc22c6e(0x928)]():null;if(this['animationShouldMirror'](_0xd92654[0x0])){if(_0xc22c6e(0x9fd)===_0xc22c6e(0x827)){_0x2a54e7['ConvertParams'](_0x3572f1,_0x5ad879);const _0x4d389d=_0x7658fa['Type']||_0xc22c6e(0x214),_0xdc3234=_0x1b3809['Power']['clamp'](0x1,0x9),_0x3ddbf5=_0x213171[_0xc22c6e(0x62c)][_0xc22c6e(0x933)](0x1,0x9),_0xd9103c=_0x8446ae[_0xc22c6e(0x757)]||0x1,_0x1edb94=_0x22d1e9[_0xc22c6e(0x69a)];_0xcbab89[_0xc22c6e(0x703)](_0x4d389d),_0x37103c[_0xc22c6e(0x5bd)](_0xdc3234,_0x3ddbf5,_0xd9103c);if(_0x1edb94){const _0x395eff=_0x22d043[_0xc22c6e(0x19d)]();if(_0x395eff)_0x395eff[_0xc22c6e(0x626)](_0xd9103c);}}else _0x290161=!_0x290161;}_0x3c7263[_0xc22c6e(0x338)]=_0xd92654,_0x3c7263[_0xc22c6e(0x36e)](_0x10680c,_0x27c52e,_0x290161,_0x521564,_0x7e0da5),this['addAnimationSpriteToContainer'](_0x3c7263),this['_animationSprites'][_0xc22c6e(0x9ca)](_0x3c7263);},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x54d)]=function(_0x54f0ff,_0x4475b0,_0x24310d,_0x40592c,_0x489cbe){const _0x2f3070=_0x163f4f,_0x4672f5=this[_0x2f3070(0x480)](_0x4475b0),_0x42b5a1=new(_0x4672f5?Sprite_AnimationMV:Sprite_Animation)(),_0x449018=this['makeTargetSprites'](_0x54f0ff);this['animationShouldMirror'](_0x54f0ff[0x0])&&(_0x2f3070(0x54a)!==_0x2f3070(0x54a)?(this['_cancelButton']['x']=_0x107e0e['boxWidth']+0x4,this[_0x2f3070(0x6da)]()?this[_0x2f3070(0x80b)]['y']=_0x324324[_0x2f3070(0x37c)]-this['buttonAreaHeight']():this['_cancelButton']['y']=0x0):_0x24310d=!_0x24310d);_0x42b5a1[_0x2f3070(0x338)]=_0x54f0ff,_0x42b5a1[_0x2f3070(0x36e)](_0x449018,_0x4475b0,_0x24310d,_0x40592c),_0x42b5a1[_0x2f3070(0x607)](_0x489cbe),this[_0x2f3070(0x530)](_0x42b5a1);if(this[_0x2f3070(0x1e0)])this[_0x2f3070(0x1e0)]['remove'](_0x42b5a1);this['_fauxAnimationSprites']['push'](_0x42b5a1);},Spriteset_Base[_0x163f4f(0x5b0)]['addAnimationSpriteToContainer']=function(_0x1cb049){const _0xaacc4e=_0x163f4f;this['_effectsContainer'][_0xaacc4e(0x716)](_0x1cb049);},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x676)]=function(_0x365a8e){const _0xc883cf=_0x163f4f;this[_0xc883cf(0x1e0)][_0xc883cf(0x816)](_0x365a8e),this[_0xc883cf(0x95f)](_0x365a8e);for(const _0x2429b3 of _0x365a8e[_0xc883cf(0x338)]){if(_0xc883cf(0x9b4)===_0xc883cf(0x9b4)){if(_0x2429b3['endAnimation']){if(_0xc883cf(0x59f)!=='aDSex')return this[_0xc883cf(0x1d2)]();else _0x2429b3[_0xc883cf(0x48c)]();}}else _0x4dbd59+=_0x5c89dd+'\x0a',_0x4de2c9+=_0xc883cf(0x3e9),_0x4d96b9[_0xc883cf(0x346)][0x4]!==''&&_0x3eaa62[_0xc883cf(0x346)][0x4]!==_0x12d90&&(_0x412bfa+='【%1】\x0a'[_0xc883cf(0x889)](_0x467bbc['parameters'][0x4]));}_0x365a8e['destroy']();},Spriteset_Base['prototype'][_0x163f4f(0x471)]=function(_0x3a2ab8){const _0x15c12e=_0x163f4f;this[_0x15c12e(0x4ad)][_0x15c12e(0x816)](_0x3a2ab8),this['removeAnimationFromContainer'](_0x3a2ab8);for(const _0x296603 of _0x3a2ab8[_0x15c12e(0x338)]){'DcZuj'!==_0x15c12e(0x16c)?_0x296603[_0x15c12e(0x48c)]&&_0x296603[_0x15c12e(0x48c)]():_0x2663e7[_0x15c12e(0x92a)]()&&_0x2b14bb[_0x15c12e(0x28e)][_0x15c12e(0x403)][_0x15c12e(0x7f7)][_0x15c12e(0x53c)]&&(_0x25d44d[_0x15c12e(0x695)]=!_0x14b208[_0x15c12e(0x695)]);}_0x3a2ab8[_0x15c12e(0x374)]();},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x95f)]=function(_0x3e750f){const _0x567e24=_0x163f4f;this['_effectsContainer'][_0x567e24(0x99c)](_0x3e750f);},Spriteset_Base['prototype'][_0x163f4f(0x458)]=function(){const _0xc46668=_0x163f4f;for(const _0x55c472 of this[_0xc46668(0x4ad)]){this['removeFauxAnimation'](_0x55c472);}},Spriteset_Base['prototype'][_0x163f4f(0x92f)]=function(){const _0x341ea7=_0x163f4f;return this[_0x341ea7(0x4ad)]['length']>0x0;},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x2fd)]=function(){const _0x7796b2=_0x163f4f;for(const _0x5a64c6 of this[_0x7796b2(0x4ec)]){if(!_0x5a64c6[_0x7796b2(0x872)]()){if(_0x7796b2(0x363)===_0x7796b2(0x363))this[_0x7796b2(0x95d)](_0x5a64c6);else{const _0x18ce28=_0x5c5084['random']()<=_0x2c2ed0;_0x1a9052[_0x7796b2(0x5a7)](_0x5272ad,_0x18ce28);}}}this[_0x7796b2(0x967)]();},Spriteset_Base[_0x163f4f(0x5b0)]['processPointAnimationRequests']=function(){const _0x5e0ea7=_0x163f4f;for(;;){const _0x30a1bd=$gameTemp[_0x5e0ea7(0x2e2)]();if(_0x30a1bd)this[_0x5e0ea7(0x177)](_0x30a1bd);else{if(_0x5e0ea7(0x45a)!==_0x5e0ea7(0x45a)){if(_0xa53bda[_0x5e0ea7(0x946)][_0x5e0ea7(0x17d)](this)){const _0x3b4928=_0x2ed29e[_0x5e0ea7(0x655)];let _0x25f6d9=_0x326ef2[_0x5e0ea7(0x93b)];if(['',_0x5e0ea7(0x22c)][_0x5e0ea7(0x2b2)](_0x25f6d9))_0x25f6d9=_0x2fc2b8[_0x5e0ea7(0x7fe)][_0x5e0ea7(0x17d)](this);const _0xee1138=_0x501b9c[_0x5e0ea7(0x7fb)][_0x5e0ea7(0x17d)](this),_0x57c4d5=_0x34fbc2['ExtJS'][_0x5e0ea7(0x17d)](this);this[_0x5e0ea7(0x508)](_0x25f6d9,_0x3b4928,_0xee1138,_0x57c4d5),this[_0x5e0ea7(0x82d)](_0x3b4928,_0x247b47[_0x5e0ea7(0x584)][_0x5e0ea7(0x295)](this,_0x57c4d5));}}else break;}}},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x177)]=function(_0x4db998){const _0x3bf106=_0x163f4f,_0x4737a6=$dataAnimations[_0x4db998['animationId']],_0x4412bc=this[_0x3bf106(0x3ea)](_0x4db998),_0x540610=_0x4db998[_0x3bf106(0x69c)],_0x1bbc8b=_0x4db998[_0x3bf106(0x317)];let _0x6737b2=this[_0x3bf106(0x126)]();const _0x3df0cf=this['animationNextDelay']();if(this[_0x3bf106(0x9f5)](_0x4737a6))for(const _0x13c43b of _0x4412bc){_0x3bf106(0x6f7)===_0x3bf106(0x6f7)?(this[_0x3bf106(0x339)]([_0x13c43b],_0x4737a6,_0x540610,_0x6737b2,_0x1bbc8b),_0x6737b2+=_0x3df0cf):(this[_0x3bf106(0x1c6)]=new _0x22ad6e(),this['_image'][_0x3bf106(0x878)]=this[_0x3bf106(0x3d0)][_0x3bf106(0x295)](this),this[_0x3bf106(0x1c6)][_0x3bf106(0x85e)]=this[_0x3bf106(0x158)]['bind'](this),this['_destroyCanvas'](),this[_0x3bf106(0x4f7)]=_0x3bf106(0x16b),_0x4782fe[_0x3bf106(0x135)]()?this['_startDecrypting']():(this[_0x3bf106(0x1c6)]['src']=this[_0x3bf106(0x90e)],![]&&this[_0x3bf106(0x1c6)][_0x3bf106(0x60a)]>0x0&&(this[_0x3bf106(0x1c6)][_0x3bf106(0x878)]=null,this[_0x3bf106(0x3d0)]())));}else{if(_0x3bf106(0x93f)!==_0x3bf106(0x93f)){_0x1764fc=_0x5b0a8a||0x10e,this[_0x3bf106(0x3e4)]();if(_0x33b212[_0x3bf106(0x28e)][_0x3bf106(0x403)]['UI'][_0x3bf106(0x1ad)])this[_0x3bf106(0x243)](_0x2da86e[_0x3bf106(0x648)](),_0xdd853,_0x591151,_0x330442);else{const _0x13882e=_0x13bf4e[_0x3bf106(0x648)]()['replace'](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x1c9e29[_0x3bf106(0x648)](),_0x18e79a,_0x42e368,_0x175d05);}}else this[_0x3bf106(0x339)](_0x4412bc,_0x4737a6,_0x540610,_0x6737b2,_0x1bbc8b);}},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x3ea)]=function(_0x78acbd){const _0x2388e5=_0x163f4f,_0x3647f9=new Sprite_Clickable(),_0x109e58=this[_0x2388e5(0x11f)]();_0x3647f9['x']=_0x78acbd['x']-_0x109e58['x'],_0x3647f9['y']=_0x78acbd['y']-_0x109e58['y'],_0x3647f9['z']=0x64;const _0x261abc=this['getPointAnimationLayer']();return _0x261abc[_0x2388e5(0x716)](_0x3647f9),[_0x3647f9];},Spriteset_Base[_0x163f4f(0x5b0)]['getPointAnimationLayer']=function(){return this;},Spriteset_Map['prototype'][_0x163f4f(0x11f)]=function(){const _0x2d270d=_0x163f4f;return this[_0x2d270d(0x8b7)]||this;},Spriteset_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x11f)]=function(){const _0x176104=_0x163f4f;return this[_0x176104(0x793)]||this;},Spriteset_Base[_0x163f4f(0x5b0)]['createPointAnimationSprite']=function(_0x4e48f4,_0x319db5,_0x14d0e5,_0x177622,_0x4b4e64){const _0x3aa50e=_0x163f4f,_0x5ed7ec=this['isMVAnimation'](_0x319db5),_0x49017b=new(_0x5ed7ec?Sprite_AnimationMV:Sprite_Animation)();_0x49017b[_0x3aa50e(0x338)]=_0x4e48f4,_0x49017b[_0x3aa50e(0x36e)](_0x4e48f4,_0x319db5,_0x14d0e5,_0x177622),_0x49017b['setMute'](_0x4b4e64),this[_0x3aa50e(0x530)](_0x49017b),this[_0x3aa50e(0x4ec)][_0x3aa50e(0x9ca)](_0x49017b);},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x95d)]=function(_0x342b95){const _0x5c47fe=_0x163f4f;this['_pointAnimationSprites'][_0x5c47fe(0x816)](_0x342b95),this[_0x5c47fe(0x671)][_0x5c47fe(0x99c)](_0x342b95);for(const _0x4f99d2 of _0x342b95['targetObjects']){_0x4f99d2[_0x5c47fe(0x48c)]&&_0x4f99d2[_0x5c47fe(0x48c)]();const _0x27268d=this[_0x5c47fe(0x11f)]();if(_0x27268d)_0x27268d[_0x5c47fe(0x99c)](_0x4f99d2);}_0x342b95[_0x5c47fe(0x374)]();},Spriteset_Base[_0x163f4f(0x5b0)]['removeAllPointAnimations']=function(){const _0xf8f527=_0x163f4f;for(const _0x2b2878 of this[_0xf8f527(0x4ec)]){this[_0xf8f527(0x95d)](_0x2b2878);}},Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x60d)]=function(){const _0x2a0df2=_0x163f4f;return this['_pointAnimationSprites'][_0x2a0df2(0xf7)]>0x0;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x829)]=Spriteset_Base[_0x163f4f(0x5b0)][_0x163f4f(0x4d0)],Spriteset_Base[_0x163f4f(0x5b0)]['isAnimationPlaying']=function(){const _0x576e22=_0x163f4f;return VisuMZ[_0x576e22(0x28e)][_0x576e22(0x829)][_0x576e22(0x17d)](this)||this[_0x576e22(0x60d)]();},Spriteset_Map['DETACH_PICTURE_CONTAINER']=VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)]['QoL'][_0x163f4f(0x943)]||![],VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0xe9)]=Scene_Map[_0x163f4f(0x5b0)]['createSpriteset'],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x208)]=function(){const _0x363954=_0x163f4f;VisuMZ['CoreEngine'][_0x363954(0xe9)]['call'](this);if(!Spriteset_Map['DETACH_PICTURE_CONTAINER'])return;const _0x188ce8=this[_0x363954(0x518)];if(!_0x188ce8)return;this[_0x363954(0x2ae)]=_0x188ce8['_pictureContainer'];if(!this[_0x363954(0x2ae)])return;this[_0x363954(0x716)](this[_0x363954(0x2ae)]);},Spriteset_Battle['DETACH_PICTURE_CONTAINER']=VisuMZ[_0x163f4f(0x28e)]['Settings'][_0x163f4f(0x7f7)][_0x163f4f(0x931)]||![],VisuMZ[_0x163f4f(0x28e)]['Scene_Battle_createSpriteset_detach']=Scene_Battle[_0x163f4f(0x5b0)]['createSpriteset'],Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x208)]=function(){const _0x5d20df=_0x163f4f;VisuMZ[_0x5d20df(0x28e)][_0x5d20df(0x7f8)][_0x5d20df(0x17d)](this);if(!Spriteset_Battle[_0x5d20df(0x350)])return;const _0x4ea67f=this[_0x5d20df(0x518)];if(!_0x4ea67f)return;this[_0x5d20df(0x2ae)]=_0x4ea67f[_0x5d20df(0x2ae)];if(!this['_pictureContainer'])return;this[_0x5d20df(0x716)](this['_pictureContainer']);},Spriteset_Battle['prototype']['createBackground']=function(){const _0xc2f075=_0x163f4f;this[_0xc2f075(0x918)]=new PIXI['filters']['BlurFilter'](clamp=!![]),this[_0xc2f075(0x68a)]=new Sprite(),this[_0xc2f075(0x68a)][_0xc2f075(0x2dc)]=SceneManager[_0xc2f075(0x5ea)](),this[_0xc2f075(0x68a)][_0xc2f075(0x470)]=[this['_backgroundFilter']],this[_0xc2f075(0x1e9)]['addChild'](this[_0xc2f075(0x68a)]);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x898)]=Spriteset_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x63d)],Spriteset_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x63d)]=function(){const _0x38d7cf=_0x163f4f;this[_0x38d7cf(0x622)]()&&this['repositionEnemiesByResolution'](),VisuMZ['CoreEngine']['Spriteset_Battle_createEnemies']['call'](this);},Spriteset_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x622)]=function(){const _0x3ff47c=_0x163f4f,_0x407b25=VisuMZ[_0x3ff47c(0x28e)][_0x3ff47c(0x403)][_0x3ff47c(0x7b1)];if(!_0x407b25)return![];if(Utils[_0x3ff47c(0x3b4)]>=_0x3ff47c(0x917)&&!_0x407b25[_0x3ff47c(0x812)]){if(_0x3ff47c(0x948)!==_0x3ff47c(0x948))this[_0x3ff47c(0x382)](_0x3ff47c(0x1fe));else return![];}return _0x407b25[_0x3ff47c(0x606)];},Spriteset_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x465)]=function(){const _0x26456d=_0x163f4f;for(member of $gameTroop['members']()){member[_0x26456d(0x9c3)]();}},VisuMZ['CoreEngine'][_0x163f4f(0x707)]=Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(_0x153e6a){const _0x3a2549=_0x163f4f;_0x153e6a['x']=Math['round'](_0x153e6a['x']),_0x153e6a['y']=Math[_0x3a2549(0x7f1)](_0x153e6a['y']),_0x153e6a[_0x3a2549(0x60a)]=Math[_0x3a2549(0x7f1)](_0x153e6a[_0x3a2549(0x60a)]),_0x153e6a['height']=Math[_0x3a2549(0x7f1)](_0x153e6a[_0x3a2549(0x107)]),this['initDigitGrouping'](),VisuMZ[_0x3a2549(0x28e)][_0x3a2549(0x707)][_0x3a2549(0x17d)](this,_0x153e6a),this[_0x3a2549(0x4d9)]();},Window_Base[_0x163f4f(0x5b0)]['initDigitGrouping']=function(){const _0x4c9cf2=_0x163f4f;this[_0x4c9cf2(0x3fa)]=VisuMZ[_0x4c9cf2(0x28e)]['Settings'][_0x4c9cf2(0x7f7)][_0x4c9cf2(0x354)],this['_digitGroupingEx']=VisuMZ['CoreEngine'][_0x4c9cf2(0x403)]['QoL'][_0x4c9cf2(0x8b5)];},Window_Base[_0x163f4f(0x5b0)]['lineHeight']=function(){const _0x28f7f6=_0x163f4f;return VisuMZ['CoreEngine'][_0x28f7f6(0x403)][_0x28f7f6(0x407)][_0x28f7f6(0x89a)];},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x466)]=function(){const _0x54c01e=_0x163f4f;return VisuMZ[_0x54c01e(0x28e)][_0x54c01e(0x403)][_0x54c01e(0x407)][_0x54c01e(0x565)];},Window_Base['prototype'][_0x163f4f(0x3ca)]=function(){const _0xc36377=_0x163f4f;$gameSystem[_0xc36377(0x693)]?this[_0xc36377(0x94d)]=$gameSystem[_0xc36377(0x693)]():this['backOpacity']=VisuMZ[_0xc36377(0x28e)][_0xc36377(0x403)][_0xc36377(0x407)][_0xc36377(0x11c)];},Window_Base[_0x163f4f(0x5b0)]['translucentOpacity']=function(){const _0xc10433=_0x163f4f;return VisuMZ[_0xc10433(0x28e)][_0xc10433(0x403)][_0xc10433(0x407)]['TranslucentOpacity'];},Window_Base[_0x163f4f(0x5b0)]['openingSpeed']=function(){const _0x2e90dd=_0x163f4f;return VisuMZ[_0x2e90dd(0x28e)][_0x2e90dd(0x403)][_0x2e90dd(0x407)][_0x2e90dd(0x110)];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x54b)]=Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x168)],Window_Base['prototype']['update']=function(){const _0x53abd7=_0x163f4f;VisuMZ[_0x53abd7(0x28e)][_0x53abd7(0x54b)][_0x53abd7(0x17d)](this),this[_0x53abd7(0x321)]();},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x1a2)]=function(){const _0xf77029=_0x163f4f;if(this[_0xf77029(0x29a)]){if(_0xf77029(0x7f0)===_0xf77029(0x7f0))this[_0xf77029(0x319)]+=this['openingSpeed'](),this['isOpen']()&&(this[_0xf77029(0x29a)]=![]);else{const _0x2979fb=_0x1a040e['CoreEngine'][_0xf77029(0x85a)][_0x36580c],_0x55ae75=this[_0x2979fb];return _0x794d1b[_0xf77029(0x28e)][_0xf77029(0x6bb)][_0x225eb5]===_0xf77029(0x534)?_0x55ae75:_0x486950?_0x25af7b(_0x2dc3d8[_0xf77029(0x7f1)](_0x55ae75*0x64))+'%':_0x55ae75;}}},Window_Base['prototype'][_0x163f4f(0x7d5)]=function(){const _0x50729a=_0x163f4f;this['_closing']&&(this[_0x50729a(0x319)]-=this[_0x50729a(0x18b)](),this[_0x50729a(0x6b4)]()&&('nArLa'!==_0x50729a(0x45e)?this[_0x50729a(0x9a1)]=![]:(_0x209563[_0x50729a(0x28e)][_0x50729a(0x139)][_0x50729a(0x17d)](this),_0x13f043=null,_0x1c5129=null,_0x1c3b0a=null,_0x54fb60=null)));},VisuMZ['CoreEngine'][_0x163f4f(0x9c7)]=Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x887)],Window_Base['prototype']['drawText']=function(_0x5b357b,_0xcc146a,_0x121020,_0x95649e,_0x3b3885){const _0x1d1501=_0x163f4f;if(this[_0x1d1501(0x361)]())_0x5b357b=VisuMZ[_0x1d1501(0x53a)](_0x5b357b);VisuMZ[_0x1d1501(0x28e)]['Window_Base_drawText']['call'](this,_0x5b357b,_0xcc146a,_0x121020,_0x95649e,_0x3b3885);},Window_Base['prototype'][_0x163f4f(0x361)]=function(){const _0x457e40=_0x163f4f;return this[_0x457e40(0x3fa)];},VisuMZ[_0x163f4f(0x28e)]['Window_Base_createTextState']=Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x27a)],Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x27a)]=function(_0x320898,_0x57d91,_0x24b970,_0x58fbf7){const _0x3d6d62=_0x163f4f;var _0x5a288c=VisuMZ['CoreEngine'][_0x3d6d62(0x506)][_0x3d6d62(0x17d)](this,_0x320898,_0x57d91,_0x24b970,_0x58fbf7);if(this[_0x3d6d62(0x884)]())_0x5a288c['text']=VisuMZ['GroupDigits'](_0x5a288c[_0x3d6d62(0x2a3)]);return _0x5a288c;},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x884)]=function(){const _0x35888b=_0x163f4f;return this[_0x35888b(0x30e)];},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x43a)]=function(_0x2d036a){const _0x500ee4=_0x163f4f;this[_0x500ee4(0x3fa)]=_0x2d036a;},Window_Base['prototype'][_0x163f4f(0x581)]=function(_0x2b4e9a){this['_digitGroupingEx']=_0x2b4e9a;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x216)]=Window_Base[_0x163f4f(0x5b0)]['drawIcon'],Window_Base['prototype'][_0x163f4f(0x833)]=function(_0x1b0846,_0x403632,_0x59bed6){const _0x1409bf=_0x163f4f;_0x403632=Math[_0x1409bf(0x7f1)](_0x403632),_0x59bed6=Math[_0x1409bf(0x7f1)](_0x59bed6),VisuMZ[_0x1409bf(0x28e)][_0x1409bf(0x216)][_0x1409bf(0x17d)](this,_0x1b0846,_0x403632,_0x59bed6);},VisuMZ[_0x163f4f(0x28e)]['Window_Base_drawFace']=Window_Base['prototype'][_0x163f4f(0x1ca)],Window_Base[_0x163f4f(0x5b0)]['drawFace']=function(_0x218c2e,_0x165f2b,_0x5a8601,_0x3a0639,_0x59a73d,_0x2e083b){const _0x32f44a=_0x163f4f;_0x59a73d=_0x59a73d||ImageManager[_0x32f44a(0x9a7)],_0x2e083b=_0x2e083b||ImageManager[_0x32f44a(0x641)],_0x5a8601=Math['round'](_0x5a8601),_0x3a0639=Math[_0x32f44a(0x7f1)](_0x3a0639),_0x59a73d=Math[_0x32f44a(0x7f1)](_0x59a73d),_0x2e083b=Math['round'](_0x2e083b),VisuMZ['CoreEngine'][_0x32f44a(0x125)][_0x32f44a(0x17d)](this,_0x218c2e,_0x165f2b,_0x5a8601,_0x3a0639,_0x59a73d,_0x2e083b);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x7f4)]=Window_Base['prototype']['drawCharacter'],Window_Base[_0x163f4f(0x5b0)]['drawCharacter']=function(_0xf2a1fe,_0xb38252,_0xf349ba,_0xcf0428){const _0x59972b=_0x163f4f;_0xf349ba=Math['round'](_0xf349ba),_0xcf0428=Math['round'](_0xcf0428),VisuMZ[_0x59972b(0x28e)][_0x59972b(0x7f4)][_0x59972b(0x17d)](this,_0xf2a1fe,_0xb38252,_0xf349ba,_0xcf0428);},VisuMZ[_0x163f4f(0x28e)]['Window_Selectable_itemRect']=Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x585)],Window_Selectable[_0x163f4f(0x5b0)]['itemRect']=function(_0x360955){const _0x38000e=_0x163f4f;let _0x2dfbb7=VisuMZ['CoreEngine'][_0x38000e(0x3c9)][_0x38000e(0x17d)](this,_0x360955);return _0x2dfbb7['x']=Math['round'](_0x2dfbb7['x']),_0x2dfbb7['y']=Math[_0x38000e(0x7f1)](_0x2dfbb7['y']),_0x2dfbb7['width']=Math[_0x38000e(0x7f1)](_0x2dfbb7['width']),_0x2dfbb7[_0x38000e(0x107)]=Math[_0x38000e(0x7f1)](_0x2dfbb7[_0x38000e(0x107)]),_0x2dfbb7;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8d3)]=Window_StatusBase[_0x163f4f(0x5b0)]['drawActorSimpleStatus'],Window_StatusBase[_0x163f4f(0x5b0)][_0x163f4f(0x635)]=function(_0x2a63c0,_0x59c9bf,_0x3b89b7){const _0x29159e=_0x163f4f;_0x59c9bf=Math[_0x29159e(0x7f1)](_0x59c9bf),_0x3b89b7=Math[_0x29159e(0x7f1)](_0x3b89b7),VisuMZ[_0x29159e(0x28e)][_0x29159e(0x8d3)][_0x29159e(0x17d)](this,_0x2a63c0,_0x59c9bf,_0x3b89b7);},Window_Base['prototype'][_0x163f4f(0x4d9)]=function(){const _0x20f22a=_0x163f4f;this[_0x20f22a(0x2f8)]={'duration':0x0,'wholeDuration':0x0,'type':'LINEAR','targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x20f22a(0x701)]['x'],'targetScaleY':this['scale']['y'],'targetOpacity':this[_0x20f22a(0x9f9)],'targetBackOpacity':this[_0x20f22a(0x94d)],'targetContentsOpacity':this[_0x20f22a(0x890)]};},Window_Base[_0x163f4f(0x5b0)]['updateCoreEasing']=function(){const _0x11b6cf=_0x163f4f;if(!this[_0x11b6cf(0x2f8)])return;if(this[_0x11b6cf(0x2f8)][_0x11b6cf(0x171)]<=0x0)return;this['x']=this['applyCoreEasing'](this['x'],this['_coreEasing'][_0x11b6cf(0x3cc)]),this['y']=this[_0x11b6cf(0x29c)](this['y'],this[_0x11b6cf(0x2f8)][_0x11b6cf(0x50a)]),this[_0x11b6cf(0x701)]['x']=this['applyCoreEasing'](this[_0x11b6cf(0x701)]['x'],this[_0x11b6cf(0x2f8)][_0x11b6cf(0x34e)]),this[_0x11b6cf(0x701)]['y']=this[_0x11b6cf(0x29c)](this[_0x11b6cf(0x701)]['y'],this[_0x11b6cf(0x2f8)][_0x11b6cf(0x950)]),this[_0x11b6cf(0x9f9)]=this[_0x11b6cf(0x29c)](this[_0x11b6cf(0x9f9)],this[_0x11b6cf(0x2f8)][_0x11b6cf(0x2cf)]),this[_0x11b6cf(0x94d)]=this[_0x11b6cf(0x29c)](this['backOpacity'],this[_0x11b6cf(0x2f8)][_0x11b6cf(0x8f2)]),this[_0x11b6cf(0x890)]=this[_0x11b6cf(0x29c)](this[_0x11b6cf(0x890)],this['_coreEasing'][_0x11b6cf(0x55c)]),this[_0x11b6cf(0x2f8)][_0x11b6cf(0x171)]--;},Window_Base[_0x163f4f(0x5b0)]['applyCoreEasing']=function(_0x287708,_0x504c02){const _0x34c237=_0x163f4f;if(!this['_coreEasing'])return _0x504c02;const _0x4e76e8=this[_0x34c237(0x2f8)][_0x34c237(0x171)],_0x448428=this[_0x34c237(0x2f8)][_0x34c237(0x237)],_0x53bee4=this[_0x34c237(0x428)]((_0x448428-_0x4e76e8)/_0x448428),_0x556f0a=this[_0x34c237(0x428)]((_0x448428-_0x4e76e8+0x1)/_0x448428),_0x59afe5=(_0x287708-_0x504c02*_0x53bee4)/(0x1-_0x53bee4);return _0x59afe5+(_0x504c02-_0x59afe5)*_0x556f0a;},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x428)]=function(_0xebecc6){const _0x4c6458=_0x163f4f;if(!this['_coreEasing'])return _0xebecc6;return VisuMZ[_0x4c6458(0x32a)](_0xebecc6,this['_coreEasing'][_0x4c6458(0x6fa)]||_0x4c6458(0x1c4));},Window_Base[_0x163f4f(0x5b0)]['anchorCoreEasing']=function(_0x48175c,_0x4f1e22){const _0x2ffcff=_0x163f4f;if(!this['_coreEasing'])return;this['x']=this[_0x2ffcff(0x2f8)][_0x2ffcff(0x3cc)],this['y']=this[_0x2ffcff(0x2f8)]['targetY'],this[_0x2ffcff(0x701)]['x']=this[_0x2ffcff(0x2f8)]['targetScaleX'],this[_0x2ffcff(0x701)]['y']=this[_0x2ffcff(0x2f8)][_0x2ffcff(0x950)],this[_0x2ffcff(0x9f9)]=this[_0x2ffcff(0x2f8)][_0x2ffcff(0x2cf)],this[_0x2ffcff(0x94d)]=this[_0x2ffcff(0x2f8)][_0x2ffcff(0x8f2)],this[_0x2ffcff(0x890)]=this[_0x2ffcff(0x2f8)][_0x2ffcff(0x55c)],this['setupCoreEasing'](_0x48175c,_0x4f1e22,this['x'],this['y'],this[_0x2ffcff(0x701)]['x'],this['scale']['y'],this[_0x2ffcff(0x9f9)],this['backOpacity'],this[_0x2ffcff(0x890)]);},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x5b7)]=function(_0x205d96,_0x394867,_0x4c55b4,_0x5ef6fd,_0xf197ed,_0xf5f4a0,_0x8197a3,_0x1c71cf,_0x50b06d){this['_coreEasing']={'duration':_0x205d96,'wholeDuration':_0x205d96,'type':_0x394867,'targetX':_0x4c55b4,'targetY':_0x5ef6fd,'targetScaleX':_0xf197ed,'targetScaleY':_0xf5f4a0,'targetOpacity':_0x8197a3,'targetBackOpacity':_0x1c71cf,'targetContentsOpacity':_0x50b06d};},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x352)]=function(_0x21fd7c,_0xd19418,_0x491d9f,_0xe19142,_0x2368d1){const _0x49209a=_0x163f4f;this['resetFontSettings'](),this['contents'][_0x49209a(0x2a4)]=VisuMZ[_0x49209a(0x28e)][_0x49209a(0x403)][_0x49209a(0x33d)][_0x49209a(0x515)];const _0x40e817=VisuMZ['CoreEngine'][_0x49209a(0x403)]['Gold'][_0x49209a(0x1dd)];if(_0x40e817>0x0&&_0xd19418===TextManager['currencyUnit']){const _0x5d1295=_0xe19142+(this[_0x49209a(0x877)]()-ImageManager[_0x49209a(0x24a)])/0x2;this[_0x49209a(0x833)](_0x40e817,_0x491d9f+(_0x2368d1-ImageManager[_0x49209a(0x837)]),_0x5d1295),_0x2368d1-=ImageManager[_0x49209a(0x837)]+0x4;}else this[_0x49209a(0x795)](ColorManager[_0x49209a(0x697)]()),this[_0x49209a(0x887)](_0xd19418,_0x491d9f,_0xe19142,_0x2368d1,_0x49209a(0x3fc)),_0x2368d1-=this[_0x49209a(0x156)](_0xd19418)+0x6;this[_0x49209a(0x3e4)]();const _0x3a7ad8=this[_0x49209a(0x156)](this['_digitGrouping']?VisuMZ['GroupDigits'](_0x21fd7c):_0x21fd7c);if(_0x3a7ad8>_0x2368d1)this['drawText'](VisuMZ[_0x49209a(0x28e)][_0x49209a(0x403)][_0x49209a(0x33d)]['GoldOverlap'],_0x491d9f,_0xe19142,_0x2368d1,_0x49209a(0x3fc));else{if(_0x49209a(0x8d8)!==_0x49209a(0x8d8)){if(!this[_0x49209a(0x24b)]())return![];else{const _0x23db85=_0x14615f[_0x49209a(0x315)](_0x5744a2,_0x340098)[_0x49209a(0x333)](_0xe9b335=>_0xe9b335[_0x49209a(0x24b)]());return _0x23db85[_0x49209a(0xf7)]>0x0;}}else this[_0x49209a(0x887)](_0x21fd7c,_0x491d9f,_0xe19142,_0x2368d1,_0x49209a(0x3fc));}this[_0x49209a(0x28c)]();},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x24c)]=function(_0x4558ac,_0x34c910,_0x2c1932,_0x4522fc,_0x201a77){const _0x1607bb=_0x163f4f,_0x30b925=ImageManager[_0x1607bb(0x7ee)](_0x1607bb(0x9a6)),_0x31bbd2=ImageManager[_0x1607bb(0x837)],_0x3ce2fb=ImageManager['iconHeight'],_0x1ad929=_0x4558ac%0x10*_0x31bbd2,_0x5c9c3f=Math[_0x1607bb(0x966)](_0x4558ac/0x10)*_0x3ce2fb,_0x64161d=_0x4522fc,_0x19e2cc=_0x4522fc;this[_0x1607bb(0x7df)][_0x1607bb(0x210)][_0x1607bb(0x6a2)]=_0x201a77,this['contents'][_0x1607bb(0x9e9)](_0x30b925,_0x1ad929,_0x5c9c3f,_0x31bbd2,_0x3ce2fb,_0x34c910,_0x2c1932,_0x64161d,_0x19e2cc),this[_0x1607bb(0x7df)][_0x1607bb(0x210)][_0x1607bb(0x6a2)]=!![];},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x2f7)]=function(_0x3f7072,_0x48b107,_0x80549e,_0x5d50c8,_0x2ce725,_0x32d681){const _0x33769c=_0x163f4f,_0x445bb0=Math[_0x33769c(0x966)]((_0x80549e-0x2)*_0x5d50c8),_0x57705c=Sprite_Gauge[_0x33769c(0x5b0)]['gaugeHeight'][_0x33769c(0x17d)](this),_0x1d7e12=_0x48b107+this['lineHeight']()-_0x57705c-0x2;this[_0x33769c(0x7df)][_0x33769c(0x575)](_0x3f7072,_0x1d7e12,_0x80549e,_0x57705c,ColorManager[_0x33769c(0x8ef)]()),this['contents'][_0x33769c(0x8ce)](_0x3f7072+0x1,_0x1d7e12+0x1,_0x445bb0,_0x57705c-0x2,_0x2ce725,_0x32d681);},Window_Scrollable[_0x163f4f(0x564)]={'enabled':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x407)]['ShowScrollBar']??!![],'thickness':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x407)][_0x163f4f(0x1da)]??0x2,'offset':VisuMZ['CoreEngine']['Settings']['Window'][_0x163f4f(0x79b)]??0x2,'bodyColor':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)]['Window']['BarBodyColor']??0x0,'offColor':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x407)][_0x163f4f(0x589)]??0x7,'offOpacity':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x407)][_0x163f4f(0x371)]??0x80},Window_Base[_0x163f4f(0x5b0)]['isScrollBarVisible']=function(){const _0x1b1c98=_0x163f4f;return Window_Scrollable[_0x1b1c98(0x564)][_0x1b1c98(0x6cb)]&&Window_Scrollable['SCROLLBAR']['thickness']>0x0;},VisuMZ[_0x163f4f(0x28e)]['Window_Base_createContents']=Window_Base[_0x163f4f(0x5b0)]['createContents'],Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x271)]=function(){const _0x557452=_0x163f4f;VisuMZ['CoreEngine']['Window_Base_createContents'][_0x557452(0x17d)](this),this[_0x557452(0x87c)](),this[_0x557452(0x4b4)](!![]),this[_0x557452(0x4b4)](![]);},Window_Base['prototype']['createScrollBarSprites']=function(){const _0x5a2d5a=_0x163f4f;if(!this[_0x5a2d5a(0x841)]())return;if(this['_scrollBarHorz']||this[_0x5a2d5a(0x934)])return;this[_0x5a2d5a(0x13d)]={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this[_0x5a2d5a(0xfc)]=new Sprite(),this['_scrollBarVert']=new Sprite(),this['addChild'](this['_scrollBarHorz']),this['addChild'](this[_0x5a2d5a(0x934)]);},Window_Base['prototype']['setupScrollBarBitmap']=function(_0x3881a8){const _0x4cbc8f=_0x163f4f,_0x475406=_0x3881a8?this[_0x4cbc8f(0xfc)]:this[_0x4cbc8f(0x934)];if(!_0x475406)return;const _0x2587e9=Window_Scrollable[_0x4cbc8f(0x564)],_0x4ff175=_0x2587e9['thickness'],_0x980408=_0x3881a8?this[_0x4cbc8f(0x4da)]-_0x4ff175*0x2:_0x4ff175,_0x9456d4=_0x3881a8?_0x4ff175:this[_0x4cbc8f(0x839)]-_0x4ff175*0x2;_0x475406[_0x4cbc8f(0x2dc)]=new Bitmap(_0x980408,_0x9456d4),_0x475406[_0x4cbc8f(0x62d)](0x0,0x0,_0x980408,_0x9456d4),this[_0x4cbc8f(0x72c)](_0x3881a8);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x383)]=Window_Base[_0x163f4f(0x5b0)]['destroyContents'],Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0xa02)]=function(){const _0x417792=_0x163f4f;VisuMZ[_0x417792(0x28e)]['Window_Base_destroyContents']['call'](this),this[_0x417792(0x79a)]();},Window_Base[_0x163f4f(0x5b0)]['destroyScrollBarBitmaps']=function(){const _0x4e980d=_0x163f4f,_0x1952fa=[this[_0x4e980d(0xfc)],this[_0x4e980d(0x934)]];for(const _0x3feec6 of _0x1952fa){if(_0x3feec6&&_0x3feec6[_0x4e980d(0x2dc)])_0x3feec6[_0x4e980d(0x2dc)][_0x4e980d(0x374)]();}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x269)]=Window_Scrollable['prototype'][_0x163f4f(0x168)],Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x193c5a=_0x163f4f;VisuMZ['CoreEngine'][_0x193c5a(0x269)][_0x193c5a(0x17d)](this),this['updateScrollBars']();},Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x74b)]=function(){const _0x115229=_0x163f4f;this[_0x115229(0x913)](),this[_0x115229(0x15f)](!![]),this[_0x115229(0x15f)](![]),this[_0x115229(0x72c)](!![]),this['updateScrollBarPosition'](![]);},Window_Scrollable[_0x163f4f(0x5b0)]['updateScrollBarVisibility']=function(){const _0x3e8986=_0x163f4f,_0x5296f1=[this[_0x3e8986(0xfc)],this['_scrollBarVert']];for(const _0x2d3090 of _0x5296f1){_0x2d3090&&(_0x2d3090['visible']=this[_0x3e8986(0x841)]()&&this[_0x3e8986(0x20a)]());}},Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x15f)]=function(_0x14c673){const _0x5e31e9=_0x163f4f;if(!this[_0x5e31e9(0x13d)])return;const _0x25670d=this[_0x5e31e9(0x56d)](_0x14c673),_0x2caea7=this[_0x5e31e9(0x63c)](_0x14c673),_0x5ad988=_0x14c673?'horz':_0x5e31e9(0x48f),_0x253c0c=_0x14c673?_0x5e31e9(0x205):_0x5e31e9(0x2c4);(this[_0x5e31e9(0x13d)][_0x5ad988]!==_0x25670d||this['_lastScrollBarValues'][_0x253c0c]!==_0x2caea7)&&(this[_0x5e31e9(0x13d)][_0x5ad988]=_0x25670d,this[_0x5e31e9(0x13d)][_0x253c0c]=_0x2caea7,this[_0x5e31e9(0x5fe)](_0x14c673,_0x25670d,_0x2caea7));},Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x56d)]=function(_0x23fbfb){const _0x3ec3a4=_0x163f4f;if(this['_allTextHeight']!==undefined)return _0x23fbfb?this[_0x3ec3a4(0x660)]():this[_0x3ec3a4(0x809)]['y'];return _0x23fbfb?this[_0x3ec3a4(0x660)]():this['scrollY']();},Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x63c)]=function(_0x48f32e){const _0x39a781=_0x163f4f;if(this['_allTextHeight']!==undefined)return _0x48f32e?this[_0x39a781(0x3b6)]():Math['max'](0x0,this[_0x39a781(0x4a3)]-this[_0x39a781(0x839)]);return _0x48f32e?this[_0x39a781(0x3b6)]():this['maxScrollY']();},Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x817)]=function(){const _0x32155e=_0x163f4f;if(this['_allTextHeight']!==undefined)return _0x32155e(0x41f)==='MTGzw'?Math[_0x32155e(0x69d)](0x0,this[_0x32155e(0x4a3)]):_0x32bacd[_0x32155e(0x720)][_0x32155e(0x2ad)][_0x32155e(0x17d)](this);return this[_0x32155e(0x58f)]();},Window_Scrollable[_0x163f4f(0x5b0)][_0x163f4f(0x5fe)]=function(_0x4e028e,_0x31b157,_0xaf4f56){const _0x315230=_0x163f4f,_0x276851=_0x4e028e?this[_0x315230(0xfc)]:this['_scrollBarVert'];if(!_0x276851)return;if(!_0x276851[_0x315230(0x2dc)])return;const _0x203300=_0x276851[_0x315230(0x2dc)];_0x203300[_0x315230(0x3c1)]();if(_0xaf4f56<=0x0)return;const _0x29c4d6=_0x4e028e?this[_0x315230(0x4da)]/this['overallWidth']():this[_0x315230(0x839)]/this[_0x315230(0x817)](),_0x349b2b=_0x4e028e?Math['round'](_0x31b157*_0x29c4d6):0x0,_0x647c36=_0x4e028e?0x0:Math[_0x315230(0x7f1)](_0x31b157*_0x29c4d6),_0x11d394=_0x4e028e?Math[_0x315230(0x7f1)](_0x203300[_0x315230(0x60a)]*_0x29c4d6):_0x203300[_0x315230(0x60a)],_0x228a91=_0x4e028e?_0x203300[_0x315230(0x107)]:Math[_0x315230(0x7f1)](_0x203300[_0x315230(0x107)]*_0x29c4d6),_0x33273d=Window_Scrollable['SCROLLBAR'],_0x2575a1=ColorManager[_0x315230(0x191)](_0x33273d[_0x315230(0x70e)]),_0x3102ca=ColorManager[_0x315230(0x191)](_0x33273d[_0x315230(0x853)]),_0x16bcb3=_0x33273d[_0x315230(0x6c4)];_0x203300['paintOpacity']=_0x16bcb3,_0x203300[_0x315230(0x8ed)](_0x2575a1),_0x203300['paintOpacity']=0xff,_0x203300[_0x315230(0x575)](_0x349b2b,_0x647c36,_0x11d394,_0x228a91,_0x3102ca);},Window_Base[_0x163f4f(0x5b0)]['updateScrollBarPosition']=function(_0x542723){const _0x33babb=_0x163f4f,_0x379a82=_0x542723?this[_0x33babb(0xfc)]:this['_scrollBarVert'];if(!_0x379a82)return;const _0x4f2de1=Window_Scrollable['SCROLLBAR'],_0x48e60d=_0x4f2de1[_0x33babb(0x1c1)],_0x55efac=_0x4f2de1[_0x33babb(0x111)];if(!_0x379a82[_0x33babb(0x367)])return;_0x379a82['x']=this[_0x33babb(0x2c1)]+(_0x542723?_0x48e60d:this[_0x33babb(0x4da)]+_0x55efac),_0x379a82['y']=this[_0x33babb(0x2c1)]+(_0x542723?this['innerHeight']+_0x55efac:_0x48e60d);},Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x163)]=function(_0x44cd0c){const _0x51e7c8=_0x163f4f;let _0x26ef4c=this[_0x51e7c8(0x543)]();const _0x2d39cd=this[_0x51e7c8(0x8ca)](),_0x40c555=this[_0x51e7c8(0x999)]();if(this[_0x51e7c8(0x96f)]()&&(_0x26ef4c<_0x2d39cd||_0x44cd0c&&_0x40c555===0x1)){if('EjSSq'!==_0x51e7c8(0xa13)){const _0xecd60c=_0x4cc6af(_0x41ac8f['$1']);if(_0xecd60c[_0x51e7c8(0x4be)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x51e7c8(0x442)]='FV';else _0xecd60c[_0x51e7c8(0x4be)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x51e7c8(0x442)]='SV');}else{_0x26ef4c+=_0x40c555;if(_0x26ef4c>=_0x2d39cd)_0x26ef4c=_0x2d39cd-0x1;this[_0x51e7c8(0x9b5)](_0x26ef4c);}}else{if(!this[_0x51e7c8(0x96f)]()){if(_0x26ef4c<_0x2d39cd-_0x40c555||_0x44cd0c&&_0x40c555===0x1){if(_0x51e7c8(0x1f6)!==_0x51e7c8(0x658))this[_0x51e7c8(0x9b5)]((_0x26ef4c+_0x40c555)%_0x2d39cd);else{let _0x45d1ec=0x0;return _0x559c4a[_0x51e7c8(0xfa)]()?_0x45d1ec=this[_0x51e7c8(0x456)]():_0x45d1ec=_0xda2755[_0x51e7c8(0x28e)][_0x51e7c8(0x51d)]['call'](this),_0x45d1ec;}}}}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x687)]=Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x163)],Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x163)]=function(_0xf1d1cc){const _0x3e3385=_0x163f4f;if(this[_0x3e3385(0x96f)]()&&_0xf1d1cc&&this[_0x3e3385(0x999)]()===0x1&&this[_0x3e3385(0x543)]()===this[_0x3e3385(0x8ca)]()-0x1)this['smoothSelect'](0x0);else{if(_0x3e3385(0x567)!==_0x3e3385(0x567)){const _0x5b4e1f=_0x1e06f2[_0x3d155e['animationId']],_0xd8c203=this[_0x3e3385(0x3ea)](_0x163c04),_0x43cc61=_0x450e23[_0x3e3385(0x69c)],_0x485943=_0x262996[_0x3e3385(0x317)];let _0xbdfa58=this[_0x3e3385(0x126)]();const _0x497367=this[_0x3e3385(0x1b7)]();if(this[_0x3e3385(0x9f5)](_0x5b4e1f))for(const _0x110eaa of _0xd8c203){this['createPointAnimationSprite']([_0x110eaa],_0x5b4e1f,_0x43cc61,_0xbdfa58,_0x485943),_0xbdfa58+=_0x497367;}else this['createPointAnimationSprite'](_0xd8c203,_0x5b4e1f,_0x43cc61,_0xbdfa58,_0x485943);}else VisuMZ[_0x3e3385(0x28e)][_0x3e3385(0x687)]['call'](this,_0xf1d1cc);}},Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x17c)]=function(_0x33cc24){const _0x4ff505=_0x163f4f;let _0x6685c=Math[_0x4ff505(0x69d)](0x0,this[_0x4ff505(0x543)]());const _0x1998e2=this[_0x4ff505(0x8ca)](),_0x3260f0=this[_0x4ff505(0x999)]();if(this[_0x4ff505(0x96f)]()&&_0x6685c>0x0||_0x33cc24&&_0x3260f0===0x1){if(_0x4ff505(0x632)===_0x4ff505(0x632)){_0x6685c-=_0x3260f0;if(_0x6685c<=0x0)_0x6685c=0x0;this['smoothSelect'](_0x6685c);}else this['_registerKeyInput'](_0x65accc);}else!this[_0x4ff505(0x96f)]()&&((_0x6685c>=_0x3260f0||_0x33cc24&&_0x3260f0===0x1)&&('diqRF'!==_0x4ff505(0x9e5)?_0x5ba7af[_0x4ff505(0x73a)](_0x4f6c97):this[_0x4ff505(0x9b5)]((_0x6685c-_0x3260f0+_0x1998e2)%_0x1998e2)));},VisuMZ[_0x163f4f(0x28e)]['Window_Selectable_cursorUp']=Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x17c)],Window_Selectable[_0x163f4f(0x5b0)]['cursorUp']=function(_0x29b048){const _0x1b8f74=_0x163f4f;this[_0x1b8f74(0x96f)]()&&_0x29b048&&this['maxCols']()===0x1&&this[_0x1b8f74(0x543)]()===0x0?this[_0x1b8f74(0x9b5)](this[_0x1b8f74(0x8ca)]()-0x1):_0x1b8f74(0x6d6)!==_0x1b8f74(0x141)?VisuMZ[_0x1b8f74(0x28e)][_0x1b8f74(0x799)][_0x1b8f74(0x17d)](this,_0x29b048):this['cursorPagedown']();},Window_Selectable[_0x163f4f(0x5b0)]['isUseModernControls']=function(){const _0x42813f=_0x163f4f;return VisuMZ['CoreEngine'][_0x42813f(0x403)][_0x42813f(0x7f7)]['ModernControls'];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x65a)]=Window_Selectable[_0x163f4f(0x5b0)]['processCursorMove'],Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x5b4)]=function(){const _0x207bb2=_0x163f4f;if(this[_0x207bb2(0x96f)]())_0x207bb2(0x527)===_0x207bb2(0x731)?(_0x2803e1['clear'](),this[_0x207bb2(0x382)](_0x207bb2(0x995))):(this[_0x207bb2(0x4e9)](),this[_0x207bb2(0x330)]());else{if('VcZal'!==_0x207bb2(0x675))return _0x387ea9[_0x207bb2(0x212)]()-0x8;else VisuMZ[_0x207bb2(0x28e)][_0x207bb2(0x65a)]['call'](this);}},Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x808)]=function(){return!![];},Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x4e9)]=function(){const _0x1fca60=_0x163f4f;if(this[_0x1fca60(0x938)]()){if(_0x1fca60(0x9bc)==='ElSoD'){const _0xe16645=this[_0x1fca60(0x543)]();Input['isRepeated'](_0x1fca60(0x70f))&&(Input[_0x1fca60(0x947)](_0x1fca60(0x531))&&this['allowShiftScrolling']()?this[_0x1fca60(0x75a)]():_0x1fca60(0x170)!==_0x1fca60(0x87b)?this[_0x1fca60(0x163)](Input[_0x1fca60(0x31c)](_0x1fca60(0x70f))):this[_0x1fca60(0x7c6)][_0x1fca60(0x50f)](_0x23f400[_0x1fca60(0x720)][_0x1fca60(0x219)])),Input['isRepeated']('up')&&(Input['isPressed'](_0x1fca60(0x531))&&this[_0x1fca60(0x808)]()?_0x1fca60(0x32c)==='SxBdE'?this['cursorPageup']():this[_0x1fca60(0x80b)]['x']=_0x39b999[_0x1fca60(0x2a2)]+0x4:this['cursorUp'](Input[_0x1fca60(0x31c)]('up'))),Input[_0x1fca60(0xee)](_0x1fca60(0x3fc))&&this[_0x1fca60(0x3c5)](Input[_0x1fca60(0x31c)](_0x1fca60(0x3fc))),Input[_0x1fca60(0xee)](_0x1fca60(0xa04))&&this[_0x1fca60(0x318)](Input['isTriggered'](_0x1fca60(0xa04))),!this['isHandled'](_0x1fca60(0x101))&&Input['isRepeated'](_0x1fca60(0x101))&&this['cursorPagedown'](),!this[_0x1fca60(0x846)]('pageup')&&Input[_0x1fca60(0xee)](_0x1fca60(0x287))&&('iGLiC'!=='iGLiC'?(_0x49d880[_0x1fca60(0x28e)][_0x1fca60(0x37b)][_0x1fca60(0x17d)](this),this[_0x1fca60(0x2f9)]=_0x668200,this[_0x1fca60(0x3e6)]=_0x14fbf1,this[_0x1fca60(0x14c)]=_0xfce379[_0x1fca60(0x246)]):this[_0x1fca60(0x5ed)]()),this['index']()!==_0xe16645&&this['playCursorSound']();}else{const _0xa5a906=this['_viewportSize'],_0x19b38f=this[_0x1fca60(0x511)],_0x1494a8=this[_0x1fca60(0x265)]['offsetX']*(this['_mirror']?-0x1:0x1)-_0xa5a906/0x2,_0x131e67=this[_0x1fca60(0x265)][_0x1fca60(0x915)]-_0x19b38f/0x2,_0x3f2fa7=this[_0x1fca60(0x804)](_0x54e5bf);_0x245728['gl'][_0x1fca60(0x815)](_0x1494a8+_0x3f2fa7['x'],_0x131e67+_0x3f2fa7['y'],_0xa5a906,_0x19b38f);}}},Window_Selectable[_0x163f4f(0x5b0)]['processCursorHomeEndTrigger']=function(){const _0x582716=_0x163f4f;if(this['isCursorMovable']()){if(_0x582716(0x249)===_0x582716(0x891)){if(this[_0x582716(0x460)]===_0x1824d6)this['initCoreEngine']();if(this[_0x582716(0x460)][_0x582716(0x2c8)]===_0x134a8a)this[_0x582716(0x263)]();this[_0x582716(0x460)][_0x582716(0x5b3)]=_0x5842a4;}else{const _0x2460f0=this[_0x582716(0x543)]();Input[_0x582716(0x31c)](_0x582716(0x233))&&('XZQkO'===_0x582716(0x422)?this[_0x582716(0x9b5)](Math[_0x582716(0x112)](this[_0x582716(0x543)](),0x0)):_0x27ef1b+='(\x5cd+)([%％])>'),Input[_0x582716(0x31c)](_0x582716(0x364))&&this[_0x582716(0x9b5)](Math['max'](this[_0x582716(0x543)](),this[_0x582716(0x8ca)]()-0x1)),this[_0x582716(0x543)]()!==_0x2460f0&&this['playCursorSound']();}}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x9d4)]=Window_Selectable[_0x163f4f(0x5b0)]['processTouch'],Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x2ea)]=function(){const _0xf1b47f=_0x163f4f;this['isUseModernControls']()?this['processTouchModernControls']():VisuMZ[_0xf1b47f(0x28e)]['Window_Selectable_processTouch']['call'](this);},Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x5a9)]=function(){const _0x3e0dd5=_0x163f4f;VisuMZ[_0x3e0dd5(0x28e)][_0x3e0dd5(0x9d4)][_0x3e0dd5(0x17d)](this);},Window_Selectable[_0x163f4f(0x5b0)]['colSpacing']=function(){const _0x2795e4=_0x163f4f;return VisuMZ[_0x2795e4(0x28e)][_0x2795e4(0x403)][_0x2795e4(0x407)]['ColSpacing'];},Window_Selectable[_0x163f4f(0x5b0)][_0x163f4f(0x8b3)]=function(){const _0x2d0ce6=_0x163f4f;return VisuMZ[_0x2d0ce6(0x28e)]['Settings']['Window']['RowSpacing'];},Window_Selectable['prototype'][_0x163f4f(0x138)]=function(){const _0x371c92=_0x163f4f;return Window_Scrollable[_0x371c92(0x5b0)][_0x371c92(0x138)]['call'](this)+VisuMZ['CoreEngine'][_0x371c92(0x403)][_0x371c92(0x407)][_0x371c92(0x14b)];;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x31a)]=Window_Selectable['prototype'][_0x163f4f(0x586)],Window_Selectable[_0x163f4f(0x5b0)]['drawBackgroundRect']=function(_0x2e0e6a){const _0x41be51=_0x163f4f,_0x4aad61=VisuMZ[_0x41be51(0x28e)][_0x41be51(0x403)][_0x41be51(0x407)];if(_0x4aad61[_0x41be51(0x104)]===![])return;_0x4aad61[_0x41be51(0x392)]?_0x41be51(0x2db)===_0x41be51(0x2db)?_0x4aad61[_0x41be51(0x392)][_0x41be51(0x17d)](this,_0x2e0e6a):this[_0x41be51(0x2ec)]=_0x41be51(0x5c0):_0x41be51(0x807)==='WqqVb'?_0x1ca5fe*=_0x121289[_0x41be51(0x99f)]():VisuMZ[_0x41be51(0x28e)][_0x41be51(0x31a)]['call'](this,_0x2e0e6a);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1e1)]=Window_Gold['prototype'][_0x163f4f(0x595)],Window_Gold[_0x163f4f(0x5b0)][_0x163f4f(0x595)]=function(){const _0x181749=_0x163f4f;this['isItemStyle']()?'orDbL'!==_0x181749(0x25d)?this[_0x181749(0x2fa)]():this[_0x181749(0x48d)]():VisuMZ[_0x181749(0x28e)][_0x181749(0x1e1)]['call'](this);},Window_Gold[_0x163f4f(0x5b0)][_0x163f4f(0x83b)]=function(){const _0x4e674b=_0x163f4f;if(TextManager[_0x4e674b(0x209)]!==this[_0x4e674b(0x209)]())return![];return VisuMZ[_0x4e674b(0x28e)]['Settings'][_0x4e674b(0x33d)]['ItemStyle'];},Window_Gold[_0x163f4f(0x5b0)][_0x163f4f(0x48d)]=function(){const _0x539e21=_0x163f4f;this['resetFontSettings'](),this[_0x539e21(0x7df)][_0x539e21(0x3c1)](),this[_0x539e21(0x7df)][_0x539e21(0x2a4)]=VisuMZ['CoreEngine'][_0x539e21(0x403)][_0x539e21(0x33d)][_0x539e21(0x515)];const _0x155e22=VisuMZ[_0x539e21(0x28e)]['Settings'][_0x539e21(0x33d)][_0x539e21(0x1dd)],_0x9c8c86=this[_0x539e21(0x88b)](0x0);if(_0x155e22>0x0){if('dhQei'==='dhQei'){const _0x3348cc=_0x9c8c86['y']+(this[_0x539e21(0x877)]()-ImageManager[_0x539e21(0x24a)])/0x2;this['drawIcon'](_0x155e22,_0x9c8c86['x'],_0x3348cc);const _0x200808=ImageManager[_0x539e21(0x837)]+0x4;_0x9c8c86['x']+=_0x200808,_0x9c8c86['width']-=_0x200808;}else return _0x489ef7[_0x539e21(0x28e)]['Settings'][_0x539e21(0x142)][_0x539e21(0x23f)]['call'](this,_0x229d3b);}this[_0x539e21(0x795)](ColorManager[_0x539e21(0x697)]()),this[_0x539e21(0x887)](this[_0x539e21(0x209)](),_0x9c8c86['x'],_0x9c8c86['y'],_0x9c8c86[_0x539e21(0x60a)],'left');const _0x1c8bb5=this[_0x539e21(0x156)](this[_0x539e21(0x209)]())+0x6;;_0x9c8c86['x']+=_0x1c8bb5,_0x9c8c86[_0x539e21(0x60a)]-=_0x1c8bb5,this[_0x539e21(0x3e4)]();const _0x5f9902=this[_0x539e21(0x30d)](),_0x4e13e6=this[_0x539e21(0x156)](this[_0x539e21(0x3fa)]?VisuMZ[_0x539e21(0x53a)](this['value']()):this[_0x539e21(0x30d)]());_0x4e13e6>_0x9c8c86['width']?this[_0x539e21(0x887)](VisuMZ['CoreEngine'][_0x539e21(0x403)][_0x539e21(0x33d)]['GoldOverlap'],_0x9c8c86['x'],_0x9c8c86['y'],_0x9c8c86[_0x539e21(0x60a)],_0x539e21(0x3fc)):this['drawText'](this['value'](),_0x9c8c86['x'],_0x9c8c86['y'],_0x9c8c86['width'],_0x539e21(0x3fc)),this[_0x539e21(0x28c)]();},Window_StatusBase[_0x163f4f(0x5b0)][_0x163f4f(0x256)]=function(_0x1d41bf,_0x1f72db,_0x46f647,_0x222bba,_0x40a132){const _0x5071cd=_0x163f4f;_0x222bba=String(_0x222bba||'')[_0x5071cd(0x5ca)]();if(VisuMZ[_0x5071cd(0x28e)][_0x5071cd(0x403)][_0x5071cd(0x67d)][_0x5071cd(0x316)]){const _0x3a28fe=VisuMZ[_0x5071cd(0x215)](_0x222bba);_0x40a132?_0x5071cd(0x6ab)===_0x5071cd(0x4b3)?_0x267a5e[_0x5071cd(0x3eb)](_0x1d2111):(this[_0x5071cd(0x24c)](_0x3a28fe,_0x1d41bf,_0x1f72db,this[_0x5071cd(0x7b3)]()),_0x46f647-=this[_0x5071cd(0x7b3)]()+0x2,_0x1d41bf+=this['gaugeLineHeight']()+0x2):_0x5071cd(0x9ac)===_0x5071cd(0x1d7)?this['moveMenuButtonSideButtonLayout']():(this[_0x5071cd(0x833)](_0x3a28fe,_0x1d41bf+0x2,_0x1f72db+0x2),_0x46f647-=ImageManager[_0x5071cd(0x837)]+0x4,_0x1d41bf+=ImageManager[_0x5071cd(0x837)]+0x4);}const _0x5bb5d2=TextManager[_0x5071cd(0x357)](_0x222bba);this[_0x5071cd(0x28c)](),this[_0x5071cd(0x795)](ColorManager[_0x5071cd(0x697)]()),_0x40a132?(this['contents'][_0x5071cd(0x2a4)]=this[_0x5071cd(0x2d8)](),this[_0x5071cd(0x7df)][_0x5071cd(0x887)](_0x5bb5d2,_0x1d41bf,_0x1f72db,_0x46f647,this[_0x5071cd(0x7b3)](),_0x5071cd(0xa04))):this[_0x5071cd(0x887)](_0x5bb5d2,_0x1d41bf,_0x1f72db,_0x46f647),this[_0x5071cd(0x28c)]();},Window_StatusBase[_0x163f4f(0x5b0)][_0x163f4f(0x2d8)]=function(){return $gameSystem['mainFontSize']()-0x8;},Window_StatusBase[_0x163f4f(0x5b0)][_0x163f4f(0x914)]=function(_0x164a00,_0x43925,_0x3c0732,_0x39515c){const _0x21f409=_0x163f4f;_0x39515c=_0x39515c||0xa8,this[_0x21f409(0x3e4)]();if(VisuMZ[_0x21f409(0x28e)][_0x21f409(0x403)]['UI']['TextCodeClassNames'])_0x21f409(0x5a4)===_0x21f409(0x5a4)?this['drawTextEx'](_0x164a00[_0x21f409(0x50d)]()[_0x21f409(0x4d6)],_0x43925,_0x3c0732,_0x39515c):this['select'](0x0);else{const _0xbfbbff=_0x164a00[_0x21f409(0x50d)]()[_0x21f409(0x4d6)]['replace'](/\\I\[(\d+)\]/gi,'');this[_0x21f409(0x887)](_0xbfbbff,_0x43925,_0x3c0732,_0x39515c);}},Window_StatusBase[_0x163f4f(0x5b0)][_0x163f4f(0x196)]=function(_0x283d7d,_0x597af8,_0x3e7ae9,_0x85d7fe){const _0x56f2d7=_0x163f4f;_0x85d7fe=_0x85d7fe||0x10e,this[_0x56f2d7(0x3e4)]();if(VisuMZ['CoreEngine']['Settings']['UI'][_0x56f2d7(0x1ad)])this[_0x56f2d7(0x243)](_0x283d7d['nickname'](),_0x597af8,_0x3e7ae9,_0x85d7fe);else{if(_0x56f2d7(0x4bf)!=='PZeyy')this[_0x56f2d7(0x800)](-0x1);else{const _0x5635a8=_0x283d7d[_0x56f2d7(0x648)]()[_0x56f2d7(0x865)](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x283d7d['nickname'](),_0x597af8,_0x3e7ae9,_0x85d7fe);}}},VisuMZ['CoreEngine'][_0x163f4f(0x4a4)]=Window_StatusBase['prototype'][_0x163f4f(0x3a0)],Window_StatusBase[_0x163f4f(0x5b0)][_0x163f4f(0x3a0)]=function(_0x135142,_0x442f0d,_0xe6f088){const _0x4f7157=_0x163f4f;if(VisuMZ[_0x4f7157(0x28e)][_0x4f7157(0x403)]['Param'][_0x4f7157(0x97b)]===![])return;if(this['isExpGaugeDrawn']())this[_0x4f7157(0x56e)](_0x135142,_0x442f0d,_0xe6f088);VisuMZ['CoreEngine'][_0x4f7157(0x4a4)][_0x4f7157(0x17d)](this,_0x135142,_0x442f0d,_0xe6f088);},Window_StatusBase[_0x163f4f(0x5b0)]['isExpGaugeDrawn']=function(){const _0x2df3d5=_0x163f4f;return VisuMZ[_0x2df3d5(0x28e)][_0x2df3d5(0x403)]['UI'][_0x2df3d5(0x4d4)];},Window_StatusBase[_0x163f4f(0x5b0)]['drawActorExpGauge']=function(_0x39665c,_0x34c3f4,_0xd587a1){const _0x28dbc9=_0x163f4f;if(!_0x39665c)return;if(!_0x39665c[_0x28dbc9(0x4d7)]())return;const _0x50d4f8=0x80,_0x2e4049=_0x39665c[_0x28dbc9(0x4f2)]();let _0x1d26fb=ColorManager[_0x28dbc9(0x76f)](),_0x4903c8=ColorManager[_0x28dbc9(0x3de)]();_0x2e4049>=0x1&&(_0x1d26fb=ColorManager[_0x28dbc9(0x14d)](),_0x4903c8=ColorManager['maxLvGaugeColor2']()),this[_0x28dbc9(0x2f7)](_0x34c3f4,_0xd587a1,_0x50d4f8,_0x2e4049,_0x1d26fb,_0x4903c8);},Window_EquipStatus[_0x163f4f(0x5b0)]['drawAllParams']=function(){const _0x5baa01=_0x163f4f;let _0x37dc59=0x0;for(const _0x14ef1f of VisuMZ[_0x5baa01(0x28e)][_0x5baa01(0x403)][_0x5baa01(0x67d)][_0x5baa01(0x60f)]){if('mVJfd'==='mVJfd'){const _0x44ef37=this['itemPadding'](),_0x3e35f1=this[_0x5baa01(0x6e0)](_0x37dc59);this[_0x5baa01(0x2ce)](_0x44ef37,_0x3e35f1,_0x14ef1f),_0x37dc59++;}else _0x15c17f[_0x5baa01(0x28e)]['Scene_Item_create'][_0x5baa01(0x17d)](this),this['setCoreEngineUpdateWindowBg']();}},Window_EquipStatus[_0x163f4f(0x5b0)]['drawParamName']=function(_0x2f5217,_0x4fda56,_0xfc1c73){const _0x55446e=_0x163f4f,_0x36d153=this[_0x55446e(0x767)]()-this[_0x55446e(0x466)]()*0x2;this['drawParamText'](_0x2f5217,_0x4fda56,_0x36d153,_0xfc1c73,![]);},Window_EquipStatus[_0x163f4f(0x5b0)][_0x163f4f(0x4a6)]=function(_0x203a59,_0x312c02,_0x544667){const _0x2b8576=_0x163f4f,_0x3227f4=this['paramWidth']();this[_0x2b8576(0x3e4)](),this[_0x2b8576(0x887)](this['_actor'][_0x2b8576(0x2af)](_0x544667,!![]),_0x203a59,_0x312c02,_0x3227f4,_0x2b8576(0x3fc));},Window_EquipStatus[_0x163f4f(0x5b0)][_0x163f4f(0x450)]=function(_0x5a3e78,_0x1ba746){const _0x2ff873=_0x163f4f,_0x58b259=this['rightArrowWidth']();this[_0x2ff873(0x795)](ColorManager['systemColor']());const _0x640e1=VisuMZ[_0x2ff873(0x28e)]['Settings']['UI'][_0x2ff873(0x4b1)];this[_0x2ff873(0x887)](_0x640e1,_0x5a3e78,_0x1ba746,_0x58b259,_0x2ff873(0x944));},Window_EquipStatus[_0x163f4f(0x5b0)][_0x163f4f(0x42f)]=function(_0xa337d2,_0x5a9025,_0x5b3592){const _0x12a7ac=_0x163f4f,_0x39e9fc=this[_0x12a7ac(0x583)](),_0x4a2579=this[_0x12a7ac(0xec)]['paramValueByName'](_0x5b3592),_0x6eb721=_0x4a2579-this['_actor'][_0x12a7ac(0x2af)](_0x5b3592);this['changeTextColor'](ColorManager['paramchangeTextColor'](_0x6eb721)),this[_0x12a7ac(0x887)](this['_tempActor'][_0x12a7ac(0x2af)](_0x5b3592,!![]),_0xa337d2,_0x5a9025,_0x39e9fc,_0x12a7ac(0x3fc));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x53f)]=Window_EquipItem[_0x163f4f(0x5b0)][_0x163f4f(0x51b)],Window_EquipItem[_0x163f4f(0x5b0)]['isEnabled']=function(_0xeeca3a){const _0xd9cfd2=_0x163f4f;if(_0xeeca3a&&this['_actor']){if(_0xd9cfd2(0x143)===_0xd9cfd2(0x143))return this[_0xd9cfd2(0x1a6)][_0xd9cfd2(0x8a5)](_0xeeca3a);else{const _0x38d11d=_0x448949[_0xd9cfd2(0x8d4)]()*_0x2172ce[_0xd9cfd2(0x8b6)]();return(this['_y']-_0x38d11d)*_0x45eef4['zoomScale']();}}else{if(_0xd9cfd2(0x642)!==_0xd9cfd2(0x642)){const _0x49e3b3=_0xd9cfd2(0x909);this[_0xd9cfd2(0x221)]=this['_colorCache']||{};if(this[_0xd9cfd2(0x221)][_0x49e3b3])return this['_colorCache'][_0x49e3b3];const _0x195bba=_0x1320c3['CoreEngine'][_0xd9cfd2(0x403)][_0xd9cfd2(0x142)]['ColorExpGauge2'];return this['getColorDataFromPluginParameters'](_0x49e3b3,_0x195bba);}else return VisuMZ[_0xd9cfd2(0x28e)][_0xd9cfd2(0x53f)][_0xd9cfd2(0x17d)](this,_0xeeca3a);}},Window_StatusParams[_0x163f4f(0x5b0)][_0x163f4f(0x8ca)]=function(){const _0x2f63fb=_0x163f4f;return VisuMZ[_0x2f63fb(0x28e)][_0x2f63fb(0x403)]['Param']['DisplayedParams'][_0x2f63fb(0xf7)];},Window_StatusParams[_0x163f4f(0x5b0)][_0x163f4f(0x2ce)]=function(_0x56e989){const _0x2387ae=_0x163f4f,_0xfea8d3=this['itemLineRect'](_0x56e989),_0x17c9ea=VisuMZ['CoreEngine'][_0x2387ae(0x403)][_0x2387ae(0x67d)][_0x2387ae(0x60f)][_0x56e989],_0x443ff2=TextManager[_0x2387ae(0x357)](_0x17c9ea),_0x4d14e0=this[_0x2387ae(0x1a6)][_0x2387ae(0x2af)](_0x17c9ea,!![]);this['drawParamText'](_0xfea8d3['x'],_0xfea8d3['y'],0xa0,_0x17c9ea,![]),this[_0x2387ae(0x3e4)](),this[_0x2387ae(0x887)](_0x4d14e0,_0xfea8d3['x']+0xa0,_0xfea8d3['y'],0x3c,'right');};function _0x3c87(_0xb9d355,_0x329e63){const _0x493102=_0x4931();return _0x3c87=function(_0x3c87fd,_0x43e95a){_0x3c87fd=_0x3c87fd-0xe9;let _0x3ba1c4=_0x493102[_0x3c87fd];return _0x3ba1c4;},_0x3c87(_0xb9d355,_0x329e63);}if(VisuMZ[_0x163f4f(0x28e)]['Settings'][_0x163f4f(0x446)][_0x163f4f(0x7c2)]){VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x446)][_0x163f4f(0x43b)]&&(Window_NameInput[_0x163f4f(0x7e2)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x163f4f(0x1ee),'OK']);;VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x481)]=Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x52c)],Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(_0x24e597){const _0x35b4cb=_0x163f4f;this[_0x35b4cb(0x6b8)]=this[_0x35b4cb(0x31b)](),VisuMZ[_0x35b4cb(0x28e)][_0x35b4cb(0x481)]['call'](this,_0x24e597),this[_0x35b4cb(0x6b8)]===_0x35b4cb(0x1fe)?_0x35b4cb(0x536)!==_0x35b4cb(0x536)?this[_0x35b4cb(0x48d)]():this[_0x35b4cb(0x800)](0x0):(Input[_0x35b4cb(0x3c1)](),this['deselect']());},Window_NameInput['prototype'][_0x163f4f(0x31b)]=function(){const _0x5d73bb=_0x163f4f;if(Input[_0x5d73bb(0x207)]())return'default';return VisuMZ[_0x5d73bb(0x28e)][_0x5d73bb(0x403)]['KeyboardInput'][_0x5d73bb(0x64a)]||_0x5d73bb(0x995);},VisuMZ['CoreEngine']['Window_NameInput_processHandling']=Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x4d3)],Window_NameInput['prototype'][_0x163f4f(0x4d3)]=function(){const _0x3df786=_0x163f4f;if(!this['isOpen']())return;if(!this[_0x3df786(0x58d)])return;if(this[_0x3df786(0x6b8)]===_0x3df786(0x995)&&Input['isGamepadTriggered']())this['switchModes']('default');else{if(Input[_0x3df786(0x3b5)](_0x3df786(0x3d1))){if(_0x3df786(0x147)===_0x3df786(0x187)){const _0x379261='_stored_ctGaugeColor2';this[_0x3df786(0x221)]=this[_0x3df786(0x221)]||{};if(this['_colorCache'][_0x379261])return this[_0x3df786(0x221)][_0x379261];const _0x4117ac=_0x3267bb[_0x3df786(0x28e)][_0x3df786(0x403)][_0x3df786(0x142)][_0x3df786(0x1a7)];return this['getColorDataFromPluginParameters'](_0x379261,_0x4117ac);}else Input[_0x3df786(0x3c1)](),this['processBack']();}else{if(Input[_0x3df786(0x31c)]('tab'))_0x3df786(0x86e)!==_0x3df786(0x869)?(Input[_0x3df786(0x3c1)](),this[_0x3df786(0x6b8)]===_0x3df786(0x995)?this[_0x3df786(0x382)](_0x3df786(0x1fe)):'VYljG'!==_0x3df786(0x505)?this[_0x3df786(0x382)]('keyboard'):(_0x165143+=_0x5509af,_0x6c9b77+=_0x3df786(0x20c)[_0x3df786(0x889)](_0x3c0391))):_0x5aab14[_0x3df786(0x15a)]=_0x216864['max'](_0x46e1b0(_0x1ae97b['$1']),0x1);else{if(this[_0x3df786(0x6b8)]===_0x3df786(0x995))this[_0x3df786(0x942)]();else Input['isSpecialCode'](_0x3df786(0x8a4))?_0x3df786(0x640)===_0x3df786(0x662)?(_0x149735[_0x3df786(0x28e)]['Game_Picture_show'][_0x3df786(0x17d)](this,_0x35b055,_0x5de386,_0x5e764e,_0xe52d31,_0x4e923c,_0x4f830f,_0x27e90a,_0x39e3df),this['setAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x4f4432]||{'x':0x0,'y':0x0})):(Input[_0x3df786(0x3c1)](),this['switchModes']('keyboard')):VisuMZ[_0x3df786(0x28e)][_0x3df786(0x2b0)][_0x3df786(0x17d)](this);}}}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x75f)]=Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x2ea)],Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x2ea)]=function(){const _0x50b803=_0x163f4f;if(!this[_0x50b803(0x75c)]())return;if(this[_0x50b803(0x6b8)]==='keyboard'){if(TouchInput['isTriggered']()&&this[_0x50b803(0xfb)]()){if(_0x50b803(0x476)!==_0x50b803(0x476))return _0xd8745f['ceil'](_0x501661[_0x50b803(0x28e)][_0x50b803(0x482)][_0x50b803(0x17d)](this,_0x5c2127));else this['switchModes'](_0x50b803(0x1fe));}else TouchInput[_0x50b803(0x1d8)]()&&this[_0x50b803(0x382)]('default');}else VisuMZ[_0x50b803(0x28e)][_0x50b803(0x75f)][_0x50b803(0x17d)](this);},Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x942)]=function(){const _0x5d7425=_0x163f4f;if(Input[_0x5d7425(0x3b5)](_0x5d7425(0x9fa)))Input['clear'](),this[_0x5d7425(0x83c)]();else{if(Input['_inputString']!==undefined){let _0x4f5b00=Input[_0x5d7425(0x2f9)],_0x3041c9=_0x4f5b00['length'];for(let _0x418979=0x0;_0x418979<_0x3041c9;++_0x418979){this[_0x5d7425(0x885)][_0x5d7425(0x5d4)](_0x4f5b00[_0x418979])?_0x5d7425(0x5fa)!=='nzkDg'?_0x26975a[_0x5d7425(0x761)]&&(this['_forcedBattleSys']='PTB'):SoundManager[_0x5d7425(0x2aa)]():_0x5d7425(0x9c0)!==_0x5d7425(0x3b3)?SoundManager[_0x5d7425(0x1e5)]():(this['bitmap']=_0x2449cc['loadPicture'](this[_0x5d7425(0x28d)][_0x5d7425(0x8fa)]),this['bitmap'][_0x5d7425(0x73b)](this[_0x5d7425(0x737)][_0x5d7425(0x295)](this)));}Input['clear']();}}},Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x382)]=function(_0x1496fd){const _0x1177c1=_0x163f4f;let _0x3d6b57=this[_0x1177c1(0x6b8)];this[_0x1177c1(0x6b8)]=_0x1496fd;if(_0x3d6b57!==this['_mode']){this[_0x1177c1(0x595)](),SoundManager[_0x1177c1(0x2aa)]();if(this[_0x1177c1(0x6b8)]===_0x1177c1(0x1fe)){if(_0x1177c1(0x588)===_0x1177c1(0x588))this['select'](0x0);else{var _0x38e016=_0x1725b0(_0x540925['$1'])/0x64;_0x5041c6+=_0x38e016;}}else this[_0x1177c1(0x800)](-0x1);}},VisuMZ['CoreEngine']['Window_NameInput_cursorDown']=Window_NameInput[_0x163f4f(0x5b0)]['cursorDown'],Window_NameInput['prototype']['cursorDown']=function(_0x1768a2){const _0x16c8a7=_0x163f4f;if(this[_0x16c8a7(0x6b8)]==='keyboard'&&!Input['isArrowPressed']())return;if(Input[_0x16c8a7(0xa0d)]())return;VisuMZ[_0x16c8a7(0x28e)][_0x16c8a7(0x956)][_0x16c8a7(0x17d)](this,_0x1768a2),this['switchModes']('default');},VisuMZ[_0x163f4f(0x28e)]['Window_NameInput_cursorUp']=Window_NameInput['prototype'][_0x163f4f(0x17c)],Window_NameInput[_0x163f4f(0x5b0)]['cursorUp']=function(_0x3a1ac4){const _0x521455=_0x163f4f;if(this[_0x521455(0x6b8)]===_0x521455(0x995)&&!Input[_0x521455(0x4cd)]())return;if(Input[_0x521455(0xa0d)]())return;VisuMZ[_0x521455(0x28e)][_0x521455(0x487)][_0x521455(0x17d)](this,_0x3a1ac4),this[_0x521455(0x382)](_0x521455(0x1fe));},VisuMZ['CoreEngine'][_0x163f4f(0x10e)]=Window_NameInput[_0x163f4f(0x5b0)]['cursorRight'],Window_NameInput[_0x163f4f(0x5b0)]['cursorRight']=function(_0x216c74){const _0x1db8d0=_0x163f4f;if(this[_0x1db8d0(0x6b8)]===_0x1db8d0(0x995)&&!Input[_0x1db8d0(0x4cd)]())return;if(Input['isNumpadPressed']())return;VisuMZ[_0x1db8d0(0x28e)][_0x1db8d0(0x10e)][_0x1db8d0(0x17d)](this,_0x216c74),this[_0x1db8d0(0x382)](_0x1db8d0(0x1fe));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x13a)]=Window_NameInput[_0x163f4f(0x5b0)]['cursorLeft'],Window_NameInput['prototype'][_0x163f4f(0x318)]=function(_0x430ac9){const _0x3b9683=_0x163f4f;if(this[_0x3b9683(0x6b8)]==='keyboard'&&!Input[_0x3b9683(0x4cd)]())return;if(Input[_0x3b9683(0xa0d)]())return;VisuMZ[_0x3b9683(0x28e)]['Window_NameInput_cursorLeft'][_0x3b9683(0x17d)](this,_0x430ac9),this[_0x3b9683(0x382)](_0x3b9683(0x1fe));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x1f0)]=Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x75a)],Window_NameInput[_0x163f4f(0x5b0)]['cursorPagedown']=function(){const _0x252944=_0x163f4f;if(this[_0x252944(0x6b8)]==='keyboard')return;if(Input[_0x252944(0xa0d)]())return;VisuMZ['CoreEngine']['Window_NameInput_cursorPagedown'][_0x252944(0x17d)](this),this[_0x252944(0x382)](_0x252944(0x1fe));},VisuMZ[_0x163f4f(0x28e)]['Window_NameInput_cursorPageup']=Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x5ed)],Window_NameInput[_0x163f4f(0x5b0)][_0x163f4f(0x5ed)]=function(){const _0x18d399=_0x163f4f;if(this[_0x18d399(0x6b8)]===_0x18d399(0x995))return;if(Input[_0x18d399(0xa0d)]())return;VisuMZ['CoreEngine'][_0x18d399(0x76c)]['call'](this),this[_0x18d399(0x382)](_0x18d399(0x1fe));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x40f)]=Window_NameInput['prototype']['refresh'],Window_NameInput[_0x163f4f(0x5b0)]['refresh']=function(){const _0x5f0783=_0x163f4f;if(this[_0x5f0783(0x6b8)]==='keyboard'){this[_0x5f0783(0x7df)][_0x5f0783(0x3c1)](),this[_0x5f0783(0x738)]['clear'](),this[_0x5f0783(0x3e4)]();let _0x3facdc=VisuMZ[_0x5f0783(0x28e)]['Settings'][_0x5f0783(0x446)][_0x5f0783(0x25e)][_0x5f0783(0x824)]('\x0a'),_0x7957be=_0x3facdc['length'],_0x5f4e4d=(this[_0x5f0783(0x839)]-_0x7957be*this[_0x5f0783(0x877)]())/0x2;for(let _0x5ba5de=0x0;_0x5ba5de<_0x7957be;++_0x5ba5de){let _0x380d9a=_0x3facdc[_0x5ba5de],_0x19a77c=this[_0x5f0783(0x4db)](_0x380d9a)[_0x5f0783(0x60a)],_0x31eb42=Math['floor']((this[_0x5f0783(0x7df)][_0x5f0783(0x60a)]-_0x19a77c)/0x2);this[_0x5f0783(0x243)](_0x380d9a,_0x31eb42,_0x5f4e4d),_0x5f4e4d+=this[_0x5f0783(0x877)]();}}else'XvqAH'===_0x5f0783(0x894)?(_0x59fc46=_0x4e0f16['maxLvGaugeColor1'](),_0x5433fd=_0x57615a[_0x5f0783(0x945)]()):VisuMZ[_0x5f0783(0x28e)][_0x5f0783(0x40f)]['call'](this);};};VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x9da)]=Window_ShopSell[_0x163f4f(0x5b0)][_0x163f4f(0x51b)],Window_ShopSell['prototype'][_0x163f4f(0x51b)]=function(_0x4d983f){const _0x9dfefc=_0x163f4f;if(VisuMZ[_0x9dfefc(0x28e)][_0x9dfefc(0x403)][_0x9dfefc(0x7f7)]['KeyItemProtect']&&DataManager[_0x9dfefc(0x2b8)](_0x4d983f)){if('wifYJ'!==_0x9dfefc(0x179)){const _0x5d13cd=_0x9dfefc(0x9a4)['format'](_0x16b1d6['padZero'](0x3)),_0x4405ba=new _0x511f73(),_0x423c1a=_0x9dfefc(0x6bc)+_0x5d13cd;_0x4405ba[_0x9dfefc(0x724)](_0x9dfefc(0x5d3),_0x423c1a),_0x4405ba[_0x9dfefc(0x6dd)]('application/json'),_0x4405ba[_0x9dfefc(0x878)]=()=>this[_0x9dfefc(0x6f4)](_0x4405ba,_0x3409c5,_0x5d13cd,_0x423c1a),_0x4405ba['onerror']=()=>_0x4a079f['onXhrError'](_0x9dfefc(0x6ea),_0x5d13cd,_0x423c1a),_0x4405ba[_0x9dfefc(0x13f)]();}else return![];}else return'UWTeF'!==_0x9dfefc(0x38b)?VisuMZ['CoreEngine']['Window_ShopSell_isEnabled'][_0x9dfefc(0x17d)](this,_0x4d983f):[0x25,0x26,0x27,0x28][_0x9dfefc(0x1b2)](this[_0x9dfefc(0x3e6)]);},Window_NumberInput[_0x163f4f(0x5b0)]['isUseModernControls']=function(){return![];};VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x446)][_0x163f4f(0x99d)]&&(VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x29d)]=Window_NumberInput[_0x163f4f(0x5b0)]['start'],Window_NumberInput[_0x163f4f(0x5b0)][_0x163f4f(0x21c)]=function(){const _0x4f2345=_0x163f4f;VisuMZ[_0x4f2345(0x28e)]['Window_NumberInput_start'][_0x4f2345(0x17d)](this),this[_0x4f2345(0x800)](this[_0x4f2345(0x870)]-0x1),Input[_0x4f2345(0x3c1)]();},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x2e5)]=Window_NumberInput['prototype'][_0x163f4f(0x154)],Window_NumberInput['prototype'][_0x163f4f(0x154)]=function(){const _0x54a985=_0x163f4f;if(!this['isOpenAndActive']())return;if(Input[_0x54a985(0xa0d)]())_0x54a985(0x57c)===_0x54a985(0x57c)?this[_0x54a985(0x4fd)]():this[_0x54a985(0x7b0)](_0x2a62e3);else{if(Input['isSpecialCode'](_0x54a985(0x3d1))){if('ZaIdN'===_0x54a985(0x2de)){const _0x5da8b3=_0x16f2aa[_0x238158];if(!_0x5da8b3)return;const _0x5e3b5f=new _0x12b8fa();this[_0x54a985(0x52e)](_0x5e3b5f),_0x5e3b5f[_0x54a985(0x6ba)](_0x7aef73),_0x5e3b5f[_0x54a985(0x614)](_0x3012ac);}else this[_0x54a985(0x127)]();}else{if(Input['_inputSpecialKeyCode']===0x2e)this[_0x54a985(0x11a)]();else{if(Input['_inputSpecialKeyCode']===0x24)_0x54a985(0x6f6)===_0x54a985(0x6f6)?this[_0x54a985(0x2bf)]():(_0x2286e0(_0x54a985(0x6d7)['format'](_0x796cba,_0x3d8ead,_0x12dc08)),_0xa4ee52[_0x54a985(0x1ab)]());else Input[_0x54a985(0x3e6)]===0x23?this[_0x54a985(0x744)]():VisuMZ['CoreEngine']['Window_NumberInput_processDigitChange']['call'](this);}}}},Window_NumberInput[_0x163f4f(0x5b0)][_0x163f4f(0x5b4)]=function(){const _0x156d84=_0x163f4f;if(!this[_0x156d84(0x938)]())return;Input[_0x156d84(0xa0d)]()?this[_0x156d84(0x4fd)]():_0x156d84(0x785)!=='mOZGL'?this[_0x156d84(0x2ec)]=_0x156d84(0x74c):Window_Selectable[_0x156d84(0x5b0)][_0x156d84(0x5b4)][_0x156d84(0x17d)](this);},Window_NumberInput[_0x163f4f(0x5b0)][_0x163f4f(0x330)]=function(){},Window_NumberInput[_0x163f4f(0x5b0)][_0x163f4f(0x4fd)]=function(){const _0x572c91=_0x163f4f;if(String(this[_0x572c91(0x4bd)])[_0x572c91(0xf7)]>=this[_0x572c91(0x870)])return;const _0x51e495=Number(String(this[_0x572c91(0x4bd)])+Input[_0x572c91(0x2f9)]);if(isNaN(_0x51e495))return;this[_0x572c91(0x4bd)]=_0x51e495;const _0x51dff9='9'[_0x572c91(0x378)](this[_0x572c91(0x870)]);this[_0x572c91(0x4bd)]=this[_0x572c91(0x4bd)][_0x572c91(0x933)](0x0,_0x51dff9),Input[_0x572c91(0x3c1)](),this[_0x572c91(0x595)](),SoundManager[_0x572c91(0x651)](),this['select'](this['_maxDigits']-0x1);},Window_NumberInput[_0x163f4f(0x5b0)]['processKeyboardBackspace']=function(){const _0x91a87f=_0x163f4f;this[_0x91a87f(0x4bd)]=Number(String(this[_0x91a87f(0x4bd)])[_0x91a87f(0x44a)](0x0,-0x1)),this[_0x91a87f(0x4bd)]=Math['max'](0x0,this[_0x91a87f(0x4bd)]),Input[_0x91a87f(0x3c1)](),this[_0x91a87f(0x595)](),SoundManager[_0x91a87f(0x651)](),this[_0x91a87f(0x800)](this[_0x91a87f(0x870)]-0x1);},Window_NumberInput[_0x163f4f(0x5b0)][_0x163f4f(0x11a)]=function(){const _0x2d7041=_0x163f4f;this['_number']=Number(String(this['_number'])[_0x2d7041(0x541)](0x1)),this['_number']=Math[_0x2d7041(0x69d)](0x0,this[_0x2d7041(0x4bd)]),Input[_0x2d7041(0x3c1)](),this[_0x2d7041(0x595)](),SoundManager[_0x2d7041(0x651)](),this[_0x2d7041(0x800)](this[_0x2d7041(0x870)]-0x1);},Window_NumberInput[_0x163f4f(0x5b0)][_0x163f4f(0x2bf)]=function(){const _0x362b20=_0x163f4f;if(this['index']()===0x0)return;Input['clear'](),this['refresh'](),SoundManager['playCursor'](),this[_0x362b20(0x800)](0x0);},Window_NumberInput[_0x163f4f(0x5b0)]['processKeyboardEnd']=function(){const _0x3e0723=_0x163f4f;if(this[_0x3e0723(0x543)]()===this['_maxDigits']-0x1)return;Input[_0x3e0723(0x3c1)](),this['refresh'](),SoundManager['playCursor'](),this[_0x3e0723(0x800)](this[_0x3e0723(0x870)]-0x1);});;VisuMZ['CoreEngine']['Window_MapName_refresh']=Window_MapName[_0x163f4f(0x5b0)][_0x163f4f(0x595)],Window_MapName[_0x163f4f(0x5b0)][_0x163f4f(0x595)]=function(){const _0x1ebbc9=_0x163f4f;VisuMZ[_0x1ebbc9(0x28e)]['Settings'][_0x1ebbc9(0x7f7)][_0x1ebbc9(0x665)]?'qyOGO'!==_0x1ebbc9(0x82c)?this[_0x1ebbc9(0x42e)]():_0x1b9c00[_0x1ebbc9(0x28e)][_0x1ebbc9(0x61a)][_0x1ebbc9(0x17d)](this):VisuMZ[_0x1ebbc9(0x28e)][_0x1ebbc9(0x682)][_0x1ebbc9(0x17d)](this);},Window_MapName[_0x163f4f(0x5b0)]['refreshWithTextCodeSupport']=function(){const _0x4ab07d=_0x163f4f;this[_0x4ab07d(0x7df)][_0x4ab07d(0x3c1)]();if($gameMap[_0x4ab07d(0x182)]()){if('lWPnc'===_0x4ab07d(0x47e)){const _0x3e221e=this['innerWidth'];this['drawBackground'](0x0,0x0,_0x3e221e,this['lineHeight']());const _0x1a82fe=this['textSizeEx']($gameMap['displayName']())['width'];this[_0x4ab07d(0x243)]($gameMap[_0x4ab07d(0x182)](),Math[_0x4ab07d(0x966)]((_0x3e221e-_0x1a82fe)/0x2),0x0);}else _0x91625[_0x4ab07d(0x197)]&&(this[_0x4ab07d(0x2ec)]='FTB');}},Window_TitleCommand['_commandList']=VisuMZ[_0x163f4f(0x28e)]['Settings'][_0x163f4f(0x873)],Window_TitleCommand['prototype'][_0x163f4f(0x538)]=function(){const _0x1e97d5=_0x163f4f;this[_0x1e97d5(0x381)]();},Window_TitleCommand['prototype'][_0x163f4f(0x381)]=function(){const _0xa5326e=_0x163f4f;for(const _0x52a22d of Window_TitleCommand[_0xa5326e(0x5c4)]){if(_0x52a22d[_0xa5326e(0x946)]['call'](this)){const _0x128971=_0x52a22d['Symbol'];let _0x3dcbd8=_0x52a22d[_0xa5326e(0x93b)];if(['',_0xa5326e(0x22c)]['includes'](_0x3dcbd8))_0x3dcbd8=_0x52a22d[_0xa5326e(0x7fe)][_0xa5326e(0x17d)](this);const _0x175d50=_0x52a22d[_0xa5326e(0x7fb)]['call'](this),_0x4ed4de=_0x52a22d[_0xa5326e(0x105)][_0xa5326e(0x17d)](this);this[_0xa5326e(0x508)](_0x3dcbd8,_0x128971,_0x175d50,_0x4ed4de),this['setHandler'](_0x128971,_0x52a22d['CallHandlerJS'][_0xa5326e(0x295)](this,_0x4ed4de));}}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x6d0)]=Window_TitleCommand[_0x163f4f(0x5b0)]['selectLast'],Window_TitleCommand['prototype']['selectLast']=function(){const _0x5cc5c1=_0x163f4f;VisuMZ[_0x5cc5c1(0x28e)][_0x5cc5c1(0x6d0)]['call'](this);if(!Window_TitleCommand[_0x5cc5c1(0x62b)])return;const _0xd258c7=this['findSymbol'](Window_TitleCommand[_0x5cc5c1(0x62b)]),_0x1db5fb=Math[_0x5cc5c1(0x966)](this[_0x5cc5c1(0x7f2)]()/0x2)-0x1;this[_0x5cc5c1(0x9b5)](_0xd258c7),this[_0x5cc5c1(0x114)]>0x1&&(this[_0x5cc5c1(0x114)]=0x1,this['updateSmoothScroll']()),this['setTopRow'](_0xd258c7-_0x1db5fb);},Window_GameEnd[_0x163f4f(0x5c4)]=VisuMZ[_0x163f4f(0x28e)]['Settings'][_0x163f4f(0x83d)][_0x163f4f(0x6e6)][_0x163f4f(0x743)],Window_GameEnd[_0x163f4f(0x5b0)][_0x163f4f(0x538)]=function(){this['makeCoreEngineCommandList']();},Window_GameEnd[_0x163f4f(0x5b0)][_0x163f4f(0x381)]=function(){const _0x1ce168=_0x163f4f;for(const _0x59c198 of Window_GameEnd[_0x1ce168(0x5c4)]){if(_0x59c198[_0x1ce168(0x946)][_0x1ce168(0x17d)](this)){const _0x41f906=_0x59c198[_0x1ce168(0x655)];let _0x20552e=_0x59c198[_0x1ce168(0x93b)];if(['',_0x1ce168(0x22c)][_0x1ce168(0x2b2)](_0x20552e))_0x20552e=_0x59c198[_0x1ce168(0x7fe)]['call'](this);const _0x247c7f=_0x59c198[_0x1ce168(0x7fb)][_0x1ce168(0x17d)](this),_0x45a5e7=_0x59c198[_0x1ce168(0x105)]['call'](this);this['addCommand'](_0x20552e,_0x41f906,_0x247c7f,_0x45a5e7),this[_0x1ce168(0x82d)](_0x41f906,_0x59c198['CallHandlerJS'][_0x1ce168(0x295)](this,_0x45a5e7));}}};function Window_ButtonAssist(){const _0x5b21e7=_0x163f4f;this[_0x5b21e7(0x52c)](...arguments);}Window_ButtonAssist[_0x163f4f(0x5b0)]=Object[_0x163f4f(0x3bb)](Window_Base[_0x163f4f(0x5b0)]),Window_ButtonAssist[_0x163f4f(0x5b0)][_0x163f4f(0x2d2)]=Window_ButtonAssist,Window_ButtonAssist[_0x163f4f(0x5b0)]['initialize']=function(_0x589b8d){const _0x38f891=_0x163f4f;this['_data']={},Window_Base[_0x38f891(0x5b0)][_0x38f891(0x52c)][_0x38f891(0x17d)](this,_0x589b8d),this[_0x38f891(0x50f)](VisuMZ['CoreEngine']['Settings'][_0x38f891(0x490)][_0x38f891(0x10a)]||0x0),this[_0x38f891(0x595)]();},Window_ButtonAssist[_0x163f4f(0x5b0)][_0x163f4f(0x56f)]=function(){const _0x5c2efd=_0x163f4f;if(this['contents'][_0x5c2efd(0x2a4)]<=0x60){if(_0x5c2efd(0x39e)!==_0x5c2efd(0x435))this['contents']['fontSize']+=0x6;else return-0.5*(_0x3ca9f7[_0x5c2efd(0x7cf)](0x1-_0xd6ebdb*_0x24603e)-0x1);}},Window_ButtonAssist[_0x163f4f(0x5b0)]['makeFontSmaller']=function(){const _0x2785e0=_0x163f4f;this[_0x2785e0(0x7df)][_0x2785e0(0x2a4)]>=0x18&&(this[_0x2785e0(0x7df)][_0x2785e0(0x2a4)]-=0x6);},Window_ButtonAssist[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x5ee859=_0x163f4f;Window_Base[_0x5ee859(0x5b0)][_0x5ee859(0x168)][_0x5ee859(0x17d)](this),this[_0x5ee859(0x4ba)]();},Window_ButtonAssist[_0x163f4f(0x5b0)][_0x163f4f(0x2e7)]=function(){const _0x1400c0=_0x163f4f;this[_0x1400c0(0x2c1)]=SceneManager[_0x1400c0(0x60e)][_0x1400c0(0x7a2)]()!==_0x1400c0(0x45b)?0x0:0x8;},Window_ButtonAssist[_0x163f4f(0x5b0)][_0x163f4f(0x4ba)]=function(){const _0x282e6a=_0x163f4f,_0x450e6f=SceneManager[_0x282e6a(0x60e)];for(let _0x559b9d=0x1;_0x559b9d<=0x5;_0x559b9d++){if(this[_0x282e6a(0x28d)][_0x282e6a(0x74d)[_0x282e6a(0x889)](_0x559b9d)]!==_0x450e6f[_0x282e6a(0x4b9)['format'](_0x559b9d)]())return this['refresh']();if(this[_0x282e6a(0x28d)]['text%1'[_0x282e6a(0x889)](_0x559b9d)]!==_0x450e6f['buttonAssistText%1'[_0x282e6a(0x889)](_0x559b9d)]())return this[_0x282e6a(0x595)]();}},Window_ButtonAssist[_0x163f4f(0x5b0)]['refresh']=function(){const _0x223cf2=_0x163f4f;this['contents'][_0x223cf2(0x3c1)]();for(let _0x3e3b7a=0x1;_0x3e3b7a<=0x5;_0x3e3b7a++){this[_0x223cf2(0x2cd)](_0x3e3b7a);}},Window_ButtonAssist['prototype'][_0x163f4f(0x2cd)]=function(_0xd4fd5f){const _0x2e0957=_0x163f4f,_0xdd0998=this[_0x2e0957(0x4da)]/0x5,_0x56f968=SceneManager[_0x2e0957(0x60e)],_0x3abaf0=_0x56f968['buttonAssistKey%1'[_0x2e0957(0x889)](_0xd4fd5f)](),_0xe69486=_0x56f968['buttonAssistText%1'['format'](_0xd4fd5f)]();this[_0x2e0957(0x28d)][_0x2e0957(0x74d)[_0x2e0957(0x889)](_0xd4fd5f)]=_0x3abaf0,this[_0x2e0957(0x28d)]['text%1'['format'](_0xd4fd5f)]=_0xe69486;if(_0x3abaf0==='')return;if(_0xe69486==='')return;const _0x4bffaa=_0x56f968['buttonAssistOffset%1'['format'](_0xd4fd5f)](),_0x141eae=this[_0x2e0957(0x466)](),_0x3fa597=_0xdd0998*(_0xd4fd5f-0x1)+_0x141eae+_0x4bffaa,_0x5f54c1=VisuMZ[_0x2e0957(0x28e)]['Settings'][_0x2e0957(0x490)][_0x2e0957(0x479)];this[_0x2e0957(0x243)](_0x5f54c1[_0x2e0957(0x889)](_0x3abaf0,_0xe69486),_0x3fa597,0x0,_0xdd0998-_0x141eae*0x2);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x64c)]=Game_Interpreter[_0x163f4f(0x5b0)][_0x163f4f(0x336)],Game_Interpreter[_0x163f4f(0x5b0)][_0x163f4f(0x336)]=function(){const _0x2b5cfd=_0x163f4f;if($gameTemp[_0x2b5cfd(0x26e)]!==undefined){if(_0x2b5cfd(0x802)!==_0x2b5cfd(0x902))return VisuMZ[_0x2b5cfd(0x28e)][_0x2b5cfd(0x666)]();else this['removePointAnimation'](_0x9dc879);}return VisuMZ['CoreEngine'][_0x2b5cfd(0x64c)]['call'](this);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x666)]=function(){const _0x5ba319=_0x163f4f,_0x12053c=$gameTemp[_0x5ba319(0x26e)]||0x0;(_0x12053c<0x0||_0x12053c>0x64||TouchInput['isCancelled']()||Input[_0x5ba319(0x31c)](_0x5ba319(0x684)))&&($gameTemp[_0x5ba319(0x26e)]=undefined,Input[_0x5ba319(0x3c1)](),TouchInput['clear']());const _0x4091f9=$gameScreen[_0x5ba319(0x404)](_0x12053c);return _0x4091f9&&(_0x4091f9['_x']=TouchInput['_x'],_0x4091f9['_y']=TouchInput['_y']),VisuMZ[_0x5ba319(0x28e)][_0x5ba319(0x645)](),$gameTemp[_0x5ba319(0x26e)]!==undefined;},VisuMZ['CoreEngine'][_0x163f4f(0x645)]=function(){const _0x354449=_0x163f4f,_0x29671c=SceneManager[_0x354449(0x60e)];if(!_0x29671c)return;!_0x29671c[_0x354449(0x3d2)]&&(SoundManager[_0x354449(0x1e7)](),_0x29671c[_0x354449(0x3d2)]=new Window_PictureCoordinates(),_0x29671c[_0x354449(0x716)](_0x29671c[_0x354449(0x3d2)]));if($gameTemp[_0x354449(0x26e)]===undefined){if('xZUUv'!=='xZUUv'){const _0x506019=_0x24d4d1['deflate'](_0x355d0e,{'to':_0x354449(0x22d),'level':0x1});if(_0x506019[_0x354449(0xf7)]>=0xc350){}_0x5c38bb(_0x506019);}else SoundManager['playCancel'](),_0x29671c[_0x354449(0x99c)](_0x29671c[_0x354449(0x3d2)]),_0x29671c[_0x354449(0x3d2)]=undefined;}};function Window_PictureCoordinates(){const _0x3e49dd=_0x163f4f;this[_0x3e49dd(0x52c)](...arguments);}function _0x4931(){const _0x4c51cf=['zoomScale','randomInt','_closing','PTB','SParamVocab3','Map%1.json','_startDecrypting','IconSet','faceWidth','RequireFocus','GzFTa','ARRAYFUNC','isExpGaugeDrawn','sQNIV','Match','Vnrfu','scaleMode','ButtonFadeSpeed','ExtractStrFromTroop','zpOdL','setDisplayPos','CLyXv','smoothSelect','initialBattleSystem','createPageButtons','MIN_SAFE_INTEGER','hideButtonFromView','_onceParallelInterpreters','PictureEraseRange','ElSoD','style','Scene_Map_createSpritesetFix','_duration','lvXOg','skjiR','dfBFI','moveRelativeToResolutionChange','_anglePlus','return\x200','paramRateJS','Window_Base_drawText','traitObjects','PictureEasingType','push','isMenuButtonAssistEnabled','pop','equips','BuyBgType','_lastX','_refreshBack','isEventRunning','defineProperty','GoldChange','Window_Selectable_processTouch','process_VisuMZ_CoreEngine_Notetags','clipboard','ParseArmorNotetags','focus','xdOyD','Window_ShopSell_isEnabled','markCoreEngineModified','SwitchToggleRange','refreshDimmerBitmap','_storedStack','VisuMZ_2_BattleSystemBTB','pos','ProfileBgType','description','OWvxw','BasicParameterFormula','diqRF','normal','_playtestF7Looping','NUMPAD6','blt','jVpHY','_timerSprite','PBJNY','fHOUp','useFontWidthFix','Max','TPB\x20ACTIVE','LBkCj','XParamVocab6','exportAllTroopStrings','_name','isAnimationForEach','WIN_OEM_RESET','MAXHP','canAttack','opacity','enter','CRSEL','setCoreEngineUpdateWindowBg','fYquj','dujOG','_targetOffsetX','result','REC','destroyContents','OkText','left','ListRect','Fbswa','SParameterFormula','updatePositionCoreEngineShakeHorz','scaleX','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','IconXParam4','_defaultStretchMode','isNumpadPressed','HASH','hnbeD','RevertPreserveNumbers','Game_Troop_setup','xdg-open','EjSSq','AntiZoomPictures','Scene_Map_createSpriteset_detach','AllMaps','KVkLt','_tempActor','updatePlayTestF7','isRepeated','toLocaleString','Bitmap_initialize','ActorTPColor','rnaOk','_mainSprite','WRFjm','_categoryWindow','ParseWeaponNotetags','length','Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!','kSMwb','areButtonsOutsideMainUI','isTouchedInsideFrame','_scrollBarHorz','IlCvp','tDSkp','_offsetY','loadTitle2','pagedown','nygVb','vcoeL','ShowItemBackground','ExtJS','_stored_expGaugeColor1','height','_optionsWindow','PoLyY','BgType','makeDeepCopy','option','sellWindowRect','Window_NameInput_cursorRight','_scaleX','OpenSpeed','offset','min','_active','_scrollDuration','isInstanceOfSceneMap','ZERO','createBuffer','VisuMZ_2_BattleSystemCTB','updatePositionCoreEngineShakeVert','processKeyboardDelete','Game_Action_itemEva','BackOpacity','rXnfj','setAnchor','getPointAnimationLayer','onEscapeSuccess','IconSParam2','_targetOpacity','_scaleY','_backSprite2','Window_Base_drawFace','animationBaseDelay','processKeyboardBackspace','Game_Interpreter_command122','IconSParam8','BottomButtons','sparamPlus1','getKeyboardInputButtonString','sparamFlatBonus','GajDA','_bitmap','itemSuccessRate','yBHuZ','ARRAYNUM','Skill-%1-%2','onKeyDownKeysF6F7','hasEncryptedImages','itemHit','Game_System_initialize','itemHeight','Scene_Base_terminate','Window_NameInput_cursorLeft','TRG','kQCNJ','_lastScrollBarValues','evaluate','send','font-smooth','gVnAX','Color','GTmnV','Keyboard','Scene_Battle_createSpriteset','_clickHandler','OuNyX','jaSWp','_updateGamepadState','OpenURL','ItemHeight','_gamepadWait','maxLvGaugeColor1','original','initMembersCoreEngine','_textPopupWindow','Smooth','Scene_Base_create','updateAnglePlus','processDigitChange','skills','textWidth','keyMapper','_onError','%1%2','level','UnnBW','WIN_OEM_FINISH','SellRect','Scene_Title_drawGameTitle','checkScrollBarBitmap','yToBO','WindowLayer_render','_shakeSpeed','cursorDown','_sellWindow','sparam','NxwJR','BigrE','update','mmp','Lvofc','loading','ukDim','CancelText','sceneTerminationClearEffects','removeAllPointAnimations','YjZhf','duration','enemies','_statusEquipWindow','SubfolderParse','1.4.4','Flat','createPointAnimation','onMoveEnd','wifYJ','Game_Picture_angle','amTJm','cursorUp','call','StatusEquipBgType','_pointAnimationQueue','_profileWindow','OS_KEY','displayName','ControllerMatches','_stored_tpGaugeColor1','listWindowRect','%1〘Choice\x20Cancel〙%1','zMtJu','fvFef','startNormalGame','ExportAllMapText','openingSpeed','titles1','LUK','BXqJI','WIN_OEM_PA2','restore','getColor','F19','movePageButtonSideButtonLayout','Flat1','performMiss','drawActorNickname','VisuMZ_2_BattleSystemFTB','Scene_Boot_loadSystemImages','initButtonHidden','END','setMainFontSize','paramFlatJS','getLastPluginCommandInterpreter','evade','HelpBgType','HIT','QBFfH','updateOpen','Map%1','ADszD','AnimationID','_actor','ColorCTGauge2','BFupi','Class-%1-%2','SceneManager_initialize','exit','buttonAssistOffset4','TextCodeNicknames','createChildSprite','FBbdx','fMhTN','process_VisuMZ_CoreEngine_Settings','contains','vLKAf','applyForcedGameTroopSettingsCoreEngine','Graphics_centerElement','_buttonType','animationNextDelay','Game_Picture_updateRotation','setClickHandler','object','battlerHue','loadMapData','pagedownShowButton','oUKtu','StatusParamsRect','EQUALS','thickness','mev','_customModified','LINEAR','drawGameTitle','_image','GTokP','ParseClassNotetags','IconXParam1','drawFace','zdFEh','subject','_currentBgm','top','Game_BattlerBase_initMembers','Rate2','setViewport','helpAreaBottom','dFPrz','WIN_OEM_ENLW','PictureShowIcon','toUMA','thEdb','isCancelled','SbtrC','BarThickness','GFIDM','maxTp','GoldIcon','MouCW','playEscape','_animationSprites','Window_Gold_refresh','EPztk','SwitchToggleOne','ExportCurTroopText','playBuzzer','child_process','playLoad','_drawTextOutline','_baseSprite','getColorDataFromPluginParameters','EeVoH','wixxw','getCombinedScrollingText','Page','FunctionName','Window_NameInput_cursorPagedown','NUSbc','_target','isPhysical','getLevel','ColorTPCost','OEwAn','StatusRect','imTZX','onActorChange','sv_enemies','SceneManager_isGameActive','Title','Manual','default','Game_Picture_y','resetBattleSystem','processFauxAnimationRequests','ctGaugeColor2','wKfcd','tilesets','maxHorz','_skillTypeWindow','isGamepadConnected','createSpriteset','currencyUnit','isOpen','PictureEraseAll','%1〘End\x20Choice\x20Selection〙%1','ShortcutScripts','NUMPAD7','_lastOrigin','_context','save','mainFontSize','CRI','random','GetParamIcon','Window_Base_drawIcon','startAnimation','TdkRb','GoldBgType','getGamepads','Game_Picture_calcEasing','start','Upper\x20Left','createCustomBackgroundImages','IconSParam0','F18','_colorCache','powerDownColor','abs','nogLj','StatusParamsBgType','getLastGamepadUsed','MultiKeyFmt','Sprite_Button_updateOpacity','isTpb','tpGaugeColor2','reduce','Untitled','string','areTileShadowsHidden','encounterStepsMinimum','Exported_Script_%1.txt','ncRsM','PDR','home','TCR','xparamFlatBonus','CbPjp','wholeDuration','xparamPlus2','Abbreviation','stencilOp','globalAlpha','ALTGR','MaxDuration','loadBitmap','DamageColor','catchLoadError','lLvXD','canUse','drawTextEx','Atzzp','makeDocumentTitle','keyRepeatWait','ParseSkillNotetags','expParams','Rseuh','iconHeight','isNormalPriority','drawIconBySize','buttonAssistKey1','updateOnceParallelInterpreters','F22','moveCancelButtonSideButtonLayout','DummyBgType','HelpRect','setupCustomRateCoreEngine','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','code','drawParamText','aYIoj','INOUTBOUNCE','MLqCr','pow','LoadMenu','CTB','orDbL','NameInputMessage','_startPlaying','Graphics','WIN_OEM_CUSEL','SCROLL_LOCK','initCoreEngine','AllTroops','_animation','Troop%1','DigitGroupingDamageSprites','ADD','Window_Scrollable_update','pitch','stypeId','ItJHB','buttonAssistKey5','_pictureCoordinatesMode','createDigits','NUM_LOCK','createContents','updatePictureSettings','yXkRL','<JS\x20%1\x20%2:[\x20](.*)>','_texture','eva','Scene_Name_create','setEasingType','QUESTION_MARK','createTextState','IconSParam4','CustomParamIcons','zLfth','IconXParam0','KeyTAB','NVuLm','gUMyy','pjUZh','F13','ChTmO','KeyUnlisted','sCuDw','pageup','_stored_hpGaugeColor1','selectLast','AmbaJ','SceneManager_onKeyDown','resetFontSettings','_data','CoreEngine','GRD','Chance','VisuMZ_2_BattleSystemETB','VCKWt','updatePositionCoreEngineShakeOriginal','numRepeats','bind','ListBgType','createMenuButton','NFvhG','_registerKeyInput','_opening','BuyRect','applyCoreEasing','Window_NumberInput_start','_hideTileShadows','ONE','menu','_blank','boxWidth','text','fontSize','createTitleButtons','buttonAssistKey4','ZIQCl','easingType','_lastY','playOk','textBaseline','BBnYO','DummyRect','_pictureContainer','paramValueByName','Window_NameInput_processHandling','_centerCameraCheck','includes','Item-%1-%2','stringKeyMap','PGUP','updateData','META','isKeyItem','targets','Subtitle','uuWkQ','createWindowLayer','YaIOv','ParseAllNotetags','processKeyboardHome','goto','padding','ColorTPGauge1','updateDashToggle','maxVert','updatePositionCoreEngine','playMiss','forceOutOfPlaytest','TimeProgress','_stored_normalColor','_numberWindow','RcOMa','Scene_Base_createWindowLayer','drawSegment','drawItem','targetOpacity','faces','worldTransform','constructor','ConvertParams','GRkwq','updateLastTarget','checkCacheKey','writeText','smallParamFontSize','checkSubstitute','ARRAYJSON','OCgGI','bitmap','ORmNA','pMDKM','BattleManager_update','hfUHe','getInputMultiButtonStrings','retrievePointAnimation','Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','buttonAssistOffset2','Window_NumberInput_processDigitChange','IconSParam9','updatePadding','levelUp','ytUcj','processTouch','INOUTQUAD','_forcedBattleSys','ColorExpGauge1','BottomHelp','addEventListener','_destroyCanvas','SLASH','_stored_powerDownColor','sparamRate1','Game_Action_updateLastTarget','isSceneMap','AnimationPoint','drawGauge','_coreEasing','_inputString','setGuard','gxaKM','displayX','updatePointAnimations','framesPerChar','TGR','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','SParamVocab7','Game_Screen_initialize','Game_Picture_initBasic','htGlI','mapId','CommandRect','join','ColorExpGauge2','_repositioned','itemBackColor1','【%1】\x0a','MvAnimationRate','value','_digitGroupingEx','VisuMZ_3_EventChainReact','dNoGC','helpAreaTop','note','RepositionActors','process_VisuMZ_CoreEngine_ControllerButtons','eventsXyNt','DrawIcons','mute','cursorLeft','openness','Window_Selectable_drawBackgroundRect','defaultInputMode','isTriggered','LKboi','ScaleX','smooth','setLastPluginCommandInterpreter','updateCoreEasing','anglePlus','pictureButtons','doesNameContainBannedWords','FUNC','Spriteset_Base_updatePosition','measureTextWidth','playTestF6','SceneManager_exit','ApplyEasing','_onKeyPress','SxBdE','SVqNe','FTB','tNrky','processCursorHomeEndTrigger','Scene_Map_updateScene','F24','filter','Y:\x20%1','destroyCoreEngineMarkedBitmaps','updateWaitMode','processAlwaysEscape','targetObjects','createPointAnimationSprite','ShiftT_Toggle','isNextScene','ActorRect','Gold','changeClass','OUgsH','Input_setupEventHandlers','background','goldWindowRect','clearStencil','updateOrigin','VOLUME_DOWN','parameters','ExportStrFromAllMaps','numberShowButton','Bitmap_gradientFillRect','_paramPlus','VOLUME_MUTE','Scene_SingleLoadTransition','setAnglePlusData','targetScaleX','successRate','DETACH_PICTURE_CONTAINER','vertical','drawCurrencyValue','WIN_OEM_WSCTRL','DigitGroupingStandardText','Sprite_AnimationMV_updatePosition','ayiVS','param','windowRect','IconParam1','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','CLOSE_PAREN','makeTargetSprites','platform','WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function','ceil','Game_Temp_initialize','useDigitGrouping','_eventId','cqhrL','end','Scene_Map_createSpriteset','OutlineColorDmg','transform','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','catchUnknownError','target','Sprite_Picture_loadBitmap','arePageButtonsEnabled','EncounterRateMinimum','setup','VKPKy','OQamP','OffBarOpacity','setActorHome','F16','destroy','OutlineColor','trim','calcEasing','repeat','Game_Map_setup','strokeRect','Input_clear','boxHeight','removeOnceParallelInterpreter','ACCEPT','consumeItem','_stored_tpGaugeColor2','makeCoreEngineCommandList','switchModes','Window_Base_destroyContents','isEnemy','KJPaR','mlcPA','Armor-%1-%2','keyCode','ExtractStrFromMap','TextPopupShow','MsUhd','DOLLAR','Scene_Base_terminateAnimationClearBugFix','EndingID','Scene_Shop_create','concat','isDying','DrawItemBackgroundJS','updateMain','_lastPluginCommandInterpreter','PGDN','CategoryBgType','runCombinedScrollingTextAsCode','mainAreaTopSideButtonLayout','_internalTextures','src','_movementDuration','buttonAssistWindowSideRect','OUTBOUNCE','NZLqV','ModernControls','drawActorLevel','Name','aYXwa','_commandWindow','FDR','updateOpacity','Scene_Boot_startNormalGame','itemHitImprovedAccuracy','application/json','status','SwitchRandomizeOne','ceExx','UfxhQ','IconParam6','loadIconBitmap','2701932PHIPHu','SwitchActorText','jsQuickFunc','Game_Event_isCollidedWithEvents','vtTJW','RPGMAKER_VERSION','isSpecialCode','maxScrollX','catchNormalError','LPOos','ItemBgType','Game_Picture_move','create','WIN_OEM_FJ_JISHO','HAOjV','EBamP','ExtDisplayedParams','BTestItems','clear','DEF','HopOB','<%1\x20%2:[\x20]','cursorRight','NewGameCommonEventAll','OUTELASTIC','IWcDl','Window_Selectable_itemRect','updateBackOpacity','jxaHa','targetX','OUTSINE','Higic','LizUb','_onLoad','backspace','_pictureCoordinatesWindow','_pagedownButton','XParamVocab3','quit','initRotation','setTargetAnchor','ONE_MINUS_SRC_ALPHA','ConvertNumberToString','Bitmap_drawTextOutline','lpJam','ryLFH','AgQpH','expGaugeColor2','createCommandWindow','xparamRate','Input_update','command122','BACK_QUOTE','resetTextColor','IconXParam7','_inputSpecialKeyCode','_realScale','IconSParam7','〘Show\x20Text〙\x0a','createPointAnimationTargets','erasePicture','gainItem','getParameter','TwApc','dimColor1','_screenY','attackSkillId','position','loadGameImagesCoreEngine','VxwTS','skillTypeWindowRect','setupButtonImage','SlotBgType','CTRL','setWindowPadding','_digitGrouping','initVisuMZCoreEngine','right','RYwKH','MVVlr','SHIFT','CONVERT','SLEEP','paramBase','Settings','picture','ParseItemNotetags','redraw','Window','MAXMP','Game_Map_setDisplayPos','TmTLk','_showDevTools','WIN_OEM_JUMP','getControllerInputButtonMatch','deathColor','Window_NameInput_refresh','8rRSGOb','_smooth','VIEWPORT','isClosing','BgFilename2','apply','_muteSound','42JLtPTa','EQUAL','_targetOffsetY','adjustSprite','_pictureName','STB','Scene_Map_initialize','list','MTGzw','ImgLoad','isMaxLevel','XZQkO','UfRRS','Unnamed','_pageupButton','pressed','item','calcCoreEasing','_currentMap','exportAllMapStrings','ATTN','AdjustAngle','maxLevel','refreshWithTextCodeSupport','drawNewParam','fBdgT','UDrnM','currentExp','ColorCTGauge1','PixelateImageRendering','hUkDz','OPEN_CURLY_BRACKET','Game_BattlerBase_refresh','_text','createCancelButton','enableDigitGrouping','QwertyLayout','Origin','rRbMu','_rate','%2%1%3','resize','》Comment《\x0a%1\x0a','_forcedTroopView','IconParam2','EnableMasking','ESC','KeyboardInput','STENCIL_TEST','showPicture','_actorWindow','slice','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','BTestAddedQuantity','framebuffer','cos','XParamVocab0','drawRightArrow','buttonY','isCollidedWithEvents','PLAY','number','SPsQL','helpAreaTopSideButtonLayout','numberWindowRect','removeAllFauxAnimations','Scene_Map_updateMainMultiply','yJjOt','button','Game_Picture_show','onInputBannedWords','bTAmL','MenuBg','_CoreEngineSettings','show','ntYqG','820232duKPCL','moveMenuButtonSideButtonLayout','repositionEnemiesByResolution','itemPadding','154398bhaksF','iJkWb','INOUTBACK','setupNewGame','VEEpJ','buttonAssistWindowButtonRect','_textQueue','efZQr','_previousClass','filters','removeFauxAnimation','nJHEB','WIN_OEM_BACKTAB','4980408jHEyLJ','updateMotion','ndyJo','Rate','tASXI','TextFmt','MINUS','Scene_Map_shouldAutosave','command357','buttonAssistSwitch','lWPnc','ColorMPGauge2','isMVAnimation','Window_NameInput_initialize','Bitmap_measureTextWidth','onLoad','UFZHZ','Bitmap_fillRect','FadeSpeed','Window_NameInput_cursorUp','BQhTB','TAB','tilesetFlags','_width','endAnimation','drawGoldItemStyle','Bitmap_clearRect','vert','ButtonAssist','Scene_Item_create','outbounce','isInputting','XParamVocab8','pointX','Weapon-%1-%2','IDs','iGZcc','battlebacks1','isBottomHelpMode','COLON','buttonAreaHeight','_createInternalTextures','battleSystem','_timeDuration','KhXDP','_subject','ILBiK','_allTextHeight','Window_StatusBase_drawActorLevel','Rate1','drawCurrentParam','targetEvaRate','ColorTPGauge2','makeAutoBattleActions','Bitmap_resize','paramchangeTextColor','SkillMenu','_fauxAnimationSprites','isForFriend','YXwck','createTroopNote','ParamArrow','ebyIf','eHpZa','setupScrollBarBitmap','ExportStrFromAllTroops','buttonAssistCancel','_stored_ctGaugeColor1','TOQCz','buttonAssistKey%1','updateKeyText','buyWindowRect','determineSideButtonLayoutValid','_number','match','PZeyy','evaded','Game_Picture_scaleY','visible','DefaultStyle','MULTIPLY','maxBattleMembers','VariableJsBlock','isMaskingEnabled','PzLBa','paramRate','setBackgroundOpacity','Sprite_Animation_setViewport','UwxnV','isArrowPressed','skipBranch','HNXDd','isAnimationPlaying','Game_Party_consumeItem','TTweh','processHandling','LvExpGauge','〘Scrolling\x20Text〙\x0a','name','isActor','IconXParam2','initCoreEasing','innerWidth','textSizeEx','createBackground','SETTINGS','Game_Interpreter_command111','MapOnceParallel','setViewportCoreEngineFix','ColorSystem','gaugeRate','AJBvA','originalJS','Scene_Battle_update','dUUdS','MAX_SAFE_INTEGER','_startLoading','processCursorMoveModernControls','numActions','AutoStretch','_pointAnimationSprites','gainSilentTp','dummyWindowRect','children','updateText','533216LGQvuh','expRate','AudioChangeBgmPitch','adjustPictureAntiZoom','setAttack','kxfsM','_loadingState','alignBottom','drawCircle','itypeId','xXTau','etypeId','processKeyboardDigitChange','command355','VisuMZ_2_BattleSystemSTB','SystemSetBattleSystem','\x20Origin:\x20%1','ActorHPColor','CfVvR','Game_Character_processMoveCommand','wcfvD','Window_Base_createTextState','StartID','addCommand','Input_onKeyDown','targetY','processMoveCommand','_moveEasingType','currentClass','ColorGaugeBack','setBackgroundType','ParseEnemyNotetags','_viewportSize','SthNw','ZDLFI','Spriteset_Base_destroy','GoldFontSize','pan','NameMenu','_spriteset','clearRect','NUMPAD1','isEnabled','setEnemyAction','Scene_MenuBase_helpAreaTop','NUMPAD2','QUOTE','sparamFlat2','VisuMZ_1_OptionsCore','showFauxAnimations','initialLevel','SCALE_MODES','SEMICOLON','MinDuration','BLnLV','ParseTilesetNotetags','_balloonQueue','buttonAssistKey2','SParamVocab0','initialize','hit','addOnceParallelInterpreter','MRF','addAnimationSpriteToContainer','shift','AccuracyBoost','_cacheScaleX','integer','_makeFontNameText','hhOjM','CONTEXT_MENU','makeCommandList','BlurFilter','GroupDigits','loadWindowskin','F7key','BACKSPACE','mpCostColor','Window_EquipItem_isEnabled','paramName','substring','slotWindowRect','index','ColorPowerUp','fZAdT','makeActionList','sGibq','_phase','showPointAnimations','fhFzO','Window_Base_update','setupCoreEngine','createFauxAnimationSprite','Game_Interpreter_PluginCommand','pictures','TPB\x20WAIT','Spriteset_Base_update','OUTCIRC','ALWAYS','BaseTexture','isSmartEventCollisionOn','HELP','DigitGroupingLocale','PictureID','EibXV','cancelShowButton','aWPmp','targetContentsOpacity','SPACE','createButtonAssistWindow','lZYZO','INQUART','onlyfilename','ColorCrisis','INCIRC','SCROLLBAR','ItemPadding','Bitmap_drawText','FmaKf','HYPHEN_MINUS','IconXParam8','setColorTone','CustomParamNames','volume','scrollbar','drawActorExpGauge','makeFontBigger','textColor','toQXh','charAt','_updateFilterArea','_destroyInternalTextures','fillRect','_stored_mpGaugeColor2','skillTypes','image-rendering','SParamVocab4','VbfsB','RbpbB','hBOKi','_statusParamsWindow','Game_Picture_initRotation','Game_Interpreter_command105','bhcOo','enableDigitGroupingEx','yScrollLinkedOffset','paramWidth','CallHandlerJS','itemRect','drawBackgroundRect','X:\x20%1','MfBmM','OffBarColor','_stored_mpCostColor','fillStyle','INQUAD','active','MRG','overallHeight','recoverAll','itemEva','reserveNewGameCommonEvent','buttonAssistOffset5','bnzKU','refresh','ButtonHeight','setupFont','IconParam0','isFullDocumentTitle','VisuMZ_2_BattleSystemOTB','SystemSetFontSize','autoRemovalTiming','ItemRect','_isButtonHidden','aDSex','isSideButtonLayout','SplitEscape','xAgIL','Game_Map_scrollDown','eHriG','playBgs','QtVhx','setValue','paramMaxJS','processTouchModernControls','up2','cfOHk','Game_Actor_changeClass','Game_Picture_updateMove','xjXkX','ActorBgType','prototype','profileWindowRect','NumberRect','Padding','processCursorMove','log','ActorMPColor','setupCoreEasing','isMapScrollLinked','alphabetic','ParseStateNotetags','padZero','wtypeId','startShake','INOUTCIRC','VisuMZ_1_BattleCore','OTB','FSDrZ','playOnceParallelInterpreter','isWindowMaskingEnabled','_commandList','TitlePicButtons','SnapshotOpacity','CAPSLOCK','WVJOc','clearOnceParallelInterpreters','toUpperCase','hide','0.00','LevelUpFullMp','isMagical','fadeSpeed','_stored_deathColor','IconSParam5','clone','GET','add','EXECUTE','IconXParam5','blendFunc','Scene_Title','SParamVocab5','POXmB','bitmapWidth','ALshr','updateScene','NUMPAD9','_inputWindow','operation','dqjUd','updateEffekseer','playTestF7','_shakePower','IconSParam3','_dimmerSprite','qAdZg','ItemBackColor1','buttonAssistText2','backgroundBitmap','sparamPlusJS','getInputButtonString','cursorPageup','PERIOD','Scene_Boot_updateDocumentTitle','commandWindowRect','tab','gold','buttons','endAction','Opacity','Game_Event_start','touchUI','drawGameSubtitle','OptionsBgType','nzkDg','Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','stencilFunc','mpColor','refreshScrollBarBitmap','State-%1-%2','onKeyDown','_stored_hpGaugeColor2','hpkVD','xparam','SkillTypeRect','wOqaV','RepositionEnemies','setMute','F20','%1〘Choice\x20%2〙\x20%3%1','width','_coreEngineShakeStyle','ParamChange','isPointAnimationPlaying','_scene','DisplayedParams','atbActive','DimColor1','_downArrowSprite','VUHJC','setEvent','WASD','DisplayLockY','_opacity','HphCx','Scene_Options_create','Scene_Name_onInputOk','sparamFlatJS','getBattleSystem','WIN_OEM_AUTO','CNT','jsonToZip','Conditional\x20Branch\x20Script\x20Error','YLaBT','coreEngineRepositionEnemies','itemBackColor2','DDNMX','Pisct','wait','outlineColorGauge','outlineColor','Scene_Map_update','HtGqZ','_lastCommandSymbol','Speed','setFrame','SParamVocab6','popScene','levelUpRecovery','oIOTF','ICyVt','titleCommandWindow','textHeight','drawActorSimpleStatus','_movementWholeDuration','eUpYo','nhNxe','ColorDeath','alwaysDash','DataManager_setupNewGame','maxScrollbar','createEnemies','disable','DashToggleR','skUer','faceHeight','jnLrN','shake','lgWSZ','updatePictureCoordinates','rsPRq','setBattleSystem','nickname','helpWindowRect','DefaultMode','LiMPD','Game_Interpreter_updateWaitMode','PEBRh','qVqjd','sparamRate2','LBYii','playCursor','ColorMaxLvGauge2','advanced','categoryWindowRect','Symbol','and\x20add\x20it\x20onto\x20this\x20one.','isGamepadButtonPressed','aiOnD','F6key','Window_Selectable_processCursorMove','RmvhH','beuKT','IconParam3','toFixed','ATK','scrollX','Tilemap_addShadow','JQvws','createPointAnimationQueue','enemy','MapNameTextCode','UpdatePictureCoordinates','bqdrX','_anchor','sv_actors','vzZEM','applyEasingAnglePlus','EiWqF','TRAIT_PARAM','Input_shouldPreventDefault','MEV','isLoopVertical','_effectsContainer','IconXParam6','Icon','INELASTIC','VcZal','removeAnimation','pendingColor','dimColor2','NUM','_itemWindow','xdhGJ','changeAnglePlusData','Param','checkPassage','sfxlp','_pressed','XUXSb','Window_MapName_refresh','seVolume','cancel','ExtractStrFromList','_pauseSignSprite','Window_Selectable_cursorDown','offsetX','windowPadding','_backgroundSprite','bIOMB','NUMPAD8','flush','Bitmap_strokeRect','_windowskin','startMove','scaleSprite','bgsVolume','windowOpacity','img/%1/','_playTestFastMode','updatePictureAntiZoom','systemColor','CreateBattleSystemID','actor','Wait','measureText','mirror','max','rDsGa','_commonEventLayers','EXCLAMATION','RYMaH','imageSmoothingEnabled','applyEasing','_shouldPreventDefault','INBOUNCE','rgba(0,\x200,\x200,\x200.7)','StatusMenu','damageColor','beDnp','BannedWords','AONcX','fFkHy','paramRate2','CrisisRate','waiting','%1\x0a','randomJS','subtitle','XParamVocab9','isClosed','buttonAssistOffset1','crisisColor','animations','_mode','destroyed','setCommonEvent','CustomParamType','data/','IEbns','LwkWm','Control\x20Variables\x20Script\x20Error','_drawTextBody','DATABASE','NewGameBoot','Spriteset_Base_initialize','offOpacity','helpAreaHeight','checkSmartEventCollision','maXcr','BoxMargin','EugDq','FontSize','enabled','sYoBg','zRmTb','ENTER_SPECIAL','current','Window_TitleCommand_selectLast','Scene_MenuBase_createPageButtons','INEXPO','updateMove','BACK_SLASH','IconXParam9','JyqTo','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','CLEAR','_currentBgs','isBottomButtonMode','forceStencil','isOptionValid','overrideMimeType','CommandWidth','xparamFlatJS','paramY','_colorTone','_dummyWindow','_list','seek','_menuButton','GameEnd','CategoryRect','SELECT','SystemSetSideView','$dataMap','initCoreEngineScreenShake','wHqyG','DGBzV','createAnimationSprite','INOUTQUART','_targetY','NUMPAD4','uiAreaHeight','showDevTools','storeMapData','_margin','SkuYg','mytRI','learnings','JxAjs','type','_bgsBuffer','BattleSystem','SystemLoadAudio','nah','INOUTCUBIC','playTestShiftR','scale','encounterStep','setCoreEngineScreenShakeStyle','PERCENT','Scene_Equip_create','clearZoom','Window_Base_initialize','Sprite_Gauge_gaugeRate','qNpqW','AGI','_statusWindow','Input_updateGamepadState','KeyItemProtect','offColor','down','zdraV','scrollDown','WIN_OEM_FJ_ROYA','Actor-%1-%2','Game_Picture_x','DMPpP','addChild','uiAreaWidth','HgKGF','qDEeZ','AudioChangeBgsPan','updateAnchor','tpGaugeColor1','createTextPopupWindow','(\x5cd+)([%％])>','ColorManager_loadWindowskin','layoutSettings','F23','_targets','isOpening','open','getCustomBackgroundSettings','IconParam5','ShopMenu','jrFri','IconParam4','_targetScaleY','createDimmerSprite','updateScrollBarPosition','ColorMaxLvGauge1','clearCachedKeys','REPLACE','inputWindowRect','bBZvu','xparamFlat1','OUTQUINT','makeEncounterCount','Plus1','powerUpColor','onButtonImageLoad','contentsBack','ParamMax','render','addLoadListener','valueOutlineWidth','setSideView','_isWindow','OPEN_PAREN','anchor','parallaxes','STENCIL_BUFFER_BIT','CommandList','processKeyboardEnd','ymhZe','needsUpdate','CADhn','DECIMAL','command111','SystemLoadImages','updateScrollBars','ETB','key%1','GlIcQ','rJhuX','Center','Scene_Boot_onDatabaseLoaded','Scene_MenuBase_mainAreaTop','OUTQUAD','uHjEF','Game_Map_scrollUp','isSceneBattle','Duration','performEscape','_battlerName','cursorPagedown','rgba(0,\x200,\x200,\x201.0)','isOpenAndActive','Layer','buttonAssistText1','Window_NameInput_processTouch','test','VisuMZ_2_BattleSystemPTB','setLastGamepadUsed','checkCoreEngineDisplayCenter','sparamPlus2','context','Scene_MenuBase_createBackground','paramX','rHDbD','requestFauxAnimation','_slotWindow','JpGkj','Window_NameInput_cursorPageup','ZOOM','ctrlKey','expGaugeColor1','currentValue','setActorHomeRepositioned','tpColor','#%1','_clientArea','loadPicture','gameTitle','_lastGamepad','allTiles','mMSyH','win32','CLOSE_BRACKET','IconIndex','_shakeDuration','valueOutlineColor','Scene_Load','F11','Scene_MenuBase_createCancelButton','F12','CodeJS','isSideView','mOZGL','baseTextRect','toLowerCase','framesMin','SANlE','_animationQueue','filterArea','Basic','BlurStrength','buttonAssistKey3','iaUAK','BTestArmors','updateBgmParameters','PIPE','_battleField','CLSXA','changeTextColor','Scene_Unlisted','12363084HqRFut','dsQbG','Window_Selectable_cursorUp','destroyScrollBarBitmaps','BarOffset','updateRotation','F14','Scene_Skill_create','yJnxB','LFiGS','process_VisuMZ_CoreEngine_CustomParameters','getButtonAssistLocation','buttonAssistText4','vertJS','process_VisuMZ_CoreEngine_jsQuickFunctions','hpGaugeColor2','Scene_Battle_createCancelButton','paramBaseAboveLevel99','Total','ZYAJX','Cpjan','SellBgType','mhp','_centerElementCoreEngine','_encounterCount','createFauxAnimation','ScreenResolution','JkYXo','gaugeLineHeight','isNwjs','onInputOk','battlebacks2','OUTBACK','_coreEasingType','WIN_OEM_PA1','loadSystemImages','_logWindow','blockWidth','_stored_tpCostColor','PRINTSCREEN','_troopId','scaleY','command105','EnableNameInput','MWCVk','jhPQO','move','_goldWindow','updateDuration','Key%1','paramFlat','showIncompleteTilesetError','Sprite_Picture_updateOrigin','printError','MkBJM','INOUTQUINT','sqrt','moEwE','Game_Actor_levelUp','AnimationMirrorOffset','clearForcedGameTroopSettingsCoreEngine','Scene_Battle_createSpritesetFix','updateClose','inBattle','Sprite_Gauge_currentValue','bgmVolume','_sideButtonLayout','_mirror','1418570zbwALX','fillText','createKeyJS','_pollGamepads','contents','TILDE','normalColor','LATIN1','Plus','ShowButtons','reserveCommonEvent','setMoveEasingType','InputRect','mainAreaBottom','_cacheScaleY','Sprite_AnimationMV_processTimingData','addQueue','system','animationId','loadSystem','mQTUZ','EjFxQ','round','maxVisibleItems','INBACK','Window_Base_drawCharacter','isEventTest','EVA','QoL','Scene_Battle_createSpriteset_detach','parse','ShiftR_Toggle','EnableJS','fromCharCode','qnPsv','TextJS','InputBgType','select','hpColor','CUBce','JKxvS','targetPosition','EscapeAlways','_originalViewport','wHbBl','allowShiftScrolling','origin','CEV','_cancelButton','subjectHitRate','(\x5cd+)>','MDR','cLrvI','fshuh','_stored_gaugeBackColor','RepositionEnemies130','en-US','PositionJS','viewport','remove','scrollbarHeight','_targetX','characters','members','_upArrowSprite','_origin','adjustBoxSize','ProfileRect','PreserveNumbers','JPBsg','_baseTexture','ParamName','_targetScaleX','split','ctGaugeColor1','IconSParam6','navCO','OPEN_BRACKET','Spriteset_Base_isAnimationPlaying','createFauxAnimationQueue','WIN_ICO_HELP','dTyEh','setHandler','Game_Map_scrollRight','CbFCm','mainAreaHeight','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','CIRCUMFLEX','drawIcon','_windowLayer','playTestShiftT','retrieveFauxAnimation','iconWidth','onXhrError','innerHeight','buttonAssistOffset3','isItemStyle','onNameOk','MenuLayout','repositionCancelButtonSideButtonLayout','KEEP','pLsAo','isScrollBarVisible','areButtonsHidden','Scene_Map_createMenuButton','AudioChangeBgsPitch','nIkna','isHandled','ItemMenu','onClick','sparamPlus','updateFauxAnimations','paramFlatBonus','_cache','StatusEquipRect','mainAreaTop','addChildToBack','processEscape','Graphics_defaultStretchMode','PHA','bodyColor','_centerElement','wAfaJ','_stored_powerUpColor','Game_Interpreter_command355','usableSkills','centerCameraCheckData','CustomParamAbb','_changingClass','xparamPlus','pages','onerror','openURL','batch','EXR','RCJMg','ZiXUi','font','replace','INOUTELASTIC','stretch','_isPlaytest','OBFzG','sparamRate','YVGRx','Finish','centerSprite','IsrXH','RRlnW','_maxDigits','isGamepadAxisMoved','isPlaying','TitleCommandList','CommandBgType','WIN_OEM_FJ_MASSHOU','IjBaS','lineHeight','onload','get','meVolume','YqsGp','createScrollBarSprites','Game_Map_scrollLeft','_displayY','buttonAssistText5','SParamVocab9','_targetAnchor','parseForcedGameTroopSettingsCoreEngine','TextManager_param','useDigitGroupingEx','_editWindow','STRUCT','drawText','_fauxAnimationQueue','format','MDF','itemLineRect','currentLevelExp','activate','_index','BattleManager_checkSubstitute','contentsOpacity','PHKQG','(\x5cd+\x5c.?\x5cd+)>','connected','dACSI','RegExp','setupBattleTestItems','setAction','Spriteset_Battle_createEnemies','initBasic','LineHeight','_addShadow','turn','createCustomParameter','Game_Action_itemHit','statusEquipWindowRect','startAutoNewGame','ColorHPGauge2','maxGold','charCode','escape','canEquip','uwatO','iHjBb','GYXUV','pixelated','nw.gui','initMembers','xparamPlus1','Script\x20Call\x20Error','updateDocumentTitle','QIXwy','bitmapHeight','mNdDj','WIN_OEM_FJ_TOUROKU','rowSpacing','axes','DigitGroupingExText','tileHeight','_tilemap','buttonAssistOk','OnLoadJS','responseText','ExportString','DTB','_bgmBuffer','VariableEvalReference','_onKeyDown','KeySHIFT','Scene_TitleTransition','AudioChangeBgsVolume','statusWindowRect','_listWindow','BattleManager_processEscape','vqlYn','horzJS','Game_Action_setAttack','title','maxItems','ShowDevTools','TEKVX','ARRAYEVAL','gradientFillRect','map','pksZa','PAUSE','_drawTextShadow','Window_StatusBase_drawActorSimpleStatus','displayY','mainCommandWidth','Sprite_destroy','paramRate1','kdplL','Bitmap_drawCircle','XParamVocab2','rqnuJ','createJsQuickFunction','updatePosition','Sprite_Battler_startMove','reservePlayTestNewGameCommonEvent','scrollUp','SideButtons','KSeGj','requestPointAnimation','updatePositionCoreEngineShakeRand','_helpWindow','IconXParam3','WwnET','dnWRn','processSoundTimings','FzaLP','zBuUX','_screenX','fillAll','onDatabaseLoaded','gaugeBackColor','ijVtF','xparamRateJS','targetBackOpacity','centerY','makeInputButtonString','ZELat','Enemy','events','hpGaugeColor1','wujRV','PictureFilename','oVFJV','isLoopHorizontal','_mp','itemWindowRect','deactivate','GoldRect','DimColor2','SvEBs','_height','setSideButtonLayout','bgm','DocumentTitleFmt','playBgm','SkillTypeBgType','_stored_expGaugeColor2','_backSprite1','isGameActive','close','mpGaugeColor2','_url','NoTileShadows','AudioChangeBgmPan','VFdOu','TJLeG','updateScrollBarVisibility','drawActorClass','offsetY','gainGold','1.3.0','_backgroundFilter','writeFile','Game_Picture_scaleX','BgFilename1','dashToggle','ARRAYSTR','drawTextTopAligned','JSON','mpGaugeColor1','([\x5c+\x5c-]\x5cd+)>','CustomParam','jjrXv','\x0a\x0a\x0a\x0a\x0a','KWMia','process_VisuMZ_CoreEngine_RegExp','AnWnc','lastAnimationSprite','updateShadow','isPlaytest','addWindow','MAT','scrollLeft','MAX_GL_TEXTURES','isFauxAnimationPlaying','getBackgroundOpacity','DetachBattlePictureContainer','ExportAllTroopText','clamp','_scrollBarVert','NKWrf','Enemy-%1-%2','params','isCursorMovable','processTimingData','_displayX','TextStr','EditRect','Pixelated','ControllerButtons','yDyVr','ParseActorNotetags','registerCommand','processKeyboardHandling','DetachMapPictureContainer','center','maxLvGaugeColor2','ShowJS','isPressed','ZrTqr','Enable','initRotationCoreEngine','tBurx','This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!','backOpacity','getLastUsedGamepadType','titles2','targetScaleY','CommonEventID','buttonAssistText3','dlaPT','BTB','updateMainMultiply','Window_NameInput_cursorDown','QRgxY','StatusBgType','xScrollLinkedOffset','PositionX','angle','renderNoMask','removePointAnimation','EquipMenu','removeAnimationFromContainer','inbounce','process_VisuMZ_CoreEngine_Functions','_stored_crisisColor','Scene_Menu_create','drawGameVersion','scrollRight','floor','processPointAnimationRequests','endBattlerActions','ScreenShake','deselect','ForceNoPlayTest','ImprovedAccuracySystem','sin','nYVMc','isUseModernControls','updateBgsParameters','NUMPAD3','Linear','DIVIDE','ColorMPCost','Scene_GameEnd_createBackground','DOUBLE_QUOTE','SParamVocab2','XyyVd','getCoreEngineScreenShakeStyle','SideView','ShowActorLevel','IconParam7','bEzcw','asin','kbcHt','paramMax','isAnimationOffsetXMirrored','_storedMapText','version','mainAreaHeightSideButtonLayout','BKSP','PKamB','operand','terms','IconSParam1','_mapNameWindow','SystemSetWindowPadding','Scene_Map_updateMain','WIN_OEM_PA3','_stored_mpGaugeColor1','HRG','_hp','MCR','centerX','terminate','PageChange','keyboard','SwitchRandomizeRange','Bitmap_blt','INOUTSINE','maxCols','Game_Actor_paramBase','SParamVocab8','removeChild','EnableNumberInput','setSkill'];_0x4931=function(){return _0x4c51cf;};return _0x4931();}Window_PictureCoordinates[_0x163f4f(0x5b0)]=Object['create'](Window_Base['prototype']),Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x2d2)]=Window_PictureCoordinates,Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x52c)]=function(){const _0x1e409a=_0x163f4f;this['_lastOrigin']='nah',this[_0x1e409a(0x9cf)]=_0x1e409a(0x6fe),this[_0x1e409a(0x2a9)]=_0x1e409a(0x6fe);const _0xe740ce=this[_0x1e409a(0x358)]();Window_Base[_0x1e409a(0x5b0)][_0x1e409a(0x52c)][_0x1e409a(0x17d)](this,_0xe740ce),this['setBackgroundType'](0x2);},Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x358)]=function(){const _0x1d68c6=_0x163f4f;let _0x345a5c=0x0,_0x2b0b0f=Graphics['height']-this['lineHeight'](),_0x4f8b3b=Graphics[_0x1d68c6(0x60a)],_0x24aab0=this[_0x1d68c6(0x877)]();return new Rectangle(_0x345a5c,_0x2b0b0f,_0x4f8b3b,_0x24aab0);},Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x2e7)]=function(){const _0x133a54=_0x163f4f;this[_0x133a54(0x2c1)]=0x0;},Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x189558=_0x163f4f;Window_Base[_0x189558(0x5b0)][_0x189558(0x168)][_0x189558(0x17d)](this),this[_0x189558(0x2b6)]();},Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x2b6)]=function(){if(!this['needsUpdate']())return;this['refresh']();},Window_PictureCoordinates[_0x163f4f(0x5b0)][_0x163f4f(0x746)]=function(){const _0x5ac2cb=_0x163f4f,_0x1488ff=$gameTemp[_0x5ac2cb(0x26e)],_0x106f9f=$gameScreen['picture'](_0x1488ff);if(_0x106f9f)return this[_0x5ac2cb(0x20f)]!==_0x106f9f[_0x5ac2cb(0x81c)]||this[_0x5ac2cb(0x9cf)]!==_0x106f9f['_x']||this[_0x5ac2cb(0x2a9)]!==_0x106f9f['_y'];else{if(_0x5ac2cb(0x9a9)===_0x5ac2cb(0x7a0)){if(_0x12da6d)throw _0xdeb47d;else _0x146758&&_0x50c241(_0x5ac2cb(0x254)[_0x5ac2cb(0x889)](_0x12f97b));}else return![];}},Window_PictureCoordinates['prototype'][_0x163f4f(0x595)]=function(){const _0x29d3b1=_0x163f4f;this[_0x29d3b1(0x7df)]['clear']();const _0xb70472=$gameTemp['_pictureCoordinatesMode'],_0x5e8691=$gameScreen[_0x29d3b1(0x404)](_0xb70472);if(!_0x5e8691)return;this[_0x29d3b1(0x20f)]=_0x5e8691[_0x29d3b1(0x81c)],this[_0x29d3b1(0x9cf)]=_0x5e8691['_x'],this['_lastY']=_0x5e8691['_y'];const _0x362532=ColorManager[_0x29d3b1(0x30a)]();this[_0x29d3b1(0x7df)][_0x29d3b1(0x575)](0x0,0x0,this[_0x29d3b1(0x4da)],this[_0x29d3b1(0x839)],_0x362532);const _0x5922a3=_0x29d3b1(0x501)[_0x29d3b1(0x889)](_0x5e8691[_0x29d3b1(0x81c)]===0x0?_0x29d3b1(0x21d):_0x29d3b1(0x750)),_0x5121fe=_0x29d3b1(0x587)[_0x29d3b1(0x889)](_0x5e8691['_x']),_0xc68c8d=_0x29d3b1(0x334)['format'](_0x5e8691['_y']),_0x3f681b='%1:\x20Exit\x20'[_0x29d3b1(0x889)](TextManager['getInputButtonString'](_0x29d3b1(0x684)));let _0x166805=Math['floor'](this[_0x29d3b1(0x4da)]/0x4);this[_0x29d3b1(0x887)](_0x5922a3,_0x166805*0x0,0x0,_0x166805),this[_0x29d3b1(0x887)](_0x5121fe,_0x166805*0x1,0x0,_0x166805,_0x29d3b1(0x944)),this[_0x29d3b1(0x887)](_0xc68c8d,_0x166805*0x2,0x0,_0x166805,_0x29d3b1(0x944));const _0x135902=this[_0x29d3b1(0x4db)](_0x3f681b)[_0x29d3b1(0x60a)],_0x4063ef=this[_0x29d3b1(0x4da)]-_0x135902;this['drawTextEx'](_0x3f681b,_0x4063ef,0x0,_0x135902);};function Window_TextPopup(){const _0x20fff6=_0x163f4f;this[_0x20fff6(0x52c)](...arguments);}Window_TextPopup[_0x163f4f(0x5b0)]=Object[_0x163f4f(0x3bb)](Window_Base[_0x163f4f(0x5b0)]),Window_TextPopup[_0x163f4f(0x5b0)]['constructor']=Window_TextPopup,Window_TextPopup[_0x163f4f(0x4dd)]={'framesPerChar':VisuMZ[_0x163f4f(0x28e)]['Settings']['Window']['DurationPerChat']??1.5,'framesMin':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x407)][_0x163f4f(0x526)]??0x5a,'framesMax':VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x403)][_0x163f4f(0x407)][_0x163f4f(0x23d)]??0x12c},Window_TextPopup[_0x163f4f(0x5b0)]['initialize']=function(){const _0x2673f9=_0x163f4f,_0x214540=new Rectangle(0x0,0x0,0x1,0x1);Window_Base[_0x2673f9(0x5b0)][_0x2673f9(0x52c)][_0x2673f9(0x17d)](this,_0x214540),this[_0x2673f9(0x319)]=0x0,this[_0x2673f9(0x438)]='',this[_0x2673f9(0x46d)]=[],this[_0x2673f9(0x49f)]=0x0;},Window_TextPopup['prototype']['isAutoColorAffected']=function(){return!![];},Window_TextPopup[_0x163f4f(0x5b0)][_0x163f4f(0x7eb)]=function(_0x2fadff){const _0x3ac848=_0x163f4f;if(this[_0x3ac848(0x46d)][this['_textQueue'][_0x3ac848(0xf7)]-0x1]===_0x2fadff)return;this[_0x3ac848(0x46d)][_0x3ac848(0x9ca)](_0x2fadff),SceneManager[_0x3ac848(0x60e)][_0x3ac848(0x716)](this);},Window_TextPopup[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x578ac1=_0x163f4f;Window_Base[_0x578ac1(0x5b0)]['update'][_0x578ac1(0x17d)](this),this[_0x578ac1(0x4f0)](),this[_0x578ac1(0x7c7)]();},Window_TextPopup[_0x163f4f(0x5b0)][_0x163f4f(0x4f0)]=function(){const _0x1e7131=_0x163f4f;if(this[_0x1e7131(0x438)]!=='')return;if(this['_textQueue'][_0x1e7131(0xf7)]<=0x0)return;if(!this[_0x1e7131(0x6b4)]())return;this[_0x1e7131(0x438)]=this['_textQueue']['shift']();const _0x944c7d=Window_TextPopup[_0x1e7131(0x4dd)],_0x3d2a76=Math[_0x1e7131(0x35f)](this['_text'][_0x1e7131(0xf7)]*_0x944c7d[_0x1e7131(0x2fe)]);this[_0x1e7131(0x49f)]=_0x3d2a76[_0x1e7131(0x933)](_0x944c7d[_0x1e7131(0x788)],_0x944c7d['framesMax']);const _0x5acebb=this[_0x1e7131(0x4db)](this[_0x1e7131(0x438)]);let _0x4b5db9=_0x5acebb[_0x1e7131(0x60a)]+this[_0x1e7131(0x466)]()*0x2;_0x4b5db9+=$gameSystem[_0x1e7131(0x689)]()*0x2;let _0x14c277=Math['max'](_0x5acebb[_0x1e7131(0x107)],this[_0x1e7131(0x877)]());_0x14c277+=$gameSystem[_0x1e7131(0x689)]()*0x2;const _0x556065=Math[_0x1e7131(0x7f1)]((Graphics[_0x1e7131(0x60a)]-_0x4b5db9)/0x2),_0x26564c=Math[_0x1e7131(0x7f1)]((Graphics[_0x1e7131(0x107)]-_0x14c277)/0x2),_0x40cabf=new Rectangle(_0x556065,_0x26564c,_0x4b5db9,_0x14c277);this['move'](_0x40cabf['x'],_0x40cabf['y'],_0x40cabf['width'],_0x40cabf[_0x1e7131(0x107)]),this[_0x1e7131(0x271)](),this[_0x1e7131(0x595)](),this[_0x1e7131(0x724)](),SceneManager['_scene']['addChild'](this);},Window_TextPopup[_0x163f4f(0x5b0)][_0x163f4f(0x595)]=function(){const _0x551f30=_0x163f4f,_0x21a7a5=this[_0x551f30(0x786)]();this[_0x551f30(0x7df)]['clear'](),this[_0x551f30(0x243)](this['_text'],_0x21a7a5['x'],_0x21a7a5['y'],_0x21a7a5[_0x551f30(0x60a)]);},Window_TextPopup[_0x163f4f(0x5b0)]['updateDuration']=function(){const _0x30a81b=_0x163f4f;if(this['isOpening']()||this[_0x30a81b(0x413)]())return;if(this[_0x30a81b(0x49f)]<=0x0)return;this[_0x30a81b(0x49f)]--,this['_timeDuration']<=0x0&&(this[_0x30a81b(0x90c)](),this['_text']='');},VisuMZ[_0x163f4f(0x8cb)]=function(_0x3f3e09){const _0x279e3c=_0x163f4f;if(Utils[_0x279e3c(0x6dc)]('test')){if(_0x279e3c(0x709)===_0x279e3c(0x810))this['isAnimationOffsetXMirrored']()?this[_0x279e3c(0x4e0)](_0x50a7e0):_0x56cf0f['CoreEngine']['Sprite_Animation_setViewport'][_0x279e3c(0x17d)](this,_0x52d7d9);else{var _0x5eb9c3=require(_0x279e3c(0x8aa))['Window'][_0x279e3c(0x879)]();SceneManager[_0x279e3c(0x6f3)]();if(_0x3f3e09)setTimeout(_0x5eb9c3[_0x279e3c(0x9d8)][_0x279e3c(0x295)](_0x5eb9c3),0x190);}}},VisuMZ[_0x163f4f(0x32a)]=function(_0xf7c1b5,_0xcb4a19){const _0x437ab4=_0x163f4f;_0xcb4a19=_0xcb4a19[_0x437ab4(0x5ca)]();var _0x27a937=1.70158,_0xb1589a=0.7;switch(_0xcb4a19){case _0x437ab4(0x1c4):return _0xf7c1b5;case'INSINE':return-0x1*Math[_0x437ab4(0x44e)](_0xf7c1b5*(Math['PI']/0x2))+0x1;case _0x437ab4(0x3cd):return Math[_0x437ab4(0x96d)](_0xf7c1b5*(Math['PI']/0x2));case _0x437ab4(0x998):return-0.5*(Math[_0x437ab4(0x44e)](Math['PI']*_0xf7c1b5)-0x1);case _0x437ab4(0x58c):return _0xf7c1b5*_0xf7c1b5;case _0x437ab4(0x753):return _0xf7c1b5*(0x2-_0xf7c1b5);case _0x437ab4(0x2eb):return _0xf7c1b5<0.5?0x2*_0xf7c1b5*_0xf7c1b5:-0x1+(0x4-0x2*_0xf7c1b5)*_0xf7c1b5;case'INCUBIC':return _0xf7c1b5*_0xf7c1b5*_0xf7c1b5;case'OUTCUBIC':var _0x2466fa=_0xf7c1b5-0x1;return _0x2466fa*_0x2466fa*_0x2466fa+0x1;case _0x437ab4(0x6ff):return _0xf7c1b5<0.5?0x4*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5:(_0xf7c1b5-0x1)*(0x2*_0xf7c1b5-0x2)*(0x2*_0xf7c1b5-0x2)+0x1;case _0x437ab4(0x560):return _0xf7c1b5*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5;case'OUTQUART':var _0x2466fa=_0xf7c1b5-0x1;return 0x1-_0x2466fa*_0x2466fa*_0x2466fa*_0x2466fa;case _0x437ab4(0x6ef):var _0x2466fa=_0xf7c1b5-0x1;return _0xf7c1b5<0.5?0x8*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5:0x1-0x8*_0x2466fa*_0x2466fa*_0x2466fa*_0x2466fa;case'INQUINT':return _0xf7c1b5*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5;case _0x437ab4(0x733):var _0x2466fa=_0xf7c1b5-0x1;return 0x1+_0x2466fa*_0x2466fa*_0x2466fa*_0x2466fa*_0x2466fa;case _0x437ab4(0x7ce):var _0x2466fa=_0xf7c1b5-0x1;return _0xf7c1b5<0.5?0x10*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5*_0xf7c1b5:0x1+0x10*_0x2466fa*_0x2466fa*_0x2466fa*_0x2466fa*_0x2466fa;case _0x437ab4(0x6d2):if(_0xf7c1b5===0x0){if(_0x437ab4(0x7c3)==='dPltW')_0x4d1e2d[_0x437ab4(0x28e)][_0x437ab4(0x3a6)][_0x437ab4(0x17d)](this);else return 0x0;}return Math['pow'](0x2,0xa*(_0xf7c1b5-0x1));case'OUTEXPO':if(_0xf7c1b5===0x1)return 0x1;return-Math[_0x437ab4(0x25a)](0x2,-0xa*_0xf7c1b5)+0x1;case'INOUTEXPO':if(_0xf7c1b5===0x0||_0xf7c1b5===0x1)return _0xf7c1b5;var _0x544d65=_0xf7c1b5*0x2,_0x43ba81=_0x544d65-0x1;if(_0x544d65<0x1)return 0.5*Math[_0x437ab4(0x25a)](0x2,0xa*_0x43ba81);return 0.5*(-Math[_0x437ab4(0x25a)](0x2,-0xa*_0x43ba81)+0x2);case _0x437ab4(0x563):var _0x544d65=_0xf7c1b5/0x1;return-0x1*(Math[_0x437ab4(0x7cf)](0x1-_0x544d65*_0xf7c1b5)-0x1);case _0x437ab4(0x552):var _0x2466fa=_0xf7c1b5-0x1;return Math[_0x437ab4(0x7cf)](0x1-_0x2466fa*_0x2466fa);case _0x437ab4(0x5be):var _0x544d65=_0xf7c1b5*0x2,_0x43ba81=_0x544d65-0x2;if(_0x544d65<0x1)return-0.5*(Math[_0x437ab4(0x7cf)](0x1-_0x544d65*_0x544d65)-0x1);return 0.5*(Math[_0x437ab4(0x7cf)](0x1-_0x43ba81*_0x43ba81)+0x1);case _0x437ab4(0x7f3):return _0xf7c1b5*_0xf7c1b5*((_0x27a937+0x1)*_0xf7c1b5-_0x27a937);case _0x437ab4(0x7b7):var _0x544d65=_0xf7c1b5/0x1-0x1;return _0x544d65*_0x544d65*((_0x27a937+0x1)*_0x544d65+_0x27a937)+0x1;break;case _0x437ab4(0x469):var _0x544d65=_0xf7c1b5*0x2,_0x410d7d=_0x544d65-0x2,_0x69a4dd=_0x27a937*1.525;if(_0x544d65<0x1)return 0.5*_0x544d65*_0x544d65*((_0x69a4dd+0x1)*_0x544d65-_0x69a4dd);return 0.5*(_0x410d7d*_0x410d7d*((_0x69a4dd+0x1)*_0x410d7d+_0x69a4dd)+0x2);case _0x437ab4(0x674):if(_0xf7c1b5===0x0||_0xf7c1b5===0x1)return _0xf7c1b5;var _0x544d65=_0xf7c1b5/0x1,_0x43ba81=_0x544d65-0x1,_0x2089c1=0x1-_0xb1589a,_0x69a4dd=_0x2089c1/(0x2*Math['PI'])*Math['asin'](0x1);return-(Math[_0x437ab4(0x25a)](0x2,0xa*_0x43ba81)*Math['sin']((_0x43ba81-_0x69a4dd)*(0x2*Math['PI'])/_0x2089c1));case _0x437ab4(0x3c7):var _0x2089c1=0x1-_0xb1589a,_0x544d65=_0xf7c1b5*0x2;if(_0xf7c1b5===0x0||_0xf7c1b5===0x1){if(_0x437ab4(0x9ec)===_0x437ab4(0x9ec))return _0xf7c1b5;else this['_targetAnchor']=_0x438c18;}var _0x69a4dd=_0x2089c1/(0x2*Math['PI'])*Math[_0x437ab4(0x97e)](0x1);return Math[_0x437ab4(0x25a)](0x2,-0xa*_0x544d65)*Math[_0x437ab4(0x96d)]((_0x544d65-_0x69a4dd)*(0x2*Math['PI'])/_0x2089c1)+0x1;case _0x437ab4(0x866):var _0x2089c1=0x1-_0xb1589a;if(_0xf7c1b5===0x0||_0xf7c1b5===0x1)return _0xf7c1b5;var _0x544d65=_0xf7c1b5*0x2,_0x43ba81=_0x544d65-0x1,_0x69a4dd=_0x2089c1/(0x2*Math['PI'])*Math['asin'](0x1);if(_0x544d65<0x1)return-0.5*(Math['pow'](0x2,0xa*_0x43ba81)*Math[_0x437ab4(0x96d)]((_0x43ba81-_0x69a4dd)*(0x2*Math['PI'])/_0x2089c1));return Math[_0x437ab4(0x25a)](0x2,-0xa*_0x43ba81)*Math['sin']((_0x43ba81-_0x69a4dd)*(0x2*Math['PI'])/_0x2089c1)*0.5+0x1;case _0x437ab4(0x39d):var _0x544d65=_0xf7c1b5/0x1;if(_0x544d65<0x1/2.75)return'hnbeD'===_0x437ab4(0xa0f)?7.5625*_0x544d65*_0x544d65:(this[_0x437ab4(0x84c)]=this[_0x437ab4(0x84c)]||{},this['_cache'][_0x30964a]!==_0x56196f);else{if(_0x544d65<0x2/2.75){var _0x410d7d=_0x544d65-1.5/2.75;return 7.5625*_0x410d7d*_0x410d7d+0.75;}else{if(_0x544d65<2.5/2.75){var _0x410d7d=_0x544d65-2.25/2.75;return 7.5625*_0x410d7d*_0x410d7d+0.9375;}else{if('ZYAJX'!==_0x437ab4(0x7aa))_0x348155[_0x437ab4(0x217)]();else{var _0x410d7d=_0x544d65-2.625/2.75;return 7.5625*_0x410d7d*_0x410d7d+0.984375;}}}}case _0x437ab4(0x6a5):var _0x3c8b1b=0x1-VisuMZ['ApplyEasing'](0x1-_0xf7c1b5,_0x437ab4(0x492));return _0x3c8b1b;case _0x437ab4(0x258):if(_0xf7c1b5<0.5)var _0x3c8b1b=VisuMZ['ApplyEasing'](_0xf7c1b5*0x2,_0x437ab4(0x960))*0.5;else var _0x3c8b1b=VisuMZ[_0x437ab4(0x32a)](_0xf7c1b5*0x2-0x1,_0x437ab4(0x492))*0.5+0.5;return _0x3c8b1b;default:return _0xf7c1b5;}},VisuMZ['GetParamIcon']=function(_0x165f7a){const _0x4d77ce=_0x163f4f;_0x165f7a=String(_0x165f7a)[_0x4d77ce(0x5ca)]();const _0x31d381=VisuMZ[_0x4d77ce(0x28e)][_0x4d77ce(0x403)][_0x4d77ce(0x67d)];if(_0x165f7a===_0x4d77ce(0x9f7))return _0x31d381[_0x4d77ce(0x598)];if(_0x165f7a===_0x4d77ce(0x408))return _0x31d381['IconParam1'];if(_0x165f7a===_0x4d77ce(0x65f))return _0x31d381[_0x4d77ce(0x443)];if(_0x165f7a===_0x4d77ce(0x3c2))return _0x31d381['IconParam3'];if(_0x165f7a==='MAT')return _0x31d381[_0x4d77ce(0x729)];if(_0x165f7a===_0x4d77ce(0x88a))return _0x31d381[_0x4d77ce(0x726)];if(_0x165f7a===_0x4d77ce(0x70a))return _0x31d381[_0x4d77ce(0x3ad)];if(_0x165f7a==='LUK')return _0x31d381[_0x4d77ce(0x97c)];if(_0x165f7a===_0x4d77ce(0x1a0))return _0x31d381[_0x4d77ce(0x27e)];if(_0x165f7a===_0x4d77ce(0x7f6))return _0x31d381[_0x4d77ce(0x1c9)];if(_0x165f7a==='CRI')return _0x31d381[_0x4d77ce(0x4d8)];if(_0x165f7a===_0x4d77ce(0x80a))return _0x31d381[_0x4d77ce(0x8e6)];if(_0x165f7a===_0x4d77ce(0x66f))return _0x31d381['IconXParam4'];if(_0x165f7a===_0x4d77ce(0x52f))return _0x31d381[_0x4d77ce(0x5d6)];if(_0x165f7a===_0x4d77ce(0x61e))return _0x31d381[_0x4d77ce(0x672)];if(_0x165f7a===_0x4d77ce(0x98f))return _0x31d381[_0x4d77ce(0x3e5)];if(_0x165f7a===_0x4d77ce(0x58e))return _0x31d381[_0x4d77ce(0x569)];if(_0x165f7a===_0x4d77ce(0x13b))return _0x31d381[_0x4d77ce(0x6d5)];if(_0x165f7a===_0x4d77ce(0x2ff))return _0x31d381[_0x4d77ce(0x21f)];if(_0x165f7a===_0x4d77ce(0x28f))return _0x31d381[_0x4d77ce(0x989)];if(_0x165f7a===_0x4d77ce(0xa01))return _0x31d381[_0x4d77ce(0x121)];if(_0x165f7a===_0x4d77ce(0x852))return _0x31d381['IconSParam3'];if(_0x165f7a==='MCR')return _0x31d381['IconSParam4'];if(_0x165f7a===_0x4d77ce(0x234))return _0x31d381[_0x4d77ce(0x5d1)];if(_0x165f7a===_0x4d77ce(0x232))return _0x31d381[_0x4d77ce(0x826)];if(_0x165f7a===_0x4d77ce(0x80e))return _0x31d381[_0x4d77ce(0x3e8)];if(_0x165f7a===_0x4d77ce(0x3a4))return _0x31d381['IconSParam8'];if(_0x165f7a===_0x4d77ce(0x861))return _0x31d381['IconSParam9'];if(VisuMZ[_0x4d77ce(0x28e)][_0x4d77ce(0x27c)][_0x165f7a])return VisuMZ[_0x4d77ce(0x28e)]['CustomParamIcons'][_0x165f7a]||0x0;return 0x0;},VisuMZ[_0x163f4f(0x3d9)]=function(_0x705d4,_0x4976ec,_0x11d88c){const _0x46b2c8=_0x163f4f;if(_0x11d88c===undefined&&_0x705d4%0x1===0x0)return _0x705d4;if(_0x11d88c!==undefined&&[_0x46b2c8(0x9f7),_0x46b2c8(0x408),'ATK',_0x46b2c8(0x3c2),_0x46b2c8(0x92c),_0x46b2c8(0x88a),_0x46b2c8(0x70a),_0x46b2c8(0x18d)][_0x46b2c8(0x2b2)](String(_0x11d88c)['toUpperCase']()['trim']()))return _0x705d4;_0x4976ec=_0x4976ec||0x0;if(VisuMZ[_0x46b2c8(0x28e)][_0x46b2c8(0x85a)][_0x11d88c])return VisuMZ[_0x46b2c8(0x28e)]['CustomParamType'][_0x11d88c]===_0x46b2c8(0x534)?_0x705d4:String((_0x705d4*0x64)[_0x46b2c8(0x65e)](_0x4976ec))+'%';return String((_0x705d4*0x64)[_0x46b2c8(0x65e)](_0x4976ec))+'%';},VisuMZ[_0x163f4f(0x53a)]=function(_0x1d3292){const _0x180aa8=_0x163f4f;_0x1d3292=String(_0x1d3292);if(!_0x1d3292)return _0x1d3292;if(typeof _0x1d3292!=='string')return _0x1d3292;const _0x1c9fe6=VisuMZ[_0x180aa8(0x28e)][_0x180aa8(0x403)]['QoL'][_0x180aa8(0x557)]||_0x180aa8(0x813),_0x1a23b1={'maximumFractionDigits':0x6};_0x1d3292=_0x1d3292[_0x180aa8(0x865)](/\[(.*?)\]/g,(_0x20a8fd,_0x7f40e1)=>{const _0x1ca1d5=_0x180aa8;if(_0x1ca1d5(0x3fe)!=='rYIPU')return VisuMZ['PreserveNumbers'](_0x7f40e1,'[',']');else this[_0x1ca1d5(0x2ec)]=0x0;}),_0x1d3292=_0x1d3292['replace'](/<(.*?)>/g,(_0x1ff0ef,_0x502cf4)=>{const _0x2346f8=_0x180aa8;if(_0x2346f8(0x167)!=='bqDQs')return VisuMZ[_0x2346f8(0x81f)](_0x502cf4,'<','>');else this[_0x2346f8(0x339)]([_0x4ddfee],_0x1efd16,_0x25ed2f,_0x1ed44a,_0x255c60),_0x324bc3+=_0x5b39ad;}),_0x1d3292=_0x1d3292[_0x180aa8(0x865)](/\{\{(.*?)\}\}/g,(_0x5ac627,_0x469cdb)=>{const _0x10782c=_0x180aa8;if(_0x10782c(0x4c8)===_0x10782c(0x4c8))return VisuMZ[_0x10782c(0x81f)](_0x469cdb,'','');else this['moveCancelButtonSideButtonLayout']();}),_0x1d3292=_0x1d3292[_0x180aa8(0x865)](/(\d+\.?\d*)/g,(_0x7ef871,_0x483dc2)=>{const _0x482ec7=_0x180aa8;if('OWvxw'!==_0x482ec7(0x9e3)){const _0xca93e0=_0xa51c8d['buttons'];for(let _0x2d3e33=0x0;_0x2d3e33<_0xca93e0[_0x482ec7(0xf7)];_0x2d3e33++){if(_0xca93e0[_0x2d3e33]['pressed'])return!![];}return![];}else{let _0x5b91c3=_0x483dc2;if(_0x5b91c3[0x0]==='0')return _0x5b91c3;if(_0x5b91c3[_0x5b91c3['length']-0x1]==='.'){if(_0x482ec7(0x9c1)===_0x482ec7(0x644))this[_0x482ec7(0x8a0)]();else return Number(_0x5b91c3)[_0x482ec7(0xef)](_0x1c9fe6,_0x1a23b1)+'.';}else return _0x5b91c3[_0x5b91c3['length']-0x1]===','?Number(_0x5b91c3)[_0x482ec7(0xef)](_0x1c9fe6,_0x1a23b1)+',':Number(_0x5b91c3)[_0x482ec7(0xef)](_0x1c9fe6,_0x1a23b1);}});let _0x19a0ba=0x3;while(_0x19a0ba--){_0x180aa8(0x624)!==_0x180aa8(0x236)?_0x1d3292=VisuMZ[_0x180aa8(0xa10)](_0x1d3292):_0x3d46ab=_0x3d735b['GroupDigits'](_0x4ba355);}return _0x1d3292;},VisuMZ[_0x163f4f(0x81f)]=function(_0xc169ed,_0x4ff184,_0x18481b){const _0x2cf9f3=_0x163f4f;return _0xc169ed=_0xc169ed['replace'](/(\d)/gi,(_0x3c8be0,_0x33cfa0)=>'PRESERVCONVERSION(%1)'['format'](Number(_0x33cfa0))),_0x2cf9f3(0x43f)[_0x2cf9f3(0x889)](_0xc169ed,_0x4ff184,_0x18481b);},VisuMZ['RevertPreserveNumbers']=function(_0x45af45){const _0x16df80=_0x163f4f;return _0x45af45=_0x45af45[_0x16df80(0x865)](/PRESERVCONVERSION\((\d+)\)/gi,(_0x534250,_0x49f97b)=>Number(parseInt(_0x49f97b))),_0x45af45;},VisuMZ[_0x163f4f(0x85f)]=function(_0xc82c97){const _0x1073bf=_0x163f4f;SoundManager[_0x1073bf(0x2aa)]();if(!Utils[_0x1073bf(0x7b4)]()){if(_0x1073bf(0x57a)===_0x1073bf(0x57a)){const _0x24849c=window['open'](_0xc82c97,_0x1073bf(0x2a1));}else{var _0x2c469a=_0x4d8bd5(_0x478cc5['$1'])/0x64;_0xba8715+=_0x2c469a;}}else{const _0x31b794=process[_0x1073bf(0x35d)]=='darwin'?'open':process[_0x1073bf(0x35d)]==_0x1073bf(0x77a)?_0x1073bf(0x21c):_0x1073bf(0xa12);require(_0x1073bf(0x1e6))['exec'](_0x31b794+'\x20'+_0xc82c97);}},VisuMZ[_0x163f4f(0x7dd)]=function(_0x271014,_0x33fc7b){const _0x47aa4a=_0x163f4f;if(!_0x271014)return'';const _0xed2fa3=_0x271014['baseId']||_0x271014['id'];let _0x289c26='';_0x271014['initialLevel']!==undefined&&_0x271014[_0x47aa4a(0x648)]!==undefined&&(_0x289c26=_0x47aa4a(0x713)['format'](_0xed2fa3,_0x33fc7b));if(_0x271014[_0x47aa4a(0x248)]!==undefined&&_0x271014[_0x47aa4a(0x6f8)]!==undefined){if('iagrv'==='icibd')return _0x139ca8[_0x47aa4a(0x3a9)]&&_0x46e953[_0x47aa4a(0x9e2)]['includes']('['+_0x1fd126+']');else _0x289c26='Class-%1-%2'['format'](_0xed2fa3,_0x33fc7b);}_0x271014[_0x47aa4a(0x26b)]!==undefined&&_0x271014['requiredWtypeId1']!==undefined&&(_0x289c26=_0x47aa4a(0x133)[_0x47aa4a(0x889)](_0xed2fa3,_0x33fc7b));if(_0x271014['itypeId']!==undefined&&_0x271014['consumable']!==undefined){if(_0x47aa4a(0x8fb)!==_0x47aa4a(0x8fb))return this[_0x47aa4a(0x60e)]&&this['_scene']instanceof _0x518dfa;else _0x289c26=_0x47aa4a(0x2b3)[_0x47aa4a(0x889)](_0xed2fa3,_0x33fc7b);}if(_0x271014[_0x47aa4a(0x5bc)]!==undefined&&_0x271014[_0x47aa4a(0x4fc)]===0x1){if(_0x47aa4a(0x1a4)!==_0x47aa4a(0x1a4)){const _0x9f8cdf=_0x1f63a3[_0x47aa4a(0x30d)](_0x53a79a);_0x154ac9['setValue'](_0x282f20,!_0x9f8cdf);}else _0x289c26=_0x47aa4a(0x496)[_0x47aa4a(0x889)](_0xed2fa3,_0x33fc7b);}return _0x271014['atypeId']!==undefined&&_0x271014['etypeId']>0x1&&(_0x289c26=_0x47aa4a(0x387)[_0x47aa4a(0x889)](_0xed2fa3,_0x33fc7b)),_0x271014['dropItems']!==undefined&&_0x271014[_0x47aa4a(0x1bb)]!==undefined&&(_0x289c26=_0x47aa4a(0x936)[_0x47aa4a(0x889)](_0xed2fa3,_0x33fc7b)),_0x271014[_0x47aa4a(0x59c)]!==undefined&&_0x271014['maxTurns']!==undefined&&(_0x289c26=_0x47aa4a(0x5ff)[_0x47aa4a(0x889)](_0xed2fa3,_0x33fc7b)),_0x289c26;},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x740)]=function(){return this['_anchor'];},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x303)]=Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x899)],Game_Picture[_0x163f4f(0x5b0)]['initBasic']=function(){const _0x258957=_0x163f4f;VisuMZ[_0x258957(0x28e)][_0x258957(0x303)][_0x258957(0x17d)](this),this[_0x258957(0x668)]={'x':0x0,'y':0x0},this['_targetAnchor']={'x':0x0,'y':0x0};},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x5ad)]=Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x6d3)],Game_Picture['prototype'][_0x163f4f(0x6d3)]=function(){const _0x3902f7=_0x163f4f;this[_0x3902f7(0x71b)]();const _0x58b177=this[_0x3902f7(0x9bf)];VisuMZ['CoreEngine'][_0x3902f7(0x5ad)][_0x3902f7(0x17d)](this);if(_0x58b177>0x0&&this[_0x3902f7(0x9bf)]<=0x0){if(_0x3902f7(0x5dc)!==_0x3902f7(0x5dc)){if(_0x3fb43d[_0x3902f7(0x7d6)]())return;_0x35aea6[_0x3902f7(0x2d3)](_0x5b1c71,_0xae3731);const _0x246032=_0x4ef420[_0x3902f7(0x10c)][_0x3902f7(0x5ca)]()[_0x3902f7(0x376)](),_0x105f4f=_0x3ad7c9[_0x3902f7(0x28e)][_0x3902f7(0x698)](_0x246032);_0x194ff8[_0x3902f7(0x647)](_0x105f4f);}else this['_x']=this[_0x3902f7(0x818)],this['_y']=this[_0x3902f7(0x6f0)],this[_0x3902f7(0x10f)]=this[_0x3902f7(0x823)],this[_0x3902f7(0x123)]=this[_0x3902f7(0x72a)],this[_0x3902f7(0x617)]=this[_0x3902f7(0x122)],this['_anchor']&&(this['_anchor']['x']=this[_0x3902f7(0x881)]['x'],this[_0x3902f7(0x668)]['y']=this[_0x3902f7(0x881)]['y']);}},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x45c)]=Game_Picture['prototype'][_0x163f4f(0x461)],Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x461)]=function(_0x2dd771,_0x4779ce,_0x438213,_0x16eddc,_0x551e38,_0x3c33ac,_0x5e4376,_0xf5ef14){const _0x19e691=_0x163f4f;VisuMZ[_0x19e691(0x28e)][_0x19e691(0x45c)][_0x19e691(0x17d)](this,_0x2dd771,_0x4779ce,_0x438213,_0x16eddc,_0x551e38,_0x3c33ac,_0x5e4376,_0xf5ef14),this['setAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x4779ce]||{'x':0x0,'y':0x0});},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x3ba)]=Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x7c5)],Game_Picture['prototype'][_0x163f4f(0x7c5)]=function(_0x29480b,_0x50dd68,_0x1361cd,_0x452326,_0x3c5c2e,_0x17eb86,_0x3dec3b,_0xe20296,_0x1de4d9){const _0x805e99=_0x163f4f;VisuMZ[_0x805e99(0x28e)][_0x805e99(0x3ba)][_0x805e99(0x17d)](this,_0x29480b,_0x50dd68,_0x1361cd,_0x452326,_0x3c5c2e,_0x17eb86,_0x3dec3b,_0xe20296,_0x1de4d9),this[_0x805e99(0x3d7)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x29480b]||{'x':0x0,'y':0x0});},Game_Picture[_0x163f4f(0x5b0)]['updateAnchor']=function(){const _0x5b70b0=_0x163f4f;this[_0x5b70b0(0x9bf)]>0x0&&('kzHBG'==='LTDJO'?_0x14026b['playBuzzer']():(this[_0x5b70b0(0x668)]['x']=this[_0x5b70b0(0x6a3)](this[_0x5b70b0(0x668)]['x'],this[_0x5b70b0(0x881)]['x']),this[_0x5b70b0(0x668)]['y']=this[_0x5b70b0(0x6a3)](this['_anchor']['y'],this[_0x5b70b0(0x881)]['y'])));},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x11e)]=function(_0x16f712){const _0x436415=_0x163f4f;this[_0x436415(0x668)]=_0x16f712,this[_0x436415(0x881)]=JsonEx[_0x436415(0x10b)](this[_0x436415(0x668)]);},Game_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x3d7)]=function(_0x50d8cf){const _0x59d476=_0x163f4f;this[_0x59d476(0x881)]=_0x50d8cf;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x7cb)]=Sprite_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x344)],Sprite_Picture[_0x163f4f(0x5b0)][_0x163f4f(0x344)]=function(){const _0x5d3614=_0x163f4f,_0x4a5fa5=this[_0x5d3614(0x404)]();!_0x4a5fa5[_0x5d3614(0x740)]()?VisuMZ[_0x5d3614(0x28e)]['Sprite_Picture_updateOrigin'][_0x5d3614(0x17d)](this):(this[_0x5d3614(0x740)]['x']=_0x4a5fa5['anchor']()['x'],this[_0x5d3614(0x740)]['y']=_0x4a5fa5[_0x5d3614(0x740)]()['y']);},Game_Action['prototype'][_0x163f4f(0x51c)]=function(_0x2630aa){const _0xb4f082=_0x163f4f;if(_0x2630aa){const _0x36f47f=_0x2630aa['skillId'];if(_0x36f47f===0x1&&this[_0xb4f082(0x1cc)]()[_0xb4f082(0x3f1)]()!==0x1){if(_0xb4f082(0x86b)!==_0xb4f082(0x86b)){this[_0xb4f082(0x2a5)]();const _0x467dd6=_0x1dfd5c['titleCommandWindow'][_0xb4f082(0x341)],_0x116d72=this[_0xb4f082(0x5f0)]();this['_commandWindow']=new _0x33fcf2(_0x116d72),this[_0xb4f082(0x3a3)][_0xb4f082(0x50f)](_0x467dd6);const _0x52fc35=this[_0xb4f082(0x5f0)]();this[_0xb4f082(0x3a3)]['move'](_0x52fc35['x'],_0x52fc35['y'],_0x52fc35['width'],_0x52fc35['height']),this['_commandWindow'][_0xb4f082(0x271)](),this[_0xb4f082(0x3a3)][_0xb4f082(0x595)](),this[_0xb4f082(0x3a3)][_0xb4f082(0x289)](),this[_0xb4f082(0x92b)](this[_0xb4f082(0x3a3)]);}else this['setAttack']();}else _0x36f47f===0x2&&this[_0xb4f082(0x1cc)]()['guardSkillId']()!==0x2?this['setGuard']():this[_0xb4f082(0x99e)](_0x36f47f);}else{if(_0xb4f082(0x9fe)==='dujOG')this[_0xb4f082(0x3c1)]();else throw _0x5bdff3;}},Game_Actor['prototype'][_0x163f4f(0x858)]=function(){const _0x3675a2=_0x163f4f;return this[_0x3675a2(0x155)]()[_0x3675a2(0x333)](_0x5885cc=>this[_0x3675a2(0x242)](_0x5885cc)&&this[_0x3675a2(0x577)]()[_0x3675a2(0x2b2)](_0x5885cc[_0x3675a2(0x26b)]));},Window_Base[_0x163f4f(0x5b0)][_0x163f4f(0x72b)]=function(){const _0x248914=_0x163f4f;this[_0x248914(0x5e6)]=new Sprite(),this[_0x248914(0x5e6)][_0x248914(0x2dc)]=new Bitmap(0x0,0x0),this[_0x248914(0x5e6)]['x']=0x0,this[_0x248914(0x84f)](this[_0x248914(0x5e6)]);},Window_Base['prototype'][_0x163f4f(0x9dd)]=function(){const _0x2c2909=_0x163f4f;if(this[_0x2c2909(0x5e6)]){if(_0x2c2909(0x3c3)!==_0x2c2909(0x3c3))return _0x285606[_0x2c2909(0x28e)][_0x2c2909(0x403)][_0x2c2909(0x142)][_0x2c2909(0x60c)]['call'](this,_0x2c67eb);else{const _0x3a5840=this[_0x2c2909(0x5e6)][_0x2c2909(0x2dc)],_0x2518ba=this[_0x2c2909(0x60a)],_0x49e1ce=this[_0x2c2909(0x107)],_0x4bd37e=this['padding'],_0x457f74=ColorManager[_0x2c2909(0x3ef)](),_0x5829d4=ColorManager[_0x2c2909(0x678)]();_0x3a5840['resize'](_0x2518ba,_0x49e1ce),_0x3a5840['gradientFillRect'](0x0,0x0,_0x2518ba,_0x4bd37e,_0x5829d4,_0x457f74,!![]),_0x3a5840[_0x2c2909(0x575)](0x0,_0x4bd37e,_0x2518ba,_0x49e1ce-_0x4bd37e*0x2,_0x457f74),_0x3a5840[_0x2c2909(0x8ce)](0x0,_0x49e1ce-_0x4bd37e,_0x2518ba,_0x4bd37e,_0x457f74,_0x5829d4,!![]),this['_dimmerSprite']['setFrame'](0x0,0x0,_0x2518ba,_0x49e1ce);}}},Game_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x4a9)]=function(){const _0x5dc9b0=_0x163f4f;for(let _0x15801b=0x0;_0x15801b<this[_0x5dc9b0(0x4ea)]();_0x15801b++){const _0x3715a2=this[_0x5dc9b0(0x546)]();let _0x309fa0=Number[_0x5dc9b0(0x9b8)];this[_0x5dc9b0(0x897)](_0x15801b,_0x3715a2[0x0]);for(const _0x3882e2 of _0x3715a2){const _0xd514a=_0x3882e2[_0x5dc9b0(0x13e)]();_0xd514a>_0x309fa0&&(_0x309fa0=_0xd514a,this[_0x5dc9b0(0x897)](_0x15801b,_0x3882e2));}}this['setActionState'](_0x5dc9b0(0x6af));},Window_BattleItem[_0x163f4f(0x5b0)]['isEnabled']=function(_0x26f2e1){const _0x5efc20=_0x163f4f;if(BattleManager['actor']()){if(_0x5efc20(0x57b)!==_0x5efc20(0x46b))return BattleManager[_0x5efc20(0x699)]()[_0x5efc20(0x242)](_0x26f2e1);else this[_0x5efc20(0x94d)]=_0x457e09['CoreEngine'][_0x5efc20(0x403)][_0x5efc20(0x407)][_0x5efc20(0x11c)];}else return Window_ItemList[_0x5efc20(0x5b0)][_0x5efc20(0x51b)][_0x5efc20(0x17d)](this,_0x26f2e1);},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x9be)]=Scene_Map['prototype'][_0x163f4f(0x208)],Scene_Map[_0x163f4f(0x5b0)][_0x163f4f(0x208)]=function(){const _0x33359f=_0x163f4f;VisuMZ[_0x33359f(0x28e)][_0x33359f(0x9be)][_0x33359f(0x17d)](this);const _0x1b4bec=this['_spriteset'][_0x33359f(0x9eb)];if(_0x1b4bec)this['addChild'](_0x1b4bec);},VisuMZ['CoreEngine'][_0x163f4f(0x7d4)]=Scene_Battle[_0x163f4f(0x5b0)][_0x163f4f(0x208)],Scene_Battle[_0x163f4f(0x5b0)]['createSpriteset']=function(){const _0x3f1036=_0x163f4f;VisuMZ['CoreEngine'][_0x3f1036(0x7d4)]['call'](this);const _0x50c62c=this['_spriteset'][_0x3f1036(0x9eb)];if(_0x50c62c)this[_0x3f1036(0x716)](_0x50c62c);},Sprite_Actor[_0x163f4f(0x5b0)][_0x163f4f(0x168)]=function(){const _0x14ee8f=_0x163f4f;Sprite_Battler[_0x14ee8f(0x5b0)][_0x14ee8f(0x168)]['call'](this),this[_0x14ee8f(0x929)]();if(this[_0x14ee8f(0x1a6)])this[_0x14ee8f(0x475)]();else this[_0x14ee8f(0x759)]!==''&&(this[_0x14ee8f(0x759)]='');},Window[_0x163f4f(0x5b0)]['_refreshArrows']=function(){const _0x43e32c=_0x163f4f,_0x4d3993=this[_0x43e32c(0x48b)],_0x3adaae=this[_0x43e32c(0x903)],_0x243f28=0x18,_0x1fb6ae=_0x243f28/0x2,_0x19f308=0x60+_0x243f28,_0x4381fb=0x0+_0x243f28;this[_0x43e32c(0x612)][_0x43e32c(0x2dc)]=this[_0x43e32c(0x68f)],this[_0x43e32c(0x612)][_0x43e32c(0x740)]['x']=0.5,this[_0x43e32c(0x612)]['anchor']['y']=0.5,this[_0x43e32c(0x612)][_0x43e32c(0x62d)](_0x19f308+_0x1fb6ae,_0x4381fb+_0x1fb6ae+_0x243f28,_0x243f28,_0x1fb6ae),this[_0x43e32c(0x612)][_0x43e32c(0x7c5)](Math[_0x43e32c(0x7f1)](_0x4d3993/0x2),Math['round'](_0x3adaae-_0x1fb6ae)),this['_upArrowSprite']['bitmap']=this[_0x43e32c(0x68f)],this[_0x43e32c(0x81b)][_0x43e32c(0x740)]['x']=0.5,this[_0x43e32c(0x81b)][_0x43e32c(0x740)]['y']=0.5,this[_0x43e32c(0x81b)][_0x43e32c(0x62d)](_0x19f308+_0x1fb6ae,_0x4381fb,_0x243f28,_0x1fb6ae),this[_0x43e32c(0x81b)]['move'](Math[_0x43e32c(0x7f1)](_0x4d3993/0x2),Math['round'](_0x1fb6ae));},Window['prototype']['_refreshPauseSign']=function(){const _0x594a2c=_0x163f4f,_0x3d2813=0x90,_0x43dd9e=0x60,_0x745af0=0x18;this[_0x594a2c(0x686)][_0x594a2c(0x2dc)]=this['_windowskin'],this[_0x594a2c(0x686)][_0x594a2c(0x740)]['x']=0.5,this['_pauseSignSprite'][_0x594a2c(0x740)]['y']=0x1,this['_pauseSignSprite'][_0x594a2c(0x7c5)](Math[_0x594a2c(0x7f1)](this[_0x594a2c(0x48b)]/0x2),this[_0x594a2c(0x903)]),this[_0x594a2c(0x686)][_0x594a2c(0x62d)](_0x3d2813,_0x43dd9e,_0x745af0,_0x745af0),this['_pauseSignSprite']['alpha']=0xff;},Window[_0x163f4f(0x5b0)][_0x163f4f(0x573)]=function(){const _0xb817a4=_0x163f4f,_0x2e76c3=this[_0xb817a4(0x774)][_0xb817a4(0x2d1)][_0xb817a4(0x415)](new Point(0x0,0x0)),_0x126141=this['_clientArea'][_0xb817a4(0x78b)];_0x126141['x']=_0x2e76c3['x']+this[_0xb817a4(0x809)]['x'],_0x126141['y']=_0x2e76c3['y']+this[_0xb817a4(0x809)]['y'],_0x126141[_0xb817a4(0x60a)]=Math[_0xb817a4(0x35f)](this[_0xb817a4(0x4da)]*this[_0xb817a4(0x701)]['x']),_0x126141[_0xb817a4(0x107)]=Math[_0xb817a4(0x35f)](this['innerHeight']*this[_0xb817a4(0x701)]['y']);},Window['prototype'][_0x163f4f(0x9d0)]=function(){const _0x479697=_0x163f4f,_0x19ebf=this['_margin'],_0x1feb66=Math[_0x479697(0x69d)](0x0,this[_0x479697(0x48b)]-_0x19ebf*0x2),_0x2639d9=Math[_0x479697(0x69d)](0x0,this[_0x479697(0x903)]-_0x19ebf*0x2),_0x580f11=this['_backSprite'],_0x2b590c=_0x580f11[_0x479697(0x4ef)][0x0];_0x580f11['bitmap']=this['_windowskin'],_0x580f11['setFrame'](0x0,0x0,0x60,0x60),_0x580f11[_0x479697(0x7c5)](_0x19ebf,_0x19ebf),_0x580f11[_0x479697(0x701)]['x']=_0x1feb66/0x60,_0x580f11[_0x479697(0x701)]['y']=_0x2639d9/0x60,_0x2b590c['bitmap']=this[_0x479697(0x68f)],_0x2b590c[_0x479697(0x62d)](0x0,0x60,0x60,0x60),_0x2b590c['move'](0x0,0x0,_0x1feb66,_0x2639d9),_0x2b590c[_0x479697(0x701)]['x']=0x1/_0x580f11['scale']['x'],_0x2b590c['scale']['y']=0x1/_0x580f11['scale']['y'],_0x580f11[_0x479697(0x56a)](this[_0x479697(0x6e1)]);},Game_Temp['prototype'][_0x163f4f(0x16e)]=function(){const _0x4b05d2=_0x163f4f;this[_0x4b05d2(0x78a)]=[],this['_fauxAnimationQueue']=[],this['_pointAnimationQueue']=[],this[_0x4b05d2(0x529)]=[];},VisuMZ[_0x163f4f(0x28e)]['Scene_Base_terminateAnimationClearBugFix']=Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x993)],Scene_Base[_0x163f4f(0x5b0)][_0x163f4f(0x993)]=function(){const _0x13299b=_0x163f4f;if($gameTemp)$gameTemp[_0x13299b(0x16e)]();VisuMZ[_0x13299b(0x28e)][_0x13299b(0x38d)]['call'](this);},Bitmap[_0x163f4f(0x5b0)]['measureTextWidthNoRounding']=function(_0x437c7f){const _0x3025b5=_0x163f4f,_0x44da42=this[_0x3025b5(0x765)];_0x44da42[_0x3025b5(0x211)](),_0x44da42[_0x3025b5(0x864)]=this[_0x3025b5(0x535)]();const _0x52518a=_0x44da42[_0x3025b5(0x69b)](_0x437c7f)[_0x3025b5(0x60a)];return _0x44da42[_0x3025b5(0x190)](),_0x52518a;},Window_Message[_0x163f4f(0x5b0)][_0x163f4f(0x156)]=function(_0x11c4e2){const _0x535d7c=_0x163f4f;return this[_0x535d7c(0x9ee)]()?this[_0x535d7c(0x7df)]['measureTextWidthNoRounding'](_0x11c4e2):Window_Base[_0x535d7c(0x5b0)]['textWidth'][_0x535d7c(0x17d)](this,_0x11c4e2);},Window_Message[_0x163f4f(0x5b0)][_0x163f4f(0x9ee)]=function(){const _0x4d8eef=_0x163f4f;return VisuMZ[_0x4d8eef(0x28e)][_0x4d8eef(0x403)][_0x4d8eef(0x7f7)]['FontWidthFix']??!![];},VisuMZ[_0x163f4f(0x28e)]['Game_Action_numRepeats']=Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x294)],Game_Action['prototype'][_0x163f4f(0x294)]=function(){const _0x3140f6=_0x163f4f;return this[_0x3140f6(0x427)]()?VisuMZ[_0x3140f6(0x28e)]['Game_Action_numRepeats'][_0x3140f6(0x17d)](this):0x0;},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x8c8)]=Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x4f5)],Game_Action[_0x163f4f(0x5b0)][_0x163f4f(0x4f5)]=function(){const _0x630c00=_0x163f4f;this[_0x630c00(0x1cc)]()&&this[_0x630c00(0x1cc)]()[_0x630c00(0x9f8)]()?_0x630c00(0x9ed)!==_0x630c00(0x9ed)?(_0x336312[_0x630c00(0x7d8)]=0x0,_0x2a9bcd[_0x630c00(0x692)]=0x0,_0x30ac39['meVolume']=0x0,_0x10c7d2['seVolume']=0x0):VisuMZ[_0x630c00(0x28e)][_0x630c00(0x8c8)][_0x630c00(0x17d)](this):'PKamB'!==_0x630c00(0x986)?(_0x2c358a['prototype']['update'][_0x630c00(0x17d)](this),this[_0x630c00(0x3a5)](),this[_0x630c00(0x2ea)]()):this['clear']();},Sprite_Name[_0x163f4f(0x5b0)][_0x163f4f(0x8b0)]=function(){return 0x24;},Sprite_Name['prototype'][_0x163f4f(0x406)]=function(){const _0x537990=_0x163f4f,_0x20948b=this[_0x537990(0x4d6)](),_0x260004=this[_0x537990(0x5db)](),_0x3fcd91=this[_0x537990(0x8b0)]();this[_0x537990(0x597)](),this[_0x537990(0x2dc)][_0x537990(0x3c1)](),this[_0x537990(0x2dc)]['drawTextTopAligned'](_0x20948b,0x4,0x0,_0x260004-0xa,_0x3fcd91,'left');},Bitmap[_0x163f4f(0x5b0)][_0x163f4f(0x91e)]=function(_0x54abed,_0x506f27,_0x2d6636,_0x5552d0,_0x2ac765,_0x3026d6){const _0x262c46=_0x163f4f,_0x1a640d=this[_0x262c46(0x765)],_0x26bf56=_0x1a640d[_0x262c46(0x23b)];_0x5552d0=_0x5552d0||0xffffffff;let _0x26d80a=_0x506f27,_0x3e8bd9=Math[_0x262c46(0x7f1)](_0x2d6636+0x18/0x2+this[_0x262c46(0x2a4)]*0.35);_0x3026d6==='center'&&(_0x26d80a+=_0x5552d0/0x2),_0x3026d6===_0x262c46(0x3fc)&&(_0x26d80a+=_0x5552d0),_0x1a640d[_0x262c46(0x211)](),_0x1a640d['font']=this[_0x262c46(0x535)](),_0x1a640d['textAlign']=_0x3026d6,_0x1a640d['textBaseline']=_0x262c46(0x5b9),_0x1a640d[_0x262c46(0x23b)]=0x1,this[_0x262c46(0x1e8)](_0x54abed,_0x26d80a,_0x3e8bd9,_0x5552d0),_0x1a640d[_0x262c46(0x23b)]=_0x26bf56,this[_0x262c46(0x6c0)](_0x54abed,_0x26d80a,_0x3e8bd9,_0x5552d0),_0x1a640d[_0x262c46(0x190)](),this[_0x262c46(0x821)][_0x262c46(0x168)]();},VisuMZ['CoreEngine'][_0x163f4f(0x88f)]=BattleManager[_0x163f4f(0x2d9)],BattleManager[_0x163f4f(0x2d9)]=function(_0x485288){const _0x1c8508=_0x163f4f;if(this['_action'][_0x1c8508(0x4ae)]())return![];return VisuMZ[_0x1c8508(0x28e)][_0x1c8508(0x88f)]['call'](this,_0x485288);},BattleManager['endAction']=function(){const _0x28ff78=_0x163f4f;if(this[_0x28ff78(0x4a1)])this[_0x28ff78(0x7bb)][_0x28ff78(0x5f4)](this[_0x28ff78(0x4a1)]);this[_0x28ff78(0x548)]=_0x28ff78(0x89c),this[_0x28ff78(0x4a1)]&&this[_0x28ff78(0x4a1)][_0x28ff78(0x4ea)]()===0x0&&(this[_0x28ff78(0x968)](this['_subject']),this[_0x28ff78(0x4a1)]=null);},Bitmap['prototype'][_0x163f4f(0x4e8)]=function(){const _0x374513=_0x163f4f;this[_0x374513(0x1c6)]=new Image(),this['_image'][_0x374513(0x878)]=this[_0x374513(0x3d0)][_0x374513(0x295)](this),this[_0x374513(0x1c6)]['onerror']=this['_onError'][_0x374513(0x295)](this),this[_0x374513(0x2f0)](),this[_0x374513(0x4f7)]=_0x374513(0x16b);if(Utils[_0x374513(0x135)]()){if('LNrZS'===_0x374513(0x6c7)){if(!_0x12e3cf['CoreEngine'][_0x374513(0x403)][_0x374513(0x7f7)][_0x374513(0xa14)])return;if(this[_0x374513(0x533)]===this[_0x374513(0x701)]['x']&&this[_0x374513(0x7e9)]===this[_0x374513(0x701)]['y'])return;this[_0x374513(0x4f4)](),this[_0x374513(0x533)]=this[_0x374513(0x701)]['x'],this['_cacheScaleY']=this['scale']['y'];}else this[_0x374513(0x9a5)]();}else this[_0x374513(0x1c6)][_0x374513(0x39a)]=this['_url'],![]&&this[_0x374513(0x1c6)][_0x374513(0x60a)]>0x0&&(this[_0x374513(0x1c6)][_0x374513(0x878)]=null,this[_0x374513(0x3d0)]());},Scene_Skill[_0x163f4f(0x5b0)]['onActorChange']=function(){const _0x2113df=_0x163f4f;Scene_MenuBase[_0x2113df(0x5b0)][_0x2113df(0x1f9)]['call'](this),this['refreshActor'](),this[_0x2113df(0x67a)][_0x2113df(0x8ff)](),this[_0x2113df(0x67a)][_0x2113df(0x96a)](),this[_0x2113df(0x206)][_0x2113df(0x88d)]();},Scene_Skill['prototype'][_0x163f4f(0x36c)]=function(){const _0x5bda4c=_0x163f4f;return this[_0x5bda4c(0x206)]&&this[_0x5bda4c(0x206)][_0x5bda4c(0x58d)];},Game_Map['prototype'][_0x163f4f(0x67e)]=function(_0x45e831,_0x48b11b,_0x1a3f47){const _0x4ebbec=_0x163f4f,_0x1349e0=this[_0x4ebbec(0x48a)](),_0x507e81=this[_0x4ebbec(0x778)](_0x45e831,_0x48b11b);for(const _0x57040e of _0x507e81){const _0x5d2883=_0x1349e0[_0x57040e];if(_0x5d2883===undefined||_0x5d2883===null){if($gameTemp['isPlaytest']()&&!DataManager[_0x4ebbec(0x7f5)]()){let _0x4ce113=_0x4ebbec(0x831)+'\x0a';_0x4ce113+='Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages'+'\x0a',_0x4ce113+=_0x4ebbec(0x656),this[_0x4ebbec(0x7ca)]()?(alert(_0x4ce113),SceneManager['exit']()):_0x4ebbec(0x625)===_0x4ebbec(0x131)?(!this[_0x4ebbec(0x309)]&&(this[_0x4ebbec(0x3f0)]+=_0x543fd1[_0x4ebbec(0x7f1)]((_0xdc949e['height']-0x270)/0x2),this[_0x4ebbec(0x3f0)]-=_0x363a38[_0x4ebbec(0x966)]((_0x47dd68[_0x4ebbec(0x107)]-_0x321e1f[_0x4ebbec(0x37c)])/0x2),_0x26ad3d[_0x4ebbec(0x784)]()?this[_0x4ebbec(0x8ec)]-=_0x16bddc[_0x4ebbec(0x966)]((_0x32b0de[_0x4ebbec(0x60a)]-_0x57d8cf[_0x4ebbec(0x2a2)])/0x2):this[_0x4ebbec(0x8ec)]+=_0x4fa6b9[_0x4ebbec(0x7f1)]((_0x5d67d7[_0x4ebbec(0x2a2)]-0x330)/0x2)),this['_repositioned']=!![]):(console[_0x4ebbec(0x5b5)](_0x4ce113),!$gameTemp[_0x4ebbec(0x40b)]&&($gameTemp[_0x4ebbec(0x40b)]=!![],SceneManager['showDevTools']()));}}if((_0x5d2883&0x10)!==0x0){if(_0x4ebbec(0x602)!==_0x4ebbec(0x602)){this[_0x4ebbec(0x1e0)]['remove'](_0x129648),this[_0x4ebbec(0x95f)](_0x589ce5);for(const _0x1661f3 of _0x3ad2e0[_0x4ebbec(0x338)]){_0x1661f3[_0x4ebbec(0x48c)]&&_0x1661f3['endAnimation']();}_0x40b9ea[_0x4ebbec(0x374)]();}else continue;}if((_0x5d2883&_0x1a3f47)===0x0)return!![];if((_0x5d2883&_0x1a3f47)===_0x1a3f47)return _0x4ebbec(0x605)!==_0x4ebbec(0x4b2)?![]:_0x3e1be6&&_0x3e52b0[_0x4ebbec(0x60e)]?_0x79f704[_0x4ebbec(0x60e)][_0x4ebbec(0x5c3)]():!![];}return![];},Game_Map[_0x163f4f(0x5b0)]['showIncompleteTilesetError']=function(){const _0x40a979=_0x163f4f;if(Imported[_0x40a979(0x30f)])return!![];if(Imported['VisuMZ_4_UniqueTileEffects'])return!![];return![];},Sprite_Animation[_0x163f4f(0x5b0)]['saveViewport']=function(_0x30a58e){const _0xfe79c2=_0x163f4f;!this[_0xfe79c2(0x806)]&&(this['_originalViewport']=_0x30a58e['gl'][_0xfe79c2(0x3ed)](_0x30a58e['gl'][_0xfe79c2(0x412)]));},VisuMZ[_0x163f4f(0x28e)][_0x163f4f(0x47b)]=Scene_Map[_0x163f4f(0x5b0)]['shouldAutosave'],Scene_Map[_0x163f4f(0x5b0)]['shouldAutosave']=function(){const _0x315b19=_0x163f4f,_0xe32114=SceneManager[_0x315b19(0x46f)][_0x315b19(0x4d6)];if([_0x315b19(0x5d8),_0x315b19(0x77f),_0x315b19(0x8c1),_0x315b19(0x34c)][_0x315b19(0x2b2)](_0xe32114)){if(_0x315b19(0x16a)!==_0x315b19(0x9c2))return![];else{if(_0x2db063[_0x315b19(0x28e)]['Settings']['Param'][_0x315b19(0x97b)]===![])return;if(this[_0x315b19(0x9ab)]())this[_0x315b19(0x56e)](_0x188052,_0x2c179e,_0x51f1f0);_0x361ca8[_0x315b19(0x28e)][_0x315b19(0x4a4)][_0x315b19(0x17d)](this,_0x18092d,_0x207a5d,_0x556fa8);}}return VisuMZ[_0x315b19(0x28e)]['Scene_Map_shouldAutosave'][_0x315b19(0x17d)](this);};