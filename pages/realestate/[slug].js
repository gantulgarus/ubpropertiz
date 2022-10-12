import { useState, useCallback } from "react";
import Image from "next/image";
import { getPropertyBySlug, getAllProperties } from "lib/api";

import CurrencyFormat from "react-currency-format";
import ImageViewer from "react-simple-image-viewer";
import ModalEmail from "components/modal-email";

const PropertyDetailPage = ({ property }) => {
  const [showAllImage, setShowAllImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const toggleClass = () => {
    setShowAllImage(!showAllImage);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(property, null, 2)}</pre> */}
      {showModal && (
        <ModalEmail
          closeModal={closeModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {/* <!-- First screen --> */}
      <div className="sec_first_obj ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="gall_wrap">
                <div
                  className="popup-gallery slick_def"
                  id="gall_wrap_construction"
                >
                  {property.imagesGallery != null &&
                    property.imagesGallery.map((image, index) => (
                      <a
                        className={
                          index < 7 || showAllImage
                            ? "gall_link  visib"
                            : "gall_link"
                        }
                        onClick={() => openImageViewer(index)}
                        key={index}
                      >
                        <div className="gall_img">
                          <Image
                            src={image.src}
                            alt="gall_img"
                            layout="fill"
                            placeholder="blur"
                            blurDataURL={image.src}
                          />
                        </div>
                        <div className="overlay">
                          <div className="o_border">
                            <div className="big">
                              <i className="fa fa-search-plus" />
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  {isViewerOpen && (
                    <ImageViewer
                      src={property.imagesGallery.map((img) => img.src)}
                      currentIndex={currentImage}
                      disableScroll={true}
                      closeOnClickOutside={true}
                      onClose={closeImageViewer}
                      backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                      }}
                      style={{ zIndex: 10 }}
                    />
                  )}
                </div>

                <div
                  className="see_all"
                  id="see_all_construction"
                  onClick={toggleClass}
                >
                  Бүх зураг
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.First screen */}

      <div className="clearfix" />
      <div className="sec_info_obj">
        <div className="container">
          <div className="info_head">
            <div className="row ">
              <div className="col-md-12 col-lg-5">
                <div className="title">{property.title}</div>
                <div className="location">
                  <i className="fa fa-map-marker" />
                  <span>{property.location}</span>
                </div>
                <div className="specification">
                  <div className="spac_one">
                    <img src="../img/area.png" alt="area" />
                    <span>{property.square} m2</span>
                  </div>
                  <div className="spac_one">
                    <img src="../img/garage.png" alt="garage" />
                    <span>{property.garage}</span>
                  </div>
                  <div className="spac_one">
                    <img src="../img/bathroom.png" alt="bathroom" />
                    <span>{property.bathroom}</span>
                  </div>
                  <div className="spac_one">
                    <img src="../img/bedroom2.png" alt="bedroom" />
                    <span>{property.bedroom}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7">
                <div className="price_info_wrap_col">
                  <div className="price_order_wrap">
                    <div className="price">
                      <CurrencyFormat
                        value={property.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" ₮"}
                      />
                    </div>
                    <a
                      href="#modal_call"
                      className="main_button long popup-modal"
                      onClick={openModal}
                    >
                      Хүсэлт илгээх
                    </a>
                  </div>
                  <div className="tech_info">
                    <div className="ti_left">
                      {property.status === "Зарагдсан" ? (
                        <div className="sold_wrap">
                          <div className="sold">{property.status}</div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="til_print_id">
                        <a className="print" href="">
                          <i className="fa fa-print" />
                        </a>
                        <div className="id_obj">
                          Үл хөдлөх ID: <span>{property.propertyId}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ti_right">
                      <div className="qr">
                        <img src="../img/qr2.png" alt="qr" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spec_info_wrap">
            <div className="specification_row">
              <div className="row">
                <div className="col-md-3">
                  <div className="title">Мэдээлэл</div>
                </div>
                <div className="col-md-9">
                  <div className="right_wrap_line">
                    <ul>
                      <li>
                        <span>Төрөл</span>
                        <span>{property.type}</span>
                      </li>
                      <li>
                        <span>Талбай</span>
                        <span>{property.square} m2</span>
                      </li>
                      <li>
                        <span>Унтлагын өрөө</span>
                        <span>{property.bedroom}</span>
                      </li>
                      <li>
                        <span>Граж</span>
                        <span>{property.garage}</span>
                      </li>
                      <li>
                        <span>Угаалгын өрөө</span>
                        <span>{property.bathroom}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spec_info_wrap">
            <div className="features_row">
              <div className="row">
                <div className="col-md-3">
                  <div className="title">Нэмэлт үзүүлэлт</div>
                </div>
                <div className="col-md-9">
                  <div className="right_wrap_line">
                    <ul>
                      {property.property_feature &&
                        property.property_feature.map((item) => (
                          <li key={item._id}>
                            <span>{item.label}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spec_info_wrap">
            <div className="description_row">
              <div className="row">
                <div className="col-md-3">
                  <div className="title">Тайлбар</div>
                </div>
                <div className="col-md-9">
                  <div className="right_wrap_line">
                    <div className="text_wrap">{property.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spec_info_wrap">
            <div className="map_row">
              <div className="row">
                <div className="col-md-3">
                  <div className="title">Байршил</div>
                </div>
                <div className="col-md-9">
                  <div className="right_wrap_line">
                    <div className="map_wrap">{property.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;

export const getStaticProps = async ({ params }) => {
  const property = await getPropertyBySlug(params.slug);
  return {
    props: {
      property: property[0],
    },
  };
};

export const getStaticPaths = async () => {
  const properties = await getAllProperties();
  const data = properties.map((property) => ({
    params: {
      slug: property.slug,
    },
  }));
  return {
    paths: data,
    fallback: false,
  };
};
