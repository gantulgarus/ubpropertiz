import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Header */}
      <div className="header_block" />
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3 col-sm-2 col-lg-1">
              <div className="logo">
                <Link href="/">
                  <a href="">
                    <img src="logo.jpg" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-9 col-sm-10 col-lg-11">
              <div className="header_content">
                <div className="languages">
                  <a href="#" className="current">
                    <img src="img/ru.png" alt="ru" />
                  </a>
                  <a href="#">
                    <img src="img/uk.png" alt="uk" />
                  </a>
                  <a href="#">
                    <img src="img/esp.png" alt="esp" />
                  </a>
                </div>
                <div className="contacts_links">
                  <a
                    href="mailto:service@Avados-inmo.es"
                    className="email_link popup-modal"
                  >
                    <i className="fa fa-envelope-o" />{" "}
                    <span>info@ubpropertiz.com</span>
                  </a>
                  <a className="phone_link" href="tel:+34674488970">
                    <i className="fa fa-whatsapp" />{" "}
                    <span> (+976) 9595-4679</span>
                  </a>
                  <a href="#" className="fb_link">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="inst_link">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="site_name">
                    <i className="fa  fa-globe" />
                    www.ubpropertiz.mn
                  </a>
                </div>
                <div className="menu_wrap">
                  <ul className="menu">
                    <li>
                      <a href="real-estate.html">Үл хөдлөх</a>
                    </li>
                    <li>
                      <a href="insurance.html">Insurance</a>
                    </li>
                    <li>
                      <a href="construction.html">Building</a>
                    </li>
                    <li>
                      <a href="vng.html">Residence permit of Spain</a>
                    </li>
                    <li>
                      <a href="blog.html">Мэдээ</a>
                    </li>
                    <li>
                      <a href="o-nas.html">Бидний тухай</a>
                    </li>
                    <li>
                      <Link href="/contacts">
                        <a href="">Холбоо барих</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="adpt_icon">
                    <i className="fa fa-bars" />
                    <i className="fa fa-close" />
                  </div>
                </div>
                <div className="call_button">
                  <a href="#modal_call" className="ghost_button popup-modal">
                    <i className="fa fa-phone" />
                    Залгах
                  </a>
                </div>
                <div className="call_button email_button">
                  <a href="#modal_email" className="ghost_button popup-modal">
                    <i className="fa fa-envelope-o" />
                    Write to us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* END.Header */}
    </>
  );
};

export default Header;
