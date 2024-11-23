import "./App.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { images } from "./utils/images";
import ProgressIndicator from "./progress-indicator";

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
  ];

  const handleOnChange = () => {
    console.log("index", swiperRef.current?.realIndex);
    setIndex(swiperRef.current?.realIndex || 0);
  };

  const swiperRef = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        flexDirection: "column",
      }}
    >
      <ProgressIndicator
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleZoomIn={() => {}}
        currentIndex={index}
      />
      {/* Left Arrow */}
      <ArrowBackIosNewIcon
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: isMobile ? "16px" : "620px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: isMobile ? "30px" : "40px",
          color: "red",
          cursor: "pointer",
          zIndex: 10,
        }}
      />

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        mousewheel={true}
        onSlideChange={handleOnChange}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
        className="mySwiper"
        style={{
          width: isMobile ? "100%" : "100%",
          height: isMobile ? "100%" : "90%",
        }}
      >
        {images.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: isMobile ? "90%" : "600px",
              height: isMobile ? "70%" : "800px",
              background: "#ccc",
              borderRadius: "10px",
            }}
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}
      <ArrowForwardIosIcon
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: isMobile ? "16px" : "620px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: isMobile ? "30px" : "40px",
          color: "red",
          cursor: "pointer",
          zIndex: 10,
        }}
      />
    </Box>
  );
}

export default App;
