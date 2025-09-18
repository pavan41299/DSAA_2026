import React from 'react'
import Image from 'next/image'

function AttendContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="w-full flex justify-center">
        <Image src="/coming soon2.png" alt="Coming soon" width={480} height={320} className="object-contain" />
      </div>
    </div>
  )
}

export default AttendContent
