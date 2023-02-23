import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../images/first_slide_carousel.jpg";
import adSpaceImgBlack from "../../images/ad_space_img_black.png";
import thirdSlide from "../../images/Logo/png/logo-white-third-slide.png";

function MainSlider() {
  return (
    <div className="pt-1 pb-3">
      <Carousel
        className="w-75 mx-auto mt-4"
        style={{ backgroundColor: "black" }}
      >
        <Carousel.Item>
          <img
            style={{ height: "20vh" }}
            className="d-block m-auto"
            src={firstSlide}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "20vh" }}
            className="d-block m-auto"
            src={adSpaceImgBlack}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "20vh" }}
            className="d-block m-auto"
            src={thirdSlide}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainSlider;
