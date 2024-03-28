import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Loaidvs from "./pages/Loaidv";
import Addloaidv from "./pages/Addloaidv";
import Loaisps from "./pages/Loaisp";
import Addloaisp from "./pages/Addloaisp";
import Chs from "./pages/Ch";
import Addch from "./pages/Addch";
import Dichvus from "./pages/Dichvu";
import Adddichvu from "./pages/Adddichvu";
import Sanphams from "./pages/Sanpham";
import Addsanpham from "./pages/Addsanpham";
import Chinhanhs from "./pages/Chinhanh";
import Addchinhanh from "./pages/AddChinhanh";
import Tcts from "./pages/Tct";
import Addtct from "./pages/Addtct";
import Lichhens from "./pages/Lichhen";
import Addlichhen from "./pages/Addlichhen";
import Users from "./pages/Users";
import Newrole from "./pages/Newrole";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="auths" element={<Users />} />
          <Route path="roles" element={<Newrole />} />
          <Route path="loaidvs" element={<Loaidvs />} />
          <Route path="addloaidv" element={<Addloaidv />} />
          <Route path="loaidvs/:id" element={<Addloaidv />} />
          <Route path="loaisps" element={<Loaisps />} />
          <Route path="addloaisp" element={<Addloaisp />} />
          <Route path="loaisps/:id" element={<Addloaisp />} />
          <Route path="chs" element={<Chs />} />
          <Route path="addch" element={<Addch />} />
          <Route path="chs/:id" element={<Addch />} />
          <Route path="dichvus" element={<Dichvus />} />
          <Route path="adddichvu" element={<Adddichvu />} />
          <Route path="dichvus/:id" element={<Adddichvu />} />
          <Route path="sanphams" element={<Sanphams />} />
          <Route path="addsanpham" element={<Addsanpham />} />
          <Route path="sanphams/:id" element={<Addsanpham />} />
          <Route path="chinhanhs" element={<Chinhanhs />} />
          <Route path="addchinhanh" element={<Addchinhanh />} />
          <Route path="chinhanhs/:id" element={<Addchinhanh />} />
          <Route path="tcts" element={<Tcts />} />
          <Route path="addtct" element={<Addtct />} />
          <Route path="tcts/:id" element={<Addtct />} />
          <Route path="lichhens" element={<Lichhens />} />
          <Route path="addlichhen" element={<Addlichhen />} />
          <Route path="lichhens/:id" element={<Addlichhen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
