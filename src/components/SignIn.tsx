"use client"

// import { signIn } from "next-auth/react"
import { GoogleLogin } from "@react-oauth/google"

export default function SignIn() {
	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				console.log(credentialResponse)
			}}
			onError={() => {
				console.log("Login Failed")
			}}
		/>
	)

	// <button onClick={() => signIn("google")}>sign in with google</button>
}
