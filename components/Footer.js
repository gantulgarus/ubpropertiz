const Footer = () => {
  return (
    <>
      <div className="sec_footer">
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-none d-md-block col-md-4 col-lg-2 order-md-1">
              <div className="logo_wrap">
                <img src="img/logo_footer.png" alt />
                <img src="img/qr.png" alt />
              </div>
            </div>
            <div className="col-md-8 col-lg-3 order-md-2 order-3">
              <div className="f_last_news_wrap">
                <div className="f_last_news_wrap">
                  <div className="f_title">Last news</div>
                  <div className="last_news">
                    <div className="one_news">
                      <div className="time">12.11.2019</div>
                      <div className="text">
                        <a href="#">
                          The reconstructed lofts in the centuries-old became
                          the Russian national industrial …
                        </a>
                      </div>
                    </div>
                    <div className="one_news">
                      <div className="time">12.11.2019</div>
                      <div className="text">
                        <a href="#">
                          Press Release: Russian National Concrete Structure of
                          the Year.
                        </a>
                      </div>
                    </div>
                    <div className="all">
                      <a href="#">
                        Show all <i className="fa  fa-long-arrow-right " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 order-md-3 order-md-2 order-2">
              <div className="f_adress_wrap">
                <div className="f_title">Address</div>
                <div className="adress">
                  <div className="text">
                    Street name 1-24, <br />
                    Area, City name, <br />
                    Country
                    <br />
                  </div>
                  <div className="all">
                    <a href="#">
                      View on the map <i className="fa  fa-long-arrow-right " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 order-md-4 order-1">
              <div className="f_contacts_wrap">
                <div className="f_title">Contact us</div>
                <div className="contacts">
                  <div className="phone">
                    <i className="fa fa-whatsapp" />
                    <span>
                      <span>(+34)</span> 674-488-970
                    </span>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope" />
                    <span>service@Avados-inmo.es</span>
                  </div>
                  <div className="call">
                    <a
                      href="#modal_call"
                      className="ghost_button line popup-modal"
                    >
                      Request a call back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec_copyright">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 order-md-1 order-1">
              <div className="languages">
                <a href="#" className="current">
                  <img src="img/ru.png" alt />
                </a>
                <a href="#">
                  <img src="img/uk.png" alt />
                </a>
                <a href="#">
                  <img src="img/esp.png" alt />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 order-md-2 order-3">
              <div className="copyright_text">
                © 2019 – Avados of London, Estate Agents
              </div>
            </div>
            <div className="col-6 col-md-4 order-md-3 order-2">
              <div className="contacts_links">
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
