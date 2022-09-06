import { useState, useCallback } from "react";
import Layout from "components/layout/Layout";
import { getPropertyBySlug, getAllProperties } from "lib/api";

import CurrencyFormat from "react-currency-format";
import ImageViewer from "react-simple-image-viewer";

const PropertyDetailPage = ({ property }) => {
  const [showAllImage, setShowAllImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
    <Layout>
      {/* <pre>{JSON.stringify(property, null, 2)}</pre> */}
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
                          index < 4 || showAllImage
                            ? "gall_link  visib"
                            : "gall_link"
                        }
                        onClick={() => openImageViewer(index)}
                        key={index}
                      >
                        <img
                          className="gall_img"
                          src={image.src}
                          alt="gall_img"
                        />
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
                    />
                  )}
                </div>
                <div className="sold_wrap">
                  <div className="sold">Sold</div>
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
                  <span>Street 1-13, Province, Barcelona</span>
                </div>
                <div className="specification">
                  <div className="spac_one">
                    <img src="img/area.png" alt="area" />
                    <span>{property.square} m2</span>
                  </div>
                  <div className="spac_one">
                    <img src="img/garage.png" alt="garage" />
                    <span>{property.garage}</span>
                  </div>
                  <div className="spac_one">
                    <img src="img/bathroom.png" alt="bathroom" />
                    <span>{property.bathroom}</span>
                  </div>
                  <div className="spac_one">
                    <img src="img/bedroom2.png" alt="bedroom" />
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
                    <div className="id_obj">
                      Property ID: <span>SFDF2564</span>
                    </div>
                    <a
                      href="#modal_call"
                      className="main_button long popup-modal"
                    >
                      Request demonstration
                    </a>
                  </div>
                  <div className="tech_info">
                    <div className="ti_left">
                      <div className="sold_wrap">
                        <div className="sold">Sold</div>
                      </div>
                      <div className="til_print_id">
                        <a className="print" href="javaScript:window.print();">
                          <i className="fa fa-print" />
                        </a>
                        <div className="id_obj">
                          Property ID: <span>SFDF2564</span>
                        </div>
                      </div>
                    </div>
                    <div className="ti_right">
                      <div className="qr">
                        <img src="img/qr2.png" alt="qr" />
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
                        <span>Property Type</span>
                        <span>Casa, House, Villa</span>
                      </li>
                      <li>
                        <span>Land area</span>
                        <span>2445 m2</span>
                      </li>
                      <li>
                        <span>Bedrooms</span>
                        <span>4</span>
                      </li>
                      <li>
                        <span>Garage</span>
                        <span>Yes</span>
                      </li>
                      <li>
                        <span>Bathrooms</span>
                        <span>2</span>
                      </li>
                      <li>
                        <span>Pool</span>
                        <span>Да</span>
                      </li>
                      <li>
                        <span>Year of construction</span>
                        <span>2013</span>
                      </li>
                      <li>
                        <span>Garden</span>
                        <span>Yes</span>
                      </li>
                      <li>
                        <span>Living Area</span>
                        <span>223 m2</span>
                      </li>
                      <li>
                        <span>Parking</span>
                        <span>Yes</span>
                      </li>
                      <li>
                        <span>Total area</span>
                        <span>2445 m2</span>
                      </li>
                      <li>
                        <span>View</span>
                        <span>On the sea</span>
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
                      <li> AC &amp; Heating </li>
                      <li>Balcony</li>
                      <li>Clubhouse</li>
                      <li>Dishwasher</li>
                      <li>Elevator</li>
                      <li>Laundry service </li>
                      <li>Modern kitchen</li>
                      <li>Pool</li>
                      <li>Spa</li>
                      <li>Fitness center </li>
                      <li>Granite countertops</li>
                      <li>Storage Units</li>
                      <li>Tennis court</li>
                      <li>Parking</li>
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
                    <div className="text_wrap">
                      <p>
                        At sonet philosophia deterruisset vih. Ei facilisis
                        dignissim voluptatum nam, ferri salutandi id vel, nulla
                        jauando efficiantur ea duo. In solet laudem ius,
                        appareat scriptorem vis te. Sapientem scripserit his no.
                        Et verterem vituperatoribus vih. Et eos admodum
                        erroribus, tale aejaue commune ei eum, vih ut perfecto
                        reformidans.
                      </p>
                      <p>
                        Vis ut dicta dicant adolescens, graeci labores eh vih.
                        Eos adipisci appellantur eh.{" "}
                      </p>
                    </div>
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
                    <div className="map_wrap"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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

export default PropertyDetailPage;
