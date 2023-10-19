import { authConfig } from "@/config/auth"
import { getServerSession } from "next-auth/next"
import Link from "next/link"

export default async function Profile() {
	const session = await getServerSession(authConfig)
	// const name = session?.user?.name

	console.log("session")
	console.log(session)
	console.log(process.env.NEXTAUTH_URL)
	console.log("session")

	return (
		<>
			<div>{session && <h1>{session.user?.email}</h1>}</div>
			<Link href={"/"}>Home</Link>
		</>
	)
}
