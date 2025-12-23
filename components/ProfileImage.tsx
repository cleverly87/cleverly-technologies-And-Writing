'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="w-48 h-48 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary to-secondary">
      {!imageError ? (
        <Image
          src="/andrew-cleverly.jpg"
          alt="Andrew Cleverly"
          width={192}
          height={192}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="text-6xl font-bold text-white">AC</div>
      )}
    </div>
  )
}
