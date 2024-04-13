import React from "react";

const ContactTable = () => {
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
        <tr>
          <td className=" px-3 py-6"></td>
          <td className=" px-3 py-6"></td>
          <td className=" px-3 py-6"></td>
          <td className=" px-3 py-6"></td>
          <td className=" px-3 py-6"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactTable;
