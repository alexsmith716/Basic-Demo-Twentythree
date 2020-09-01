# Basic-Demo-Twentythree

### UPDATE:

"styled-components" generates an actual stylesheet with classes, 
and attaches those classes to the DOM nodes of styled components via the `className` prop

"styled-components" injects the generated stylesheet at the end of the head of the document during runtime

"styled-components" injects its styles during runtime at the end of the `<head>` by default

there is no way to give "styled-components" immunity from the host page's styles, 
but boost the specificity of "styled-components" style rules with "babel-plugin-styled-components-css-namespace"

### TO-DO:

'cssnano-webpack-plugin'
'optimize-css-assets-webpack-plugin'

postcss-calc
postcss-flexbugs-fixes
postcss-for
postcss-import
postcss-loader
postcss-mixins
postcss-preset-env
