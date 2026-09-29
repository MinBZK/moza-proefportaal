import Credentials from "next-auth/providers/credentials";

// Lokaal inloggen zonder Keycloak (bijvoorbeeld zonder VPN).
// Werkt alleen met `next dev` én AUTH_DEV_LOGIN=true; in een build staat NODE_ENV op
// "production" en wordt de vlag genegeerd.
export const devLoginEnabled =
  process.env.NODE_ENV === "development" &&
  process.env.AUTH_DEV_LOGIN === "true";

export const devLoginProvider = Credentials({
  id: "dev-login",
  name: "Fictief inloggen (lokaal)",
  credentials: {},
  authorize: async () => ({
    id: "dev-gebruiker",
    name: "Fictieve gebruiker",
    preferred_username: "dev-gebruiker",
    bsn: process.env.AUTH_DEV_LOGIN_BSN ?? "999990019",
  }),
});
