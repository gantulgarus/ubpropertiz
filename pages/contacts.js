import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 47.915143,
  lng: 106.904419,
};
const markerPosition = {
  lat: 47.922025,
  lng: -253.097734,
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const contacts = () => {
  return (
    <>
      <div className="sec_c_contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sec_title">Холбоо барих</div>
              <div className="contacts_wrap">
                <div className="c_one">
                  <div className="title">Хаяг</div>
                  <div className="c_location">
                    <i className="fa fa-map-marker" />
                    <span>
                      Чингэлтэй дүүрэг, 5-р хороо, Самбуугийн гудамж, Шуурхай
                      зар центр
                    </span>
                  </div>
                  <div className="c_social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa  fa-twitter" />
                    </a>
                  </div>
                </div>
                <div className="c_one">
                  <div className="title">Утас</div>
                  <div className="c_phone1">
                    <i className="fa fa-whatsapp" />
                    <span>(+976)</span> 9595-4679
                  </div>
                  <div className="c_phone1">
                    <i className="fa fa-fax" />
                    <span>(+976)</span> 9595-4679
                  </div>
                  <div className="c_phone1">
                    <i className="fa fa-envelope" />
                    <a href="mailto:info@email.com">info@ubpropertiz.mn</a>
                  </div>
                </div>
              </div>
              <div className="c_email_wrap">
                <div className="title">Write to us</div>
                <div className="form_underline">
                  <form>
                    <input type="text" placeholder="First Name Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Message" />
                    <button type="submit" className="main_button long">
                      Илгээх
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_wrap">
                <div className="map">
                  <LoadScript googleMapsApiKey="AIzaSyDWqRwqCfW0Pvp2DeZTwBcsfAJQltzCoUE">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={14}
                    >
                      {/* Child components, such as markers, info windows, etc. */}
                      <Marker
                        onLoad={onLoad}
                        position={markerPosition}
                        title="UB Propertiz LLC"
                      />
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.Contacts */}
      {/* Newsletter subscription */}
      <div className="sec_newslatter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newslatter">
                <div className="text">Мэдээлэл авах</div>
                <div className="form_underline">
                  <form>
                    <input type="email" placeholder="Enter your Email" />
                    <button type="submit" className="main_button">
                      Биднийг дагах
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.Newsletter subscription */}
    </>
  );
};

export default contacts;
