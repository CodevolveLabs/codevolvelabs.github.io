export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src="/logo.png"
        alt="Codevolve Labs Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 mb-6 pointer-events-none"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
        Welcome to Codevolve Labs
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center">
        We offer cutting-edge tech solutions for freelance projects.
      </p>
      <p className="text-md sm:text-lg text-gray-600 text-center">
        Our website is currently under development. Stay tuned for updates!
      </p>
      <div className="mt-8">
        <p className="text-xs sm:text-sm text-gray-500">
          © 2024 Codevolve Labs
        </p>
      </div>
    </div>
  );
}
