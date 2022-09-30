import React from "react";
import Link from "next/link";
import Slider from "react-slick";

export default function SliderCity() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    // rows: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="row cover_city_slick slick_def">
      <div className="col-md-3">
        <div className="cover_city">
          <Link href="/realestate?city=Улаанбаатар">
            <a>
              <img src="img/ub.jpg" alt="зураг" />
              <div className="overlay">
                <div className="o_border">
                  <div className="name">Улаанбаатар</div>
                  <div className="number">8 objects</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <Link href="/realestate?city=Дархан">
            <a>
              <img src="img/darkhan.jpg" alt="зураг" />
              <div className="overlay">
                <div className="o_border">
                  <div className="name">Дархан</div>
                  <div className="number">10 objects</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <Link href="/realestate?city=Эрдэнэт">
            <a>
              <img src="img/et.jpg" alt="зураг" />
              <div className="overlay">
                <div className="o_border">
                  <div className="name">Эрдэнэт</div>
                  <div className="number">12 objects</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <Link href="/realestate?city=Багануур">
            <a>
              <img src="img/baganuur.jpg" alt="зураг" />
              <div className="overlay">
                <div className="o_border">
                  <div className="name">Багануур</div>
                  <div className="number">5 objects</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Slider>
  );
}
