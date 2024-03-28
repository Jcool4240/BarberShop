import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteALichhen, getALichhenad, getALichhencn, getALichhentct } from "../features/Lichhen/lichhenSlice";
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
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Số Khách",
    dataIndex: "customer_number",
    sorter: (a, b) => a.customer_number.length - b.customer_number.length,
  },
  {
    title: "Chi Nhánh",
    dataIndex: "maCN",
  },
  {
    title: "Note",
    dataIndex: "ghiChu",
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
    title: "Dịch Vụ",
    dataIndex: "maDV",
  },
  {
    title: "Thợ",
    dataIndex: "maTCT",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Lichhens = () => {
  const [open, setOpen] = useState(false);
  const use = useSelector((state) => state.auth.user);
  const decodedToken = jwtDecode(use.token);
  const role =
    decodedToken[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];
  const [lichhenName, setlichhenName] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setlichhenName(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if(role === "Manager")
    {
      dispatch(getALichhencn(use.user.maCN));
    }
    if(role === "Baber")
    {
      dispatch(getALichhentct(use.user.maTCT));
    }
    else
    {
      dispatch(getALichhenad(use.user.maCH));
    }
    dispatch(getDichvus())
    dispatch(getChinhanhs())
    dispatch(getTcts())
  }, []);

  const lichhenstate = useSelector((state) => state.lichhen.Lichhens);
  const dichvustate = useSelector((state) => state.dichvu.Dichvus);
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);
  const tctstate = useSelector((state) => state.tct.Tcts);
  

  const data1 = [];
  if (dichvustate && lichhenstate && chinhanhstate && tctstate) {
    for (let i = 0; i < lichhenstate.length; i++) {
      const dichvu = dichvustate.find(
        dv => dv.maDV === lichhenstate[i].maDV
      );
      const tenDV = dichvu ? dichvu.tenDV : "";

      const chinhanh = chinhanhstate.find(
        cn => cn.maCN === lichhenstate[i].maCN
      );
      const tenCN = chinhanh ? chinhanh.tenCN : "";

      const tct = tctstate.find(
        tc => tc.maTCT === lichhenstate[i].maTCT
      );
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
            <Link
              to={`/admin/lichhens/${lichhenstate[i].maLH}`}
              className=" fs-3 text-danger"
            >
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
      <h3 className="mb-4 title">Lịch Hẹn List</h3>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteLichhen(lichhenName);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Lichhens;
