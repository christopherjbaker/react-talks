import React, { useEffect, useState } from 'react'
import ProductService from '~/services/product'

export default function Product({ productId }) {
  const [ product, setProduct ] = useState()

  useEffect(() => {
    let product = null
    (async () => {
      product = await ProductService.get(productId)
      await product.lock()
      setProduct(product)
    })()

    return () => {
      if (product) {
        await product.unlock()
        setProduct(null)
      }
    }
  }, [ productId ])

  if (!product) {
    return null
  }

  return (
    <div>{product.name}</div>
  )
}

function useProduct(productId) {
  const [ product, setProduct ] = useState()

  useEffect(() => {
    let product = null
    (async () => {
      product = await ProductService.get(productId)
      await product.lock()
      setProduct(product)
    })()

    return () => {
      if (product) {
        await product.unlock()
        setProduct(null)
      }
    }
  }, [ productId ])

  return product
}

export default function Product({ productId }) {
  const product = useProduct(productId)
  if (!product) {
    return null
  }

  return (
    <div>{product.name}</div>
  )
}
