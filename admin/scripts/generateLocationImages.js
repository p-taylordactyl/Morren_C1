// Templater user script
// Place in your Templater "User Script Files" folder as generateLocationImages.js
// Used inside your location template at note-creation time:
//
//   # Maps
//   <% tp.user.generateLocationImages(tp) %>

function findMatchingImagePaths(app, noteName) {
	const placeTitle = noteName.toLowerCase().replace(/\s/g, "");

	return app.vault.getFiles()
		.filter(file =>
			file.extension === "webp" &&
			file.name.startsWith("location_") &&
			file.name.toLowerCase().includes(placeTitle)
		)
		.map(file => file.path);
}

module.exports = async function generateLocationImages(tp) {
	const noteName = tp.file.title;
	const paths = findMatchingImagePaths(tp.app, noteName);

	if (paths.length === 0) return "";

	return paths.map(p => `![[${p}]]`).join("\n");
};
