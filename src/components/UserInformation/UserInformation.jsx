import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./UserInformation.scss";
import { Navigate, NavLink } from "react-router-dom";
import InfoTicketBooked from "./InfoTicketBooked/InfoTicketBooked";
import EditInformation from "./EditInformation/EditInformation";
import { qlyNguoiDung } from "../../services/QuanLyNguoiDungServices";
import { userLogin } from "../../config/setting";
export default function Information() {
  const info = JSON.parse(localStorage.getItem("userLogin"));
  let [thongTin, setThongTin] = useState([]);
  useEffect(() => {
    qlyNguoiDung
      .layThongTinTaiKhoan(JSON.parse(localStorage.getItem(userLogin)))
      .then((result) => {
        setThongTin(result.data);
      });
  }, []);
  const renderAdmin = () => {
    if (info.maLoaiNguoiDung === "QuanTri") {
      return (
        <button className="btn btn-block btn__admin">
          <NavLink className="admin__link" to="/dashboard">
            Tới trang quản trị
          </NavLink>
        </button>
      );
    } else {
      return;
    }
  };

  if (!localStorage.getItem("userLogin")) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="profile container-fluid text-light">
      <div className="row">
        <div className="col-12 col-avt">
          <div className="img-avt p-5 text-center">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="hinhanh" />
          </div>
          <div className="tableInfo">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-left bg-dark">
                <h2 className="info-title">Thông tin cá nhân</h2>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow  scope="row">
                        <TableCell component="th" scope="row">
                          Tài khoản:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.taiKhoan}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Họ tên:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.hoTen}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Nhóm:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.maNhom}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Email:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.email}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Số điện thoại:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.soDT}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <i className="fa fa-user"></i>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.maLoaiNguoiDung}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                {renderAdmin()}
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-dark">
                <div id="accordion">
                  <EditInformation />
                  <InfoTicketBooked thongTin={thongTin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
