import Doucment, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Doucment {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
