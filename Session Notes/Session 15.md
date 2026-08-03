---
dg-publish: false
type: session_note
created: 2026-08-03
modified: 2026-08-03
session_date: 08/03/2026
session_number: 15
players:
  - Alek
  - Cinna
  - Kuya
  - Matt
  - Taylor
missed:
paid: true
level: "4"
ingame_start: 1/21/2012
ingame_finish:
locations:
  - "[[Deadwater Wharf]]"
  - ">[[Seahorse Bank]]"
tags:
  - under_construction
---

```dataviewjs
const container = dv.el("div", "", { cls: "session-nav" });
container.style.display = "flex";
container.style.gap = "1rem";

const prev = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates" && p.session_number === dv.current().session_number - 1)[0];
const next = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates" && p.session_number === dv.current().session_number + 1)[0];

function makeCard(label, page) {
  const card = container.createEl("div", { cls: "session-nav-card" });
  card.style.flex = "1";
  card.style.border = "2px solid var(--text-normal)";
  card.style.borderRadius = "8px";
  card.style.padding = "1rem";
  card.style.textAlign = "center";
  card.createEl("div", { text: label });
  if (page) {
    card.appendChild(dv.el("strong", dv.fileLink(page.file.path)).firstChild ?? dv.span(`[[${page.file.path}]]`));
  } else {
    card.createEl("em", { text: "None" });
  }
}

makeCard("⬅️ Previous Session", prev);
makeCard("Next Session ➡️", next);
```


# Winter 21, 2012

We resume at the [[Seahorse Bank]], where [[Gideon Oublier|Gideon]] (currently disguised as [[Victor Halden]]) has seemingly given the correct answer to Victor's security question, and is currently being led deeper into the bank.

The manager leads [[Gideon Oublier|Gideon]] to a door and says she can't follow beyond that point. He asks her to arrange for large-scale transport of funds and tells her to look out for the arrival of his new bodyguards, describing Silas and Keena.

She leaves and Gideon enters the room. There's nothing in the room but a briefcase in the center.

He casts detect magic and picks up on all kinds of warding on the room that's been deactivated on his account. On the briefcase, there isn't much other than the standard residual magic common with electronics.

He checks the briefcase and table for traps but finds nothing.



