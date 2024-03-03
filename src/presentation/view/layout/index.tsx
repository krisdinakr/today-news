import { Outlet } from 'react-router-dom';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: 36 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
