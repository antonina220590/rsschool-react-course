import { Outlet } from 'react-router-dom';
import Header from '../ui/mainPage/header/header';
import Footer from '../ui/mainPage/footer/footer';

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
