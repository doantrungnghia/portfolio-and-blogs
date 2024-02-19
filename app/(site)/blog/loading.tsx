import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="flex flex-col space-y-1 mb-4">
        <span className="w-40 h-4 bg-white rounded-sm animate-pulse"></span>
        <span className="w-80 h-6 bg-white rounded-sm animate-pulse"></span>
      </div>

      <div className="flex flex-col space-y-1 mb-4">
        <span className="w-40 h-4 bg-white rounded-sm animate-pulse"></span>
        <span className="w-80 h-6 bg-white rounded-sm animate-pulse"></span>
      </div>
    </div>
  );
}
