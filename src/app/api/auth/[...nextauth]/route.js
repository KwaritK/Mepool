import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import user from "@/models/user";

const authOption = {
    providers: [
        CredentialsProvider({

            name: "credentials",

            credentials: {

            },
            async authorize(credentials, req) {

                const { id, password } = credentials;

                try {

                    await connectDB();
                    const user = await UserActivation.findOne({ id });

                    if (!user) {
                        return null;

                    }

                    const passwordMatch = await (password,user.password);

                    if (!passwordMatch) {
                        return null;
                    }

                    return user;


                } catch (error) {
                    console.log("error", error)
                }

            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    page: {
        sigIn: "/login"
    }

}

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
