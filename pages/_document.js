import Doucment, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Doucment {
  render() {
    return (
      <Html lang="en">
        {/* <Head /> */}
        <Head>{/* <title>Их хотын барилга</title> */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
