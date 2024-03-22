import BanOne from "../src/assets/rd.jpg"
import BanTwo from "../src/assets/rs.jpg"
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}
    ><MdNavigateNext /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev1" onClick={onClick}
    ><GrFormPrevious /></div>
  );
}


function App() {
  var settings = {
    dots: true,
    infinite: true,
    // arrows: false,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          <div className="main">
            <img src={BanOne} alt={BanOne} />
          </div>
          <div className="main">
            <img src={BanTwo} alt={BanTwo} />
          </div>
          <div className="main">
            <img src={BanOne} alt={BanOne} />
          </div>
          <div className="main">
            <img src={BanTwo} alt={BanTwo} />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default App
