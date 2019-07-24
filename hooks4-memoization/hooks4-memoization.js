export { default as theme } from '../theme'

import questions from './questions.mdx'
import resources from './resources.mdx'
import slack from './slack.mdx'
import title from './title.mdx'

import useCallback from './use-callback/use-callback.mdx'
import useMemo from './use-memo/use-memo.mdx'

export default [
  ...title,
  ...useMemo,
  ...useCallback,
  ...resources,
  ...slack,
  ...questions,
];
