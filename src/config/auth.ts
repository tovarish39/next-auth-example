import type { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID as string,
      // clientSecret: process.env.GOOGLE_SECRET!,
      clientId: '357156743103-kukbk41h45vjvepuaq0jlfgvaje64pj4.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
}
