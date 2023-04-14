import React from "react";
import "../Carousel/Carousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import BookTicket from "../BookTicket/BookTicket";
export default function Carousel() {
  return (
    <div className="hotMovie">
      <div className="hotMovie__content">
        <OwlCarousel
          loop
          nav
          autoplay
          items={1}
          className="myHotMovieCarousel owl-carousel owl-theme"
        >
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://static2.vieon.vn/vieplay-image/thumbnail_big_v4/2022/09/22/89qrchpq_1920x1080-avengershoiket_1267_712.jpeg"
                alt="phim soi"
              />
              <div className="background__overlay">
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/05/vi-anh-deo-tin-15906776637571.png"
                alt="hinh anh phim"
              />
              <div className="background__overlay">
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img
                className="img-fluid"
                src="https://s3img.vcdn.vn/123phim/2020/07/ban-dao-15954792351353.jpg"
                alt="va phim cua hinh anh"
              />
              <div className="background__overlay">
                <i className="fa fa-play carousel__button" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* <BookTicket /> */}
    </div>
  );
}
