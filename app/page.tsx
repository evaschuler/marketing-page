export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="text-center px-4">
        <div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-12 max-w-2xl mx-auto border border-pink-100"
          style={{
            backgroundColor: 'rgba(192, 17, 119, 0.8)'
          }}
        >
          <h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
            style={{
              fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
              backgroundImage: 'linear-gradient(90deg, rgba(39, 196, 57, 1) 0%, rgba(216, 180, 254, 1) 50%, rgba(186, 69, 18, 1) 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '6.6px'
            }}
          >
            Hallo Bärn!
          </h1>
          <p 
            className="text-xl text-gray-600 mt-4"
            style={{
              fontWeight: 600,
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(28, 79, 151, 1) 11%, rgba(196, 33, 33, 1) 89%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontSize: '40px',
              fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '4px',
              backgroundColor: 'rgba(181, 33, 154, 1)'
            }}
          >
            Willkommen auf meiner ersten Website! Piiiu piiu piuu
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div 
              className="w-4 h-4 rounded-full bg-pink-300 animate-pulse"
              style={{
                backgroundColor: 'var(--tw-gradient-to)'
              }}
            ></div>
            <div className="w-4 h-4 rounded-full bg-purple-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
