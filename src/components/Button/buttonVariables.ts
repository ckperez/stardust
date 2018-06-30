import { pxToRem } from '../../lib'

export default () => {
  const vars: any = {}

  vars.circularRadius = pxToRem(9999)
  vars.circularWidth = pxToRem(42)

  return vars
}
