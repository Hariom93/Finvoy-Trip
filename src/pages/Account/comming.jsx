import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-xl p-10 max-w-md w-full text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          We’re working hard to bring something amazing for you.
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>

        {/* Message */}
        <p className="text-sm text-gray-400">
          Stay tuned. This feature will be available very soon.
        </p>

      </div>
    </div>
  );
}
