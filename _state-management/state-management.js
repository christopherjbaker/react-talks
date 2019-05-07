export { default as theme } from '../theme'

import mobx from './mobx.mdx'
import redux from './redux.mdx'
import ylem from './ylem.mdx'

export default [
  ...redux,
  ...mobx,
  ...ylem,
];
