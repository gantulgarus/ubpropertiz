import { useState } from "react";
import Image from "next/image";
import ModalCall from "./modal-call";
import ModalEmail from "./modal-email";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && <ModalEmail closeModal={closeModal} />}
      <div className="sec_footer">
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-none d-md-block col-md-4 col-lg-2 order-md-1">
              <div className="logo_wrap">
                <Image
                  src="/logo.png"
                  alt="footer-logo"
                  width={97}
                  height={105}
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-3 order-md-2 order-3">
              <div className="f_last_news_wrap">
                <div className="f_last_news_wrap">
                  <div className="f_title">Сүүлийн мэдээ</div>
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
                <div className="f_title">Хаяг</div>
                <div className="adress">
                  <div className="text">
                    Чингэлтэй дүүрэг,
                    <br />
                    5-р хороо, Самбуугийн гудамж,
                    <br />
                    Шуурхай зар центр
                    <br />
                  </div>
                  <div className="all">
                    <a href="#">
                      Газрын зураг дээр харах
                      <i className="fa  fa-long-arrow-right " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 order-md-4 order-1">
              <div className="f_contacts_wrap">
                <div className="f_title">Холбоо барих</div>
                <div className="contacts">
                  <div className="phone">
                    <i className="fa fa-whatsapp" />
                    <span>
                      <span>(+976)</span> 9595-4679
                    </span>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope" />
                    <span>info@ubpropertiz.mn</span>
                  </div>
                  <div className="call">
                    <a
                      href="#modal_call"
                      className="ghost_button line popup-modal"
                      onClick={openModal}
                    >
                      Залгах
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
              {/* <div className="languages">
                <a href="#" className="current">
                  <Image src="/img/mn.png" alt="mn" width={22} height={15} />
                </a>
                <a href="#">
                  <Image src="/img/uk.png" alt="uk" width={22} height={15} />
                </a>
                <a href="#">
                  <Image src="/img/ru.png" alt="ru" width={22} height={15} />
                </a>
              </div> */}
            </div>
            <div className="col-12 col-md-4 order-md-2 order-3">
              <div className="copyright_text">
                Их хотын барилга Пропертиз ХХК © 2022 – Бүх эрх хуулиар
                хамгаалагдсан.
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
