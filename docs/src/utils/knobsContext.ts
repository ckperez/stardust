/**
 * Get the Webpack Context for all component knob files.
 */
const knobsContext = require.context('docs/src/examples/', true, /\w+\.knobs\.tsx$/)

export default knobsContext
