import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteASanpham, getASanphamad } from "../features/Sanpham/sanphamSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { getLoaisps } from "../features/Loaisp/loaispSlice";
import { getChs } from "../features/Ch/chSlice";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "maSP",
  },
  {
    title: "Name",
    dataIndex: "tenSP",
    sorter: (a, b) => a.tenSP.length - b.tenSP.length,
  },
  {
    title: "Gia",
    dataIndex: "giaSP",
    sorter: (a, b) => a.giaSP.length - b.giaSP.length,
  },
  {
    title: "Hinh",
    dataIndex: "hinh",
  },
  {
    title: "MoTa",
    dataIndex: "moTa",
  },
  {
    title: "SoLuong",
    dataIndex: "soLuongTon",
  },
  {
    title: "LSP",
    dataIndex: "maLSP",
    sorter: (a, b) => a.maLSP.length - b.maLSP.length,
  },
  {
    title: "CH",
    dataIndex: "maCH",
    sorter: (a, b) => a.maCH.length - b.maCH.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Sanphams = () => {
  const [open, setOpen] = useState(false);
  const use = useSelector((state) => state.auth.user);
  const [sanphamTenSP, setsanphamTenSP] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setsanphamTenSP(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getASanphamad(use.user.maCH));
    dispatch(getLoaisps());
    dispatch(getChs());
  }, []);

  const sanphamstate = useSelector((state) => state.sanpham.Sanphams);
  const loaispstate = useSelector((state) => state.loaisp.Loaisps);
  const chstate = useSelector((state) => state.ch.Chs);

  const data1 = [];
  if (sanphamstate && loaispstate && chstate) {
    for (let i = 0; i < sanphamstate.length; i++) {
      const loaisp = loaispstate.find(
        (lsp) => lsp.maLSP === sanphamstate[i].maLSP
      );
      const tenLSP = loaisp ? loaisp.tenLSP : "";

      const ch = chstate.find((nc) => nc.maCH === sanphamstate[i].maCH);
      const tenCH = ch ? ch.tenCH : "";

      data1.push({
        key: i + 1,
        maSP: sanphamstate[i].maSP,
        tenSP: sanphamstate[i].tenSP,
        giaSP: sanphamstate[i].giaSP,
        hinh: sanphamstate[i].hinh,
        moTa: sanphamstate[i].moTa,
        soLuongTon: sanphamstate[i].soLuongTon,
        maLSP: tenLSP,
        maCH: tenCH,
        action: (
          <>
            <Link
              to={`/admin/sanphams/${sanphamstate[i].maSP}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(sanphamstate[i].maSP)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteSanpham = (e) => {
    dispatch(deleteASanpham(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getASanphamad());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Loai Dịch Vụ List</h3>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteSanpham(sanphamTenSP);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Sanphams;
