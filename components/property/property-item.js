import Link from "next/link";
import CurrencyFormat from "react-currency-format";

import { urlFor } from "lib/api";

const PropertyItem = ({ property }) => {
  console.log("property item: ", property);
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card_v">
        <div className="card_view">
          <div className="over_info">
            <div className="sort">{property.type}</div>
            <div className="status">{property.status}</div>
          </div>
          <Link href={`/${property.slug}`}>
            <a>
              <img
                src={urlFor(property.featured_image)
                  .width(280)
                  .height(207)
                  .url()}
              />
            </a>
          </Link>
          {property.status == "Зарагдсан" ? (
            <div className="price sold">{property.status}</div>
          ) : (
            <div className="price">
              <CurrencyFormat
                value={property.price}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" ₮"}
              />
            </div>
          )}
        </div>
        <div className="card_info">
          <div className="location">
            <i className="fa fa-map-marker" />
            {property.location}
          </div>
          <div className="description">
            <a href="/object.html">{property.title}</a>
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
              <img src="img/bedroom2.png" alt="bedroom2" />
              <span>{property.bedroom}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
