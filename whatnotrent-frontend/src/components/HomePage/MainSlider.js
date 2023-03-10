import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../images/logo_big.png";
import adSpaceImgBlack from "../../images/second_slide.png";
import thirdSlide from "../../images/third_slide.png";

function MainSlider() {
    return (
        <div className="pt-1 pb-3">
            <Carousel variant="dark" className="w-75 mx-auto mt-4" style={{ backgroundColor: "white" }}>
                <Carousel.Item>
                    <img style={{ height: "20vh" }} className="d-block m-auto" src={firstSlide} alt="First slide" />
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
                    <img style={{ height: "20vh" }} className="d-block m-auto" src={thirdSlide} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainSlider;
