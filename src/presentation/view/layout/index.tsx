import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <ConfigProvider theme={{ token: { colorText: '#1f1f1f' } }}>
        <main style={{ paddingBottom: 36 }}>
          <Outlet />
        </main>
      </ConfigProvider>
      <Footer />
    </>
  );
};

export default Layout;
