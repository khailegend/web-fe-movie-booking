import React, { Fragment } from "react";
import { HomeTemplate } from "../templates/HomeTemplate/HomeTemplate";
// import Carousel from "../components/Carousel/Carousel";
// import ListMovie from "../components/ListMovie/ListMovie";
// import News from "../components/News/News";
// import AppMobile from "../components/AppMobile/AppMobile";
// import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";
// import ScrollAnimation from "react-animate-on-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { qLyPhimService } from "../services/QuanLyPhimServices";
// import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";

export default function Home() {
  const control = useAnimation();
  // let [danhSachPhim, setDanhSachPhim] = React.useState([]);
  // const [loading, $loading] = React.useState(true);

  // React.useEffect(() => {
  //   qLyPhimService
  //     .layDanhSachPhim()
  //     .then((result) => {
  //       if (result) {
  //         setTimeout(() => {
  //           setDanhSachPhim(result.data);
  //           $loading(false);
  //         }, 1500);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }, []);
  return (
    // <Fragment>
    //   {loading ? (
    //     <SpinnerLoading />
    //   ) : (
    //     <Fragment>
    //       <Carousel />
    //       <ListMovie danhSachPhim={danhSachPhim} />
    //       <ScrollAnimation animateIn="fadeIn">
    //         <ShowTimeHome />
    //       </ScrollAnimation>
    //       <ScrollAnimation animateIn="zoomIn">
    //         <News />
    //       </ScrollAnimation>
    //       <AppMobile />
    //     </Fragment>
    //   )}
    // </Fragment>

    <HomeTemplate>
       <Fragment>
       <motion.div animate={control}>
        tab home page 
        </motion.div>
      </Fragment>
    </HomeTemplate>
  );
}
