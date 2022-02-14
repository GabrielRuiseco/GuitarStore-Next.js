import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, page, guitar }) => {
  return (
    <div>
      <Head>
        <title>GuitarStore - {page} </title>
        <meta name='description' content='Sitio Web de venta de guitarras' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header guitar={guitar} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitar: null,
};

export default Layout;
