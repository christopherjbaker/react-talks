export { default as theme } from '../theme'

import questions from './questions.mdx'
import resources from './resources.mdx'
import title from './title.mdx'

import code from './code/code.mdx'
import fakeoutIntro from './fakeout/intro.mdx'
import fakeoutOutro from './fakeout/outro.mdx'
import how from './how/how.mdx'
import what from './what/what.mdx'
import why from './why/why.mdx'

export default [
  ...fakeoutIntro,
  ...title,
  ...what,
  ...why,
  ...how,
  ...code,
  ...resources,
  ...questions,
  ...fakeoutOutro,
];
