import Header from "./Header";
import Footer from "./Footer";
import RomanticBackground from "./RomanticBackground";

export default function Layout({ children }) {
  return (
    <div className="app-shell flex flex-col h-screen overflow-hidden">
      <RomanticBackground />
      <Header />
      <main className="app-content flex-1 flex flex-col items-center justify-center w-full relative z-10 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
