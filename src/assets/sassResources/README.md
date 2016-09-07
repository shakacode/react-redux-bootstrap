# Sass Resources
All `.scss` files in this folder (recursive) will be automatically included in _every_ CSS module.
Therefore it is recommended not to put any CSS meant to be rendered directly on the page, but rather
only mixins, variables, and the like which are to be used inside of styles. Also, please do not use
`@import` in these files.

For more information, please see the
[README for sass-resources-loader](https://github.com/shakacode/sass-resources-loader).
