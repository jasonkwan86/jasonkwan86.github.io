import React from 'react'
import DownloadButton from '@/components/Projects/DownloadButton'

export type DownloadFile = { href: string; label: string }

function DownloadGroup({ files }: { files: DownloadFile[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {files.map((file) => (
        <DownloadButton key={file.href} href={file.href}>
          {file.label}
        </DownloadButton>
      ))}
    </div>
  )
}

export default DownloadGroup
