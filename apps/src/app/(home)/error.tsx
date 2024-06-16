'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-gray-100 text-center">
      <div className="p-4 max-w-md bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Something Went Wrong!</h2>
        <p className="text-gray-600 mt-2 mb-4">We’re experiencing some technical difficulties. Please check back soon.</p>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          onClick={() => reset()}
        >
          Try Again
        </button>
        <p className="mt-4 text-sm text-gray-500">If the problem persists, please contact our support team.</p>
      </div>
    </div>
  );
}
