export { default as theme } from '../theme'

import components from './components.mdx'
import css from './css.mdx'
import cssModules from './css-modules.mdx'
import questions from './questions.mdx'
import style from './style.mdx'
import title from './title.mdx'

export default [
  ...title,
  ...style,
  ...css,
  ...cssModules,
  ...components,
  ...questions,
];
