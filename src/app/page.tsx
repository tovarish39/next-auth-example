"use client"
import Image from "next/image"
import img from "@public/bannerNewCollection.svg"

import { useSearchParams } from "next/navigation"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function Home() {
	const session = useSession()
	console.log(session)
	// {
	//     "data": null,
	//     "status": "unauthenticated"
	// }

	//   {
	//     "status": "loading"
	// }

	//   {
	//     "data": {
	//         "user": {
	//             "name": "Алексей Гордеев",
	//             "email": "gorrus100@gmail.com",
	//             "image": "https://lh3.googleusercontent.com/a/ACg8ocI3OjPlilCuVf7DN87alZe_8183gfiAWBJgybj8Ysf3ePo=s96-c"
	//         },
	//         "expires": "2023-11-18T18:49:14.240Z"
	//     },
	//     "status": "authenticated"
	// }

	const params = useSearchParams()
	// console.log(params.get("callbackUrl"))
	// console.log("process.env")
	// console.log(process.env.NEXTAUTH_URL)
	return (
		<>
			<div className='block1'>
				<Link href={"/api/auth/signin"}>Sign In</Link>
				<div className='block2'>
					<div className='block block__img1'>
						<Image src={img} alt='' style={{ width: "100%", height: "auto" }} />
					</div>
					<div className='block block__img2'>
						<Image src={img} alt='' width={500} height={300} style={{ width: "100%", height: "auto" }} />
					</div>
				</div>
				{session?.data && <button onClick={() => signOut({ callbackUrl: "/" })}>SignOut</button>}
				<Link href={"/profile"}>Profile</Link>
				{session?.data && <h1>{session?.data?.user?.email}</h1>}
			</div>
		</>
	)
}
