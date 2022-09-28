import PropertiesGrid from "components/property/properties-grid";
import SearchForm from "components/search-form";

import {
  getAllProperties,
  getAllPropertyTypes,
  getAllPropertyStatus,
} from "lib/api";
import { useProperties } from "hooks/useProperties";

import { useState } from "react";
import Pagination from "components/pagination";

const limit = 3;

const RealState = ({ properties, propertyTypes, propertyStatus }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchStatus(searchPropertyStatus);
    setSearchType(searchPropertyType);

    console.log("form submitted ✅");
  };

  return (
    <>
      {/* First screen */}
      <div className="h_first_sec sec_estate_first">
        <div className="container">
          <div className="first_content">
            <SearchForm
              propertyTypes={propertyTypes}
              propertyStatus={propertyStatus}
              value={searchPropertyType}
              setSearchPropertyType={setSearchPropertyType}
              searchPropertyStatus={searchPropertyStatus}
              setSearchPropertyStatus={setSearchPropertyStatus}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      {/* END.First screen */}

      {/* Best offers */}
      <div className="sec_estate_result">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sec_result_wrap">
                <div className="sec_title">Хайлтын үр дүн</div>
                <div className="sec_result">({data.length})</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec_result_sort">
                <div className="form_select_wrap">
                  <select name="status" id="search_sort">
                    <option value="Sort by">Филтер</option>
                    <option value="Price">Price</option>
                    <option value="Rooms">Rooms</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {isValidating ? (
            <div>Түр хүлээнэ үү...</div>
          ) : (
            <PropertiesGrid properties={data} />
          )}

          <div className="col-md-12">
            <Pagination
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              limit={limit}
              total={properties.length}
            />
          </div>
        </div>
      </div>
      {/* END.Best offers */}

      <br />
      <br />
      <br />

      {/* Our partners */}
      <div className="sec_partner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-5">
              <div className="sec_title">Хамтран ажиллагч байгууллагууд</div>
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="partner">
                <div className="one">
                  <img src="img/BANCO-POPULAR.png" alt="зураг" />
                </div>
                <div className="one">
                  <img src="img/Banco-Sabadell.png" alt="зураг" />
                </div>
                <div className="one">
                  <img src="img/bbva.png" alt="зураг" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.Our partners */}

      {/* Request a free call for consultation */}
      <div className="sec_call sec_call_white">
        <div className="container">
          <div className="sec_call_wrap">
            <div className="row ">
              <div className=".d-none .d-lg-block .d-xl-block col-lg-5">
                <img src="img/call_img2.jpg" alt="зураг" className="left_img" />
              </div>
              <div className="col-md-12 col-lg-7">
                <div className="sec_title">
                  <span>Subscribe</span> and receive <br /> special offers
                </div>
                <div className="form_underline">
                  <form>
                    <input type="email" placeholder="Email" />
                    <div className="form_select_wrap">
                      <select>
                        <option value>What are you looking for?</option>
                        <option value="Residence permit">House</option>
                        <option value="Real estate">Flat</option>
                      </select>
                    </div>
                    <button type="submit" className="main_button">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.Request a free call for consultation */}
    </>
  );
};

export default RealState;

export const getStaticProps = async () => {
  const properties = await getAllProperties(1, 4, "");
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
