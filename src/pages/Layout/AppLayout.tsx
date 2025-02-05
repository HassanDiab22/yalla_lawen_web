import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function AppLayout() {
  return (
    <div className="w-full">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
