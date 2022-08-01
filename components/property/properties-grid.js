import Link from "next/link";
import PropertyItem from "./property-item";

const PropertiesGrid = ({ properties }) => {
  return (
    <div className="sec_def home_sec_best_choice">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec_uptitle">Танд санал болгох</div>
            <div className="sec_title">Онцлох үл хөдлөх хөрөнгө</div>
          </div>
        </div>

        <div className="row">
          {properties.map((property) => (
            <PropertyItem property={property} />
          ))}
        </div>
        <div className="all_card">
          <a href="#" className="ghost_button long">
            Бүгдийг харах
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertiesGrid;
