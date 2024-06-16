import { Plugin } from 'obsidian';


export default class DefinitionListPlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((element, context) => {
      const paragraphs = element.findAll("p");

			for (let paragraph of paragraphs) {
				const lines = paragraph.innerText.split('\n');

				let definitionList;
				if(lines[1][0] === ':') { // Check to see if second line start with a colon
					definitionList = paragraph.createEl("dl");
				} else { //Not a definition list
					return;
				}

				for(let i=0; i<lines.length; i++) {
					const line = lines[i];

					const length = line.endsWith("<br>") ? line.length-4 : line.length;
					if(line[0] === ':') {
						const definition = line.substring(1, length).trim();
						definitionList.createEl("dd", {text: definition});
					} else {
						const term = line.substring(0, length).trim();
						definitionList.createEl("dt", {text: term});
					}
				}

				paragraph.replaceWith(definitionList);
			}
    });
	}

	onunload() {
		// Placeholder
	}
}

