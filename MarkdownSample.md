---
frontmatter: test
---
multiple terms
are not supported
: plugin will always use the single line closest to the definition as the term.

Paragraphs between definitions are left alone and not accidentally interpreted as a term.

this is a definition term
: this is a definition

2024-07-17 01:57:06 PM
: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in diam consectetur dui volutpat sagittis pretium et odio. Maecenas accumsan quam ut tempor laoreet. Integer mattis fermentum metus a mollis. Fusce vulputate vulputate maximus. Maecenas volutpat porta aliquet. Morbi vehicula nunc nec lacus elementum egestas. Nullam aliquam bibendum ultricies. Mauris luctus hendrerit neque, id dictum eros pretium a. Suspendisse bibendum eros ut dui accumsan pellentesque. Phasellus ac neque non ante imperdiet efficitur ut sed odio. Praesent eleifend ac erat nec consequat. 

This is an example term
: this is the first definition

: this is a definition on a new line. these will render as regular paragraphs, not definitions, in live preview or reading mode.

this is a term
  : with an indented definition... that's very long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in diam consectetur dui volutpat sagittis pretium et odio. Maecenas accumsan quam ut tempor laoreet. Integer mattis fermentum metus a mollis. Fusce vulputate vulputate maximus. Maecenas volutpat porta aliquet. Morbi vehicula nunc nec lacus elementum egestas. Nullam aliquam bibendum ultricies.
  : Let's add another definition.
  : and a third definition.

_Italic Term_
  : with an indented definition
  : and another indented definition and _italic_ and **bold** and ==highlight== and [link](https://example.com)

`Code Term`
  ~ with a tilde for the definition marker and `inline code` and ~~strikethrough~~
  ~ another definition and _italic_ and **bold** and ==highlight== and [link](https://example.com)

[This is a linked term](https://example.com)
: This is a definition for the linked term.

> > Super nested
> > : definition?
> 
> nested
> : definition

```
Term
: definition
: another definition
```

### Invalid Definitions
: definition rendering is not valid

- this is a list
: definition rendering is not valid

0. this is a list
: definition rendering is not valid

![test|200](https://picsum.photos/200/100)
: definition rendering is not valid

---
: definition rendering is not valid

***
: definition rendering is not valid

___
: definition rendering is not valid[^1]

[^1]: this is a footnote
: definition rendering is not valid

| test         | table        |
| ------------ | ------------ |
| a table line | another word |
: definition rendering is not valid

$$
math
$$
: definition rendering is not valid

^block-id
: definition rendering is not valid


