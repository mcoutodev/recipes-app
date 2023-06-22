import  Image  from 'next/image'
import React from 'react'
import busmonkey from './bus-monkey.gif'

export default function page() {
  return (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
            <p>where do we go?</p>
            <Image src={busmonkey} alt="404" />

        </div>
  )
}
