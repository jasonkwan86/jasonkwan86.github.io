import React from 'react'

export default function ProjectTitle({ text }: { text: string }) {
  return (
    <div className='grid place-items-center font-bold text-2xl' id={text}>
      {text}
    </div>
  )
}
