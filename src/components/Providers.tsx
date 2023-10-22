"use client"

import { GoogleOAuthProvider } from "@react-oauth/google"

interface Props {
	children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
	return (
		<>
			<GoogleOAuthProvider clientId='357156743103-kukbk41h45vjvepuaq0jlfgvaje64pj4.apps.googleusercontent.com'>
				{children}
			</GoogleOAuthProvider>
		</>
	)
}
