import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for."
          ></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&family=Montserrat:wght@400;500;700&family=Open+Sans:wght@600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="data:image/x-icon"
          ></link>
        </Head>
        {/* <body onWheel={(e) => setWhell(e.pageY)}> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
