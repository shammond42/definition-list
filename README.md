# Definition List Plugin

This plugin adds HTML definition lists to Obsidian. It is in the very early stages of development, and quite a bit more is planned.

It supports both reading view and live preview/source mode.

## Credit

Special thanks to [@lucible](https://github.com/lucible) who, at this point, has contributed more to this project than I have. Thank you! Additionally, thanks go to the following contributors:

- @lfuhr

## Usage

While definition lists are not part of the standard markdown definition, a number of varients have introduced it. This plugin has adopted the markup standard as described in the [Extended Syntax](https://www.markdownguide.org/extended-syntax/). It also implements a few features from [Pandoc's definition list spec](https://pandoc.org/MANUAL.html#definition-lists), specifically the support for tilde as a definition marker and definition lines indented with two spaces.

```
First Term
: First definition.

Second Term
~ Second definition
~ Alternate second definition with _italics_ and [a link](https://example.com).

Third Term, with _Italics_ and ==Highlighting==
  : Third definition, indented
```

Multiple definitions with line breaks between them are not fully supported. For example, the following is supported in Pandoc but will **not** render as 1 term with 2 definitions in reading mode. It does render in live preview, though.

```
This is an example term
: this is the first definition

: this is another definition.
```

### Strict Line Breaks

If you use strict line breaks, you need to use a '\' at the end of lines as follows.

```
Definition term \
: Definition definition
```

### Unsupported Definition List Mark-up

- Multi-line terms
- Multi-line/paragraph definitions
- Definition lists nested inside definitions
- Ordered & unordered lists nested inside definitions

## Styling

Because definition lists are not part of the standard Obsidian markup, they are not recognized by any of the available themes. This plugin adds a couple bits of simple styling, but you will likely have to use [CSS Snippits](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) to style to match your themes.

If you come up with some CSS that matches a popular theme please share it by creating a [Github Issue](https://github.com/shammond42/definition-list/issues) on this project. I would like to build a collection of CSS samples others can use.

## Future Work

1. Build a collection of sample CSS snippits
1. Settings to account for common alternatives
    - dt's and dd's inline vs separate lines
1. Use eslint and improve code quality

## Building from Source

Clone this repository inside the Obsidian Vault:

```
$ cd .obsidian/plugins/
$ git clone https://github.com/shammond42/definition-list
```

Resolve the plugin dependencies and build it:

```
$ cd definition-list
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
