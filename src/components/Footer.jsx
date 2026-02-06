export default function Footer() {
  return (
    <footer 
      className="app-footer"
      style={{
        background: 'linear-gradient(90deg, rgba(255, 241, 242, 0.95) 0%, rgba(255, 228, 230, 0.95) 50%, rgba(252, 231, 243, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(236, 72, 153, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1rem',
        gap: '0.25rem',
        height: 'auto',
      }}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by Harshal for Nisha
        </p>
        <p className="text-xs text-gray-600">
          © 2026 All rights reserved by Harshal Patil
        </p>
        <p className="text-sm text-pink-500 italic" style={{ fontFamily: 'var(--font-script)' }}>
          "Every love story is beautiful, but ours is my favorite"
        </p>
      </div>
    </footer>
  );
}
