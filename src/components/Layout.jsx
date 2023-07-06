import Header from './Header';

const { default: Head } = require('next/head');

const Layout = ({ children }) => {
  return (
    <div className="min-h-[100vh]">
      <Head>
        <title>Haus Experiment</title>
      </Head>

      <Header />

      <main>{children}</main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
