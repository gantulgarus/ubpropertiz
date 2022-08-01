import React from "react";
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
          <a href="#">
            <img src="img/city1.jpeg" alt />
            <div className="overlay">
              <div className="o_border">
                <div className="name">Benidorm</div>
                <div className="number">8 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/city1.jpeg" alt />
            <div className="overlay">
              <div className="o_border">
                <div className="name">Altea</div>
                <div className="number">10 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/city2.jpeg" alt />
            <div className="overlay">
              <div className="o_border">
                <div className="name">El Albir</div>
                <div className="number">12 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/city3.jpeg" alt />
            <div className="overlay">
              <div className="o_border">
                <div className="name">Moraira</div>
                <div className="number">5 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/city1.jpeg" alt />
            <div className="overlay">
              <div className="o_border">
                <div className="name">2 Benidorm</div>
                <div className="number">28 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/city1.jpeg" alt />
            <div className="overlay">
              <div className="o_border">
                <div className="name">2 Altea</div>
                <div className="number">28 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Slider>
  );
}
