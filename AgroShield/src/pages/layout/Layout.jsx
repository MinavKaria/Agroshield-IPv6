// import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
// import Footer from "../../components/footer";

function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{
          minHeight: "calc(100vh + 300px)",
        }}
      >
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
