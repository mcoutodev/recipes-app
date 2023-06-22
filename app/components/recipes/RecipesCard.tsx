import React from 'react'
import Image from 'next/image'

export default function page(props: any) {
    return (
        <div>
            <Image src={props.image} alt={props.name} width={200} height={200} />
            <h2>{props.name}</h2>
            <p>{props.category}</p>
            <p>{props.area}</p>
        </div>
    )
}
