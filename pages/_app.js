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
import "nprogress/nprogress.css";

import { SWRConfig } from "swr";
import Router from "next/router";
import nProgress from "nprogress";
import Layout from "components/layout/Layout";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  nProgress.start();
};

Router.onRouteChangeComplete = (url) => {
  nProgress.done();
};

Router.onRouteChangeError = (url) => {
  nProgress.done();
};

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 60000 * 60 * 24,
        fetcher,
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
            // or show a notification UI.
            // alert("Алдаа");
            console.log("error on appjs", error);
          }
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
