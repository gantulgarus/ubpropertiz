import "../public/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/css/jquery.fancybox.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/magnific-popup.css";

import "../public/css/main.css";
import "../public/css/adapt_1440.css";
import "../public/css/adapt_1350.css";
import "../public/css/adapt_1260.css";
import "../public/css/adapt_1200.css";
import "../public/css/adapt_992.css";
import "../public/css/adapt_767.css";
import "../public/css/adapt_576.css";
import "../public/css/adapt_345.css";

import Layout from "components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
