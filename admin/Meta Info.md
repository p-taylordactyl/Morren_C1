---
dg-publish: false
type: meta
modified: 2026-03-21
created: 2026-02-27
tags:
---
## Plugins

### In Use

##### Templater 
Better templating - allows for variables and setting different contexts for template creation.

##### Update Modified Date
QoL - auto-updates created and modified dates in frontmatter properties.

##### Style Settings
Settings for ITS theme

##### Manual Sorting
QoL - drag n' drop file/folder sorting in sidebar

##### Paste Image Rename
QoL - Opens pop-up to rename pasted images

##### Image Converter
Convert to png to webp on image paste. 

##### QuickAdd - enabled
Primarily using to create new notes in specific folders and link in current. Using to quickly create notes for new characters, locations, groups during session.

##### Dataview
Thought bases was going to replace this but nope. Especially with JavaScript this is both more powerful and flexible. Lets you use frontmatter to query your vault like a database

##### Digital Garden
Lets you publish your vault to either a Vercel website or their own hosting solution for free. Sticking with Vercel for now. 
hoodswatch.vercel.app

##### Git
Version tracking/backs up vault to GitHub. 

##### Linter
Will "lint" vault. Basically can set up rules to run at will or automatically at predefined times to make formatting or property changes on some/all notes. Nice for making bulk changes to a property.


### Evaluating

##### TTRPG Tools - Maps
Seems so cool, just not sure I have the use case with how frequently the maps change. Unless I can get Oog to give me like, unmarked crawl maps and I add the pins myself instead of taking new screenshots every time we find new places during a crawl.

##### TTRPG Tools - Time
Also cool but have not taken the time to play with it yet. Given that date deadlines are more relevent in this particular campaign especially, probably worth trying to set up at some point.

### Ongoing Issues


### Abandoned

##### Tag Wrangler
Don't use tags enough

##### Quartz for Obsidian
Similar to digital garden in that it publishes vault as a static site - more customizable but also prone to many more issues. I got tired to trying to work out the kinks - digital garden is much easier

##### Meta Bind
Very cool plugin that I ultimately just don't use much. Let's you update frontmatter fields from within note content and vice versa among other neat functionality. Should bring back if ever doing a character sheet within the vault.

##### Calendarium
Used to add Oog's world calendar for date tracking. CAN'T GET FRONTMATTER EVENTS TO WORK, NOTHING WORKS, FUCK IT.

## Organization Thoughts

- Offload as much of the manual tedium of new entries as possible/reduce friction. 
- Figure out some templater automation for adding new characters and locations in-session


Hierarchy for Locations

Morren - MegaCity - Top Level - 99% of Dors Archipelago
	Iser - island within the megacity
		Old Valence - subcity (actual campaign setting)
			Districts (ie Crownlight Heights)
				Locations (ie  Hood Station)


### [[In-Session New Note Workflow]]



Image Naming Conventions

1. Location > `location_[toplevelplacename]_[childplacename]`
	1. Add as many child location names as desired just make sure they have the correct hierarchy above in order or they won't show up in location notes bases/dataviews
2. NPC > `npc_[npcname]`
3. General maps > `session[#]_map[#]`
	1. ex. session12_map3