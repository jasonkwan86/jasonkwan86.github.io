import React from 'react'

function ProjectDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-xl p-3 md:p-5'>
        {children}
    </div>
  )
}

export default ProjectDescription