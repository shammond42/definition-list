import { EditorState, StateField, Transaction } from '@codemirror/state';
import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class DefinitionListPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		console.log('loading definition list plugin');
		this.registerMarkdownPostProcessor((element, context) => {
      const paragraphs = element.findAll("p");

			for (let paragraph of paragraphs) {
				console.log(paragraph.innerHTML);
				
				const lines = paragraph.innerHTML.split('\n');

				let definitionList;
				if(lines[1][0] === ':') { // Check to see if second line start with a colon
					definitionList = paragraph.createEl("dl");
				} else { //Not a definition list
					return;
				}

				for(let i=0; i<lines.length; i++) {
					console.log(lines[0]);
					const line = lines[i];

					const length = line.endsWith("<br>") ? line.length-4 : line.length;
					if(line[0] === ':') {
						// console.log(line);
						// debugger;
						const definition = line.substring(1, length).trim();
						console.log(definition);
						definitionList.createEl("dd", {text: definition});
					} else {
						const term = line.substring(0, length).trim();
						console.log(term);
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

