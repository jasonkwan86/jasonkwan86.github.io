import React from 'react'

export default function SectionTitle({ children, id }: { children: React.ReactNode, id:string }) {
  return (
    <div id={id} className="flex justify-center text-cyan-800 font-bold text-3xl md:text-5xl text-center px-4 py-6 md:p-10">
        {children}
    </div>
  )
}
