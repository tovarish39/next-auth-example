import { authConfig } from "@/config/auth"
import NextAuth from "next-auth"
// import NextAuth from "next-auth/next"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }

// export default NextAuth(authConfig)
