import Link from "next/link";
import SliderCity from "components/SliderCity";
import PropertiesGrid from "components/property/properties-grid";

import {
  getAllLocations,
  getAllProperties,
  getAllPropertyStatus,
  getAllPropertyTypes,
} from "lib/api";
import { useProperties } from "hooks/useProperties";
import SearchForm from "components/search-form";
import { useState } from "react";
import Spinner from "components/utils/Spinner";

const limit = 8;

export default function Home({
  properties,
  propertyTypes,
  propertyStatus,
  propertyLocations,
}) {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchPropertyType, setSearchPropertyType] = useState("");
  const [searchPropertyStatus, setSearchPropertyStatus] = useState("");
  const [searchPropertyLocation, setSearchPropertyLocation] = useState("");

  const [searchStatus, setSearchStatus] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data, error, isValidating } = useProperties(
    properties,
    pageIndex,
    limit,
    searchType,
    searchStatus,
    searchLocation
  );

  console.log("selected city=====: ", selectedCity);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    setSearchStatus(searchPropertyStatus);
    setSearchType(searchPropertyType);
    setSearchLocation(searchPropertyLocation.substring(0, 3));

    // console.log("form submitted ✅", searchStatus);
  };

  const handleClickCity = () => {
    setSearchLocation(selectedCity.substring(0, 3));
  };

  return (
    <>
      {/* <pre>{JSON.stringify(properties, null, 2)}</pre> */}
      {/* First screen */}
      <div className="h_first_sec home_first_sec">
        <div className="container">
          <div className="first_content">
            <div className="first_title">
              Үл хөдлөх хөрөнгө худалдаа, түрээс
            </div>
            <SearchForm
              propertyTypes={propertyTypes}
              propertyStatus={propertyStatus}
              propertyLocations={propertyLocations}
              searchPropertyType={searchPropertyType}
              setSearchPropertyType={setSearchPropertyType}
              searchPropertyStatus={searchPropertyStatus}
              setSearchPropertyStatus={setSearchPropertyStatus}
              searchPropertyLocation={searchPropertyLocation}
              setSearchPropertyLocation={setSearchPropertyLocation}
              handleSubmit={handleSearchSubmit}
            />
          </div>
        </div>
      </div>
      {/* END.First screen */}

      <div className="sec_def home_sec_best_choice">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_uptitle">Танд санал болгох</div>
              <div className="sec_title">Онцлох үл хөдлөх хөрөнгө</div>
            </div>
          </div>
          <div>selectedCity: {selectedCity}</div>
          <div>searchLocation: {searchLocation}</div>
          {isValidating ? <Spinner /> : <PropertiesGrid properties={data} />}
          <div className="all_card">
            <Link href="realestate">
              <a href="#" className="ghost_button long">
                Бүгдийг харах
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="sec_def sec_select_city">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_uptitle">Тодорхой хот хайж байна уу?</div>
              <div className="sec_title">Хүссэн хотоо сонгоно уу</div>
            </div>
          </div>
          <SliderCity
            handleClickCity={handleClickCity}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const properties = await getAllProperties(1, limit);
  const propertyTypes = await getAllPropertyTypes();
  const propertyStatus = await getAllPropertyStatus();
  const propertyLocations = await getAllLocations();

  return {
    props: {
      properties,
      propertyTypes,
      propertyStatus,
      propertyLocations,
    },
    revalidate: 60,
  };
};
