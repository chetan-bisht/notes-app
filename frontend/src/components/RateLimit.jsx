import { Gauge } from "lucide-react";

const RateLimit = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-4 rounded-full mb-6">
            <Gauge className="size-12 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Rate Limit Exceeded</h2>
          <p className="text-gray-300 text-center mb-2">
            You've reached the maximum number of requests allowed.
          </p>
          <p className="text-gray-400 text-sm text-center">
            Please wait a moment before trying again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
