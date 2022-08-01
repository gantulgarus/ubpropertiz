import Link from "next/link";

const PropertyItem = ({ property }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card_v">
        <div className="card_view">
          <div className="over_info">
            <div className="sort">Apartment</div>
            <div className="status">For Rent</div>
          </div>
          <Link href={`/${property.slug}`}>
            <a>
              <img src="img/card1.jpeg" />
            </a>
          </Link>
          <div className="price">320,000€</div>
        </div>
        <div className="card_info">
          <div className="location">
            <i className="fa fa-map-marker" />
            Altea, Spain
          </div>
          <div className="description">
            <a href="/object.html">{property.title}</a>
          </div>
          <div className="specification">
            <div className="spac_one">
              <img src="img/area.png" alt="area" />
              <span>130 m2</span>
            </div>
            <div className="spac_one">
              <img src="img/garage.png" alt="garage" />
              <span>2</span>
            </div>
            <div className="spac_one">
              <img src="img/bathroom.png" alt="bathroom" />
              <span>3</span>
            </div>
            <div className="spac_one">
              <img src="img/bedroom2.png" alt="bedroom2" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
