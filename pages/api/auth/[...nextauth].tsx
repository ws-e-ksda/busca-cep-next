import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
        clientId: "Iv1.904a2faba010d612",
        clientSecret: "6df9182f888a7c1346604a377b3d69e74124aa70"
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: "wi2ccH+TzZHKPAfGFYrbUBQ5E5bxwJjzgqFjqwzsvIU=",
  pages:{
    signIn:"/auth/login"
  }
})