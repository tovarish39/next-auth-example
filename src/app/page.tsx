'use client'
import Image from 'next/image'
import img from '@public/bannerNewCollection.svg'

import logo from '@public/logo.svg'
import { useSession } from 'next-auth/react'

export default function Home() {
  // const session = useSession()
  console.log(process.env.GOOGLE_SECRET)
  return (
    <>
      <div className="block1">
        <div className="block2">
          <div className="block block__img1">
            <Image src={img} alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="block block__img2">
            <Image src={img} alt="" width={500} height={300} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </>
  )
}
