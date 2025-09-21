import dbConnect from "@/lib/dbConnect";  // Importing a utility to connect to MongoDB
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";  // Importing NextAuth.js for handling authentication
import GithubProvider from "next-auth/providers/github";  // Importing GitHub authentication provider from NextAuth
import GoogleProvider from "next-auth/providers/google";  // Importing Google authentication provider from NextAuth

import CredentialsProvider from "next-auth/providers/credentials"

// import toast from "react-hot-toast";  // Importing toast for displaying error messages (though not used actively here)

export const authOptions = {
  // Configuring NextAuth.js authentication options
  
  providers: [  // List of authentication providers (OAuth and Credentials)
    GithubProvider({  // Setting up GitHub authentication provider
      clientId: process.env.GITHUB_CLIENT_ID,  // GitHub Client ID from .env
      clientSecret: process.env.GITHUB_CLIENT_SECRET,  // GitHub Client Secret from .env
    }),
    
    GoogleProvider({  // Setting up Google authentication provider
      clientId: process.env.GOOGLE_CLIENT_ID,  // Google Client ID from .env
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Google Client Secret from .env
    }),

    CredentialsProvider({  // Configuring Credentials-based authentication (for email/password)
      name: "Credentials",  // This is the name shown on the login page (e.g., "Sign in with Credentials")
      credentials: {  // Defining the fields for login (username and password)
        username: { label: "Username", type: "text", placeholder: "jsmith" },  // Username field
        password: { label: "Password", type: "password" },  // Password field
      },

      async authorize(credentials) {  // The function to authenticate the user with credentials (username/password)
        const { name, password } = credentials;  // Extract username and password from submitted credentials
        const usersCollection = await dbConnect("users");  // Connect to the "users" collection in MongoDB
        const user = await usersCollection.findOne({ username });  // Search for a user by username in the database

        if (!user) {  // If no user is found with that username
          // toast.error("No user Found with that email")  // Optional: Display an error toast (not used here)
          throw new Error("No user found with that username");  // Throw an error
        }
const isValid = await bcrypt.compare(password, user.password);
     if (!isValid) {
  throw new Error("Invalid/wrong password");
}

        // If credentials are valid, return a user object
        return {
          id: user._id.toString(),  // User's unique ID from the database
          name: user.username,  // User's name
          email: user.email,  // User's email
        };
      },
    }),

    // You can add more providers (e.g., Facebook, Twitter) here
  ],

  session: {
    strategy: "jwt",  // Use JWT for session management instead of cookies (more secure in some cases)
  },

  callbacks: {
    // JWT callback: This is triggered whenever a new JWT is created or updated
    async jwt({ token, user }) {
      if (user) {  // If a user object is returned (from successful authentication)
        token.id = user.id;  // Add the user ID to the JWT token
        token.role = user.role;  // Add the user's role to the JWT token (if defined)
      }
      return token;  // Return the modified JWT token
    },

    // Session callback: This is triggered whenever a session is created or updated
    async session({ session, token }) {
      session.user.id = token.id;  // Set the user ID in the session object
      session.user.role = token.role;  // Set the user role in the session object (if defined)
      return session;  // Return the modified session object
    },
  },

  pages: {
    signIn: "/auth/signin",  // Custom sign-in page URL for your app (login page)
    signOut: "/auth/signout",  // Custom sign-out page URL (if needed)
  },
};

// Create the NextAuth handler using the defined options
const handler = NextAuth(authOptions);

// Export the handler as GET and POST methods for the API route
export { handler as GET, handler as POST };
