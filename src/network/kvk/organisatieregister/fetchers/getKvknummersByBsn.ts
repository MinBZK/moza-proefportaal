"use server";

import kvkOrganisatieRegisterClient from "../index";

export const GetKvknummersByBsn = async (bsn: string) => {
  try {
    const response = await kvkOrganisatieRegisterClient.POST(
      "/mijnoverheid/mijnorganisaties",
      {
        body: {
          bsn,
        },
      },
    );

    return response.data ?? {};
  } catch (error) {
    // Service onbereikbaar (bijvoorbeeld zonder VPN): inloggen gaat door, zonder organisaties.
    console.error("KVK-organisatieregister niet bereikbaar", error);
    return {};
  }
};
