import Link from "next/link";
import PropertyItem from "./property-item";

const PropertiesGrid = ({ properties }) => {
  console.log("prop", properties);
  return (
    <div className="row">
      {properties &&
        properties.map((property) => (
          <PropertyItem key={property._id} property={property} />
        ))}
    </div>
  );
};

export default PropertiesGrid;