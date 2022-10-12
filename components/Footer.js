import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { usePosts } from "hooks/usePosts";
import ModalEmail from "./modal-email";

const limit = 2;

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [posts, setPosts] = useState();

  const { data, error, isValidating } = usePosts(posts, pageIndex, limit);
  console.log("Footer posts", data);

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
                    {isValidating ? (
                      <div>Loading...</div>
                    ) : (
                      data.map((post) => (
                        <div className="one_news" key={post._id}>
                          <div className="time">
                            {moment(post.date).format("YYYY-MM-DD")}
                          </div>
                          <div className="text">
                            <Link href={`/blog/${post.slug}`}>
                              <a>{post.title}</a>
                            </Link>
                          </div>
                        </div>
                      ))
                    )}

                    <div className="all">
                      <Link href="/blog">
                        <a>
                          Бүгдийг үзэх{" "}
                          <i className="fa  fa-long-arrow-right " />
                        </a>
                      </Link>
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
                    <Link href="/contacts">
                      <a>
                        Газрын зураг дээр харах
                        <i className="fa  fa-long-arrow-right " />
                      </a>
                    </Link>
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
            <div className="col-6 col-md-4 order-md-1 order-1"></div>
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
