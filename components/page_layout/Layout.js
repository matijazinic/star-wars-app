import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="my-5 min-vh-100">{children}</main>
      <footer className="bg-dark">
        <Footer />
      </footer>
    </>
  );
}
