// import type { AuthOptions, User } from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import Credentials from "next-auth/providers/credentials"

// export const authConfig: AuthOptions = {
// 	providers: [
// 		GoogleProvider({
// 			// clientId: process.env.GOOGLE_CLIENT_ID as string,
// 			// clientSecret: process.env.GOOGLE_SECRET!,
// 			clientId: "357156743103-kukbk41h45vjvepuaq0jlfgvaje64pj4.apps.googleusercontent.com",
// 			clientSecret: "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",
// 		}),
// 		Credentials({
// 			credentials: {
// 				email: { label: "email", type: "email" },
// 				password: { label: "password", type: "password", required: true },
// 			},
// 			async authorize(credentials) {
// 				// if (!credentials?.email || !credentials.password) return null

// 				const currentUser: User = { email: "asdf@asdf.asdf", name: "asdasd", id: "1" }
// 				return currentUser
// 				return null
// 			},
// 		}),
// 	],
// }
