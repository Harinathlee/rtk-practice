import './Loader_styles.scss';

function ErrorPage({ error }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
        <p className="text-lg text-gray-700 mb-6">{error?.message || "An unexpected error has occurred."}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
