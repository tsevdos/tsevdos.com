---
title: "Easy:input jQuery plug in"
date: "2009-06-10"
type: "post"
categories:
  - plug-ins
tags:
  - easy:input
  - jquery
  - plugins
---

Easy:input is my first attempt at building a jQuery plug in. The plug in is very simple and easy to use. It comes with two default themes (a dark one and a light one) and doesn't depend on any external files, such as images, CSS code etc. (except from the jQuery library, of course). The purpose of the plug in is to help mature-aged users, the visually impaired users and/or any user who is sick and tired of the tiny text inputs and areas, by providing a large display box that shows (in real-time) what you are typing into these areas (text inputs and text areas). Text inputs for passwords will display asterisks (\*) instead of the actual passwords for security reasons. You can see the plug-in in action, by checking out the demo pages below.

## Examples

- [Easy:input with default options (or light theme)](/uploads/easyinput/easyinput-default.html "Easy:input jQuery plug in")
- [Easy:input using the dark theme](/uploads/easyinput/easyinput-dark-theme.html "Easy:input jQuery plug in")
- [Easy:input using custom options](/uploads/easyinput/easyinput-custom.html "Easy:input jQuery plug in")

## How to use it

Just select the text inputs or textareas you want (example `:text` or `:textarea`) and apply the easyinput to them (see below examples).

**Default/light theme ([example page](/uploads/easyinput/easyinput-default.html)).**

```js
$(document).ready(function () {
  $(":text, :textarea").easyinput();
});
```

or

```js
$(document).ready(function () {
  $(":text, :textarea").easyinput("light_theme");
});
```

**Dark theme ([example page](/uploads/easyinput/easyinput-dark-theme.html)).**

```js
$(document).ready(function () {
  $(":text, :textarea").easyinput("dark_theme");
});
```

**Custom options ([example page](/uploads/easyinput/easyinput-custom.html)).**

```js
$(document).ready(function () {
  $(":text, :textarea").easyinput({
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "blue",
    background: "#cacaca",
    border: "5px solid #aaa",
    fontsize: "20px",
    padding: "3px",
    radius: "10px",
  });
});
```

## Download it

Please visit the [plug in's official page](http://plugins.jquery.com/project/easyinput "Easy:input plug in page") in order to get the latest version of it.

## Known issues

1. Border-radius is not working on Internet Explorer and Opera. That's because currently IE and Opera don't support the CSS property border-radius and I didn't want to resolve the specific problem with other ways (such as images or other techniques), because I wanted to keep it simple and CSS/image free.

## Recommendations or Issues

For any recommendations or any other issues please let me know by either leaving a comment on this page, or simply by submitting your thoughts on the [plug in's official page](http://plugins.jquery.com/project/easyinput "Easy:input plug in page") on jQuery (you need to have a jQuery account to do that).
