import React from 'react'

export default function ProjectTitle({ text }: { text: string }) {
  return (
    <div className='grid place-items-center text-center font-bold text-xl md:text-2xl' id={text}>
      {text}
    </div>
  )
}
