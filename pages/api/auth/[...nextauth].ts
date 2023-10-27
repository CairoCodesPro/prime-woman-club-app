import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { fauna } from '../../../services/fauna'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn(user, account, profile) {
      let email = user.user.email
      console.log("Data:", email);
      await fauna.query(
        q.Create(
          q.Collection('users'),
          { data: { email } }
        )
      )
      return true
    },

  },
}

export default NextAuth(authOptions)