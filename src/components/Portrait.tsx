import React from 'react'
import Image from 'next/image'

export default function Portrait() {
  const portraitDimensions = 400;

  return (
    <Image 
        src="./images/jasonselfie.jpg"
        width={portraitDimensions}
        height={portraitDimensions}
        alt="selfie"
        className="rounded-[4rem] md:rounded-[6rem] w-full max-w-[400px] h-auto"
    />
  )
}
