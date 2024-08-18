import { Outlet } from 'react-router-dom';
import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
