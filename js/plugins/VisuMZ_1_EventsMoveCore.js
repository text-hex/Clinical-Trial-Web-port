//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.55;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.55] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
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
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 * 
 * <Map Load Common Event: x>
 * <Map Load Common Events: x, x, x>
 * 
 * - Used for: Map Notetags
 * - When this map is loaded, run the specified Common Events once available.
 *   - Does NOT trigger if you transfer to a different part of the same map.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to reserve and run once ready.
 * 
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Circle: x>
 * <Activation Delta: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *   - If text codes are used, avoid text codes that use < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *   - You can use text codes with < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Label Hue Shift: +x>
 * <Label Hue Shift: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the hue of the event label by +x or -x every frame.
 *   - Keep in mind that since this is changing hue, this will appear to have
 *     no effect if you are using black and white labels.
 *   - Use labels with text codes that add color to them like '\C[4]text'
 * - This only works with the sprite version of event labels and does not work
 *   with the legacy version.
 * 
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Read
 * - Runs the page of a different event remotely.
 * - This will run the page of the target event on the CURRENT event.
 * - This means that any "This Event" commands will be applied to the event
 *   using this Plugin Command and NOT the target event that page data is being
 *   retrieved from.
 * - Think of it as the current event using the target called event as a
 *   Common Event ala how RPG Maker 2003 works (for those familiar with it).
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Popup Plugin Commands ===
 * 
 * ---
 * 
 * Event Popup: Player
 * - Makes a centered event popup on the player sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Follower
 * - Makes a centered event popup on target follower sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Follower Index:
 *   - Which follower index to play popup?
 *   - Index starts at 0.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second.
 *   - You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Event
 * - Makes a centered event popup on target event sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Event ID:
 *   - The ID of the event to play popup on.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Target Tile
 * - Makes a centered event popup on target tile.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Map Tile X:
 *   Map Tile Y:
 *   - The x/y coordinate of the map tile.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Popup Settings
 * 
 *   Fade Settings:
 * 
 *     Fade In Duration:
 *     - How many frames does it take to fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does it take to fade out?
 *     - 60 frames = 1 second.
 * 
 *   Offset Settings:
 * 
 *     Starting Offset X:
 *     - Offsets the starting x position.
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Starting Offset Y:
 *     - Offsets the starting y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *     Ending Offset X:
 *     - Offsets the ending x position. 
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Ending Offset Y:
 *     - Offsets the ending y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *   Scaling Settings:
 * 
 *     Starting Scale X:
 *     - What is the starting scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Starting Scale Y:
 *     - What is the starting scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale X:
 *     - What is the ending scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale Y:
 *     - What is the ending scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *   Angle Settings:
 * 
 *     Starting Offset Angle:
 *     - What is the starting angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *     Ending Offset Angle:
 *     - What is the ending angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *   Misc Settings:
 * 
 *     Arc Peak:
 *     - This is the height of the popup's trajectory arc in pixels.
 *     - Positive: up. Negative: down.
 *     - You may use code.
 * 
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
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
 * Version 1.55: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Event Popup: Player
 * *** Event Popup: Follower
 * *** Event Popup: Event
 * *** Event Popup: Target Tile
 * **** Makes a centered event popup on the player sprite, target follower
 *      sprite, target event sprite, or target tile.
 * **** All of these new Plugin Commands require VisuMZ_1_MessageCore and
 *      cannot be used in battle.
 * 
 * Version 1.54: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated to reduce confusion:
 * *** Call Event: Remote Read
 * **** This will run the page of the target event on the current event.
 * **** This means that any "This Event" commands will be applied to the event
 *      using this Plugin Command and NOT the target event that page data is
 *      being retrieved from.
 * **** Think of it as the current event using the target called event as a
 *      Common Event ala how RPG Maker 2003 works (for those familiar with it).
 * * Feature Update!
 * ** Renamed "Call Event: Remote Activation" to "Call Event: Remote Read" to
 *    reduce confusion.
 * * Feature Update!
 * ** <Activation Radius: x> notetag is now defined as <Activation Delta: x>
 * *** 'Radius' variant will still work and function as 'Delta' but will no
 *     longer be listed in the help file as 'Radius'
 * *** This is changed to avoid confusion with the new notetag.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by AndyL:
 * *** <Activation Circle: x>
 * **** A circle-shaped range with the event at the center.
 * **** 'x' represents the distance from the center.
 * 
 * Version 1.53: August 17, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** <Map Load Common Event: x>
 * ** <Map Load Common Events: x, x, x>
 * *** When this map is loaded, run the specified Common Events once available.
 * **** Does NOT trigger if you transfer to a different part of the same map.
 * 
 * Version 1.52: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated help file for <Label: text> notetags:
 * *** If text codes are used, avoid text codes that use < and > wrappers.
 * ** Updated help file for <Label> sandwich notetags:
 * *** You can use text codes with < and > wrappers.
 * * Feature Update!
 * ** Event labels now work properly with scaling sprites.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by Anon:
 * *** <Label Hue Shift: +x>
 * *** <Label Hue Shift: -x>
 * **** Changes the hue of the event label by +x or -x every frame.
 * **** Keep in mind that since this is changing hue, this will appear to have
 *      no effect if you are using black and white labels.
 * **** Use labels with text codes that add color to them like '\C[4]text'
 * **** This only works with the sprite version of event labels and does not
 *      work with the legacy version.
 * 
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
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
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Read
 * @desc Runs the page of a different event remotely. This will run
 * the page of the target event on the CURRENT event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupPlayer
 * @text Event Popup: Player
 * @desc Makes a centered event popup on the player sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "+\\LastGainObjQuantity\\LastGainObj"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupFollower
 * @text Event Popup: Follower
 * @desc Makes a centered event popup on target follower sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Which follower index to play popup?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[23]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupEvent
 * @text Event Popup: Event
 * @desc Makes a centered event popup on target event sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to play popup on.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "Line1\nLine2"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupTargetTile
 * @text Event Popup: Target Tile
 * @desc Makes a centered event popup on target tile.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg TileX:eval
 * @text Map Tile X
 * @desc The x coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.width() / 2
 *
 * @arg TileY:eval
 * @text Map Tile Y
 * @desc The y coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.height() / 2
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[87]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-24","endOffsetX:eval":"+0","endOffsetY:eval":"-24","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
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
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
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
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Popup Extra Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PopupExtra:
 *
 * @param Fade
 * @text Fade Settings
 *
 * @param fadeInDuration:eval
 * @text Fade In Duration
 * @parent Fade
 * @desc How many frames does it take to fade in?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param fadeOutDuration:eval
 * @text Fade Out Duration
 * @parent Fade
 * @desc How many frames does it take to fade out?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param Offset
 * @text Offset Settings
 *
 * @param startOffsetX:eval
 * @text Starting Offset X
 * @parent Offset
 * @desc Offsets the starting x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param startOffsetY:eval
 * @text Starting Offset Y
 * @parent Offset
 * @desc Offsets the starting y position. You may use code.
 * Negative: up. Positive: down.
 * @default -48
 *
 * @param endOffsetX:eval
 * @text Ending Offset X
 * @parent Offset
 * @desc Offsets the ending x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param endOffsetY:eval
 * @text Ending Offset Y
 * @parent Offset
 * @desc Offsets the ending y position. You may use code.
 * Negative: up. Positive: down.
 * @default -96
 *
 * @param Scale
 * @text Scaling Settings
 *
 * @param startScaleX:eval
 * @text Starting Scale X
 * @parent Scale
 * @desc What is the starting scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param startScaleY:eval
 * @text Starting Scale Y
 * @parent Scale
 * @desc What is the starting scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleX:eval
 * @text Ending Scale X
 * @parent Scale
 * @desc What is the ending scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleY:eval
 * @text Ending Scale Y
 * @parent Scale
 * @desc What is the ending scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param Angle
 * @text Angle Settings
 *
 * @param startAngle:eval
 * @text Starting Offset Angle
 * @parent Angle
 * @desc What is the starting angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 *
 * @param endAngle:eval
 * @text Ending Offset Angle
 * @parent Angle
 * @desc What is the ending angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 * 
 * @param Misc
 * @text Misc Settings
 * 
 * @param Arc:eval
 * @text Arc Peak
 * @parent Misc
 * @desc This is the height of the popup's trajectory arc
 * in pixels. Positive: up. Negative: down. Code allowed.
 * @default +0
 *
 */
//=============================================================================

function _0x32e4(_0x329233,_0x1f1260){const _0x18187d=_0x1818();return _0x32e4=function(_0x32e4d2,_0x1789b1){_0x32e4d2=_0x32e4d2-0xff;let _0xa6f731=_0x18187d[_0x32e4d2];return _0xa6f731;},_0x32e4(_0x329233,_0x1f1260);}const _0x533487=_0x32e4;(function(_0x144a69,_0x576f37){const _0x4062a5=_0x32e4,_0x17707a=_0x144a69();while(!![]){try{const _0x2607e7=parseInt(_0x4062a5(0x5dc))/0x1+parseInt(_0x4062a5(0x250))/0x2*(-parseInt(_0x4062a5(0x2de))/0x3)+-parseInt(_0x4062a5(0x5a5))/0x4+parseInt(_0x4062a5(0x2e1))/0x5*(parseInt(_0x4062a5(0x1a5))/0x6)+-parseInt(_0x4062a5(0x672))/0x7*(-parseInt(_0x4062a5(0x2c6))/0x8)+parseInt(_0x4062a5(0x138))/0x9+-parseInt(_0x4062a5(0x361))/0xa;if(_0x2607e7===_0x576f37)break;else _0x17707a['push'](_0x17707a['shift']());}catch(_0x334ab4){_0x17707a['push'](_0x17707a['shift']());}}}(_0x1818,0xa95d2));var label=_0x533487(0x163),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x533487(0x577)](function(_0x569254){const _0x164159=_0x533487;return _0x569254[_0x164159(0x6a6)]&&_0x569254[_0x164159(0xff)][_0x164159(0x1c6)]('['+label+']');})[0x0];VisuMZ[label][_0x533487(0x5eb)]=VisuMZ[label][_0x533487(0x5eb)]||{},VisuMZ[_0x533487(0x4d9)]=function(_0x1ca76e,_0x4286c1){const _0xcf1ccc=_0x533487;for(const _0x37585e in _0x4286c1){if(_0xcf1ccc(0x4c1)!=='XsHtz'){if(_0x1941b7<0x3e8)return;if(!this[_0xcf1ccc(0x5a7)])return;const _0x1b31c1=this[_0xcf1ccc(0x431)](_0x34f2c8);_0x1b31c1[_0xcf1ccc(0x5e1)](-0x1,-0x1),_0x1b31c1[_0xcf1ccc(0x105)](),this[_0xcf1ccc(0x5a7)][_0x499e6a-0x3e8]=null,this[_0xcf1ccc(0x304)]();}else{if(_0x37585e[_0xcf1ccc(0x579)](/(.*):(.*)/i)){if(_0xcf1ccc(0x6ce)!=='RbPNa')_0x54144a[_0xcf1ccc(0x117)]&&this[_0xcf1ccc(0x34f)](_0x5080e8,_0x297c0e['x']+0x2,_0x4bdf43['y']),_0x3d9c37['x']+=_0x164155[_0xcf1ccc(0x2e4)](this[_0xcf1ccc(0x58f)](),_0x4d32b6['iconWidth'])+0x4;else{const _0x518c5b=String(RegExp['$1']),_0x2f586f=String(RegExp['$2'])[_0xcf1ccc(0x651)]()[_0xcf1ccc(0x1ff)]();let _0x21e962,_0x2fef4,_0x3defc9;switch(_0x2f586f){case _0xcf1ccc(0x4af):_0x21e962=_0x4286c1[_0x37585e]!==''?Number(_0x4286c1[_0x37585e]):0x0;break;case _0xcf1ccc(0x4ab):_0x2fef4=_0x4286c1[_0x37585e]!==''?JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e]):[],_0x21e962=_0x2fef4[_0xcf1ccc(0x5c4)](_0x2b93ce=>Number(_0x2b93ce));break;case _0xcf1ccc(0x51f):_0x21e962=_0x4286c1[_0x37585e]!==''?eval(_0x4286c1[_0x37585e]):null;break;case _0xcf1ccc(0x109):_0x2fef4=_0x4286c1[_0x37585e]!==''?JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e]):[],_0x21e962=_0x2fef4['map'](_0x2533df=>eval(_0x2533df));break;case'JSON':_0x21e962=_0x4286c1[_0x37585e]!==''?JSON['parse'](_0x4286c1[_0x37585e]):'';break;case _0xcf1ccc(0x2a8):_0x2fef4=_0x4286c1[_0x37585e]!==''?JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e]):[],_0x21e962=_0x2fef4[_0xcf1ccc(0x5c4)](_0xaee75d=>JSON[_0xcf1ccc(0x469)](_0xaee75d));break;case _0xcf1ccc(0x15b):_0x21e962=_0x4286c1[_0x37585e]!==''?new Function(JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e])):new Function('return\x200');break;case _0xcf1ccc(0x269):_0x2fef4=_0x4286c1[_0x37585e]!==''?JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e]):[],_0x21e962=_0x2fef4[_0xcf1ccc(0x5c4)](_0x50addf=>new Function(JSON['parse'](_0x50addf)));break;case'STR':_0x21e962=_0x4286c1[_0x37585e]!==''?String(_0x4286c1[_0x37585e]):'';break;case _0xcf1ccc(0x391):_0x2fef4=_0x4286c1[_0x37585e]!==''?JSON['parse'](_0x4286c1[_0x37585e]):[],_0x21e962=_0x2fef4[_0xcf1ccc(0x5c4)](_0xa1bdb4=>String(_0xa1bdb4));break;case _0xcf1ccc(0x487):_0x3defc9=_0x4286c1[_0x37585e]!==''?JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e]):{},_0x1ca76e[_0x518c5b]={},VisuMZ[_0xcf1ccc(0x4d9)](_0x1ca76e[_0x518c5b],_0x3defc9);continue;case _0xcf1ccc(0x1aa):_0x2fef4=_0x4286c1[_0x37585e]!==''?JSON[_0xcf1ccc(0x469)](_0x4286c1[_0x37585e]):[],_0x21e962=_0x2fef4[_0xcf1ccc(0x5c4)](_0x47fd13=>VisuMZ['ConvertParams']({},JSON['parse'](_0x47fd13)));break;default:continue;}_0x1ca76e[_0x518c5b]=_0x21e962;}}}}return _0x1ca76e;},(_0x3396eb=>{const _0x2a1dd7=_0x533487,_0x13e148=_0x3396eb[_0x2a1dd7(0x519)];for(const _0x1269da of dependencies){if(_0x2a1dd7(0x2c3)!==_0x2a1dd7(0x2c3)){if([0x2,0x4,0x6,0x8][_0x2a1dd7(0x1c6)](_0x45e17f))return 0x2;if([0x1,0x3,0x7,0x9][_0x2a1dd7(0x1c6)](_0x435892))return 0x3;}else{if(!Imported[_0x1269da]){alert(_0x2a1dd7(0x4bd)[_0x2a1dd7(0x1b5)](_0x13e148,_0x1269da)),SceneManager['exit']();break;}}}const _0xc217fd=_0x3396eb[_0x2a1dd7(0xff)];if(_0xc217fd['match'](/\[Version[ ](.*?)\]/i)){const _0x19dba8=Number(RegExp['$1']);_0x19dba8!==VisuMZ[label][_0x2a1dd7(0x546)]&&(_0x2a1dd7(0x314)!==_0x2a1dd7(0x607)?(alert(_0x2a1dd7(0x66f)['format'](_0x13e148,_0x19dba8)),SceneManager[_0x2a1dd7(0x2b3)]()):this[_0x2a1dd7(0x39c)][_0x2a1dd7(0x3f1)]=_0x5a3e21(_0x4678de['$1']));}if(_0xc217fd[_0x2a1dd7(0x579)](/\[Tier[ ](\d+)\]/i)){const _0x2ff768=Number(RegExp['$1']);_0x2ff768<tier?(alert(_0x2a1dd7(0x3e1)[_0x2a1dd7(0x1b5)](_0x13e148,_0x2ff768,tier)),SceneManager[_0x2a1dd7(0x2b3)]()):tier=Math[_0x2a1dd7(0x381)](_0x2ff768,tier);}VisuMZ[_0x2a1dd7(0x4d9)](VisuMZ[label][_0x2a1dd7(0x5eb)],_0x3396eb[_0x2a1dd7(0x6cf)]);})(pluginData),VisuMZ[_0x533487(0x328)]=function(_0x1d0db1,_0x57d62c,_0x439bbf){switch(_0x439bbf){case'=':return _0x57d62c;break;case'+':return _0x1d0db1+_0x57d62c;break;case'-':return _0x1d0db1-_0x57d62c;break;case'*':return _0x1d0db1*_0x57d62c;break;case'/':return _0x1d0db1/_0x57d62c;break;case'%':return _0x1d0db1%_0x57d62c;break;}return _0x1d0db1;},PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x3c9),_0x12f8b3=>{const _0x3255b8=_0x533487;VisuMZ[_0x3255b8(0x4d9)](_0x12f8b3,_0x12f8b3);switch(_0x12f8b3['Value']){case _0x3255b8(0x588):$gameSystem['setAllowEventAutoMovement'](!![]);break;case _0x3255b8(0x559):$gameSystem[_0x3255b8(0x4a1)](![]);break;case _0x3255b8(0x4d1):$gameSystem[_0x3255b8(0x4a1)](!$gameSystem[_0x3255b8(0x5c5)]());break;}}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x287),_0x43f5bf=>{const _0x1752f2=_0x533487;VisuMZ[_0x1752f2(0x4d9)](_0x43f5bf,_0x43f5bf);const _0x597e57=$gameTemp['getLastPluginCommandInterpreter'](),_0x29fe89={'mapId':_0x43f5bf[_0x1752f2(0x437)],'eventId':_0x43f5bf[_0x1752f2(0x466)]||_0x597e57[_0x1752f2(0x36b)](),'pageId':_0x43f5bf[_0x1752f2(0x20e)]};if(_0x29fe89['mapId']<=0x0)_0x29fe89[_0x1752f2(0x52d)]=$gameMap?$gameMap[_0x1752f2(0x52d)]():0x1;$gameTemp[_0x1752f2(0x679)]()[_0x1752f2(0x552)](_0x29fe89);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x5fb),_0x45b1b8=>{const _0x5b21ca=_0x533487;VisuMZ['ConvertParams'](_0x45b1b8,_0x45b1b8);switch(_0x45b1b8['Value']){case'Enable':$gameSystem[_0x5b21ca(0x6c5)](!![]);break;case'Disable':$gameSystem[_0x5b21ca(0x6c5)](![]);break;case _0x5b21ca(0x4d1):$gameSystem[_0x5b21ca(0x6c5)](!$gameSystem['isDashingEnabled']());break;}}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],'EventIconChange',_0x49dab3=>{const _0x1b7405=_0x533487;VisuMZ[_0x1b7405(0x4d9)](_0x49dab3,_0x49dab3);const _0x189856=$gameTemp[_0x1b7405(0x679)]();_0x49dab3[_0x1b7405(0x437)]=_0x49dab3[_0x1b7405(0x437)]||$gameMap[_0x1b7405(0x52d)](),$gameSystem['setEventIconDataKey'](_0x49dab3[_0x1b7405(0x437)],_0x49dab3[_0x1b7405(0x466)]||_0x189856['eventId'](),_0x49dab3['IconIndex'],_0x49dab3['IconBufferX'],_0x49dab3[_0x1b7405(0x503)],_0x49dab3[_0x1b7405(0x35b)]);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x4ff),_0x6c64c3=>{const _0xa62816=_0x533487;VisuMZ[_0xa62816(0x4d9)](_0x6c64c3,_0x6c64c3);const _0x3b990a=$gameTemp[_0xa62816(0x679)]();_0x6c64c3[_0xa62816(0x437)]=_0x6c64c3[_0xa62816(0x437)]||$gameMap[_0xa62816(0x52d)](),$gameSystem[_0xa62816(0x65e)](_0x6c64c3[_0xa62816(0x437)],_0x6c64c3[_0xa62816(0x466)]||_0x3b990a[_0xa62816(0x36b)]());}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x4e8),_0x2a1010=>{const _0x2638e4=_0x533487;if($gameMap)for(const _0x20838e of $gameMap[_0x2638e4(0x4d5)]()){_0x20838e[_0x2638e4(0x191)](),_0x20838e[_0x2638e4(0x55d)]();}if(SceneManager[_0x2638e4(0x564)]()){const _0x427cc9=SceneManager[_0x2638e4(0x3fa)][_0x2638e4(0x25a)];if(_0x427cc9)_0x427cc9[_0x2638e4(0x203)]();}}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x527),_0x4d064b=>{const _0x28a14a=_0x533487;VisuMZ[_0x28a14a(0x4d9)](_0x4d064b,_0x4d064b);switch(_0x4d064b[_0x28a14a(0x255)]){case _0x28a14a(0x1d2):$gameSystem['setEventLabelsVisible'](!![]);break;case _0x28a14a(0x528):$gameSystem['setEventLabelsVisible'](![]);break;case'Toggle':$gameSystem['setEventLabelsVisible'](!$gameSystem[_0x28a14a(0x401)]());break;}}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x55a),_0x2d3774=>{const _0x4224f8=_0x533487;VisuMZ[_0x4224f8(0x4d9)](_0x2d3774,_0x2d3774);const _0x5bd422=$gameTemp[_0x4224f8(0x679)]();if(!$gameMap)return;const _0x4d06c1=$gameMap[_0x4224f8(0x431)](_0x2d3774[_0x4224f8(0x466)]||_0x5bd422[_0x4224f8(0x36b)]());if(_0x4d06c1)_0x4d06c1[_0x4224f8(0x1ea)]();}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x1b2),_0x14283a=>{const _0xe71ef4=_0x533487;VisuMZ[_0xe71ef4(0x4d9)](_0x14283a,_0x14283a);const _0x309ac6=$gameTemp['getLastPluginCommandInterpreter'](),_0x1bd701=_0x14283a[_0xe71ef4(0x437)]||$gameMap[_0xe71ef4(0x52d)](),_0x5d5d34=_0x14283a['EventId']||_0x309ac6[_0xe71ef4(0x36b)](),_0x4a15cc=_0x14283a['PosX']||0x0,_0x15fc42=_0x14283a[_0xe71ef4(0x34e)]||0x0,_0x4a494e=_0x14283a[_0xe71ef4(0x284)]||0x2,_0xbe7a40=((_0x14283a[_0xe71ef4(0x20e)]||0x1)-0x1)['clamp'](0x0,0x13),_0x5ce369=_0x14283a[_0xe71ef4(0x6b0)]||0x0;$gameSystem[_0xe71ef4(0x25c)](_0x1bd701,_0x5d5d34,_0x4a15cc,_0x15fc42,_0x4a494e,_0xbe7a40,_0x5ce369);}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],'EventLocationDelete',_0x38b995=>{const _0xd249dc=_0x533487;VisuMZ[_0xd249dc(0x4d9)](_0x38b995,_0x38b995);const _0x39dae5=$gameTemp[_0xd249dc(0x679)](),_0x5d0035=_0x38b995['MapId']||$gameMap['mapId'](),_0x3f1bf3=_0x38b995['EventId']||_0x39dae5[_0xd249dc(0x36b)]();$gameSystem['deleteSavedEventLocationKey'](_0x5d0035,_0x3f1bf3);}),VisuMZ['EventsMoveCore'][_0x533487(0x1f4)]=function(_0x218d85,_0x33771f){const _0x29eaac=_0x533487;_0x33771f=_0x33771f||{},_0x218d85[_0x29eaac(0x632)]={'fadeIn':_0x33771f[_0x29eaac(0x1d5)]||0x0,'fadeOut':_0x33771f['fadeOutDuration']||0x0},_0x218d85[_0x29eaac(0x67c)]={'x':_0x33771f[_0x29eaac(0x5bc)]||0x0,'y':_0x33771f[_0x29eaac(0x54c)]||0x0},_0x218d85[_0x29eaac(0x296)]={'x':_0x33771f[_0x29eaac(0x4e0)]||0x0,'y':_0x33771f[_0x29eaac(0x2e7)]||0x0},_0x218d85[_0x29eaac(0x159)]={'x':_0x33771f[_0x29eaac(0x40e)]||0x0,'y':_0x33771f['endScaleY']||0x0},_0x218d85[_0x29eaac(0x3f2)]={'x':_0x33771f[_0x29eaac(0x3da)]||0x0,'y':_0x33771f[_0x29eaac(0x295)]||0x0},_0x218d85[_0x29eaac(0x5cb)]={'start':_0x33771f[_0x29eaac(0x513)]||0x0,'end':_0x33771f['endAngle']||0x0},_0x218d85['misc']={'arc':_0x33771f[_0x29eaac(0x4c7)]||0x0};},PluginManager['registerCommand'](pluginData[_0x533487(0x519)],'MsgPopupPlayer',_0xd5b220=>{const _0x194d88=_0x533487;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported[_0x194d88(0x261)]){$gameTemp[_0x194d88(0x53a)]()&&alert(_0x194d88(0x4b3)+_0x194d88(0x38c));return;}VisuMZ['ConvertParams'](_0xd5b220,_0xd5b220);const _0x4bc192={'text':_0xd5b220[_0x194d88(0x6a0)]||'','duration':Math[_0x194d88(0x381)](_0xd5b220[_0x194d88(0x60d)]||0x3c,0xc)},_0x90866c=_0xd5b220['PopupExtra']||{};VisuMZ[_0x194d88(0x163)][_0x194d88(0x1f4)](_0x4bc192,_0x90866c);const _0x47613d=SceneManager[_0x194d88(0x3fa)][_0x194d88(0x25a)];if(_0x47613d){if(_0x194d88(0x224)===_0x194d88(0x224)){const _0x237109=$gamePlayer;_0x47613d[_0x194d88(0x659)](_0x237109,_0x4bc192);}else this[_0x194d88(0x3dc)]=0x0;}}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x4ae),_0x509f2d=>{const _0x205bc7=_0x533487;if(!SceneManager[_0x205bc7(0x32a)]())return;if(!Imported[_0x205bc7(0x261)]){if($gameTemp['isPlaytest']()){if('iZLKu'!==_0x205bc7(0x236))alert(_0x205bc7(0x4b3)+_0x205bc7(0x38c));else{const _0x529c31=[_0x119175[_0x205bc7(0x21c)],_0x3e66c2['_eventId'],_0x205bc7(0x12a)['format'](_0x507e8e)];return _0x3d213f[_0x205bc7(0x67f)](_0x529c31);}}return;}VisuMZ[_0x205bc7(0x4d9)](_0x509f2d,_0x509f2d);const _0x1e02f0=_0x509f2d[_0x205bc7(0x638)]||0x0,_0x559f39={'text':_0x509f2d[_0x205bc7(0x6a0)]||'','duration':Math[_0x205bc7(0x381)](_0x509f2d[_0x205bc7(0x60d)]||0x3c,0xc)},_0x5ce68d=_0x509f2d[_0x205bc7(0x10a)]||{};VisuMZ[_0x205bc7(0x163)][_0x205bc7(0x1f4)](_0x559f39,_0x5ce68d);const _0x3d385d=SceneManager[_0x205bc7(0x3fa)][_0x205bc7(0x25a)];if(_0x3d385d){if(_0x205bc7(0x58c)!==_0x205bc7(0x685)){const _0x4b2178=$gamePlayer['followers']()[_0x205bc7(0x48d)](_0x1e02f0);_0x3d385d[_0x205bc7(0x659)](_0x4b2178,_0x559f39);}else{const _0x1b6e37=_0x46de7c[_0x205bc7(0x470)][_0x1ab13d];_0x1b6e37&&(_0x316e16['mapId']=_0x1b6e37[_0x205bc7(0x51c)],_0x1cd0a8[_0x205bc7(0x36b)]=_0x1b6e37[_0x205bc7(0x360)]);}}}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x6cc),_0x4be1d1=>{const _0x22400a=_0x533487;if(!SceneManager[_0x22400a(0x32a)]())return;if(!Imported[_0x22400a(0x261)]){$gameTemp[_0x22400a(0x53a)]()&&(_0x22400a(0x517)!==_0x22400a(0x1dc)?alert(_0x22400a(0x4b3)+_0x22400a(0x38c)):this[_0x22400a(0x435)][_0x22400a(0x509)]());return;}VisuMZ['ConvertParams'](_0x4be1d1,_0x4be1d1);const _0x2f91a6=$gameTemp[_0x22400a(0x679)](),_0x1a6de0=_0x4be1d1[_0x22400a(0x466)]||(_0x2f91a6?_0x2f91a6['eventId']():0x1),_0x93785b={'text':_0x4be1d1['MessageText']||'','duration':Math['max'](_0x4be1d1[_0x22400a(0x60d)]||0x3c,0xc)},_0x56782a=_0x4be1d1[_0x22400a(0x10a)]||{};VisuMZ['EventsMoveCore']['ApplyPopupExtraSettings'](_0x93785b,_0x56782a);const _0x1026cc=SceneManager[_0x22400a(0x3fa)][_0x22400a(0x25a)];if(_0x1026cc){if(_0x22400a(0x687)===_0x22400a(0x687)){const _0x545c7d=$gameMap[_0x22400a(0x431)](_0x1a6de0);_0x1026cc[_0x22400a(0x659)](_0x545c7d,_0x93785b);}else this['_saveEventLocations']=!![];}}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x52a),_0x248472=>{const _0x15e483=_0x533487;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported['VisuMZ_1_MessageCore']){if(_0x15e483(0x2e2)==='PhkcE'){$gameTemp[_0x15e483(0x53a)]()&&alert('VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20'+_0x15e483(0x38c));return;}else return 0x8;}VisuMZ['ConvertParams'](_0x248472,_0x248472);const _0xe7aac0={'text':_0x248472[_0x15e483(0x6a0)]||'','duration':Math[_0x15e483(0x381)](_0x248472['MsgDuration']||0x3c,0xc),'tileCoordinates':{'x':Math[_0x15e483(0x22e)](_0x248472[_0x15e483(0x485)]||0x0),'y':Math[_0x15e483(0x22e)](_0x248472[_0x15e483(0x206)]||0x0)}},_0x5a1d07=_0x248472[_0x15e483(0x10a)]||{};VisuMZ[_0x15e483(0x163)][_0x15e483(0x1f4)](_0xe7aac0,_0x5a1d07);const _0x43cfa3=SceneManager['_scene'][_0x15e483(0x25a)];if(_0x43cfa3){if('HiyzO'!==_0x15e483(0x1cf))_0x43cfa3[_0x15e483(0x533)](_0xe7aac0);else while(this[_0x15e483(0x12c)]()){this[_0x15e483(0x293)]();}}}),PluginManager[_0x533487(0x1a0)](pluginData['name'],'EventTimerExpireEvent',_0x17e86c=>{const _0x97a277=_0x533487;VisuMZ[_0x97a277(0x4d9)](_0x17e86c,_0x17e86c);const _0x4e8387=_0x17e86c[_0x97a277(0x5ea)];$gameTimer['setCommonEvent'](_0x4e8387);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x4bf),_0x981696=>{const _0x54d236=_0x533487;$gameTimer[_0x54d236(0x516)](0x0);}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x248),_0x46d9d4=>{const _0x1b005e=_0x533487;if(!$gameTimer['isWorking']())return;VisuMZ[_0x1b005e(0x4d9)](_0x46d9d4,_0x46d9d4);let _0x254d19=0x0;_0x254d19+=_0x46d9d4[_0x1b005e(0x52f)],_0x254d19+=_0x46d9d4[_0x1b005e(0x11c)]*0x3c,_0x254d19+=_0x46d9d4[_0x1b005e(0x56e)]*0x3c*0x3c,_0x254d19+=_0x46d9d4['Hours']*0x3c*0x3c*0x3c,$gameTimer['gainFrames'](_0x254d19);}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x4fe),_0x1d1e9c=>{const _0x469eda=_0x533487;if(!$gameTimer[_0x469eda(0x238)]())return;VisuMZ[_0x469eda(0x4d9)](_0x1d1e9c,_0x1d1e9c);let _0x5086aa=0x0;_0x5086aa+=_0x1d1e9c[_0x469eda(0x52f)],_0x5086aa+=_0x1d1e9c[_0x469eda(0x11c)]*0x3c,_0x5086aa+=_0x1d1e9c[_0x469eda(0x56e)]*0x3c*0x3c,_0x5086aa+=_0x1d1e9c[_0x469eda(0x370)]*0x3c*0x3c*0x3c,$gameTimer[_0x469eda(0x223)](_0x5086aa);}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x4ec),_0x3a1b79=>{const _0x544f16=_0x533487;if(!$gameTimer[_0x544f16(0x238)]())return;$gameTimer['pause']();}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x149),_0x12dd70=>{const _0x234a0e=_0x533487;if(!$gameTimer[_0x234a0e(0x238)]())return;$gameTimer['resume']();}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x4c4),_0x1fdcce=>{const _0x379f27=_0x533487;VisuMZ['ConvertParams'](_0x1fdcce,_0x1fdcce);const _0x5a89b7=_0x1fdcce[_0x379f27(0x5f8)]||0x0;$gameTimer[_0x379f27(0x413)](_0x5a89b7);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x422),_0x2ec89c=>{const _0x99bcd6=_0x533487;VisuMZ['ConvertParams'](_0x2ec89c,_0x2ec89c);const _0x458b62=!_0x2ec89c[_0x99bcd6(0x20b)];$gameSystem[_0x99bcd6(0x585)](_0x458b62);}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],'FollowerSetTargetChase',_0x262756=>{const _0x4c37e0=_0x533487;VisuMZ[_0x4c37e0(0x4d9)](_0x262756,_0x262756);const _0x2ed366=(_0x262756[_0x4c37e0(0x154)]||0x0)-0x1,_0x475726=!_0x262756[_0x4c37e0(0x20b)],_0x1a008d=$gamePlayer[_0x4c37e0(0x1c7)]()[_0x4c37e0(0x48d)](_0x2ed366);if(_0x1a008d)_0x1a008d[_0x4c37e0(0x35a)](_0x475726);}),PluginManager['registerCommand'](pluginData['name'],_0x533487(0x1e3),_0x14f8fe=>{const _0x267d05=_0x533487;VisuMZ[_0x267d05(0x4d9)](_0x14f8fe,_0x14f8fe);const _0x35430d=_0x14f8fe[_0x267d05(0x154)];$gameSystem[_0x267d05(0x5d0)](_0x35430d);}),PluginManager['registerCommand'](pluginData['name'],_0x533487(0x17d),_0x122ff1=>{const _0x2c20e9=_0x533487;VisuMZ[_0x2c20e9(0x4d9)](_0x122ff1,_0x122ff1),$gameSystem[_0x2c20e9(0x5d0)](0x0),$gameSystem['setStopFollowerChasing'](![]);for(const _0x198ff8 of $gamePlayer[_0x2c20e9(0x1c7)]()[_0x2c20e9(0x254)]){if(_0x198ff8)_0x198ff8['setChaseOff'](![]);}}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x173),_0x1c5871=>{const _0x33f5f3=_0x533487;VisuMZ[_0x33f5f3(0x4d9)](_0x1c5871,_0x1c5871);const _0x59a962=$gameTemp[_0x33f5f3(0x679)]();_0x1c5871[_0x33f5f3(0x437)]=_0x1c5871[_0x33f5f3(0x437)]||$gameMap['mapId']();const _0x587c67=[_0x1c5871[_0x33f5f3(0x437)],_0x1c5871[_0x33f5f3(0x466)]||_0x59a962[_0x33f5f3(0x36b)](),_0x1c5871[_0x33f5f3(0x122)]],_0x3bfe6d=_0x1c5871[_0x33f5f3(0x627)],_0x21b2ef=$gameSelfSwitches[_0x33f5f3(0x67f)](_0x587c67)||![];$gameSwitches[_0x33f5f3(0x575)](_0x3bfe6d,_0x21b2ef);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x64c),_0x8f949=>{const _0x2cd3d3=_0x533487;VisuMZ[_0x2cd3d3(0x4d9)](_0x8f949,_0x8f949);const _0x21d157=$gameTemp[_0x2cd3d3(0x679)]();_0x8f949['MapId']=_0x8f949['MapId']||$gameMap[_0x2cd3d3(0x52d)]();const _0x5ce0c3=[_0x8f949['MapId'],_0x8f949['EventId']||_0x21d157[_0x2cd3d3(0x36b)](),'Self\x20Switch\x20%1'[_0x2cd3d3(0x1b5)](_0x8f949[_0x2cd3d3(0x185)])],_0x3dcb0b=_0x8f949['TargetSwitchId'],_0x49dbd8=$gameSelfSwitches['value'](_0x5ce0c3)||![];$gameSwitches['setValue'](_0x3dcb0b,_0x49dbd8);}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x5f5),_0x4d84ae=>{const _0x34d1e3=_0x533487;VisuMZ[_0x34d1e3(0x4d9)](_0x4d84ae,_0x4d84ae);const _0x374f65=$gameTemp[_0x34d1e3(0x679)]();_0x4d84ae['MapId']=_0x4d84ae[_0x34d1e3(0x437)]||$gameMap[_0x34d1e3(0x52d)]();const _0x5de0a3=[_0x4d84ae[_0x34d1e3(0x437)],_0x4d84ae['EventId']||_0x374f65[_0x34d1e3(0x36b)](),_0x34d1e3(0x12a)['format'](_0x4d84ae[_0x34d1e3(0x637)])],_0x433c72=_0x4d84ae['TargetVariableId'],_0x1cda61=$gameSelfSwitches[_0x34d1e3(0x67f)](_0x5de0a3)||![];$gameVariables['setValue'](_0x433c72,_0x1cda61);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x5c9),_0x354ce7=>{const _0xad9e37=_0x533487;VisuMZ[_0xad9e37(0x4d9)](_0x354ce7,_0x354ce7);if(!$gameMap)return;const _0xc033ff=$gameTemp[_0xad9e37(0x679)](),_0x1b0beb=_0x354ce7['Step2Preserve'];_0x354ce7['Step1MapId']=_0x354ce7[_0xad9e37(0x2db)]||$gameMap[_0xad9e37(0x52d)](),_0x354ce7[_0xad9e37(0x1e2)]=_0x354ce7['Step2MapId']||$gameMap[_0xad9e37(0x52d)](),_0x354ce7[_0xad9e37(0x302)]=_0x354ce7[_0xad9e37(0x302)]['toUpperCase']()['trim']();if(!_0x1b0beb&&_0x354ce7[_0xad9e37(0x2db)]!==$gameMap[_0xad9e37(0x52d)]())return;if($gameMap[_0xad9e37(0x52d)]()===_0x354ce7[_0xad9e37(0x2db)]){if(_0xad9e37(0x4be)===_0xad9e37(0x4be)){const _0x46a591=$gameMap[_0xad9e37(0x431)](_0x354ce7['Step1EventId']||_0xc033ff[_0xad9e37(0x36b)]());if(!_0x46a591)return;_0x354ce7[_0xad9e37(0x302)]!==_0xad9e37(0x61e)?_0xad9e37(0x2b7)!==_0xad9e37(0x2b7)?this[_0xad9e37(0x26e)][_0xad9e37(0x43a)]=this[_0xad9e37(0x26e)][_0xad9e37(0x5b2)][_0xad9e37(0x48a)](/\\V\[(\d+)\]/gi,(_0x3fb637,_0x428ac6)=>_0x5461b0['value'](_0x242232(_0x428ac6))):_0x46a591['morphIntoTemplate'](_0x354ce7[_0xad9e37(0x302)]):_0xad9e37(0x3e2)===_0xad9e37(0x3e2)?_0x46a591[_0xad9e37(0x23b)](_0x354ce7[_0xad9e37(0x1e2)],_0x354ce7[_0xad9e37(0x620)]||_0xc033ff['eventId']()):(_0x3bab26[_0xad9e37(0x2fc)]=_0x5bcaf3,_0x4f9650[_0xad9e37(0x191)]());}else{if(this[_0xad9e37(0x3bf)](_0xaa33c8,_0x2a3ac9))return![];if(!this[_0xad9e37(0x49e)](_0x4a0396,_0x50ffbd,_0x1eb17e))return![];}}_0x1b0beb&&$gameSystem[_0xad9e37(0x1e1)](_0x354ce7[_0xad9e37(0x2db)],_0x354ce7[_0xad9e37(0x5c8)],_0x354ce7[_0xad9e37(0x302)],_0x354ce7['Step2MapId'],_0x354ce7[_0xad9e37(0x620)]);}),PluginManager[_0x533487(0x1a0)](pluginData['name'],_0x533487(0x6b7),_0x1972f8=>{const _0xcbf97d=_0x533487;VisuMZ[_0xcbf97d(0x4d9)](_0x1972f8,_0x1972f8);if(!$gameMap)return;const _0x55225b=$gameTemp[_0xcbf97d(0x679)]();_0x1972f8['MapId']=_0x1972f8['MapId']||$gameMap['mapId']();if($gameMap[_0xcbf97d(0x52d)]()===_0x1972f8['MapId']){const _0x40ad2f=$gameMap[_0xcbf97d(0x431)](_0x1972f8['EventId']||_0x55225b[_0xcbf97d(0x36b)]());_0x40ad2f[_0xcbf97d(0x4a8)]();}if(_0x1972f8['RemovePreserve']){if(_0xcbf97d(0x37a)==='mAgiE')return!!this[_0xcbf97d(0x1b7)](_0x4e4597);else $gameSystem['deletePreservedMorphEventDataKey'](_0x1972f8[_0xcbf97d(0x437)],_0x1972f8['EventId']||_0x55225b['eventId']());}}),PluginManager['registerCommand'](pluginData['name'],'PlayerIconChange',_0x1d7fb4=>{const _0x5ef4c3=_0x533487;VisuMZ[_0x5ef4c3(0x4d9)](_0x1d7fb4,_0x1d7fb4),$gameSystem[_0x5ef4c3(0x6a3)]($gamePlayer,_0x1d7fb4[_0x5ef4c3(0x292)],_0x1d7fb4[_0x5ef4c3(0x405)],_0x1d7fb4['IconBufferY'],_0x1d7fb4[_0x5ef4c3(0x35b)]);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x616),_0x39a991=>{const _0x1c195a=_0x533487;VisuMZ[_0x1c195a(0x4d9)](_0x39a991,_0x39a991),$gameSystem[_0x1c195a(0x5b7)]($gamePlayer);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x699),_0x2264a4=>{const _0x464013=_0x533487;VisuMZ['ConvertParams'](_0x2264a4,_0x2264a4),$gameSystem[_0x464013(0x430)](!_0x2264a4[_0x464013(0x5cd)]);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x13c),_0x19040e=>{const _0x4f46e4=_0x533487;VisuMZ[_0x4f46e4(0x4d9)](_0x19040e,_0x19040e),$gameSystem[_0x4f46e4(0x529)](_0x19040e[_0x4f46e4(0x2a9)]);}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x474),_0xa65254=>{const _0x70e47e=_0x533487;VisuMZ['ConvertParams'](_0xa65254,_0xa65254);const _0x2dc7e7=_0xa65254[_0x70e47e(0x437)]||$gameMap['mapId']();$gameSelfSwitches[_0x70e47e(0x4a3)](_0x2dc7e7);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x327),_0x41d981=>{const _0x888233=_0x533487;VisuMZ[_0x888233(0x4d9)](_0x41d981,_0x41d981);const _0x34ad80=$gameTemp['getLastPluginCommandInterpreter']();_0x41d981['MapId']=_0x41d981['MapId']||$gameMap[_0x888233(0x52d)]();const _0x4cec70=[_0x41d981[_0x888233(0x437)],_0x41d981['EventId']||_0x34ad80['eventId'](),_0x41d981[_0x888233(0x122)]];switch(_0x41d981[_0x888233(0x5e3)]){case'ON':$gameSelfSwitches[_0x888233(0x575)](_0x4cec70,!![]);break;case _0x888233(0x2ef):$gameSelfSwitches[_0x888233(0x575)](_0x4cec70,![]);break;case _0x888233(0x4d1):$gameSelfSwitches[_0x888233(0x575)](_0x4cec70,!$gameSelfSwitches[_0x888233(0x67f)](_0x4cec70));break;}}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x23a),_0x1875fc=>{const _0x41f96a=_0x533487;VisuMZ[_0x41f96a(0x4d9)](_0x1875fc,_0x1875fc);const _0xe9401d=$gameTemp[_0x41f96a(0x679)]();_0x1875fc[_0x41f96a(0x437)]=_0x1875fc['MapId']||$gameMap[_0x41f96a(0x52d)]();const _0x597273=[_0x1875fc['MapId'],_0x1875fc[_0x41f96a(0x466)]||_0xe9401d[_0x41f96a(0x36b)](),_0x41f96a(0x24d)['format'](_0x1875fc[_0x41f96a(0x185)])];switch(_0x1875fc['Value']){case'ON':$gameSelfSwitches[_0x41f96a(0x575)](_0x597273,!![]);break;case _0x41f96a(0x2ef):$gameSelfSwitches[_0x41f96a(0x575)](_0x597273,![]);break;case _0x41f96a(0x4d1):$gameSelfSwitches[_0x41f96a(0x575)](_0x597273,!$gameSelfSwitches[_0x41f96a(0x67f)](_0x597273));break;}}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x3ec),_0x4dcc68=>{const _0x4e9f12=_0x533487;VisuMZ['ConvertParams'](_0x4dcc68,_0x4dcc68);const _0x1b23e4=$gameTemp[_0x4e9f12(0x679)]();_0x4dcc68['MapId']=_0x4dcc68[_0x4e9f12(0x437)]||$gameMap[_0x4e9f12(0x52d)]();const _0x491ffc=[_0x4dcc68[_0x4e9f12(0x437)],_0x4dcc68[_0x4e9f12(0x466)]||_0x1b23e4['eventId'](),_0x4e9f12(0x12a)[_0x4e9f12(0x1b5)](_0x4dcc68[_0x4e9f12(0x637)])],_0x1a16dd=VisuMZ[_0x4e9f12(0x328)]($gameSelfSwitches['value'](_0x491ffc),_0x4dcc68[_0x4e9f12(0x5e3)],_0x4dcc68['Operation']);$gameSelfSwitches['setValue'](_0x491ffc,_0x1a16dd);}),PluginManager[_0x533487(0x1a0)](pluginData['name'],'SpawnEventAtXY',_0x4967c7=>{const _0x2e6d97=_0x533487;VisuMZ['ConvertParams'](_0x4967c7,_0x4967c7);const _0xff8b78=$gameTemp[_0x2e6d97(0x679)](),_0x1ebe6f={'template':_0x4967c7[_0x2e6d97(0x302)],'mapId':_0x4967c7[_0x2e6d97(0x437)]||$gameMap[_0x2e6d97(0x52d)](),'eventId':_0x4967c7[_0x2e6d97(0x466)]||_0xff8b78[_0x2e6d97(0x36b)](),'x':_0x4967c7[_0x2e6d97(0x22a)],'y':_0x4967c7['PosY'],'spawnPreserved':_0x4967c7[_0x2e6d97(0x162)],'spawnEventId':$gameMap[_0x2e6d97(0x5a7)][_0x2e6d97(0x1eb)]+0x3e8},_0x108af3=_0x4967c7['SuccessSwitchId']||0x0;if(!VisuMZ[_0x2e6d97(0x31f)][_0x1ebe6f[_0x2e6d97(0x52d)]]&&_0x1ebe6f[_0x2e6d97(0x52d)]!==$gameMap['mapId']()){let _0x340ff5=_0x2e6d97(0x197)[_0x2e6d97(0x1b5)](_0x1ebe6f['mapId']);_0x340ff5+=_0x2e6d97(0x51a),_0x340ff5+=_0x2e6d97(0x44f),_0x340ff5+='Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a',_0x340ff5+=_0x2e6d97(0x630)[_0x2e6d97(0x1b5)](_0x1ebe6f[_0x2e6d97(0x52d)]),alert(_0x340ff5);return;}const _0x273c5a=$gameMap[_0x2e6d97(0x490)](_0x1ebe6f,_0x4967c7[_0x2e6d97(0x30f)],_0x4967c7['Passability']);_0x108af3&&$gameSwitches[_0x2e6d97(0x575)](_0x108af3,!!_0x273c5a);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x45e),_0x58277c=>{const _0x54dc0d=_0x533487;VisuMZ[_0x54dc0d(0x4d9)](_0x58277c,_0x58277c);const _0x31ea11=$gameTemp[_0x54dc0d(0x679)](),_0x43b29f={'template':_0x58277c['TemplateName'],'mapId':_0x58277c[_0x54dc0d(0x437)]||$gameMap[_0x54dc0d(0x52d)](),'eventId':_0x58277c[_0x54dc0d(0x466)]||_0x31ea11[_0x54dc0d(0x36b)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x58277c[_0x54dc0d(0x162)],'spawnEventId':$gameMap[_0x54dc0d(0x5a7)][_0x54dc0d(0x1eb)]+0x3e8},_0x1edce4=_0x58277c[_0x54dc0d(0x38a)]||0x0;if(!VisuMZ[_0x54dc0d(0x31f)][_0x43b29f[_0x54dc0d(0x52d)]]&&_0x43b29f[_0x54dc0d(0x52d)]!==$gameMap[_0x54dc0d(0x52d)]()){if(_0x54dc0d(0x421)!=='GfINp')_0x46c027[_0x54dc0d(0x163)]['Game_Variables_setValue'][_0x54dc0d(0x1ce)](this,_0x1c8355,_0x87c8ff);else{let _0x453318='You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a'[_0x54dc0d(0x1b5)](_0x43b29f['mapId']);_0x453318+=_0x54dc0d(0x51a),_0x453318+=_0x54dc0d(0x44f),_0x453318+=_0x54dc0d(0x2a1),_0x453318+=_0x54dc0d(0x630)[_0x54dc0d(0x1b5)](_0x43b29f[_0x54dc0d(0x52d)]),alert(_0x453318);return;}}const _0x221e73=$gameMap[_0x54dc0d(0x45f)](_0x43b29f,_0x58277c['Region'],_0x58277c['Collision'],_0x58277c[_0x54dc0d(0x661)]);_0x1edce4&&$gameSwitches[_0x54dc0d(0x575)](_0x1edce4,!!_0x221e73);}),PluginManager['registerCommand'](pluginData['name'],_0x533487(0x375),_0x1faf4f=>{const _0x10dc5f=_0x533487;VisuMZ[_0x10dc5f(0x4d9)](_0x1faf4f,_0x1faf4f);const _0xe4980=$gameTemp['getLastPluginCommandInterpreter'](),_0x3328be={'template':_0x1faf4f[_0x10dc5f(0x302)],'mapId':_0x1faf4f[_0x10dc5f(0x437)]||$gameMap[_0x10dc5f(0x52d)](),'eventId':_0x1faf4f[_0x10dc5f(0x466)]||_0xe4980[_0x10dc5f(0x36b)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x1faf4f[_0x10dc5f(0x162)],'spawnEventId':$gameMap['_spawnedEvents']['length']+0x3e8},_0x2a4a3c=_0x1faf4f['SuccessSwitchId']||0x0;if(!VisuMZ['PreloadedMaps'][_0x3328be['mapId']]&&_0x3328be[_0x10dc5f(0x52d)]!==$gameMap[_0x10dc5f(0x52d)]()){if(_0x10dc5f(0x621)===_0x10dc5f(0x621)){let _0xef8965=_0x10dc5f(0x197)[_0x10dc5f(0x1b5)](_0x3328be['mapId']);_0xef8965+=_0x10dc5f(0x51a),_0xef8965+=_0x10dc5f(0x44f),_0xef8965+=_0x10dc5f(0x2a1),_0xef8965+='Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1'[_0x10dc5f(0x1b5)](_0x3328be['mapId']),alert(_0xef8965);return;}else _0x37f7c5[0x2]=_0x10dc5f(0x24d)[_0x10dc5f(0x1b5)](_0x334b8e);}const _0x37099d=$gameMap[_0x10dc5f(0x53d)](_0x3328be,_0x1faf4f['TerrainTags'],_0x1faf4f[_0x10dc5f(0x30f)],_0x1faf4f['Passability']);_0x2a4a3c&&$gameSwitches[_0x10dc5f(0x575)](_0x2a4a3c,!!_0x37099d);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x2eb),_0x16f0b2=>{const _0x3baad9=_0x533487;VisuMZ[_0x3baad9(0x4d9)](_0x16f0b2,_0x16f0b2);const _0x40e528=$gameTemp['getLastPluginCommandInterpreter']();$gameMap['despawnEventId'](_0x16f0b2[_0x3baad9(0x360)]||_0x40e528[_0x3baad9(0x36b)]());}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],'SpawnEventDespawnAtXY',_0x338bc2=>{const _0x44cf3b=_0x533487;VisuMZ['ConvertParams'](_0x338bc2,_0x338bc2);const _0x121e88=_0x338bc2[_0x44cf3b(0x22a)],_0x5b7f4f=_0x338bc2[_0x44cf3b(0x34e)];$gameMap[_0x44cf3b(0x251)](_0x121e88,_0x5b7f4f);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],_0x533487(0x4d4),_0x39eca2=>{const _0x4cbb2c=_0x533487;VisuMZ['ConvertParams'](_0x39eca2,_0x39eca2),$gameMap[_0x4cbb2c(0x4a9)](_0x39eca2[_0x4cbb2c(0x69e)]);}),PluginManager[_0x533487(0x1a0)](pluginData[_0x533487(0x519)],'SpawnEventDespawnTerrainTags',_0xd6c20e=>{const _0xba7efa=_0x533487;VisuMZ[_0xba7efa(0x4d9)](_0xd6c20e,_0xd6c20e),$gameMap[_0xba7efa(0x4ac)](_0xd6c20e[_0xba7efa(0x39f)]);}),PluginManager['registerCommand'](pluginData[_0x533487(0x519)],_0x533487(0x483),_0x58fb5a=>{const _0xfd07eb=_0x533487;VisuMZ['ConvertParams'](_0x58fb5a,_0x58fb5a),$gameMap[_0xfd07eb(0x554)]();}),VisuMZ[_0x533487(0x163)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype'][_0x533487(0x37b)],Scene_Boot[_0x533487(0x48b)]['onDatabaseLoaded']=function(){const _0xa49df0=_0x533487;VisuMZ['EventsMoveCore']['Scene_Boot_onDatabaseLoaded'][_0xa49df0(0x1ce)](this),this[_0xa49df0(0x425)](),this[_0xa49df0(0x572)]();if(VisuMZ[_0xa49df0(0x163)][_0xa49df0(0x4ed)])VisuMZ[_0xa49df0(0x163)][_0xa49df0(0x4ed)][_0xa49df0(0x213)]();},VisuMZ['PreloadedMaps']=[],VisuMZ['EventTemplates']={},Scene_Boot[_0x533487(0x48b)][_0x533487(0x425)]=function(){const _0x38f0f3=_0x533487;if(DataManager[_0x38f0f3(0x5ed)]()||DataManager[_0x38f0f3(0x300)]())return;const _0x4d8230=VisuMZ[_0x38f0f3(0x163)][_0x38f0f3(0x5eb)]['Template'],_0x47920b=_0x4d8230['PreloadMaps'][_0x38f0f3(0x368)](0x0);for(const _0x1d39ff of _0x4d8230[_0x38f0f3(0x5f4)]){_0x1d39ff[_0x38f0f3(0x166)]=_0x1d39ff['Name']['toUpperCase']()[_0x38f0f3(0x1ff)](),VisuMZ[_0x38f0f3(0x470)][_0x1d39ff[_0x38f0f3(0x166)]]=_0x1d39ff;if(!_0x47920b['includes'](_0x1d39ff[_0x38f0f3(0x51c)]))_0x47920b[_0x38f0f3(0x618)](_0x1d39ff[_0x38f0f3(0x51c)]);}for(const _0x51b2bb of _0x47920b){if('wLwcW'!==_0x38f0f3(0x1bf)){_0x2a6b06['EventsMoveCore'][_0x38f0f3(0x26b)][_0x38f0f3(0x1ce)](this),this['process_VisuMZ_EventsMoveCore_LoadTemplateMaps'](),this['process_VisuMZ_EventsMoveCore_Switches_Variables']();if(_0x16c929[_0x38f0f3(0x163)][_0x38f0f3(0x4ed)])_0x31882f['EventsMoveCore'][_0x38f0f3(0x4ed)][_0x38f0f3(0x213)]();}else{if(VisuMZ[_0x38f0f3(0x31f)][_0x51b2bb])continue;const _0x47f4e7=_0x38f0f3(0x326)[_0x38f0f3(0x1b5)](_0x51b2bb[_0x38f0f3(0x63e)](0x3)),_0x48a481=_0x38f0f3(0x3d0)[_0x38f0f3(0x1b5)](_0x51b2bb);DataManager[_0x38f0f3(0x669)](_0x48a481,_0x47f4e7),setTimeout(this[_0x38f0f3(0x57f)][_0x38f0f3(0x6c8)](this,_0x51b2bb,_0x48a481),0x64);}}},Scene_Boot['prototype'][_0x533487(0x57f)]=function(_0x4e746d,_0x53bd4b){const _0x33136c=_0x533487;window[_0x53bd4b]?(VisuMZ['PreloadedMaps'][_0x4e746d]=window[_0x53bd4b],window[_0x53bd4b]=undefined):setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x33136c(0x6c8)](this,_0x4e746d,_0x53bd4b),0x64);},VisuMZ[_0x533487(0x68b)]=[],VisuMZ[_0x533487(0x408)]=[],VisuMZ[_0x533487(0x1ad)]=[],VisuMZ[_0x533487(0x580)]=[],VisuMZ[_0x533487(0x662)]=[],VisuMZ['MapVariables']=[],Scene_Boot[_0x533487(0x48b)][_0x533487(0x572)]=function(){const _0x22e855=_0x533487;for(let _0x1d4c84=0x1;_0x1d4c84<$dataSystem[_0x22e855(0x63c)][_0x22e855(0x1eb)];_0x1d4c84++){if(_0x22e855(0x66a)===_0x22e855(0x54f)){const _0x386060=this[_0x22e855(0x324)]();return _0x386060?_0x386060[_0x22e855(0x17b)]:0x0;}else{if($dataSystem['switches'][_0x1d4c84][_0x22e855(0x579)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x22e855(0x68b)][_0x22e855(0x618)](_0x1d4c84);if($dataSystem['switches'][_0x1d4c84][_0x22e855(0x579)](/<SELF>/i))VisuMZ['SelfSwitches'][_0x22e855(0x618)](_0x1d4c84);if($dataSystem[_0x22e855(0x63c)][_0x1d4c84][_0x22e855(0x579)](/<MAP>/i))VisuMZ['MapSwitches'][_0x22e855(0x618)](_0x1d4c84);}}for(let _0x23cb76=0x1;_0x23cb76<$dataSystem[_0x22e855(0x2c0)][_0x22e855(0x1eb)];_0x23cb76++){if($dataSystem[_0x22e855(0x2c0)][_0x23cb76][_0x22e855(0x579)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x22e855(0x580)][_0x22e855(0x618)](_0x23cb76);if($dataSystem[_0x22e855(0x2c0)][_0x23cb76][_0x22e855(0x579)](/<SELF>/i))VisuMZ['SelfVariables'][_0x22e855(0x618)](_0x23cb76);if($dataSystem[_0x22e855(0x2c0)][_0x23cb76]['match'](/<MAP>/i))VisuMZ[_0x22e855(0x56f)][_0x22e855(0x618)](_0x23cb76);}},VisuMZ[_0x533487(0x163)][_0x533487(0x4ed)]={},VisuMZ['EventsMoveCore']['CustomPageConditions'][_0x533487(0x213)]=function(){const _0x4ea597=_0x533487;this[_0x4ea597(0x435)]=new Game_CPCInterpreter(),this['determineCommonEventsWithCPC']();},VisuMZ['EventsMoveCore'][_0x533487(0x4ed)][_0x533487(0x648)]=function(){const _0xa2632f=_0x533487;this['_commonEvents']=[];for(const _0x2b2963 of $dataCommonEvents){if(_0xa2632f(0x3a5)!=='uBZAG')return this[_0xa2632f(0x4d7)]()&&this['vehicle']()?this[_0xa2632f(0x23f)]()[_0xa2632f(0x5f7)](_0x135bfc,_0x32c06b,_0x24e251):!![];else{if(!_0x2b2963)continue;VisuMZ['EventsMoveCore'][_0xa2632f(0x4ed)][_0xa2632f(0x565)](_0x2b2963);if(_0x2b2963[_0xa2632f(0x36c)][_0xa2632f(0x1eb)]>0x0)this[_0xa2632f(0x356)][_0xa2632f(0x618)](_0x2b2963['id']);}}},VisuMZ[_0x533487(0x163)][_0x533487(0x4ed)][_0x533487(0x610)]=function(_0x2e927f,_0x3891e2,_0x1d0135){const _0x8bfbd0=_0x533487;return this[_0x8bfbd0(0x435)][_0x8bfbd0(0x198)](_0x2e927f,_0x3891e2),_0x1d0135?this[_0x8bfbd0(0x435)][_0x8bfbd0(0x389)](_0x1d0135):this[_0x8bfbd0(0x435)]['execute'](),this['_interpreter'][_0x8bfbd0(0x3e5)];},VisuMZ[_0x533487(0x163)]['CustomPageConditions'][_0x533487(0x565)]=function(_0x310e51){const _0x4b83eb=_0x533487;let _0xd3edbf=![];_0x310e51[_0x4b83eb(0x36c)]=[];for(const _0x3b7b18 of _0x310e51['list']){if('bZtiK'==='vighf')return this[_0x4b83eb(0x247)](_0x11ff94(_0x29610f['$1']));else{if([0x6c,0x198][_0x4b83eb(0x1c6)](_0x3b7b18[_0x4b83eb(0x395)])){if(_0x4b83eb(0x14e)===_0x4b83eb(0x41c))return this[_0x4b83eb(0x3fa)]&&this[_0x4b83eb(0x3fa)][_0x4b83eb(0x216)]===_0x534eb0;else{const _0x510951=_0x3b7b18[_0x4b83eb(0x6cf)][0x0];if(_0x510951[_0x4b83eb(0x579)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0xd3edbf=!![];else _0x510951['match'](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0xd3edbf=![]);}}_0xd3edbf&&_0x310e51[_0x4b83eb(0x36c)][_0x4b83eb(0x618)](_0x3b7b18);}}},getSelfSwitchValue=function(_0x50c4a5,_0x44e60d,_0x27a98f){const _0x5b500e=_0x533487;let _0x23dc20=[_0x50c4a5,_0x44e60d,'Self\x20Switch\x20%1'[_0x5b500e(0x1b5)](_0x27a98f)];return typeof _0x27a98f==='string'&&(_0x23dc20=[_0x50c4a5,_0x44e60d,_0x27a98f[_0x5b500e(0x651)]()[_0x5b500e(0x1ff)]()]),$gameSelfSwitches[_0x5b500e(0x67f)](_0x23dc20);},getMapSwitchValue=function(_0x591252,_0x47b362){const _0xebfb7c=_0x533487;let _0x3bc9ad=[0x0,0x0,_0xebfb7c(0x316)[_0xebfb7c(0x1b5)](_0x591252,_0x47b362)];return $gameSelfSwitches[_0xebfb7c(0x67f)](_0x3bc9ad);},getMapVariableValue=function(_0x13d5c9,_0x504b4c){const _0x207258=_0x533487;let _0x2d04fe=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x207258(0x1b5)](_0x13d5c9,_0x504b4c)];return $gameSelfSwitches['value'](_0x2d04fe);},getSelfVariableValue=function(_0x2c2426,_0x29cd3b,_0x334d61){const _0x36d854=_0x533487,_0x225ce3=[_0x2c2426,_0x29cd3b,'Self\x20Variable\x20%1'['format'](_0x334d61)];return $gameSelfSwitches[_0x36d854(0x67f)](_0x225ce3);},setSelfSwitchValue=function(_0x2c6f80,_0x106d62,_0xa27d45,_0x410f19){const _0x580444=_0x533487;let _0x17bf8b=[_0x2c6f80,_0x106d62,_0x580444(0x24d)[_0x580444(0x1b5)](_0xa27d45)];typeof _0xa27d45===_0x580444(0x467)&&(_0x17bf8b=[_0x2c6f80,_0x106d62,_0xa27d45[_0x580444(0x651)]()[_0x580444(0x1ff)]()]),$gameSelfSwitches[_0x580444(0x575)](_0x17bf8b,_0x410f19);},setSelfVariableValue=function(_0x1cee5d,_0x12e3fb,_0x3e7a95,_0x18809f){const _0x52a748=_0x533487,_0x148412=[_0x1cee5d,_0x12e3fb,_0x52a748(0x12a)[_0x52a748(0x1b5)](_0x3e7a95)];$gameSelfSwitches[_0x52a748(0x575)](_0x148412,_0x18809f);},setMapSwitchValue=function(_0x2c7d0e,_0x155fcd,_0x4e7050){const _0x3d8489=_0x533487;let _0x1b700f=[0x0,0x0,_0x3d8489(0x316)[_0x3d8489(0x1b5)](_0x2c7d0e,_0x155fcd)];$gameSelfSwitches['setValue'](_0x1b700f,_0x4e7050);},setMapVariableValue=function(_0x2ad45c,_0x2f65d1,_0x5b0fb7){const _0x34373c=_0x533487;let _0x50505c=[0x0,0x0,_0x34373c(0x2e9)[_0x34373c(0x1b5)](_0x2ad45c,_0x2f65d1)];$gameSelfSwitches[_0x34373c(0x575)](_0x50505c,_0x5b0fb7);},DataManager[_0x533487(0x5c2)]=function(_0x2a1312){const _0x47afdb=_0x533487;if(SceneManager[_0x47afdb(0x3fa)][_0x47afdb(0x216)]===Scene_Debug)return![];return VisuMZ[_0x47afdb(0x68b)][_0x47afdb(0x1c6)](_0x2a1312);},DataManager['isAdvancedVariable']=function(_0x5965af){const _0x7f571f=_0x533487;if(SceneManager[_0x7f571f(0x3fa)][_0x7f571f(0x216)]===Scene_Debug)return![];return VisuMZ[_0x7f571f(0x580)][_0x7f571f(0x1c6)](_0x5965af);},DataManager[_0x533487(0x46d)]=function(_0x4feccb){const _0x225a73=_0x533487;if(SceneManager['_scene'][_0x225a73(0x216)]===Scene_Debug)return![];return VisuMZ[_0x225a73(0x408)][_0x225a73(0x1c6)](_0x4feccb);},DataManager[_0x533487(0x165)]=function(_0x39daf0){const _0x43ad15=_0x533487;if(SceneManager['_scene'][_0x43ad15(0x216)]===Scene_Debug)return![];return VisuMZ['SelfVariables'][_0x43ad15(0x1c6)](_0x39daf0);},DataManager[_0x533487(0x3b3)]=function(_0x1a6709){const _0x3204b3=_0x533487;if(BattleManager[_0x3204b3(0x5ed)]())return![];return VisuMZ['MapSwitches'][_0x3204b3(0x1c6)](_0x1a6709);},DataManager[_0x533487(0x5f9)]=function(_0x295844){const _0x4674f4=_0x533487;if(BattleManager[_0x4674f4(0x5ed)]())return![];return VisuMZ[_0x4674f4(0x56f)]['includes'](_0x295844);},SceneManager[_0x533487(0x564)]=function(){const _0x22e31b=_0x533487;return this[_0x22e31b(0x3fa)]&&this['_scene'][_0x22e31b(0x216)]===Scene_Map;},SceneManager[_0x533487(0x32a)]=function(){const _0x5d23d9=_0x533487;return this['_scene']&&this[_0x5d23d9(0x3fa)]instanceof Scene_Map;},VisuMZ[_0x533487(0x163)][_0x533487(0x4a5)]=Game_Temp[_0x533487(0x48b)]['setDestination'],Game_Temp[_0x533487(0x48b)][_0x533487(0x58a)]=function(_0x3c7840,_0x5796f8){const _0x4f09d1=_0x533487;if(this[_0x4f09d1(0x212)](_0x3c7840,_0x5796f8))return;VisuMZ[_0x4f09d1(0x163)][_0x4f09d1(0x4a5)][_0x4f09d1(0x1ce)](this,_0x3c7840,_0x5796f8);},Game_Temp[_0x533487(0x48b)][_0x533487(0x212)]=function(_0x363b27,_0x2764bc){const _0x3767b2=_0x533487,_0x25cd07=$gameMap[_0x3767b2(0x68f)](_0x363b27,_0x2764bc);for(const _0x30680c of _0x25cd07){if('zCCvp'==='zCCvp'){if(_0x30680c&&_0x30680c[_0x3767b2(0x3a7)]())return _0x30680c['onClickTrigger'](),!![];}else{if(_0x222a24||this[_0x3767b2(0x3a4)]()){if(_0x35c9c6>0x0&&_0xf1d3fd<0x0)return 0x1;if(_0x542756<0x0&&_0x3fa0cb<0x0)return 0x3;if(_0x4e380b>0x0&&_0x118686>0x0)return 0x7;if(_0x169721<0x0&&_0xb40b5a>0x0)return 0x9;}}}if(TouchInput[_0x3767b2(0x476)]()&&_0x25cd07[_0x3767b2(0x1eb)]>0x0){if('dCQvP'==='dCQvP')TouchInput['clear']();else{const _0x511242='%1,'[_0x3767b2(0x1b5)](_0x42c762[_0x3767b2(0x21c)]),_0x4c7a21=_0x58e347[_0x3767b2(0x125)](this[_0x3767b2(0x254)])[_0x3767b2(0x577)](_0x277bef=>_0x277bef['startsWith'](_0x511242));while(_0x4c7a21[_0x3767b2(0x1eb)]>0x0){const _0xfce5cc=_0x4c7a21[_0x3767b2(0x426)]();delete this[_0x3767b2(0x254)][_0xfce5cc];}_0x4e09cb===_0x317122[_0x3767b2(0x52d)]()&&_0x20fc39[_0x3767b2(0x3c0)]();}}return![];},Game_Temp[_0x533487(0x48b)][_0x533487(0x187)]=function(_0x1d18bf){this['_lastPluginCommandInterpreter']=_0x1d18bf;},Game_Temp['prototype'][_0x533487(0x679)]=function(){const _0x3025f9=_0x533487;return this[_0x3025f9(0x28b)];},Game_Temp[_0x533487(0x48b)][_0x533487(0x2df)]=function(_0x6765b5){this['_selfTarget']=_0x6765b5;},Game_Temp[_0x533487(0x48b)][_0x533487(0x4dc)]=function(){const _0x41b65c=_0x533487;this[_0x41b65c(0x126)]=undefined;},Game_Temp[_0x533487(0x48b)][_0x533487(0x5ba)]=function(){return this['_selfTarget'];},VisuMZ[_0x533487(0x163)]['Game_System_initialize']=Game_System[_0x533487(0x48b)][_0x533487(0x213)],Game_System[_0x533487(0x48b)][_0x533487(0x213)]=function(){const _0x2719e=_0x533487;VisuMZ[_0x2719e(0x163)]['Game_System_initialize'][_0x2719e(0x1ce)](this),this[_0x2719e(0x265)](),this[_0x2719e(0x275)]();},Game_System[_0x533487(0x48b)][_0x533487(0x265)]=function(){const _0x3a440e=_0x533487;this[_0x3a440e(0x448)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this['_EventIcons']={},this[_0x3a440e(0x14f)]=[],this[_0x3a440e(0x2e0)]={},this[_0x3a440e(0x622)]={},this[_0x3a440e(0x641)]=![],this[_0x3a440e(0x364)]=_0x3a440e(0x547);},Game_System['prototype'][_0x533487(0x348)]=function(){const _0x5b526b=_0x533487;if(this[_0x5b526b(0x448)]===undefined)this[_0x5b526b(0x265)]();if(this[_0x5b526b(0x448)][_0x5b526b(0x31e)]===undefined)this[_0x5b526b(0x265)]();return this[_0x5b526b(0x448)][_0x5b526b(0x31e)];},Game_System[_0x533487(0x48b)][_0x533487(0x6c5)]=function(_0x5b0c36){const _0x271e84=_0x533487;if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this[_0x271e84(0x448)][_0x271e84(0x31e)]===undefined)this['initEventsMoveCore']();this[_0x271e84(0x448)]['DashingEnable']=_0x5b0c36;},Game_System[_0x533487(0x48b)][_0x533487(0x5c5)]=function(){const _0x266db9=_0x533487;if(this[_0x266db9(0x448)]===undefined)this[_0x266db9(0x265)]();if(this[_0x266db9(0x448)][_0x266db9(0x4ce)]===undefined)this[_0x266db9(0x265)]();return this['_EventsMoveCoreSettings'][_0x266db9(0x4ce)];},Game_System['prototype'][_0x533487(0x4a1)]=function(_0x1e9ea6){const _0x22f533=_0x533487;if(this['_EventsMoveCoreSettings']===undefined)this[_0x22f533(0x265)]();if(this[_0x22f533(0x448)][_0x22f533(0x4ce)]===undefined)this[_0x22f533(0x265)]();this[_0x22f533(0x448)][_0x22f533(0x4ce)]=_0x1e9ea6;},Game_System['prototype'][_0x533487(0x401)]=function(){const _0x5dbe25=_0x533487;if(this['_EventsMoveCoreSettings']===undefined)this[_0x5dbe25(0x265)]();if(this[_0x5dbe25(0x448)]['VisibleEventLabels']===undefined)this[_0x5dbe25(0x265)]();return this[_0x5dbe25(0x448)][_0x5dbe25(0x49f)];},Game_System[_0x533487(0x48b)]['setEventLabelsVisible']=function(_0x3750ac){const _0x138e94=_0x533487;if(this['_EventsMoveCoreSettings']===undefined)this[_0x138e94(0x265)]();if(this[_0x138e94(0x448)][_0x138e94(0x49f)]===undefined)this[_0x138e94(0x265)]();this[_0x138e94(0x448)]['VisibleEventLabels']=_0x3750ac;},Game_System[_0x533487(0x48b)][_0x533487(0x20d)]=function(){const _0xa48d50=_0x533487;if(this['_DisablePlayerControl']===undefined){if(_0xa48d50(0x495)!=='HYQET')this[_0xa48d50(0x641)]=![];else{this[_0xa48d50(0x118)](_0x4aa91a['x'],_0x54a7f8['y'],_0x5a962e);if(_0x1e5057[_0xa48d50(0x1f7)]()&&this[_0xa48d50(0x1f7)]()){const _0x3c515a=_0x3e70fb[_0xa48d50(0x412)](this['x'],this['y'],_0x4f362d['x'],_0x5b0a63['y']);if(_0x3c515a<=0x1)this['_moveRouteIndex']++;}}}return this['_DisablePlayerControl'];},Game_System[_0x533487(0x48b)][_0x533487(0x430)]=function(_0x42a1f1){this['_DisablePlayerControl']=_0x42a1f1;},Game_System['prototype'][_0x533487(0x61f)]=function(){const _0xe98f30=_0x533487;return this[_0xe98f30(0x364)];},Game_System[_0x533487(0x48b)]['setPlayerDiagonalSetting']=function(_0x2f5765){const _0x1f1cb5=_0x533487;this[_0x1f1cb5(0x364)]=String(_0x2f5765)['toLowerCase']()['trim']();},Game_System[_0x533487(0x48b)]['getEventIconData']=function(_0x10f18b){const _0x1a3db9=_0x533487;if(this['_EventIcons']===undefined)this[_0x1a3db9(0x265)]();if(!_0x10f18b)return null;if(_0x10f18b===$gamePlayer){if(_0x1a3db9(0x11f)!==_0x1a3db9(0x5e2))return this['_EventIcons'][_0x1a3db9(0x52c)];else{const _0x2dc63b=_0x2565fd[_0x1a3db9(0x22e)](_0x2e2f3d(_0xe9dc73['$1'])/0x64*0xff);return this[_0x1a3db9(0x2bd)](_0x2dc63b[_0x1a3db9(0x311)](0x0,0xff));}}else{const _0xca6963=VisuMZ['EventsMoveCore'][_0x1a3db9(0x5eb)],_0x9808c5=_0x1a3db9(0x612)[_0x1a3db9(0x1b5)](_0x10f18b[_0x1a3db9(0x21c)],_0x10f18b[_0x1a3db9(0x17b)]);return this[_0x1a3db9(0x61d)][_0x9808c5]=this[_0x1a3db9(0x61d)][_0x9808c5]||{'iconIndex':0x0,'bufferX':_0xca6963[_0x1a3db9(0x2a4)][_0x1a3db9(0x524)],'bufferY':_0xca6963[_0x1a3db9(0x2a4)]['BufferY'],'blendMode':_0xca6963[_0x1a3db9(0x2a4)][_0x1a3db9(0x33a)]},this[_0x1a3db9(0x61d)][_0x9808c5];}},Game_System[_0x533487(0x48b)]['setEventIconData']=function(_0x20038b,_0x4bd65f,_0x3b4f8d,_0xd16b57,_0x76eaa7){const _0x3c5e0d=_0x533487;if(this[_0x3c5e0d(0x61d)]===undefined)this['initEventsMoveCore']();const _0x42093d=_0x20038b===$gamePlayer?_0x3c5e0d(0x52c):_0x3c5e0d(0x612)['format'](_0x20038b[_0x3c5e0d(0x21c)],_0x20038b[_0x3c5e0d(0x17b)]);this[_0x3c5e0d(0x61d)][_0x42093d]={'iconIndex':_0x4bd65f,'bufferX':_0x3b4f8d,'bufferY':_0xd16b57,'blendMode':_0x76eaa7};},Game_System[_0x533487(0x48b)][_0x533487(0x5c6)]=function(_0x386056,_0x5077ea,_0xe16aad,_0x593391,_0xa67445,_0x479d0d){const _0xd438ab=_0x533487;if(this[_0xd438ab(0x61d)]===undefined)this[_0xd438ab(0x265)]();const _0x4bcf63=_0xd438ab(0x612)[_0xd438ab(0x1b5)](_0x386056,_0x5077ea);this[_0xd438ab(0x61d)][_0x4bcf63]={'iconIndex':_0xe16aad,'bufferX':_0x593391,'bufferY':_0xa67445,'blendMode':_0x479d0d};},Game_System['prototype'][_0x533487(0x5b7)]=function(_0x5bc010){const _0x9bf225=_0x533487;if(this[_0x9bf225(0x61d)]===undefined)this['initEventsMoveCore']();if(!_0x5bc010)return null;if(_0x5bc010===$gamePlayer){if(_0x9bf225(0x4c9)!=='eKNLa')delete this[_0x9bf225(0x61d)]['Player'];else return this[_0x9bf225(0x19a)](_0x9bf225(0x655));}else{if(_0x9bf225(0x1df)!=='AaKWB')this[_0x9bf225(0x65e)](_0x5bc010['_mapId'],_0x5bc010[_0x9bf225(0x17b)]);else{if(_0xad01fa[_0x9bf225(0x69c)](_0x1c416e,_0x15fa90,_0x4d888f,this['_type']))return!![];if(_0x4d069f[_0x9bf225(0x392)](_0xf80739,_0x183b53,_0x69b30c,this['_type']))return![];return _0xd29938[_0x9bf225(0x163)]['Game_CharacterBase_canPass'][_0x9bf225(0x1ce)](_0x5c1b83,_0x51b99c,_0x200810,_0x1b3825);}}},Game_System[_0x533487(0x48b)][_0x533487(0x65e)]=function(_0x4d5f26,_0x403f74){const _0x10a020=_0x533487;if(this[_0x10a020(0x61d)]===undefined)this[_0x10a020(0x265)]();const _0x24dda2='Map%1-Event%2'[_0x10a020(0x1b5)](_0x4d5f26,_0x403f74);delete this['_EventIcons'][_0x24dda2];},Game_System['prototype'][_0x533487(0x4f1)]=function(_0x996307){const _0x399889=_0x533487;if(this[_0x399889(0x622)]===undefined)this['initEventsMoveCore']();if(!_0x996307)return null;const _0x5d0585=_0x399889(0x612)[_0x399889(0x1b5)](_0x996307[_0x399889(0x21c)],_0x996307['_eventId']);return this[_0x399889(0x622)][_0x5d0585];},Game_System[_0x533487(0x48b)][_0x533487(0x1ea)]=function(_0x70e3db){const _0x8feae8=_0x533487;if(this[_0x8feae8(0x622)]===undefined)this[_0x8feae8(0x265)]();if(!_0x70e3db)return;const _0x45931e='Map%1-Event%2'[_0x8feae8(0x1b5)](_0x70e3db['_mapId'],_0x70e3db[_0x8feae8(0x17b)]);this['_SavedEventLocations'][_0x45931e]={'direction':_0x70e3db['direction'](),'x':Math[_0x8feae8(0x22e)](_0x70e3db['x']),'y':Math[_0x8feae8(0x22e)](_0x70e3db['y']),'pageIndex':_0x70e3db[_0x8feae8(0x5dd)],'moveRouteIndex':_0x70e3db['_moveRouteIndex']};},Game_System[_0x533487(0x48b)][_0x533487(0x6cb)]=function(_0x37b9a4){const _0x101c73=_0x533487;if(this['_SavedEventLocations']===undefined)this[_0x101c73(0x265)]();if(!_0x37b9a4)return;this[_0x101c73(0x387)](_0x37b9a4[_0x101c73(0x21c)],_0x37b9a4[_0x101c73(0x17b)]);},Game_System['prototype']['deleteSavedEventLocationKey']=function(_0x2d5ef5,_0x52cc08){const _0x5b26a7=_0x533487;if(this[_0x5b26a7(0x622)]===undefined)this[_0x5b26a7(0x265)]();const _0x12488e='Map%1-Event%2'[_0x5b26a7(0x1b5)](_0x2d5ef5,_0x52cc08);delete this[_0x5b26a7(0x622)][_0x12488e];},Game_System[_0x533487(0x48b)][_0x533487(0x25c)]=function(_0x11c74a,_0x2631e9,_0x5b581a,_0x5637bd,_0x5cfd29,_0x3362eb,_0x52c3e1){const _0x345f3b=_0x533487;if(this[_0x345f3b(0x622)]===undefined)this['initEventsMoveCore']();const _0x194f33='Map%1-Event%2'[_0x345f3b(0x1b5)](_0x11c74a,_0x2631e9);this[_0x345f3b(0x622)][_0x194f33]={'direction':_0x5cfd29,'x':Math[_0x345f3b(0x22e)](_0x5b581a),'y':Math['round'](_0x5637bd),'pageIndex':_0x3362eb,'moveRouteIndex':_0x52c3e1};},Game_System[_0x533487(0x48b)]['getPreservedMorphEventData']=function(_0x101d3e){const _0x3d54bc=_0x533487;if(this['_PreservedEventMorphData']===undefined)this[_0x3d54bc(0x265)]();if(!_0x101d3e)return;const _0x57b8fe=_0x3d54bc(0x612)[_0x3d54bc(0x1b5)](_0x101d3e[_0x3d54bc(0x21c)],_0x101d3e['_eventId']);return this[_0x3d54bc(0x2e0)][_0x57b8fe];},Game_System[_0x533487(0x48b)][_0x533487(0x1e1)]=function(_0x327913,_0xe15be9,_0x4ccfca,_0xb50876,_0x50b5b7){const _0x23b449=_0x533487;if(this[_0x23b449(0x2e0)]===undefined)this[_0x23b449(0x265)]();const _0x2b88c3=_0x23b449(0x612)[_0x23b449(0x1b5)](_0x327913,_0xe15be9);this[_0x23b449(0x2e0)][_0x2b88c3]={'template':_0x4ccfca,'mapId':_0xb50876,'eventId':_0x50b5b7};},Game_System[_0x533487(0x48b)][_0x533487(0x1dd)]=function(_0x218be8,_0x140f77){const _0x799f0c=_0x533487;if(this[_0x799f0c(0x2e0)]===undefined)this['initEventsMoveCore']();const _0x451cb5=_0x799f0c(0x612)[_0x799f0c(0x1b5)](_0x218be8,_0x140f77);delete this[_0x799f0c(0x2e0)][_0x451cb5];},Game_System[_0x533487(0x48b)]['getMapSpawnedEventData']=function(_0x5df2eb){const _0x29b334=_0x533487;if(this[_0x29b334(0x14f)]===undefined)this[_0x29b334(0x265)]();return this[_0x29b334(0x14f)][_0x5df2eb]=this[_0x29b334(0x14f)][_0x5df2eb]||[],this[_0x29b334(0x14f)][_0x5df2eb];},Game_System[_0x533487(0x48b)]['removeTemporaryMapSpawnedEvents']=function(_0x15c6dd){const _0x2322c5=_0x533487,_0x2c5d5a=this[_0x2322c5(0x112)](_0x15c6dd);for(const _0x4fd8d5 of _0x2c5d5a){if(!_0x4fd8d5)continue;if(_0x4fd8d5[_0x2322c5(0x115)])continue;const _0x8e0eda=_0x2c5d5a[_0x2322c5(0x270)](_0x4fd8d5);_0x2c5d5a[_0x8e0eda]=null;}},Game_System[_0x533487(0x48b)][_0x533487(0x275)]=function(){const _0x39630d=_0x533487;this[_0x39630d(0x2e8)]=0x0,this[_0x39630d(0x170)]=![];},Game_System[_0x533487(0x48b)][_0x533487(0x1fc)]=function(){const _0x5eaf13=_0x533487;if(this[_0x5eaf13(0x2e8)]===undefined)this[_0x5eaf13(0x275)]();return this[_0x5eaf13(0x2e8)];},Game_System[_0x533487(0x48b)][_0x533487(0x5d0)]=function(_0x46323e){const _0x109ae2=_0x533487;if(this['_followerControlID']===undefined)this['initFollowerController']();this[_0x109ae2(0x2e8)]=_0x46323e;;},VisuMZ['EventsMoveCore']['Game_Interpreter_character']=Game_Interpreter[_0x533487(0x48b)][_0x533487(0x2cb)],Game_Interpreter[_0x533487(0x48b)]['character']=function(_0x35dd28){const _0x357955=_0x533487;if(!$gameParty[_0x357955(0x645)]()&&_0x35dd28<0x0){let _0x3deadc=$gameSystem[_0x357955(0x1fc)]();if(_0x3deadc>0x0)return $gamePlayer[_0x357955(0x1c7)]()['follower'](_0x3deadc-0x1);}return VisuMZ[_0x357955(0x163)]['Game_Interpreter_character'][_0x357955(0x1ce)](this,_0x35dd28);},Game_System[_0x533487(0x48b)][_0x533487(0x156)]=function(){const _0x47d3c3=_0x533487;if(this['_followerChaseOff']===undefined)this['initFollowerController']();return this[_0x47d3c3(0x170)];},Game_System['prototype'][_0x533487(0x585)]=function(_0x9c1083){const _0x34e2cd=_0x533487;if(this[_0x34e2cd(0x170)]===undefined)this[_0x34e2cd(0x275)]();this[_0x34e2cd(0x170)]=_0x9c1083;;},VisuMZ[_0x533487(0x163)][_0x533487(0x6a9)]=Game_Followers[_0x533487(0x48b)][_0x533487(0x183)],Game_Followers['prototype'][_0x533487(0x183)]=function(){const _0x4aaf49=_0x533487;if($gameSystem[_0x4aaf49(0x156)]())return;VisuMZ[_0x4aaf49(0x163)][_0x4aaf49(0x6a9)][_0x4aaf49(0x1ce)](this);},VisuMZ[_0x533487(0x163)][_0x533487(0x457)]=Game_Timer[_0x533487(0x48b)][_0x533487(0x213)],Game_Timer[_0x533487(0x48b)][_0x533487(0x213)]=function(){const _0x465d6c=_0x533487;VisuMZ[_0x465d6c(0x163)]['Game_Timer_initialize'][_0x465d6c(0x1ce)](this),this[_0x465d6c(0x265)]();},Game_Timer[_0x533487(0x48b)][_0x533487(0x265)]=function(){const _0x7c67a3=_0x533487;this[_0x7c67a3(0x5f6)]=![],this[_0x7c67a3(0x67d)]=-0x1,this['_expireCommonEvent']=0x0;},Game_Timer['prototype']['update']=function(_0x1115d0){const _0x14fb73=_0x533487;if(!_0x1115d0)return;if(!this[_0x14fb73(0x695)])return;if(this[_0x14fb73(0x5f6)])return;if(this['_frames']<=0x0)return;if(this['_speed']===undefined)this[_0x14fb73(0x265)]();this[_0x14fb73(0x6aa)]+=this[_0x14fb73(0x67d)],this[_0x14fb73(0x6aa)]<=0x0&&this[_0x14fb73(0x1d9)]();},VisuMZ[_0x533487(0x163)]['Game_Timer_start']=Game_Timer[_0x533487(0x48b)]['start'],Game_Timer[_0x533487(0x48b)][_0x533487(0x337)]=function(_0x1eb5e6){const _0x339b99=_0x533487;VisuMZ[_0x339b99(0x163)][_0x339b99(0x514)]['call'](this,_0x1eb5e6);if(this[_0x339b99(0x5f6)]===undefined)this[_0x339b99(0x265)]();this[_0x339b99(0x5f6)]=![];},VisuMZ[_0x533487(0x163)][_0x533487(0x2ae)]=Game_Timer['prototype'][_0x533487(0x532)],Game_Timer[_0x533487(0x48b)][_0x533487(0x532)]=function(){const _0x2cda52=_0x533487;VisuMZ[_0x2cda52(0x163)][_0x2cda52(0x2ae)][_0x2cda52(0x1ce)](this);if(this[_0x2cda52(0x5f6)]===undefined)this['initEventsMoveCore']();this[_0x2cda52(0x5f6)]=![];},Game_Timer[_0x533487(0x48b)][_0x533487(0x491)]=function(){const _0x23b283=_0x533487;if(this[_0x23b283(0x6aa)]<=0x0)return;this[_0x23b283(0x5f6)]=!![],this[_0x23b283(0x695)]=!![];},Game_Timer[_0x533487(0x48b)][_0x533487(0x691)]=function(){const _0x285391=_0x533487;if(this[_0x285391(0x6aa)]<=0x0)return;this['_paused']=![],this[_0x285391(0x695)]=!![];},Game_Timer['prototype'][_0x533487(0x1af)]=function(_0x35e7a4){const _0x2c5bc1=_0x533487;this['_frames']=this[_0x2c5bc1(0x6aa)]||0x0,this[_0x2c5bc1(0x6aa)]+=_0x35e7a4,this['_working']=!![],this['_frames']=Math[_0x2c5bc1(0x381)](0x1,this['_frames']);},Game_Timer['prototype'][_0x533487(0x223)]=function(_0x23bf6){const _0x2751ff=_0x533487;this[_0x2751ff(0x6aa)]=this['_frames']||0x0,this[_0x2751ff(0x6aa)]=_0x23bf6,this[_0x2751ff(0x695)]=!![],this[_0x2751ff(0x6aa)]=Math[_0x2751ff(0x381)](0x1,this[_0x2751ff(0x6aa)]);},Game_Timer[_0x533487(0x48b)][_0x533487(0x413)]=function(_0x646fe3){const _0x4ae89f=_0x533487;this[_0x4ae89f(0x67d)]=_0x646fe3,this[_0x4ae89f(0x695)]=!![];if(_0x646fe3>0x0){if(_0x4ae89f(0x358)!==_0x4ae89f(0x507))this[_0x4ae89f(0x6aa)]=Math['max'](this['_frames'],0x1);else{const _0x1e57a9=_0x1eb5d8[_0x4ae89f(0x431)](_0x41218d(_0x1c3965['$1']));return this[_0x4ae89f(0x390)](_0x1e57a9);}}},Game_Timer['prototype'][_0x533487(0x516)]=function(_0x4fae7f){const _0x16b112=_0x533487;if(this[_0x16b112(0x40d)]===undefined)this['initEventsMoveCore']();this['_expireCommonEvent']=_0x4fae7f;},VisuMZ[_0x533487(0x163)][_0x533487(0x1e6)]=Game_Timer['prototype'][_0x533487(0x1d9)],Game_Timer[_0x533487(0x48b)][_0x533487(0x1d9)]=function(){const _0xc84ac9=_0x533487;if(this['_expireCommonEvent']===undefined)this[_0xc84ac9(0x265)]();if(this[_0xc84ac9(0x40d)])_0xc84ac9(0x3ae)!==_0xc84ac9(0x25b)?$gameTemp['reserveCommonEvent'](this[_0xc84ac9(0x40d)]):(_0xf7f917[_0xc84ac9(0x4d9)](_0x369d23,_0x10aee3),_0x2aa9cb['despawnRegions'](_0x5c1ce0[_0xc84ac9(0x69e)]));else{if(_0xc84ac9(0x151)!==_0xc84ac9(0x60e))VisuMZ['EventsMoveCore'][_0xc84ac9(0x1e6)]['call'](this);else{if(_0x2a962d[_0xc84ac9(0x579)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x2dc26b=_0x104620(_0x1f2487['$1'])[_0xc84ac9(0x30a)]()[_0xc84ac9(0x1ff)](),_0x33dd4d=_0x56a473(_0x1ee6ba['$2']);this[_0xc84ac9(0x463)][_0x2dc26b]=_0x33dd4d;}}}},VisuMZ['EventsMoveCore'][_0x533487(0x506)]=Game_Message[_0x533487(0x48b)][_0x533487(0x384)],Game_Message[_0x533487(0x48b)][_0x533487(0x384)]=function(_0x23411a){const _0x386ce2=_0x533487;VisuMZ[_0x386ce2(0x163)]['Game_Message_add']['call'](this,_0x23411a),this['_selfEvent']=$gameTemp[_0x386ce2(0x5ba)]();},Game_Message[_0x533487(0x48b)][_0x533487(0x2e5)]=function(){const _0x116806=_0x533487;$gameTemp[_0x116806(0x2df)](this[_0x116806(0x3f4)]);},VisuMZ['EventsMoveCore']['Game_Switches_value']=Game_Switches[_0x533487(0x48b)][_0x533487(0x67f)],Game_Switches['prototype'][_0x533487(0x67f)]=function(_0x7fe4eb){const _0x7c0035=_0x533487;if(DataManager['isAdvancedSwitch'](_0x7fe4eb))return!!this[_0x7c0035(0x148)](_0x7fe4eb);else{if(DataManager['isSelfSwitch'](_0x7fe4eb))return!!this[_0x7c0035(0x1b7)](_0x7fe4eb);else return DataManager[_0x7c0035(0x3b3)](_0x7fe4eb)?!!this[_0x7c0035(0x494)](_0x7fe4eb):VisuMZ[_0x7c0035(0x163)][_0x7c0035(0x211)]['call'](this,_0x7fe4eb);}},Game_Switches['advancedFunc']={},Game_Switches[_0x533487(0x48b)][_0x533487(0x148)]=function(_0x4c7a46){const _0x77f3cc=_0x533487;if(!Game_Switches[_0x77f3cc(0x3a8)][_0x4c7a46]){$dataSystem[_0x77f3cc(0x63c)][_0x4c7a46][_0x77f3cc(0x579)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x1e7e9a=_0x77f3cc(0x522)[_0x77f3cc(0x1b5)](String(RegExp['$1']));Game_Switches[_0x77f3cc(0x3a8)][_0x4c7a46]=new Function(_0x77f3cc(0x6c4),_0x1e7e9a);}const _0x4518d7=$gameTemp[_0x77f3cc(0x5ba)]()||this;return Game_Switches[_0x77f3cc(0x3a8)][_0x4c7a46]['call'](_0x4518d7,_0x4c7a46);},Game_Switches[_0x533487(0x48b)][_0x533487(0x1b7)]=function(_0x48a70d){const _0x323805=_0x533487,_0x190545=$gameTemp[_0x323805(0x5ba)]()||this;if(_0x190545[_0x323805(0x216)]!==Game_Event)return VisuMZ[_0x323805(0x163)][_0x323805(0x211)]['call'](this,_0x48a70d);else{if(_0x323805(0x4a6)!==_0x323805(0x4a6))this[_0x323805(0x3d1)]();else{const _0x47f8f0=[_0x190545['_mapId'],_0x190545[_0x323805(0x17b)],_0x323805(0x24d)[_0x323805(0x1b5)](_0x48a70d)];return $gameSelfSwitches['value'](_0x47f8f0);}}},Game_Switches[_0x533487(0x48b)][_0x533487(0x494)]=function(_0x1b087c){const _0x2ba1c3=_0x533487,_0x7b721=$gameMap?$gameMap['mapId']():0x0,_0x56902b=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x2ba1c3(0x1b5)](_0x7b721,_0x1b087c)];return $gameSelfSwitches[_0x2ba1c3(0x67f)](_0x56902b);},VisuMZ['EventsMoveCore']['Game_Switches_setValue']=Game_Switches[_0x533487(0x48b)]['setValue'],Game_Switches[_0x533487(0x48b)][_0x533487(0x575)]=function(_0x336e01,_0x3a8a18){const _0x5680fd=_0x533487;if(DataManager[_0x5680fd(0x46d)](_0x336e01))this[_0x5680fd(0x350)](_0x336e01,_0x3a8a18);else DataManager['isMapSwitch'](_0x336e01)?this[_0x5680fd(0x1d3)](_0x336e01,_0x3a8a18):VisuMZ[_0x5680fd(0x163)]['Game_Switches_setValue'][_0x5680fd(0x1ce)](this,_0x336e01,_0x3a8a18);},Game_Switches[_0x533487(0x48b)][_0x533487(0x350)]=function(_0x56b721,_0x173720){const _0x31b4c6=_0x533487,_0x2578ad=$gameTemp['getSelfTarget']()||this;if(_0x2578ad[_0x31b4c6(0x216)]!==Game_Event)_0x31b4c6(0x2d0)===_0x31b4c6(0x13f)?_0x460c10['EventsMoveCore'][_0x31b4c6(0x4ed)]['loadCPC'](_0xae81fb):VisuMZ[_0x31b4c6(0x163)]['Game_Switches_setValue'][_0x31b4c6(0x1ce)](this,_0x56b721,_0x173720);else{if('YdPVz'!==_0x31b4c6(0x181)){let _0x5d1fb7=[0x0,0x0,_0x31b4c6(0x316)[_0x31b4c6(0x1b5)](_0x1f4dca,_0x599b7c)];_0x41cd6a[_0x31b4c6(0x575)](_0x5d1fb7,_0x4d03a3);}else{const _0x18c2f4=[_0x2578ad[_0x31b4c6(0x21c)],_0x2578ad[_0x31b4c6(0x17b)],_0x31b4c6(0x24d)[_0x31b4c6(0x1b5)](_0x56b721)];$gameSelfSwitches[_0x31b4c6(0x575)](_0x18c2f4,_0x173720);}}},Game_Switches[_0x533487(0x48b)][_0x533487(0x1d3)]=function(_0x445b88,_0x565332){const _0x2afac5=_0x533487,_0x5c3d45=$gameMap?$gameMap[_0x2afac5(0x52d)]():0x0,_0x38c45a=[0x0,0x0,_0x2afac5(0x316)[_0x2afac5(0x1b5)](_0x5c3d45,_0x445b88)];return $gameSelfSwitches['setValue'](_0x38c45a,_0x565332);},VisuMZ[_0x533487(0x163)]['Game_Variables_value']=Game_Variables[_0x533487(0x48b)][_0x533487(0x67f)],Game_Variables[_0x533487(0x48b)]['value']=function(_0x4d622f){const _0x3e45c5=_0x533487;if(DataManager[_0x3e45c5(0x6a5)](_0x4d622f))return this[_0x3e45c5(0x148)](_0x4d622f);else{if(DataManager[_0x3e45c5(0x165)](_0x4d622f))return this[_0x3e45c5(0x1b7)](_0x4d622f);else{if(DataManager[_0x3e45c5(0x5f9)](_0x4d622f)){if(_0x3e45c5(0x1c1)===_0x3e45c5(0x4e7))_0x39aeb9[_0x3e45c5(0x55b)]()?this[_0x3e45c5(0x49d)](_0x5a00b0):_0x50e61d['EventsMoveCore'][_0x3e45c5(0x320)]['call'](this,_0x19b0e7);else return this['mapValue'](_0x4d622f);}else{if(_0x3e45c5(0x235)!==_0x3e45c5(0x186))return VisuMZ[_0x3e45c5(0x163)]['Game_Variables_value'][_0x3e45c5(0x1ce)](this,_0x4d622f);else this[_0x3e45c5(0x1e5)]=this[_0x3e45c5(0x4cb)]['duration'],this['_wholeDuration']=this['_settings'][_0x3e45c5(0x515)],this['z']=0x6,this[_0x3e45c5(0x29f)]=this[_0x3e45c5(0x4cb)]['fadeDuration'][_0x3e45c5(0x35f)],this[_0x3e45c5(0x29f)]>0x0&&this['_fadeInDuration']>=_0x2380ba[_0x3e45c5(0x3b8)](this[_0x3e45c5(0x1e5)]*0.48)&&(this['_fadeInDuration']=_0x4b47c6[_0x3e45c5(0x3b8)](this['_duration']*0.48)),this[_0x3e45c5(0x3dc)]=this[_0x3e45c5(0x29f)]>0x0?0x0:0xff,this[_0x3e45c5(0x6b4)]=this['_settings'][_0x3e45c5(0x632)][_0x3e45c5(0x192)],this[_0x3e45c5(0x6b4)]>0x0&&this[_0x3e45c5(0x6b4)]>=_0x461772['floor'](this['_duration']*0.48)&&(this[_0x3e45c5(0x6b4)]=_0x256d6a['floor'](this[_0x3e45c5(0x1e5)]*0.48)),this[_0x3e45c5(0x20c)]=this[_0x3e45c5(0x6b4)],this['_startX']=this[_0x3e45c5(0x4cb)][_0x3e45c5(0x67c)]['x'],this['_startY']=this[_0x3e45c5(0x4cb)][_0x3e45c5(0x67c)]['y'],this['_targetX']=this[_0x3e45c5(0x4cb)][_0x3e45c5(0x296)]['x'],this[_0x3e45c5(0x27f)]=this['_settings']['endOffset']['y'],this[_0x3e45c5(0x1da)]=this[_0x3e45c5(0x584)],this[_0x3e45c5(0x4a2)]=this['_startY'],this[_0x3e45c5(0x50c)]=this[_0x3e45c5(0x4cb)][_0x3e45c5(0x3f2)]['x'],this[_0x3e45c5(0x241)]=this['_settings'][_0x3e45c5(0x3f2)]['y'],this[_0x3e45c5(0x104)]=this[_0x3e45c5(0x4cb)][_0x3e45c5(0x159)]['x'],this['_targetScaleY']=this[_0x3e45c5(0x4cb)][_0x3e45c5(0x159)]['y'],this['_startAngle']=-this[_0x3e45c5(0x4cb)][_0x3e45c5(0x5cb)][_0x3e45c5(0x337)],this[_0x3e45c5(0x2b8)]=-this['_settings']['angle'][_0x3e45c5(0x1e9)],this[_0x3e45c5(0x227)]=-this['_settings'][_0x3e45c5(0x464)][_0x3e45c5(0x102)],this[_0x3e45c5(0x2e6)]=0x0;}}}},Game_Variables[_0x533487(0x3a8)]={},Game_Variables['prototype'][_0x533487(0x148)]=function(_0x2361c5){const _0x50d490=_0x533487;if(!Game_Variables[_0x50d490(0x3a8)][_0x2361c5]){$dataSystem[_0x50d490(0x2c0)][_0x2361c5][_0x50d490(0x579)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x51ed0b=_0x50d490(0x522)[_0x50d490(0x1b5)](String(RegExp['$1']));Game_Variables[_0x50d490(0x3a8)][_0x2361c5]=new Function(_0x50d490(0x3c6),_0x51ed0b);}const _0x19045c=$gameTemp[_0x50d490(0x5ba)]()||this;return Game_Variables['advancedFunc'][_0x2361c5]['call'](_0x19045c,_0x2361c5);},Game_Variables[_0x533487(0x48b)][_0x533487(0x1b7)]=function(_0x59ecc6){const _0x3154aa=_0x533487,_0x3f0223=$gameTemp['getSelfTarget']()||this;if(_0x3f0223['constructor']!==Game_Event){if(_0x3154aa(0x496)!==_0x3154aa(0x62b))return VisuMZ[_0x3154aa(0x163)]['Game_Variables_value'][_0x3154aa(0x1ce)](this,_0x59ecc6);else{this['_moveSynch']['timer']=this[_0x3154aa(0x4b5)]['timer']||0x0,this[_0x3154aa(0x4b5)][_0x3154aa(0x29a)]--;if(this['_moveSynch'][_0x3154aa(0x29a)]>0x0)return;this[_0x3154aa(0x4b5)][_0x3154aa(0x29a)]=this[_0x3154aa(0x4b5)]['delay'],this[_0x3154aa(0x6c0)]();}}else{const _0x534b81=[_0x3f0223[_0x3154aa(0x21c)],_0x3f0223[_0x3154aa(0x17b)],_0x3154aa(0x12a)[_0x3154aa(0x1b5)](_0x59ecc6)];return $gameSelfSwitches[_0x3154aa(0x67f)](_0x534b81);}},Game_Variables[_0x533487(0x48b)][_0x533487(0x494)]=function(_0x5017b1){const _0x3f922a=_0x533487,_0x578664=$gameMap?$gameMap[_0x3f922a(0x52d)]():0x0,_0xd2431c=[0x0,0x0,_0x3f922a(0x2e9)[_0x3f922a(0x1b5)](_0x578664,_0x5017b1)];return $gameSelfSwitches[_0x3f922a(0x67f)](_0xd2431c)||0x0;},VisuMZ['EventsMoveCore'][_0x533487(0x263)]=Game_Variables[_0x533487(0x48b)][_0x533487(0x575)],Game_Variables[_0x533487(0x48b)][_0x533487(0x575)]=function(_0x47eb2d,_0x4824a2){const _0x3eba90=_0x533487;if(DataManager[_0x3eba90(0x165)](_0x47eb2d))this[_0x3eba90(0x350)](_0x47eb2d,_0x4824a2);else{if(DataManager[_0x3eba90(0x5f9)](_0x47eb2d))this['setMapValue'](_0x47eb2d,_0x4824a2);else{if(_0x3eba90(0x456)!=='OQrja')VisuMZ[_0x3eba90(0x163)][_0x3eba90(0x263)][_0x3eba90(0x1ce)](this,_0x47eb2d,_0x4824a2);else return this[_0x3eba90(0x61d)][_0x3eba90(0x52c)];}}},Game_Variables[_0x533487(0x48b)][_0x533487(0x350)]=function(_0x551646,_0x5bc5a6){const _0x34fbfd=_0x533487,_0x585580=$gameTemp['getSelfTarget']()||this;if(_0x585580['constructor']!==Game_Event)VisuMZ[_0x34fbfd(0x163)]['Game_Variables_setValue'][_0x34fbfd(0x1ce)](this,_0x551646,_0x5bc5a6);else{const _0x11e9ef=[_0x585580[_0x34fbfd(0x21c)],_0x585580[_0x34fbfd(0x17b)],_0x34fbfd(0x12a)['format'](_0x551646)];$gameSelfSwitches[_0x34fbfd(0x575)](_0x11e9ef,_0x5bc5a6);}},Game_Variables['prototype'][_0x533487(0x1d3)]=function(_0x4b8e6d,_0x60dbab){const _0xa06eac=_0x533487,_0x109227=$gameMap?$gameMap['mapId']():0x0,_0x51aa56=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0xa06eac(0x1b5)](_0x109227,_0x4b8e6d)];$gameSelfSwitches[_0xa06eac(0x575)](_0x51aa56,_0x60dbab);},VisuMZ[_0x533487(0x163)][_0x533487(0x21a)]=Game_SelfSwitches['prototype']['value'],Game_SelfSwitches[_0x533487(0x48b)][_0x533487(0x67f)]=function(_0x363ed1){const _0x3b0e05=_0x533487;if(_0x363ed1[0x2][_0x3b0e05(0x579)](/(?:SELF|MAP)/i))return this[_0x3b0e05(0x1b7)](_0x363ed1);else{if(_0x3b0e05(0x5d6)===_0x3b0e05(0x5d6)){return VisuMZ['EventsMoveCore'][_0x3b0e05(0x21a)][_0x3b0e05(0x1ce)](this,_0x363ed1);;}else{let _0x5b9390=this[_0x3b0e05(0x19b)];return this[_0x3b0e05(0x182)]()&&(_0x5b9390+=this[_0x3b0e05(0x10e)]()),this[_0x3b0e05(0x587)](_0x5b9390);}}},Game_SelfSwitches[_0x533487(0x48b)]['selfValue']=function(_0x1267c1){const _0x10ee35=_0x533487;return _0x1267c1[0x2][_0x10ee35(0x579)](/VAR/i)?this[_0x10ee35(0x254)][_0x1267c1]||0x0:!!this[_0x10ee35(0x254)][_0x1267c1];},VisuMZ[_0x533487(0x163)][_0x533487(0x13a)]=Game_SelfSwitches['prototype'][_0x533487(0x575)],Game_SelfSwitches['prototype'][_0x533487(0x575)]=function(_0x4e12bf,_0x57b2b1){const _0x35989e=_0x533487;if(_0x4e12bf[0x2]['match'](/(?:SELF|MAP)/i)){if(_0x35989e(0x143)===_0x35989e(0x458)){let _0x58f137=_0x17cd81(_0x456500['$1'])[_0x35989e(0x1ff)]();this[_0x35989e(0x26e)][_0x35989e(0x43a)]=_0x58f137,this[_0x35989e(0x26e)][_0x35989e(0x5b2)]=_0x58f137;}else this[_0x35989e(0x350)](_0x4e12bf,_0x57b2b1);}else VisuMZ['EventsMoveCore'][_0x35989e(0x13a)]['call'](this,_0x4e12bf,_0x57b2b1);},Game_SelfSwitches[_0x533487(0x48b)]['setSelfValue']=function(_0x422cec,_0x1ae174){const _0x560629=_0x533487;this[_0x560629(0x254)][_0x422cec]=_0x422cec[0x2]['match'](/VAR/i)?_0x1ae174:!!_0x1ae174,this[_0x560629(0x1ab)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x357)]=Scene_Map[_0x533487(0x48b)][_0x533487(0x10d)],Scene_Map[_0x533487(0x48b)]['createDisplayObjects']=function(){const _0x32d2d7=_0x533487;$gameMap['resetExitSelfSwitches'](),VisuMZ['EventsMoveCore']['Scene_Map_createDisplayObjects'][_0x32d2d7(0x1ce)](this);},Game_Map[_0x533487(0x48b)]['resetExitSelfSwitches']=function(){const _0x21277e=_0x533487;this[_0x21277e(0x14a)]=this[_0x21277e(0x52d)](),this[_0x21277e(0x57a)]=undefined;const _0x237b54=this[_0x21277e(0x4d5)]();for(const _0x587cfb of _0x237b54){if(_0x587cfb)$gameSelfSwitches[_0x21277e(0x1b3)](_0x587cfb);}},Game_SelfSwitches[_0x533487(0x48b)][_0x533487(0x1b3)]=function(_0x458301){const _0x3b390b=_0x533487;if(!_0x458301)return;if(!_0x458301[_0x3b390b(0x431)]())return;const _0x1915f8=_0x458301[_0x3b390b(0x431)]()[_0x3b390b(0x249)]||'';if(_0x1915f8['match'](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){if(_0x3b390b(0x57b)===_0x3b390b(0x4c6)){if(_0x18f410)_0x417806[_0x3b390b(0x2a5)]=![];this[_0x3b390b(0x49d)](_0x4278c2),this['_moveRouteIndex']-=0x1;}else{const _0x588c89=_0x3b390b(0x658)[_0x3b390b(0x1b5)]($gameMap[_0x3b390b(0x21c)],_0x458301[_0x3b390b(0x17b)]),_0xa1f8cf=Object[_0x3b390b(0x125)](this[_0x3b390b(0x254)])[_0x3b390b(0x577)](_0x29146e=>_0x29146e[_0x3b390b(0x65a)](_0x588c89));while(_0xa1f8cf['length']>0x0){const _0x5e8558=_0xa1f8cf[_0x3b390b(0x426)]();delete this[_0x3b390b(0x254)][_0x5e8558];}}}},Game_SelfSwitches[_0x533487(0x48b)][_0x533487(0x4a3)]=function(_0x21930b){const _0x49d027=_0x533487,_0x32148f=_0x49d027(0x46b)[_0x49d027(0x1b5)]($gameMap[_0x49d027(0x21c)]),_0x172ed7=Object[_0x49d027(0x125)](this[_0x49d027(0x254)])[_0x49d027(0x577)](_0x6ed74b=>_0x6ed74b['startsWith'](_0x32148f));while(_0x172ed7['length']>0x0){const _0x2e58c3=_0x172ed7['shift']();delete this['_data'][_0x2e58c3];}_0x21930b===$gameMap[_0x49d027(0x52d)]()&&$gameMap[_0x49d027(0x3c0)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x59b)]=Game_Enemy['prototype'][_0x533487(0x32c)],Game_Enemy['prototype']['meetsSwitchCondition']=function(_0x1ff1b3){const _0xf64f84=_0x533487;$gameTemp[_0xf64f84(0x2df)](this);const _0x591991=VisuMZ[_0xf64f84(0x163)][_0xf64f84(0x59b)][_0xf64f84(0x1ce)](this,_0x1ff1b3);return $gameTemp['clearSelfTarget'](),_0x591991;},VisuMZ['EventsMoveCore'][_0x533487(0x46c)]=Game_Troop[_0x533487(0x48b)][_0x533487(0x144)],Game_Troop[_0x533487(0x48b)][_0x533487(0x144)]=function(_0xa6b9b6){const _0x568ba3=_0x533487;$gameTemp[_0x568ba3(0x2df)](this);const _0x54a407=VisuMZ['EventsMoveCore'][_0x568ba3(0x46c)][_0x568ba3(0x1ce)](this,_0xa6b9b6);return $gameTemp[_0x568ba3(0x4dc)](),_0x54a407;},VisuMZ['EventsMoveCore']['Game_Map_setup']=Game_Map[_0x533487(0x48b)][_0x533487(0x198)],Game_Map[_0x533487(0x48b)][_0x533487(0x198)]=function(_0x536640){const _0x15185a=_0x533487;this[_0x15185a(0x414)](_0x536640),this[_0x15185a(0x304)](),VisuMZ[_0x15185a(0x163)][_0x15185a(0x30e)][_0x15185a(0x1ce)](this,_0x536640),this[_0x15185a(0x304)](),this[_0x15185a(0x363)](),this[_0x15185a(0x36d)](),this[_0x15185a(0x6a4)](),this[_0x15185a(0x398)](),this['setupPlayerVisibilityOverrides'](),this[_0x15185a(0x534)](),this[_0x15185a(0x306)](),this[_0x15185a(0x304)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x4a4)]=Game_Map[_0x533487(0x48b)][_0x533487(0x667)],Game_Map[_0x533487(0x48b)]['setupEvents']=function(){const _0xa98f24=_0x533487;VisuMZ['EventsMoveCore']['Game_Map_setupEvents']['call'](this),this[_0xa98f24(0x286)]();},Game_Map['_eventOverloadThreshold']=0xc8,Game_Map[_0x533487(0x48b)]['determineEventOverload']=function(){const _0x3ffc45=_0x533487,_0x4cb8f6=Game_Map[_0x3ffc45(0x45a)];this['_eventOverload']=this[_0x3ffc45(0x4d5)]()[_0x3ffc45(0x1eb)]>_0x4cb8f6;if(this[_0x3ffc45(0x69f)]&&$gameTemp[_0x3ffc45(0x53a)]()){}},Game_Map['prototype']['isEventOverloaded']=function(){const _0x16a5a9=_0x533487;return this[_0x16a5a9(0x69f)];},Game_Map['prototype'][_0x533487(0x304)]=function(){const _0x4b9dcd=_0x533487;this[_0x4b9dcd(0x57a)]=undefined;},Game_Map[_0x533487(0x48b)]['setupDiagonalSupport']=function(){const _0x29e92f=_0x533487;this[_0x29e92f(0x6d1)]=VisuMZ['EventsMoveCore'][_0x29e92f(0x5eb)][_0x29e92f(0x3ef)][_0x29e92f(0x233)];const _0x35f37f=$dataMap['note']||'';if(_0x35f37f[_0x29e92f(0x579)](/<DIAGONAL MOVEMENT: ON>/i))this[_0x29e92f(0x6d1)]=!![];else _0x35f37f[_0x29e92f(0x579)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x29e92f(0x6d1)]=![]);},Game_Map['MOBILE_DIAGONAL_PATHFINDING']=VisuMZ[_0x533487(0x163)][_0x533487(0x5eb)][_0x533487(0x3ef)][_0x533487(0x1cc)]??![],Game_Map[_0x533487(0x48b)][_0x533487(0x55b)]=function(){const _0x245d7a=_0x533487;if(Utils['isMobileDevice']()){if(_0x245d7a(0x1ee)===_0x245d7a(0x1ee)){if(!Game_Map['MOBILE_DIAGONAL_PATHFINDING'])return![];}else return this[_0x245d7a(0x364)];}const _0x55af02=$gameSystem[_0x245d7a(0x61f)]();if(_0x55af02===_0x245d7a(0x1d4))return!![];if(_0x55af02===_0x245d7a(0x6a2))return![];if(this['_diagonalSupport']===undefined)this['setupDiagonalSupport']();return this[_0x245d7a(0x6d1)];},Game_Map[_0x533487(0x48b)][_0x533487(0x510)]=function(_0x3b54ce,_0x59f97c){const _0x4fe428=_0x533487;if([0x1,0x4,0x7]['includes'](_0x59f97c))_0x3b54ce-=0x1;if([0x3,0x6,0x9][_0x4fe428(0x1c6)](_0x59f97c))_0x3b54ce+=0x1;return this[_0x4fe428(0x542)](_0x3b54ce);},Game_Map[_0x533487(0x48b)]['roundYWithDirection']=function(_0x2c1ed3,_0x3bb6f2){const _0x113a8=_0x533487;if([0x1,0x2,0x3]['includes'](_0x3bb6f2))_0x2c1ed3+=0x1;if([0x7,0x8,0x9]['includes'](_0x3bb6f2))_0x2c1ed3-=0x1;return this[_0x113a8(0x49c)](_0x2c1ed3);},Game_Map[_0x533487(0x48b)][_0x533487(0x3bd)]=function(_0x590073,_0x1b01f8,_0x2464d3,_0x252ccc){const _0x10fbab=_0x533487;return Math[_0x10fbab(0x381)](Math[_0x10fbab(0x353)](this[_0x10fbab(0x5ff)](_0x590073,_0x2464d3)),Math[_0x10fbab(0x353)](this[_0x10fbab(0x349)](_0x1b01f8,_0x252ccc)));},Game_Map['prototype']['setupRegionRestrictions']=function(){const _0x4c63be=_0x533487,_0x592866=VisuMZ['EventsMoveCore'][_0x4c63be(0x5eb)]['Region'],_0x1b64e3={},_0xcd77a6=[_0x4c63be(0x588),_0x4c63be(0x500),_0x4c63be(0x264)],_0x1a6e24=[_0x4c63be(0x63d),_0x4c63be(0x1a9),_0x4c63be(0x52c),'Event',_0x4c63be(0x4b7),'Boat',_0x4c63be(0x432),'Airship'];for(const _0x503c9f of _0xcd77a6){for(const _0x2009d7 of _0x1a6e24){if('kwvqZ'===_0x4c63be(0x61c)){const _0x41fb11=this[_0x4c63be(0x4d0)]+(this[_0x4c63be(0x1ec)][_0x4c63be(0x26e)][_0x4c63be(0x561)]||0x0);this[_0x4c63be(0x684)](_0x41fb11);}else{const _0x2b9b99=_0x4c63be(0x4ee)[_0x4c63be(0x1b5)](_0x2009d7,_0x503c9f);_0x592866[_0x2b9b99]&&(_0x1b64e3[_0x2b9b99]=_0x592866[_0x2b9b99][_0x4c63be(0x368)](0x0));}}}const _0x39a342=$dataMap['note']||'',_0x4e9102=_0x39a342[_0x4c63be(0x579)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x4e9102)for(const _0x5a528c of _0x4e9102){_0x5a528c[_0x4c63be(0x579)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0xe4e303=String(RegExp['$1'])[_0x4c63be(0x30a)]()[_0x4c63be(0x1ff)](),_0x4947a4=String(RegExp['$2'])[_0x4c63be(0x30a)]()[_0x4c63be(0x1ff)]();const _0x150050=JSON[_0x4c63be(0x469)]('['+RegExp['$3']['match'](/\d+/g)+']');_0xe4e303=_0xe4e303[_0x4c63be(0x4c8)](0x0)[_0x4c63be(0x651)]()+_0xe4e303[_0x4c63be(0x368)](0x1),_0x4947a4=_0x4947a4['charAt'](0x0)[_0x4c63be(0x651)]()+_0x4947a4[_0x4c63be(0x368)](0x1);const _0x31db38=_0x4c63be(0x4ee)[_0x4c63be(0x1b5)](_0xe4e303,_0x4947a4);if(_0x1b64e3[_0x31db38])_0x1b64e3[_0x31db38]=_0x1b64e3[_0x31db38]['concat'](_0x150050);}this[_0x4c63be(0x42f)]=_0x1b64e3;},Game_Map['prototype'][_0x533487(0x69c)]=function(_0x21a18c,_0x2f0e56,_0x4661dd,_0x474e72){const _0x9e0a07=_0x533487,_0x2f25ba=this[_0x9e0a07(0x510)](_0x21a18c,_0x4661dd),_0x22028d=this[_0x9e0a07(0x56c)](_0x2f0e56,_0x4661dd),_0x57215e=this['regionId'](_0x2f25ba,_0x22028d),_0xde1109=this[_0x9e0a07(0x42f)];if(_0xde1109[_0x9e0a07(0x108)][_0x9e0a07(0x1c6)](_0x57215e)){if('hsvvx'===_0x9e0a07(0x386))return!![];else{if(!this[_0x9e0a07(0x53c)]())return;const _0x26fce6=this[_0x9e0a07(0x53c)]()[_0x9e0a07(0x577)](_0x2874d2=>_0x2874d2['code']!==0x6c&&_0x2874d2[_0x9e0a07(0x395)]!==0x198);_0x26fce6[_0x9e0a07(0x1eb)]>0x1&&(this[_0x9e0a07(0x193)]=!![],this['isTriggerIn']([0x0,0x1,0x2])&&this[_0x9e0a07(0x3d9)]());}}else{if(_0x474e72===_0x9e0a07(0x454)){if(_0x9e0a07(0x569)===_0x9e0a07(0x20a)){const _0x53e034=_0x3eef88&&this['_eventId']?_0x5a3d2a['event'](this[_0x9e0a07(0x17b)]):null;_0x36a5e3[_0x9e0a07(0x2df)](_0x53e034);const _0x8e0698=_0x145adf[_0x9e0a07(0x163)][_0x9e0a07(0x335)][_0x9e0a07(0x1ce)](this);return _0x208502['clearSelfTarget'](),_0x8e0698;}else return _0xde1109[_0x9e0a07(0x64f)][_0x9e0a07(0x1c6)](_0x57215e)||_0xde1109[_0x9e0a07(0x180)][_0x9e0a07(0x1c6)](_0x57215e);}else{if(_0x474e72===_0x9e0a07(0x431)){if(_0x9e0a07(0x660)==='CmMXO'){const _0x42072c=_0x117472[_0x9e0a07(0x412)](this['x'],this['y'],this[_0x9e0a07(0x462)],this[_0x9e0a07(0x526)]),_0x3f7f8a=_0x42072c*(this[_0x9e0a07(0x3a0)]||0x0);_0xa8f2f8[_0x9e0a07(0x2e3)]()>=_0x3f7f8a?_0x34bb14[_0x9e0a07(0x163)][_0x9e0a07(0x56a)][_0x9e0a07(0x1ce)](this):this[_0x9e0a07(0x150)]();}else return _0xde1109[_0x9e0a07(0x4de)][_0x9e0a07(0x1c6)](_0x57215e)||_0xde1109[_0x9e0a07(0x180)][_0x9e0a07(0x1c6)](_0x57215e);}else{if(_0xde1109[_0x9e0a07(0x379)]['includes'](_0x57215e)){if('FYJFE'!==_0x9e0a07(0x21b))return!![];else this['contentsOpacity']-=this['opacitySpeed']();}else{if(_0x9e0a07(0x137)===_0x9e0a07(0x199)){if(!_0x5651c5[_0x9e0a07(0x238)]())return;_0x116f0d[_0x9e0a07(0x491)]();}else{const _0x212d1e='%1Allow'['format'](_0x474e72[_0x9e0a07(0x4c8)](0x0)['toUpperCase']()+_0x474e72[_0x9e0a07(0x368)](0x1));if(_0xde1109[_0x212d1e])return _0xde1109[_0x212d1e][_0x9e0a07(0x1c6)](_0x57215e);}}}}}return![];},Game_Map[_0x533487(0x48b)][_0x533487(0x392)]=function(_0x5743f3,_0x50b7c5,_0x540742,_0x5e6dbc){const _0xce65d9=_0x533487,_0x3f202a=this[_0xce65d9(0x510)](_0x5743f3,_0x540742),_0x20507e=this[_0xce65d9(0x56c)](_0x50b7c5,_0x540742),_0x15f89c=this[_0xce65d9(0x2ec)](_0x3f202a,_0x20507e),_0x39832f=this[_0xce65d9(0x42f)];if(_0x39832f[_0xce65d9(0x698)][_0xce65d9(0x1c6)](_0x15f89c))return!![];else{if(_0x5e6dbc===_0xce65d9(0x454))return _0x39832f['PlayerForbid'][_0xce65d9(0x1c6)](_0x15f89c)||_0x39832f[_0xce65d9(0x2f6)][_0xce65d9(0x1c6)](_0x15f89c);else{if(_0x5e6dbc===_0xce65d9(0x431))return _0x39832f['EventForbid'][_0xce65d9(0x1c6)](_0x15f89c)||_0x39832f[_0xce65d9(0x2f6)][_0xce65d9(0x1c6)](_0x15f89c);else{if(_0x39832f[_0xce65d9(0x5bf)][_0xce65d9(0x1c6)](_0x15f89c))return'GSwUx'!==_0xce65d9(0x465)?!![]:!![];else{const _0x1fbd1d=_0xce65d9(0x310)[_0xce65d9(0x1b5)](_0x5e6dbc[_0xce65d9(0x4c8)](0x0)[_0xce65d9(0x651)]()+_0x5e6dbc['slice'](0x1));if(_0x39832f[_0x1fbd1d])return _0x39832f[_0x1fbd1d]['includes'](_0x15f89c);}}}}return![];},Game_Map['prototype'][_0x533487(0x57e)]=function(_0x25ca07,_0xdbe90c,_0x4207c1,_0xa10696){const _0xe72dbf=_0x533487;_0x4207c1=_0xa10696===_0xe72dbf(0x5ae)?0x5:_0x4207c1;const _0x1ed273=this['roundXWithDirection'](_0x25ca07,_0x4207c1),_0x1a79c6=this[_0xe72dbf(0x56c)](_0xdbe90c,_0x4207c1),_0x1330c6=this[_0xe72dbf(0x2ec)](_0x1ed273,_0x1a79c6),_0x2046fd=this[_0xe72dbf(0x42f)];if(_0x2046fd[_0xe72dbf(0x359)][_0xe72dbf(0x1c6)](_0x1330c6)){if('pTpqq'!==_0xe72dbf(0x1e7))return!![];else _0x2f08bc[_0x2436f3]=_0x129708[_0x2b1b28][_0xe72dbf(0x368)](0x0);}else{if('yuUSc'===_0xe72dbf(0x403)){const _0x3bae97=_0x5970aa['EventTemplates'][_0x2b8277];if(!_0x3bae97)return;_0x3bae97[_0xe72dbf(0x147)][_0xe72dbf(0x1ce)](this,_0x3626be,_0x26c44c,this);}else{const _0x4d41da=_0xe72dbf(0x5be)['format'](_0xa10696[_0xe72dbf(0x4c8)](0x0)[_0xe72dbf(0x651)]()+_0xa10696[_0xe72dbf(0x368)](0x1));if(_0x2046fd[_0x4d41da])return _0x2046fd[_0x4d41da][_0xe72dbf(0x1c6)](_0x1330c6);}}return![];},VisuMZ[_0x533487(0x163)][_0x533487(0x3c8)]=Game_Map[_0x533487(0x48b)]['refresh'],Game_Map['prototype'][_0x533487(0x191)]=function(){const _0xa260b5=_0x533487;VisuMZ[_0xa260b5(0x163)][_0xa260b5(0x3c8)]['call'](this),this['checkNeedForPeriodicRefresh']();},Game_Map['prototype'][_0x533487(0x2b5)]=function(){const _0x19d99f=_0x533487;this['_needsPeriodicRefresh']=![];if(this[_0x19d99f(0x4d5)]()['some'](_0xbdc66a=>_0xbdc66a['hasAdvancedSwitchVariable']())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x19d99f(0x4d5)]()['some'](_0x1dccc2=>_0x1dccc2[_0x19d99f(0x423)]())){this[_0x19d99f(0x49a)]=!![];return;}if(this[_0x19d99f(0x356)][_0x19d99f(0x27a)](_0x408a7b=>_0x408a7b['hasAdvancedSwitchVariable']())){if(_0x19d99f(0x5fd)!=='zgKBY'){this['_needsPeriodicRefresh']=!![];return;}else{const _0x4d7d99=this[_0x19d99f(0x431)]();return _0xb45f27[_0x19d99f(0x163)][_0x19d99f(0x4ed)][_0x19d99f(0x610)](this[_0x19d99f(0x431)]()[_0x19d99f(0x36c)],this[_0x19d99f(0x5ce)],_0x4d7d99);}}if(this[_0x19d99f(0x356)][_0x19d99f(0x27a)](_0x3eb5cc=>_0x3eb5cc['hasCPCs']())){if(_0x19d99f(0x53f)===_0x19d99f(0x447)){const _0x2e34da=_0x4ec192[_0x19d99f(0x606)],_0x49d07f=_0x5914ae[_0x19d99f(0x45b)],_0x295166=_0x3deba2%0x10*_0x2e34da,_0x3d9e40=_0xad3c00[_0x19d99f(0x3b8)](_0x5543a4/0x10)*_0x49d07f;_0x186e39[_0x19d99f(0x3f5)](_0x295166,_0x3d9e40,_0x2e34da,_0x49d07f),this[_0x19d99f(0x560)]=!![];}else{this[_0x19d99f(0x49a)]=!![];return;}}},VisuMZ['EventsMoveCore']['Game_Map_update']=Game_Map[_0x533487(0x48b)][_0x533487(0x697)],Game_Map[_0x533487(0x48b)][_0x533487(0x697)]=function(_0x58a7db){const _0x47e396=_0x533487;this[_0x47e396(0x56b)](),VisuMZ['EventsMoveCore'][_0x47e396(0x1e4)][_0x47e396(0x1ce)](this,_0x58a7db);},Game_Map[_0x533487(0x48b)][_0x533487(0x56b)]=function(){const _0x2ccb34=_0x533487;if(!this[_0x2ccb34(0x49a)])return;this['_periodicRefreshTimer']=this[_0x2ccb34(0x511)]||0x3c,this[_0x2ccb34(0x511)]--,this[_0x2ccb34(0x511)]<=0x0&&(this[_0x2ccb34(0x3c0)](),this[_0x2ccb34(0x511)]=0x3c);},VisuMZ[_0x533487(0x163)][_0x533487(0x1a7)]=Game_Map[_0x533487(0x48b)][_0x533487(0x3b7)],Game_Map[_0x533487(0x48b)][_0x533487(0x3b7)]=function(){const _0x2fa7ea=_0x533487;if(!$gameSystem[_0x2fa7ea(0x348)]())return!![];return VisuMZ[_0x2fa7ea(0x163)][_0x2fa7ea(0x1a7)][_0x2fa7ea(0x1ce)](this);},Game_Map[_0x533487(0x48b)][_0x533487(0x6a4)]=function(){const _0x1a37fa=_0x533487;this[_0x1a37fa(0x5fc)]=![];const _0x2651a0=$dataMap[_0x1a37fa(0x249)]||'';_0x2651a0[_0x1a37fa(0x579)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(_0x1a37fa(0x3d6)===_0x1a37fa(0x3d6)?this[_0x1a37fa(0x5fc)]=!![]:(_0x1a1298[_0x1a37fa(0x163)]['Spriteset_Map_createShadow'][_0x1a37fa(0x1ce)](this),this[_0x1a37fa(0x2dc)]()));},Game_Map['prototype'][_0x533487(0x61b)]=function(){const _0x39885f=_0x533487;if(this[_0x39885f(0x5fc)]===undefined)this[_0x39885f(0x6a4)]();return this[_0x39885f(0x5fc)];},Game_Map[_0x533487(0x48b)][_0x533487(0x414)]=function(_0x17d3f8){const _0x234860=_0x533487;if(_0x17d3f8!==this['mapId']()&&$gamePlayer){if(_0x234860(0x449)!==_0x234860(0x449)){const _0x337aab=_0x338e99[_0x234860(0x6cf)][0x0];if(_0x337aab['match'](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x890cd5=!![];else _0x337aab[_0x234860(0x579)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x518bfe=![]);}else $gameSystem['removeTemporaryMapSpawnedEvents'](this[_0x234860(0x52d)]());}},Game_Map[_0x533487(0x48b)][_0x533487(0x398)]=function(){const _0x1ccebd=_0x533487;this['_spawnedEvents']=$gameSystem[_0x1ccebd(0x112)](this[_0x1ccebd(0x52d)]()),this[_0x1ccebd(0x18e)]=!![];},VisuMZ['EventsMoveCore'][_0x533487(0x65d)]=Game_Map[_0x533487(0x48b)][_0x533487(0x4d5)],Game_Map[_0x533487(0x48b)][_0x533487(0x4d5)]=function(){const _0xbaa2fb=_0x533487;if(this['_eventCache'])return this[_0xbaa2fb(0x57a)];const _0x21d02b=VisuMZ['EventsMoveCore'][_0xbaa2fb(0x65d)][_0xbaa2fb(0x1ce)](this),_0x48beef=_0x21d02b[_0xbaa2fb(0x2d1)](this[_0xbaa2fb(0x5a7)]||[]);return this[_0xbaa2fb(0x57a)]=_0x48beef[_0xbaa2fb(0x577)](_0x5284db=>!!_0x5284db),this[_0xbaa2fb(0x57a)];},VisuMZ[_0x533487(0x163)]['Game_Map_event']=Game_Map[_0x533487(0x48b)][_0x533487(0x431)],Game_Map[_0x533487(0x48b)][_0x533487(0x431)]=function(_0x53404a){const _0x2aa435=_0x533487;return _0x53404a>=0x3e8?(_0x53404a-=0x3e8,this[_0x2aa435(0x5a7)][_0x53404a]):VisuMZ[_0x2aa435(0x163)][_0x2aa435(0x5c0)][_0x2aa435(0x1ce)](this,_0x53404a);},Game_Map['prototype'][_0x533487(0x4a7)]=function(_0x5b273a){const _0x1fd63b=_0x533487,_0x16155d=this[_0x1fd63b(0x431)](_0x5b273a);if(_0x16155d)_0x16155d[_0x1fd63b(0x105)]();},Game_Map['prototype'][_0x533487(0x294)]=function(){const _0x4d257b=_0x533487,_0x44f577={'template':_0x4d257b(0x4d3),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this[_0x4d257b(0x5a7)][_0x4d257b(0x1eb)]+0x3e8};this[_0x4d257b(0x455)](_0x44f577);},Game_Map[_0x533487(0x48b)][_0x533487(0x3bf)]=function(_0x3034bf,_0x1a031e){const _0xe163c7=_0x533487;if(this[_0xe163c7(0x68f)](_0x3034bf,_0x1a031e)['length']>0x0)return!![];if($gamePlayer['x']===_0x3034bf&&$gamePlayer['y']===_0x1a031e)return!![];if(this[_0xe163c7(0x1c3)]()[_0xe163c7(0x59c)](_0x3034bf,_0x1a031e))return!![];if(this[_0xe163c7(0x60a)]()['posNt'](_0x3034bf,_0x1a031e))return!![];return![];},Game_Map[_0x533487(0x48b)]['isSpawnHitboxCollisionOk']=function(_0x28390c,_0x2b05e7,_0x391234){const _0x16b330=_0x533487;$gameTemp['_spawnData']=_0x28390c;const _0x2eeb97=new Game_Event(_0x28390c[_0x16b330(0x52d)],_0x28390c[_0x16b330(0x36b)]);$gameTemp[_0x16b330(0x6a7)]=undefined,_0x2eeb97[_0x16b330(0x191)]();let _0x559e79=_0x2b05e7-_0x2eeb97['_addedHitbox']['left'],_0x3c483b=_0x2b05e7+_0x2eeb97[_0x16b330(0x463)][_0x16b330(0x18f)],_0x492e32=_0x391234-_0x2eeb97[_0x16b330(0x463)]['up'],_0x1d6d10=_0x391234+_0x2eeb97['_addedHitbox'][_0x16b330(0x55e)];for(let _0x377667=_0x559e79;_0x377667<=_0x3c483b;_0x377667++){if('xhRiJ'!==_0x16b330(0x2fb)){this[_0x16b330(0x1ec)]=_0x574d86;const _0x5e87f5=new _0x5389e4(0x0,0x0,_0x455f43[_0x16b330(0x590)]/0x4,this['fittingHeight'](0x1));this[_0x16b330(0x643)](),_0x309efd[_0x16b330(0x48b)]['initialize']['call'](this,_0x5e87f5),this[_0x16b330(0x6bd)]=0x0,this[_0x16b330(0x576)](0x2),this[_0x16b330(0x26f)]='';}else for(let _0x19cd16=_0x492e32;_0x19cd16<=_0x1d6d10;_0x19cd16++){if(this['checkExistingEntitiesAt'](_0x377667,_0x19cd16))return![];}}return!![];},Game_Map['prototype'][_0x533487(0x455)]=function(_0x1df92c){const _0x46dbf3=_0x533487;$gameTemp[_0x46dbf3(0x6a7)]=_0x1df92c;const _0x2c72d6=new Game_Event(_0x1df92c['mapId'],_0x1df92c['eventId']);$gameTemp[_0x46dbf3(0x6a7)]=undefined,this[_0x46dbf3(0x5a7)]['push'](_0x2c72d6),_0x2c72d6[_0x46dbf3(0x4fa)](_0x1df92c),this['clearEventCache']();},Game_Map[_0x533487(0x48b)][_0x533487(0x490)]=function(_0x3210ab,_0x39de02,_0x628e23){const _0x1c187f=_0x533487,_0x5e35bc=_0x3210ab[_0x1c187f(0x4e3)][_0x1c187f(0x651)]()[_0x1c187f(0x1ff)]();if(_0x5e35bc!==_0x1c187f(0x61e)){if(_0x1c187f(0x44a)===_0x1c187f(0x44a)){const _0x4e7b88=VisuMZ['EventTemplates'][_0x5e35bc];_0x4e7b88&&(_0x1c187f(0x272)!==_0x1c187f(0x272)?this[_0x1c187f(0x26e)][_0x1c187f(0x561)]=_0xffe980(_0x57eefa['$1']):(_0x3210ab['mapId']=_0x4e7b88['MapID'],_0x3210ab[_0x1c187f(0x36b)]=_0x4e7b88[_0x1c187f(0x360)]));}else{if(_0x26c124[_0x1c187f(0x16a)])this['setMoveSpeed'](_0x395c89[_0x1c187f(0x16a)]);}}const _0x42f2cc=_0x3210ab['x'],_0x26dd22=_0x3210ab['y'];if(!this[_0x1c187f(0x57c)](_0x42f2cc,_0x26dd22))return![];if(_0x39de02){if(this[_0x1c187f(0x3bf)](_0x42f2cc,_0x26dd22))return![];if(!this[_0x1c187f(0x49e)](_0x3210ab,_0x42f2cc,_0x26dd22))return![];}if(_0x628e23){if(_0x1c187f(0x523)!==_0x1c187f(0x523)){if(!this['_character'])return 0x0;if(this['_character'][_0x1c187f(0x5f2)])return 0x0;const _0x20cdfb=this[_0x1c187f(0x444)][_0x1c187f(0x599)]();return _0x20cdfb?_0x20cdfb[_0x1c187f(0x202)]||0x0:0x0;}else{if(!this[_0x1c187f(0x4ad)](_0x42f2cc,_0x26dd22))return![];}}return this['createSpawnedEventWithData'](_0x3210ab),!![];},Game_Map[_0x533487(0x48b)][_0x533487(0x45f)]=function(_0x12b9ad,_0x29127b,_0x4f240f,_0x33a9f4){const _0x87231e=_0x533487,_0x2657c8=_0x12b9ad[_0x87231e(0x4e3)]['toUpperCase']()[_0x87231e(0x1ff)]();if(_0x2657c8!==_0x87231e(0x61e)){if(_0x87231e(0x24a)!==_0x87231e(0x24a)){_0x57ef3f[_0x87231e(0x36c)]===_0x3c6ae4&&_0x1840e9[_0x87231e(0x163)][_0x87231e(0x4ed)][_0x87231e(0x565)](_0x397eaf);if(_0x24afed[_0x87231e(0x36c)][_0x87231e(0x1eb)]>0x0)return _0x782672[_0x87231e(0x163)]['CustomPageConditions'][_0x87231e(0x610)](_0xe70c32[_0x87231e(0x36c)],0x0);return!![];}else{const _0x4ba168=VisuMZ[_0x87231e(0x470)][_0x2657c8];_0x4ba168&&(_0x87231e(0x3ee)==='oAALR'?(_0x12b9ad[_0x87231e(0x52d)]=_0x4ba168[_0x87231e(0x51c)],_0x12b9ad[_0x87231e(0x36b)]=_0x4ba168[_0x87231e(0x360)]):(_0x404498['mapId']=_0x508a00['MapID'],_0x5281e4['eventId']=_0x2d9438['EventID']));}}const _0x4463cf=[],_0x133f5b=this[_0x87231e(0x43e)](),_0x12d4f6=this[_0x87231e(0x42e)]();for(let _0xfbd2bf=0x0;_0xfbd2bf<_0x133f5b;_0xfbd2bf++){if(_0x87231e(0x6b1)===_0x87231e(0x6b1))for(let _0x408540=0x0;_0x408540<_0x12d4f6;_0x408540++){if(!_0x29127b[_0x87231e(0x1c6)](this['regionId'](_0xfbd2bf,_0x408540)))continue;if(!this['isValid'](_0xfbd2bf,_0x408540))continue;if(_0x4f240f){if(_0x87231e(0x16b)==='uNDwb'){if(this[_0x87231e(0x3bf)](_0xfbd2bf,_0x408540))continue;if(!this[_0x87231e(0x49e)](_0x12b9ad,_0xfbd2bf,_0x408540))continue;}else this['_activationProximityAutoTriggerBypass']=!![],_0x12c752['EventsMoveCore'][_0x87231e(0x650)]['call'](this),this[_0x87231e(0x19c)](),this[_0x87231e(0x1c4)](),this[_0x87231e(0x481)]=![];}if(_0x33a9f4){if('zlXHs'===_0x87231e(0x271)){const _0xce956c=_0x371901(_0x21841e['$1']),_0x118770=_0x223b37(_0x1517f3['$2']),_0x1c6092=this['checkCollisionKeywords'](_0x399f36);return this[_0x87231e(0x118)](_0xce956c,_0x118770,_0x1c6092);}else{if(!this[_0x87231e(0x4ad)](_0xfbd2bf,_0x408540))continue;}}_0x4463cf['push']([_0xfbd2bf,_0x408540]);}else _0x4346a1[_0x87231e(0x163)][_0x87231e(0x16c)][_0x87231e(0x1ce)](this,_0x1a6220,_0x43d87b);}if(_0x4463cf[_0x87231e(0x1eb)]>0x0){const _0x525fde=_0x4463cf[Math[_0x87231e(0x333)](_0x4463cf[_0x87231e(0x1eb)])];return _0x12b9ad['x']=_0x525fde[0x0],_0x12b9ad['y']=_0x525fde[0x1],this[_0x87231e(0x455)](_0x12b9ad),!![];}return![];},Game_Map[_0x533487(0x48b)][_0x533487(0x53d)]=function(_0x1e15ff,_0xfac3c8,_0x54752c,_0x291973){const _0x3cfb60=_0x533487,_0x398d10=_0x1e15ff[_0x3cfb60(0x4e3)]['toUpperCase']()[_0x3cfb60(0x1ff)]();if(_0x398d10!==_0x3cfb60(0x61e)){const _0x47b18a=VisuMZ['EventTemplates'][_0x398d10];_0x47b18a&&('nUHob'==='nUHob'?(_0x1e15ff[_0x3cfb60(0x52d)]=_0x47b18a['MapID'],_0x1e15ff[_0x3cfb60(0x36b)]=_0x47b18a[_0x3cfb60(0x360)]):(_0xb56df9[_0x3cfb60(0x163)][_0x3cfb60(0x298)]['call'](this),_0x525031['VisuMZ_1_MessageCore']&&_0x4c3ad5[_0x3cfb60(0x226)](_0x13d0f9[_0x3cfb60(0x688)][_0x3cfb60(0x5eb)][_0x3cfb60(0x2d3)][_0x3cfb60(0x1be)])&&_0x3545ed[_0x3cfb60(0x3c1)]()));}const _0x27f1d8=[],_0x8047a5=this[_0x3cfb60(0x43e)](),_0x5956b8=this['height']();for(let _0x12fa16=0x0;_0x12fa16<_0x8047a5;_0x12fa16++){for(let _0x20b9d9=0x0;_0x20b9d9<_0x5956b8;_0x20b9d9++){if(!_0xfac3c8[_0x3cfb60(0x1c6)](this['terrainTag'](_0x12fa16,_0x20b9d9)))continue;if(!this[_0x3cfb60(0x57c)](_0x12fa16,_0x20b9d9))continue;if(_0x54752c){if(this[_0x3cfb60(0x3bf)](_0x12fa16,_0x20b9d9))continue;if(!this[_0x3cfb60(0x49e)](_0x1e15ff,_0x12fa16,_0x20b9d9))continue;}if(_0x291973){if(!this[_0x3cfb60(0x4ad)](_0x12fa16,_0x20b9d9))continue;}_0x27f1d8[_0x3cfb60(0x618)]([_0x12fa16,_0x20b9d9]);}}if(_0x27f1d8[_0x3cfb60(0x1eb)]>0x0){if(_0x3cfb60(0x4c0)===_0x3cfb60(0x623)){_0x1fe760[_0x3cfb60(0x4d9)](_0x40674a,_0x1dbf9e);const _0x3853cd=!_0x2237a7['Chase'];_0x37221d[_0x3cfb60(0x585)](_0x3853cd);}else{const _0x4fe423=_0x27f1d8[Math[_0x3cfb60(0x333)](_0x27f1d8[_0x3cfb60(0x1eb)])];return _0x1e15ff['x']=_0x4fe423[0x0],_0x1e15ff['y']=_0x4fe423[0x1],this[_0x3cfb60(0x455)](_0x1e15ff),!![];}}return![];},Game_Map[_0x533487(0x48b)][_0x533487(0x4ad)]=function(_0x1b606e,_0x5aaa98){const _0x12464c=_0x533487;if(this['isPassable'](_0x1b606e,_0x5aaa98,0x2))return!![];if(this[_0x12464c(0x525)](_0x1b606e,_0x5aaa98,0x4))return!![];if(this['isPassable'](_0x1b606e,_0x5aaa98,0x6))return!![];if(this[_0x12464c(0x525)](_0x1b606e,_0x5aaa98,0x8))return!![];return![];},Game_Map[_0x533487(0x48b)][_0x533487(0x3b2)]=function(_0xa78d4){const _0x2cdc6a=_0x533487;if(_0xa78d4<0x3e8)return;if(!this[_0x2cdc6a(0x5a7)])return;const _0x35b0da=this[_0x2cdc6a(0x431)](_0xa78d4);_0x35b0da[_0x2cdc6a(0x5e1)](-0x1,-0x1),_0x35b0da[_0x2cdc6a(0x105)](),this['_spawnedEvents'][_0xa78d4-0x3e8]=null,this['clearEventCache']();},Game_Map[_0x533487(0x48b)][_0x533487(0x324)]=function(){const _0x2bc231=_0x533487;for(const _0x184386 of this[_0x2bc231(0x5a7)]){if(_0x184386)return _0x184386;}return null;},Game_Map['prototype'][_0x533487(0x5a8)]=function(){const _0x4a1da1=_0x533487,_0x4099c2=this[_0x4a1da1(0x324)]();return _0x4099c2?_0x4099c2[_0x4a1da1(0x17b)]:0x0;},Game_Map[_0x533487(0x48b)][_0x533487(0x3c3)]=function(){const _0x29ccca=_0x533487,_0x58cb62=this[_0x29ccca(0x5a7)][_0x29ccca(0x368)](0x0)[_0x29ccca(0x140)]();for(const _0x4a3eae of _0x58cb62){if(_0x4a3eae)return _0x4a3eae;}return null;},Game_Map['prototype']['lastSpawnedEventID']=function(){const _0x4cfbc2=_0x533487,_0x19c754=this['lastSpawnedEvent']();return _0x19c754?_0x19c754[_0x4cfbc2(0x17b)]:0x0;},Game_Map[_0x533487(0x48b)][_0x533487(0x251)]=function(_0x4d5de6,_0x3d2e69){const _0x2edb3a=_0x533487,_0x241eb1=this['eventsXy'](_0x4d5de6,_0x3d2e69);for(const _0x5206ea of _0x241eb1){if('OxLyw'===_0x2edb3a(0x4aa))return _0x17609e[_0x2edb3a(0x218)];else{if(!_0x5206ea)continue;if(_0x5206ea[_0x2edb3a(0x439)]())this[_0x2edb3a(0x3b2)](_0x5206ea['_eventId']);}}},Game_Map['prototype'][_0x533487(0x4a9)]=function(_0x43463a){const _0x376a5b=_0x533487;for(const _0x1b544f of this[_0x376a5b(0x5a7)]){if(!_0x1b544f)continue;_0x43463a[_0x376a5b(0x1c6)](_0x1b544f['regionId']())&&this[_0x376a5b(0x3b2)](_0x1b544f[_0x376a5b(0x17b)]);}},Game_Map['prototype'][_0x533487(0x4ac)]=function(_0x68dded){const _0x5de3b6=_0x533487;for(const _0x2fcd7c of this['_spawnedEvents']){if(_0x5de3b6(0x277)==='CCiTg')this[_0x5de3b6(0x260)]=!![];else{if(!_0x2fcd7c)continue;if(_0x68dded['includes'](_0x2fcd7c[_0x5de3b6(0x4f2)]())){if('smpIU'===_0x5de3b6(0x1c2))return this[_0x5de3b6(0x126)];else this[_0x5de3b6(0x3b2)](_0x2fcd7c[_0x5de3b6(0x17b)]);}}}},Game_Map[_0x533487(0x48b)][_0x533487(0x554)]=function(){const _0x702747=_0x533487;for(const _0x5b7ac4 of this[_0x702747(0x5a7)]){if(!_0x5b7ac4)continue;this[_0x702747(0x3b2)](_0x5b7ac4['_eventId']);}},VisuMZ['EventsMoveCore'][_0x533487(0x611)]=Game_Map['prototype']['unlockEvent'],Game_Map[_0x533487(0x48b)][_0x533487(0x1db)]=function(_0x634e82){const _0x34dcb4=_0x533487;VisuMZ['EventsMoveCore'][_0x34dcb4(0x611)][_0x34dcb4(0x1ce)](this,_0x634e82);if(_0x634e82>=0x3e8){if(_0x34dcb4(0x573)===_0x34dcb4(0x68e))this[_0x34dcb4(0x448)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x34dcb4(0x61d)]={},this[_0x34dcb4(0x14f)]=[],this[_0x34dcb4(0x2e0)]={},this[_0x34dcb4(0x622)]={},this[_0x34dcb4(0x641)]=![],this[_0x34dcb4(0x364)]='default';else{const _0x5599b3=this[_0x34dcb4(0x431)](_0x634e82);if(_0x5599b3)_0x5599b3[_0x34dcb4(0x631)]();}}},Game_Map[_0x533487(0x48b)][_0x533487(0x232)]=function(){const _0x260d4c=_0x533487;this[_0x260d4c(0x194)]=![],this[_0x260d4c(0x5db)]=![];if(!$dataMap)return;const _0x5882e3=$dataMap[_0x260d4c(0x249)]||'';if(_0x5882e3[_0x260d4c(0x579)](/<HIDE PLAYER>/i))this[_0x260d4c(0x194)]=![],this['_forceHidePlayer']=!![];else{if(_0x5882e3['match'](/<SHOW PLAYER>/i)){if('RsfMe'===_0x260d4c(0x4e9))this[_0x260d4c(0x194)]=!![],this[_0x260d4c(0x5db)]=![];else{const _0x830893=this[_0x260d4c(0x462)],_0x52ac61=this[_0x260d4c(0x526)];return this[_0x260d4c(0x44d)](_0x830893,_0x52ac61);}}}},Game_Map[_0x533487(0x48b)]['isPlayerForceShown']=function(){const _0xee9a14=_0x533487;if(this[_0xee9a14(0x194)]===undefined){if(_0xee9a14(0x21d)!=='alvxL')this['setupPlayerVisibilityOverrides']();else{if(!_0x3228a1[_0xee9a14(0x401)]())return![];if(this['_event']?.[_0xee9a14(0x5f2)])return![];if(this[_0xee9a14(0x1ec)]&&this[_0xee9a14(0x1ec)]['_pageIndex']<0x0)return![];if(_0x240a96[_0xee9a14(0x3fa)][_0xee9a14(0x3e0)]>0x0)return![];const _0x538871=_0x5dab5b['x'],_0x479495=_0x149e04['y'],_0x52a57c=this[_0xee9a14(0x1ec)]['x'],_0x3c522c=this[_0xee9a14(0x1ec)]['y'];if(this['_visiblePlayerX']===_0x538871&&this[_0xee9a14(0x40c)]===_0x479495&&this[_0xee9a14(0x670)]===_0x52a57c&&this[_0xee9a14(0x267)]===_0x3c522c)return this[_0xee9a14(0x3d5)];this[_0xee9a14(0x2fc)]=_0x35fa88['x'],this[_0xee9a14(0x40c)]=_0x4c05af['y'],this[_0xee9a14(0x670)]=this[_0xee9a14(0x1ec)]['x'],this['_visibleEventY']=this[_0xee9a14(0x1ec)]['y'];if(_0x37f197['absDistance'](_0x538871,_0x479495,_0x52a57c,_0x3c522c)>this[_0xee9a14(0x1ec)]['labelWindowRange']())return this[_0xee9a14(0x3d5)]=![],![];return this[_0xee9a14(0x3d5)]=!![],!![];}}return this['_forceShowPlayer'];},Game_Map['prototype']['isPlayerForceHidden']=function(){const _0xa7218d=_0x533487;return this['_forceHidePlayer']===undefined&&this[_0xa7218d(0x232)](),this[_0xa7218d(0x5db)];},VisuMZ[_0x533487(0x163)][_0x533487(0x2cc)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x2ca)],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x2ca)]=function(){const _0x186cc1=_0x533487;if(this===$gamePlayer){if(_0x186cc1(0x2c8)===_0x186cc1(0x2c8)){if($gameMap[_0x186cc1(0x536)]())return![];if($gameMap[_0x186cc1(0x6c3)]())return!![];}else return!!this[_0x186cc1(0x12f)];}return VisuMZ[_0x186cc1(0x163)][_0x186cc1(0x2cc)][_0x186cc1(0x1ce)](this);},Game_Map[_0x533487(0x48b)][_0x533487(0x534)]=function(){const _0x3cae39=_0x533487;this[_0x3cae39(0x450)]=![],this['_forceHideFollower']=![];if(!$dataMap)return;const _0x563cfb=$dataMap[_0x3cae39(0x249)]||'';if(_0x563cfb[_0x3cae39(0x579)](/<HIDE FOLLOWERS>/i)){if(_0x3cae39(0x123)===_0x3cae39(0x123))this[_0x3cae39(0x450)]=![],this[_0x3cae39(0x671)]=!![];else{_0x24d9e1[_0x3cae39(0x4d9)](_0x3c449d,_0xc69610);const _0x3a03d2=_0x1d1e17[_0x3cae39(0x679)](),_0x43c601={'template':_0x477fb3[_0x3cae39(0x302)],'mapId':_0x365bae['MapId']||_0x4a1f3d[_0x3cae39(0x52d)](),'eventId':_0x2d621a[_0x3cae39(0x466)]||_0x3a03d2['eventId'](),'x':_0xe40b56[_0x3cae39(0x22a)],'y':_0x24a6b2['PosY'],'spawnPreserved':_0x1f23d1[_0x3cae39(0x162)],'spawnEventId':_0xb62e2b['_spawnedEvents'][_0x3cae39(0x1eb)]+0x3e8},_0x3255ba=_0x2bc83c['SuccessSwitchId']||0x0;if(!_0x45c668['PreloadedMaps'][_0x43c601['mapId']]&&_0x43c601['mapId']!==_0x82c1e8[_0x3cae39(0x52d)]()){let _0x2d7cd4=_0x3cae39(0x197)[_0x3cae39(0x1b5)](_0x43c601['mapId']);_0x2d7cd4+=_0x3cae39(0x51a),_0x2d7cd4+=_0x3cae39(0x44f),_0x2d7cd4+=_0x3cae39(0x2a1),_0x2d7cd4+=_0x3cae39(0x630)['format'](_0x43c601['mapId']),_0x5bf7e2(_0x2d7cd4);return;}const _0x4f54d8=_0x509592[_0x3cae39(0x490)](_0x43c601,_0x2cdee6[_0x3cae39(0x30f)],_0x3d8da7[_0x3cae39(0x661)]);_0x3255ba&&_0x2941e7[_0x3cae39(0x575)](_0x3255ba,!!_0x4f54d8);}}else _0x563cfb[_0x3cae39(0x579)](/<SHOW FOLLOWERS>/i)&&(this[_0x3cae39(0x450)]=!![],this[_0x3cae39(0x671)]=![]);},Game_Map[_0x533487(0x48b)][_0x533487(0x4dd)]=function(){const _0x591031=_0x533487;return this[_0x591031(0x450)]===undefined&&(_0x591031(0x557)!==_0x591031(0x557)?this[_0x591031(0x2aa)](_0x161865):this[_0x591031(0x534)]()),this[_0x591031(0x450)];},Game_Map['prototype'][_0x533487(0x520)]=function(){const _0x2a63a6=_0x533487;if(this[_0x2a63a6(0x671)]===undefined){if(_0x2a63a6(0x4e5)!==_0x2a63a6(0x4e5)){const _0x16fb58=_0x199178?_0x15a603['mapId']():0x0,_0x35ed3d=[0x0,0x0,_0x2a63a6(0x316)['format'](_0x16fb58,_0x41a36d)];return _0x43b2de[_0x2a63a6(0x575)](_0x35ed3d,_0x1a8bd7);}else this[_0x2a63a6(0x534)]();}return this[_0x2a63a6(0x671)];},VisuMZ['EventsMoveCore'][_0x533487(0x10f)]=Game_Followers[_0x533487(0x48b)][_0x533487(0x451)],Game_Followers['prototype'][_0x533487(0x451)]=function(){const _0x4dd6c4=_0x533487;if($gameMap['areFollowersForceShown']())return!![];if($gameMap[_0x4dd6c4(0x520)]())return![];return VisuMZ[_0x4dd6c4(0x163)][_0x4dd6c4(0x10f)][_0x4dd6c4(0x1ce)](this);},Game_Map[_0x533487(0x48b)][_0x533487(0x306)]=function(){const _0x2dfe01=_0x533487;if(!$dataMap)return;if(!$dataMap[_0x2dfe01(0x249)])return;const _0x641ed0=$dataMap['note'];if(_0x641ed0[_0x2dfe01(0x579)](/<MAP LOAD COMMON EVENT(?:|S):[ ](.*)>/i)){const _0x5dd0d4=String(RegExp['$1'])[_0x2dfe01(0x12b)](',')[_0x2dfe01(0x5c4)](_0x31caf5=>Number(_0x31caf5));for(const _0x43ed88 of _0x5dd0d4){if(_0x2dfe01(0x5ef)==='zfkZV'){const _0x5c7f43=_0x27943b;_0x3d3727[_0x2dfe01(0x659)](_0x5c7f43,_0x1e9d3b);}else $gameTemp['reserveCommonEvent'](_0x43ed88);}}},Game_CommonEvent[_0x533487(0x48b)][_0x533487(0x32d)]=function(){const _0x10807e=_0x533487,_0x576394=this[_0x10807e(0x431)]();return this[_0x10807e(0x2c5)]()&&_0x576394['trigger']>=0x1&&DataManager[_0x10807e(0x5c2)](_0x576394[_0x10807e(0x6c4)]);},Game_CommonEvent[_0x533487(0x48b)][_0x533487(0x423)]=function(){const _0x257dc4=_0x533487;return VisuMZ[_0x257dc4(0x163)][_0x257dc4(0x4ed)][_0x257dc4(0x356)]['includes'](this['_commonEventId']);},VisuMZ[_0x533487(0x163)][_0x533487(0x17a)]=Game_CommonEvent[_0x533487(0x48b)][_0x533487(0x2c5)],Game_CommonEvent['prototype']['isActive']=function(){const _0x5ce26c=_0x533487;if(VisuMZ[_0x5ce26c(0x163)][_0x5ce26c(0x17a)][_0x5ce26c(0x1ce)](this)){if(_0x5ce26c(0x1ac)!==_0x5ce26c(0x1ac))this[_0x5ce26c(0x50d)]=!![];else return!![];}else{if(_0x5ce26c(0x29b)!==_0x5ce26c(0x36a)){const _0xceb6bd=this['event']();return VisuMZ[_0x5ce26c(0x163)][_0x5ce26c(0x4ed)][_0x5ce26c(0x610)](this['event']()['CPC'],this['_commonEventId'],_0xceb6bd);}else{if(this[_0x5ce26c(0x3ad)]()&&this[_0x5ce26c(0x1ec)]&&this[_0x5ce26c(0x1ec)][_0x5ce26c(0x26e)]['hueShift']){const _0x4316c6=this[_0x5ce26c(0x4d0)]+(this[_0x5ce26c(0x1ec)][_0x5ce26c(0x26e)][_0x5ce26c(0x561)]||0x0);this['setHue'](_0x4316c6);}}}},VisuMZ[_0x533487(0x163)][_0x533487(0x196)]=Game_Map[_0x533487(0x48b)][_0x533487(0x41a)],Game_Map[_0x533487(0x48b)][_0x533487(0x41a)]=function(){const _0x1cf44f=_0x533487,_0x4d1b7c=VisuMZ['EventsMoveCore'][_0x1cf44f(0x196)][_0x1cf44f(0x1ce)](this),_0x4827b8=VisuMZ[_0x1cf44f(0x163)][_0x1cf44f(0x4ed)][_0x1cf44f(0x356)][_0x1cf44f(0x5c4)](_0x460a3b=>$dataCommonEvents[_0x460a3b]);return _0x4d1b7c[_0x1cf44f(0x2d1)](_0x4827b8)[_0x1cf44f(0x577)]((_0x5d17de,_0x3b078e,_0x175a07)=>_0x175a07['indexOf'](_0x5d17de)===_0x3b078e);},Game_CharacterBase[_0x533487(0x3ff)]=VisuMZ[_0x533487(0x163)]['Settings'][_0x533487(0x3ef)][_0x533487(0x615)]??![],VisuMZ[_0x533487(0x163)]['Game_CharacterBase_initMembers']=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x643)],Game_CharacterBase['prototype'][_0x533487(0x643)]=function(){const _0x34e8aa=_0x533487;VisuMZ['EventsMoveCore'][_0x34e8aa(0x385)][_0x34e8aa(0x1ce)](this),this[_0x34e8aa(0x69a)]();},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x69a)]=function(){const _0x513f45=_0x533487;this[_0x513f45(0x347)]=0x1,this[_0x513f45(0x5f0)]=0x1,this[_0x513f45(0x322)]=![],this['clearPose'](),this['clearDashing'](),this[_0x513f45(0x3b9)](),this[_0x513f45(0x43d)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x498)]=Game_CharacterBase['prototype']['opacity'],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x3dc)]=function(){const _0x24ecbc=_0x533487;let _0x25852f=VisuMZ[_0x24ecbc(0x163)][_0x24ecbc(0x498)][_0x24ecbc(0x1ce)](this);return _0x25852f=this[_0x24ecbc(0x1a2)](_0x25852f),_0x25852f;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x1a2)]=function(_0x3f3f83){return _0x3f3f83;},Game_CharacterBase[_0x533487(0x48b)]['isSpriteVS8dir']=function(){const _0xcde183=_0x533487;if(this[_0xcde183(0x216)]===Game_Player&&this[_0xcde183(0x4d7)]()){if('VuHWG'!==_0xcde183(0x4bc))this['_forceCarrying']=!![];else return this[_0xcde183(0x23f)]()[_0xcde183(0x453)]()[_0xcde183(0x579)](/\[VS8\]/i);}else return Imported[_0xcde183(0x1f2)]&&this[_0xcde183(0x2fd)]()?!![]:'iLRKQ'===_0xcde183(0x2f0)?this[_0xcde183(0x463)]?this['posEventsMoveCore'](_0x2449b0,_0x424dde):_0xce29de[_0xcde183(0x48b)][_0xcde183(0x4ea)][_0xcde183(0x1ce)](this,_0x55a8b7,_0xf17f21):this[_0xcde183(0x453)]()['match'](/\[VS8\]/i);},VisuMZ[_0x533487(0x163)][_0x533487(0x459)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x354)],Game_CharacterBase[_0x533487(0x48b)]['direction']=function(){const _0x369ef7=_0x533487;if(!$dataMap)return this[_0x369ef7(0x2ff)]||0x2;if(this['isOnLadder']()&&!this[_0x369ef7(0x5da)]()&&this[_0x369ef7(0x3a4)]())return this[_0x369ef7(0x20f)]();else{if(this['isOnLadder']()&&!this[_0x369ef7(0x5da)]()){if(_0x369ef7(0x689)!=='EZffB'){const _0x49f02d=_0x29095e['tileHeight']();return _0x35f083['floor'](this[_0x369ef7(0x664)]()*_0x49f02d+_0x49f02d);}else return 0x8;}else{if(this[_0x369ef7(0x15d)]()&&this[_0x369ef7(0x3a4)]())return this['getPosingCharacterDirection']();else{if(_0x369ef7(0x367)===_0x369ef7(0x367))return VisuMZ[_0x369ef7(0x163)][_0x369ef7(0x459)][_0x369ef7(0x1ce)](this);else{if(!this[_0x369ef7(0x49a)])return;this[_0x369ef7(0x511)]=this[_0x369ef7(0x511)]||0x3c,this[_0x369ef7(0x511)]--,this[_0x369ef7(0x511)]<=0x0&&(this[_0x369ef7(0x3c0)](),this[_0x369ef7(0x511)]=0x3c);}}}}},VisuMZ[_0x533487(0x163)][_0x533487(0x259)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x4e1)],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x4e1)]=function(_0x15f1b9){const _0x12b950=_0x533487;if(!this[_0x12b950(0x3a4)]())_0x15f1b9=this[_0x12b950(0x171)](_0x15f1b9);VisuMZ[_0x12b950(0x163)][_0x12b950(0x259)]['call'](this,_0x15f1b9),this[_0x12b950(0x3b5)]();},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x171)]=function(_0x53a9e1){const _0x19b5d5=_0x533487;if(_0x53a9e1===0x1)return this[_0x19b5d5(0x66c)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x53a9e1===0x3)return this[_0x19b5d5(0x66c)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x53a9e1===0x7)return this[_0x19b5d5(0x66c)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x53a9e1===0x9)return this['canPass'](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x53a9e1;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x5e8)]=function(_0x3308a2){const _0x4b8add=_0x533487;return[0x1,0x3,0x5,0x7,0x9][_0x4b8add(0x1c6)](_0x3308a2);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x60f)]=function(){const _0x14ceb8=_0x533487;return this[_0x14ceb8(0x253)]||0x0;},VisuMZ[_0x533487(0x163)][_0x533487(0x3be)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x4fd)],Game_CharacterBase['prototype'][_0x533487(0x4fd)]=function(_0x322dee){const _0x3c820a=_0x533487;this[_0x3c820a(0x253)]=_0x322dee,VisuMZ[_0x3c820a(0x163)]['Game_CharacterBase_moveStraight'][_0x3c820a(0x1ce)](this,_0x322dee);},Game_CharacterBase[_0x533487(0x48b)]['executeMoveDir8']=function(_0x5a6048){const _0x2bbc3e=_0x533487;if(!this['isDiagonalDirection'](_0x5a6048))return this[_0x2bbc3e(0x4fd)](_0x5a6048);let _0x533dfd=0x0,_0x29ba49=0x0;switch(_0x5a6048){case 0x1:_0x533dfd=0x4,_0x29ba49=0x2;break;case 0x3:_0x533dfd=0x6,_0x29ba49=0x2;break;case 0x7:_0x533dfd=0x4,_0x29ba49=0x8;break;case 0x9:_0x533dfd=0x6,_0x29ba49=0x8;break;}if(VisuMZ['EventsMoveCore'][_0x2bbc3e(0x5eb)]['Movement'][_0x2bbc3e(0x68a)]){if(!this[_0x2bbc3e(0x66c)](this['_x'],this['_y'],_0x533dfd))return this[_0x2bbc3e(0x4fd)](_0x29ba49);if(!this['canPass'](this['_x'],this['_y'],_0x29ba49))return this[_0x2bbc3e(0x4fd)](_0x533dfd);if(!this[_0x2bbc3e(0x4b0)](this['_x'],this['_y'],_0x533dfd,_0x29ba49)){let _0x5b3e19=VisuMZ['EventsMoveCore'][_0x2bbc3e(0x5eb)][_0x2bbc3e(0x3ef)][_0x2bbc3e(0x175)]?_0x533dfd:_0x29ba49;return this[_0x2bbc3e(0x4fd)](_0x5b3e19);}}this['_lastMovedDirection']=_0x5a6048,this[_0x2bbc3e(0x219)](_0x533dfd,_0x29ba49);},VisuMZ['EventsMoveCore']['Game_CharacterBase_realMoveSpeed']=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x46e)],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x46e)]=function(){const _0x17825b=_0x533487;let _0x14194a=this[_0x17825b(0x19b)];return this[_0x17825b(0x182)]()&&(_0x14194a+=this[_0x17825b(0x10e)]()),this[_0x17825b(0x587)](_0x14194a);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x10e)]=function(){const _0xf4d5fe=_0x533487,_0x186cc4=VisuMZ['EventsMoveCore'][_0xf4d5fe(0x5eb)][_0xf4d5fe(0x3ef)];if(_0x186cc4[_0xf4d5fe(0x283)]!==undefined)return _0xf4d5fe(0x39d)===_0xf4d5fe(0x312)?this[_0xf4d5fe(0x5b4)]===_0xf4d5fe(0x5ae)?this[_0xf4d5fe(0x23f)]()[_0xf4d5fe(0x676)](_0x45d036,_0x31f9e8,_0x5d5ed6):_0x551e7e[_0xf4d5fe(0x163)][_0xf4d5fe(0x13b)][_0xf4d5fe(0x1ce)](this,_0xd669d3,_0x5dd82a,_0x53e312):_0x186cc4[_0xf4d5fe(0x283)];else{if(_0xf4d5fe(0x605)!=='lvrXM')return VisuMZ[_0xf4d5fe(0x163)]['Game_CharacterBase_realMoveSpeed'][_0xf4d5fe(0x1ce)](this)-this[_0xf4d5fe(0x19b)];else delete this['_EventIcons'][_0xf4d5fe(0x52c)];}},Game_CharacterBase['prototype'][_0x533487(0x587)]=function(_0x560583){const _0x57e01b=_0x533487,_0x502df7=VisuMZ[_0x57e01b(0x163)][_0x57e01b(0x5eb)][_0x57e01b(0x3ef)];if(!_0x502df7['SlowerSpeed'])return _0x560583;return[0x1,0x3,0x7,0x9]['includes'](this['_lastMovedDirection'])&&(_0x560583*=_0x502df7['DiagonalSpeedMultiplier']||0.01),_0x560583;},VisuMZ[_0x533487(0x163)][_0x533487(0x2d6)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x182)],Game_CharacterBase[_0x533487(0x48b)]['isDashing']=function(){const _0x2fbe0c=_0x533487;if(!Game_CharacterBase[_0x2fbe0c(0x3ff)]&&this[_0x2fbe0c(0x5cc)]())return![];if(this['_forceDashing'])return!![];return VisuMZ[_0x2fbe0c(0x163)][_0x2fbe0c(0x2d6)][_0x2fbe0c(0x1ce)](this);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x3d2)]=function(){const _0x268947=_0x533487;return this['isDashing']()&&this[_0x268947(0x4ba)]===0x0;},VisuMZ[_0x533487(0x163)][_0x533487(0x141)]=Game_CharacterBase['prototype'][_0x533487(0x252)],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x252)]=function(){const _0x4476d8=_0x533487;if(this[_0x4476d8(0x15d)]()){if('UzOtF'==='UzOtF')return this['getPosingCharacterPattern']();else{_0x32fbf2[_0x4476d8(0x4d9)](_0x2a33d1,_0x411747);if(!_0x3b90ee)return;const _0x11a522=_0x34099a[_0x4476d8(0x679)]();_0x54d905[_0x4476d8(0x437)]=_0x4ba3f0[_0x4476d8(0x437)]||_0x38e3a6['mapId']();if(_0x385236['mapId']()===_0x433004[_0x4476d8(0x437)]){const _0x7eaaa=_0x2523ce[_0x4476d8(0x431)](_0x3c35c0[_0x4476d8(0x466)]||_0x11a522[_0x4476d8(0x36b)]());_0x7eaaa[_0x4476d8(0x4a8)]();}_0x3f4712['RemovePreserve']&&_0x5db208[_0x4476d8(0x1dd)](_0x24bc58[_0x4476d8(0x437)],_0x125fce[_0x4476d8(0x466)]||_0x11a522[_0x4476d8(0x36b)]());}}else return VisuMZ[_0x4476d8(0x163)]['Game_CharacterBase_pattern']['call'](this);},VisuMZ[_0x533487(0x163)][_0x533487(0x460)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x55c)],Game_CharacterBase['prototype'][_0x533487(0x55c)]=function(){const _0xd0320=_0x533487;VisuMZ[_0xd0320(0x163)][_0xd0320(0x460)][_0xd0320(0x1ce)](this),this[_0xd0320(0x558)]();},VisuMZ[_0x533487(0x163)]['Game_CharacterBase_characterIndex']=Game_CharacterBase[_0x533487(0x48b)]['characterIndex'],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x18a)]=function(){const _0x575504=_0x533487;if(this['isSpriteVS8dir']())return this[_0x575504(0x58b)]();return VisuMZ[_0x575504(0x163)][_0x575504(0x158)][_0x575504(0x1ce)](this);},Game_CharacterBase[_0x533487(0x48b)]['characterIndexVS8']=function(){const _0x3419a0=_0x533487,_0x5af239=this[_0x3419a0(0x354)]();if(this['isJumping']()){if([0x2,0x4,0x6,0x8][_0x3419a0(0x1c6)](_0x5af239))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x5af239))return 0x5;}else{if(this[_0x3419a0(0x5cc)]()){if(_0x3419a0(0x3fd)!==_0x3419a0(0x5ab))return 0x6;else this[_0x3419a0(0x3dc)]=0xff;}else{if(this[_0x3419a0(0x15d)]()){if(_0x3419a0(0x563)!==_0x3419a0(0x563)){const _0x388a8b=_0x376303[_0x3419a0(0x4f1)](this);if(!_0x388a8b)return;this[_0x3419a0(0x245)](_0x388a8b['x'],_0x388a8b['y']),this['refreshBushDepth'](),this[_0x3419a0(0x4e1)](_0x388a8b[_0x3419a0(0x354)]),this[_0x3419a0(0x5dd)]===_0x388a8b[_0x3419a0(0x4f9)]&&(this[_0x3419a0(0x41f)]=_0x388a8b[_0x3419a0(0x406)]);}else return this['getPosingCharacterIndex']();}else{if(this[_0x3419a0(0x438)]){if([0x2,0x4,0x6,0x8]['includes'](_0x5af239))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x5af239))return 0x5;}else{if(this[_0x3419a0(0x64a)]()&&this[_0x3419a0(0x114)]()){if([0x2,0x4,0x6,0x8][_0x3419a0(0x1c6)](_0x5af239))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x5af239))return 0x5;}else{if(this[_0x3419a0(0x3d2)]()){if(_0x3419a0(0x319)===_0x3419a0(0x319)){if([0x2,0x4,0x6,0x8]['includes'](_0x5af239))return 0x2;if([0x1,0x3,0x7,0x9][_0x3419a0(0x1c6)](_0x5af239))return 0x3;}else{if(this[_0x3419a0(0x19f)]())return this[_0x3419a0(0x45d)](_0x1b3e5f,_0x5cb0fe,_0x77f005);if(_0x54f0c0[_0x3419a0(0x69c)](_0x4d8a07,_0xfffb45,_0x231821,_0x3419a0(0x431)))return!![];if(_0x542065['isRegionForbidPass'](_0x28071b,_0x5def97,_0x26930d,_0x3419a0(0x431)))return![];return _0x229dd1['prototype'][_0x3419a0(0x5f7)][_0x3419a0(0x1ce)](this,_0x145beb,_0x2a0ada,_0x1f615b);}}else{if(_0x3419a0(0x442)!==_0x3419a0(0x332)){if([0x2,0x4,0x6,0x8][_0x3419a0(0x1c6)](_0x5af239))return 0x0;if([0x1,0x3,0x7,0x9][_0x3419a0(0x1c6)](_0x5af239))return 0x1;}else{if(_0x15d4ff[_0x3419a0(0x3fa)][_0x3419a0(0x216)]===_0x448496)return![];return _0x1aeab2[_0x3419a0(0x408)][_0x3419a0(0x1c6)](_0xd8a345);}}}}}}}},Game_CharacterBase[_0x533487(0x48b)]['useCarryPoseForIcons']=function(){const _0x54146e=_0x533487;return VisuMZ[_0x54146e(0x163)][_0x54146e(0x5eb)][_0x54146e(0x628)][_0x54146e(0x234)];},Game_CharacterBase['prototype'][_0x533487(0x24c)]=function(){const _0x291a39=_0x533487;return this[_0x291a39(0x5cc)]()&&this[_0x291a39(0x4f2)]()===VisuMZ[_0x291a39(0x163)][_0x291a39(0x5eb)][_0x291a39(0x12e)][_0x291a39(0x2be)];},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x20f)]=function(){const _0x1caef7=_0x533487;if(this['isOnRope']()){if(_0x1caef7(0x110)!==_0x1caef7(0x184))return 0x4;else{const _0x4c39b8=_0x28b9cb,_0x48edbd=_0x177595[_0x1caef7(0x6cf)];if(_0x314bd7['code']===_0x4c39b8['ROUTE_SCRIPT']){let _0x14f2e2=_0x43908a[_0x1caef7(0x6cf)][0x0];_0x14f2e2=this[_0x1caef7(0x475)](_0x14f2e2),_0x14f2e2=this[_0x1caef7(0x276)](_0x14f2e2),this[_0x1caef7(0x28d)](_0x36a243,_0x14f2e2);}else _0x28f84c[_0x1caef7(0x163)][_0x1caef7(0x583)][_0x1caef7(0x1ce)](this,_0x52d052);}}else return 0x2;},VisuMZ[_0x533487(0x163)]['Game_CharacterBase_update']=Game_CharacterBase[_0x533487(0x48b)]['update'],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x697)]=function(){const _0x34a115=_0x533487;this[_0x34a115(0x4b2)](),VisuMZ['EventsMoveCore']['Game_CharacterBase_update'][_0x34a115(0x1ce)](this),this[_0x34a115(0x29e)]();},Game_CharacterBase['prototype'][_0x533487(0x4b2)]=function(){const _0x3e38c6=_0x533487;this['_scaleX']=this['_scaleBaseX']??0x1,this['_scaleY']=this[_0x3e38c6(0x5f0)]??0x1;},VisuMZ[_0x533487(0x163)][_0x533487(0x23c)]=Game_CharacterBase['prototype'][_0x533487(0x5bb)],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x5bb)]=function(){const _0x1ce9c5=_0x533487;let _0x5b2669=VisuMZ[_0x1ce9c5(0x163)][_0x1ce9c5(0x23c)][_0x1ce9c5(0x1ce)](this);return this[_0x1ce9c5(0x54a)]!==undefined&&(_0x5b2669/=Math[_0x1ce9c5(0x381)](this[_0x1ce9c5(0x54a)],0.00001)),Math[_0x1ce9c5(0x3b8)](_0x5b2669);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x29e)]=function(){const _0x24295e=_0x533487;this[_0x24295e(0x683)]=this[_0x24295e(0x683)]||0x0;if(this[_0x24295e(0x683)]>0x0){this[_0x24295e(0x683)]--;if(this['_poseDuration']<=0x0&&this[_0x24295e(0x1c0)]!=='ZZZ')this[_0x24295e(0x558)]();}},VisuMZ[_0x533487(0x163)][_0x533487(0x37c)]=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x219)],Game_CharacterBase[_0x533487(0x48b)]['moveDiagonally']=function(_0x112247,_0x395652){const _0x12440a=_0x533487;VisuMZ[_0x12440a(0x163)]['Game_CharacterBase_moveDiagonally'][_0x12440a(0x1ce)](this,_0x112247,_0x395652);if(this['isSpriteVS8dir']())this['setDiagonalDirection'](_0x112247,_0x395652);},Game_CharacterBase['prototype'][_0x533487(0x33c)]=function(_0x42843b,_0xbaea81){const _0x2407ee=_0x533487;if(_0x42843b===0x4&&_0xbaea81===0x2)this['setDirection'](0x1);if(_0x42843b===0x6&&_0xbaea81===0x2)this['setDirection'](0x3);if(_0x42843b===0x4&&_0xbaea81===0x8)this[_0x2407ee(0x4e1)](0x7);if(_0x42843b===0x6&&_0xbaea81===0x8)this[_0x2407ee(0x4e1)](0x9);},VisuMZ[_0x533487(0x163)][_0x533487(0x58e)]=Game_CharacterBase[_0x533487(0x48b)]['hasStepAnime'],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x204)]=function(){const _0x34c364=_0x533487;if(this[_0x34c364(0x15d)]()&&this[_0x34c364(0x5d8)]()===_0x34c364(0x309))return!![];return VisuMZ[_0x34c364(0x163)]['Game_CharacterBase_hasStepAnime']['call'](this);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x344)]=function(_0x4e745b,_0xede4ad){const _0x487a39=_0x533487;if(_0x4e745b[_0x487a39(0x579)](/Z/i))_0x4e745b='ZZZ';if(_0x4e745b['match'](/SLEEP/i))_0x4e745b=_0x487a39(0x309);this[_0x487a39(0x3a4)]()&&('WGRem'===_0x487a39(0x372)?(this[_0x487a39(0x1c0)]=_0x4e745b[_0x487a39(0x651)]()[_0x487a39(0x1ff)](),this['_poseDuration']=_0xede4ad||Infinity):this[_0x487a39(0x3b2)](_0xbbf026['_eventId']));},Game_CharacterBase[_0x533487(0x48b)]['getPose']=function(){const _0x2f9ecf=_0x533487;if(this[_0x2f9ecf(0x3a4)]()){if(_0x2f9ecf(0x62a)!=='wledB')return(this['_pose']||'')[_0x2f9ecf(0x651)]()[_0x2f9ecf(0x1ff)]();else _0x2eaabf+=this[_0x2f9ecf(0x10e)]();}else return''[_0x2f9ecf(0x651)]()[_0x2f9ecf(0x1ff)]();},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x609)]=function(_0x18f002,_0x2dfe4c){const _0x54d784=_0x533487;if(this[_0x54d784(0x3a4)]()){if(_0x54d784(0x10b)!=='WkGHs'){const _0x1b2b0f=['',_0x54d784(0x303),_0x54d784(0x195),'MUSIC\x20NOTE',_0x54d784(0x220),'ANGER',_0x54d784(0x3a2),'COBWEB',_0x54d784(0x3f8),'LIGHT\x20BULB',_0x54d784(0x309),'','','','',''][_0x18f002];this[_0x54d784(0x344)](_0x1b2b0f,_0x2dfe4c);}else{const _0x3c10c9=this[_0x54d784(0x6a8)]+_0x37de70[_0x54d784(0x22e)](_0x14ffb9(_0x35332f['$1'])/0x64*0xff);return this['setOpacity'](_0x3c10c9[_0x54d784(0x311)](0x0,0xff));}}},Game_CharacterBase['prototype']['clearPose']=function(){const _0x333d1a=_0x533487;this[_0x333d1a(0x1c0)]='',this[_0x333d1a(0x683)]=0x0;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x15d)]=function(){return this['isSpriteVS8dir']()&&!!this['_pose'];},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x5a4)]=function(){const _0x58f580=_0x533487,_0x442078=this[_0x58f580(0x1c0)]['toUpperCase']();switch(this[_0x58f580(0x1c0)]['toUpperCase']()[_0x58f580(0x1ff)]()){case _0x58f580(0x4fc):case'HMPH':case _0x58f580(0x3db):case _0x58f580(0x331):case _0x58f580(0x41e):case _0x58f580(0x3a9):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase['prototype'][_0x533487(0x656)]=function(){const _0x10d698=_0x533487;switch(this['_pose'][_0x10d698(0x651)]()){case _0x10d698(0x303):case _0x10d698(0x195):case'MUSIC\x20NOTE':case'!':case'?':return 0x2;break;case _0x10d698(0x220):case _0x10d698(0x380):case _0x10d698(0x3a2):return 0x4;break;case _0x10d698(0x4fc):case _0x10d698(0x396):case _0x10d698(0x3db):case _0x10d698(0x594):case _0x10d698(0x3f8):case _0x10d698(0x5cf):return 0x6;break;case'HURT':case _0x10d698(0x41e):case'COLLAPSE':case _0x10d698(0x309):case _0x10d698(0x22c):return 0x8;break;default:return VisuMZ[_0x10d698(0x163)][_0x10d698(0x259)][_0x10d698(0x1ce)](this);break;}},Game_CharacterBase['prototype']['getPosingCharacterPattern']=function(){const _0x27ca25=_0x533487;switch(this['_pose']['toUpperCase']()){case _0x27ca25(0x4fc):case _0x27ca25(0x331):case _0x27ca25(0x303):case'!':case _0x27ca25(0x220):case _0x27ca25(0x594):return 0x0;break;case _0x27ca25(0x396):case _0x27ca25(0x41e):case _0x27ca25(0x195):case'?':case _0x27ca25(0x380):case _0x27ca25(0x3f8):return 0x1;break;case _0x27ca25(0x3db):case _0x27ca25(0x3a9):case _0x27ca25(0x369):case _0x27ca25(0x3a2):case _0x27ca25(0x5cf):return 0x2;break;default:return VisuMZ[_0x27ca25(0x163)][_0x27ca25(0x141)][_0x27ca25(0x1ce)](this);break;}},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x4b4)]=function(){this['_forceCarrying']=!![];},Game_CharacterBase[_0x533487(0x48b)]['clearCarrying']=function(){this['_forceCarrying']=![];},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x597)]=function(){this['_forceDashing']=!![];},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x6ca)]=function(){const _0x26f9cc=_0x533487;this[_0x26f9cc(0x2f9)]=![];},Game_CharacterBase['prototype'][_0x533487(0x11b)]=function(){const _0x3c9e76=_0x533487;if(this[_0x3c9e76(0x61a)]())return![];if(this['_isObjectCharacter'])return![];if(this[_0x3c9e76(0x4b9)]==='')return![];if(this[_0x3c9e76(0x216)]===Game_Vehicle)return![];if(this['isTransparent']())return![];return!![];},Game_CharacterBase[_0x533487(0x48b)]['isShadowShrink']=function(){const _0x3a6e23=_0x533487;if(this['isOnLadder']())return!![];if(this[_0x3a6e23(0x216)]===Game_Player&&this[_0x3a6e23(0x4d7)]())return!![];return![];},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x62f)]=function(){const _0x12d80a=_0x533487;return VisuMZ[_0x12d80a(0x163)][_0x12d80a(0x5eb)][_0x12d80a(0x3ef)]['DefaultShadow'];},Game_CharacterBase['prototype']['shadowX']=function(){const _0x106156=_0x533487;return this[_0x106156(0x341)]();},Game_CharacterBase['prototype'][_0x533487(0x63f)]=function(){const _0xabe960=_0x533487,_0xa2e6a=$gameMap[_0xabe960(0x601)]();return Math[_0xabe960(0x3b8)](this[_0xabe960(0x664)]()*_0xa2e6a+_0xa2e6a);},Game_CharacterBase[_0x533487(0x243)]=0x64,Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x4f7)]=function(_0x38058b,_0x559e87){const _0x3a951c=_0x533487;if(TouchInput['isPressed']())return![];if(!$gameMap[_0x3a951c(0x55b)]())return![];if($gameMap[_0x3a951c(0x65f)](_0x38058b,_0x559e87)['length']>0x0)return![];if(!$gameMap[_0x3a951c(0x4ad)](_0x38058b,_0x559e87))return![];const _0x3a557d=$gameMap[_0x3a951c(0x297)][_0x3a951c(0x1eb)];if(_0x3a557d>=Game_CharacterBase['DIAGONAL_PATHFINDING_EVENT_LIMIT'])return![];return!![];},Game_Character[_0x533487(0x48b)][_0x533487(0x34c)]=function(_0x3fed82,_0x958ee5){const _0x3d470d=_0x533487;let _0x39e435=this[_0x3d470d(0x34b)](_0x3fed82,_0x958ee5);if(!this[_0x3d470d(0x4f7)](_0x3fed82,_0x958ee5))return _0x39e435;if(this['isCollidedWithEvents'](_0x3fed82,_0x958ee5))return _0x39e435;const _0xd940a0=_0x39e435;if(_0x39e435===0x2){if(_0x3fed82>this['x']&&this['canPass'](this['x'],this['y'],0x6))_0x39e435=0x3;if(_0x3fed82<this['x']&&this['canPass'](this['x'],this['y'],0x4))_0x39e435=0x1;}else{if(_0x39e435===0x4){if(_0x958ee5>this['y']&&this[_0x3d470d(0x66c)](this['x'],this['y'],0x4))_0x39e435=0x1;if(_0x958ee5<this['y']&&this[_0x3d470d(0x66c)](this['x'],this['y'],0x6))_0x39e435=0x7;}else{if(_0x39e435===0x6){if(_0x3d470d(0x3fc)===_0x3d470d(0x282)){const _0x2724a9=_0x2849cb[_0x3d470d(0x68f)](_0x2b0331,_0x276c29);for(const _0x5688e0 of _0x2724a9){if(_0x5688e0&&_0x5688e0['hasClickTrigger']())return _0x5688e0[_0x3d470d(0x164)](),!![];}return _0x342b29['isLongPressed']()&&_0x2724a9[_0x3d470d(0x1eb)]>0x0&&_0x5845e4[_0x3d470d(0x3c1)](),![];}else{if(_0x958ee5>this['y']&&this['canPass'](this['x'],this['y'],0x4))_0x39e435=0x3;if(_0x958ee5<this['y']&&this[_0x3d470d(0x66c)](this['x'],this['y'],0x6))_0x39e435=0x9;}}else{if(_0x39e435===0x8){if(_0x3fed82>this['x']&&this[_0x3d470d(0x66c)](this['x'],this['y'],0x6))_0x39e435=0x9;if(_0x3fed82<this['x']&&this[_0x3d470d(0x66c)](this['x'],this['y'],0x4))_0x39e435=0x7;}}}}if(!this['canPass'](this['x'],this['y'],_0x39e435))return _0xd940a0;const _0x2dfb71=$gameMap['roundXWithDirection'](this['x'],_0x39e435),_0x40658d=$gameMap['roundYWithDirection'](this['y'],_0x39e435);if(this[_0x3d470d(0x3fb)](_0x2dfb71,_0x40658d))_0x39e435=_0xd940a0;return _0x39e435;},VisuMZ[_0x533487(0x163)][_0x533487(0x13b)]=Game_CharacterBase[_0x533487(0x48b)]['canPass'],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x66c)]=function(_0x37e946,_0xbaac44,_0x388715){const _0x43a420=_0x533487;return this[_0x43a420(0x5b4)]===_0x43a420(0x5ae)?this[_0x43a420(0x23f)]()['isAirshipPassable'](_0x37e946,_0xbaac44,_0x388715):VisuMZ['EventsMoveCore'][_0x43a420(0x13b)][_0x43a420(0x1ce)](this,_0x37e946,_0xbaac44,_0x388715);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x3b9)]=function(){const _0x47f042=_0x533487;this['_spriteOffsetX']=0x0,this[_0x47f042(0x68c)]=0x0;},VisuMZ['EventsMoveCore'][_0x533487(0x28f)]=Game_CharacterBase['prototype']['screenX'],Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x341)]=function(){const _0xbec9bd=_0x533487;return VisuMZ['EventsMoveCore'][_0xbec9bd(0x28f)][_0xbec9bd(0x1ce)](this)+(this[_0xbec9bd(0x3a1)]||0x0);},VisuMZ['EventsMoveCore']['Game_CharacterBase_screenY']=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x46f)],Game_CharacterBase[_0x533487(0x48b)]['screenY']=function(){const _0x166b2d=_0x533487;return VisuMZ[_0x166b2d(0x163)][_0x166b2d(0x4da)][_0x166b2d(0x1ce)](this)+(this[_0x166b2d(0x68c)]||0x0);},Game_CharacterBase[_0x533487(0x63b)]=VisuMZ[_0x533487(0x163)]['Settings']['Movement'][_0x533487(0x3df)]??-0x6,Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x589)]=function(){const _0x4963e6=_0x533487;let _0x1fd975=this[_0x4963e6(0x411)]()?0x0:-Game_CharacterBase[_0x4963e6(0x63b)];return this['_scaleY']&&(_0x1fd975*=this[_0x4963e6(0x54a)]),Math['round'](_0x1fd975);},Game_CharacterBase[_0x533487(0x48b)]['clearStepPattern']=function(){this['_stepPattern']='';},VisuMZ['EventsMoveCore']['Game_CharacterBase_updatePattern']=Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x5fa)],Game_CharacterBase[_0x533487(0x48b)]['updatePattern']=function(){const _0x57a382=_0x533487;if(this[_0x57a382(0x322)])return;if(this['updatePatternEventsMoveCore']())return;VisuMZ['EventsMoveCore']['Game_CharacterBase_updatePattern'][_0x57a382(0x1ce)](this);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x553)]=function(){const _0x2543aa=_0x533487;if(!this[_0x2543aa(0x204)]()&&this[_0x2543aa(0x4ba)]>0x0)return![];switch(String(this[_0x2543aa(0x2ba)])[_0x2543aa(0x651)]()['trim']()){case _0x2543aa(0x54b):this[_0x2543aa(0x273)]+=0x1;if(this['_pattern']>0x2)this[_0x2543aa(0x581)](0x0);break;case _0x2543aa(0x345):this[_0x2543aa(0x273)]-=0x1;if(this[_0x2543aa(0x273)]<0x0)this[_0x2543aa(0x581)](0x2);break;case'SPIN\x20CLOCKWISE':case _0x2543aa(0x119):this[_0x2543aa(0x3d1)]();break;case _0x2543aa(0x3d7):case _0x2543aa(0x649):case _0x2543aa(0x3ea):case _0x2543aa(0x188):this[_0x2543aa(0x692)]();break;default:return![];}return!![];},Game_CharacterBase['prototype'][_0x533487(0x599)]=function(){const _0x5ecd7d=_0x533487;return $gameSystem[_0x5ecd7d(0x599)](this);},Game_CharacterBase[_0x533487(0x48b)]['hasEventIcon']=function(){const _0x4004db=this['getEventIconData']();if(!_0x4004db)return![];return _0x4004db['iconIndex']>0x0;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x3cb)]=function(){const _0x1ab3e8=_0x533487,_0x4bf478=this[_0x1ab3e8(0x354)]();return $gameMap[_0x1ab3e8(0x510)](this['x'],_0x4bf478);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x62d)]=function(){const _0x3052eb=_0x533487,_0x3d9e6c=this[_0x3052eb(0x354)]();return $gameMap[_0x3052eb(0x56c)](this['y'],_0x3d9e6c);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x1fe)]=function(){const _0x222e9d=_0x533487,_0x5b0c21=this[_0x222e9d(0x5e9)](this[_0x222e9d(0x354)]());return $gameMap[_0x222e9d(0x510)](this['x'],_0x5b0c21);},Game_CharacterBase['prototype']['backY']=function(){const _0x5460cd=_0x533487,_0x548c48=this['reverseDir'](this[_0x5460cd(0x354)]());return $gameMap[_0x5460cd(0x56c)](this['y'],_0x548c48);},Game_CharacterBase[_0x533487(0x48b)]['ccwX']=function(){const _0x42b072=_0x533487,_0x2f5bb7=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x42b072(0x354)]()];return $gameMap[_0x42b072(0x510)](this['x'],_0x2f5bb7);},Game_CharacterBase[_0x533487(0x48b)]['ccwY']=function(){const _0x513014=_0x533487,_0x4466f8=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this['direction']()];return $gameMap[_0x513014(0x56c)](this['y'],_0x4466f8);},Game_CharacterBase[_0x533487(0x48b)]['cwX']=function(){const _0x1684f4=_0x533487,_0x43059b=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x1684f4(0x354)]()];return $gameMap['roundXWithDirection'](this['x'],_0x43059b);},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x410)]=function(){const _0x56af08=_0x533487,_0xc7a82a=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x56af08(0x354)]()];return $gameMap['roundYWithDirection'](this['y'],_0xc7a82a);},VisuMZ['EventsMoveCore'][_0x533487(0x59a)]=Game_Character[_0x533487(0x48b)][_0x533487(0x100)],Game_Character[_0x533487(0x48b)][_0x533487(0x100)]=function(_0x17649a){const _0x227408=_0x533487;route=JsonEx[_0x227408(0x2d5)](_0x17649a),VisuMZ[_0x227408(0x163)][_0x227408(0x59a)][_0x227408(0x1ce)](this,route);},VisuMZ[_0x533487(0x163)][_0x533487(0x1bc)]=Game_Character[_0x533487(0x48b)][_0x533487(0x15a)],Game_Character[_0x533487(0x48b)][_0x533487(0x15a)]=function(_0x4112f2){const _0x2f0edb=_0x533487;route=JsonEx[_0x2f0edb(0x2d5)](_0x4112f2),VisuMZ[_0x2f0edb(0x163)][_0x2f0edb(0x1bc)][_0x2f0edb(0x1ce)](this,route);},VisuMZ[_0x533487(0x163)]['Game_Character_processMoveCommand']=Game_Character[_0x533487(0x48b)][_0x533487(0x445)],Game_Character[_0x533487(0x48b)]['processMoveCommand']=function(_0x5c6642){const _0x1a52f2=_0x533487,_0x4029e3=Game_Character,_0x3ba7db=_0x5c6642[_0x1a52f2(0x6cf)];if(_0x5c6642[_0x1a52f2(0x395)]===_0x4029e3['ROUTE_SCRIPT']){let _0x53922f=_0x5c6642[_0x1a52f2(0x6cf)][0x0];_0x53922f=this['convertVariableValuesInScriptCall'](_0x53922f),_0x53922f=this['convertSelfVariableValuesInScriptCall'](_0x53922f),this[_0x1a52f2(0x28d)](_0x5c6642,_0x53922f);}else VisuMZ[_0x1a52f2(0x163)][_0x1a52f2(0x583)][_0x1a52f2(0x1ce)](this,_0x5c6642);},Game_Character[_0x533487(0x48b)]['convertVariableValuesInScriptCall']=function(_0x27b1a1){const _0x1c83ca=_0x533487,_0x62bc9=/\$gameVariables\.value\((\d+)\)/gi,_0x491eb9=/\\V\[(\d+)\]/gi;while(_0x27b1a1[_0x1c83ca(0x579)](_0x62bc9)){if(_0x1c83ca(0x636)===_0x1c83ca(0x69d))return _0x3f0606===_0x4fcfe2[_0x1c83ca(0x52d)]()?_0x4e5ac1[_0x1c83ca(0x4d5)][_0x4c95e0]:_0x4f18dd[_0x1c83ca(0x31f)][_0xcc2ed2][_0x1c83ca(0x4d5)][_0x30b4b2];else _0x27b1a1=_0x27b1a1[_0x1c83ca(0x48a)](_0x62bc9,(_0x3051da,_0xc971a9)=>$gameVariables[_0x1c83ca(0x67f)](parseInt(_0xc971a9)));}while(_0x27b1a1[_0x1c83ca(0x579)](_0x491eb9)){if(_0x1c83ca(0x229)===_0x1c83ca(0x33e)){if(this[_0x1c83ca(0x2e8)]===_0x556500)this[_0x1c83ca(0x275)]();return this[_0x1c83ca(0x2e8)];}else _0x27b1a1=_0x27b1a1[_0x1c83ca(0x48a)](_0x491eb9,(_0x5d6500,_0x5e6948)=>$gameVariables[_0x1c83ca(0x67f)](parseInt(_0x5e6948)));}return _0x27b1a1;},Game_Character[_0x533487(0x48b)]['convertSelfVariableValuesInScriptCall']=function(_0x4d4edb){const _0x38394d=_0x533487,_0x22b7ee=/\\SELFVAR\[(\d+)\]/gi;while(_0x4d4edb[_0x38394d(0x579)](_0x22b7ee)){if('lWsHH'===_0x38394d(0x582))return this[_0x38394d(0x494)](_0x5ee2d8);else _0x4d4edb=_0x4d4edb['replace'](_0x22b7ee,(_0x5a14f3,_0x1aff6e)=>getSelfVariableValue(this[_0x38394d(0x21c)],this[_0x38394d(0x17b)],parseInt(_0x1aff6e)));}return _0x4d4edb;},Game_Character['prototype'][_0x533487(0x28d)]=function(_0x3233eb,_0xdfd373){const _0x4b4b67=_0x533487;if(_0xdfd373['match'](/ANIMATION:[ ](\d+)/i))return this['processMoveRouteAnimation'](Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/BALLOON:[ ](.*)/i)){if(_0x4b4b67(0x50e)!==_0x4b4b67(0x50e)){const _0x585d50=_0x3b91ed['pages'][_0x5323c5[_0x4b4b67(0x3ba)]-0x1]['list'];this[_0x4b4b67(0x1b6)](_0x585d50,this[_0x4b4b67(0x36b)]());}else return this[_0x4b4b67(0x247)](String(RegExp['$1']));}if(_0xdfd373[_0x4b4b67(0x579)](/FADE IN:[ ](\d+)/i)){if(_0x4b4b67(0x67a)!==_0x4b4b67(0x25d))return this[_0x4b4b67(0x404)](Number(RegExp['$1']));else this['_forceShowPlayer']=!![],this[_0x4b4b67(0x5db)]=![];}if(_0xdfd373[_0x4b4b67(0x579)](/FADE OUT:[ ](\d+)/i)){if('CWAuw'!==_0x4b4b67(0x40f)){if(_0x5cfe7f>this['x']&&this[_0x4b4b67(0x66c)](this['x'],this['y'],0x6))_0x44a3f5=0x9;if(_0x16d5c8<this['x']&&this[_0x4b4b67(0x66c)](this['x'],this['y'],0x4))_0x821fad=0x7;}else return this[_0x4b4b67(0x471)](Number(RegExp['$1']));}if(_0xdfd373['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x4b4b67(0x4b4)]();if(_0xdfd373['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this['clearCarrying']();if(_0xdfd373[_0x4b4b67(0x579)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this[_0x4b4b67(0x597)]();if(_0xdfd373[_0x4b4b67(0x579)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x4b4b67(0x6ca)]();if(_0xdfd373['match'](/HUG:[ ]LEFT/i))return this[_0x4b4b67(0x19a)](_0x4b4b67(0x655));if(_0xdfd373['match'](/HUG:[ ]RIGHT/i)){if(_0x4b4b67(0x64d)===_0x4b4b67(0x6b2)){const _0x16bb38=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x4b4b67(0x354)]()];return _0x465a8d[_0x4b4b67(0x510)](this['x'],_0x16bb38);}else return this['processMoveRouteHugWall'](_0x4b4b67(0x18f));}if(_0xdfd373[_0x4b4b67(0x579)](/INDEX:[ ](\d+)/i))return this['processMoveRouteSetIndex'](Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x3214d4=this[_0x4b4b67(0x64b)]+Number(RegExp['$1']);return this['processMoveRouteSetIndex'](_0x3214d4);}if(_0xdfd373[_0x4b4b67(0x579)](/JUMP FORWARD:[ ](\d+)/i))return this[_0x4b4b67(0x67e)](Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['processMoveRouteJumpTo'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0xdfd373['match'](/JUMP TO EVENT:[ ](\d+)/i)){if(_0x4b4b67(0x285)==='wZvBq')this[_0x4b4b67(0x26e)][_0x4b4b67(0x2d2)]=_0x6b46d1(_0x26646c['$1']),this[_0x4b4b67(0x26e)][_0x4b4b67(0x3af)]=_0x46980f(_0xe122e0['$2']);else{const _0x538d6d=$gameMap[_0x4b4b67(0x431)](Number(RegExp['$1']));return this[_0x4b4b67(0x258)](_0x538d6d);}}if(_0xdfd373[_0x4b4b67(0x579)](/JUMP TO PLAYER/i))return this[_0x4b4b67(0x258)]($gamePlayer);if(_0xdfd373[_0x4b4b67(0x579)](/JUMP TO HOME/i)&&this[_0x4b4b67(0x36b)]){const _0x1e6b90=this[_0x4b4b67(0x462)],_0x15d1a4=this['_randomHomeY'];return this[_0x4b4b67(0x44d)](_0x1e6b90,_0x15d1a4);}if(_0xdfd373['match'](/MOVE[ ](.*)[ ]UNTIL STOP/i)){if('VQKxc'===_0x4b4b67(0x305)){this[_0x4b4b67(0x683)]--;if(this[_0x4b4b67(0x683)]<=0x0&&this['_pose']!==_0x4b4b67(0x309))this[_0x4b4b67(0x558)]();}else{const _0x501db4=String(RegExp['$1']),_0x3c66f1=this['checkCollisionKeywords'](_0xdfd373);return this['processMoveRouteMoveUntilStop'](_0x501db4,_0x3c66f1);}}if(_0xdfd373[_0x4b4b67(0x579)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){if('oSBtd'==='nilub')this['_interpreter'][_0x4b4b67(0x389)](_0x4de280);else{const _0x3519c8=Number(RegExp['$1']),_0x5c6cc5=Number(RegExp['$2']),_0x4f7625=this[_0x4b4b67(0x1a6)](_0xdfd373);return this['processMoveRouteMoveTo'](_0x3519c8,_0x5c6cc5,_0x4f7625);}}if(_0xdfd373['match'](/MOVE TO EVENT:[ ](\d+)/i)){if('XReuk'===_0x4b4b67(0x43f))while(this[_0x4b4b67(0x12c)]()){this[_0x4b4b67(0x63a)](_0x59fc72);}else{const _0x244bc5=$gameMap[_0x4b4b67(0x431)](Number(RegExp['$1'])),_0xef8004=this[_0x4b4b67(0x1a6)](_0xdfd373);return this[_0x4b4b67(0x17e)](_0x244bc5,_0xef8004);}}if(_0xdfd373['match'](/MOVE TO PLAYER/i)){if(_0x4b4b67(0x428)===_0x4b4b67(0x428)){const _0x5876c2=this[_0x4b4b67(0x1a6)](_0xdfd373);return this['processMoveRouteMoveToCharacter']($gamePlayer,_0x5876c2);}else{const _0x2fada6=this[_0x4b4b67(0x484)];if(!_0x2fada6)return 0x0;return _0x2fada6[_0x4b4b67(0x2c9)][_0x4b4b67(0x43e)];}}if(_0xdfd373['match'](/MOVE TO HOME/i)&&this[_0x4b4b67(0x36b)]){const _0x4d1404=this[_0x4b4b67(0x462)],_0x52145d=this[_0x4b4b67(0x526)],_0xe5ae85=this[_0x4b4b67(0x1a6)](_0xdfd373);return this[_0x4b4b67(0x118)](_0x4d1404,_0x52145d,_0xe5ae85);}if(_0xdfd373[_0x4b4b67(0x579)](/MOVE LOWER LEFT:[ ](\d+)/i)){if(_0x4b4b67(0x603)!==_0x4b4b67(0x603)){const _0x25dc43=this['_eventMorphData'][_0x4b4b67(0x52d)],_0x51ed14=this[_0x4b4b67(0x153)][_0x4b4b67(0x36b)];return _0x297d17['referEvent'](_0x25dc43,_0x51ed14);}else return this[_0x4b4b67(0x135)](0x1,Number(RegExp['$1']));}if(_0xdfd373[_0x4b4b67(0x579)](/MOVE DOWN:[ ](\d+)/i))return this[_0x4b4b67(0x135)](0x2,Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x4b4b67(0x135)](0x3,Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/MOVE LEFT:[ ](\d+)/i))return this[_0x4b4b67(0x135)](0x4,Number(RegExp['$1']));if(_0xdfd373['match'](/MOVE RIGHT:[ ](\d+)/i)){if(_0x4b4b67(0x2fa)!=='FuraD'){const _0x15cab0=_0x695fe7[_0x4b4b67(0x431)](_0x30a2ed(_0x4474c7['$1']));return this['processMoveRouteStepToCharacter'](_0x15cab0);}else return this[_0x4b4b67(0x135)](0x6,Number(RegExp['$1']));}if(_0xdfd373[_0x4b4b67(0x579)](/MOVE UPPER LEFT:[ ](\d+)/i)){if(_0x4b4b67(0x5e6)===_0x4b4b67(0x5e6))return this[_0x4b4b67(0x135)](0x7,Number(RegExp['$1']));else this[_0x4b4b67(0x41f)]=_0x4e937b['moveRouteIndex'];}if(_0xdfd373[_0x4b4b67(0x579)](/MOVE UP:[ ](\d+)/i))return _0x4b4b67(0x675)==='zQIdW'?{'iconIndex':0x0,'bufferX':_0x1e53f1[_0x4b4b67(0x2a4)][_0x4b4b67(0x524)],'bufferY':_0x3c76ff[_0x4b4b67(0x2a4)][_0x4b4b67(0x1e8)],'blendMode':_0xe09a81['Icon'][_0x4b4b67(0x33a)]}:this[_0x4b4b67(0x135)](0x8,Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/MOVE UPPER RIGHT:[ ](\d+)/i)){if('sdhtJ'===_0x4b4b67(0x3ab))return this[_0x4b4b67(0x135)](0x9,Number(RegExp['$1']));else{if(this['_shadowSprite']['scale']['y']>this[_0x4b4b67(0x31b)]['y'])this[_0x4b4b67(0x222)][_0x4b4b67(0x31b)]['y']=_0x38dd58[_0x4b4b67(0x2e4)](this[_0x4b4b67(0x222)]['scale']['y']+0.1,this[_0x4b4b67(0x31b)]['y']);if(this[_0x4b4b67(0x222)][_0x4b4b67(0x31b)]['y']<this['scale']['y'])this[_0x4b4b67(0x222)][_0x4b4b67(0x31b)]['y']=_0x158a51[_0x4b4b67(0x381)](this['_shadowSprite'][_0x4b4b67(0x31b)]['y']-0.1,this[_0x4b4b67(0x31b)]['y']);}}if(_0xdfd373[_0x4b4b67(0x579)](/OPACITY:[ ](\d+)([%％])/i)){const _0x562661=Math[_0x4b4b67(0x22e)](Number(RegExp['$1'])/0x64*0xff);return this[_0x4b4b67(0x2bd)](_0x562661[_0x4b4b67(0x311)](0x0,0xff));}if(_0xdfd373[_0x4b4b67(0x579)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0xa655f2=this[_0x4b4b67(0x6a8)]+Math[_0x4b4b67(0x22e)](Number(RegExp['$1'])/0x64*0xff);return this[_0x4b4b67(0x2bd)](_0xa655f2[_0x4b4b67(0x311)](0x0,0xff));}if(_0xdfd373['match'](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x291fd5=this[_0x4b4b67(0x6a8)]+Number(RegExp['$1']);return this['setOpacity'](_0x291fd5[_0x4b4b67(0x311)](0x0,0xff));}if(_0xdfd373[_0x4b4b67(0x579)](/PATTERN LOCK:[ ](\d+)/i))return this[_0x4b4b67(0x44b)](Number(RegExp['$1']));if(_0xdfd373[_0x4b4b67(0x579)](/PATTERN UNLOCK/i))return this[_0x4b4b67(0x322)]=![];if(_0xdfd373['match'](/POSE:[ ](.*)/i)){if(_0x4b4b67(0x489)===_0x4b4b67(0x299)){let _0x129e29=_0x3a21c2[_0x4b4b67(0x163)][_0x4b4b67(0x23c)][_0x4b4b67(0x1ce)](this);return this[_0x4b4b67(0x54a)]!==_0x16a027&&(_0x129e29/=_0x317f70[_0x4b4b67(0x381)](this['_scaleY'],0.00001)),_0x226ede[_0x4b4b67(0x3b8)](_0x129e29);}else{const _0x646663=String(RegExp['$1'])[_0x4b4b67(0x651)]()[_0x4b4b67(0x1ff)]();return this[_0x4b4b67(0x344)](_0x646663);}}if(_0xdfd373['match'](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x2cffd9=Number(RegExp['$1']),_0x2aa56f=Number(RegExp['$2']);return this[_0x4b4b67(0x17c)](_0x2cffd9,_0x2aa56f);}if(_0xdfd373[_0x4b4b67(0x579)](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x4afebe=$gameMap['event'](Number(RegExp['$1']));return this[_0x4b4b67(0x417)](_0x4afebe);}if(_0xdfd373['match'](/STEP TOWARD PLAYER/i))return this[_0x4b4b67(0x417)]($gamePlayer);if(_0xdfd373[_0x4b4b67(0x579)](/STEP TOWARD HOME/i)&&this[_0x4b4b67(0x36b)]){const _0x58f4a9=this['_randomHomeX'],_0x2755ce=this[_0x4b4b67(0x526)];return this['processMoveRouteStepTo'](_0x58f4a9,_0x2755ce);}if(_0xdfd373['match'](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return _0x4b4b67(0x2b1)==='AYLsu'?this['moveAwayFromPoint'](Number(RegExp['$1']),Number(RegExp['$2'])):this[_0x4b4b67(0x436)];if(_0xdfd373['match'](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x29a410=$gameMap[_0x4b4b67(0x431)](Number(RegExp['$1']));return this[_0x4b4b67(0x550)](_0x29a410);}if(_0xdfd373[_0x4b4b67(0x579)](/STEP AWAY FROM PLAYER/i))return this['moveAwayFromCharacter']($gamePlayer);if(_0xdfd373[_0x4b4b67(0x579)](/STEP AWAY FROM HOME/i)&&this[_0x4b4b67(0x36b)]){const _0x341077=this[_0x4b4b67(0x462)],_0x387b85=this['_randomHomeY'];return this[_0x4b4b67(0x4e6)](_0x341077,_0x387b85);}if(_0xdfd373['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){if('OoLnf'!==_0x4b4b67(0x2f2))return this[_0x4b4b67(0x58d)](Number(RegExp['$1']),Number(RegExp['$2']));else{let _0x5eb11f='You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a'['format'](_0x4b7259['mapId']);_0x5eb11f+=_0x4b4b67(0x51a),_0x5eb11f+='Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a',_0x5eb11f+=_0x4b4b67(0x2a1),_0x5eb11f+=_0x4b4b67(0x630)['format'](_0x38bbaa[_0x4b4b67(0x52d)]),_0x2ba270(_0x5eb11f);return;}}if(_0xdfd373[_0x4b4b67(0x579)](/TURN TO EVENT:[ ](\d+)/i)){const _0xa39c99=$gameMap[_0x4b4b67(0x431)](Number(RegExp['$1']));return this[_0x4b4b67(0x23e)](_0xa39c99);}if(_0xdfd373[_0x4b4b67(0x579)](/TURN TO PLAYER/i)){if('HmFNe'!=='qUIuC')return this['turnTowardCharacter']($gamePlayer);else this['scale']['x']=0x1/_0x3c46e3['zoomScale'](),this['scale']['y']=0x1/_0x38cc2c[_0x4b4b67(0x376)](),this[_0x4b4b67(0x31d)]=_0x3b9d65[_0x4b4b67(0x376)]();}if(_0xdfd373['match'](/TURN TO HOME/i)&&this['eventId']){const _0xfc5e64=this[_0x4b4b67(0x462)],_0x10c22c=this[_0x4b4b67(0x526)];return this[_0x4b4b67(0x67b)](_0xfc5e64,_0x10c22c);}if(_0xdfd373[_0x4b4b67(0x579)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i)){if('rzEis'!==_0x4b4b67(0x338))this['_moveSynch'][_0x4b4b67(0x2cf)]=_0x5a6ae0(_0x3886e9['$1']);else return this[_0x4b4b67(0x566)](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0xdfd373[_0x4b4b67(0x579)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){if('JTPDW'!==_0x4b4b67(0x3fe)){const _0x146efc=$gameMap[_0x4b4b67(0x431)](Number(RegExp['$1']));return this['turnAwayFromCharacter'](_0x146efc);}else return this[_0x4b4b67(0x182)]()&&this[_0x4b4b67(0x4ba)]===0x0;}if(_0xdfd373[_0x4b4b67(0x579)](/TURN AWAY FROM PLAYER/i)){if('GFZuv'!==_0x4b4b67(0x1b1))return this[_0x4b4b67(0x1f6)]($gamePlayer);else this[_0x4b4b67(0x240)]=_0x4fc956[_0x4b4b67(0x5ba)](),_0x4784ee[_0x4b4b67(0x163)][_0x4b4b67(0x50b)][_0x4b4b67(0x1ce)](this,_0x27b74b,_0x12b9dc);}if(_0xdfd373[_0x4b4b67(0x579)](/TURN AWAY FROM HOME/i)&&this[_0x4b4b67(0x36b)]){if('iUlYQ'==='mVhcN')this[_0x4b4b67(0x6bd)]=0x0;else{const _0x179fda=this['_randomHomeX'],_0x44b7d6=this[_0x4b4b67(0x526)];return this[_0x4b4b67(0x566)](_0x179fda,_0x44b7d6);}}if(_0xdfd373['match'](/TURN LOWER LEFT/i))return this[_0x4b4b67(0x4e1)](0x1);if(_0xdfd373['match'](/TURN LOWER RIGHT/i))return this[_0x4b4b67(0x4e1)](0x3);if(_0xdfd373['match'](/TURN UPPER LEFT/i))return this[_0x4b4b67(0x4e1)](0x7);if(_0xdfd373[_0x4b4b67(0x579)](/TURN UPPER RIGHT/i))return this[_0x4b4b67(0x4e1)](0x9);if(_0xdfd373[_0x4b4b67(0x579)](/Self Switch[ ](.*):[ ](.*)/i))return this['processMoveRouteSelfSwitch'](RegExp['$1'],RegExp['$2']);if(_0xdfd373['match'](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x4b4b67(0x4d6)](RegExp['$1'],RegExp['$2']);if(_0xdfd373[_0x4b4b67(0x579)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x4b4b67(0x600)!==_0x4b4b67(0x600)){const _0x1a58c7=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x4b4b67(0x354)]()];return _0x5a1e5f[_0x4b4b67(0x56c)](this['y'],_0x1a58c7);}else return this[_0x4b4b67(0x501)](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0xdfd373[_0x4b4b67(0x579)](/TELEPORT TO EVENT:[ ](\d+)/i)){if(_0x4b4b67(0x22d)===_0x4b4b67(0x230))this[_0x4b4b67(0x5e1)](_0x472c44,_0x15aecf);else{const _0x34b2f0=$gameMap['event'](Number(RegExp['$1']));return this[_0x4b4b67(0x390)](_0x34b2f0);}}if(_0xdfd373[_0x4b4b67(0x579)](/TELEPORT TO PLAYER/i))return this[_0x4b4b67(0x390)]($gamePlayer);if(_0xdfd373[_0x4b4b67(0x579)](/TELEPORT TO HOME/i)&&this['eventId']){const _0x1c4c36=this[_0x4b4b67(0x462)],_0x7f419d=this[_0x4b4b67(0x526)];return this[_0x4b4b67(0x501)](_0x1c4c36,_0x7f419d);}try{VisuMZ[_0x4b4b67(0x163)]['Game_Character_processMoveCommand']['call'](this,_0x3233eb);}catch(_0x5ca855){if(_0x4b4b67(0x307)!==_0x4b4b67(0x3f3)){if($gameTemp[_0x4b4b67(0x53a)]())console[_0x4b4b67(0x562)](_0x5ca855);}else{if(_0x448692[_0x4b4b67(0x53a)]())_0x30a26f['log'](_0x12f7ef);}}},Game_Character['prototype'][_0x533487(0x1d1)]=function(_0xd9e6a5){const _0x3ea689=_0x533487;$gameTemp[_0x3ea689(0x415)]([this],_0xd9e6a5);},Game_Character[_0x533487(0x48b)][_0x533487(0x247)]=function(_0x1f1e99){const _0x5df74d=_0x533487;let _0x288df0=0x0;switch(_0x1f1e99[_0x5df74d(0x651)]()[_0x5df74d(0x1ff)]()){case'!':case _0x5df74d(0x303):_0x288df0=0x1;break;case'?':case'QUESTION':_0x288df0=0x2;break;case'MUSIC':case _0x5df74d(0x647):case _0x5df74d(0x369):case _0x5df74d(0x488):case _0x5df74d(0x567):_0x288df0=0x3;break;case _0x5df74d(0x220):case _0x5df74d(0x3d8):_0x288df0=0x4;break;case _0x5df74d(0x380):_0x288df0=0x5;break;case'SWEAT':_0x288df0=0x6;break;case _0x5df74d(0x594):case _0x5df74d(0x591):case _0x5df74d(0x3bb):_0x288df0=0x7;break;case _0x5df74d(0x3f8):case _0x5df74d(0x207):_0x288df0=0x8;break;case _0x5df74d(0x131):case _0x5df74d(0x318):case'LIGHT\x20BULB':case _0x5df74d(0x38e):case _0x5df74d(0x32f):_0x288df0=0x9;break;case'Z':case'ZZ':case'ZZZ':case _0x5df74d(0x22c):_0x288df0=0xa;break;case'USER-DEFINED\x201':_0x288df0=0xb;break;case _0x5df74d(0x678):_0x288df0=0xc;break;case _0x5df74d(0x5f3):_0x288df0=0xd;break;case _0x5df74d(0x56d):_0x288df0=0xe;break;case _0x5df74d(0x3cd):_0x288df0=0xf;break;}$gameTemp[_0x5df74d(0x21e)](this,_0x288df0);},Game_Character['prototype'][_0x533487(0x404)]=function(_0xa19333){const _0x4b2e45=_0x533487;_0xa19333+=this[_0x4b2e45(0x6a8)],this[_0x4b2e45(0x2bd)](_0xa19333['clamp'](0x0,0xff));if(this[_0x4b2e45(0x6a8)]<0xff)this[_0x4b2e45(0x41f)]--;},Game_Character[_0x533487(0x48b)][_0x533487(0x471)]=function(_0x2ddc9f){const _0x75dbb4=_0x533487;_0x2ddc9f=this[_0x75dbb4(0x6a8)]-_0x2ddc9f,this['setOpacity'](_0x2ddc9f[_0x75dbb4(0x311)](0x0,0xff));if(this['_opacity']>0x0)this[_0x75dbb4(0x41f)]--;},Game_Character['prototype'][_0x533487(0x19a)]=function(_0x53e9ac){const _0x674207=_0x533487,_0x593a01=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x587ac6=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x503fb2=this['direction'](),_0x4cf3c7=(_0x53e9ac===_0x674207(0x655)?_0x593a01:_0x587ac6)[_0x503fb2],_0x45d82a=(_0x53e9ac===_0x674207(0x655)?_0x587ac6:_0x593a01)[_0x503fb2];if(this[_0x674207(0x66c)](this['x'],this['y'],_0x4cf3c7))_0x53e9ac===_0x674207(0x655)?this[_0x674207(0x692)]():this[_0x674207(0x3d1)]();else!this[_0x674207(0x66c)](this['x'],this['y'],this[_0x674207(0x354)]())&&(this[_0x674207(0x66c)](this['x'],this['y'],_0x45d82a)?_0x53e9ac===_0x674207(0x655)?this[_0x674207(0x3d1)]():this['turnLeft90']():this[_0x674207(0x642)]());if(this[_0x674207(0x66c)](this['x'],this['y'],this['direction']())){if('QaltL'==='QaltL')this[_0x674207(0x22f)]();else return this['processMoveRouteTeleportTo'](_0x3fa556(_0x41dc6c['$1']),_0x38cb4d(_0xc688f['$2']));}},Game_Character[_0x533487(0x48b)][_0x533487(0x666)]=function(_0x2586e5){const _0x5d6c75=_0x533487;if(ImageManager[_0x5d6c75(0x11a)](this['_characterName']))return;_0x2586e5=_0x2586e5[_0x5d6c75(0x311)](0x0,0x7),this[_0x5d6c75(0x5af)](this[_0x5d6c75(0x4b9)],_0x2586e5);},Game_Character['prototype'][_0x533487(0x67e)]=function(_0x4dd3cf){const _0x12217d=_0x533487;switch(this[_0x12217d(0x354)]()){case 0x1:this[_0x12217d(0x3c7)](-_0x4dd3cf,_0x4dd3cf);break;case 0x2:this[_0x12217d(0x3c7)](0x0,_0x4dd3cf);break;case 0x3:this['jump'](_0x4dd3cf,_0x4dd3cf);break;case 0x4:this[_0x12217d(0x3c7)](-_0x4dd3cf,0x0);break;case 0x6:this[_0x12217d(0x3c7)](_0x4dd3cf,0x0);break;case 0x7:this[_0x12217d(0x3c7)](-_0x4dd3cf,-_0x4dd3cf);break;case 0x8:this['jump'](0x0,-_0x4dd3cf);break;case 0x9:this[_0x12217d(0x3c7)](_0x4dd3cf,-_0x4dd3cf);break;}},Game_Character[_0x533487(0x48b)][_0x533487(0x44d)]=function(_0x2ff506,_0x2000b1){const _0x33391d=_0x533487,_0x5ce48c=Math[_0x33391d(0x22e)](_0x2ff506-this['x']),_0x55698e=Math[_0x33391d(0x22e)](_0x2000b1-this['y']);this['jump'](_0x5ce48c,_0x55698e);},Game_Character[_0x533487(0x48b)][_0x533487(0x258)]=function(_0x952826){const _0x41572a=_0x533487;if(_0x952826)this[_0x41572a(0x44d)](_0x952826['x'],_0x952826['y']);},Game_Character[_0x533487(0x48b)]['processMoveRouteStepTo']=function(_0x5116df,_0x5e4d55,_0x5e3b93){const _0x1f37a5=_0x533487;let _0x1da08e=0x0;if(_0x5e3b93)$gameTemp[_0x1f37a5(0x2a5)]=!![];if($gameMap[_0x1f37a5(0x55b)]())_0x1f37a5(0x339)!==_0x1f37a5(0x339)?(_0x521fb1[_0x1f37a5(0x2df)](_0x24d2f0['_selfTargetItemChoice']),_0x511c1c['EventsMoveCore'][_0x1f37a5(0x38b)][_0x1f37a5(0x1ce)](this),_0x69f09f[_0x1f37a5(0x4dc)](),_0x424b03[_0x1f37a5(0x29c)]=_0x256a5b):_0x1da08e=this[_0x1f37a5(0x34c)](_0x5116df,_0x5e4d55);else{if('xmrcI'!=='weHDJ')_0x1da08e=this[_0x1f37a5(0x34b)](_0x5116df,_0x5e4d55);else{if(this[_0x1f37a5(0x2e0)]===_0xc819e3)this[_0x1f37a5(0x265)]();const _0x2196c4='Map%1-Event%2'[_0x1f37a5(0x1b5)](_0x34a336,_0x2194c2);delete this[_0x1f37a5(0x2e0)][_0x2196c4];}}if(_0x5e3b93)$gameTemp['_moveAllowPlayerCollision']=![];this[_0x1f37a5(0x49d)](_0x1da08e),this['setMovementSuccess'](!![]);},Game_Character[_0x533487(0x48b)]['processMoveRouteStepToCharacter']=function(_0x2a8473){const _0x200b89=_0x533487;if(_0x2a8473)this[_0x200b89(0x17c)](_0x2a8473['x'],_0x2a8473['y']);},Game_Character['prototype']['processMoveRouteStepFrom']=function(_0x526de3,_0x5c9da3){const _0x2faa65=_0x533487,_0x26b045=this['deltaXFrom'](_0x526de3),_0x3c79fa=this[_0x2faa65(0x419)](_0x5c9da3);},Game_Character[_0x533487(0x48b)][_0x533487(0x1a6)]=function(_0x4b391c){const _0x3c8078=_0x533487;if(_0x4b391c[_0x3c8078(0x579)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else{if(_0x4b391c[_0x3c8078(0x579)](/(?:AVOID|EVADE|DODGE)/i))return![];else{if('ULKli'!==_0x3c8078(0x1ae)){const _0x22fc8e=_0x155749[_0x3c8078(0x163)][_0x3c8078(0x5eb)]['Movement'],_0x14111d=this[_0x3c8078(0x444)][_0x3c8078(0x354)]();let _0x292206=0x0;if([0x1,0x4,0x7]['includes'](_0x14111d))_0x292206=_0x22fc8e[_0x3c8078(0x690)];if([0x3,0x6,0x9][_0x3c8078(0x1c6)](_0x14111d))_0x292206=_0x22fc8e['TiltRight'];[0x2,0x8][_0x3c8078(0x1c6)](_0x14111d)&&(_0x292206=[-_0x22fc8e['TiltVert'],0x0,_0x22fc8e[_0x3c8078(0x549)]][this[_0x3c8078(0x444)][_0x3c8078(0x252)]()]);if(this[_0x3c8078(0x1de)])_0x292206*=-0x1;this[_0x3c8078(0x26d)]=_0x292206;}else return![];}}},VisuMZ[_0x533487(0x163)][_0x533487(0x6b5)]=Game_Event[_0x533487(0x48b)][_0x533487(0x27b)],Game_Event['prototype']['isCollidedWithPlayerCharacters']=function(_0x486e2d,_0x1c64e7){const _0x457481=_0x533487;if($gameTemp[_0x457481(0x2a5)])return![];return VisuMZ[_0x457481(0x163)][_0x457481(0x6b5)][_0x457481(0x1ce)](this,_0x486e2d,_0x1c64e7);},Game_Character[_0x533487(0x48b)]['processMoveRouteMoveUntilStop']=function(_0x2155bd,_0xdd2d73){const _0xbc18d2=_0x533487,_0x273bd2=['',_0xbc18d2(0x568),_0xbc18d2(0x25f),_0xbc18d2(0x167),_0xbc18d2(0x682),'',_0xbc18d2(0x586),_0xbc18d2(0x274),'UP',_0xbc18d2(0x15e)],_0x3b7f5b=_0x273bd2[_0xbc18d2(0x270)](_0x2155bd['toUpperCase']()[_0xbc18d2(0x1ff)]());if(_0x3b7f5b<=0x0)return;if(_0xdd2d73)$gameTemp[_0xbc18d2(0x2a5)]=!![];if(this[_0xbc18d2(0x66c)](this['x'],this['y'],_0x3b7f5b)){if(_0xdd2d73)$gameTemp[_0xbc18d2(0x2a5)]=![];this[_0xbc18d2(0x49d)](_0x3b7f5b),this['_moveRouteIndex']-=0x1;}if(_0xdd2d73)$gameTemp[_0xbc18d2(0x2a5)]=![];},Game_Character[_0x533487(0x48b)][_0x533487(0x118)]=function(_0x1fb5af,_0x469285,_0x366277){const _0x1490be=_0x533487;this[_0x1490be(0x17c)](_0x1fb5af,_0x469285,_0x366277);if(this['x']!==_0x1fb5af||this['y']!==_0x469285)this[_0x1490be(0x41f)]--;},Game_Character['prototype'][_0x533487(0x17e)]=function(_0x2a504d,_0x11a430){const _0x1a90c1=_0x533487;if(_0x2a504d&&!_0x2a504d[_0x1a90c1(0x5f2)]){if(_0x1a90c1(0x35d)==='EjFRF'){this[_0x1a90c1(0x118)](_0x2a504d['x'],_0x2a504d['y'],_0x11a430);if(_0x2a504d['isNormalPriority']()&&this[_0x1a90c1(0x1f7)]()){if('SSyRx'!==_0x1a90c1(0x1b4)){const _0xfd06a3=$gameMap['distance'](this['x'],this['y'],_0x2a504d['x'],_0x2a504d['y']);if(_0xfd06a3<=0x1)this[_0x1a90c1(0x41f)]++;}else{for(const _0x54badc of this['_spawnedEvents']){if(_0x54badc)return _0x54badc;}return null;}}}else this['contentsOpacity']=0x0;}},Game_Character['prototype']['processMoveRouteMoveRepeat']=function(_0x216162,_0x485820){const _0xacc06b=_0x533487;_0x485820=_0x485820||0x0;const _0x134127={'code':0x1,'indent':null,'parameters':[]};_0x134127[_0xacc06b(0x395)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x216162],this[_0xacc06b(0x452)][_0xacc06b(0x53c)][this['_moveRouteIndex']][_0xacc06b(0x6cf)][0x0]='';while(_0x485820--){if(_0xacc06b(0x281)===_0xacc06b(0x281))this[_0xacc06b(0x452)][_0xacc06b(0x53c)][_0xacc06b(0x2ac)](this['_moveRouteIndex']+0x1,0x0,_0x134127);else{const _0x2977dc=[_0x1ad86a[_0xacc06b(0x21c)],_0x57c5e9['_eventId'],_0xacc06b(0x24d)['format'](_0x1e18c8)];_0x5512ec[_0xacc06b(0x575)](_0x2977dc,_0xd476d6);}}},Game_Character[_0x533487(0x48b)][_0x533487(0x44b)]=function(_0x875a1f){const _0x1b878e=_0x533487;this[_0x1b878e(0x322)]=!![],this[_0x1b878e(0x581)](_0x875a1f);},Game_Character[_0x533487(0x48b)][_0x533487(0x28e)]=function(_0x4f3a5e,_0x547d01){const _0x13c91a=_0x533487;if(this===$gamePlayer)return;const _0x519878=[this['_mapId'],this[_0x13c91a(0x17b)],'A'];_0x4f3a5e[_0x13c91a(0x579)](/\b[ABCD]\b/i)?'kkprD'===_0x13c91a(0x208)?_0x519878[0x2]=String(_0x4f3a5e)[_0x13c91a(0x4c8)](0x0)['toUpperCase']()[_0x13c91a(0x1ff)]():_0x500475=_0x1bd84d['replace'](_0x393e16,(_0x1b23f2,_0x509f8b)=>_0xce5b2[_0x13c91a(0x67f)](_0x43fdaf(_0x509f8b))):_0x13c91a(0x242)===_0x13c91a(0x242)?_0x519878[0x2]=_0x13c91a(0x24d)[_0x13c91a(0x1b5)](_0x4f3a5e):_0x4385bf[_0x545fc5]?(_0x52c2b0[_0x13c91a(0x31f)][_0x4aafaf]=_0x10bfe1[_0x45ae03],_0xf66a03[_0x71be0]=_0x325012):_0xd018a9(this[_0x13c91a(0x57f)][_0x13c91a(0x6c8)](this,_0x4faaab,_0x46382f),0x64);switch(_0x547d01[_0x13c91a(0x651)]()[_0x13c91a(0x1ff)]()){case'ON':case _0x13c91a(0x22b):$gameSelfSwitches[_0x13c91a(0x575)](_0x519878,!![]);break;case _0x13c91a(0x2ef):case _0x13c91a(0x555):$gameSelfSwitches[_0x13c91a(0x575)](_0x519878,![]);break;case _0x13c91a(0x393):$gameSelfSwitches['setValue'](_0x519878,!$gameSelfSwitches[_0x13c91a(0x67f)](_0x519878));break;}},Game_Character['prototype'][_0x533487(0x4d6)]=function(_0x3aa51c,_0x35785a){const _0x18a206=_0x533487;if(this===$gamePlayer)return;const _0x2c1cc3=[this[_0x18a206(0x21c)],this[_0x18a206(0x17b)],'Self\x20Variable\x20%1'['format'](_0x3aa51c)];$gameSelfSwitches[_0x18a206(0x575)](_0x2c1cc3,Number(_0x35785a));},Game_Character[_0x533487(0x48b)][_0x533487(0x501)]=function(_0x493ce6,_0x1e9339){const _0x110d3e=_0x533487;this[_0x110d3e(0x5e1)](_0x493ce6,_0x1e9339);},Game_Character[_0x533487(0x48b)][_0x533487(0x390)]=function(_0x3ea7a3){const _0x5939b2=_0x533487;if(_0x3ea7a3)this[_0x5939b2(0x501)](_0x3ea7a3['x'],_0x3ea7a3['y']);},Game_Character[_0x533487(0x48b)]['turnRight90']=function(){const _0x2d7f51=_0x533487;switch(this[_0x2d7f51(0x354)]()){case 0x1:this[_0x2d7f51(0x4e1)](0x7);break;case 0x2:this[_0x2d7f51(0x4e1)](0x4);break;case 0x3:this[_0x2d7f51(0x4e1)](0x1);break;case 0x4:this[_0x2d7f51(0x4e1)](0x8);break;case 0x6:this['setDirection'](0x2);break;case 0x7:this[_0x2d7f51(0x4e1)](0x9);break;case 0x8:this['setDirection'](0x6);break;case 0x9:this['setDirection'](0x3);break;}},Game_Character[_0x533487(0x48b)][_0x533487(0x692)]=function(){const _0x1c1fc7=_0x533487;switch(this[_0x1c1fc7(0x354)]()){case 0x1:this[_0x1c1fc7(0x4e1)](0x3);break;case 0x2:this['setDirection'](0x6);break;case 0x3:this[_0x1c1fc7(0x4e1)](0x9);break;case 0x4:this[_0x1c1fc7(0x4e1)](0x2);break;case 0x6:this[_0x1c1fc7(0x4e1)](0x8);break;case 0x7:this[_0x1c1fc7(0x4e1)](0x1);break;case 0x8:this[_0x1c1fc7(0x4e1)](0x4);break;case 0x9:this[_0x1c1fc7(0x4e1)](0x7);break;}},Game_Character['prototype'][_0x533487(0x15f)]=function(_0x18ace5,_0x14d201,_0x3c714c){const _0x4eef4f=_0x533487,_0x1863bd=this[_0x4eef4f(0x4eb)](_0x18ace5),_0x440c05=this[_0x4eef4f(0x419)](_0x14d201);if($gameMap[_0x4eef4f(0x55b)]()){if(_0x3c714c||this[_0x4eef4f(0x3a4)]()){if(_0x1863bd>0x0&&_0x440c05<0x0)return 0x1;if(_0x1863bd<0x0&&_0x440c05<0x0)return 0x3;if(_0x1863bd>0x0&&_0x440c05>0x0)return 0x7;if(_0x1863bd<0x0&&_0x440c05>0x0)return 0x9;}}if(Math[_0x4eef4f(0x353)](_0x1863bd)>Math[_0x4eef4f(0x353)](_0x440c05))return _0x1863bd>0x0?0x4:0x6;else{if(_0x440c05!==0x0)return _0x440c05>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x533487(0x48b)][_0x533487(0x5d3)]=function(_0x2328d1,_0x5215dd,_0x280828){const _0x11e481=_0x533487,_0x5bf094=this['deltaXFrom'](_0x2328d1),_0x3b9db5=this[_0x11e481(0x419)](_0x5215dd);if($gameMap[_0x11e481(0x55b)]()){if(_0x280828||this[_0x11e481(0x3a4)]()){if(_0x5bf094>0x0&&_0x3b9db5<0x0)return 0x9;if(_0x5bf094<0x0&&_0x3b9db5<0x0)return 0x7;if(_0x5bf094>0x0&&_0x3b9db5>0x0)return 0x3;if(_0x5bf094<0x0&&_0x3b9db5>0x0)return 0x1;}}if(Math[_0x11e481(0x353)](_0x5bf094)>Math[_0x11e481(0x353)](_0x3b9db5))return _0x11e481(0x26a)==='DdMnd'?this[_0x11e481(0x323)]():_0x5bf094>0x0?0x6:0x4;else{if(_0x3b9db5!==0x0){if('fjhjE'!==_0x11e481(0x654))return _0x3b9db5>0x0?0x2:0x8;else _0x3faf1b=_0x3e9895[_0x11e481(0x2d5)](_0x18bd25),_0x2c6e79['EventsMoveCore']['Game_Character_forceMoveRoute'][_0x11e481(0x1ce)](this,_0x563d40);}}return 0x0;},Game_Character['prototype'][_0x533487(0x58d)]=function(_0x5ef403,_0x2c38af){const _0x2a87b7=_0x533487,_0x304ed0=this[_0x2a87b7(0x15f)](_0x5ef403,_0x2c38af,!![]);if(_0x304ed0)this[_0x2a87b7(0x49d)](_0x304ed0);},Game_Character[_0x533487(0x48b)]['moveAwayFromPoint']=function(_0x2ee2f1,_0x2494d7){const _0x25fb61=_0x533487,_0x3490bb=this[_0x25fb61(0x5d3)](_0x2ee2f1,_0x2494d7,!![]);if(_0x3490bb)this['executeMoveDir8'](_0x3490bb);},Game_Character[_0x533487(0x48b)][_0x533487(0x67b)]=function(_0x49ddf7,_0x2b8b34){const _0x2d4bc3=_0x533487,_0x45bd89=this[_0x2d4bc3(0x15f)](_0x49ddf7,_0x2b8b34,![]);if(_0x45bd89)this['setDirection'](_0x45bd89);},Game_Character[_0x533487(0x48b)][_0x533487(0x566)]=function(_0x15915e,_0x5a8917){const _0x32e9cb=_0x533487,_0x357c39=this['getDirectionFromPoint'](_0x15915e,_0x5a8917,![]);if(_0x357c39)this[_0x32e9cb(0x4e1)](_0x357c39);},Game_Character[_0x533487(0x48b)]['moveTowardCharacter']=function(_0x6005b0){const _0x377e19=_0x533487;if(_0x6005b0)this[_0x377e19(0x58d)](_0x6005b0['x'],_0x6005b0['y']);},Game_Character[_0x533487(0x48b)][_0x533487(0x550)]=function(_0x4911ce){const _0x277220=_0x533487;if(_0x4911ce)this[_0x277220(0x4e6)](_0x4911ce['x'],_0x4911ce['y']);},Game_Character[_0x533487(0x48b)][_0x533487(0x23e)]=function(_0x33653f){const _0x465b2f=_0x533487;if(_0x33653f)this[_0x465b2f(0x67b)](_0x33653f['x'],_0x33653f['y']);},Game_Character[_0x533487(0x48b)][_0x533487(0x1f6)]=function(_0x276431){const _0x31af8f=_0x533487;if(_0x276431)this[_0x31af8f(0x566)](_0x276431['x'],_0x276431['y']);},VisuMZ[_0x533487(0x163)][_0x533487(0x228)]=Game_Player[_0x533487(0x48b)][_0x533487(0x182)],Game_Player[_0x533487(0x48b)][_0x533487(0x182)]=function(){const _0x8badf=_0x533487;if(!Game_CharacterBase['ALLOW_LADDER_DASH']&&this[_0x8badf(0x5cc)]())return![];if(this['_forceDashing'])return!![];return VisuMZ[_0x8badf(0x163)]['Game_Player_isDashing'][_0x8badf(0x1ce)](this);},VisuMZ['EventsMoveCore']['Game_Player_getInputDirection']=Game_Player[_0x533487(0x48b)][_0x533487(0x538)],Game_Player[_0x533487(0x48b)]['getInputDirection']=function(){const _0xdb1c47=_0x533487;if($gameMap[_0xdb1c47(0x55b)]()){if(_0xdb1c47(0x36f)==='MedRL')return this[_0xdb1c47(0x4cc)]();else{this[_0xdb1c47(0x5fc)]=![];const _0x1dc19c=_0x46cfcb[_0xdb1c47(0x249)]||'';_0x1dc19c[_0xdb1c47(0x579)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0xdb1c47(0x5fc)]=!![]);}}else return _0xdb1c47(0x160)!=='oQUnc'?_0x2255a9['PlayerAllow']['includes'](_0x4cfe63)||_0xb9914d[_0xdb1c47(0x180)][_0xdb1c47(0x1c6)](_0x614470):VisuMZ['EventsMoveCore'][_0xdb1c47(0x27c)][_0xdb1c47(0x1ce)](this);},Game_Player[_0x533487(0x48b)][_0x533487(0x4cc)]=function(){const _0x415c1d=_0x533487;return Input[_0x415c1d(0x218)];},Game_Player[_0x533487(0x48b)]['moveByInput']=function(){const _0x1b05c5=_0x533487;if($gameSystem[_0x1b05c5(0x20d)]())return 0x0;if(!this[_0x1b05c5(0x291)]()&&this[_0x1b05c5(0x210)]()){let _0x14e4c7=this[_0x1b05c5(0x538)]();if(_0x14e4c7>0x0)$gameTemp[_0x1b05c5(0x14d)]();else{if($gameTemp['isDestinationValid']()){if(_0x1b05c5(0x205)===_0x1b05c5(0x50a)){this[_0x1b05c5(0x6d1)]=_0x11f299[_0x1b05c5(0x163)]['Settings'][_0x1b05c5(0x3ef)][_0x1b05c5(0x233)];const _0x258d25=_0x3349a2[_0x1b05c5(0x249)]||'';if(_0x258d25[_0x1b05c5(0x579)](/<DIAGONAL MOVEMENT: ON>/i))this[_0x1b05c5(0x6d1)]=!![];else _0x258d25[_0x1b05c5(0x579)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this['_diagonalSupport']=![]);}else{const _0x6a20ba=$gameTemp['destinationX'](),_0x5556d3=$gameTemp[_0x1b05c5(0x6b9)]();if(this[_0x1b05c5(0x4f7)](_0x6a20ba,_0x5556d3))_0x1b05c5(0x39a)===_0x1b05c5(0x39a)?_0x14e4c7=this['findDiagonalDirectionTo'](_0x6a20ba,_0x5556d3):this['setWaitMode'](_0x1b05c5(0x287));else{if(_0x1b05c5(0x4f4)===_0x1b05c5(0x6bb)){if(!_0x1ca7c1)return;_0x15752b[_0x1b05c5(0x24f)]={'x':_0x28ae1f['x'],'y':_0x3356eb['y']},this['createEventsMoveCoreTileMessagePopup'](_0x48ce5f);}else _0x14e4c7=this[_0x1b05c5(0x34b)](_0x6a20ba,_0x5556d3);}}}}_0x14e4c7>0x0?(this[_0x1b05c5(0x653)]=this[_0x1b05c5(0x653)]||0x0,this['isTurnInPlace']()?_0x1b05c5(0x681)===_0x1b05c5(0x640)?this['createLabelWindowForTarget'](_0x4c01d3):this['setDirection'](_0x14e4c7):this[_0x1b05c5(0x2aa)](_0x14e4c7),this[_0x1b05c5(0x653)]++):this[_0x1b05c5(0x653)]=0x0;}},Game_Player[_0x533487(0x48b)][_0x533487(0x18b)]=function(){const _0x11fb22=_0x533487,_0x5efe8d=VisuMZ[_0x11fb22(0x163)][_0x11fb22(0x5eb)]['Movement'];if(!_0x5efe8d['EnableTurnInPlace'])return![];if($gameTemp[_0x11fb22(0x42c)]())return![];if(this['isDashing']()||this[_0x11fb22(0x291)]()||this['isOnLadder']())return![];return this[_0x11fb22(0x653)]<_0x5efe8d[_0x11fb22(0x2bb)];},VisuMZ[_0x533487(0x163)][_0x533487(0x320)]=Game_Player[_0x533487(0x48b)][_0x533487(0x2aa)],Game_Player[_0x533487(0x48b)][_0x533487(0x2aa)]=function(_0x51e214){const _0x47f3c7=_0x533487;if($gameMap['isSupportDiagonalMovement']())this[_0x47f3c7(0x49d)](_0x51e214);else{if(_0x47f3c7(0x124)!==_0x47f3c7(0x3a6))VisuMZ[_0x47f3c7(0x163)][_0x47f3c7(0x320)]['call'](this,_0x51e214);else return _0x5baa38[_0x47f3c7(0x1ba)][_0x47f3c7(0x1c6)](_0x4385e3)||_0x1e87b8[_0x47f3c7(0x2f6)][_0x47f3c7(0x1c6)](_0x58001d);}},VisuMZ[_0x533487(0x163)][_0x533487(0x1d6)]=Game_Player[_0x533487(0x48b)]['isMapPassable'],Game_Player[_0x533487(0x48b)][_0x533487(0x5f7)]=function(_0x3145d1,_0x5648cd,_0x5d4b79){const _0x56b15c=_0x533487;if($gameMap[_0x56b15c(0x69c)](_0x3145d1,_0x5648cd,_0x5d4b79,_0x56b15c(0x454))){if(this[_0x56b15c(0x4d7)]()&&this[_0x56b15c(0x23f)]())return this['vehicle']()[_0x56b15c(0x5f7)](_0x3145d1,_0x5648cd,_0x5d4b79);else{if(_0x56b15c(0x2b4)===_0x56b15c(0x2b4))return!![];else{if(_0xcca316['isRegionAllowPass'](_0x30e82c,_0x3265cf,_0x5653ed,this[_0x56b15c(0x127)]))return!![];if(_0x5d3c88[_0x56b15c(0x392)](_0x1d58ec,_0x2aef51,_0x645ab5,this[_0x56b15c(0x127)]))return![];return _0x254a87[_0x56b15c(0x163)][_0x56b15c(0x16e)][_0x56b15c(0x1ce)](this,_0x39690d,_0x23f7f9,_0xe0b682);}}}if($gameMap['isRegionForbidPass'](_0x3145d1,_0x5648cd,_0x5d4b79,_0x56b15c(0x454)))return![];return VisuMZ[_0x56b15c(0x163)][_0x56b15c(0x1d6)][_0x56b15c(0x1ce)](this,_0x3145d1,_0x5648cd,_0x5d4b79);},VisuMZ[_0x533487(0x163)][_0x533487(0x446)]=Game_Player[_0x533487(0x48b)][_0x533487(0x3bc)],Game_Player[_0x533487(0x48b)][_0x533487(0x3bc)]=function(_0x1950ef){const _0x3bc931=_0x533487;VisuMZ[_0x3bc931(0x163)][_0x3bc931(0x446)][_0x3bc931(0x1ce)](this,_0x1950ef);if(this[_0x3bc931(0x5ee)]()){if(_0x3bc931(0x571)===_0x3bc931(0x40b)){if(_0x5df780[_0x3bc931(0x5ed)]())return![];return _0x4d6734[_0x3bc931(0x1ad)][_0x3bc931(0x1c6)](_0x170f94);}else{this['checkEventTriggerEventsMoveCore'](_0x1950ef);if(_0x1950ef[_0x3bc931(0x1c6)](0x0)&&this['startMapCommonEventOnOKTarget']()===_0x3bc931(0x617))this[_0x3bc931(0x440)](this['x'],this['y']);else(_0x1950ef[_0x3bc931(0x1c6)](0x1)||_0x1950ef[_0x3bc931(0x1c6)](0x2))&&this[_0x3bc931(0x472)]();}}},VisuMZ[_0x533487(0x163)][_0x533487(0x42b)]=Game_Player[_0x533487(0x48b)][_0x533487(0x365)],Game_Player['prototype'][_0x533487(0x365)]=function(_0xc329b0){const _0x2cf0e1=_0x533487;VisuMZ[_0x2cf0e1(0x163)][_0x2cf0e1(0x42b)][_0x2cf0e1(0x1ce)](this,_0xc329b0);if(this[_0x2cf0e1(0x5ee)]()&&_0xc329b0[_0x2cf0e1(0x1c6)](0x0)&&this['startMapCommonEventOnOKTarget']()===_0x2cf0e1(0x596)){const _0x23bf95=this[_0x2cf0e1(0x354)](),_0x575d1b=$gameMap['roundXWithDirection'](this['x'],_0x23bf95),_0x31024d=$gameMap[_0x2cf0e1(0x56c)](this['y'],_0x23bf95);this[_0x2cf0e1(0x440)](_0x575d1b,_0x31024d);}},Game_Player['prototype'][_0x533487(0x663)]=function(_0x9a8b78){const _0x54910c=_0x533487;if($gameMap['isEventRunning']())return;if($gameMap[_0x54910c(0x246)]())return;const _0x43826f=$gameMap['events']();for(const _0x19d34c of _0x43826f){if(_0x54910c(0x497)===_0x54910c(0x497)){if(!_0x19d34c)continue;if(!_0x19d34c[_0x54910c(0x24b)](_0x9a8b78))continue;if(this['meetActivationRegionConditions'](_0x19d34c))return _0x19d34c['start']();if(this['meetActivationProximityConditions'](_0x19d34c))return _0x19d34c[_0x54910c(0x337)]();}else{const _0xf7429e=this[_0x54910c(0x462)],_0x49f1ea=this['_randomHomeY'];return this[_0x54910c(0x566)](_0xf7429e,_0x49f1ea);}}},Game_Player[_0x533487(0x48b)]['meetActivationRegionConditions']=function(_0x14d807){const _0x2b848d=_0x533487;if($gameMap[_0x2b848d(0x279)]())return![];if($gameMap[_0x2b848d(0x246)]())return![];return _0x14d807['activationRegionList']()[_0x2b848d(0x1c6)](this[_0x2b848d(0x2ec)]());},Game_Player[_0x533487(0x48b)]['meetActivationProximityConditions']=function(_0x433714){const _0x2c2701=_0x533487;if($gameMap[_0x2c2701(0x279)]())return![];if($gameMap['isAnyEventStarting']())return![];if([_0x2c2701(0x14c),_0x2c2701(0x145)]['includes'](_0x433714[_0x2c2701(0x48f)]()))return![];const _0x31d40c=_0x433714['activationProximityType'](),_0x3ab105=_0x433714[_0x2c2701(0x268)]();switch(_0x31d40c){case'square':return _0x3ab105>=Math['abs'](_0x433714[_0x2c2701(0x4eb)](this['x']))&&_0x3ab105>=Math['abs'](_0x433714[_0x2c2701(0x419)](this['y']));break;case _0x2c2701(0x30d):const _0x353eb4=Math[_0x2c2701(0x2fe)](_0x433714['x']-$gamePlayer['x'],0x2),_0xdf2b5a=Math['pow'](_0x433714['y']-$gamePlayer['y'],0x2);return _0x3ab105>=Math[_0x2c2701(0x22e)](Math[_0x2c2701(0x598)](_0x353eb4+_0xdf2b5a));break;case _0x2c2701(0x225):case _0x2c2701(0x30c):const _0x44e293=$gameMap['distance'](this['x'],this['y'],_0x433714['x'],_0x433714['y']);return _0x433714[_0x2c2701(0x268)]()>=_0x44e293;break;case _0x2c2701(0x40a):return _0x3ab105>=Math[_0x2c2701(0x353)](_0x433714['deltaYFrom'](this['y']));break;case _0x2c2701(0x315):return _0x3ab105>=Math[_0x2c2701(0x353)](_0x433714['deltaXFrom'](this['x']));break;case'default':return![];break;}},Game_Player[_0x533487(0x48b)][_0x533487(0x440)]=function(_0xe04b87,_0x1aaec3){const _0x34fcf5=_0x533487;if($gameMap[_0x34fcf5(0x279)]())return;if($gameMap[_0x34fcf5(0x246)]())return;let _0x163da2=VisuMZ['EventsMoveCore']['Settings'][_0x34fcf5(0x26c)],_0x1dfd56=$gameMap[_0x34fcf5(0x2ec)](_0xe04b87,_0x1aaec3);const _0x5827a2=_0x34fcf5(0x12d)['format'](_0x1dfd56);_0x163da2[_0x5827a2]&&$gameTemp['reserveCommonEvent'](_0x163da2[_0x5827a2]);},Game_Player['prototype'][_0x533487(0x6b8)]=function(){const _0xc95088=_0x533487;return VisuMZ[_0xc95088(0x163)][_0xc95088(0x5eb)][_0xc95088(0x1a3)];},Game_Player[_0x533487(0x48b)][_0x533487(0x472)]=function(){const _0xe7e7e7=_0x533487;if($gameMap['isEventRunning']())return;if($gameMap[_0xe7e7e7(0x246)]())return;let _0x3f21c9=VisuMZ[_0xe7e7e7(0x163)]['Settings']['RegionTouch'];const _0x18a88f='Region%1'['format'](this['regionId']());if(_0x3f21c9[_0x18a88f]){if('PHFoe'===_0xe7e7e7(0x382)){if(!_0x2bc3eb[_0xe7e7e7(0x163)][_0xe7e7e7(0x5eb)][_0xe7e7e7(0x3ef)][_0xe7e7e7(0x3b4)])return;for(const _0xce4176 of this[_0xe7e7e7(0x301)]){this[_0xe7e7e7(0x4db)](_0xce4176);}}else $gameTemp['reserveCommonEvent'](_0x3f21c9[_0x18a88f]);}},VisuMZ[_0x533487(0x163)][_0x533487(0x673)]=Game_Player[_0x533487(0x48b)]['increaseSteps'],Game_Player['prototype']['increaseSteps']=function(){const _0x6686fa=_0x533487;VisuMZ[_0x6686fa(0x163)]['Game_Player_increaseSteps'][_0x6686fa(0x1ce)](this),VisuMZ[_0x6686fa(0x190)](0x0);},Game_Player[_0x533487(0x48b)][_0x533487(0x3b5)]=function(){VisuMZ['FaceSynchAllSynchTargets'](0x0);},VisuMZ['EventsMoveCore'][_0x533487(0x42a)]=Game_Follower[_0x533487(0x48b)][_0x533487(0x213)],Game_Follower[_0x533487(0x48b)][_0x533487(0x213)]=function(_0x173165){const _0x51487e=_0x533487;VisuMZ[_0x51487e(0x163)][_0x51487e(0x42a)][_0x51487e(0x1ce)](this,_0x173165),this[_0x51487e(0x4c2)]=![];},Game_Follower[_0x533487(0x48b)][_0x533487(0x182)]=function(){const _0x6ee872=_0x533487;if(this[_0x6ee872(0x4c2)])return Game_Character[_0x6ee872(0x48b)]['isDashing'][_0x6ee872(0x1ce)](this);return $gamePlayer[_0x6ee872(0x182)]();},Game_Follower[_0x533487(0x48b)]['isDashingAndMoving']=function(){const _0x5e5513=_0x533487;if(this[_0x5e5513(0x4c2)])return Game_Character[_0x5e5513(0x48b)]['isDashingAndMoving'][_0x5e5513(0x1ce)](this);return $gamePlayer[_0x5e5513(0x3d2)]()&&this[_0x5e5513(0x28a)];},Game_Follower[_0x533487(0x48b)][_0x533487(0x46e)]=function(){const _0x2fffc7=_0x533487;return $gamePlayer[_0x2fffc7(0x46e)]();},Game_Follower[_0x533487(0x48b)]['updateStop']=function(){const _0x4bc735=_0x533487;Game_Character[_0x4bc735(0x48b)][_0x4bc735(0x16f)][_0x4bc735(0x1ce)](this),this[_0x4bc735(0x4ba)]>0x0&&(this[_0x4bc735(0x28a)]=![]);},Game_Follower[_0x533487(0x48b)]['setChaseOff']=function(_0x3339a9){this['_chaseOff']=_0x3339a9;},VisuMZ['EventsMoveCore']['Game_Follower_chaseCharacter']=Game_Follower[_0x533487(0x48b)][_0x533487(0x1a8)],Game_Follower[_0x533487(0x48b)][_0x533487(0x1a8)]=function(_0x244091){const _0xe5417=_0x533487;if(this[_0xe5417(0x4c2)])return;if($gameSystem[_0xe5417(0x156)]())return;VisuMZ[_0xe5417(0x163)][_0xe5417(0x65c)][_0xe5417(0x1ce)](this,_0x244091),this[_0xe5417(0x28a)]=!![];},VisuMZ[_0x533487(0x163)][_0x533487(0x16e)]=Game_Vehicle[_0x533487(0x48b)][_0x533487(0x5f7)],Game_Vehicle[_0x533487(0x48b)][_0x533487(0x5f7)]=function(_0x1041ec,_0x36398d,_0x1d1b1f){const _0xa249d2=_0x533487;if($gameMap[_0xa249d2(0x69c)](_0x1041ec,_0x36398d,_0x1d1b1f,this[_0xa249d2(0x127)]))return!![];if($gameMap[_0xa249d2(0x392)](_0x1041ec,_0x36398d,_0x1d1b1f,this[_0xa249d2(0x127)]))return![];return VisuMZ['EventsMoveCore'][_0xa249d2(0x16e)][_0xa249d2(0x1ce)](this,_0x1041ec,_0x36398d,_0x1d1b1f);},Game_Vehicle[_0x533487(0x48b)]['isAirshipPassable']=function(_0x572007,_0x5ae1ba,_0x4b4641){const _0x33512d=_0x533487;if($gameMap[_0x33512d(0x69c)](_0x572007,_0x5ae1ba,_0x4b4641,this[_0x33512d(0x127)]))return!![];if($gameMap[_0x33512d(0x392)](_0x572007,_0x5ae1ba,_0x4b4641,this['_type']))return![];return VisuMZ[_0x33512d(0x163)][_0x33512d(0x13b)][_0x33512d(0x1ce)]($gamePlayer,_0x572007,_0x5ae1ba,_0x4b4641);},VisuMZ[_0x533487(0x163)]['Game_Vehicle_isLandOk']=Game_Vehicle[_0x533487(0x48b)][_0x533487(0x512)],Game_Vehicle[_0x533487(0x48b)][_0x533487(0x512)]=function(_0x548b0c,_0x1e2083,_0x24859e){const _0x1e0629=_0x533487;if($gameMap['isRegionDockable'](_0x548b0c,_0x1e2083,_0x24859e,this[_0x1e0629(0x127)]))return!![];const _0x3b5936=this[_0x1e0629(0x127)][_0x1e0629(0x4c8)](0x0)[_0x1e0629(0x651)]()+this[_0x1e0629(0x127)][_0x1e0629(0x368)](0x1),_0x2e5c1c=_0x1e0629(0x680)[_0x1e0629(0x1b5)](_0x3b5936);if(VisuMZ[_0x1e0629(0x163)][_0x1e0629(0x5eb)][_0x1e0629(0x69e)][_0x2e5c1c])return![];else{if(_0x1e0629(0x499)===_0x1e0629(0x33f)){const _0x44e353=_0xd6891a(_0x35c1d6['$1']),_0x265764=this[_0x1e0629(0x1a6)](_0x58c3a9);return this[_0x1e0629(0x6c2)](_0x44e353,_0x265764);}else return VisuMZ[_0x1e0629(0x163)][_0x1e0629(0x3a3)][_0x1e0629(0x1ce)](this,_0x548b0c,_0x1e2083,_0x24859e);}},VisuMZ[_0x533487(0x163)][_0x533487(0x6ba)]=Game_Vehicle[_0x533487(0x48b)][_0x533487(0x4f5)],Game_Vehicle[_0x533487(0x48b)][_0x533487(0x4f5)]=function(){const _0x49cf7d=_0x533487;VisuMZ[_0x49cf7d(0x163)][_0x49cf7d(0x6ba)][_0x49cf7d(0x1ce)](this);const _0x2a7fb2=VisuMZ[_0x49cf7d(0x163)]['Settings'][_0x49cf7d(0x3ef)];if(this['isBoat']()){if(_0x49cf7d(0x47b)==='EeITc'){if(_0x2a7fb2[_0x49cf7d(0x62c)])this[_0x49cf7d(0x461)](_0x2a7fb2[_0x49cf7d(0x62c)]);}else{const _0xdcd08b=this[_0x49cf7d(0x6a8)]+_0x1d994e(_0x4a75af['$1']);return this[_0x49cf7d(0x2bd)](_0xdcd08b[_0x49cf7d(0x311)](0x0,0xff));}}else{if(this[_0x49cf7d(0x543)]()){if(_0x2a7fb2['ShipSpeed'])this[_0x49cf7d(0x461)](_0x2a7fb2[_0x49cf7d(0x16a)]);}else{if(this[_0x49cf7d(0x66d)]()){if('BxGBj'==='BxGBj'){if(_0x2a7fb2[_0x49cf7d(0x33b)])this[_0x49cf7d(0x461)](_0x2a7fb2[_0x49cf7d(0x33b)]);}else return _0x278a04[_0x49cf7d(0x46e)]();}}}},VisuMZ[_0x533487(0x163)][_0x533487(0x3e3)]=Game_Event[_0x533487(0x48b)][_0x533487(0x213)],Game_Event['prototype']['initialize']=function(_0x356220,_0xdf03a7){const _0x604979=_0x533487;VisuMZ[_0x604979(0x163)]['Game_Event_initialize'][_0x604979(0x1ce)](this,_0x356220,_0xdf03a7),this[_0x604979(0x427)](),this[_0x604979(0x468)](),this[_0x604979(0x5e4)]();},Game_Map[_0x533487(0x48b)][_0x533487(0x221)]=function(_0x49dd54,_0x59940f){const _0xf2e4ca=_0x533487;return _0x49dd54===$gameMap[_0xf2e4ca(0x52d)]()?_0xf2e4ca(0x5d7)!==_0xf2e4ca(0x6af)?$dataMap[_0xf2e4ca(0x4d5)][_0x59940f]:![]:VisuMZ[_0xf2e4ca(0x31f)][_0x49dd54]['events'][_0x59940f];},VisuMZ['EventsMoveCore']['Game_Event_event']=Game_Event[_0x533487(0x48b)]['event'],Game_Event[_0x533487(0x48b)][_0x533487(0x431)]=function(){const _0x419156=_0x533487;if(this['_eventMorphData']!==undefined){if('TRxVB'===_0x419156(0x6c1)){const _0x589fdf=this[_0x419156(0x431)]();return this[_0x419156(0x2c5)]()&&_0x589fdf[_0x419156(0x18c)]>=0x1&&_0x292f27['isAdvancedSwitch'](_0x589fdf[_0x419156(0x6c4)]);}else{const _0x4c5062=this[_0x419156(0x153)][_0x419156(0x52d)],_0x201243=this[_0x419156(0x153)][_0x419156(0x36b)];return $gameMap[_0x419156(0x221)](_0x4c5062,_0x201243);}}if(this[_0x419156(0x146)]!==undefined){if(_0x419156(0x29d)!==_0x419156(0x3c4)){const _0x460352=this[_0x419156(0x146)][_0x419156(0x52d)],_0x3590ee=this[_0x419156(0x146)]['eventId'];return $gameMap[_0x419156(0x221)](_0x460352,_0x3590ee);}else{const _0x16269a=_0xe6daa[_0x419156(0x163)][_0x419156(0x5eb)][_0x419156(0x3ef)];if(_0x5f58b8[_0x419156(0x279)]()&&_0x16269a[_0x419156(0x6b3)])return!![];if(_0x48ca2a[_0x419156(0x39b)]()&&_0x16269a['StopAutoMoveMessages'])return!![];if(!_0x4717ff[_0x419156(0x5c5)]())return!![];if(this[_0x419156(0x2c2)]()>=0x0)return!![];if(!_0x59988c[_0x419156(0x3fa)][_0x419156(0x28c)])return!![];return![];}}if(this[_0x419156(0x12f)]!==undefined){if(_0x419156(0x644)==='WBbzU'){const _0x3b1ae7=this[_0x419156(0x12f)][_0x419156(0x52d)],_0x392a21=this[_0x419156(0x12f)][_0x419156(0x36b)];return $gameMap['referEvent'](_0x3b1ae7,_0x392a21);}else _0x31ac99['prototype'][_0x419156(0x172)][_0x419156(0x1ce)](this),this['contents'][_0x419156(0x6cd)]=this[_0x419156(0x5b6)]();}if($gameTemp[_0x419156(0x6a7)]!==undefined){const _0x2601ef=$gameTemp[_0x419156(0x6a7)][_0x419156(0x52d)],_0x2b092c=$gameTemp['_spawnData'][_0x419156(0x36b)];return $gameMap[_0x419156(0x221)](_0x2601ef,_0x2b092c);}return VisuMZ[_0x419156(0x163)][_0x419156(0x31a)][_0x419156(0x1ce)](this);},Game_Event[_0x533487(0x48b)]['checkValidEventerMap']=function(_0x3aed2e,_0x383c58){const _0x15ac4b=_0x533487;if(_0x3aed2e===0x0||_0x383c58===0x0)return![];if(_0x3aed2e===$gameMap['mapId']())return!![];if(!VisuMZ[_0x15ac4b(0x31f)][_0x3aed2e]&&_0x3aed2e!==$gameMap[_0x15ac4b(0x52d)]())return _0x15ac4b(0x3b1)===_0x15ac4b(0x3b1)?($gameTemp[_0x15ac4b(0x53a)]()&&console[_0x15ac4b(0x562)]('ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.'[_0x15ac4b(0x1b5)](_0x3aed2e)),![]):(this[_0x15ac4b(0x1c0)]||'')[_0x15ac4b(0x651)]()[_0x15ac4b(0x1ff)]();return!![];},VisuMZ['EventsMoveCore'][_0x533487(0x298)]=Game_Event[_0x533487(0x48b)][_0x533487(0x337)],Game_Event[_0x533487(0x48b)]['start']=function(){const _0x2a631b=_0x533487;VisuMZ[_0x2a631b(0x163)][_0x2a631b(0x298)][_0x2a631b(0x1ce)](this),Imported[_0x2a631b(0x261)]&&Input[_0x2a631b(0x226)](VisuMZ[_0x2a631b(0x688)][_0x2a631b(0x5eb)][_0x2a631b(0x2d3)][_0x2a631b(0x1be)])&&Input[_0x2a631b(0x3c1)]();},Game_Event[_0x533487(0x48b)]['setupCopyEvent']=function(){const _0x2f7783=_0x533487,_0x490d58=this['event']()['note'];if(_0x490d58==='')return;if(DataManager['isBattleTest']()||DataManager[_0x2f7783(0x300)]())return;const _0x32c26b=VisuMZ[_0x2f7783(0x163)][_0x2f7783(0x5eb)][_0x2f7783(0x155)];let _0x2bd0fc=null,_0x48444a=0x0,_0x54ad8b=0x0;if(_0x490d58['match'](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x48444a=Number(RegExp['$1']),_0x54ad8b=Number(RegExp['$2']);if(_0x48444a===0x0)_0x48444a=$gameMap[_0x2f7783(0x52d)]();}else{if(_0x490d58[_0x2f7783(0x579)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x48444a=Number(RegExp['$1']),_0x54ad8b=Number(RegExp['$2']);if(_0x48444a===0x0)_0x48444a=$gameMap[_0x2f7783(0x52d)]();}else{if(_0x490d58[_0x2f7783(0x579)](/<COPY EVENT:[ ](.*?)>/i)){const _0x16a692=String(RegExp['$1'])[_0x2f7783(0x651)]()[_0x2f7783(0x1ff)]();_0x2bd0fc=VisuMZ[_0x2f7783(0x470)][_0x16a692];if(!_0x2bd0fc)return;_0x48444a=_0x2bd0fc[_0x2f7783(0x51c)],_0x54ad8b=_0x2bd0fc[_0x2f7783(0x360)];}}}if(!this[_0x2f7783(0x416)](_0x48444a,_0x54ad8b))return;_0x32c26b[_0x2f7783(0x4e4)][_0x2f7783(0x1ce)](this,_0x48444a,_0x54ad8b,this);if(_0x2bd0fc)_0x2bd0fc['PreCopyJS'][_0x2f7783(0x1ce)](this,_0x48444a,_0x54ad8b,this);this['_eventCopyData']={'mapId':_0x48444a,'eventId':_0x54ad8b},this['_pageIndex']=-0x2,this[_0x2f7783(0x191)](),_0x32c26b[_0x2f7783(0x3d3)][_0x2f7783(0x1ce)](this,_0x48444a,_0x54ad8b,this);if(_0x2bd0fc)_0x2bd0fc[_0x2f7783(0x3d3)]['call'](this,_0x48444a,_0x54ad8b,this);$gameMap[_0x2f7783(0x304)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x468)]=function(){const _0x1fe04a=_0x533487,_0x48c9bc=$gameSystem['getPreservedMorphEventData'](this);if(!_0x48c9bc)return;const _0x4a89e=_0x48c9bc[_0x1fe04a(0x4e3)][_0x1fe04a(0x651)]()[_0x1fe04a(0x1ff)]();if(_0x4a89e!=='UNTITLED'){if('NbhKt'===_0x1fe04a(0x3e7)){this[_0x1fe04a(0x49a)]=!![];return;}else this[_0x1fe04a(0x625)](_0x4a89e,!![]);}else this['morphInto'](_0x48c9bc[_0x1fe04a(0x52d)],_0x48c9bc[_0x1fe04a(0x36b)],!![]);},Game_Event[_0x533487(0x48b)]['morphInto']=function(_0x4f7381,_0x2a4b8a,_0x1729e3){const _0x5f859b=_0x533487;if(!this[_0x5f859b(0x416)](_0x4f7381,_0x2a4b8a))return;const _0x43f7f0=VisuMZ[_0x5f859b(0x163)][_0x5f859b(0x5eb)][_0x5f859b(0x155)];if(!_0x1729e3)_0x43f7f0[_0x5f859b(0x280)]['call'](this,_0x4f7381,_0x2a4b8a,this);this[_0x5f859b(0x153)]={'mapId':_0x4f7381,'eventId':_0x2a4b8a},this['_pageIndex']=-0x2,this['refresh']();if(!_0x1729e3)_0x43f7f0[_0x5f859b(0x5b5)][_0x5f859b(0x1ce)](this,_0x4f7381,_0x2a4b8a,this);$gameMap['clearEventCache']();},Game_Event['prototype'][_0x533487(0x625)]=function(_0x5d5833,_0x57e8fd){const _0xc497a3=_0x533487;_0x5d5833=_0x5d5833[_0xc497a3(0x651)]()[_0xc497a3(0x1ff)]();const _0x5470f3=VisuMZ[_0xc497a3(0x470)][_0x5d5833];if(!_0x5470f3)return;const _0x3d1f12=_0x5470f3['MapID'],_0x1e3878=_0x5470f3[_0xc497a3(0x360)];if(!this['checkValidEventerMap'](_0x3d1f12,_0x1e3878))return;if(!_0x57e8fd)_0x5470f3['PreMorphJS']['call'](this,_0x3d1f12,_0x1e3878,this);this['morphInto'](_0x3d1f12,_0x1e3878,_0x57e8fd);if(!_0x57e8fd)_0x5470f3[_0xc497a3(0x5b5)]['call'](this,_0x3d1f12,_0x1e3878,this);if($gameMap)$gameMap[_0xc497a3(0x304)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x4a8)]=function(){const _0x25fe80=_0x533487;this[_0x25fe80(0x153)]=undefined,this[_0x25fe80(0x5dd)]=-0x2,this[_0x25fe80(0x191)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x4fa)]=function(_0x4d6a2d){const _0x1c1505=_0x533487,_0x1315cd=VisuMZ[_0x1c1505(0x163)]['Settings'][_0x1c1505(0x155)],_0x4cfe8a=_0x4d6a2d[_0x1c1505(0x4e3)][_0x1c1505(0x651)]()[_0x1c1505(0x1ff)](),_0x52001b=!['',_0x1c1505(0x61e)][_0x1c1505(0x1c6)](_0x4cfe8a);let _0x293117=0x0,_0x408d5e=0x0;if(_0x52001b){const _0x50ae7c=VisuMZ[_0x1c1505(0x470)][_0x4cfe8a];if(!_0x50ae7c)return;_0x293117=_0x50ae7c[_0x1c1505(0x51c)],_0x408d5e=_0x50ae7c[_0x1c1505(0x360)];}else _0x293117=_0x4d6a2d[_0x1c1505(0x52d)],_0x408d5e=_0x4d6a2d[_0x1c1505(0x36b)];if(!this['checkValidEventerMap'](_0x293117,_0x408d5e))return;if(_0x52001b){const _0x44b462=VisuMZ[_0x1c1505(0x470)][_0x4cfe8a];_0x44b462[_0x1c1505(0x6c7)][_0x1c1505(0x1ce)](this,_0x293117,_0x408d5e,this);}_0x1315cd[_0x1c1505(0x6c7)]['call'](this,_0x293117,_0x408d5e,this),this['_eventSpawnData']=_0x4d6a2d,this[_0x1c1505(0x5dd)]=-0x2,this[_0x1c1505(0x21c)]=$gameMap['mapId'](),this[_0x1c1505(0x17b)]=_0x4d6a2d[_0x1c1505(0x3ac)],this[_0x1c1505(0x115)]=_0x4d6a2d[_0x1c1505(0x1cd)],this[_0x1c1505(0x5e1)](_0x4d6a2d['x'],_0x4d6a2d['y']),this[_0x1c1505(0x4e1)](_0x4d6a2d['direction']),this['refresh']();if(_0x52001b){if(_0x1c1505(0x201)!=='RIsnV'){const _0x39d0e2=VisuMZ[_0x1c1505(0x470)][_0x4cfe8a];if(!_0x39d0e2)return;_0x39d0e2[_0x1c1505(0x147)]['call'](this,_0x293117,_0x408d5e,this);}else{const _0x4e2607=_0x4b0f9c['event'](_0x47d78f[_0x1c1505(0x466)]||_0x41a84c['eventId']());_0x4e2607[_0x1c1505(0x4a8)]();}}_0x1315cd[_0x1c1505(0x147)][_0x1c1505(0x1ce)](this,_0x293117,_0x408d5e,this);const _0x1b906a=SceneManager[_0x1c1505(0x3fa)];if(_0x1b906a&&_0x1b906a[_0x1c1505(0x25a)])_0x1b906a['_spriteset'][_0x1c1505(0x635)](this);},Game_Event[_0x533487(0x48b)]['isSpawnedEvent']=function(){return!!this['_eventSpawnData'];},Game_Event[_0x533487(0x48b)][_0x533487(0x337)]=function(){const _0x3cc0dc=_0x533487;if(!this[_0x3cc0dc(0x53c)]())return;const _0x2c30c0=this[_0x3cc0dc(0x53c)]()[_0x3cc0dc(0x577)](_0x51870e=>_0x51870e[_0x3cc0dc(0x395)]!==0x6c&&_0x51870e['code']!==0x198);_0x2c30c0[_0x3cc0dc(0x1eb)]>0x1&&(this[_0x3cc0dc(0x193)]=!![],this['isTriggerIn']([0x0,0x1,0x2])&&this[_0x3cc0dc(0x3d9)]());},VisuMZ[_0x533487(0x163)][_0x533487(0x1f8)]=Game_Event['prototype'][_0x533487(0x1b0)],Game_Event[_0x533487(0x48b)][_0x533487(0x1b0)]=function(){const _0x25d719=_0x533487;VisuMZ[_0x25d719(0x163)]['Game_Event_clearPageSettings']['call'](this),this[_0x25d719(0x2b6)](),this[_0x25d719(0x1c4)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x650)]=Game_Event[_0x533487(0x48b)][_0x533487(0x30b)],Game_Event[_0x533487(0x48b)][_0x533487(0x30b)]=function(){const _0x19f212=_0x533487;this['_activationProximityAutoTriggerBypass']=!![],VisuMZ[_0x19f212(0x163)]['Game_Event_setupPageSettings'][_0x19f212(0x1ce)](this),this[_0x19f212(0x19c)](),this['autosaveEventLocation'](),this[_0x19f212(0x481)]=![];},Game_Event[_0x533487(0x48b)][_0x533487(0x19c)]=function(){const _0x4ba59d=_0x533487;if(!this[_0x4ba59d(0x431)]())return;this[_0x4ba59d(0x2b6)](),this[_0x4ba59d(0x2b9)](),this[_0x4ba59d(0x4fb)](),this['updateEventsMoveCoreTagChanges']();},Game_Event[_0x533487(0x48b)][_0x533487(0x2b9)]=function(){const _0x380b6a=_0x533487,_0x248a35=this['event']()[_0x380b6a(0x249)];if(_0x248a35==='')return;this['checkEventsMoveCoreStringTags'](_0x248a35);},Game_Event[_0x533487(0x48b)][_0x533487(0x4fb)]=function(){const _0x1372be=_0x533487;if(!this[_0x1372be(0x578)]())return;const _0x3dc011=this[_0x1372be(0x53c)]();let _0x89bbb3='';for(const _0x4dcf89 of _0x3dc011){if(_0x1372be(0x1bd)!==_0x1372be(0x1e0)){if([0x6c,0x198]['includes'](_0x4dcf89[_0x1372be(0x395)])){if(_0x89bbb3!=='')_0x89bbb3+='\x0a';_0x89bbb3+=_0x4dcf89[_0x1372be(0x6cf)][0x0];}}else{if(_0xb5887d)_0x277632[_0x1372be(0x304)]();_0x15fbaa['EventsMoveCore'][_0x1372be(0x142)][_0x1372be(0x1ce)](this);}}this[_0x1372be(0x14b)](_0x89bbb3);},Game_Event[_0x533487(0x48b)][_0x533487(0x2b6)]=function(){const _0xa1dc75=_0x533487,_0xac058f=VisuMZ['EventsMoveCore']['Settings'];this[_0xa1dc75(0x121)]={'type':_0xa1dc75(0x14c),'distance':0x0,'regionList':[]},this[_0xa1dc75(0x260)]=![],this[_0xa1dc75(0x66b)](),this['_clickTrigger']=![],this['_customZ']=![],this[_0xa1dc75(0x463)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},$gameSystem[_0xa1dc75(0x5b7)](this),this[_0xa1dc75(0x39c)]=$gameSystem[_0xa1dc75(0x599)](this),this[_0xa1dc75(0x26e)]={'originalText':'','text':'','visibleRange':_0xac058f[_0xa1dc75(0x4b1)]['VisibleRange'],'offsetX':_0xac058f[_0xa1dc75(0x4b1)][_0xa1dc75(0x5e5)],'offsetY':_0xac058f[_0xa1dc75(0x4b1)][_0xa1dc75(0x619)],'hueShift':0x0},this['_mirrorSprite']=![],this[_0xa1dc75(0x2ab)]=[],this[_0xa1dc75(0x4b5)]={'target':-0x1,'type':_0xa1dc75(0x2e3),'delay':0x1,'opacityDelta':0x0},this[_0xa1dc75(0x3a0)]=_0xac058f[_0xa1dc75(0x3ef)]['RandomMoveWeight']??0x0,this[_0xa1dc75(0x266)]=![],this[_0xa1dc75(0x347)]=0x1,this[_0xa1dc75(0x5f0)]=0x1,this[_0xa1dc75(0x189)]={'visible':!![],'filename':_0xac058f[_0xa1dc75(0x3ef)][_0xa1dc75(0x5a3)]},this[_0xa1dc75(0x3b9)](),this[_0xa1dc75(0x43d)]();},Game_Event['prototype'][_0x533487(0x14b)]=function(_0x5773b9){const _0xa73e88=_0x533487;if(_0x5773b9[_0xa73e88(0x579)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this['_activationProximity']['regionList']=JSON[_0xa73e88(0x469)]('['+RegExp['$1'][_0xa73e88(0x579)](/\d+/g)+']'),this['_activationProximity']['type']=_0xa73e88(0x145);else{if(_0x5773b9['match'](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)){if(_0xa73e88(0x5c1)!==_0xa73e88(0x2f4))type=String(RegExp['$1'])[_0xa73e88(0x30a)]()[_0xa73e88(0x1ff)](),this[_0xa73e88(0x121)][_0xa73e88(0x6ab)]=type,this[_0xa73e88(0x121)][_0xa73e88(0x412)]=Number(RegExp['$2']);else{if(!this[_0xa73e88(0x2c9)])return;this[_0xa73e88(0x2c9)][_0xa73e88(0x133)]=!!_0x9eaaa[_0xa73e88(0x163)][_0xa73e88(0x5eb)][_0xa73e88(0x3ef)][_0xa73e88(0x1c8)];}}}_0x5773b9[_0xa73e88(0x579)](/<(?:ATTACH PICTURE|PICTURE) FILENAME:[ ](.*?)>/i)&&(this['_attachPicture'][_0xa73e88(0x677)]=String(RegExp['$1']));if(_0x5773b9[_0xa73e88(0x579)](/<(?:ATTACH PICTURE|PICTURE) BLEND MODE:[ ](.*?)>/i)){if('VayuD'===_0xa73e88(0x317)){_0x34c133['ConvertParams'](_0x502038,_0x2849eb);const _0x11d333=_0x4c4617['Speed']||0x0;_0x5d44e9[_0xa73e88(0x413)](_0x11d333);}else{const _0x1214ad=String(RegExp['$1'])[_0xa73e88(0x651)]()[_0xa73e88(0x1ff)](),_0x1b46b1=[_0xa73e88(0x2dd),'ADDITIVE','MULTIPLY','SCREEN'];this['_attachPicture'][_0xa73e88(0x5a9)]=_0x1b46b1[_0xa73e88(0x270)](_0x1214ad)[_0xa73e88(0x311)](0x0,0x3);}}if(_0x5773b9[_0xa73e88(0x579)](/<(?:ATTACH PICTURE|PICTURE) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)){if(_0xa73e88(0x161)===_0xa73e88(0x52b)){if(!_0x379c99[_0xa73e88(0x3fa)])return;if(!_0x390f18[_0xa73e88(0x3fa)][_0xa73e88(0x25a)])return;const _0x39cfc3=_0x5e4e81[_0xa73e88(0x3fa)]['_spriteset']['findTargetSprite'](this[_0xa73e88(0x1ec)]);if(!_0x39cfc3)return;this['x']=this[_0xa73e88(0x1ec)][_0xa73e88(0x341)](),this['x']+=this[_0xa73e88(0x1ec)][_0xa73e88(0x26e)][_0xa73e88(0x2d2)],this['y']=this['_event']['screenY']()-_0x39cfc3['height']*_0x39cfc3['scale']['y'],this['y']+=_0x41d0d2['windowPadding']()*-0.5,this['y']+=this['_event'][_0xa73e88(0x26e)][_0xa73e88(0x3af)];}else this[_0xa73e88(0x479)]['maxSize']=Number(RegExp['$1']);}_0x5773b9[_0xa73e88(0x579)](/<(?:ATTACH PICTURE|PICTURE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0xa73e88(0x13d)===_0xa73e88(0x2a2)?(_0x40ccac[_0xa73e88(0x163)][_0xa73e88(0x478)]['call'](this),this[_0xa73e88(0x556)]()):this[_0xa73e88(0x479)]['offsetX']=Number(RegExp['$1']));_0x5773b9[_0xa73e88(0x579)](/<(?:ATTACH PICTURE|PICTURE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this['_attachPicture'][_0xa73e88(0x3af)]=Number(RegExp['$1']));_0x5773b9['match'](/<(?:ATTACH PICTURE|PICTURE) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0xa73e88(0x479)][_0xa73e88(0x2d2)]=Number(RegExp['$1']),this[_0xa73e88(0x479)]['offsetY']=Number(RegExp['$2']));_0x5773b9[_0xa73e88(0x579)](/<(?:ATTACH PICTURE|PICTURE) SCALE:[ ](\d+)([%％])>/i)&&(this[_0xa73e88(0x479)]['scale']=Number(RegExp['$1'])*0.01);_0x5773b9[_0xa73e88(0x579)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0xa73e88(0x260)]=!![]);_0x5773b9[_0xa73e88(0x579)](/<CLICK TRIGGER>/i)&&(this['_clickTrigger']=!![]);_0x5773b9[_0xa73e88(0x579)](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0xa73e88(0x634)]=Number(RegExp['$1'])||0x0);const _0x6ac2a7=_0x5773b9[_0xa73e88(0x579)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x6ac2a7)for(const _0x5c069b of _0x6ac2a7){if(_0x5c069b['match'](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0xcda9c7=String(RegExp['$1'])[_0xa73e88(0x30a)]()[_0xa73e88(0x1ff)](),_0x2c702b=Number(RegExp['$2']);this[_0xa73e88(0x463)][_0xcda9c7]=_0x2c702b;}}if(_0x5773b9[_0xa73e88(0x579)](/<ICON:[ ](\d+)>/i)){if('mlYin'!==_0xa73e88(0x570))return this[_0xa73e88(0x6ca)]();else this['_eventIcon']['iconIndex']=Number(RegExp['$1']);}_0x5773b9[_0xa73e88(0x579)](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0xa73e88(0x39c)][_0xa73e88(0x3f1)]=Number(RegExp['$1']));_0x5773b9[_0xa73e88(0x579)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(_0xa73e88(0x2a0)!==_0xa73e88(0x2a0)?_0x20ff41['clearDestination']():this[_0xa73e88(0x39c)]['bufferY']=Number(RegExp['$1']));_0x5773b9[_0xa73e88(0x579)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0xa73e88(0x3f1)]=Number(RegExp['$1']),this[_0xa73e88(0x39c)][_0xa73e88(0x11e)]=Number(RegExp['$2']));if(_0x5773b9[_0xa73e88(0x579)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x5a0258=String(RegExp['$1'])['toUpperCase']()[_0xa73e88(0x1ff)](),_0x2e9c4d=['NORMAL',_0xa73e88(0x5b1),'MULTIPLY',_0xa73e88(0x5de)];this[_0xa73e88(0x39c)][_0xa73e88(0x5a9)]=_0x2e9c4d[_0xa73e88(0x270)](_0x5a0258)[_0xa73e88(0x311)](0x0,0x3);}$gameSystem[_0xa73e88(0x6a3)](this,this[_0xa73e88(0x39c)]['iconIndex'],this[_0xa73e88(0x39c)][_0xa73e88(0x3f1)],this[_0xa73e88(0x39c)][_0xa73e88(0x11e)],this[_0xa73e88(0x39c)][_0xa73e88(0x5a9)]);if(_0x5773b9[_0xa73e88(0x579)](/<LABEL:[ ](.*?)>/i)){let _0x355073=String(RegExp['$1'])[_0xa73e88(0x1ff)]();this[_0xa73e88(0x26e)][_0xa73e88(0x43a)]=_0x355073,this['_labelWindow'][_0xa73e88(0x5b2)]=_0x355073;}if(_0x5773b9['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){if(_0xa73e88(0x2c7)!==_0xa73e88(0x24e)){let _0x21354d=String(RegExp['$1'])[_0xa73e88(0x1ff)]();this[_0xa73e88(0x26e)][_0xa73e88(0x43a)]=_0x21354d,this[_0xa73e88(0x26e)][_0xa73e88(0x5b2)]=_0x21354d;}else{const _0x5a40a5=_0x4e9206?_0xbab136[_0xa73e88(0x52d)]():0x0,_0x3d78c6=[0x0,0x0,_0xa73e88(0x2e9)['format'](_0x5a40a5,_0x16b386)];_0x376668['setValue'](_0x3d78c6,_0x4d7f26);}}if(_0x5773b9[_0xa73e88(0x579)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)){if('ZFMEA'!==_0xa73e88(0x1ca)){if(!_0x1b038c[_0xa73e88(0x238)]())return;_0xbb90c5[_0xa73e88(0x4d9)](_0x3e70d7,_0x3bfbbb);let _0x41fc54=0x0;_0x41fc54+=_0x2d7603[_0xa73e88(0x52f)],_0x41fc54+=_0x213b11['Seconds']*0x3c,_0x41fc54+=_0x2e902b[_0xa73e88(0x56e)]*0x3c*0x3c,_0x41fc54+=_0xd6b667['Hours']*0x3c*0x3c*0x3c,_0x879a79[_0xa73e88(0x1af)](_0x41fc54);}else this[_0xa73e88(0x26e)][_0xa73e88(0x2d2)]=Number(RegExp['$1']);}_0x5773b9[_0xa73e88(0x579)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0xa73e88(0x26e)][_0xa73e88(0x3af)]=Number(RegExp['$1']));if(_0x5773b9[_0xa73e88(0x579)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if(_0xa73e88(0x1fa)===_0xa73e88(0x1fa))this[_0xa73e88(0x26e)][_0xa73e88(0x2d2)]=Number(RegExp['$1']),this['_labelWindow'][_0xa73e88(0x3af)]=Number(RegExp['$2']);else{const _0x2f18a5=_0x4e4886[_0xa73e88(0x412)](this[_0xa73e88(0x2d4)],this[_0xa73e88(0x139)],_0x365cc3[_0xa73e88(0x2d4)],_0x756ef5[_0xa73e88(0x139)])-0x1,_0x3efe21=_0x2c47f3[_0xa73e88(0x2e4)](_0x3d07dd[_0xa73e88(0x41b)](),_0x5158fc[_0xa73e88(0x601)]()),_0xdb92da=this['_moveSynch'][_0xa73e88(0x2cf)]||0x0;_0x135f74-=_0x19f1cc[_0xa73e88(0x381)](0x0,_0x2f18a5)*_0x3efe21*_0xdb92da;}}_0x5773b9['match'](/<LABEL HUE SHIFT:[ ](.*?)>/i)&&(this[_0xa73e88(0x26e)][_0xa73e88(0x561)]=Number(RegExp['$1']));this[_0xa73e88(0x55d)]();_0x5773b9[_0xa73e88(0x579)](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0xa73e88(0x26e)]['visibleRange']=Number(RegExp['$1']));_0x5773b9['match'](/<MIRROR SPRITE>/i)&&(this[_0xa73e88(0x3ed)]=!![]);if(_0x5773b9[_0xa73e88(0x579)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x2af7e1=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');this[_0xa73e88(0x2ab)]=this[_0xa73e88(0x2ab)]['concat'](_0x2af7e1),this[_0xa73e88(0x2ab)][_0xa73e88(0x574)](0x0);}if(_0x5773b9[_0xa73e88(0x579)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x5a487e=String(RegExp['$1']);if(_0x5a487e[_0xa73e88(0x579)](/PLAYER/i))_0xa73e88(0x377)===_0xa73e88(0x2b2)?(this[_0xa73e88(0x65b)]=![],this[_0xa73e88(0x31d)]=_0x32446c[_0xa73e88(0x376)](),this[_0xa73e88(0x1f0)]=this[_0xa73e88(0x1ec)][_0xa73e88(0x341)](),this[_0xa73e88(0x42d)]=this['_event'][_0xa73e88(0x46f)](),this[_0xa73e88(0x551)]=this['_event'][_0xa73e88(0x26e)][_0xa73e88(0x2d2)],this[_0xa73e88(0x674)]=this[_0xa73e88(0x1ec)][_0xa73e88(0x26e)]['offsetY'],this[_0xa73e88(0x39e)]=this[_0xa73e88(0x1ec)][_0xa73e88(0x5dd)],this[_0xa73e88(0x3d5)]=this[_0xa73e88(0x3ad)](),this[_0xa73e88(0x537)]=_0x18c0d8[_0xa73e88(0x401)](),this[_0xa73e88(0x2fc)]=_0x1960f5['x'],this[_0xa73e88(0x40c)]=_0x35708e['y'],this['_visibleEventX']=this[_0xa73e88(0x1ec)]['x'],this[_0xa73e88(0x267)]=this[_0xa73e88(0x1ec)]['y']):this[_0xa73e88(0x4b5)]['target']=0x0;else _0x5a487e[_0xa73e88(0x579)](/EVENT[ ](\d+)/i)&&('qiBBS'===_0xa73e88(0x329)?this['_randomMoveWeight']=0x0:this[_0xa73e88(0x4b5)][_0xa73e88(0x53b)]=Number(RegExp['$1']));}if(_0x5773b9['match'](/<MOVE SYNCH TYPE:[ ](.*?)>/i)){if(_0xa73e88(0x1c9)===_0xa73e88(0x1c9))this[_0xa73e88(0x4b5)]['type']=String(RegExp['$1'])['toLowerCase']()[_0xa73e88(0x1ff)]();else{if(this['_shadowSprite']['scale']['x']>this['scale']['x'])this[_0xa73e88(0x222)][_0xa73e88(0x31b)]['x']=_0x3e74a6[_0xa73e88(0x2e4)](this['_shadowSprite'][_0xa73e88(0x31b)]['x']+0.1,this[_0xa73e88(0x31b)]['x']);if(this[_0xa73e88(0x222)][_0xa73e88(0x31b)]['x']<this[_0xa73e88(0x31b)]['x'])this[_0xa73e88(0x222)][_0xa73e88(0x31b)]['x']=_0x78987a[_0xa73e88(0x381)](this[_0xa73e88(0x222)]['scale']['x']-0.1,this[_0xa73e88(0x31b)]['x']);}}if(_0x5773b9[_0xa73e88(0x579)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)){if(_0xa73e88(0x539)===_0xa73e88(0x539))this[_0xa73e88(0x4b5)]['delay']=Number(RegExp['$1']);else{const _0x1b4edd=_0x5edf05[_0xa73e88(0x163)][_0xa73e88(0x5eb)]['Movement'];if(!_0x1b4edd[_0xa73e88(0x32b)])return _0xbeecf4;return[0x1,0x3,0x7,0x9]['includes'](this['_lastMovedDirection'])&&(_0x57b548*=_0x1b4edd[_0xa73e88(0x64e)]||0.01),_0x4e377a;}}if(_0x5773b9[_0xa73e88(0x579)](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)){if('kGRFr'!==_0xa73e88(0x262)){const _0xc65bcb=this[_0xa73e88(0x4cb)],_0x40fd68=new _0x338c8c(0x0,0x0,_0x28ce18['width'],_0x442c72['height']);this[_0xa73e88(0x3ce)]=new _0x24ba67(_0x40fd68);const _0x489715=this['_dummyWindow'][_0xa73e88(0x1a4)](_0xc65bcb[_0xa73e88(0x43a)]),_0x366b63=_0x489715[_0xa73e88(0x43e)],_0x86cbdf=_0x489715[_0xa73e88(0x42e)],_0x57fd58=_0x366b63+_0x418445[_0xa73e88(0x308)]()*0x2,_0x126724=_0x86cbdf+_0x3cad40[_0xa73e88(0x308)]()*0x2;this[_0xa73e88(0x3ce)]['move'](0x0,0x0,_0x57fd58,_0x126724),this[_0xa73e88(0x3ce)]['createContents'](),this[_0xa73e88(0x3ce)][_0xa73e88(0x36e)](_0xc65bcb[_0xa73e88(0x43a)],0x0,0x0);}else this['_moveSynch'][_0xa73e88(0x2cf)]=Number(RegExp['$1']);}if(_0x5773b9[_0xa73e88(0x579)](/<TRUE RANDOM MOVE>/i))this[_0xa73e88(0x3a0)]=0x0;else _0x5773b9[_0xa73e88(0x579)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this[_0xa73e88(0x3a0)]=Number(RegExp['$1'])||0x0);if(_0x5773b9['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)){if(_0xa73e88(0x157)!==_0xa73e88(0x3f7))this[_0xa73e88(0x266)]=!![];else{if(!_0xf2e7e5[_0xa73e88(0x48b)][_0xa73e88(0x66c)]['call'](this,_0x51e1db+_0x7d3eff,_0x5dff40+_0x414ea7,_0xefa311))return![];}}_0x5773b9[_0xa73e88(0x579)](/<SCALE X:[ ](\d+)([%％])>/i)&&(this['_scaleBaseX']=Number(RegExp['$1'])*0.01);_0x5773b9['match'](/<SCALE Y:[ ](\d+)([%％])>/i)&&(this[_0xa73e88(0x5f0)]=Number(RegExp['$1'])*0.01);if(_0x5773b9['match'](/<SCALE:[ ](\d+)([%％])>/i)){const _0x25fbe9=Number(RegExp['$1'])*0.01;this[_0xa73e88(0x347)]=_0x25fbe9,this[_0xa73e88(0x5f0)]=_0x25fbe9;}_0x5773b9[_0xa73e88(0x579)](/<HIDE SHADOW>/i)&&(this[_0xa73e88(0x189)][_0xa73e88(0x560)]=![]);_0x5773b9[_0xa73e88(0x579)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0xa73e88(0x189)][_0xa73e88(0x677)]=String(RegExp['$1']));_0x5773b9[_0xa73e88(0x579)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this['_spriteOffsetX']=Number(RegExp['$1']));_0x5773b9[_0xa73e88(0x579)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0xa73e88(0x68c)]=Number(RegExp['$1']));if(_0x5773b9[_0xa73e88(0x579)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if('yiLTX'!==_0xa73e88(0x3e8))this[_0xa73e88(0x3a1)]=Number(RegExp['$1']),this['_spriteOffsetY']=Number(RegExp['$2']);else{if(this[_0xa73e88(0x2e0)]===_0x3b71b4)this[_0xa73e88(0x265)]();if(!_0x4bbc2a)return;const _0xe34d01=_0xa73e88(0x612)[_0xa73e88(0x1b5)](_0x194676[_0xa73e88(0x21c)],_0x4ca7cf[_0xa73e88(0x17b)]);return this[_0xa73e88(0x2e0)][_0xe34d01];}}_0x5773b9[_0xa73e88(0x579)](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0xa73e88(0x2ba)]=String(RegExp['$1'])[_0xa73e88(0x651)]()['trim']());},Game_Event[_0x533487(0x48b)][_0x533487(0x55d)]=function(){const _0x311bc2=_0x533487;$gameTemp['registerSelfTarget'](this),this[_0x311bc2(0x26e)][_0x311bc2(0x43a)]=this[_0x311bc2(0x26e)]['originalText'];for(;;){if(_0x311bc2(0x111)===_0x311bc2(0x111)){if(this['_labelWindow']['text'][_0x311bc2(0x579)](/\\V\[(\d+)\]/gi))this[_0x311bc2(0x26e)][_0x311bc2(0x43a)]=this[_0x311bc2(0x26e)]['originalText'][_0x311bc2(0x48a)](/\\V\[(\d+)\]/gi,(_0x439dd0,_0x126f5f)=>$gameVariables[_0x311bc2(0x67f)](parseInt(_0x126f5f)));else break;}else _0x4192ea[_0x311bc2(0x163)][_0x311bc2(0x263)]['call'](this,_0xe0976b,_0x4281f9);}$gameTemp[_0x311bc2(0x4dc)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x49b)]=function(){const _0x1a19c0=_0x533487;this[_0x1a19c0(0x59f)]();},Game_Event['prototype'][_0x533487(0x50f)]=function(){const _0x92cb4c=_0x533487;if(this[_0x92cb4c(0x260)])return!![];return Game_Character[_0x92cb4c(0x48b)][_0x92cb4c(0x50f)][_0x92cb4c(0x1ce)](this);},VisuMZ['EventsMoveCore']['Game_Event_updateSelfMovement']=Game_Event[_0x533487(0x48b)][_0x533487(0x2ee)],Game_Event['prototype']['updateSelfMovement']=function(){const _0x244477=_0x533487;if(this[_0x244477(0x639)]())return;VisuMZ[_0x244477(0x163)][_0x244477(0x101)]['call'](this),this[_0x244477(0x291)]()&&VisuMZ[_0x244477(0x190)](this[_0x244477(0x17b)]);},Game_Event[_0x533487(0x48b)]['isPreventSelfMovement']=function(){const _0x5d2182=_0x533487,_0x232441=VisuMZ[_0x5d2182(0x163)]['Settings']['Movement'];if($gameMap['isEventRunning']()&&_0x232441[_0x5d2182(0x6b3)])return!![];if($gameMessage[_0x5d2182(0x39b)]()&&_0x232441['StopAutoMoveMessages'])return!![];if(!$gameSystem[_0x5d2182(0x5c5)]())return!![];if(this[_0x5d2182(0x2c2)]()>=0x0)return!![];if(!SceneManager[_0x5d2182(0x3fa)][_0x5d2182(0x28c)])return!![];return![];},Game_Event[_0x533487(0x48b)][_0x533487(0x59f)]=function(){const _0x141083=_0x533487,_0x45f60f=SceneManager[_0x141083(0x3fa)][_0x141083(0x25a)];if(_0x45f60f){const _0x49cb13=_0x45f60f['findTargetSprite'](this);_0x49cb13&&_0x49cb13['_shadowSprite']&&_0x49cb13[_0x141083(0x222)][_0x141083(0x334)]!==this['shadowFilename']()&&(_0x49cb13[_0x141083(0x222)][_0x141083(0x334)]=this[_0x141083(0x62f)](),_0x49cb13[_0x141083(0x222)][_0x141083(0x2c9)]=ImageManager[_0x141083(0x59d)](_0x49cb13[_0x141083(0x222)][_0x141083(0x334)]));}},Game_Event[_0x533487(0x48b)][_0x533487(0x62f)]=function(){const _0x58555f=_0x533487;return this[_0x58555f(0x189)][_0x58555f(0x677)];},Game_Event[_0x533487(0x48b)]['isShadowVisible']=function(){const _0x481654=_0x533487;if(!this[_0x481654(0x189)][_0x481654(0x560)])return![];return Game_CharacterBase[_0x481654(0x48b)][_0x481654(0x11b)][_0x481654(0x1ce)](this);},Game_Event[_0x533487(0x48b)][_0x533487(0x1f1)]=function(){const _0x463d18=_0x533487;return this[_0x463d18(0x26e)][_0x463d18(0x43a)];},Game_Event['prototype'][_0x533487(0x5ec)]=function(){const _0x52f7b2=_0x533487;return this['_labelWindow'][_0x52f7b2(0x32e)];},Game_Event[_0x533487(0x48b)]['isMapPassable']=function(_0x91c272,_0x47ea50,_0x22ba60){const _0x430683=_0x533487;if(this['hasMoveOnlyRegions']())return this[_0x430683(0x45d)](_0x91c272,_0x47ea50,_0x22ba60);if($gameMap[_0x430683(0x69c)](_0x91c272,_0x47ea50,_0x22ba60,'event'))return!![];if($gameMap[_0x430683(0x392)](_0x91c272,_0x47ea50,_0x22ba60,'event'))return![];return Game_Character['prototype'][_0x430683(0x5f7)][_0x430683(0x1ce)](this,_0x91c272,_0x47ea50,_0x22ba60);},Game_Event[_0x533487(0x48b)][_0x533487(0x19f)]=function(){const _0x4dcac8=_0x533487;if(this[_0x4dcac8(0x2ab)]===undefined)this[_0x4dcac8(0x2b6)]();return this[_0x4dcac8(0x2ab)][_0x4dcac8(0x1eb)]>0x0;},Game_Event[_0x533487(0x48b)][_0x533487(0x45d)]=function(_0x38e7d5,_0x5151dc,_0xb1736a){const _0x204e3b=_0x533487,_0x3e395f=$gameMap['roundXWithDirection'](_0x38e7d5,_0xb1736a),_0x3026a7=$gameMap['roundYWithDirection'](_0x5151dc,_0xb1736a),_0x2c56a7=$gameMap[_0x204e3b(0x2ec)](_0x3e395f,_0x3026a7);return this['_moveOnlyRegions'][_0x204e3b(0x1c6)](_0x2c56a7);},VisuMZ[_0x533487(0x163)][_0x533487(0x378)]=Game_Event[_0x533487(0x48b)][_0x533487(0x60c)],Game_Event[_0x533487(0x48b)]['findProperPageIndex']=function(){const _0x3c7cdc=_0x533487;if(this[_0x3c7cdc(0x431)]()&&!$gameTemp['isPlaytest']()){if(_0x3c7cdc(0x21f)===_0x3c7cdc(0x4df)){const _0x5cf470=_0x394e85['_spawnData'][_0x3c7cdc(0x52d)],_0x107091=_0x105d6a[_0x3c7cdc(0x6a7)][_0x3c7cdc(0x36b)];return _0x307e52[_0x3c7cdc(0x221)](_0x5cf470,_0x107091);}else{if(this[_0x3c7cdc(0x431)]()[_0x3c7cdc(0x249)][_0x3c7cdc(0x579)](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}}return this[_0x3c7cdc(0x11d)]=![],this[_0x3c7cdc(0x436)]=![],this[_0x3c7cdc(0x431)]()?VisuMZ[_0x3c7cdc(0x163)][_0x3c7cdc(0x378)]['call'](this):-0x1;},VisuMZ['EventsMoveCore'][_0x533487(0x346)]=Game_Event[_0x533487(0x48b)][_0x533487(0x144)],Game_Event[_0x533487(0x48b)][_0x533487(0x144)]=function(_0x2caafa){const _0x47cde5=_0x533487;this[_0x47cde5(0x174)](_0x2caafa),$gameTemp[_0x47cde5(0x2df)](this);const _0x4d898e=VisuMZ['EventsMoveCore'][_0x47cde5(0x346)][_0x47cde5(0x1ce)](this,_0x2caafa);return $gameTemp[_0x47cde5(0x4dc)](),_0x4d898e;},Game_Event[_0x533487(0x48b)]['hasAdvancedSwitchVariable']=function(){return this['_advancedSwitchVariable'];},Game_Event['prototype']['checkAdvancedSwitchVariablePresent']=function(_0xba43d7){const _0x1fe448=_0x533487,_0x14eafa=_0xba43d7[_0x1fe448(0x48e)];if(_0x14eafa[_0x1fe448(0x388)]&&DataManager[_0x1fe448(0x5c2)](_0x14eafa[_0x1fe448(0x665)]))'xNVsi'===_0x1fe448(0x46a)?this['_advancedSwitchVariable']=!![]:this[_0x1fe448(0x347)]=_0x494bee(_0x1f37e7['$1'])*0.01;else{if(_0x14eafa['switch2Valid']&&DataManager[_0x1fe448(0x5c2)](_0x14eafa[_0x1fe448(0x51e)]))_0x1fe448(0x371)!==_0x1fe448(0x541)?this[_0x1fe448(0x11d)]=!![]:_0x45cdea[0x2]=_0x15146d(_0x54a993)[_0x1fe448(0x4c8)](0x0)[_0x1fe448(0x651)]()[_0x1fe448(0x1ff)]();else _0x14eafa[_0x1fe448(0x44c)]&&DataManager[_0x1fe448(0x6a5)](_0x14eafa[_0x1fe448(0x3c6)])&&(this[_0x1fe448(0x11d)]=!![]);}},Game_Event[_0x533487(0x48b)][_0x533487(0x3a7)]=function(){const _0x11fc4d=_0x533487;if(this[_0x11fc4d(0x5f2)])return![];return this[_0x11fc4d(0x4c3)];},Game_Event[_0x533487(0x48b)][_0x533487(0x164)]=function(){const _0xd526e8=_0x533487;$gameTemp[_0xd526e8(0x14d)](),this[_0xd526e8(0x337)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x4ea)]=function(_0x305285,_0x1b2986){const _0x53f5fb=_0x533487;if(this[_0x53f5fb(0x463)]){if(_0x53f5fb(0x3f0)==='kdxaH')_0x1a9148['reserveCommonEvent'](this['_expireCommonEvent']);else return this[_0x53f5fb(0x5bd)](_0x305285,_0x1b2986);}else{if(_0x53f5fb(0x48c)===_0x53f5fb(0x48c))return Game_Character[_0x53f5fb(0x48b)][_0x53f5fb(0x4ea)][_0x53f5fb(0x1ce)](this,_0x305285,_0x1b2986);else{_0x5e4af2['prototype'][_0x53f5fb(0x55c)][_0x53f5fb(0x1ce)](this);if([_0x53f5fb(0x14c),_0x53f5fb(0x145)][_0x53f5fb(0x1c6)](this[_0x53f5fb(0x48f)]()))return;_0x57345e[_0x53f5fb(0x663)]([0x2]);}}},Game_Event[_0x533487(0x48b)][_0x533487(0x5bd)]=function(_0x24ec3c,_0x2ccba2){const _0x3d24d9=_0x533487;var _0x549fa5=this['x']-this[_0x3d24d9(0x463)][_0x3d24d9(0x655)],_0x4b01c9=this['x']+this[_0x3d24d9(0x463)][_0x3d24d9(0x18f)],_0x4da3f7=this['y']-this[_0x3d24d9(0x463)]['up'],_0x59f040=this['y']+this[_0x3d24d9(0x463)]['down'];return _0x549fa5<=_0x24ec3c&&_0x24ec3c<=_0x4b01c9&&_0x4da3f7<=_0x2ccba2&&_0x2ccba2<=_0x59f040;},Game_Event[_0x533487(0x48b)][_0x533487(0x66c)]=function(_0x1fec46,_0x375c6b,_0x13812f){const _0x3696e8=_0x533487;for(let _0x3fb0a8=-this['_addedHitbox'][_0x3696e8(0x655)];_0x3fb0a8<=this[_0x3696e8(0x463)]['right'];_0x3fb0a8++){for(let _0x4cd696=-this[_0x3696e8(0x463)]['up'];_0x4cd696<=this[_0x3696e8(0x463)][_0x3696e8(0x55e)];_0x4cd696++){if(!Game_Character[_0x3696e8(0x48b)][_0x3696e8(0x66c)][_0x3696e8(0x1ce)](this,_0x1fec46+_0x3fb0a8,_0x375c6b+_0x4cd696,_0x13812f)){if(_0x3696e8(0x6c6)!==_0x3696e8(0x6c6)){const _0x143720=_0x415dfc(_0x588a4b['$1'])[_0x3696e8(0x30a)]()[_0x3696e8(0x1ff)](),_0x2f8427=_0x3ccc8c(_0x30aedf['$2']);this[_0x3696e8(0x463)][_0x143720]=_0x2f8427;}else return![];}}}return!![];},Game_Event['prototype']['isCollidedWithEvents']=function(_0x3d2f3f,_0x1f5f39){const _0x5cc68f=_0x533487;if(Imported[_0x5cc68f(0x1f5)]&&this[_0x5cc68f(0x44e)]())return _0x5cc68f(0x288)!==_0x5cc68f(0x136)?this['checkSmartEventCollision'](_0x3d2f3f,_0x1f5f39):this[_0x5cc68f(0x15d)]()?this[_0x5cc68f(0x323)]():_0x505f93['EventsMoveCore'][_0x5cc68f(0x141)][_0x5cc68f(0x1ce)](this);else{const _0x1c20e5=$gameMap[_0x5cc68f(0x65f)](_0x3d2f3f,_0x1f5f39)['filter'](_0xea579d=>_0xea579d!==this);return _0x1c20e5['length']>0x0;}},Game_Event['prototype'][_0x533487(0x178)]=function(_0x296bb4,_0x485a1b){const _0x3fbcad=_0x533487;if(!this[_0x3fbcad(0x1f7)]()){if(_0x3fbcad(0x2a7)!==_0x3fbcad(0x595))return![];else{this[_0x3fbcad(0x5a0)](),this[_0x3fbcad(0x5b3)]['clear']();const _0x363742=this['_text'][_0x3fbcad(0x12b)](/[\r\n]+/);let _0x2ac9b9=0x0;for(const _0x387198 of _0x363742){const _0x5636be=this[_0x3fbcad(0x1a4)](_0x387198),_0x35a701=_0x5cf729[_0x3fbcad(0x3b8)]((this[_0x3fbcad(0x343)]-_0x5636be[_0x3fbcad(0x43e)])/0x2);this[_0x3fbcad(0x36e)](_0x387198,_0x35a701,_0x2ac9b9),_0x2ac9b9+=_0x5636be[_0x3fbcad(0x42e)];}}}else{const _0x16f954=$gameMap[_0x3fbcad(0x65f)](_0x296bb4,_0x485a1b)[_0x3fbcad(0x577)](_0x240ffa=>_0x240ffa!==this&&_0x240ffa[_0x3fbcad(0x1f7)]());return _0x16f954['length']>0x0;}},Game_Event[_0x533487(0x48b)]['activationProximityType']=function(){const _0x512c17=_0x533487;return this[_0x512c17(0x121)][_0x512c17(0x6ab)]||_0x512c17(0x14c);},Game_Event[_0x533487(0x48b)]['activationProximityDistance']=function(){const _0x4637e1=_0x533487;return this[_0x4637e1(0x121)][_0x4637e1(0x412)]||0x0;},Game_Event['prototype'][_0x533487(0x231)]=function(){const _0x2a7425=_0x533487;return this[_0x2a7425(0x121)][_0x2a7425(0x290)]||[];},Game_Event[_0x533487(0x48b)][_0x533487(0x55c)]=function(){const _0x1144e2=_0x533487;Game_Character['prototype'][_0x1144e2(0x55c)][_0x1144e2(0x1ce)](this);if([_0x1144e2(0x14c),_0x1144e2(0x145)][_0x1144e2(0x1c6)](this[_0x1144e2(0x48f)]()))return;$gamePlayer[_0x1144e2(0x663)]([0x2]);},VisuMZ[_0x533487(0x163)][_0x533487(0x4ef)]=Game_Event[_0x533487(0x48b)][_0x533487(0x5b9)],Game_Event['prototype'][_0x533487(0x5b9)]=function(){const _0x58e35d=_0x533487;if(this[_0x58e35d(0x113)]!==0x3)return;if(this[_0x58e35d(0x481)])return;if(!this[_0x58e35d(0x34d)](![]))return;if(!this[_0x58e35d(0x27d)](![]))return;VisuMZ['EventsMoveCore'][_0x58e35d(0x4ef)]['call'](this);},VisuMZ[_0x533487(0x163)][_0x533487(0x366)]=Game_Event[_0x533487(0x48b)][_0x533487(0x4b6)],Game_Event['prototype'][_0x533487(0x4b6)]=function(){const _0x112a68=_0x533487;if(!this[_0x112a68(0x435)])return;if(!this[_0x112a68(0x34d)](!![]))return;if(!this[_0x112a68(0x27d)](!![]))return;VisuMZ[_0x112a68(0x163)][_0x112a68(0x366)]['call'](this);},Game_Event[_0x533487(0x48b)]['checkRegionEventTrigger']=function(_0x24247a){const _0x1a57e4=_0x533487;if(!_0x24247a&&$gameMap['isEventRunning']())return![];if(!_0x24247a&&$gameMap[_0x1a57e4(0x246)]())return![];if(this[_0x1a57e4(0x231)]()<=0x0)return!![];return $gamePlayer[_0x1a57e4(0x52e)](this);},Game_Event[_0x533487(0x48b)][_0x533487(0x27d)]=function(_0x507845){const _0x4260b6=_0x533487;if(!_0x507845&&$gameMap[_0x4260b6(0x279)]())return![];if(!_0x507845&&$gameMap[_0x4260b6(0x246)]())return![];if([_0x4260b6(0x14c),_0x4260b6(0x145)]['includes'](this['activationProximityType']()))return!![];return $gamePlayer[_0x4260b6(0x5d9)](this);},VisuMZ['MoveAllSynchTargets']=function(_0x5c83dd){const _0x48d7a3=_0x533487;for(const _0x182610 of $gameMap['events']()){if(!_0x182610)continue;_0x182610[_0x48d7a3(0x2c2)]()===_0x5c83dd&&_0x182610['updateMoveSynch']();}},VisuMZ[_0x533487(0x5a6)]=function(_0x4cedb7){const _0x2cbffb=_0x533487;if(_0x4cedb7===0x0)return $gamePlayer;return $gameMap[_0x2cbffb(0x431)](_0x4cedb7);},Game_CharacterBase['prototype'][_0x533487(0x3b5)]=function(){},Game_Event[_0x533487(0x48b)][_0x533487(0x3b5)]=function(){const _0x47a2d9=_0x533487;VisuMZ[_0x47a2d9(0x400)](this[_0x47a2d9(0x17b)]);},VisuMZ[_0x533487(0x400)]=function(_0x11b455){const _0x4581ed=_0x533487;for(const _0x52b591 of $gameMap['events']()){if(!_0x52b591)continue;_0x52b591['moveSynchTarget']()===_0x11b455&&_0x52b591[_0x4581ed(0x43b)]();}},Game_Event[_0x533487(0x48b)][_0x533487(0x2c2)]=function(){const _0xe3870e=_0x533487;return this[_0xe3870e(0x4b5)][_0xe3870e(0x53b)];},Game_Event['prototype'][_0x533487(0x33d)]=function(){const _0x5388f4=_0x533487;return this['_moveSynch'][_0x5388f4(0x6ab)];},Game_Event[_0x533487(0x48b)][_0x533487(0x46e)]=function(){const _0x2fc56f=_0x533487;if(this[_0x2fc56f(0x2c2)]()>=0x0){if('xdhSe'==='xdhSe'){const _0x23465e=VisuMZ['GetMoveSynchTarget'](this[_0x2fc56f(0x2c2)]());if(_0x23465e)return _0x23465e['realMoveSpeed']();}else return[0x1,0x3,0x5,0x7,0x9][_0x2fc56f(0x1c6)](_0x4c2c28);}return Game_Character['prototype'][_0x2fc56f(0x46e)]['call'](this);},Game_Event[_0x533487(0x48b)][_0x533487(0x505)]=function(){const _0x427767=_0x533487;this[_0x427767(0x4b5)][_0x427767(0x29a)]=this[_0x427767(0x4b5)][_0x427767(0x29a)]||0x0,this[_0x427767(0x4b5)][_0x427767(0x29a)]--;if(this[_0x427767(0x4b5)][_0x427767(0x29a)]>0x0)return;this[_0x427767(0x4b5)]['timer']=this[_0x427767(0x4b5)][_0x427767(0x6a1)],this[_0x427767(0x6c0)]();},Game_Event[_0x533487(0x48b)]['adjustMoveSynchOpacityDelta']=function(_0x55d67a){const _0x4a8f01=_0x533487;if(this[_0x4a8f01(0x2c2)]()>=0x0){if('tmfaB'!==_0x4a8f01(0x23d))return _0x307483[_0x4a8f01(0x1c7)]()[_0x4a8f01(0x48d)](_0x9ed972-0x1);else{const _0x12edf4=VisuMZ[_0x4a8f01(0x5a6)](this[_0x4a8f01(0x2c2)]());if(_0x12edf4){if(_0x4a8f01(0x37f)==='bZkjj')return this['isSpriteVS8dir']()?this[_0x4a8f01(0x3e4)]():this[_0x4a8f01(0x5e7)]();else{const _0x32bee7=$gameMap[_0x4a8f01(0x412)](this['_realX'],this[_0x4a8f01(0x139)],_0x12edf4[_0x4a8f01(0x2d4)],_0x12edf4[_0x4a8f01(0x139)])-0x1,_0x10d17d=Math[_0x4a8f01(0x2e4)]($gameMap[_0x4a8f01(0x41b)](),$gameMap['tileHeight']()),_0x179b10=this['_moveSynch'][_0x4a8f01(0x2cf)]||0x0;_0x55d67a-=Math[_0x4a8f01(0x381)](0x0,_0x32bee7)*_0x10d17d*_0x179b10;}}}}return _0x55d67a;},Game_Event[_0x533487(0x48b)][_0x533487(0x6c0)]=function(){const _0x3a4f33=_0x533487;switch(this[_0x3a4f33(0x33d)]()){case'random':this[_0x3a4f33(0x179)]();break;case _0x3a4f33(0x3d4):this[_0x3a4f33(0x47e)]();break;case _0x3a4f33(0x4d8):this[_0x3a4f33(0x4ca)]();break;case _0x3a4f33(0x1f3):this[_0x3a4f33(0x68d)]();break;case _0x3a4f33(0x1d8):case _0x3a4f33(0x1d0):this[_0x3a4f33(0x6ae)]();break;case _0x3a4f33(0x2b0):case _0x3a4f33(0x2f3):this[_0x3a4f33(0x55f)]();break;case _0x3a4f33(0x6be):case _0x3a4f33(0x342):case _0x3a4f33(0x278):case _0x3a4f33(0x352):this[_0x3a4f33(0x5d4)]();break;case'mirror\x20vertical':case'vertical\x20mirror':case _0x3a4f33(0x2bc):case _0x3a4f33(0x200):this[_0x3a4f33(0x47d)]();break;default:this['processMoveSynchRandom']();break;}this[_0x3a4f33(0x697)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x179)]=function(){const _0x5975db=_0x533487,_0x45647c=[0x2,0x4,0x6,0x8];$gameMap[_0x5975db(0x55b)]()&&_0x45647c[_0x5975db(0x618)](0x1,0x3,0x7,0x9);const _0x3b0c6d=[];for(const _0x4537b1 of _0x45647c){if('JWSlm'!==_0x5975db(0x4f8)){if(this[_0x5975db(0x66c)](this['x'],this['y'],_0x4537b1))_0x3b0c6d[_0x5975db(0x618)](_0x4537b1);}else{if(!this[_0x5975db(0x435)])return;if(!this[_0x5975db(0x34d)](!![]))return;if(!this[_0x5975db(0x27d)](!![]))return;_0x165d09[_0x5975db(0x163)][_0x5975db(0x366)]['call'](this);}}if(_0x3b0c6d[_0x5975db(0x1eb)]>0x0){if(_0x5975db(0x5e0)===_0x5975db(0x5e0)){const _0x12b84a=_0x3b0c6d[Math[_0x5975db(0x333)](_0x3b0c6d[_0x5975db(0x1eb)])];this[_0x5975db(0x49d)](_0x12b84a);}else return _0x29aa8d['DashModifier'];}},Game_Event[_0x533487(0x48b)]['processMoveSynchApproach']=function(){const _0xf28d86=_0x533487,_0xfc25c8=VisuMZ[_0xf28d86(0x5a6)](this[_0xf28d86(0x2c2)]());this['moveTowardCharacter'](_0xfc25c8);},Game_Event['prototype']['processMoveSynchAway']=function(){const _0x429c0a=_0x533487,_0xf22fc6=VisuMZ[_0x429c0a(0x5a6)](this[_0x429c0a(0x2c2)]());this[_0x429c0a(0x550)](_0xf22fc6);},Game_Event[_0x533487(0x48b)]['processMoveSynchCustom']=function(){this['updateRoutineMove']();},Game_Event[_0x533487(0x48b)]['processMoveSynchMimic']=function(){const _0x374d04=_0x533487,_0x2e290c=VisuMZ[_0x374d04(0x5a6)](this[_0x374d04(0x2c2)]());this[_0x374d04(0x49d)](_0x2e290c[_0x374d04(0x60f)]());},Game_Event['prototype'][_0x533487(0x55f)]=function(){const _0xb9e14d=_0x533487,_0x17ce7c=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']());this[_0xb9e14d(0x49d)](this[_0xb9e14d(0x5e9)](_0x17ce7c['lastMovedDirection']()));},Game_Event['prototype']['processMoveSynchMirrorHorz']=function(){const _0x38e765=_0x533487,_0x4b37fe=VisuMZ['GetMoveSynchTarget'](this[_0x38e765(0x2c2)]()),_0x138150=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x4b37fe['lastMovedDirection']()];this[_0x38e765(0x49d)](_0x138150);},Game_Event[_0x533487(0x48b)][_0x533487(0x47d)]=function(){const _0x106b9a=_0x533487,_0x317a47=VisuMZ[_0x106b9a(0x5a6)](this[_0x106b9a(0x2c2)]()),_0x5d29a5=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x317a47[_0x106b9a(0x60f)]()];this['executeMoveDir8'](_0x5d29a5);},Game_Event[_0x533487(0x48b)]['processMoveSynchDirection']=function(){const _0x1c7c45=_0x533487,_0x1ba8c2=VisuMZ[_0x1c7c45(0x5a6)](this[_0x1c7c45(0x2c2)]()),_0x46e3ca=_0x1ba8c2[_0x1c7c45(0x354)]();switch(this[_0x1c7c45(0x33d)]()){case _0x1c7c45(0x1d8):case _0x1c7c45(0x1d0):this['setDirection'](_0x46e3ca);break;case _0x1c7c45(0x2b0):case _0x1c7c45(0x2f3):this[_0x1c7c45(0x4e1)](this[_0x1c7c45(0x5e9)](_0x46e3ca));break;case _0x1c7c45(0x6be):case _0x1c7c45(0x342):case'mirror\x20horz':case _0x1c7c45(0x352):this[_0x1c7c45(0x4e1)]([0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x46e3ca]);break;case _0x1c7c45(0x27e):case _0x1c7c45(0x2a3):case _0x1c7c45(0x2bc):case _0x1c7c45(0x200):this['setDirection']([0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x46e3ca]);break;default:return;}this[_0x1c7c45(0x697)]();},Game_Event[_0x533487(0x48b)]['restoreSavedEventPosition']=function(){const _0x1ef3a1=_0x533487,_0x235e53=$gameSystem['getSavedEventLocation'](this);if(!_0x235e53)return;this[_0x1ef3a1(0x245)](_0x235e53['x'],_0x235e53['y']),this['refreshBushDepth'](),this['setDirection'](_0x235e53[_0x1ef3a1(0x354)]),this['_pageIndex']===_0x235e53[_0x1ef3a1(0x4f9)]&&(this[_0x1ef3a1(0x41f)]=_0x235e53['moveRouteIndex']);},VisuMZ[_0x533487(0x163)]['Game_Event_update']=Game_Event[_0x533487(0x48b)][_0x533487(0x697)],Game_Event['prototype'][_0x533487(0x697)]=function(){const _0x4ad4d3=_0x533487;VisuMZ[_0x4ad4d3(0x163)][_0x4ad4d3(0x3aa)][_0x4ad4d3(0x1ce)](this),!Utils['isMobileDevice']()&&this['updateSaveEventLocation']();},Game_Event[_0x533487(0x48b)][_0x533487(0x3c2)]=function(){const _0x15f363=_0x533487;Game_Character[_0x15f363(0x48b)]['updateMove']['call'](this),this['autosaveEventLocation']();},Game_Event[_0x533487(0x48b)]['isSaveEventLocation']=function(){const _0x126351=_0x533487;if($gameMap[_0x126351(0x61b)]())return!![];return this[_0x126351(0x266)];},Game_Event['prototype'][_0x533487(0x1c4)]=function(){const _0x40dbd6=_0x533487;if(!this[_0x40dbd6(0x257)]())return;this[_0x40dbd6(0x1ea)]();},Game_Event[_0x533487(0x48b)][_0x533487(0x1ea)]=function(){const _0x18b085=_0x533487;this[_0x18b085(0x50d)]=!![];},Game_Event[_0x533487(0x48b)]['updateSaveEventLocation']=function(){const _0x2ad779=_0x533487;this[_0x2ad779(0x50d)]&&this['processSaveEventLocation']();},Game_Event[_0x533487(0x48b)][_0x533487(0x409)]=function(){const _0x11372a=_0x533487;this[_0x11372a(0x50d)]=![],$gameSystem[_0x11372a(0x1ea)](this);},Game_Event[_0x533487(0x48b)][_0x533487(0x3dd)]=function(){$gameSystem['deleteSavedEventLocation'](this);},Game_Event['prototype'][_0x533487(0x599)]=function(){const _0x2683d8=_0x533487;return $gameSystem[_0x2683d8(0x599)](this)?Game_Character['prototype']['getEventIconData'][_0x2683d8(0x1ce)](this):{'iconIndex':0x0,'bufferX':settings[_0x2683d8(0x2a4)][_0x2683d8(0x524)],'bufferY':settings[_0x2683d8(0x2a4)][_0x2683d8(0x1e8)],'blendMode':settings[_0x2683d8(0x2a4)][_0x2683d8(0x33a)]};},Game_Event[_0x533487(0x48b)][_0x533487(0x423)]=function(){const _0x2aae27=_0x533487;return this[_0x2aae27(0x436)];},VisuMZ[_0x533487(0x163)][_0x533487(0x686)]=Game_Event[_0x533487(0x48b)][_0x533487(0x144)],Game_Event[_0x533487(0x48b)][_0x533487(0x144)]=function(_0x9c3a6){const _0x26e592=_0x533487,_0x3150bf=VisuMZ[_0x26e592(0x163)][_0x26e592(0x686)]['call'](this,_0x9c3a6);if(!_0x3150bf)return![];return this[_0x26e592(0x1ed)](_0x9c3a6);},Game_Event[_0x533487(0x48b)]['meetsCPC']=function(_0x46c2ab){const _0x5c9147=_0x533487;VisuMZ['EventsMoveCore'][_0x5c9147(0x4ed)][_0x5c9147(0x565)](_0x46c2ab),this[_0x5c9147(0x436)]=_0x46c2ab['CPC'][_0x5c9147(0x1eb)]>0x0;_0x46c2ab['CPC']===undefined&&VisuMZ['EventsMoveCore']['CustomPageConditions'][_0x5c9147(0x565)](_0x46c2ab);if(_0x46c2ab[_0x5c9147(0x36c)][_0x5c9147(0x1eb)]>0x0)return $gameMap[_0x5c9147(0x431)](this[_0x5c9147(0x17b)])&&VisuMZ[_0x5c9147(0x163)][_0x5c9147(0x4ed)][_0x5c9147(0x610)](_0x46c2ab['CPC'],this[_0x5c9147(0x17b)]);return!![];},VisuMZ[_0x533487(0x163)][_0x533487(0x4f0)]=Game_Troop[_0x533487(0x48b)][_0x533487(0x144)],Game_Troop[_0x533487(0x48b)][_0x533487(0x144)]=function(_0x1552d8){const _0x155980=_0x533487;var _0x1e02c5=VisuMZ[_0x155980(0x163)][_0x155980(0x4f0)][_0x155980(0x1ce)](this,_0x1552d8);return _0x1e02c5&&this['CPCsMet'](_0x1552d8);},Game_Troop[_0x533487(0x48b)][_0x533487(0x1f9)]=function(_0x181bb5){const _0x405c8b=_0x533487;_0x181bb5[_0x405c8b(0x36c)]===undefined&&VisuMZ[_0x405c8b(0x163)][_0x405c8b(0x4ed)][_0x405c8b(0x565)](_0x181bb5);if(_0x181bb5[_0x405c8b(0x36c)]['length']>0x0)return VisuMZ[_0x405c8b(0x163)][_0x405c8b(0x4ed)]['metCPC'](_0x181bb5[_0x405c8b(0x36c)],0x0);return!![];},VisuMZ[_0x533487(0x163)][_0x533487(0x237)]=Game_Event['prototype'][_0x533487(0x5e1)],Game_Event['prototype'][_0x533487(0x5e1)]=function(_0x4983c8,_0x2f07d0){const _0x22c05c=_0x533487;VisuMZ[_0x22c05c(0x163)][_0x22c05c(0x237)][_0x22c05c(0x1ce)](this,_0x4983c8,_0x2f07d0),this['_randomHomeX']=_0x4983c8,this[_0x22c05c(0x526)]=_0x2f07d0,this['autosaveEventLocation']();},VisuMZ[_0x533487(0x163)][_0x533487(0x56a)]=Game_Event[_0x533487(0x48b)][_0x533487(0x2d7)],Game_Event[_0x533487(0x48b)][_0x533487(0x2d7)]=function(){const _0xa20b63=_0x533487,_0x8499a3=$gameMap[_0xa20b63(0x412)](this['x'],this['y'],this[_0xa20b63(0x462)],this[_0xa20b63(0x526)]),_0x309fda=_0x8499a3*(this[_0xa20b63(0x3a0)]||0x0);if(Math[_0xa20b63(0x2e3)]()>=_0x309fda){if(_0xa20b63(0x103)!==_0xa20b63(0x116))VisuMZ[_0xa20b63(0x163)][_0xa20b63(0x56a)][_0xa20b63(0x1ce)](this);else{const _0x395cac=_0x95f6ca[_0xa20b63(0x431)](_0x5a5207(_0x3d10af['$1']));return this[_0xa20b63(0x550)](_0x395cac);}}else _0xa20b63(0x4cf)===_0xa20b63(0x4f3)?this[_0xa20b63(0x232)]():this['moveBackToRandomHome']();},Game_Event[_0x533487(0x48b)][_0x533487(0x150)]=function(){const _0x571503=_0x533487,_0x4ee516=this[_0x571503(0x4eb)](this[_0x571503(0x462)]),_0x49c8e0=this[_0x571503(0x419)](this[_0x571503(0x526)]);if(Math[_0x571503(0x353)](_0x4ee516)>Math[_0x571503(0x353)](_0x49c8e0))this[_0x571503(0x4fd)](_0x4ee516>0x0?0x4:0x6),!this['isMovementSucceeded']()&&_0x49c8e0!==0x0&&this[_0x571503(0x4fd)](_0x49c8e0>0x0?0x8:0x2);else{if(_0x49c8e0!==0x0){if('pfAIl'!==_0x571503(0x2f7))this['moveStraight'](_0x49c8e0>0x0?0x8:0x2),!this[_0x571503(0x5f1)]()&&_0x4ee516!==0x0&&this['moveStraight'](_0x4ee516>0x0?0x4:0x6);else return this[_0x571503(0x20f)]();}}},Game_CharacterBase['prototype']['clearAttachPictureSettings']=function(){this['_attachPicture']={'filename':'','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x5df)]=function(){const _0x230944=_0x533487;if(this['_attachPicture']===undefined)this[_0x230944(0x66b)]();return this[_0x230944(0x479)];},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x6bf)]=function(){const _0x471bb7=_0x533487;return this[_0x471bb7(0x5df)]()[_0x471bb7(0x677)]??'';},Game_CharacterBase['prototype'][_0x533487(0x60b)]=function(){const _0x2da0e8=_0x533487;return this[_0x2da0e8(0x5df)]()[_0x2da0e8(0x5a9)]??0x0;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x1d7)]=function(){const _0x56d53d=_0x533487;return this[_0x56d53d(0x5df)]()[_0x56d53d(0x1b8)]??0x0;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x239)]=function(){const _0x3d163=_0x533487;return this[_0x3d163(0x5df)]()[_0x3d163(0x2d2)]??0x0;},Game_CharacterBase[_0x533487(0x48b)][_0x533487(0x657)]=function(){const _0x2f16a5=_0x533487;return this[_0x2f16a5(0x5df)]()['offsetY']??0x0;},Game_CharacterBase['prototype'][_0x533487(0x25e)]=function(){const _0x48d831=_0x533487;return this[_0x48d831(0x5df)]()[_0x48d831(0x31b)]??0x1;},VisuMZ[_0x533487(0x163)][_0x533487(0x418)]=Game_Interpreter[_0x533487(0x48b)]['updateWaitMode'],Game_Interpreter[_0x533487(0x48b)][_0x533487(0x5c3)]=function(){const _0x122dcb=_0x533487;if(this[_0x122dcb(0x5a1)]===_0x122dcb(0x287)){if(window[this[_0x122dcb(0x5ad)]])this[_0x122dcb(0x5a1)]='',this['startCallEvent']();else{if(_0x122dcb(0x362)===_0x122dcb(0x362))return!![];else this['_advancedSwitchVariable']=!![];}}else{if(_0x122dcb(0x1c5)===_0x122dcb(0x1c5))return VisuMZ[_0x122dcb(0x163)]['Game_Interpreter_updateWaitMode'][_0x122dcb(0x1ce)](this);else{const _0x1ee800=this[_0x122dcb(0x1a4)](_0x24441c),_0x4cc5eb=_0x5c2046[_0x122dcb(0x3b8)]((this[_0x122dcb(0x343)]-_0x1ee800[_0x122dcb(0x43e)])/0x2);this['drawTextEx'](_0x3dea36,_0x4cc5eb,_0xc3339d),_0x20ed9d+=_0x1ee800[_0x122dcb(0x42e)];}}},VisuMZ[_0x533487(0x163)][_0x533487(0x335)]=Game_Interpreter[_0x533487(0x48b)][_0x533487(0x293)],Game_Interpreter['prototype']['executeCommand']=function(){const _0x4396b2=_0x533487,_0x3fec79=$gameMap&&this[_0x4396b2(0x17b)]?$gameMap['event'](this[_0x4396b2(0x17b)]):null;$gameTemp['registerSelfTarget'](_0x3fec79);const _0x25c7e6=VisuMZ[_0x4396b2(0x163)][_0x4396b2(0x335)]['call'](this);return $gameTemp[_0x4396b2(0x4dc)](),_0x25c7e6;},VisuMZ['EventsMoveCore'][_0x533487(0x397)]=Game_Interpreter[_0x533487(0x48b)][_0x533487(0x106)],Game_Interpreter[_0x533487(0x48b)][_0x533487(0x106)]=function(_0x23bd45){const _0x3bee85=_0x533487;return $gameTemp[_0x3bee85(0x187)](this),VisuMZ[_0x3bee85(0x163)]['Game_Interpreter_PluginCommand']['call'](this,_0x23bd45);},Game_Interpreter['prototype'][_0x533487(0x552)]=function(_0x57815f){const _0x2c6a6b=_0x533487;this[_0x2c6a6b(0x2d9)]=_0x57815f;const _0x3f8c77='Map%1.json'['format'](_0x57815f[_0x2c6a6b(0x52d)][_0x2c6a6b(0x63e)](0x3));this[_0x2c6a6b(0x5ad)]=_0x2c6a6b(0x325)+Graphics[_0x2c6a6b(0x2af)]+'_'+this['eventId'](),DataManager[_0x2c6a6b(0x669)](this[_0x2c6a6b(0x5ad)],_0x3f8c77);if(window[this['_callEventMap']]){if(_0x2c6a6b(0x3e9)==='lffTS')this['startCallEvent']();else{const _0x3e194f=this[_0x2c6a6b(0x484)];if(!_0x3e194f)return 0x0;return _0x3e194f[_0x2c6a6b(0x2c9)]['height'];}}else this['setWaitMode'](_0x2c6a6b(0x287));},Game_Interpreter[_0x533487(0x48b)][_0x533487(0x13e)]=function(){const _0x32d040=_0x533487,_0x43c730=this['_callEventData'],_0x9e0a9e=window[this['_callEventMap']],_0x17b2ef=_0x9e0a9e[_0x32d040(0x4d5)][_0x43c730['eventId']];if(_0x17b2ef&&_0x17b2ef[_0x32d040(0x177)][_0x43c730[_0x32d040(0x3ba)]-0x1]){if(_0x32d040(0x482)!==_0x32d040(0x482)){const _0x327f20=this[_0x32d040(0x444)]['attachPictureSettings']();if(_0x327f20){if(this['_lastAttachPictureFilename']!==_0x327f20[_0x32d040(0x677)])return!![];if(this[_0x32d040(0x373)]!==_0x327f20[_0x32d040(0x1b8)])return!![];if(this[_0x32d040(0x330)]!==_0x327f20['scale'])return!![];}return![];}else{const _0x43e38c=_0x17b2ef[_0x32d040(0x177)][_0x43c730[_0x32d040(0x3ba)]-0x1]['list'];this[_0x32d040(0x1b6)](_0x43e38c,this[_0x32d040(0x36b)]());}}window[this[_0x32d040(0x5ad)]]=undefined,this[_0x32d040(0x5ad)]=undefined,this[_0x32d040(0x2d9)]=undefined;};function _0x1818(){const _0x32ca46=['DpeXt','WJQyU','moveAwayFromCharacter','_eventLabelOffsetX','pluginCommandCallEvent','updatePatternEventsMoveCore','despawnEverything','FALSE','updateEventsAndMovementCore','dmsNy','clearPose','Stop','EventLocationSave','isSupportDiagonalMovement','increaseSteps','updateEventLabelText','down','processMoveSynchReverseMimic','visible','hueShift','log','YxCGc','isSceneMap','loadCPC','turnAwayFromPoint','MUSICNOTE','LOWER\x20LEFT','ZiMBl','Game_Event_moveTypeRandom','updatePeriodicRefresh','roundYWithDirection','USER-DEFINED\x204','Minutes','MapVariables','mlYin','YzHuv','process_VisuMZ_EventsMoveCore_Switches_Variables','ycewK','remove','setValue','setBackgroundType','filter','page','match','_eventCache','RBBzB','isValid','characterPatternY','isRegionDockable','VisuMZ_Setup_Preload_Map','AdvancedVariables','setPattern','PnRkM','Game_Character_processMoveCommand','_startX','setStopFollowerChasing','RIGHT','adjustDir8MovementSpeed','Allow','shiftY','setDestination','characterIndexVS8','fhjoU','moveTowardPoint','Game_CharacterBase_hasStepAnime','iconSize','boxWidth','ANNOYED','HKInK','parent','COBWEB','ydUqR','front','forceDashing','sqrt','getEventIconData','Game_Character_setMoveRoute','Game_Enemy_meetsSwitchCondition','posNt','loadSystem','spriteId','updateShadowChanges','resizeWindow','_waitMode','createIconSprite','DefaultShadow','getPosingCharacterIndex','166688AcyPxa','GetMoveSynchTarget','_spawnedEvents','firstSpawnedEventID','blendMode','updateDuration','ScpAm','_labelWindows','_callEventMap','airship','setImage','Udfmt','ADDITIVE','originalText','contents','_vehicleType','PostMorphJS','defaultFontSize','deleteIconsOnEventsData','addChild','checkEventTriggerAuto','getSelfTarget','bushDepth','startOffsetX','posEventsMoveCore','%1Dock','VehicleForbid','Game_Map_event','iixLj','isAdvancedSwitch','updateWaitMode','map','isAllowEventAutoMovement','setEventIconDataKey','getAttachPictureBitmapHeight','Step1EventId','MorphEventTo','RuOfc','angle','isOnLadder','Enable','_commonEventId','LIGHT\x20BULB','setControlledFollowerID','crIpl','fontFace','getDirectionFromPoint','processMoveSynchMirrorHorz','_dragonbones','kNKsA','yWCIr','getPose','meetActivationProximityConditions','isJumping','_forceHidePlayer','750251QxDmmu','_pageIndex','SCREEN','attachPictureSettings','mSaYm','locate','WqHTr','Value','restoreSavedEventPosition','OffsetX','LuwBt','characterPatternYBasic','isDiagonalDirection','reverseDir','CommonEventID','Settings','labelWindowRange','isBattleTest','canStartLocalEvents','nSaiX','_scaleBaseY','isMovementSucceeded','_erased','USER-DEFINED\x203','List','VariableGetSelfVariableID','_paused','isMapPassable','Speed','isMapVariable','updatePattern','DashEnableToggle','_saveEventLocations','asscU','NEVvJ','deltaX','AApVH','tileHeight','updateVS8BalloonOffsets','RzFIs','createLabelWindows','vCvnY','iconWidth','NucdO','reserveCommonEvent','setBalloonPose','ship','attachPictureBlendMode','findProperPageIndex','MsgDuration','aCsHX','lastMovedDirection','metCPC','Game_Map_unlockEvent','Map%1-Event%2','setItemChoice','move','DashOnLadder','PlayerIconDelete','standing','push','OffsetY','isTile','isSaveEventLocations','xdHhh','_EventIcons','UNTITLED','getPlayerDiagonalSetting','Step2EventId','PjGpX','_SavedEventLocations','uPHFK','_targetX','morphIntoTemplate','updateAttachPictureBitmap','TargetSwitchId','VS8','setNumberInput','UtSYA','vjiiF','BoatSpeed','frontY','EclDv','shadowFilename','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','unlock','fadeDuration','apply','_customZ','createSpawnedEvent','xbnpf','VariableId','FollowerIndex','isPreventSelfMovement','executeCommandCommonEvent','DEFAULT_SHIFT_Y','switches','All','padZero','shadowY','SCDpK','_DisablePlayerControl','turn180','initMembers','WBbzU','inBattle','updateTextAngle','NOTE','determineCommonEventsWithCPC','SPIN\x20CCW','hasEventIcon','_characterIndex','SwitchGetSelfSwitchID','iGqAT','DiagonalSpeedMultiplier','PlayerAllow','Game_Event_setupPageSettings','toUpperCase','_scaleX','_inputTime','coHOI','left','getPosingCharacterDirection','attachPictureOffsetY','%1,%2,','createEventsMoveCoreMessagePopup','startsWith','_eventErased','Game_Follower_chaseCharacter','Game_Map_events','deleteIconsOnEventsDataKey','eventsXyNt','dhndx','Passability','SelfVariables','checkEventTriggerEventsMoveCore','scrolledY','switch1Id','processMoveRouteSetIndex','setupEvents','itemPadding','loadDataFile','nZYaa','clearAttachPictureSettings','canPass','isAirship','command108','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_visibleEventX','_forceHideFollower','1142694pJtQpg','Game_Player_increaseSteps','_eventLabelOffsetY','MYjXA','isAirshipPassable','filename','USER-DEFINED\x202','getLastPluginCommandInterpreter','CCces','turnTowardPoint','startOffset','_speed','processMoveRouteJumpForward','value','%1DockRegionOnly','RUpXO','LEFT','_poseDuration','setHue','rzrwW','Game_Event_meetsConditionsCPC','QOYIA','MessageCore','EZffB','StrictCollision','AdvancedSwitches','_spriteOffsetY','processMoveSynchCustom','rBpmD','eventsXy','TiltLeft','resume','turnLeft90','needsUpdate','Window_ScrollText_startMessage','_working','FvDKM','update','AllForbid','PlayerMovementChange','initEventsMoveCoreSettings','_targetScaleY','isRegionAllowPass','FLjlj','Region','_eventOverload','MessageText','delay','disable','setEventIconData','setupSaveEventLocations','isAdvancedVariable','status','_spawnData','_opacity','Game_Followers_jumpAll','_frames','type','startEncounterEffect','fcoCm','processMoveSynchMimic','OBPIy','MoveRouteIndex','Mzqer','GTbLs','StopAutoMoveEvents','_fadeOutDuration','Game_Event_isCollidedWithPlayerCharacters','setCharacterBitmap','MorphEventRemove','startMapCommonEventOnOKTarget','destinationY','Game_Vehicle_initMoveSpeed','krTkP','_target','contentsOpacity','mirror\x20horizontal','attachPictureFilename','processMoveSynch','ZbRJl','processMoveRouteMoveUntilStop','isPlayerForceHidden','switchId','setDashingEnabled','xcEHJ','PreSpawnJS','bind','isMobileDevice','clearDashing','deleteSavedEventLocation','MsgPopupEvent','fontSize','RbPNa','parameters','destroy','_diagonalSupport','description','setMoveRoute','Game_Event_updateSelfMovement','arc','iadlN','_targetScaleX','erase','command357','GYjeS','AllAllow','ARRAYEVAL','PopupExtra','AmEpb','updateOpacity','createDisplayObjects','dashSpeedModifier','Game_Followers_isVisible','zYgaB','UORGH','getMapSpawnedEventData','_trigger','useCarryPoseForIcons','_spawnPreserved','ilChq','drawing','processMoveRouteMoveTo','SPIN\x20CW','isBigCharacter','isShadowVisible','Seconds','_advancedSwitchVariable','bufferY','FQZQW','Sprite_Character_setCharacterBitmap','_activationProximity','Letter','Nemrh','YJPFn','keys','_selfTarget','_type','UHqzw','updateShadow','Self\x20Variable\x20%1','split','isRunning','Region%1','TerrainTag','_eventSpawnData','Jaaik','LIGHT','setupAttachPictureBitmap','smooth','Sprite_Balloon_updatePosition','processMoveRouteMoveRepeat','cUkco','HJlde','3447054nWpViJ','_realY','Game_SelfSwitches_setValue','Game_CharacterBase_canPass','PlayerMovementDiagonal','BNTYF','startCallEvent','tuFkv','reverse','Game_CharacterBase_pattern','Scene_Load_onLoadSuccess','zwVUJ','meetsConditions','region','_eventCopyData','PostSpawnJS','advancedValue','EventTimerResume','_lastMapId','checkEventsMoveCoreStringTags','none','clearDestination','eusIP','_MapSpawnedEventData','moveBackToRandomHome','wrBmT','lineHeight','_eventMorphData','FollowerID','Template','isStopFollowerChasing','Jlidq','Game_CharacterBase_characterIndex','endScale','forceMoveRoute','FUNC','vfhLI','isPosing','UPPER\x20RIGHT','getDirectionToPoint','oQUnc','dSggK','Preserve','EventsMoveCore','onClickTrigger','isSelfVariable','Name','LOWER\x20RIGHT','create','anchor','ShipSpeed','uNDwb','Game_Switches_setValue','isEventsMoveCoreInvisible','Game_Vehicle_isMapPassable','updateStop','_followerChaseOff','correctFacingDirection','resetFontSettings','SwitchGetSelfSwitchABCD','checkAdvancedSwitchVariablePresent','FavorHorz','Window_EventItem_onOk','pages','checkSmartEventCollision','processMoveSynchRandom','Game_CommonEvent_isActive','_eventId','processMoveRouteStepTo','FollowerReset','processMoveRouteMoveToCharacter','MOBILE_EVENT_LABELS','WalkAllow','YdPVz','isDashing','jumpAll','zdNxS','SwitchId','KNqAj','setLastPluginCommandInterpreter','SPIN\x20ACW','_shadowGraphic','characterIndex','isTurnInPlace','trigger','findTargetSprite','_needsRefresh','right','MoveAllSynchTargets','refresh','fadeOut','_starting','_forceShowPlayer','QUESTION','Game_Map_parallelCommonEvents','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','setup','Dyriv','processMoveRouteHugWall','_moveSpeed','setupEventsMoveCoreEffects','updateEventCustomZ','updateHueShift','hasMoveOnlyRegions','registerCommand','updateAttachPictureSprite','adjustMoveSynchOpacityDelta','RegionOkTarget','textSizeEx','30jitDbw','checkCollisionKeywords','Game_Map_isDashDisabled','chaseCharacter','Walk','ARRAYSTRUCT','onChange','gWqOB','MapSwitches','ULKli','gainFrames','clearPageSettings','UyfAH','EventLocationCreate','resetSelfSwitchesForEvent','pVlMu','format','setupChild','selfValue','maxSize','_counter','PlayerForbid','autoEventIconBuffer','Game_Character_forceMoveRoute','DjSNu','FastForwardKey','wLwcW','_pose','PyiSM','cPYEP','boat','autosaveEventLocation','BneZG','includes','followers','BitmapSmoothing','YFRnF','ZFMEA','createProxyWindow','PathfindMobileEnabled','spawnPreserved','call','BBtlr','copy','processMoveRouteAnimation','Visible','setMapValue','enable','fadeInDuration','Game_Player_isMapPassable','attachPictureMaxSize','mimic','onExpire','_offsetX','unlockEvent','JpjOa','deletePreservedMorphEventDataKey','_reflection','DqsPj','wXxrW','savePreservedMorphEventDataKey','Step2MapId','FollowerSetControl','Game_Map_update','_duration','Game_Timer_onExpire','KixYV','BufferY','end','saveEventLocation','length','_event','meetsCPC','KonAk','_lastAttachPictureFilename','_eventScreenX','labelWindowText','VisuMZ_2_DragonbonesUnion','custom','ApplyPopupExtraSettings','VisuMZ_0_CoreEngine','turnAwayFromCharacter','isNormalPriority','Game_Event_clearPageSettings','CPCsMet','eKnwt','padding','getControlledFollowerID','createLabelWindowForTarget','backX','trim','vert\x20mirror','jZYAe','iconIndex','refreshEventLabels','hasStepAnime','YYFjT','TileY','...','kkprD','DBtpJ','MGcKn','Chase','_fadeOutStart','isPlayerControlDisabled','PageId','directionOnLadderSpriteVS8dir','canMove','Game_Switches_value','isEventClickTriggered','initialize','_comments','initMembersEventsMoveCore','constructor','hBVeE','dir8','moveDiagonally','Game_SelfSwitches_value','MZuPW','_mapId','YUOvl','requestBalloon','NLRcC','HEART','referEvent','_shadowSprite','setFrames','Nteko','radius','isPressed','_arcPeak','Game_Player_isDashing','hFnax','PosX','TRUE','SLEEP','eKPCs','round','moveForward','VQCPp','activationRegionList','setupPlayerVisibilityOverrides','EnableDir8','CarryPose','Amphh','RjAbE','Game_Event_locate','isWorking','attachPictureOffsetX','SelfSwitchID','morphInto','Game_CharacterBase_bushDepth','tmfaB','turnTowardCharacter','vehicle','_selfTargetNumberInput','_startScaleY','cspSe','DIAGONAL_PATHFINDING_EVENT_LIMIT','Spriteset_Map_createShadow','setPosition','isAnyEventStarting','processMoveRouteBalloon','EventTimerFramesGain','note','iidVT','isTriggerIn','isOnRope','Self\x20Switch\x20%1','Oscoi','tileCoordinates','2278246mQdsRJ','despawnAtXY','pattern','_lastMovedDirection','_data','Visibility','EnableDashTilt','isSaveEventLocation','processMoveRouteJumpToCharacter','Game_CharacterBase_setDirection','_spriteset','KEWtS','createSaveEventLocationData','mGnQs','attachPictureScale','DOWN','_alwaysUpdateMove','VisuMZ_1_MessageCore','kGRFr','Game_Variables_setValue','Dock','initEventsMoveCore','_saveEventLocation','_visibleEventY','activationProximityDistance','ARRAYFUNC','iiBzX','Scene_Boot_onDatabaseLoaded','RegionOk','rotation','_labelWindow','_text','indexOf','SXlpx','bIvPU','_pattern','UPPER\x20LEFT','initFollowerController','convertSelfVariableValuesInScriptCall','dUdgA','mirror\x20horz','isEventRunning','some','isCollidedWithPlayerCharacters','Game_Player_getInputDirection','checkActivationProximity','mirror\x20vertical','_targetY','PreMorphJS','clRNQ','zztqg','DashModifier','Direction','Pjieo','refreshIfNeeded','CallEvent','iDzXV','createShadow','_actuallyMoving','_lastPluginCommandInterpreter','_active','processMoveCommandEventsMoveCore','processMoveRouteSelfSwitch','Game_CharacterBase_screenX','regionList','isMoving','IconIndex','executeCommand','setupSpawnTest','startScaleY','endOffset','_events','Game_Event_start','jpifR','timer','xUaVK','_selfTargetItemChoice','pCKvM','updatePose','_fadeInDuration','sYApk','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','zdXnQ','vertical\x20mirror','Icon','_moveAllowPlayerCollision','_hidden','gWMSp','ARRAYJSON','Setting','executeMove','_moveOnlyRegions','splice','Window_Message_startMessage','Game_Timer_stop','frameCount','reverse\x20mimic','AYLsu','Djcnh','exit','wBikt','checkNeedForPeriodicRefresh','initEventsMoveCoreEffects','oXyoK','_targetAngle','setupEventsMoveCoreNotetags','_stepPattern','TurnInPlaceDelay','mirror\x20vert','setOpacity','Rope','isTargetEventValidForLabelWindow','variables','createDummyWindow','moveSynchTarget','LejYw','updateVisibility','isActive','8zswNUW','gEOdb','YSeqb','bitmap','isTransparent','character','Game_CharacterBase_isTransparent','createLowerLayer','%1:%2','opacityDelta','cyhpV','concat','offsetX','General','_realX','makeDeepCopy','Game_CharacterBase_isDashing','moveTypeRandom','createBitmap','_callEventData','removeChild','Step1MapId','createShadows','NORMAL','3BaRJmo','registerSelfTarget','_PreservedEventMorphData','1378670lbdqus','PhkcE','random','min','registerSelfEvent','_currentArc','endOffsetY','_followerControlID','Map\x20%1\x20Variable\x20%2','_wholeDuration','SpawnEventDespawnEventID','regionId','BpkUH','updateSelfMovement','OFF','ALqDA','rAhwV','Zfvae','reverse\x20copy','vHWEC','MobileEnabled','WalkForbid','JaxHj','updateEventIconSprite','_forceDashing','FuraD','xhRiJ','_visiblePlayerX','hasDragonbones','pow','_direction','isEventTest','_characterSprites','TemplateName','EXCLAMATION','clearEventCache','HMOrd','requestMapLoadCommonEvents','WPTPv','windowPadding','ZZZ','toLowerCase','setupPageSettings','delta','circle','Game_Map_setup','Collision','%1Forbid','clamp','ThSUK','updateFadeIn','VkRMC','column','Map\x20%1\x20Switch\x20%2','LdeBQ','BULB','bsYeX','Game_Event_event','scale','updateTextPosition','_screenZoomScale','DashingEnable','PreloadedMaps','Game_Player_executeMove','isAutoBufferIcon','_patternLocked','getPosingCharacterPattern','firstSpawnedEvent','$callEventMap','Map%1.json','SelfSwitchABCD','OperateValues','BjTPp','isInstanceOfSceneMap','SlowerSpeed','meetsSwitchCondition','hasAdvancedSwitchVariable','visibleRange','LIGHTBULB','_lastAttachPictureScale','HURT','MyYEK','randomInt','_filename','Game_Interpreter_executeCommand','addLoadListener','start','rzEis','qRlPp','BlendMode','AirshipSpeed','setDiagonalDirection','moveSynchType','PiHfU','eeQuL','BalloonOffsetX','screenX','horizontal\x20mirror','innerWidth','setPose','RIGHT\x20TO\x20LEFT','Game_Event_meetsConditions','_scaleBaseX','isDashingEnabled','deltaY','timerText','findDirectionTo','findDiagonalDirectionTo','checkRegionEventTrigger','PosY','drawIcon','setSelfValue','updatePosition','horz\x20mirror','abs','direction','outlineColor','_commonEvents','Scene_Map_createDisplayObjects','CGYFN','VehicleDock','setChaseOff','IconBlendMode','updateScale','EjFRF','Sprite_Balloon_setup','fadeIn','EventID','8006600sdLWGS','MLJPH','setupDiagonalSupport','_PlayerDiagonalSetting','checkEventTriggerThere','Game_Event_updateParallel','SyIPj','slice','MUSIC\x20NOTE','mGnXS','eventId','CPC','setupRegionRestrictions','drawTextEx','MedRL','Hours','TmdKu','WGRem','_lastAttachPictureMaxSize','updateTextScale','SpawnEventAtTerrainTag','zoomScale','rkIQe','Game_Event_findProperPageIndex','VehicleAllow','sWLyr','onDatabaseLoaded','Game_CharacterBase_moveDiagonally','HJKsA','DPKMm','xyBKQ','ANGER','max','uRcvS','Window_NumberInput_start','add','Game_CharacterBase_initMembers','hsvvx','deleteSavedEventLocationKey','switch1Valid','executeCommonEvent','SuccessSwitchId','Window_EventItem_onCancel','\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!','updateTilt','LIGHT-BULB','Sprite_Character_characterPatternY','processMoveRouteTeleportToCharacter','ARRAYSTR','isRegionForbidPass','TOGGLE','isAllowCharacterTilt','code','HMPH','Game_Interpreter_PluginCommand','setupSpawnedEvents','jfkxc','rxMIa','isBusy','_eventIcon','SQEic','_eventPageIndex','TerrainTags','_randomMoveWeight','_spriteOffsetX','SWEAT','Game_Vehicle_isLandOk','isSpriteVS8dir','uBZAG','UpTHz','hasClickTrigger','advancedFunc','COLLAPSE','Game_Event_update','sdhtJ','spawnEventId','isLabelVisible','VIBfa','offsetY','ZsGky','lgndQ','despawnEventId','isMapSwitch','ShowShadows','updateMoveSynchDirection','updateBitmapSmoothing','isDashDisabled','floor','clearSpriteOffsets','pageId','FRUSTRATION','checkEventTriggerHere','absDistance','Game_CharacterBase_moveStraight','checkExistingEntitiesAt','requestRefresh','clear','updateMove','lastSpawnedEvent','YLHIU','CPTbp','variableId','jump','Game_Map_refresh','AutoMoveEvents','setTileBitmap','frontX','isEmptyCharacter','USER-DEFINED\x205','_dummyWindow','Sprite_Character_initMembers','$preloadedMap_%1','turnRight90','isDashingAndMoving','PostCopyJS','approach','_cacheVisibility','vbjZE','SPIN\x20COUNTERCLOCKWISE','LOVE','lock','startScaleX','VICTORY','opacity','deleteEventLocation','UhHKY','ShiftY','_encounterEffectDuration','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','SkBmA','Game_Event_initialize','characterPatternYVS8','_cpc','Bradl','YMfOH','DfQzD','lffTS','SPIN\x20ANTICLOCKWISE','onLoadAttachPicture','SelfVariableID','_mirrorSprite','oAALR','Movement','XzwLF','bufferX','startScale','YbqDc','_selfEvent','setFrame','_seconds','hluRS','SILENCE','SpriteBased','_scene','isCollidedWithEvents','bsyve','xLbwl','ASGiO','ALLOW_LADDER_DASH','FaceSynchAllSynchTargets','eventLabelsVisible','AutoBalloon','XZFFQ','processMoveRouteFadeIn','IconBufferX','moveRouteIndex','_eventIconSprite','SelfSwitches','processSaveEventLocation','row','MvgjM','_visiblePlayerY','_expireCommonEvent','endScaleX','CWAuw','cwY','isObjectCharacter','distance','changeSpeed','removeTemporaryMapSpawnedEvents','requestAnimation','checkValidEventerMap','processMoveRouteStepToCharacter','Game_Interpreter_updateWaitMode','deltaYFrom','parallelCommonEvents','tileWidth','DEcFF','_proxyWindow','KNEEL','_moveRouteIndex','blt','GfINp','FollowerSetGlobalChase','hasCPCs','getEventIconIndex','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','shift','setupCopyEvent','MhZFq','needsAttachPictureUpdate','Game_Follower_initialize','Game_Player_checkEventTriggerThere','isDestinationValid','_eventScreenY','height','_regionRules','setPlayerControlDisable','event','Ship','_tilemap','opacitySpeed','_interpreter','_CPCs','MapId','_forceCarrying','isSpawnedEvent','text','processMoveSynchDirection','canUpdate','clearStepPattern','width','PvYqF','startMapCommonEventOnOK','updateSpritePosition','UPhzS','_startAngle','_character','processMoveCommand','Game_Player_checkEventTriggerHere','ELUwq','_EventsMoveCoreSettings','GrVgW','Jadmu','processMoveRoutePatternLock','variableValid','processMoveRouteJumpTo','isSmartEventCollisionOn','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','_forceShowFollower','isVisible','_moveRoute','characterName','player','createSpawnedEventWithData','SaQiB','Game_Timer_initialize','SraSC','Game_CharacterBase_direction','_eventOverloadThreshold','iconHeight','getAttachPictureBitmapWidth','isMoveOnlyRegionPassable','SpawnEventAtRegion','prepareSpawnedEventAtRegion','Game_CharacterBase_increaseSteps','setMoveSpeed','_randomHomeX','_addedHitbox','misc','kYSZm','EventId','string','setupMorphEvent','parse','xNVsi','%1,','Game_Troop_meetsConditions','isSelfSwitch','realMoveSpeed','screenY','EventTemplates','processMoveRouteFadeOut','startMapCommonEventOnTouch','_startY','SelfDataResetAll','convertVariableValuesInScriptCall','isLongPressed','Game_Message_setItemChoice','Sprite_Character_update','_attachPicture','adjustY','EeITc','PSJoA','processMoveSynchMirrorVert','processMoveSynchApproach','mainFontSize','Scene_Map_startEncounterEffect','_activationProximityAutoTriggerBypass','GKSdB','SpawnEventDespawnEverything','_attachPictureSprite','TileX','onLoadSuccess','STRUCT','MUSIC-NOTE','Qfrqi','replace','prototype','sAMnX','follower','conditions','activationProximityType','prepareSpawnedEventAtXY','pause','IconSet','LineHeight','mapValue','bBRua','NlpYq','ELwQj','Game_CharacterBase_opacity','TKwGV','_needsPeriodicRefresh','updateEventsMoveCoreTagChanges','roundY','executeMoveDir8','isSpawnHitboxCollisionOk','VisibleEventLabels','cTruz','setAllowEventAutoMovement','_offsetY','resetSelfSwitchesForMap','Game_Map_setupEvents','Game_Temp_setDestination','RFjki','eraseEvent','removeMorph','despawnRegions','OyTGI','ARRAYNUM','despawnTerrainTags','isPassableByAnyDirection','MsgPopupFollower','NUM','canPassDiagonally','Label','updateScaleBase','VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20','forceCarrying','_moveSynch','updateParallel','Vehicle','hideShadows','_characterName','_stopCount','_textSprite','VuHWG','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','qfEsb','EventTimerExpireClear','bBwKP','XsHtz','_chaseOff','_clickTrigger','EventTimerSpeed','processOk','qzQJU','Arc','charAt','TzAxZ','processMoveSynchAway','_settings','getInputDir8','Sprite_Character_setTileBitmap','EventAutoMovement','EMPmI','_hue','Toggle','AmYDB','Button','SpawnEventDespawnRegions','events','processMoveRouteSelfVariable','isInVehicle','away','ConvertParams','Game_CharacterBase_screenY','createCharacterShadow','clearSelfTarget','areFollowersForceShown','EventAllow','NdmRI','endOffsetX','setDirection','updateText','template','PreCopyJS','qQcMx','moveAwayFromPoint','xdSwF','EventLabelRefresh','RsfMe','pos','deltaXFrom','EventTimerPause','CustomPageConditions','%1%2','Game_Event_checkEventTriggerAuto','Game_Troop_meetsConditionsCPC','getSavedEventLocation','terrainTag','VsRmE','vnjYw','initMoveSpeed','updateEventMirrorSprite','getDiagonalDestination','NopvT','pageIndex','setupSpawn','setupEventsMoveCoreCommentTags','ITEM','moveStraight','EventTimerFramesSet','EventIconDelete','Forbid','processMoveRouteTeleportTo','Window_NumberInput_processOk','IconBufferY','adjustX','updateMoveSynch','Game_Message_add','ftYHA','cRCFT','execute','lkmvc','Game_Message_setNumberInput','_startScaleX','_requestSaveEventLocation','strAA','isNearTheScreen','roundXWithDirection','_periodicRefreshTimer','isLandOk','startAngle','Game_Timer_start','duration','setCommonEvent','kLHuq','bDCRR','name','of\x20Preloaded\x20Maps.\x0a\x0a','fittingHeight','MapID','FontSize','switch2Id','EVAL','areFollowersForceHidden','createTextSprite','return\x20%1','hfSDH','BufferX','isPassable','_randomHomeY','EventLabelVisible','Hidden','setPlayerDiagonalSetting','MsgPopupTargetTile','SLALH','Player','mapId','meetActivationRegionConditions','Frames','onCancel','Spriteset_Map_createLowerLayer','stop','createEventsMoveCoreTileMessagePopup','setupFollowerVisibilityOverrides','createContents','isPlayerForceShown','_cacheSystemVisible','getInputDirection','WAxwN','isPlaytest','target','list','prepareSpawnedEventAtTerrainTag','onOk','jiYyn','XiKAs','ZUQSR','roundX','isShip','createAttachPictureSprite','HPbVO','version','default','startMessage','TiltVert','_scaleY','LEFT\x20TO\x20RIGHT','startOffsetY','updateFadeOut'];_0x1818=function(){return _0x32ca46;};return _0x1818();}function Game_CPCInterpreter(){const _0x25a7d3=_0x533487;this['initialize'][_0x25a7d3(0x633)](this,arguments);};Game_CPCInterpreter[_0x533487(0x48b)]=Object[_0x533487(0x168)](Game_Interpreter[_0x533487(0x48b)]),Game_CPCInterpreter[_0x533487(0x48b)][_0x533487(0x216)]=Game_CPCInterpreter,Game_CPCInterpreter[_0x533487(0x48b)][_0x533487(0x3c1)]=function(){const _0x5303ed=_0x533487;Game_Interpreter[_0x5303ed(0x48b)][_0x5303ed(0x3c1)][_0x5303ed(0x1ce)](this),this[_0x5303ed(0x3e5)]=![];},Game_CPCInterpreter[_0x533487(0x48b)][_0x533487(0x509)]=function(){const _0x25c14d=_0x533487;while(this[_0x25c14d(0x12c)]()){this[_0x25c14d(0x293)]();}},Game_CPCInterpreter[_0x533487(0x48b)][_0x533487(0x389)]=function(_0x3d4506){const _0x37e09f=_0x533487;while(this[_0x37e09f(0x12c)]()){this[_0x37e09f(0x63a)](_0x3d4506);}},Game_CPCInterpreter[_0x533487(0x48b)][_0x533487(0x63a)]=function(_0x49a7d0){const _0x25b0e3=_0x533487,_0x477978=_0x49a7d0;$gameTemp[_0x25b0e3(0x2df)](_0x477978);const _0x1e9280=VisuMZ[_0x25b0e3(0x163)][_0x25b0e3(0x335)]['call'](this);return $gameTemp[_0x25b0e3(0x4dc)](),_0x1e9280;},Game_CPCInterpreter[_0x533487(0x48b)][_0x533487(0x66e)]=function(_0x5d3668){const _0x262717=_0x533487;return Game_Interpreter[_0x262717(0x48b)]['command108'][_0x262717(0x1ce)](this,_0x5d3668),this[_0x262717(0x214)][_0x262717(0x27a)](_0x3bc887=>_0x3bc887[_0x262717(0x579)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(_0x262717(0x5b0)!==_0x262717(0x54e)?this[_0x262717(0x3e5)]=!![]:(this[_0x262717(0x254)][_0x2230d5]=_0xdde3e0[0x2][_0x262717(0x579)](/VAR/i)?_0x3de0e8:!!_0x1160db,this[_0x262717(0x1ab)]())),!![];},VisuMZ[_0x533487(0x163)][_0x533487(0x480)]=Scene_Map[_0x533487(0x48b)]['startEncounterEffect'],Scene_Map['prototype'][_0x533487(0x6ac)]=function(){const _0x4f6bda=_0x533487;VisuMZ[_0x4f6bda(0x163)][_0x4f6bda(0x480)][_0x4f6bda(0x1ce)](this),this['_spriteset'][_0x4f6bda(0x4b8)]();},VisuMZ['EventsMoveCore']['Scene_Load_onLoadSuccess']=Scene_Load[_0x533487(0x48b)][_0x533487(0x486)],Scene_Load[_0x533487(0x48b)][_0x533487(0x486)]=function(){const _0xa4aa91=_0x533487;if($gameMap)$gameMap[_0xa4aa91(0x304)]();VisuMZ[_0xa4aa91(0x163)]['Scene_Load_onLoadSuccess'][_0xa4aa91(0x1ce)](this);},VisuMZ[_0x533487(0x163)][_0x533487(0x3cf)]=Sprite_Character[_0x533487(0x48b)][_0x533487(0x643)],Sprite_Character[_0x533487(0x48b)][_0x533487(0x643)]=function(){const _0x5a64ab=_0x533487;VisuMZ[_0x5a64ab(0x163)]['Sprite_Character_initMembers'][_0x5a64ab(0x1ce)](this),this['initMembersEventsMoveCore'](),this[_0x5a64ab(0x544)](),this['createIconSprite']();},Sprite_Character['prototype'][_0x533487(0x215)]=function(){this['_shadowOpacity']=0xff;},Sprite_Character[_0x533487(0x48b)]['createAttachPictureSprite']=function(){const _0x52aa48=_0x533487;this[_0x52aa48(0x484)]=new Sprite(),this[_0x52aa48(0x484)][_0x52aa48(0x169)]['x']=0.5,this['_attachPictureSprite']['anchor']['y']=0x1,this['addChild'](this[_0x52aa48(0x484)]),this['updateAttachPictureSprite']();},Sprite_Character[_0x533487(0x48b)][_0x533487(0x5a2)]=function(){const _0x17ef9c=_0x533487;this[_0x17ef9c(0x407)]=new Sprite(),this[_0x17ef9c(0x407)][_0x17ef9c(0x2c9)]=ImageManager[_0x17ef9c(0x59d)](_0x17ef9c(0x492)),this[_0x17ef9c(0x407)]['bitmap'][_0x17ef9c(0x133)]=![],this[_0x17ef9c(0x407)][_0x17ef9c(0x3f5)](0x0,0x0,0x0,0x0),this['_eventIconSprite'][_0x17ef9c(0x169)]['x']=0.5,this['_eventIconSprite'][_0x17ef9c(0x169)]['y']=0x1,this['addChild'](this[_0x17ef9c(0x407)]);},Sprite_Character[_0x533487(0x48b)][_0x533487(0x3a4)]=function(){const _0x4dc9c0=_0x533487;return this[_0x4dc9c0(0x4b9)]&&this[_0x4dc9c0(0x4b9)][_0x4dc9c0(0x579)](/\[VS8\]/i);},Sprite_Character[_0x533487(0x48b)]['isAutoBufferIcon']=function(){const _0x4833ea=_0x533487;return this['isSpriteVS8dir']()&&VisuMZ[_0x4833ea(0x163)][_0x4833ea(0x5eb)][_0x4833ea(0x628)]['AutoBuffer'];},VisuMZ['EventsMoveCore'][_0x533487(0x478)]=Sprite_Character[_0x533487(0x48b)][_0x533487(0x697)],Sprite_Character[_0x533487(0x48b)][_0x533487(0x697)]=function(){const _0x1402e7=_0x533487;VisuMZ[_0x1402e7(0x163)]['Sprite_Character_update'][_0x1402e7(0x1ce)](this),this[_0x1402e7(0x556)]();},Sprite_Character['prototype'][_0x533487(0x2c4)]=function(){const _0x5a8c1b=_0x533487;Sprite[_0x5a8c1b(0x48b)][_0x5a8c1b(0x2c4)][_0x5a8c1b(0x1ce)](this),this[_0x5a8c1b(0x16d)]()&&(this[_0x5a8c1b(0x560)]=![]);},Sprite_Character[_0x533487(0x48b)][_0x533487(0x16d)]=function(){const _0x5b258a=_0x533487;if(this[_0x5b258a(0x424)]()>0x0)return![];if(this[_0x5b258a(0x444)]){if(this[_0x5b258a(0x444)]['attachPictureFilename']()!=='')return![];}return this[_0x5b258a(0x3cc)]()||this[_0x5b258a(0x444)]&&this['_character']['isTransparent']();},Sprite_Character[_0x533487(0x48b)][_0x533487(0x556)]=function(){const _0x1d5c86=_0x533487;this[_0x1d5c86(0x4b2)](),this[_0x1d5c86(0x38d)](),this[_0x1d5c86(0x129)](),this[_0x1d5c86(0x2f8)](),this['updateEventCustomZ'](),this['updateEventMirrorSprite'](),this['updateAttachPictureSprite']();},VisuMZ[_0x533487(0x163)][_0x533487(0x4cd)]=Sprite_Character[_0x533487(0x48b)]['setTileBitmap'],Sprite_Character[_0x533487(0x48b)][_0x533487(0x3ca)]=function(){const _0x150f34=_0x533487;VisuMZ[_0x150f34(0x163)][_0x150f34(0x4cd)][_0x150f34(0x1ce)](this),this[_0x150f34(0x2c9)]['addLoadListener'](this[_0x150f34(0x3b6)][_0x150f34(0x6c8)](this));},VisuMZ[_0x533487(0x163)]['Sprite_Character_setCharacterBitmap']=Sprite_Character[_0x533487(0x48b)][_0x533487(0x6b6)],Sprite_Character[_0x533487(0x48b)][_0x533487(0x6b6)]=function(){const _0x5d53b7=_0x533487;VisuMZ[_0x5d53b7(0x163)][_0x5d53b7(0x120)][_0x5d53b7(0x1ce)](this),this[_0x5d53b7(0x2c9)][_0x5d53b7(0x336)](this['updateBitmapSmoothing']['bind'](this));},Sprite_Character['prototype'][_0x533487(0x3b6)]=function(){const _0x3e20a7=_0x533487;if(!this[_0x3e20a7(0x2c9)])return;this[_0x3e20a7(0x2c9)][_0x3e20a7(0x133)]=!!VisuMZ[_0x3e20a7(0x163)][_0x3e20a7(0x5eb)][_0x3e20a7(0x3ef)]['BitmapSmoothing'];},VisuMZ[_0x533487(0x163)][_0x533487(0x38f)]=Sprite_Character[_0x533487(0x48b)][_0x533487(0x57d)],Sprite_Character[_0x533487(0x48b)][_0x533487(0x57d)]=function(){const _0x348d8d=_0x533487;return this[_0x348d8d(0x3a4)]()?this['characterPatternYVS8']():this['characterPatternYBasic']();},Sprite_Character[_0x533487(0x48b)][_0x533487(0x3e4)]=function(){const _0x156d6c=_0x533487,_0x5b32c3=this[_0x156d6c(0x444)][_0x156d6c(0x354)]();let _0x432be8=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this[_0x156d6c(0x444)][_0x156d6c(0x3ed)]&&(_0x432be8=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x432be8[_0x5b32c3]-0x2)/0x2;},Sprite_Character[_0x533487(0x48b)]['characterPatternYBasic']=function(){const _0x5ce03d=_0x533487;let _0x411771=this[_0x5ce03d(0x444)][_0x5ce03d(0x354)]();if(this[_0x5ce03d(0x444)][_0x5ce03d(0x3ed)]){if(_0x411771===0x4)_0x411771=0x6;else{if(_0x411771===0x6){if(_0x5ce03d(0x217)!==_0x5ce03d(0x128))_0x411771=0x4;else{const _0x501cbd=this['event'](_0x5c10ce);if(_0x501cbd)_0x501cbd['erase']();}}}}return(_0x411771-0x2)/0x2;},Sprite_Character[_0x533487(0x48b)][_0x533487(0x4b2)]=function(){const _0x435971=_0x533487;this[_0x435971(0x31b)]['x']=this['_character'][_0x435971(0x652)]??0x1,this[_0x435971(0x31b)]['y']=this[_0x435971(0x444)]['_scaleY']??0x1;},Sprite_Character['prototype']['updateTilt']=function(){const _0x572c62=_0x533487;if(!VisuMZ[_0x572c62(0x163)]['Settings'][_0x572c62(0x3ef)][_0x572c62(0x256)])return;this[_0x572c62(0x26d)]=0x0;if(this[_0x572c62(0x394)]()){const _0x2784a9=VisuMZ[_0x572c62(0x163)][_0x572c62(0x5eb)][_0x572c62(0x3ef)],_0xc0aa58=this[_0x572c62(0x444)]['direction']();let _0x1c6908=0x0;if([0x1,0x4,0x7][_0x572c62(0x1c6)](_0xc0aa58))_0x1c6908=_0x2784a9[_0x572c62(0x690)];if([0x3,0x6,0x9][_0x572c62(0x1c6)](_0xc0aa58))_0x1c6908=_0x2784a9['TiltRight'];[0x2,0x8][_0x572c62(0x1c6)](_0xc0aa58)&&(_0x1c6908=[-_0x2784a9[_0x572c62(0x549)],0x0,_0x2784a9[_0x572c62(0x549)]][this['_character'][_0x572c62(0x252)]()]);if(this[_0x572c62(0x1de)])_0x1c6908*=-0x1;this[_0x572c62(0x26d)]=_0x1c6908;}},Sprite_Character[_0x533487(0x48b)][_0x533487(0x394)]=function(){const _0x613512=_0x533487;if(this[_0x613512(0x5d5)])return![];return this['_character'][_0x613512(0x3d2)]()&&!this[_0x613512(0x444)]['isOnLadder']()&&!this[_0x613512(0x444)][_0x613512(0x15d)]()&&this[_0x613512(0x424)]()===0x0;},Sprite_Character[_0x533487(0x48b)][_0x533487(0x129)]=function(){const _0x1c07c7=_0x533487;if(!this['_shadowSprite'])return;this['_shadowSprite']['x']=this[_0x1c07c7(0x444)]['shadowX'](),this[_0x1c07c7(0x222)]['y']=this[_0x1c07c7(0x444)][_0x1c07c7(0x63f)](),this[_0x1c07c7(0x222)][_0x1c07c7(0x3dc)]=this[_0x1c07c7(0x3dc)],this[_0x1c07c7(0x222)][_0x1c07c7(0x560)]=this[_0x1c07c7(0x444)][_0x1c07c7(0x11b)](),this[_0x1c07c7(0x222)][_0x1c07c7(0x2a6)]=this[_0x1c07c7(0x2a6)];if(this[_0x1c07c7(0x444)]['isShadowShrink']())this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['x']=Math[_0x1c07c7(0x381)](0x0,this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['x']-0.1),this['_shadowSprite']['scale']['y']=Math[_0x1c07c7(0x381)](0x0,this['_shadowSprite'][_0x1c07c7(0x31b)]['y']-0.1);else{if(this['_shadowSprite'][_0x1c07c7(0x31b)]['x']!==this[_0x1c07c7(0x31b)]['x']){if(this[_0x1c07c7(0x222)]['scale']['x']>this[_0x1c07c7(0x31b)]['x'])this['_shadowSprite'][_0x1c07c7(0x31b)]['x']=Math['min'](this['_shadowSprite'][_0x1c07c7(0x31b)]['x']+0.1,this[_0x1c07c7(0x31b)]['x']);if(this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['x']<this[_0x1c07c7(0x31b)]['x'])this[_0x1c07c7(0x222)]['scale']['x']=Math[_0x1c07c7(0x381)](this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['x']-0.1,this['scale']['x']);}if(this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['y']!==this[_0x1c07c7(0x31b)]['y']){if(this[_0x1c07c7(0x222)]['scale']['y']>this[_0x1c07c7(0x31b)]['y'])this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['y']=Math[_0x1c07c7(0x2e4)](this[_0x1c07c7(0x222)]['scale']['y']+0.1,this[_0x1c07c7(0x31b)]['y']);if(this['_shadowSprite'][_0x1c07c7(0x31b)]['y']<this[_0x1c07c7(0x31b)]['y'])this[_0x1c07c7(0x222)]['scale']['y']=Math[_0x1c07c7(0x381)](this[_0x1c07c7(0x222)][_0x1c07c7(0x31b)]['y']-0.1,this[_0x1c07c7(0x31b)]['y']);}}},Sprite_Character[_0x533487(0x48b)][_0x533487(0x2f8)]=function(){const _0x39b19d=_0x533487;if(!this['_eventIconSprite'])return;const _0x3d1748=this[_0x39b19d(0x407)],_0x1304ba=this[_0x39b19d(0x424)]();if(_0x1304ba<=0x0)return _0x3d1748['setFrame'](0x0,0x0,0x0,0x0);else{const _0x24a108=ImageManager[_0x39b19d(0x606)],_0x3312dc=ImageManager['iconHeight'],_0x3e8a9d=_0x1304ba%0x10*_0x24a108,_0x2d9e79=Math['floor'](_0x1304ba/0x10)*_0x3312dc;_0x3d1748[_0x39b19d(0x3f5)](_0x3e8a9d,_0x2d9e79,_0x24a108,_0x3312dc),this[_0x39b19d(0x560)]=!![];}const _0xb42922=this[_0x39b19d(0x444)]['getEventIconData']();if(this[_0x39b19d(0x321)]()){if(_0x39b19d(0x545)===_0x39b19d(0x3c5)){if(this[_0x39b19d(0x40d)]===_0x21e100)this[_0x39b19d(0x265)]();this[_0x39b19d(0x40d)]?_0x3b3931[_0x39b19d(0x608)](this['_expireCommonEvent']):_0x44a5d1[_0x39b19d(0x163)][_0x39b19d(0x1e6)][_0x39b19d(0x1ce)](this);}else this[_0x39b19d(0x1bb)](_0x3d1748);}else _0x3d1748['x']=_0xb42922?_0xb42922[_0x39b19d(0x3f1)]:0x0,_0x3d1748['y']=_0xb42922?-this['height']+_0xb42922['bufferY']:0x0;_0x3d1748['blendMode']=_0xb42922?_0xb42922['blendMode']:0x0,this[_0x39b19d(0x2da)](_0x3d1748),this[_0x39b19d(0x5b8)](_0x3d1748),_0x3d1748[_0x39b19d(0x26d)]=-this[_0x39b19d(0x26d)];},Sprite_Character['prototype'][_0x533487(0x19d)]=function(){const _0x309451=_0x533487;if(!this['_character'])return;if(this[_0x309451(0x444)][_0x309451(0x634)]===undefined)return;if(this['_character']['_customZ']===![])return;this['z']=this[_0x309451(0x444)][_0x309451(0x634)];if(this[_0x309451(0x222)]){if(_0x309451(0x4d2)!==_0x309451(0x4d2)){const _0x29f946=_0x5a1434[_0x309451(0x426)]();delete this[_0x309451(0x254)][_0x29f946];}else{if(this['z']<0x0){if('BpkUH'!==_0x309451(0x2ed)){_0x302ab9[_0x309451(0x163)][_0x309451(0x446)][_0x309451(0x1ce)](this,_0x231085);if(this[_0x309451(0x5ee)]()){this[_0x309451(0x663)](_0x35db2a);if(_0x4fa73[_0x309451(0x1c6)](0x0)&&this[_0x309451(0x6b8)]()==='standing')this[_0x309451(0x440)](this['x'],this['y']);else(_0x4839d3['includes'](0x1)||_0xdc2b2f[_0x309451(0x1c6)](0x2))&&this[_0x309451(0x472)]();}}else this[_0x309451(0x222)]['z']=this['z']-0x1;}else this[_0x309451(0x222)]['z']=0x0;}}},Sprite_Character[_0x533487(0x48b)][_0x533487(0x4f6)]=function(){const _0x406578=_0x533487;if(!this[_0x406578(0x444)])return;let _0x7745e5=!!this[_0x406578(0x444)][_0x406578(0x3ed)];this[_0x406578(0x31b)]['x']=Math[_0x406578(0x353)](this[_0x406578(0x31b)]['x'])*(_0x7745e5?-0x1:0x1);},Sprite_Character[_0x533487(0x48b)][_0x533487(0x1bb)]=function(_0x1cd82c){const _0x136385=_0x533487;_0x1cd82c['x']=0x0,_0x1cd82c['y']=-this[_0x136385(0x42e)]+this[_0x136385(0x42e)]*0x2/0x5;if(this[_0x136385(0x444)]['pattern']()!==0x1){if(_0x136385(0x696)!==_0x136385(0x696)){if(this[_0x136385(0x260)])return!![];return _0xbc440a['prototype']['isNearTheScreen'][_0x136385(0x1ce)](this);}else _0x1cd82c['y']+=0x1;}},Sprite_Character[_0x533487(0x48b)][_0x533487(0x424)]=function(){const _0x2ba632=_0x533487;if(!this['_character'])return 0x0;if(this[_0x2ba632(0x444)]['_erased'])return 0x0;const _0x4ee70e=this[_0x2ba632(0x444)][_0x2ba632(0x599)]();return _0x4ee70e?_0x4ee70e[_0x2ba632(0x202)]||0x0:0x0;},Sprite_Character[_0x533487(0x48b)][_0x533487(0x1a1)]=function(){const _0x38ffa6=_0x533487;if(!this[_0x38ffa6(0x484)])return;if(!this[_0x38ffa6(0x444)])return;this[_0x38ffa6(0x132)](),this['updateAttachPictureBitmap']();},Sprite_Character[_0x533487(0x48b)][_0x533487(0x132)]=function(){const _0x2a6f2e=_0x533487;if(!this[_0x2a6f2e(0x429)]())return;const _0xcb22e1=this['_character'][_0x2a6f2e(0x5df)]();this['_lastAttachPictureFilename']=_0xcb22e1['filename'],this[_0x2a6f2e(0x373)]=_0xcb22e1['maxSize'],this[_0x2a6f2e(0x330)]=_0xcb22e1[_0x2a6f2e(0x31b)];if(_0xcb22e1[_0x2a6f2e(0x677)]!==''){const _0x434923=ImageManager['loadPicture'](_0xcb22e1[_0x2a6f2e(0x677)]);_0x434923[_0x2a6f2e(0x336)](this[_0x2a6f2e(0x3eb)]['bind'](this,_0x434923));}else this['_attachPictureSprite'][_0x2a6f2e(0x2c9)]=new Bitmap(0x1,0x1);},Sprite_Character['prototype'][_0x533487(0x626)]=function(){const _0x21f795=_0x533487,_0x30591e=this[_0x21f795(0x484)];_0x30591e['x']=this['_character'][_0x21f795(0x239)](),_0x30591e['y']=this['_character'][_0x21f795(0x657)](),_0x30591e['blendMode']=this[_0x21f795(0x444)][_0x21f795(0x60b)]();},Sprite_Character[_0x533487(0x48b)][_0x533487(0x429)]=function(){const _0x5c9863=_0x533487,_0x39d0ac=this[_0x5c9863(0x444)][_0x5c9863(0x5df)]();if(_0x39d0ac){if(this[_0x5c9863(0x1ef)]!==_0x39d0ac[_0x5c9863(0x677)])return!![];if(this[_0x5c9863(0x373)]!==_0x39d0ac[_0x5c9863(0x1b8)])return!![];if(this['_lastAttachPictureScale']!==_0x39d0ac[_0x5c9863(0x31b)])return!![];}return![];},Sprite_Character[_0x533487(0x48b)][_0x533487(0x3eb)]=function(_0x11ba79){const _0x378191=_0x533487,_0x3f0d8d=this[_0x378191(0x484)];_0x3f0d8d[_0x378191(0x2c9)]=_0x11ba79;const _0x4c998b=this['_character'][_0x378191(0x5df)](),_0x171dd6=_0x4c998b[_0x378191(0x1b8)],_0xfe2521=_0x4c998b[_0x378191(0x31b)];let _0x12450f=0x1;if(_0x171dd6>0x0){let _0x17a6a0=this[_0x378191(0x45c)]()||0x1,_0x166d93=this[_0x378191(0x5c7)]()||0x1;const _0x2d0291=Math[_0x378191(0x381)](0x1,_0x17a6a0,_0x166d93);_0x12450f=_0x171dd6/_0x2d0291;}_0x12450f*=_0xfe2521,_0x12450f!==0x1&&(this[_0x378191(0x484)][_0x378191(0x2c9)][_0x378191(0x133)]=!![]),_0x3f0d8d[_0x378191(0x31b)]['x']=_0x12450f,_0x3f0d8d['scale']['y']=_0x12450f,this[_0x378191(0x560)]=!![],this['updateAttachPictureBitmap']();},Sprite_Character['prototype'][_0x533487(0x45c)]=function(){const _0x537e58=_0x533487,_0x37c41d=this['_attachPictureSprite'];if(!_0x37c41d)return 0x0;return _0x37c41d[_0x537e58(0x2c9)][_0x537e58(0x43e)];},Sprite_Character[_0x533487(0x48b)][_0x533487(0x5c7)]=function(){const _0x59af79=_0x533487,_0x4c6b66=this[_0x59af79(0x484)];if(!_0x4c6b66)return 0x0;return _0x4c6b66[_0x59af79(0x2c9)][_0x59af79(0x42e)];},VisuMZ['EventsMoveCore']['Sprite_Balloon_setup']=Sprite_Balloon['prototype'][_0x533487(0x198)],Sprite_Balloon[_0x533487(0x48b)][_0x533487(0x198)]=function(_0x47ce30,_0x3774e5){const _0x17dd01=_0x533487;VisuMZ[_0x17dd01(0x163)][_0x17dd01(0x35e)][_0x17dd01(0x1ce)](this,_0x47ce30,_0x3774e5),VisuMZ['EventsMoveCore'][_0x17dd01(0x5eb)][_0x17dd01(0x628)][_0x17dd01(0x402)]&&this['_target']['_character'][_0x17dd01(0x609)](_0x3774e5,this[_0x17dd01(0x1e5)]);},VisuMZ[_0x533487(0x163)][_0x533487(0x134)]=Sprite_Balloon[_0x533487(0x48b)][_0x533487(0x351)],Sprite_Balloon[_0x533487(0x48b)][_0x533487(0x351)]=function(){const _0x32c62b=_0x533487;VisuMZ['EventsMoveCore'][_0x32c62b(0x134)]['call'](this),this[_0x32c62b(0x602)]();},Sprite_Balloon['prototype'][_0x533487(0x602)]=function(){const _0x30f99d=_0x533487;this[_0x30f99d(0x6bc)][_0x30f99d(0x444)][_0x30f99d(0x3a4)]()&&(this['x']+=VisuMZ[_0x30f99d(0x163)][_0x30f99d(0x5eb)][_0x30f99d(0x628)][_0x30f99d(0x340)],this['y']+=VisuMZ['EventsMoveCore'][_0x30f99d(0x5eb)][_0x30f99d(0x628)]['BalloonOffsetY']);},Sprite_Timer[_0x533487(0x48b)][_0x533487(0x2d8)]=function(){const _0x471475=_0x533487;this[_0x471475(0x2c9)]=new Bitmap(Math[_0x471475(0x22e)](Graphics[_0x471475(0x590)]/0x2),0x30),this['bitmap']['fontFace']=this[_0x471475(0x5d2)](),this[_0x471475(0x2c9)][_0x471475(0x6cd)]=this[_0x471475(0x6cd)](),this[_0x471475(0x2c9)][_0x471475(0x355)]=ColorManager[_0x471475(0x355)]();},Sprite_Timer[_0x533487(0x48b)][_0x533487(0x34a)]=function(){const _0x5a7968=_0x533487,_0x51497f=Math[_0x5a7968(0x3b8)](this['_seconds']/0x3c/0x3c),_0x84e21a=Math[_0x5a7968(0x3b8)](this[_0x5a7968(0x3f6)]/0x3c)%0x3c,_0x3fba0f=this['_seconds']%0x3c;let _0xecfb9=_0x84e21a['padZero'](0x2)+':'+_0x3fba0f[_0x5a7968(0x63e)](0x2);if(_0x51497f>0x0)_0xecfb9=_0x5a7968(0x2ce)[_0x5a7968(0x1b5)](_0x51497f,_0xecfb9);return _0xecfb9;};function Sprite_EventLabel(){const _0x36eef1=_0x533487;this[_0x36eef1(0x213)](...arguments);}Sprite_EventLabel[_0x533487(0x48b)]=Object[_0x533487(0x168)](Sprite['prototype']),Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x216)]=Sprite_EventLabel,Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x213)]=function(_0xb7124b){const _0x594e3b=_0x533487;this[_0x594e3b(0x1ec)]=_0xb7124b,Sprite[_0x594e3b(0x48b)]['initialize'][_0x594e3b(0x1ce)](this),this[_0x594e3b(0x643)](),this[_0x594e3b(0x1cb)]();},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x643)]=function(){const _0x2220a5=_0x533487;this[_0x2220a5(0x169)]['x']=0.5,this[_0x2220a5(0x169)]['y']=0x1;},Sprite_EventLabel['prototype'][_0x533487(0x1cb)]=function(){const _0x15a2f8=_0x533487,_0x3e89d1=new Rectangle(0x0,0x0,0x1,0x1);this[_0x15a2f8(0x41d)]=new Window_Base(_0x3e89d1),this['_proxyWindow'][_0x15a2f8(0x1fb)]=0x0,this[_0x15a2f8(0x3dc)]=this['isLabelVisible']()?0xff:0x0;},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x697)]=function(){const _0x581052=_0x533487;Sprite['prototype'][_0x581052(0x697)]['call'](this),this[_0x581052(0x4e2)](),this['updateScale'](),this[_0x581052(0x351)](),this['updateOpacity'](),this[_0x581052(0x19e)]();},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x4e2)]=function(){const _0x2b3075=_0x533487;this['_event'][_0x2b3075(0x1f1)]()!==this['_text']&&(_0x2b3075(0x2f1)!==_0x2b3075(0x399)?(this['_text']=this[_0x2b3075(0x1ec)][_0x2b3075(0x1f1)](),this[_0x2b3075(0x191)]()):(this[_0x2b3075(0x4cb)]=_0x3a5f94,_0x3e2cab['prototype']['initialize'][_0x2b3075(0x1ce)](this),this[_0x2b3075(0x643)](),this[_0x2b3075(0x2c1)](),this[_0x2b3075(0x521)](),this[_0x2b3075(0x697)]()));},Sprite_EventLabel['prototype']['refresh']=function(){const _0x47a454=_0x533487;if(!this[_0x47a454(0x41d)])return;this[_0x47a454(0x5a0)](),this['drawText']();},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x5a0)]=function(){const _0x3ff983=_0x533487,_0xb67884=this[_0x3ff983(0x41d)]['textSizeEx'](this[_0x3ff983(0x26f)]),_0x5d71f5=this['_proxyWindow'][_0x3ff983(0x668)](),_0x57de24=_0xb67884['width']+_0x5d71f5*0x2,_0x3c0917=_0xb67884[_0x3ff983(0x42e)];this['_proxyWindow']['move'](0x0,0x0,_0x57de24,_0x3c0917),this[_0x3ff983(0x41d)][_0x3ff983(0x535)](),this['bitmap']=this[_0x3ff983(0x41d)]['contents'];},Sprite_EventLabel['prototype']['drawText']=function(){const _0x3735bc=_0x533487,_0x2e7252=this[_0x3735bc(0x41d)][_0x3735bc(0x668)]();this['_proxyWindow']['drawTextEx'](this[_0x3735bc(0x26f)],_0x2e7252,0x0);},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x35c)]=function(){const _0x422fbf=_0x533487,_0x54312d=VisuMZ[_0x422fbf(0x163)]['Settings'][_0x422fbf(0x4b1)][_0x422fbf(0x51d)],_0x52c274=$gameSystem[_0x422fbf(0x47f)]()||0x1;this[_0x422fbf(0x31b)]['x']=this[_0x422fbf(0x31b)]['y']=_0x54312d/_0x52c274;},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x351)]=function(){const _0x712426=_0x533487;if(!SceneManager['_scene'])return;if(!SceneManager[_0x712426(0x3fa)][_0x712426(0x25a)])return;const _0x25ce63=SceneManager['_scene'][_0x712426(0x25a)]['findTargetSprite'](this['_event']);if(!_0x25ce63)return;this['x']=this['_event'][_0x712426(0x341)](),this['x']+=this[_0x712426(0x1ec)][_0x712426(0x26e)][_0x712426(0x2d2)],this['y']=this[_0x712426(0x1ec)][_0x712426(0x46f)]()-_0x25ce63['height']*_0x25ce63['scale']['y'],this['y']+=$gameSystem['windowPadding']()*-0.5,this['y']+=this[_0x712426(0x1ec)][_0x712426(0x26e)][_0x712426(0x3af)];},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x10c)]=function(){const _0x3eb495=_0x533487;if(this[_0x3eb495(0x3ad)]())this[_0x3eb495(0x3dc)]+=this[_0x3eb495(0x434)]();else SceneManager[_0x3eb495(0x3fa)][_0x3eb495(0x3e0)]>0x0?'NEVvJ'===_0x3eb495(0x5fe)?this['opacity']=0x0:_0xf2d474(_0x3eb495(0x4b3)+_0x3eb495(0x38c)):this[_0x3eb495(0x3dc)]-=this['opacitySpeed']();},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x19e)]=function(){const _0x19694a=_0x533487;if(this[_0x19694a(0x3ad)]()&&this[_0x19694a(0x1ec)]&&this[_0x19694a(0x1ec)]['_labelWindow'][_0x19694a(0x561)]){const _0x1971d1=this['_hue']+(this[_0x19694a(0x1ec)]['_labelWindow']['hueShift']||0x0);this[_0x19694a(0x684)](_0x1971d1);}},Sprite_EventLabel['prototype'][_0x533487(0x3ad)]=function(){const _0x5d70e4=_0x533487;if(!$gameSystem['eventLabelsVisible']())return![];if(this[_0x5d70e4(0x1ec)]?.['_erased'])return![];if(this[_0x5d70e4(0x1ec)]&&this[_0x5d70e4(0x1ec)][_0x5d70e4(0x5dd)]<0x0)return![];if(SceneManager[_0x5d70e4(0x3fa)][_0x5d70e4(0x3e0)]>0x0)return![];const _0x551e6f=$gamePlayer['x'],_0x438efd=$gamePlayer['y'],_0x4d7e95=this[_0x5d70e4(0x1ec)]['x'],_0x5d16be=this[_0x5d70e4(0x1ec)]['y'];if(this[_0x5d70e4(0x2fc)]===_0x551e6f&&this['_visiblePlayerY']===_0x438efd&&this[_0x5d70e4(0x670)]===_0x4d7e95&&this[_0x5d70e4(0x267)]===_0x5d16be)return this[_0x5d70e4(0x3d5)];this[_0x5d70e4(0x2fc)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x5d70e4(0x670)]=this[_0x5d70e4(0x1ec)]['x'],this[_0x5d70e4(0x267)]=this['_event']['y'];if($gameMap[_0x5d70e4(0x3bd)](_0x551e6f,_0x438efd,_0x4d7e95,_0x5d16be)>this['_event'][_0x5d70e4(0x5ec)]())return'QmyiP'!==_0x5d70e4(0x3e6)?(this['_cacheVisibility']=![],![]):!![];return this[_0x5d70e4(0x3d5)]=!![],!![];},Sprite_EventLabel[_0x533487(0x48b)][_0x533487(0x434)]=function(){const _0x135e72=_0x533487;return VisuMZ[_0x135e72(0x163)][_0x135e72(0x5eb)][_0x135e72(0x4b1)]['OpacitySpeed'];};function Sprite_VisuMz_MessagePopup(){const _0x58d8f5=_0x533487;this[_0x58d8f5(0x213)](...arguments);}Sprite_VisuMz_MessagePopup[_0x533487(0x48b)]=Object[_0x533487(0x168)](Sprite[_0x533487(0x48b)]),Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x216)]=Sprite_VisuMz_MessagePopup,Sprite_VisuMz_MessagePopup['prototype']['initialize']=function(_0x4f58d0){const _0x7b0f01=_0x533487;this[_0x7b0f01(0x4cb)]=_0x4f58d0,Sprite[_0x7b0f01(0x48b)][_0x7b0f01(0x213)][_0x7b0f01(0x1ce)](this),this[_0x7b0f01(0x643)](),this['createDummyWindow'](),this[_0x7b0f01(0x521)](),this['update']();},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x643)]=function(){const _0x541839=_0x533487;this['_duration']=this[_0x541839(0x4cb)][_0x541839(0x515)],this[_0x541839(0x2ea)]=this[_0x541839(0x4cb)][_0x541839(0x515)],this['z']=0x6,this[_0x541839(0x29f)]=this['_settings'][_0x541839(0x632)][_0x541839(0x35f)],this[_0x541839(0x29f)]>0x0&&this[_0x541839(0x29f)]>=Math[_0x541839(0x3b8)](this[_0x541839(0x1e5)]*0.48)&&(this[_0x541839(0x29f)]=Math[_0x541839(0x3b8)](this[_0x541839(0x1e5)]*0.48)),this['opacity']=this[_0x541839(0x29f)]>0x0?0x0:0xff,this[_0x541839(0x6b4)]=this[_0x541839(0x4cb)][_0x541839(0x632)][_0x541839(0x192)],this[_0x541839(0x6b4)]>0x0&&this['_fadeOutDuration']>=Math[_0x541839(0x3b8)](this['_duration']*0.48)&&(_0x541839(0x540)!=='XiKAs'?this[_0x541839(0x26e)]['visibleRange']=_0x1c2b16(_0x513d15['$1']):this['_fadeOutDuration']=Math['floor'](this['_duration']*0.48)),this['_fadeOutStart']=this[_0x541839(0x6b4)],this[_0x541839(0x584)]=this[_0x541839(0x4cb)][_0x541839(0x67c)]['x'],this[_0x541839(0x473)]=this['_settings'][_0x541839(0x67c)]['y'],this[_0x541839(0x624)]=this[_0x541839(0x4cb)][_0x541839(0x296)]['x'],this[_0x541839(0x27f)]=this['_settings']['endOffset']['y'],this[_0x541839(0x1da)]=this[_0x541839(0x584)],this[_0x541839(0x4a2)]=this[_0x541839(0x473)],this[_0x541839(0x50c)]=this['_settings']['startScale']['x'],this[_0x541839(0x241)]=this[_0x541839(0x4cb)][_0x541839(0x3f2)]['y'],this[_0x541839(0x104)]=this[_0x541839(0x4cb)]['endScale']['x'],this[_0x541839(0x69b)]=this[_0x541839(0x4cb)][_0x541839(0x159)]['y'],this[_0x541839(0x443)]=-this[_0x541839(0x4cb)][_0x541839(0x5cb)]['start'],this[_0x541839(0x2b8)]=-this[_0x541839(0x4cb)][_0x541839(0x5cb)]['end'],this[_0x541839(0x227)]=-this[_0x541839(0x4cb)][_0x541839(0x464)]['arc'],this[_0x541839(0x2e6)]=0x0;},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x2c1)]=function(){const _0x6d052c=_0x533487,_0x528827=this[_0x6d052c(0x4cb)],_0xf89810=new Rectangle(0x0,0x0,Graphics[_0x6d052c(0x43e)],Graphics['height']);this[_0x6d052c(0x3ce)]=new Window_Base(_0xf89810);const _0x40d30b=this['_dummyWindow'][_0x6d052c(0x1a4)](_0x528827['text']),_0x3a05db=_0x40d30b[_0x6d052c(0x43e)],_0x468332=_0x40d30b[_0x6d052c(0x42e)],_0x37c8c5=_0x3a05db+$gameSystem[_0x6d052c(0x308)]()*0x2,_0x3ae561=_0x468332+$gameSystem['windowPadding']()*0x2;this[_0x6d052c(0x3ce)][_0x6d052c(0x614)](0x0,0x0,_0x37c8c5,_0x3ae561),this[_0x6d052c(0x3ce)][_0x6d052c(0x535)](),this[_0x6d052c(0x3ce)]['drawTextEx'](_0x528827[_0x6d052c(0x43a)],0x0,0x0);},Sprite_VisuMz_MessagePopup['prototype']['createTextSprite']=function(){const _0x3729c0=_0x533487;this[_0x3729c0(0x4bb)]=new Sprite(),this[_0x3729c0(0x4bb)][_0x3729c0(0x2c9)]=this[_0x3729c0(0x3ce)][_0x3729c0(0x5b3)],this['_textSprite'][_0x3729c0(0x169)]['x']=0.5,this['_textSprite'][_0x3729c0(0x169)]['y']=0.5,this[_0x3729c0(0x4bb)]['x']=this['_startX'],this[_0x3729c0(0x4bb)]['y']=this[_0x3729c0(0x473)],this[_0x3729c0(0x4bb)][_0x3729c0(0x31b)]['x']=this['_startScaleX'],this[_0x3729c0(0x4bb)][_0x3729c0(0x31b)]['y']=this[_0x3729c0(0x241)],this['_textSprite'][_0x3729c0(0x5cb)]=this[_0x3729c0(0x443)],this['addChild'](this[_0x3729c0(0x4bb)]);},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x697)]=function(){const _0xb85687=_0x533487;Sprite[_0xb85687(0x48b)]['update'][_0xb85687(0x1ce)](this);if(!this[_0xb85687(0x43c)]())return;this[_0xb85687(0x441)](),this['updateTextPosition'](),this['updateTextScale'](),this[_0xb85687(0x646)](),this[_0xb85687(0x10c)](),this['updateDuration']();},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x43c)]=function(){const _0x5bf5e7=_0x533487;return!!this[_0x5bf5e7(0x4bb)];},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x441)]=function(){const _0x53ac88=_0x533487,_0x5e9cef=this[_0x53ac88(0x4cb)];{if(_0x53ac88(0x37d)!==_0x53ac88(0x37d))this[_0x53ac88(0x450)]=![],this[_0x53ac88(0x671)]=!![];else{const _0x4d5aeb=$gameMap['tileWidth'](),_0x4d2710=_0x5e9cef['tileCoordinates']['x'],_0x330dc0=$gameMap[_0x53ac88(0x504)](_0x4d2710);this['x']=Math[_0x53ac88(0x3b8)](_0x330dc0*_0x4d5aeb+_0x4d5aeb/0x2);}}{if('DXOjy'===_0x53ac88(0x5d1))_0xef4710[_0x53ac88(0x505)]();else{const _0x44245a=$gameMap[_0x53ac88(0x601)](),_0x3fa925=_0x5e9cef[_0x53ac88(0x24f)]['y'],_0x2979e6=$gameMap[_0x53ac88(0x47a)](_0x3fa925);this['y']=Math[_0x53ac88(0x3b8)](_0x2979e6*_0x44245a+_0x44245a);}}},Sprite_VisuMz_MessagePopup['prototype'][_0x533487(0x31c)]=function(){const _0x56bb1e=_0x533487;if(this['_duration']<=0x0)return;const _0xb374e6=this[_0x56bb1e(0x1e5)],_0x2a6e9f=this[_0x56bb1e(0x2ea)];{_0x56bb1e(0x130)===_0x56bb1e(0x37e)?_0x1006eb[_0x56bb1e(0x608)](_0x386b96[_0x34fb2d]):(this['_offsetX']=(this[_0x56bb1e(0x1da)]*(_0xb374e6-0x1)+this[_0x56bb1e(0x624)])/_0xb374e6,this[_0x56bb1e(0x4a2)]=(this[_0x56bb1e(0x4a2)]*(_0xb374e6-0x1)+this[_0x56bb1e(0x27f)])/_0xb374e6);}{const _0x3e180f=_0x2a6e9f-_0xb374e6,_0x3d9952=_0x2a6e9f/0x2,_0x2826c8=this['_arcPeak'],_0x501b6c=-_0x2826c8/Math['pow'](_0x3d9952,0x2);this[_0x56bb1e(0x2e6)]=_0x501b6c*Math['pow'](_0x3e180f-_0x3d9952,0x2)+_0x2826c8;}this[_0x56bb1e(0x4bb)]['x']=this[_0x56bb1e(0x1da)],this[_0x56bb1e(0x4bb)]['y']=this[_0x56bb1e(0x4a2)]+this[_0x56bb1e(0x2e6)];},Sprite_VisuMz_MessagePopup['prototype'][_0x533487(0x374)]=function(){const _0x45ffa2=_0x533487;if(this[_0x45ffa2(0x1e5)]<=0x0)return;const _0x399b63=this[_0x45ffa2(0x1e5)];this[_0x45ffa2(0x4bb)][_0x45ffa2(0x31b)]['x']=(this[_0x45ffa2(0x4bb)][_0x45ffa2(0x31b)]['x']*(_0x399b63-0x1)+this[_0x45ffa2(0x104)])/_0x399b63,this[_0x45ffa2(0x4bb)][_0x45ffa2(0x31b)]['y']=(this[_0x45ffa2(0x4bb)][_0x45ffa2(0x31b)]['y']*(_0x399b63-0x1)+this[_0x45ffa2(0x69b)])/_0x399b63;},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)]['updateTextAngle']=function(){const _0xab1e9f=_0x533487;if(this['_duration']<=0x0)return;const _0x16b844=this[_0xab1e9f(0x1e5)];this['_textSprite'][_0xab1e9f(0x5cb)]=(this[_0xab1e9f(0x4bb)]['angle']*(_0x16b844-0x1)+this['_targetAngle'])/_0x16b844;},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)]['updateOpacity']=function(){const _0x273b7f=_0x533487;this[_0x273b7f(0x313)](),this[_0x273b7f(0x54d)]();},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)]['updateFadeIn']=function(){const _0x230680=_0x533487;if(this[_0x230680(0x29f)]<=0x0)return;const _0x4d1ae1=this[_0x230680(0x29f)];this[_0x230680(0x3dc)]=(this[_0x230680(0x3dc)]*(_0x4d1ae1-0x1)+0xff)/_0x4d1ae1,this[_0x230680(0x29f)]--;if(this[_0x230680(0x29f)]<=0x0){if(_0x230680(0x508)!==_0x230680(0x508)){if(this['_fadeOutDuration']<=0x0)return;if(this[_0x230680(0x1e5)]>this[_0x230680(0x20c)])return;const _0x1a6a6b=this[_0x230680(0x6b4)];this[_0x230680(0x3dc)]=(this[_0x230680(0x3dc)]*(_0x1a6a6b-0x1)+0x0)/_0x1a6a6b,this[_0x230680(0x6b4)]--,this['_fadeOutDuration']<=0x0&&(this[_0x230680(0x3dc)]=0x0);}else this[_0x230680(0x3dc)]=0xff;}},Sprite_VisuMz_MessagePopup[_0x533487(0x48b)][_0x533487(0x54d)]=function(){const _0x36af88=_0x533487;if(this[_0x36af88(0x6b4)]<=0x0)return;if(this[_0x36af88(0x1e5)]>this['_fadeOutStart'])return;const _0x4e90d8=this[_0x36af88(0x6b4)];this[_0x36af88(0x3dc)]=(this[_0x36af88(0x3dc)]*(_0x4e90d8-0x1)+0x0)/_0x4e90d8,this[_0x36af88(0x6b4)]--,this['_fadeOutDuration']<=0x0&&(this[_0x36af88(0x3dc)]=0x0);},Sprite_VisuMz_MessagePopup['prototype'][_0x533487(0x5aa)]=function(){const _0x2812ef=_0x533487;if(this[_0x2812ef(0x1e5)]<=0x0)return;this['_duration']--;if(this[_0x2812ef(0x1e5)]<=0x0){if(this['parent'])this[_0x2812ef(0x593)][_0x2812ef(0x2da)](this);if(this['_textSprite']['bitmap']){if(_0x2812ef(0x15c)==='sHnKc')return _0x594aea[_0x2812ef(0x163)]['Game_CharacterBase_realMoveSpeed']['call'](this)-this[_0x2812ef(0x19b)];else this[_0x2812ef(0x4bb)]['bitmap'][_0x2812ef(0x6d0)]();}}},VisuMZ[_0x533487(0x163)][_0x533487(0x531)]=Spriteset_Map[_0x533487(0x48b)][_0x533487(0x2cd)],Spriteset_Map[_0x533487(0x48b)][_0x533487(0x2cd)]=function(){const _0x5235e5=_0x533487;VisuMZ[_0x5235e5(0x163)]['Spriteset_Map_createLowerLayer'][_0x5235e5(0x1ce)](this),this['createLabelWindows']();},VisuMZ['EventsMoveCore']['Spriteset_Map_createShadow']=Spriteset_Map['prototype'][_0x533487(0x289)],Spriteset_Map['prototype'][_0x533487(0x289)]=function(){const _0x40088e=_0x533487;VisuMZ[_0x40088e(0x163)][_0x40088e(0x244)][_0x40088e(0x1ce)](this),this[_0x40088e(0x2dc)]();},Spriteset_Map[_0x533487(0x48b)][_0x533487(0x2dc)]=function(){const _0x5cadde=_0x533487;if(!VisuMZ[_0x5cadde(0x163)]['Settings'][_0x5cadde(0x3ef)][_0x5cadde(0x3b4)])return;for(const _0x551004 of this[_0x5cadde(0x301)]){if(_0x5cadde(0x209)!=='qfzVQ')this[_0x5cadde(0x4db)](_0x551004);else{const _0x961493=_0x9eb84d[_0x5cadde(0x426)]();delete this[_0x5cadde(0x254)][_0x961493];}}},Spriteset_Map[_0x533487(0x48b)][_0x533487(0x4db)]=function(_0xcbc3ec){const _0x359345=_0x533487;_0xcbc3ec[_0x359345(0x222)]=new Sprite(),_0xcbc3ec[_0x359345(0x222)][_0x359345(0x334)]=_0xcbc3ec[_0x359345(0x444)][_0x359345(0x62f)](),_0xcbc3ec[_0x359345(0x222)]['bitmap']=ImageManager[_0x359345(0x59d)](_0xcbc3ec[_0x359345(0x222)][_0x359345(0x334)]),_0xcbc3ec[_0x359345(0x222)]['anchor']['x']=0.5,_0xcbc3ec[_0x359345(0x222)]['anchor']['y']=0x1,_0xcbc3ec[_0x359345(0x222)]['z']=0x0,this[_0x359345(0x433)]['addChild'](_0xcbc3ec[_0x359345(0x222)]);},Spriteset_Map[_0x533487(0x48b)][_0x533487(0x4b8)]=function(){const _0x525844=_0x533487;if(!VisuMZ[_0x525844(0x163)]['Settings']['Movement']['ShowShadows'])return;for(const _0x2b272f of this[_0x525844(0x301)]){_0x525844(0x62e)===_0x525844(0x62e)?this['_tilemap'][_0x525844(0x2da)](_0x2b272f[_0x525844(0x222)]):this[_0x525844(0x1d3)](_0xc74888,_0x3edae6);}},Spriteset_Map[_0x533487(0x48b)][_0x533487(0x604)]=function(){const _0x2cc3df=_0x533487;this['_labelWindows']=[];for(const _0x1d76c2 of $gameMap[_0x2cc3df(0x4d5)]()){if('pYSkY'==='eQcCD')return 0x6;else this[_0x2cc3df(0x1fd)](_0x1d76c2);}},Spriteset_Map[_0x533487(0x17f)]=VisuMZ['EventsMoveCore']['Settings'][_0x533487(0x4b1)][_0x533487(0x2f5)]??!![],Spriteset_Map['prototype'][_0x533487(0x1fd)]=function(_0x5c8b9b){const _0x145638=_0x533487;if(!this['isTargetEventValidForLabelWindow'](_0x5c8b9b))return;if(Utils[_0x145638(0x6c9)]()){if(_0x145638(0x5ca)==='tRIEb')this[_0x145638(0x189)][_0x145638(0x677)]=_0x92cde7(_0x5b5698['$1']);else{if(!Spriteset_Map[_0x145638(0x17f)])return;}}let _0x1093bb;const _0x1702b9=VisuMZ[_0x145638(0x163)][_0x145638(0x5eb)][_0x145638(0x4b1)][_0x145638(0x3f9)]??!![];_0x1093bb=_0x1702b9?new Sprite_EventLabel(_0x5c8b9b):new Window_EventLabel(_0x5c8b9b),_0x1093bb['z']=0x8,_0x1093bb[_0x145638(0x59e)]=Sprite[_0x145638(0x1b9)]++,this[_0x145638(0x433)][_0x145638(0x5b8)](_0x1093bb),this['_labelWindows']['push'](_0x1093bb);},Spriteset_Map['prototype'][_0x533487(0x2bf)]=function(_0x1c4789){const _0x169b99=_0x533487,_0x1ef581=_0x1c4789[_0x169b99(0x431)]();if(_0x1ef581[_0x169b99(0x249)][_0x169b99(0x579)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x1ef581[_0x169b99(0x249)][_0x169b99(0x579)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x2ddaa8 of _0x1ef581[_0x169b99(0x177)]){let _0x4e347c='';for(const _0xa4e770 of _0x2ddaa8['list']){_0x169b99(0x47c)!==_0x169b99(0x3de)?[0x6c,0x198][_0x169b99(0x1c6)](_0xa4e770['code'])&&(_0x4e347c+=_0xa4e770['parameters'][0x0]):(this['_paused']=![],this[_0x169b99(0x67d)]=-0x1,this['_expireCommonEvent']=0x0);}if(_0x4e347c[_0x169b99(0x579)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x4e347c[_0x169b99(0x579)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map['prototype'][_0x533487(0x635)]=function(_0x28be1d){const _0x3dd7a8=_0x533487;this['_characterSprites']=this[_0x3dd7a8(0x301)]||[];const _0x3ca40c=new Sprite_Character(_0x28be1d);this[_0x3dd7a8(0x301)][_0x3dd7a8(0x618)](_0x3ca40c),this['_tilemap'][_0x3dd7a8(0x5b8)](_0x3ca40c),this[_0x3dd7a8(0x4db)](_0x3ca40c),this[_0x3dd7a8(0x1fd)](_0x28be1d),_0x3ca40c['update']();},Spriteset_Map['prototype']['refreshEventLabels']=function(){const _0x438845=_0x533487;if(!this[_0x438845(0x5ac)])return;for(const _0x585993 of this[_0x438845(0x5ac)]){if(_0x585993){if(_0x438845(0x518)===_0x438845(0x518))_0x585993[_0x438845(0x2fc)]=undefined,_0x585993[_0x438845(0x191)]();else{const _0x3ff308=_0x590ca5[_0x438845(0x3fa)]['_spriteset'];if(_0x3ff308)_0x3ff308[_0x438845(0x203)]();}}}},Spriteset_Map[_0x533487(0x48b)][_0x533487(0x659)]=function(_0x5f5a38,_0x5eefce){const _0xd7e2b9=_0x533487;if(!_0x5f5a38)return;_0x5eefce[_0xd7e2b9(0x24f)]={'x':_0x5f5a38['x'],'y':_0x5f5a38['y']},this['createEventsMoveCoreTileMessagePopup'](_0x5eefce);},Spriteset_Map[_0x533487(0x48b)][_0x533487(0x533)]=function(_0x25c7db){const _0x158b36=_0x533487;if(!this[_0x158b36(0x433)])return;const _0x2ba661=new Sprite_VisuMz_MessagePopup(_0x25c7db);this['_tilemap']['addChild'](_0x2ba661);},VisuMZ[_0x533487(0x163)]['Game_Message_setNumberInput']=Game_Message[_0x533487(0x48b)][_0x533487(0x629)],Game_Message[_0x533487(0x48b)][_0x533487(0x629)]=function(_0x52a1c8,_0x38da11){const _0xfb17cb=_0x533487;this[_0xfb17cb(0x240)]=$gameTemp['getSelfTarget'](),VisuMZ[_0xfb17cb(0x163)][_0xfb17cb(0x50b)][_0xfb17cb(0x1ce)](this,_0x52a1c8,_0x38da11);},VisuMZ[_0x533487(0x163)][_0x533487(0x383)]=Window_NumberInput[_0x533487(0x48b)][_0x533487(0x337)],Window_NumberInput[_0x533487(0x48b)][_0x533487(0x337)]=function(){const _0x4a0aac=_0x533487;$gameTemp['registerSelfTarget']($gameMessage[_0x4a0aac(0x240)]),VisuMZ[_0x4a0aac(0x163)][_0x4a0aac(0x383)][_0x4a0aac(0x1ce)](this),$gameTemp[_0x4a0aac(0x4dc)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x502)]=Window_NumberInput[_0x533487(0x48b)][_0x533487(0x4c5)],Window_NumberInput[_0x533487(0x48b)][_0x533487(0x4c5)]=function(){const _0x5cd5ba=_0x533487;$gameTemp[_0x5cd5ba(0x2df)]($gameMessage[_0x5cd5ba(0x240)]),VisuMZ[_0x5cd5ba(0x163)][_0x5cd5ba(0x502)][_0x5cd5ba(0x1ce)](this),$gameTemp[_0x5cd5ba(0x4dc)](),$gameMessage['_selfTargetNumberInput']=undefined;},VisuMZ['EventsMoveCore'][_0x533487(0x477)]=Game_Message['prototype'][_0x533487(0x613)],Game_Message[_0x533487(0x48b)][_0x533487(0x613)]=function(_0x52201d,_0x4e6a40){const _0x92e747=_0x533487;this['_selfTargetItemChoice']=$gameTemp['getSelfTarget'](),VisuMZ[_0x92e747(0x163)][_0x92e747(0x477)][_0x92e747(0x1ce)](this,_0x52201d,_0x4e6a40);},VisuMZ[_0x533487(0x163)][_0x533487(0x176)]=Window_EventItem['prototype'][_0x533487(0x53e)],Window_EventItem[_0x533487(0x48b)][_0x533487(0x53e)]=function(){const _0x519d9c=_0x533487;$gameTemp[_0x519d9c(0x2df)]($gameMessage[_0x519d9c(0x29c)]),VisuMZ['EventsMoveCore'][_0x519d9c(0x176)]['call'](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x519d9c(0x29c)]=undefined;},VisuMZ[_0x533487(0x163)][_0x533487(0x38b)]=Window_EventItem[_0x533487(0x48b)][_0x533487(0x530)],Window_EventItem[_0x533487(0x48b)][_0x533487(0x530)]=function(){const _0x27cf8c=_0x533487;$gameTemp['registerSelfTarget']($gameMessage[_0x27cf8c(0x29c)]),VisuMZ[_0x27cf8c(0x163)][_0x27cf8c(0x38b)][_0x27cf8c(0x1ce)](this),$gameTemp[_0x27cf8c(0x4dc)](),$gameMessage[_0x27cf8c(0x29c)]=undefined;},VisuMZ[_0x533487(0x163)][_0x533487(0x2ad)]=Window_Message[_0x533487(0x48b)][_0x533487(0x548)],Window_Message[_0x533487(0x48b)]['startMessage']=function(){const _0xf95eac=_0x533487;$gameMessage[_0xf95eac(0x2e5)](),VisuMZ[_0xf95eac(0x163)][_0xf95eac(0x2ad)][_0xf95eac(0x1ce)](this),$gameTemp[_0xf95eac(0x4dc)]();},VisuMZ[_0x533487(0x163)][_0x533487(0x694)]=Window_ScrollText[_0x533487(0x48b)][_0x533487(0x548)],Window_ScrollText[_0x533487(0x48b)][_0x533487(0x548)]=function(){const _0x5b13c4=_0x533487;$gameMessage[_0x5b13c4(0x2e5)](),VisuMZ['EventsMoveCore']['Window_ScrollText_startMessage'][_0x5b13c4(0x1ce)](this),$gameTemp[_0x5b13c4(0x4dc)]();};function Window_EventLabel(){const _0x40b910=_0x533487;this[_0x40b910(0x213)](...arguments);}Window_EventLabel[_0x533487(0x48b)]=Object[_0x533487(0x168)](Window_Base[_0x533487(0x48b)]),Window_EventLabel['prototype'][_0x533487(0x216)]=Window_EventLabel,Window_EventLabel[_0x533487(0x48b)][_0x533487(0x213)]=function(_0x1f0742){const _0x20d8dc=_0x533487;this['_event']=_0x1f0742;const _0x3d390b=new Rectangle(0x0,0x0,Graphics['boxWidth']/0x4,this[_0x20d8dc(0x51b)](0x1));this[_0x20d8dc(0x643)](),Window_Base[_0x20d8dc(0x48b)][_0x20d8dc(0x213)][_0x20d8dc(0x1ce)](this,_0x3d390b),this['contentsOpacity']=0x0,this['setBackgroundType'](0x2),this[_0x20d8dc(0x26f)]='';},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x643)]=function(){const _0x150e0c=_0x533487;this['_eventErased']=![],this['_screenZoomScale']=$gameScreen[_0x150e0c(0x376)](),this['_eventScreenX']=this[_0x150e0c(0x1ec)][_0x150e0c(0x341)](),this[_0x150e0c(0x42d)]=this[_0x150e0c(0x1ec)][_0x150e0c(0x46f)](),this[_0x150e0c(0x551)]=this[_0x150e0c(0x1ec)]['_labelWindow'][_0x150e0c(0x2d2)],this[_0x150e0c(0x674)]=this[_0x150e0c(0x1ec)][_0x150e0c(0x26e)][_0x150e0c(0x3af)],this[_0x150e0c(0x39e)]=this[_0x150e0c(0x1ec)][_0x150e0c(0x5dd)],this[_0x150e0c(0x3d5)]=this['isLabelVisible'](),this['_cacheSystemVisible']=$gameSystem[_0x150e0c(0x401)](),this['_visiblePlayerX']=$gamePlayer['x'],this[_0x150e0c(0x40c)]=$gamePlayer['y'],this[_0x150e0c(0x670)]=this[_0x150e0c(0x1ec)]['x'],this[_0x150e0c(0x267)]=this[_0x150e0c(0x1ec)]['y'];},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x697)]=function(){const _0x4b6701=_0x533487;Window_Base['prototype']['update'][_0x4b6701(0x1ce)](this);if(!this[_0x4b6701(0x693)]())return;this[_0x4b6701(0x4e2)](),this['updateScale'](),this[_0x4b6701(0x351)](),this[_0x4b6701(0x10c)]();},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x693)]=function(){const _0x504902=_0x533487;if(!this[_0x504902(0x1ec)])return![];if(!this['_event'][_0x504902(0x26e)])return![];if(this[_0x504902(0x39e)]!==this['_event'][_0x504902(0x5dd)])return!![];if(this[_0x504902(0x1ec)][_0x504902(0x5f2)]&&!this['_eventErased'])return!![];if(this['_event']['_labelWindow'][_0x504902(0x43a)]==='')return![];if(this['_screenZoomScale']!==$gameScreen['zoomScale']())return!![];if(this[_0x504902(0x1f0)]!==this[_0x504902(0x1ec)]['screenX']())return!![];if(this[_0x504902(0x42d)]!==this[_0x504902(0x1ec)][_0x504902(0x46f)]())return!![];if(this[_0x504902(0x551)]!==this[_0x504902(0x1ec)][_0x504902(0x26e)][_0x504902(0x2d2)])return!![];if(this[_0x504902(0x674)]!==this[_0x504902(0x1ec)][_0x504902(0x26e)][_0x504902(0x3af)])return!![];if(this[_0x504902(0x2fc)]!==$gamePlayer['x'])return!![];if(this[_0x504902(0x40c)]!==$gamePlayer['y'])return!![];if(this[_0x504902(0x670)]!==this['_event']['x'])return!![];if(this[_0x504902(0x267)]!==this[_0x504902(0x1ec)]['y'])return!![];if(this[_0x504902(0x537)]!==$gameSystem['eventLabelsVisible']())return!![];if(this[_0x504902(0x3d5)]&&this[_0x504902(0x6bd)]<0xff)return!![];if(!this['_cacheVisibility']&&this[_0x504902(0x6bd)]>0x0)return!![];if(SceneManager[_0x504902(0x3fa)][_0x504902(0x3e0)]>0x0)return!![];return![];},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x4e2)]=function(){const _0x2d49a=_0x533487;this[_0x2d49a(0x1ec)][_0x2d49a(0x1f1)]()!==this[_0x2d49a(0x26f)]&&(this[_0x2d49a(0x26f)]=this[_0x2d49a(0x1ec)][_0x2d49a(0x1f1)](),this['refresh']());},Window_EventLabel['prototype'][_0x533487(0x35c)]=function(){const _0x228145=_0x533487;this['scale']['x']=0x1/$gameScreen['zoomScale'](),this[_0x228145(0x31b)]['y']=0x1/$gameScreen[_0x228145(0x376)](),this[_0x228145(0x31d)]=$gameScreen[_0x228145(0x376)]();},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x351)]=function(){const _0x2b9c7c=_0x533487;if(!SceneManager[_0x2b9c7c(0x3fa)])return;if(!SceneManager['_scene'][_0x2b9c7c(0x25a)])return;const _0x59b9a5=SceneManager['_scene'][_0x2b9c7c(0x25a)][_0x2b9c7c(0x18d)](this[_0x2b9c7c(0x1ec)]);if(!_0x59b9a5)return;this['x']=Math[_0x2b9c7c(0x22e)](this[_0x2b9c7c(0x1ec)]['screenX']()-Math[_0x2b9c7c(0x3b8)](this[_0x2b9c7c(0x43e)]*this[_0x2b9c7c(0x31b)]['x']/0x2)),this['x']+=this['_event'][_0x2b9c7c(0x26e)]['offsetX'],this['y']=this[_0x2b9c7c(0x1ec)][_0x2b9c7c(0x46f)]()-_0x59b9a5[_0x2b9c7c(0x42e)],this['y']+=Math[_0x2b9c7c(0x22e)]($gameSystem[_0x2b9c7c(0x308)]()*0.5),this['y']-=Math[_0x2b9c7c(0x22e)](this['height']*this['scale']['y']),this['y']+=this[_0x2b9c7c(0x1ec)][_0x2b9c7c(0x26e)][_0x2b9c7c(0x3af)],this[_0x2b9c7c(0x65b)]=this[_0x2b9c7c(0x1ec)]['_erased'],this[_0x2b9c7c(0x1f0)]=this[_0x2b9c7c(0x1ec)][_0x2b9c7c(0x341)](),this['_eventScreenY']=this['_event'][_0x2b9c7c(0x46f)](),this[_0x2b9c7c(0x551)]=this[_0x2b9c7c(0x1ec)]['_labelWindow'][_0x2b9c7c(0x2d2)],this[_0x2b9c7c(0x674)]=this['_event'][_0x2b9c7c(0x26e)][_0x2b9c7c(0x3af)],this['_eventPageIndex']=this[_0x2b9c7c(0x1ec)][_0x2b9c7c(0x5dd)],this[_0x2b9c7c(0x65b)]&&(this['contentsOpacity']=0x0);},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x10c)]=function(){const _0x3947a1=_0x533487;if(this[_0x3947a1(0x3ad)]())this[_0x3947a1(0x6bd)]+=this[_0x3947a1(0x434)]();else{if(SceneManager[_0x3947a1(0x3fa)][_0x3947a1(0x3e0)]>0x0){if(_0x3947a1(0x592)!==_0x3947a1(0x592)){if(this[_0x3947a1(0x448)]===_0x27de90)this[_0x3947a1(0x265)]();if(this[_0x3947a1(0x448)][_0x3947a1(0x31e)]===_0x2fc55)this[_0x3947a1(0x265)]();this[_0x3947a1(0x448)][_0x3947a1(0x31e)]=_0x4f2bcd;}else this[_0x3947a1(0x6bd)]=0x0;}else this['contentsOpacity']-=this[_0x3947a1(0x434)]();}},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x3ad)]=function(){const _0x52f056=_0x533487;if(!$gameSystem['eventLabelsVisible']())return![];if(this[_0x52f056(0x1ec)]?.[_0x52f056(0x5f2)])return![];if(SceneManager['_scene']['_encounterEffectDuration']>0x0)return![];const _0x15d8cf=$gamePlayer['x'],_0x2177b5=$gamePlayer['y'],_0x3949f2=this[_0x52f056(0x1ec)]['x'],_0x33339f=this[_0x52f056(0x1ec)]['y'];if(this[_0x52f056(0x2fc)]===_0x15d8cf&&this[_0x52f056(0x40c)]===_0x2177b5&&this['_visibleEventX']===_0x3949f2&&this['_visibleEventY']===_0x33339f)return this[_0x52f056(0x3d5)];this[_0x52f056(0x2fc)]=$gamePlayer['x'],this[_0x52f056(0x40c)]=$gamePlayer['y'],this[_0x52f056(0x670)]=this[_0x52f056(0x1ec)]['x'],this[_0x52f056(0x267)]=this['_event']['y'];if($gameMap['absDistance'](_0x15d8cf,_0x2177b5,_0x3949f2,_0x33339f)>this[_0x52f056(0x1ec)][_0x52f056(0x5ec)]()){if(_0x52f056(0x4a0)!==_0x52f056(0x6ad))return this[_0x52f056(0x3d5)]=![],![];else{if(!this[_0x52f056(0x5ac)])return;for(const _0x548ce7 of this[_0x52f056(0x5ac)]){_0x548ce7&&(_0x548ce7[_0x52f056(0x2fc)]=_0x30e2ee,_0x548ce7[_0x52f056(0x191)]());}}}return this['_cacheVisibility']=!![],!![];},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x434)]=function(){const _0x2ddc32=_0x533487;return VisuMZ[_0x2ddc32(0x163)][_0x2ddc32(0x5eb)][_0x2ddc32(0x4b1)]['OpacitySpeed'];},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x5a0)]=function(){const _0x1c983c=_0x533487,_0x1d0162=this['textSizeEx'](this[_0x1c983c(0x26f)]);this[_0x1c983c(0x43e)]=_0x1d0162[_0x1c983c(0x43e)]+($gameSystem[_0x1c983c(0x308)]()+this['itemPadding']())*0x2,this[_0x1c983c(0x42e)]=Math[_0x1c983c(0x381)](this[_0x1c983c(0x152)](),_0x1d0162[_0x1c983c(0x42e)])+$gameSystem[_0x1c983c(0x308)]()*0x2,this[_0x1c983c(0x535)]();},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x152)]=function(){const _0x1d32c4=_0x533487;return VisuMZ[_0x1d32c4(0x163)][_0x1d32c4(0x5eb)][_0x1d32c4(0x4b1)][_0x1d32c4(0x493)];},Window_EventLabel[_0x533487(0x48b)]['resetFontSettings']=function(){const _0x1f0a38=_0x533487;Window_Base['prototype'][_0x1f0a38(0x172)][_0x1f0a38(0x1ce)](this),this['contents'][_0x1f0a38(0x6cd)]=this['defaultFontSize']();},Window_EventLabel['prototype'][_0x533487(0x5b6)]=function(){const _0x4b06e7=_0x533487;return VisuMZ[_0x4b06e7(0x163)][_0x4b06e7(0x5eb)][_0x4b06e7(0x4b1)]['FontSize'];},Window_EventLabel[_0x533487(0x48b)][_0x533487(0x191)]=function(){const _0x1a1208=_0x533487;this[_0x1a1208(0x5a0)](),this[_0x1a1208(0x5b3)][_0x1a1208(0x3c1)]();const _0x171fdd=this[_0x1a1208(0x26f)][_0x1a1208(0x12b)](/[\r\n]+/);let _0x55d564=0x0;for(const _0x405b02 of _0x171fdd){const _0x18d570=this[_0x1a1208(0x1a4)](_0x405b02),_0x576a63=Math[_0x1a1208(0x3b8)]((this[_0x1a1208(0x343)]-_0x18d570['width'])/0x2);this[_0x1a1208(0x36e)](_0x405b02,_0x576a63,_0x55d564),_0x55d564+=_0x18d570[_0x1a1208(0x42e)];}},Window_EventLabel[_0x533487(0x48b)]['processDrawIcon']=function(_0x474c50,_0x3ce51a){const _0xab2be3=_0x533487;if(_0x3ce51a[_0xab2be3(0x117)]){if(_0xab2be3(0x3b0)===_0xab2be3(0x107)){if(!_0x5b55ee[_0xab2be3(0x3a8)][_0x3dfdee]){_0x20d438[_0xab2be3(0x2c0)][_0x4e52b7][_0xab2be3(0x579)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x15fbd2=_0xab2be3(0x522)[_0xab2be3(0x1b5)](_0x2832b1(_0x54a796['$1']));_0x4bb7b9[_0xab2be3(0x3a8)][_0x7bd2ed]=new _0x27c06d(_0xab2be3(0x3c6),_0x15fbd2);}const _0x2d17e6=_0x5e4f60[_0xab2be3(0x5ba)]()||this;return _0x328641[_0xab2be3(0x3a8)][_0x133010][_0xab2be3(0x1ce)](_0x2d17e6,_0x58d543);}else this[_0xab2be3(0x34f)](_0x474c50,_0x3ce51a['x']+0x2,_0x3ce51a['y']);}_0x3ce51a['x']+=Math['min'](this[_0xab2be3(0x58f)](),ImageManager[_0xab2be3(0x606)])+0x4;},Window_EventLabel[_0x533487(0x48b)]['drawIcon']=function(_0x3e8fb5,_0x2da85c,_0x5d1021){const _0x240e62=_0x533487,_0x3553e3=ImageManager[_0x240e62(0x59d)]('IconSet'),_0x2e90c5=ImageManager['iconWidth'],_0x93f7ab=ImageManager[_0x240e62(0x45b)],_0x9d73b6=_0x3e8fb5%0x10*_0x2e90c5,_0x239c62=Math[_0x240e62(0x3b8)](_0x3e8fb5/0x10)*_0x93f7ab,_0x247cbb=Math[_0x240e62(0x2e4)](this['iconSize']()),_0x5eb899=Math[_0x240e62(0x2e4)](this[_0x240e62(0x58f)]());this[_0x240e62(0x5b3)][_0x240e62(0x420)](_0x3553e3,_0x9d73b6,_0x239c62,_0x2e90c5,_0x93f7ab,_0x2da85c,_0x5d1021,_0x247cbb,_0x5eb899);},Window_EventLabel['prototype'][_0x533487(0x58f)]=function(){const _0x1185b6=_0x533487;return VisuMZ[_0x1185b6(0x163)]['Settings'][_0x1185b6(0x4b1)]['IconSize'];};