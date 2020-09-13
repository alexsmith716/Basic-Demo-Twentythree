# Basic-Demo-Twentythree

### UPDATE:

"@apollo/client": "^3.2.0-beta.12",
"cross-fetch": "^3.0.6",
"mongoose": "^5.10.5",
"node-fetch": "3.0.0-beta.9",
"serialize-javascript": "^5.0.1",

convert global sass variables to theme object

styled-components: code now dependent on specific framework

"styled-components" generates an actual stylesheet with classes, 
and attaches those classes to the DOM nodes of styled components via the `className` prop

"styled-components" injects the generated stylesheet at the end of the head of the document during runtime

"styled-components" injects its styles during runtime at the end of the `<head>` by default

there is no way to give "styled-components" immunity from the host page's styles, 
but boost the specificity of "styled-components" style rules with "babel-plugin-styled-components-css-namespace"

### TO-DO:

"Book Card" > "Bookshelf"

API > GET /books:
Returns an array of book objects
`
[
  {
    "description": String,
    "imageUrl": String,
    "author": String,
    "title": String
  }
]
`

Go over "core-js" & "regenerator-runtime"
"https://github.com/facebook/regenerator/tree/master/packages/regenerator-transform"

'cssnano-webpack-plugin'
'optimize-css-assets-webpack-plugin'

postcss-calc
postcss-flexbugs-fixes
postcss-for
postcss-import
postcss-loader
postcss-mixins
postcss-preset-env
