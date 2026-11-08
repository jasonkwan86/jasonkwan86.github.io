import React from 'react'

function DownloadButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      download
      className="px-4 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
    >
      {children}
    </a>
  )
}

export default DownloadButton
