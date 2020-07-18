import Document, { Html, Head, Main, NextScript } from "next/document";
import {bodyClassess} from '../helpers/Utils';
class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>
        <body className={bodyClassess()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;