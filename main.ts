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
		await this.loadSettings();
		console.log('loading definition list plugin');
		this.registerMarkdownPostProcessor((element, context) => {
			// console.log(element);
      const paragraphs = element.findAll("p");
			// console.log('registering post processor');
			// debugger;

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
		
				// debugger;
				// const text = textBlock.innerHTML;
				// console.log(text);

			}
      // for (let codeblock of codeblocks) {
      //   const text = codeblock.innerText.trim();
      //   if (text[0] === ":" && text[text.length - 1] === ":") {
      //     const emojiEl = codeblock.createSpan({
      //       text: ALL_EMOJIS[text] ?? text,
      //     });
      //     codeblock.replaceWith(emojiEl);
      //   }
      // }
    });
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

// class SampleSettingTab extends PluginSettingTab {
// 	plugin: MyPlugin;

// 	constructor(app: App, plugin: MyPlugin) {
// 		super(app, plugin);
// 		this.plugin = plugin;
// 	}

// 	display(): void {
// 		const {containerEl} = this;

// 		containerEl.empty();

// 		new Setting(containerEl)
// 			.setName('Setting #1')
// 			.setDesc('It\'s a secret')
// 			.addText(text => text
// 				.setPlaceholder('Enter your secret')
// 				.setValue(this.plugin.settings.mySetting)
// 				.onChange(async (value) => {
// 					this.plugin.settings.mySetting = value;
// 					await this.plugin.saveSettings();
// 				}));
// 	}
// }
