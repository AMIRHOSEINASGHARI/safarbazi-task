// cmp
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pages_spaces">{children}</div>
    </div>
  );
};

export default PagesLayout;
