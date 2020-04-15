import Document, { Html, Head, Main, NextScript } from "next/document";
import {DARK_MODE} from '../config/Config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  bodyClassess = () =>{

    let classses = ['sidebar-mini', 'sidebar-collapse','sidebar-expanded-on-hover','has-preloader'];
    if(DARK_MODE){
      classses.push('theme-dark')
    }
  return classses.join(' ');
  };

  render() {
    return (
      <Html>
        <Head />
        <body className={this.bodyClassess()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
