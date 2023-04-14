import React, { useState, Fragment, useMemo } from "react";
import { HomeTemplate } from "../templates/HomeTemplate/HomeTemplate";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import MovieInfo from "../components/DetailMovie/MovieInfo/MovieInfo";
import ShowTime from "../components/DetailMovie/ShowTime/ShowTime";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";
import { Link, useParams } from "react-router-dom";

const DetailMovie = (props) => {
  let [phim, setPhim] = useState([]);
  const [loading, $loading] = useState(true);
  const { maphim } = useParams();
  useMemo(
    () =>
      qLyPhimService.layThongTinPhim(maphim).then((result) => {
        setTimeout(() => {
          setPhim(result.data);
          $loading(false);
        }, 1500);
      }),
    [maphim]
  );

  return (
    <HomeTemplate>
      <Fragment>
        {loading ? (
          <SpinnerLoading />
        ) : (
          <>
            <MovieInfo phimItem={phim} />
            <ShowTime phim={phim} maPhim={maphim} />
          </>
        )}
      </Fragment>
    </HomeTemplate>
  );
};

export default DetailMovie;
