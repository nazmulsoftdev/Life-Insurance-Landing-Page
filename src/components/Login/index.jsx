import React from 'react';
import {Label,TextInput,Checkbox,Button} from 'flowbite-react';

function Login() {
  return (
    <div className="space-y-4 px-6 pb-4 ">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to our platform
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" required={true} sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" required={true} sizing="sm" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a
          href="/"
          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Lost Password?
        </a>
      </div>
      <div className="w-full">
        <Button>Log in to your account</Button>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{" "}
        <a
          href="/"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </a>
      </div>
    </div>
  );
}

export default Login