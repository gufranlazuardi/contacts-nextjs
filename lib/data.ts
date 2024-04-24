// data fetching semuanya disini

import { prisma } from "@/lib/prisma";

export const getContacts = async () => {
  try {
    const contact = await prisma.contact.findMany();
    return contact;
  } catch (error) {
    throw new Error("Failed in fetch contact data");
  }
};

export const getContactsByID = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    throw new Error("Failed in fetch contact data");
  }
};
