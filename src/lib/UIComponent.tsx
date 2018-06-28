import React from 'react'
import renderComponent, { IRenderResultConfig } from './renderComponent'

class UIComponent<P, S> extends React.Component<P, S> {
  private readonly childClass = this.constructor as typeof UIComponent
  static defaultProps: { [key: string]: any }
  static displayName: string
  static className: string
  static variables?: any
  static rules?: any
  static handledProps: any

  props: any

  renderComponent(config: IRenderResultConfig): React.ReactNode {
    throw new Error(`renderComponent is not implemented in \`${this.childClass.displayName}\`.`)
  }

  render() {
    return renderComponent({
      className: this.childClass.className,
      defaultProps: this.childClass.defaultProps,
      displayName: this.childClass.displayName,
      handledProps: this.childClass.handledProps,
      props: this.props,
      rules: this.childClass.rules,
      variables: this.childClass.variables,
    }, this.renderComponent)
  }
}

export default UIComponent as any
