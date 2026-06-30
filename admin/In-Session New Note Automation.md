---
type: meta
modified: 2026-03-21
created: 2026-03-05
tags:
---
### Requirements

1. Quick/easy to use during session - does not significantly hold up the actual session notes
2. As much as possible, automate
	- Note creation for new characters/locations
	- Population of new notes
		- character art/location map
		- frontmatter metadata
		- I want to say description as well but I suspect this may need to happen manually after session
3. If possible, way to have screenshots pasted in session notes automatically paste in the relevant doc. More useful for locations than characters (likely only one screenshot). 


I know I'm really going to have to accept at least some labor outside of session here, I don't think there's a frictionless solution that would truly let me capture everything relevant into new notes without interfering with my engagement and/or session notetaking. Something that opens link in new window as soon as I link/create it might be good. The more info I can capture quickly/easily at the outset is also good. I might need to learn some coding to *really* do exactly what I want.



### Ideal Workflow

I want to be able to add new character or location notes during session. Either I have like some sidebar buttons for "New Character" or "New Location" that would prompt popups with:

- Prompt popup with
	- Character/Location Name (to be set as file name and title)
	- Metadata entry (with some pulled from session note if possible)
	- Paste character art? this part probably harder

And then use the entered data to create a note in the appropriate folder with the correct template? That would be baller. Not sure if that would use Templater or need to be scripted on its own tbh. I think QuickAdd is probably going to be the best chance at something like this outside of basically creating my own plugin. I really need to watch that tutorial video and figure out what it's really about.





I guess for both character and location I need to decide if I want to have a single automation for both or one for each. 

Not sure this is possible honestly, I think that for anything that complex I'd end up needing to script my own plugin almost. QuickAdd may fit the bill though - we'll see. 


### NPC Workflow
1. We meet a new NPC - Oog provides art. 
2. Screencap art -> paste in session note
3. Paste Auto-rename to `npc_name`
4. Create new note using QuickAdd
	1. for now, hotkey but look into automated trigger
5. After session, fill in relevant details.





Outcome I want when we meet a new NPC - no particular order

- New NPC note created with NPC template applied
- paste screencap of character art in session notes
- screencap gets embedded in the newly created NPC note

Okay I think I've got it. Let's new note and image paste happen in any order even. 

- Add embed link to the top of the NPC template. 
`![[npc_name]]

- Make sure NPC art is named with the convention npc_name

#### Other Stuff
- Create img template with metadata properties? Was thinking to track screenshot session is from but I guess that's already in the backlinks
- wonder if I could do some cool thing to like, set a location context at any given time during session? but honestly I think that's probably *too* much automation. We do need to keep things some degree of manual for like. the actual doing. 


### Location Workflow

1. We get a map
2. Paste map in notes with location name





AFTER EACH SESSION/BEFORE NEXT SESSION NEED

1. Notes created and/or linked for each encountered NPC.
2. 