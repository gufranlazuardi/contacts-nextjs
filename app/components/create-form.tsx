"use client";

import { saveContact } from "@/lib/action";
import { useFormState } from "react-dom";
// karena react dom adalah hook, maka harus pake use client
import React from "react";
import { SubmitButton } from "./button";

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);
  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Fullname
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="fullname..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Phone number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="phone number..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        </div>
        <SubmitButton label="save" />
      </form>
    </div>
  );
};

export default CreateForm;
