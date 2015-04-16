# Smooth Scrolling jQuery Plugin

## Notice

Nowadays you should really use `scroll-behavior: smooth;` in CSS instead of a JavaScript solution.

## Demo & Examples

<https://mathiasbynens.be/demo/smooth-scrolling>

## Example Usage

### Simple – Inside entire document

Find all links to anchors in the same document, and make them scroll smoothly when clicked:

```js
$('html').smoothScroll();
```

### Simple – Inside a specified element

Find all links to anchors in the same document inside `#content`, and make them scroll smoothly when clicked:

```js
$('#content').smoothScroll();
```

### Specifying animation speed

```js
$('html').smoothScroll(300);
```

_– [Mathias](http://mathiasbynens.be/)_
