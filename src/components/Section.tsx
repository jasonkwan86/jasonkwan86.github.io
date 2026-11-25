import React from 'react'

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[300px] gap-6 md:gap-20 px-4 py-6 md:py-10 text-black">
        {children}
    </section>
  )
}
