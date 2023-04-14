import React, { Fragment } from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from '@mui/material/MenuItem';
import MenuList from "@mui/material/MenuList";
import logo from "../../images/logo-removebg-preview.png"
import { dangXuatAction } from "../../redux/actions/QuanLyNguoiDungActions";
import { userLogin } from "../../config/setting";

export default function Header(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const taiKhoan = useSelector(
    (state) => state.QuanLyNguoiDungReducer.taiKhoan
  );

  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(dangXuatAction());
  };
  const renderMenuControl = () => {
    if (
      JSON.parse(localStorage.getItem(userLogin)).maLoaiNguoiDung === "QuanTri"
      
    ) {
      return (
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/dashboard"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <i className="fa fa-user mr-1"></i>
            Admin
          </NavLink>
        </MenuItem>
      );
    } else {
      return null;
    }
  };
  const renderLogin = () => {
    if (taiKhoan) {
      return (
        <Fragment>
          <div
            className="login__link"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="user" />
            <span className="login__text">{taiKhoan}</span>
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {renderMenuControl()}
                      <MenuItem onClick={handleClose}>
                        <NavLink
                          to="/profile"
                          style={{ textDecoration: "none", color: "#333" }}
                        >
                          <i className="fa fa-user mr-1"></i>
                          Profile
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={LogOut}> 
                        <i className="fa fa-sign-out-alt mr-1"></i>Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
      );
    }
    return (
      <NavLink className="login__link" to="/login">
        <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="user" />
        <span className="login__text">Đăng Nhập</span>
      </NavLink>
    );
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="logo"
            />
            <span className="text-logo ml-2">Movie Ticket</span>
          </NavLink>
        </div>
        <div className="header__mobile">
          <div className="header__login">{renderLogin()}</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active btn-neon">
              <NavLink className="nav-link" to="/allmovie">
                <div className="d-flex flex-row">
                  <i className="fa fa-film"></i>
                  <span>Phim</span>
                </div>
                
              </NavLink>
            </li>
            <li className="nav-item btn-neon">
              <NavLink className="nav-link" to="/clustercinema">
                <div className="d-flex flex-row">
                  <i className="fa fa-project-diagram" />
                  <span>Cụm Rạp</span>
                </div>
                
              </NavLink>
            </li>
            <li className="nav-item btn-neon">
              <NavLink className="nav-link" to="/news">
                <div className="d-flex flex-row">
                  <i className="fa fa-newspaper" />
                  <span>Tin Tức</span>
                </div>
                
              </NavLink>
            </li>
            <li className="nav-item btn-neon">
              <NavLink className="nav-link" to="/#forMobile">
                <div className="d-flex flex-row">
                  <i className="fa fa-mobile" />
                  <span>Ứng dụng</span>
                </div>
                
              </NavLink>
            </li>
          </ul>
          <div className="header__login">{renderLogin()}</div>
        </div>
      </nav>
    </header>
  );
}
