export { default as theme } from '../theme'

import context from './context.mdx'
import errors from './errors.mdx'
import key from './key.mdx'
import portal from './portal.mdx'
import ref from './ref.mdx'
import testing from './testing.mdx'

export default [
  ...context,
  ...testing,
  ...ref,
  ...key,
  ...portal,
  ...errors,
];
