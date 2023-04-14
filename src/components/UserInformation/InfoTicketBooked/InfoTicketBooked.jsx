import React from "react";
import QRCode from 'qrcode.react';
export default function InfoTicketBooked(props) {
  var moment = require("moment");
  let { thongTin } = props;
  const renderInfoBooking = () => {
    return thongTin.thongTinDatVe?.map((ticket, index) => {
      return (
        <tr key={index}>
          <th scope="row">{"#" + Math.floor(Math.random() * 99999)}</th>
          <td>{ticket.tenPhim}</td>
          <td>
            {moment(ticket.ngayDat).format("DD-MM-yyyy")}
            <p>{moment(ticket.ngayDat).format("DD-MM-yyyy")}</p>
          </td>
          <td>
            <ul>
              {ticket.danhSachGhe?.map((ghe, index) => {
                return <li key={index}>Ghế: {ghe.tenGhe}</li>;
              })}
            </ul>
          </td>
          <td>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#QRModal">
              QR
            </button>
          </td>

          <div className="modal fade" id="QRModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Mã QR thông tin vé</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body mx-auto">
                  <QRCode
                    id='qrcode'
                    value={moment(ticket.ngayDat).format("DD-MM-yyyy")+"-"+moment(ticket.ngayDat).format("DD-MM-yyyy")}
                    size={290}
                    level={'H'}
                    includeMargin={true}
                  />
                </div>
                <div className="modal-footer">
                  <i>* vui lòng không chia sẽ mã QR</i>
                </div>
              </div>
            </div>
          </div>
        </tr>
      );
    });
  };
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <h4 className="text-dark" style={{ textDecoration: "none" }}>
              Lịch sử đặt vé
            </h4>
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">
          <table className="table table-hover">
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col">Mã vé</th>
                <th scope="col">Tên phim</th>
                <th scope="col">Thời gian đặt</th>
                <th scope="col">Số ghế</th>
                <th scope="col">Mã QR</th>
              </tr>
            </thead>
            <tbody>{renderInfoBooking()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};