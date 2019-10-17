export { default as theme } from '../theme'

import questions from './questions.mdx'
import resources from './resources.mdx'
import title from './title.mdx'

import codeSplitting from './code-splitting/code-splitting.mdx'
import dataFetching from './data-fetching/data-fetching.mdx'

export default [
  ...title,
  ...codeSplitting,
  ...dataFetching,
  ...resources,
  ...questions,
];
