import React, { useEffect } from 'react'

const EffectComponent = () => {
  useEffect(() => {
    console.log('effect')
  }, [])

  return <div title='test' />
}

export default EffectComponent
