import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTcts } from "../features/Tct/tctSlice";
import { getChinhanhs } from "../features/Chinhanh/chinhanhSlice";
import { getChs } from "../features/Ch/chSlice";
import { getAuths, getRoles } from "../features/auth/authSlice";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Họ",
    dataIndex: "firstName",
  },
  {
    title: "Tên",
    dataIndex: "lastName",
  },
  {
    title: "TênTK",
    dataIndex: "userName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Cửa Hàng",
    dataIndex: "maCH",
  },
  {
    title: "Chi Nhánh",
    dataIndex: "maCN",
  },
  {
    title: "Thợ",
    dataIndex: "maTCT",
  },
];

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoles());
    dispatch(getAuths());
    dispatch(getChs());
    dispatch(getTcts());
    dispatch(getChinhanhs());
  }, []);

  const authstate = useSelector((state) => state.auth.auth);
  const chstate = useSelector((state) => state.ch.Chs)
  const tctstate = useSelector((state) => state.tct.Tcts)
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);

  const data1 = [];
  if (authstate && chinhanhstate && chstate && tctstate) {
    for (let i = 0; i < authstate.length; i++) {
      const chinhanh = chinhanhstate.find((c) => c.maCN === authstate[i].maCN);
      const tenCN = chinhanh ? chinhanh.tenCN : "";
      const ch = chstate.find((c) => c.maCH === authstate[i].maCH);
      const tenCH = ch ? ch.tenCH : "";
      const tct = tctstate.find((c) => c.maTCT === authstate[i].maTCT);
      const tenTCT = tct ? tct.tenTCT : "";

      data1.push({
        key: i + 1,
        id: authstate[i].id,
        firstName: authstate[i].firstName,
        lastName: authstate[i].lastName,
        userName: authstate[i].userName,
        email: authstate[i].email,
        maCH: tenCH,
        maTCT: tenTCT,
        maCN: tenCN,
      });
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">User List</h3>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
    </div>
  );
};

export default Users;
