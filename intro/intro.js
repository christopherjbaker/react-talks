export { default as theme } from '../theme'

import createReactApp from './create-react-app.mdx'
import jsx from './jsx.mdx'
import propTypes from './prop-types.mdx'
import questions from './questions.mdx'
import react from './react.mdx'
import reactWay from './react-way.mdx'
import rendering from './rendering.mdx'
import title from './title.mdx'

export default [
  ...title,
  ...createReactApp,
  ...react,
  ...jsx,
  ...reactWay,
  ...propTypes,
  ...rendering,
  ...questions,
];
