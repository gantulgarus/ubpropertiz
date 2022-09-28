import Link from "next/link";
import SliderCity from "components/SliderCity";
import PropertiesGrid from "components/property/properties-grid";

import {
  getAllProperties,
  getAllPropertyStatus,
  getAllPropertyTypes,
} from "lib/api";
import { useProperties } from "hooks/useProperties";
import SearchForm from "components/search-form";
import { useState } from "react";

const limit = 8;

export default function Home({ properties, propertyTypes, propertyStatus }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchPropertyType, setSearchPropertyType] = useState("");
  const [searchPropertyStatus, setSearchPropertyStatus] = useState("");

  const [searchStatus, setSearchStatus] = useState("");
  const [searchType, setSearchType] = useState("");

  const { data, error, isValidating } = useProperties(
    properties,
    pageIndex,
    limit,
    searchType,
    searchStatus
  );

  // console.log("properties=====: ", properties);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    setSearchStatus(searchPropertyStatus);
    setSearchType(searchPropertyType);

    console.log("form submitted ✅", searchStatus);
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
              searchPropertyType={searchPropertyType}
              setSearchPropertyType={setSearchPropertyType}
              searchPropertyStatus={searchPropertyStatus}
              setSearchPropertyStatus={setSearchPropertyStatus}
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
              {searchStatus}
              <div className="sec_uptitle">Танд санал болгох</div>
              <div className="sec_title">Онцлох үл хөдлөх хөрөнгө</div>
            </div>
          </div>
          <PropertiesGrid properties={data} />
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
          <SliderCity />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const properties = await getAllProperties(1, limit);
  const propertyTypes = await getAllPropertyTypes();
  const propertyStatus = await getAllPropertyStatus();

  return {
    props: {
      properties,
      propertyTypes,
      propertyStatus,
    },
    revalidate: false,
  };
};
