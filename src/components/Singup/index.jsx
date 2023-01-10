import React from 'react';
import {Label,TextInput,Button} from 'flowbite-react'

function Singup() {
  return (
    <div className="space-y-4 px-6 pb-4 ">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to our platform
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput id="name" required={true} sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" required={true} sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" required={true} sizing="sm" />
      </div>

      <div className="w-full">
        <Button>Singup</Button>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        <a
          href="/"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Already have an account ?
        </a>
      </div>
    </div>
  );
}

export default Singup