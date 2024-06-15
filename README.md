# Definition List Plugin

This plugin adds HTML definition lists to Obsidian. It is in the very early stages of development, and quite a bit more is planned.

At the moment only supports the reading view. It will support live preview in the future.

## Usage

While definition lists are not part of the standard markdown definition, a number of varients have introduced it. This plugin has adopted the markup standard as described in the (Extended Syntax)[https://www.markdownguide.org/extended-syntax/]. The markup syntax looks like this.

```
First Term
:First definition.
Second Term
:Second definition
:Alternate second definition.
Third Term
:Third definition
```
## Styling

Because definition lists are not part of the standard Obsidian markup, they are not recognized by any of the available themes. This plugin adds a couple bits of simply styline, but you will likely have to use (CSS Snippits)[https://help.obsidian.md/Extending+Obsidian/CSS+snippets] to style to match your themes.

If you come up with some CSS that matches a popular theme please share it. I would like to build a collection of CSS samples others can use.

## Future Work

1. Support live preview mode
2. Build a collection of sample CSS snippits
3. Settings to account for common alternatives
  -- dt's and dd's inline vs separate lines
  -- support alternate syntax options
4. Use eslint and improve code quality

## Building from Source

Clone this repository inside the Obsidian Vault:

```
$ cd .obsidian/plugins/
$ git clone https://github.com/otaviocc/obsidian-microblog
```

Resolve the plugin dependencies and build it:

```
$ cd obsidian-microblog
$ npm i
$ npm run build
```

Restart Obsidian and enable the plugin from *Community Plugins* in Settings.

If you wish to make changes to the plugin, run `npm run dev`
instead of `npm run build`.

## Contributing

Contributions are more than welome. If you wish to do so, please follow these instructions.

1. Fork this repository and follow the steps from the previous section using the forked repository instead
2. Create a feature branch for the changes
3. Commit the changes and push them to the forked repository
4. Submit a pull request
