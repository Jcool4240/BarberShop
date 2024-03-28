import { MenuFoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosNotifications } from "react-icons/io";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { jwtDecode } from 'jwt-decode';

const { Header, Sider, Content } = Layout;
const MainLayout = () => {

  const dispatch = useDispatch();
  const hisstory = useNavigate()

  const handleLogout = () => {
    dispatch(logout());

    hisstory("/");
  };

  const use = useSelector((state) => state.auth.user);
  // console.log(use.user.email);
  const decodedToken = jwtDecode(use.token);
  const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            {use ? (
              <>
                <span className="sm-logo">{use.user.firstName}</span>
                <span className="lg-logo">{use.user.lastName}</span>
              </>
            ) : (
              <></>
            )}
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            (role === "Admin" || role === "Owner") && {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Thống kê",
            },
            role === "Admin" && {
              key: "auths",
              icon: <AiOutlineUser className="fs-4" />,
              label: "User",
            },
            role === "Admin" && {
              key: "roles",
              icon: <AiOutlineUser className="fs-4" />,
              label: "ManageUser",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                (role === "Manager" || role === "Owner") && {
                  key: "loaidvs",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Loaidvs List",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "addloaidv",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Loaidv",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "loaisps",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Loaisps List",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "addloaisp",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Add Loaisp",
                },
                role === "Admin" && {
                  key: "chs",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Cua Hang List",
                },
                role === "Admin" && {
                  key: "addch",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Add CH",
                },
                role === "Owner" && {
                  key: "sanphams",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "San Pham List",
                },
                role === "Owner" && {
                  key: "addsanpham",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Add San Pham",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "dichvus",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Dich Vu List",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "adddichvu",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Add Dich Vu",
                },
                role === "Owner" && {
                  key: "chinhanhs",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Chi Nhanh List",
                },
                role === "Owner" && {
                  key: "addchinhanh",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Add Chi Nhanh",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "tcts",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Thợ List",
                },
                (role === "Manager" || role === "Owner") && {
                  key: "addtct",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Add Thợ",
                },
              ],
            },
            (role === "Manager" || role === "Owner") && {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Don Hang List",
            },
            (role === "Manager" || role === "Owner" || role === "Baber") && {
              key: "lichhens",
              icon: <FaClipboardList className="fs-4" />,
              label: "Lich Hen List",
            },
            (role === "Manager" || role === "Owner") && {
              key: "addlichhen",
              icon: <FaClipboardList className="fs-4" />,
              label: "Add Lich Hen",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "10px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              {/* <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span> */}
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://techkalzen.com/wp-content/uploads/2020/05/solo-leveling-4.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {use ? (
                  <>
                    <h5 className="mb-0">{use.user.lastName}</h5>
                    <p className="mb-0">{use.user.email}</p>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/admin"
                  >
                    View Pussy
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    onClick={handleLogout}
                  >
                    Signout
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
