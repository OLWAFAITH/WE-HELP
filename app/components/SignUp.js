// pages/sign-up.js
import { SignUp } from '@clerk/nextjs';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}