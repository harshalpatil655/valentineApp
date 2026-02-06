import Header from "./Header";
import Footer from "./Footer";
import RomanticBackground from "./RomanticBackground";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <RomanticBackground />
      <Header />
      <main className="app-content">{children}</main>
      <Footer />
    </div>
  );
}
