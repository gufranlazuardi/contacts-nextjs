import React from "react";

import { EditButton, DeleteButton } from "@/app/components/button";
import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const ContactTable = async () => {
  const contacts = await getContacts();
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-sm">
        <tr>
          <th className=" px-3 py-6">#</th>
          <th className=" px-3 py-6">Name</th>
          <th className=" px-3 py-6">Phone Number</th>
          <th className=" px-3 py-6">Created At</th>
          <th className=" px-3 py-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id} className=" bg-white border-b">
            <td className=" px-3 py-6">{index + 1}</td>
            <td className=" px-3 py-6">{contact.name}</td>
            <td className=" px-3 py-6">{contact.phone}</td>
            <td className=" px-3 py-6">{formatDate(contact.createdAt.toString())}</td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
