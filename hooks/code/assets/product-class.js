import React, { Component } from 'react'
import ProductService from '~/services/product'

export default class Product extends Component {
  state = {
    product: null,
  }

  async componentDidMount() {
    const product = await ProductService.get(this.props.productId)
    await product.lock()
    this.setState({ product })
  }

  async componentDidUnmount() {
    if (this.state.product) {
      await this.state.product.unlock()
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      if (this.state.product) {
        await this.state.product.unlock()
        this.setState({ product: null })
      }

      const product = await ProductService.get(this.props.productId)
      await product.lock()
      this.setState({ product })
    }
  }

  render() {
    if (!product) {
      return null
    }

    return (
      <div>{this.state.product.name}</div>
    )
  }
}
