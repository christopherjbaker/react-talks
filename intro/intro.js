export { default as theme } from '../theme'

import components from './components.mdx'
import createReactApp from './create-react-app.mdx'
import data from './data.mdx'
import forms from './forms.mdx'
import jsx from './jsx.mdx'
import questions from './questions.mdx'
import react from './react.mdx'
import rendering from './rendering.mdx'
import setState from './set-state.mdx'
import title from './title.mdx'

export default [
  ...title,
  ...react,
  ...jsx,
  ...components,
  ...data,
  ...forms,
  ...rendering,
  ...setState,
  ...createReactApp,
  ...questions,
];
