import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteATct, getATctad, getATctcn } from "../features/Tct/tctSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { getChinhanhs } from "../features/Chinhanh/chinhanhSlice";
import { jwtDecode } from "jwt-decode";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "maTCT",
  },
  {
    title: "Name",
    dataIndex: "tenTCT",
    sorter: (a, b) => a.tenTCT.length - b.tenTCT.length,
  },
  {
    title: "Chi Nhánh",
    dataIndex: "maCN",
    sorter: (a, b) => a.maCN.length - b.maCN.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Tcts = () => {
  const [open, setOpen] = useState(false);
  const use = useSelector((state) => state.auth.user);
  const [tctTenTCT, settctTenTCT] = useState("");
  const decodedToken = jwtDecode(use.token);
  const role =
    decodedToken[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];

  const showModal = (e) => {
    setOpen(true);
    settctTenTCT(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (role === "Manager") {
      dispatch(getATctcn(use.user.maCN));
    } else {
      dispatch(getATctad(use.user.maCH));
    }
    dispatch(getChinhanhs());
  }, []);

  const tctstate = useSelector((state) => state.tct.Tcts);
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);

  const data1 = [];
  if (tctstate && chinhanhstate) {
    for (let i = 0; i < tctstate.length; i++) {
      const chinhanh = chinhanhstate.find((c) => c.maCN === tctstate[i].maCN);
      const tenCN = chinhanh ? chinhanh.tenCN : "";

      data1.push({
        key: i + 1,
        maTCT: tctstate[i].maTCT,
        tenTCT: tctstate[i].tenTCT,
        maCN: tenCN,
        action: (
          <>
            <Link
              to={`/admin/tcts/${tctstate[i].maTCT}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(tctstate[i].maTCT)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteTct = (e) => {
    dispatch(deleteATct(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getATctad());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Thợ Cắt Tóc List</h3>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteTct(tctTenTCT);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Tcts;
