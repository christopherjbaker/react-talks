export { default as theme } from '../theme'

import components from './components.mdx'
import css from './css.mdx'
import cssModules from './css-modules.mdx'
import style from './style.mdx'

export default [
  ...style,
  ...css,
  ...cssModules,
  ...components,
];
