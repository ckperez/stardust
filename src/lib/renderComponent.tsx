import cx from 'classnames'
import React from 'react'
import { FelaTheme } from 'react-fela'

import getClasses from './getClasses'
import getElementType from './getElementType'
import getUnhandledProps from './getUnhandledProps'
import callable from './callable'

export interface IRenderResultConfig {
  ElementType: React.ComponentType<any>
  rest: { [key: string]: any }
  classes: { [key: string]: string }
}

export type RenderComponentCallback = (config: IRenderResultConfig) => any

export interface IRenderConfig {
  className?: string
  defaultProps?: { [key: string]: any }
  displayName?: string
  handledProps: string[]
  props: { [key: string]: any }
  rules?: { [key: string]: Function }
  variables?: (siteVariables: object) => object
}

const renderComponent = (config: IRenderConfig, render: RenderComponentCallback) => {
  const { className, defaultProps, displayName, handledProps, props, rules, variables } = config

  return (
    <FelaTheme
      render={theme => {
        const { siteVariables = {}, componentVariables = {} } = theme

        const ElementType = getElementType({ defaultProps }, props)
        const rest = getUnhandledProps({ handledProps }, props)
        const variablesFromFile = callable(variables)(siteVariables)
        const variablesFromTheme = callable(componentVariables[displayName])(siteVariables)
        const variablesFromProp = callable(props.variables)(siteVariables)

        const mergedVariables = () =>
          Object.assign({}, variablesFromFile, variablesFromTheme, variablesFromProp)

        const classes = getClasses(props, rules, mergedVariables, theme)
        classes.root = cx(className, classes.root, props.className)

        const config: IRenderResultConfig = { ElementType, rest, classes }

        return render(config)
      }}
    />
  )
}

export default renderComponent
