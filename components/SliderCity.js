import React from "react";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import { useProperties } from "hooks/useProperties";

export default function SliderCity({
  handleClickCity,
  selectedCity,
  setSelectedCity,
}) {
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
          <Link href="/realestate">
            <a
              href=""
              onClick={() => {
                handleClickCity();
                setSelectedCity("Улаанбаатар");
              }}
            >
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
          <a href="#">
            <img src="img/darkhan.jpg" alt="зураг" />
            <div className="overlay">
              <div className="o_border">
                <div className="name">Дархан</div>
                <div className="number">10 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/et.jpg" alt="зураг" />
            <div className="overlay">
              <div className="o_border">
                <div className="name">Эрдэнэт</div>
                <div className="number">12 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="cover_city">
          <a href="#">
            <img src="img/baganuur.jpg" alt="зураг" />
            <div className="overlay">
              <div className="o_border">
                <div className="name">Багануур</div>
                <div className="number">5 objects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Slider>
  );
}
