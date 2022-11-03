import Layout from "../components/page_layout/Layout";
import "../styles/reset.css";
import "../styles/globals.css";
import "../bootstrap-themes/darkly.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
