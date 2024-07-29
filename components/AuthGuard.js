'use client'; // Ensure this is a client-side component

import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function AuthGuard({ children }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Optional: You can use the session data for logging or other purposes
  if (session) {
    console.log('User is authenticated', session);
  }

  return <>{children}</>;
}
