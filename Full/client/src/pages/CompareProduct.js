import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteALichhen, getALichhenad, getALichhencn, getALichhenus, getLichhens } from "../features/Lichhen/lichhenSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { getDichvus } from "../features/Dichvu/dichvuSlice";
import { getChinhanhs } from "../features/Chinhanh/chinhanhSlice";
import { getTcts } from "../features/Tct/tctSlice";
import { jwtDecode } from 'jwt-decode';

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "maLH",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
  },
  {
    title: "Tên",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Chi nhánh",
    dataIndex: "maCN",
  },

  {
    title: "Ngày",
    dataIndex: "date",
  },
  {
    title: "Giờ",
    dataIndex: "time",
  },
  {
    title: "Dịch vụ",
    dataIndex: "maDV",
  },
  {
    title: "Thợ",
    dataIndex: "maTCT",
  },
  // {
  //   title: "Thao tác",
  //   dataIndex: "action",
  // },
];

const CompareProduct = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [lichhenName, setLichhenName] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setLichhenName(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getALichhenus(user?.user?.id));
    dispatch(getDichvus());
    dispatch(getChinhanhs());
    dispatch(getTcts());
  }, [dispatch, user]);

  const lichhenstate = useSelector((state) => state.lichhen.Lichhens);
  const dichvustate = useSelector((state) => state.dichvu.Dichvus);
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);
  const tctstate = useSelector((state) => state.tct.Tcts);

  const data1 = [];
  if (dichvustate && lichhenstate && chinhanhstate && tctstate) {
    for (let i = 0; i < lichhenstate.length; i++) {
      const dichvu = dichvustate.find((dv) => dv.maDV === lichhenstate[i].maDV);
      const tenDV = dichvu ? dichvu.tenDV : "";

      const chinhanh = chinhanhstate.find((cn) => cn.maCN === lichhenstate[i].maCN);
      const tenCN = chinhanh ? chinhanh.tenCN : "";

      const tct = tctstate.find((tc) => tc.maTCT === lichhenstate[i].maTCT);
      const tenTCT = tct ? tct.tenTCT : "";

      data1.push({
        key: i + 1,
        maLH: lichhenstate[i].maLH,
        phone: lichhenstate[i].phone,
        name: lichhenstate[i].name,
        customer_number: lichhenstate[i].customer_number,
        maCN: tenCN,
        ghiChu: lichhenstate[i].ghiChu,
        date: lichhenstate[i].date,
        time: lichhenstate[i].time,
        maDV: tenDV,
        maTCT: tenTCT,
        action: (
          <>
            <Link to={`/admin/lichhens/${lichhenstate[i].maLH}`} className=" fs-3 text-danger">
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(lichhenstate[i].maLH)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteLichhen = (e) => {
    dispatch(deleteALichhen(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getALichhenad());
    }, 100);
  };

  return (
    <div>
      <h1>Danh sách Lịch Hẹn</h1>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteLichhen(lichhenName);
        }}
        title="Bạn có chắc chắn muốn xóa không?"
      />
    </div>
  );
};

export default CompareProduct;
