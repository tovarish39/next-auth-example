"use client"
import Image from "next/image"
import img from "@public/bannerNewCollection.svg"

import { useSearchParams } from "next/navigation"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function Home() {
	const session = useSession()
	console.log(session)
	const params = useSearchParams()
	return (
		<>
			<div className='links'>
				<Link className='links__item' href={"/api/auth/signin"}>
					Sign In
				</Link>
				{session?.data && (
					<button className='links__item' onClick={() => signOut({ callbackUrl: "/" })}>
						SignOut
					</button>
				)}
			</div>
			<div className='block2'>
				data
				{session?.data && <h1>{session?.data?.user?.email}</h1>}
			</div>
		</>
	)
}
