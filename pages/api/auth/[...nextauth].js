import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  //   DiscordProvider({
  //     clientId: process.env.DISCORD_CLIENT_ID,
  //     clientSecret: process.env.DISCORD_CLIENT_SECRET
  // })

  ],
}

export default NextAuth(authOptions)