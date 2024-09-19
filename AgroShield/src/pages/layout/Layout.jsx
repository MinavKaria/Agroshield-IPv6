import Navbar from "../../components/navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 60px)",
        }}
      >
      </div>
    </>
  );
}

export default Layout;
