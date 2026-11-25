import React from 'react'
import Image from 'next/image'

export type ProjectImage = { src: string; width: number; height: number; alt: string }

function ProjectImages({ images, children }: { images: ProjectImage[]; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {images.map((image) => (
        <Image key={image.src} src={image.src} width={image.width} height={image.height} alt={image.alt} className="w-full max-w-[500px] h-auto" />
      ))}
      {children}
    </div>
  )
}

export default ProjectImages
