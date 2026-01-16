export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="text-center px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-12 max-w-2xl mx-auto border border-pink-100">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Hallo Bärn!
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Willkommen auf meiner ersten Next.js Website!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-4 h-4 rounded-full bg-pink-300 animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-purple-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
