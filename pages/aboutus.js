import { getAllAgents } from "lib/api";

const Aboutus = ({ agents }) => {
  return (
    <>
      {/* About us: First screen */}
      {/* <pre>{JSON.stringify(agents, null, 2)}</pre> */}
      <div className="sec_owner sec_ab_about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_title">Бидний тухай</div>
              <div className="sec_uptitle">
                2016 оноос хойш үл хөдлөх хөрөнгө зуучийн чиглэлээр үйл
                ажиллагаа явуулсан
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-md-5 order-md-1 order-1">
              <div className="owner_img">
                <img src="img/about.jpg" alt="зураг" />
              </div>
            </div>
            <div className="col-12 col-md-7 order-md-2 order-2">
              <div className="owner_info">
                <div className="name">Эрхэм зорилго</div>
                <div className="text">
                  Бид иргэд үйлчүүлэгчиддээ чанарын өндөр түвшинд үнэд тохирох,
                  ая тухтай аюулгүй орчинд сэтгэл хангалуун ажиллан амьдрах
                  орчинг бүрдүүлсэн орон сууц, объект, газар хашаа байшингуудаар
                  сэтгэлд тохирсон халуун дулаан үйлчилгээгээр ханган ажиллах
                  болно.
                  <br />
                </div>
                <div className="name">Алсын хараа</div>
                <div className="citation">
                  Харилцаа ёс зүй дээр тулгуурласан Үл хөдлөх хөрөнгө зуучийн
                  үйлчилгээг өндөрт өргөн өнөөгийн болон ирээдүйд дэлхийн
                  тэргүүлэгч компани болох.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.About us: First screen */}
      {/* About us: our team */}
      <div className="sec_ab_team sec_ab_team_onas">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_uptitle">Итгэмжлэгдсэн мэргэжилтнүүд</div>
              <div className="sec_title">Манай баг</div>
            </div>
          </div>
          <div className="row">
            {agents.map((agent) => (
              <div className="col-md-6 col-lg-3" key={agent.name}>
                <div className="team">
                  <div className="img_wrap">
                    <div className="fb_link">
                      <a href={agent.facebook}>
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                    <img className="agent_img" src={agent.image} alt="agent" />
                  </div>
                  <div className="title">{agent.name}</div>
                  <div className="position">Агент</div>
                  <div className="c_phone1">
                    <i className="fa fa-whatsapp" />
                    <span>(+976)</span> {agent.phone}
                  </div>
                  <div className="c_phone1">
                    <i className="fa fa-envelope" />
                    <a href={`mailto:${agent.email}`}>{agent.email}</a>
                  </div>
                  <div className="team_back"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* END.About us: our team */}
      {/* Infographics */}
      <div className="sec_infograf">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="info_one">
                <div className="number">5+</div>
                <div className="text">Ажилласан жил</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="info_one">
                <div className="number">250</div>
                <div className="text">Амжилттай хэлэлцээрүүд</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="info_one">
                <div className="number">140+</div>
                <div className="text">Сэтгэл ханамжтай үйлчлүүлэгчид</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="info_one">
                <div className="number">220</div>
                <div className="text">Үл хөдлөх</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.Infographics */}
    </>
  );
};

export default Aboutus;

export const getStaticProps = async () => {
  const agents = await getAllAgents();
  return {
    props: {
      agents,
    },
    revalidate: 3600,
  };
};
