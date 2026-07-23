// Templater user script
// Place in your Templater "User Script Files" folder as refreshAllLocationImages.js
// Run via a trigger template (see "Refresh All Maps.md") bound to a hotkey.
// Scans every note in the vault, updates the Maps section of any note that
// has a "## Maps" heading, and leaves everything else untouched.
//
// Assumes "## Maps" is always the LAST section in the note. Everything from
// the end of the heading line to the end of the file is treated as the
// replaceable image block.

module.exports = async function refreshAllLocationImages(tp) {
	const app = tp.app;
	const headingRegex = /^#\s+Maps\s*$/m;

	// Exclude Location template
	const excludedFile = "Location";

	const allImages = app.vault.getFiles()
		.filter(f => f.extension === "webp" && f.name.startsWith("location_"));

	let updatedCount = 0;
	let imageTotal = 0;

	for (const file of app.vault.getMarkdownFiles()) {

		if (file.basename === excludedFile) continue;

		const content = await app.vault.read(file);

		const match = content.match(headingRegex);
		if (!match) continue; // not a location note

		const headingEndIdx = match.index + match[0].length;

		const placeTitle = file.basename.toLowerCase().replace(/\s/g, "");
		const paths = allImages
			.filter(f => f.name.toLowerCase().includes(placeTitle))
			.map(f => f.path);

		const block = paths.map(p => `![[${p}]]`).join("\n");

		const before = content.slice(0, headingEndIdx);
		const newContent = `${before}\n\n${block}\n`;

		if (newContent !== content) {
			await app.vault.modify(file, newContent);
			updatedCount++;
			imageTotal += paths.length;
		}
	}

	new Notice(`Refreshed ${updatedCount} location note(s), ${imageTotal} image reference(s) total.`);
};