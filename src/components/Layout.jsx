import Header from './Header';

const { default: Head } = require('next/head');

const Layout = ({ children }) => {
  return (
    <div className="min-h-[100vh] w-full">
      <Head>
        <title>Haus Experiment</title>
      </Head>

      <Header />

      <main>{children}</main>

      <footer className="text-center w-full text-gray-500 py-6 md:py-10 px-4">
        Copywright &copy; 2023 Haus Experiment - All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;
