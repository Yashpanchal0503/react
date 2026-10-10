import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center space-y-6">
        {/* Status Code Highlight */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full text-amber-500 text-3xl font-extrabold mb-2">
          {err?.status || "404"}
        </div>

        {/* Primary Message */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            {err?.statusText || err?.message || "The page you are looking for doesn't exist or was moved."}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block w-full sm:w-auto px-6 py-2.5 bg-amber-500 text-white font-semibold text-sm rounded-lg hover:bg-amber-600 active:scale-95 transition-all shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;