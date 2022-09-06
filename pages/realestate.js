import PropertiesGrid from "components/property/properties-grid";

import { getAllProperties } from "lib/api";

import { useState } from "react";
import useSWR from "swr";

const PAGE_LIMIT = 3;

const RealState = () => {
  const [pageIndex, setPageIndex] = useState(0);

  //   const { data, size, setSize } = useSWRInfinite(
  //     (pageIndex) => `/api/properties?page=${pageIndex}&limit=${PAGE_LIMIT}`
  //   );

  //The API URL includes the page index, which is a React state.
  const { data } = useSWR(
    `/api/properties?page=${pageIndex}&limit=${PAGE_LIMIT}`
  );

  return (
    <>
      {/* First screen */}
      <div className="h_first_sec sec_estate_first">
        <div className="container">
          <div className="filter_adapt">
            <div className="filter_reset" id="reset_button_id_adapt">
              Reset
            </div>
            <div className="filter_icon" id="filter_icon_id">
              <span>Filters</span>
              <span className="icon_f" />
              {/* <img src="img/filter.png" alt=""> */}
            </div>
          </div>
          <div className="first_content">
            <form className="h_search_form">
              <div className="row_one">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox_content">
                    <span className="checkbox_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={90}
                        height={72}
                        viewBox="0 0 45 36"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M43.112 34.07H37.49V21.425l5.623 4.337zM1.888 25.762l5.623-4.337v12.643H1.888zm23.52 8.316v-5.834a.955.955 0 0 0-.943-.965h-3.93a.955.955 0 0 0-.944.965v5.834H9.4V17.282L22.5 7.174l13.101 10.108V34.08zm-1.887-.01h-2.042v-4.866h2.042zm13.968-15.061v-2.21a.973.973 0 0 0-.376-.771L23.068 5.195a.927.927 0 0 0-1.136 0L7.887 16.027a.973.973 0 0 0-.376.77v2.21L.376 24.512a.973.973 0 0 0-.376.77v9.754c0 .533.423.965.944.965h43.112a.955.955 0 0 0 .944-.965v-9.753a.973.973 0 0 0-.376-.771z" />
                            </g>
                            <g>
                              <path d="M1.512 17.811L22.5 2.109l20.988 15.702a.945.945 0 0 0 1.322-.184.931.931 0 0 0-.186-1.311L23.068.189a.95.95 0 0 0-1.136 0L.376 16.316a.931.931 0 0 0-.186 1.311.949.949 0 0 0 1.322.184z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="checkbox_text">House</span>
                  </span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox_content">
                    <span className="checkbox_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={78}
                        height={74}
                        viewBox="0 0 39 37"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M8 22c-.552 0-1 .6-1 1.338v2.324C7 26.4 7.448 27 8 27s1-.6 1-1.338v-2.324C9 22.6 8.552 22 8 22z" />
                            </g>
                            <g>
                              <path d="M13 22c-.552 0-1 .6-1 1.338v2.324C12 26.4 12.448 27 13 27s1-.6 1-1.338v-2.324C14 22.6 13.552 22 13 22z" />
                            </g>
                            <g>
                              <path d="M18 22c-.552 0-1 .6-1 1.338v2.324C17 26.4 17.448 27 18 27s1-.6 1-1.338v-2.324C19 22.6 18.552 22 18 22z" />
                            </g>
                            <g>
                              <path d="M21 22c-.552 0-1 .6-1 1.338v2.324C20 26.4 20.448 27 21 27s1-.6 1-1.338v-2.324C22 22.6 21.552 22 21 22z" />
                            </g>
                            <g>
                              <path d="M26 22c-.552 0-1 .6-1 1.338v2.324C25 26.4 25.448 27 26 27s1-.6 1-1.338v-2.324C27 22.6 26.552 22 26 22z" />
                            </g>
                            <g>
                              <path d="M31 22c-.552 0-1 .6-1 1.338v2.324C30 26.4 30.448 27 31 27s1-.6 1-1.338v-2.324C32 22.6 31.552 22 31 22z" />
                            </g>
                            <g>
                              <path d="M8 16c-.552 0-1 .6-1 1.338v2.324C7 20.4 7.448 21 8 21s1-.6 1-1.338v-2.324C9 16.6 8.552 16 8 16z" />
                            </g>
                            <g>
                              <path d="M13 16c-.552 0-1 .6-1 1.338v2.324C12 20.4 12.448 21 13 21s1-.6 1-1.338v-2.324C14 16.6 13.552 16 13 16z" />
                            </g>
                            <g>
                              <path d="M18 16c-.552 0-1 .6-1 1.338v2.324C17 20.4 17.448 21 18 21s1-.6 1-1.338v-2.324C19 16.6 18.552 16 18 16z" />
                            </g>
                            <g>
                              <path d="M21 16c-.552 0-1 .6-1 1.338v2.324C20 20.4 20.448 21 21 21s1-.6 1-1.338v-2.324C22 16.6 21.552 16 21 16z" />
                            </g>
                            <g>
                              <path d="M26 16c-.552 0-1 .6-1 1.338v2.324C25 20.4 25.448 21 26 21s1-.6 1-1.338v-2.324C27 16.6 26.552 16 26 16z" />
                            </g>
                            <g>
                              <path d="M31 16c-.552 0-1 .6-1 1.338v2.324C30 20.4 30.448 21 31 21s1-.6 1-1.338v-2.324C32 16.6 31.552 16 31 16z" />
                            </g>
                            <g>
                              <path d="M15 4c-.552 0-1 .6-1 1.338v2.324C14 8.4 14.448 9 15 9s1-.6 1-1.338V5.338C16 4.6 15.552 4 15 4z" />
                            </g>
                            <g>
                              <path d="M19 4c-.552 0-1 .6-1 1.338v2.324C18 8.4 18.448 9 19 9s1-.6 1-1.338V5.338C20 4.6 19.552 4 19 4z" />
                            </g>
                            <g>
                              <path d="M24 4c-.552 0-1 .6-1 1.338v2.324C23 8.4 23.448 9 24 9s1-.6 1-1.338V5.338C25 4.6 24.552 4 24 4z" />
                            </g>
                            <g>
                              <path d="M11.58 2.242h15.84v8.523H11.58zm15.623 32.516v-2.932c0-.619-.498-1.12-1.113-1.12H12.9c-.615 0-1.113.501-1.113 1.12v2.932H4.385v-21.76h30.22v21.76zm-8.818 0h-4.37v-1.81h4.362v1.684c0 .042.003.085.008.126zm6.59 0h-4.37c.005-.041.008-.084.008-.126v-1.685h4.362zm12.912-24.003h-8.242V1.121C29.645.5 29.147 0 28.532 0H10.468c-.615 0-1.113.502-1.113 1.12v9.635H1.113c-.615 0-1.113.502-1.113 1.121 0 .62.498 1.121 1.113 1.121h1.046V35.88c0 .62.499 1.121 1.113 1.121h32.456c.614 0 1.113-.502 1.113-1.12V12.996h1.046c.615 0 1.113-.502 1.113-1.12 0-.62-.498-1.122-1.113-1.122z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="checkbox_text">Flat</span>
                  </span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox_content">
                    <span className="checkbox_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={49}
                        height={33}
                        viewBox="0 0 49 33"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M24.523 2.565l8.85 7.383H15.637zm7.168 26.855c0-.826.67-1.498 1.495-1.498.825 0 1.496.672 1.496 1.498v1.349H31.69V29.42zM7.387 21.807l-2.283 1.477v-1.477zm36.519 1.477l-2.283-1.477h2.283zm-8.994-11.115v7.407H14.088V12.17zm-20.594 18.6V29.42c0-.826.671-1.498 1.496-1.498.824 0 1.495.672 1.495 1.498v1.349zm8.687 0V29.42a1.5 1.5 0 0 1 3 0v1.349zm5.224-1.349a3.73 3.73 0 0 0-3.724-3.73 3.73 3.73 0 0 0-3.724 3.73v1.349h-1.24V29.42a3.73 3.73 0 0 0-3.724-3.73 3.73 3.73 0 0 0-3.724 3.73v1.349H5.104v-4.811l6.35-4.15h26.103l6.349 4.15v4.81h-6.989V29.42a3.73 3.73 0 0 0-3.723-3.73 3.73 3.73 0 0 0-3.724 3.73v1.349h-1.241zm17.894 1.349V20.692c0-.616-.499-1.116-1.114-1.116h-7.87v-6.51l1.098.914a1.112 1.112 0 0 0 1.568-.144 1.117 1.117 0 0 0-.145-1.571L25.241.258A1.112 1.112 0 0 0 23.82.256L9.341 12.263a1.117 1.117 0 0 0 .711 1.975c.25 0 .502-.084.71-.256l1.099-.912v6.506H3.99c-.615 0-1.114.5-1.114 1.116v10.077H1.114a1.115 1.115 0 0 0 0 2.231h46.772a1.115 1.115 0 0 0 0-2.231z" />
                            </g>
                            <g>
                              <path d="M20 14c-.552 0-1 .408-1 .91v1.18c0 .502.448.91 1 .91s1-.408 1-.91v-1.18c0-.502-.448-.91-1-.91z" />
                            </g>
                            <g>
                              <path d="M24 8c.552 0 1-.408 1-.91V5.91c0-.502-.448-.91-1-.91s-1 .408-1 .91v1.18c0 .502.448.91 1 .91z" />
                            </g>
                            <g>
                              <path d="M29 14c-.552 0-1 .408-1 .91v1.18c0 .502.448.91 1 .91s1-.408 1-.91v-1.18c0-.502-.448-.91-1-.91z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="checkbox_text">Villa</span>
                  </span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox_content">
                    <span className="checkbox_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={45}
                        height={39}
                        viewBox="0 0 45 39"
                      >
                        <g>
                          <g>
                            <g>
                              <g>
                                <path d="M42.136 15.661c.622 0 1.142.489 1.142 1.097 0 .598-.508 1.097-1.142 1.097H2.858c-.622 0-1.142-.488-1.142-1.097 0-.597.51-1.097 1.142-1.097zm2.839 1.103c0-1.492-1.267-2.714-2.838-2.714H2.857c-1.56 0-2.837 1.211-2.837 2.714 0 1.492 1.266 2.714 2.838 2.714h39.279c1.571 0 2.85-1.222 2.838-2.714z" />
                              </g>
                              <g>
                                <g>
                                  <path d="M4.193 19.482h2.629v17.743H4.193zm4.322 18.544V18.671c0-.443-.384-.811-.848-.811H3.348c-.464 0-.848.368-.848.811v19.355c0 .443.384.81.848.81h4.32c.463 0 .847-.367.847-.81z" />
                                </g>
                                <g>
                                  <path d="M38.183 19.482h2.629v17.743h-2.629zm4.322 18.544V18.671c0-.443-.384-.811-.848-.811h-4.319c-.464 0-.848.368-.848.811v19.355c0 .443.384.81.848.81h4.32c.474 0 .847-.367.847-.81z" />
                                </g>
                              </g>
                              <g>
                                <path d="M8.516 19.482h27.972v6.303H8.516zm29.668 7.104v-7.915c0-.443-.384-.811-.848-.811H7.668c-.464 0-.848.368-.848.811v7.915c0 .443.384.81.848.81h29.668c.464 0 .848-.367.848-.81z" />
                              </g>
                              <g>
                                <path d="M27.833 22.167c.067 0 .124.053.124.118v.697c0 .064-.057.118-.124.118H17.162c-.068 0-.125-.054-.125-.118v-.697c0-.065.057-.118.125-.118zm1.821.807v-.703c0-.962-.814-1.741-1.82-1.741H17.16c-1.006 0-1.82.779-1.82 1.74v.704c0 .962.814 1.74 1.82 1.74h10.674c1.006 0 1.82-.778 1.82-1.74z" />
                              </g>
                            </g>
                            <g>
                              <path d="M29.001 1.667c.178 0 .322.144.322.321v7.014a.322.322 0 0 1-.322.321H15.99a.322.322 0 0 1-.322-.321V1.988c0-.177.144-.321.322-.321zM31 9.01V1.99C31 .889 30.111 0 29.011 0H15.99C14.889 0 14 .889 14 1.989V9.01c0 1.1.889 1.989 1.989 1.989H29.01c1.1 0 1.989-.889 1.989-1.989z" />
                            </g>
                            <g>
                              <g>
                                <path d="M18.862 14.925a.8.8 0 0 1-.358-.096c-.39-.228-.547-.768-.347-1.212l1.82-4.092c.2-.444.675-.624 1.064-.396.39.228.547.768.347 1.212l-1.82 4.092c-.138.312-.422.492-.706.492z" />
                              </g>
                              <g>
                                <path d="M25.133 14.925c-.284 0-.568-.18-.705-.492l-1.821-4.092c-.2-.444-.042-.984.347-1.212.39-.228.863-.048 1.063.396l1.821 4.092c.2.444.042.984-.347 1.212a.8.8 0 0 1-.358.096z" />
                              </g>
                            </g>
                            <g>
                              <g>
                                <g>
                                  <path d="M4.727 13.318V5.693c0-.043.034-.075.079-.075h2.973c.045 0 .079.032.079.075v7.625zm4.815.808V5.693C9.542 4.755 8.739 4 7.767 4H4.795C3.81 4 3.02 4.766 3.02 5.693v8.433c0 .443.384.81.848.81h4.826c.475 0 .848-.367.848-.81z" />
                                </g>
                                <g>
                                  <path d="M8.694 8.998H3.868c-.464 0-.848-.367-.848-.81 0-.441.384-.808.848-.808h4.826c.464 0 .848.367.848.809 0 .442-.373.809-.848.809z" />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path d="M34.997 5.693c0-.043.034-.075.079-.075h2.973c.045 0 .079.032.079.075v7.625h-3.131zm4.815 8.433V5.693c0-.938-.803-1.693-1.775-1.693h-2.972c-.984 0-1.775.766-1.775 1.693v8.433c0 .443.384.81.848.81h4.826c.475 0 .848-.367.848-.81z" />
                                </g>
                                <g>
                                  <path d="M38.964 8.998h-4.826c-.464 0-.848-.367-.848-.81 0-.441.384-.808.848-.808h4.826c.464 0 .848.367.848.809 0 .442-.373.809-.848.809z" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="checkbox_text">Office</span>
                  </span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox_content">
                    <span className="checkbox_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={37}
                        height={37}
                        viewBox="0 0 37 37"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M0 25h12v2H0z" />
                            </g>
                            <g>
                              <path d="M21.444 14.878l4.507-3.766 6.172 3.766zm-1.86-7.651l4.435 2.706-4.435 3.706zm-2.168 6.412l-4.435-3.706 4.435-2.706zm-12.54 1.24l6.173-3.767 4.508 3.766zm31.613.16L20.55 5.313l5.487-3.349a1.05 1.05 0 0 0 .347-1.464 1.097 1.097 0 0 0-1.493-.34L18.5 4.06 12.11.162a1.097 1.097 0 0 0-1.494.34 1.05 1.05 0 0 0 .348 1.464l5.486 3.349L.511 15.039a1.064 1.064 0 0 0-.511.902V22h12.191v-2.444c0-.587.486-1.063 1.084-1.063h10.45c.599 0 1.084.476 1.084 1.063V22H37v-6.06c0-.353-.185-.702-.511-.902z" />
                            </g>
                            <g>
                              <path d="M25 25h12v2H25z" />
                            </g>
                            <g>
                              <path d="M0 29v6.817C0 36.471.478 37 1.067 37H12v-8z" />
                            </g>
                            <g>
                              <path d="M25 29v8h10.933c.59 0 1.067-.53 1.067-1.183V29z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="checkbox_text">Bungalow</span>
                  </span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox_content">
                    <span className="checkbox_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={46}
                        height={28}
                        viewBox="0 0 46 28"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M43.868 25.849H42.04V5.532a1.07 1.07 0 0 0-1.066-1.076H5.026A1.07 1.07 0 0 0 3.96 5.532v20.317H2.132V2.15h41.736zm-3.95-18.371H6.092v-.87h33.824zm0 2.151v.82H6.092v-.82zm0 5.941v.82H6.092v-.82zm0-2.97v.819H6.092v-.82zM6.092 19.36v-.82h33.824v.82zm25.599 4.098H14.318a.868.868 0 0 1-.863-.871v-1.076h1.543c.09.482.509.846 1.013.846.503 0 .922-.364 1.013-.846h11.962c.09.482.51.846 1.013.846.504 0 .923-.364 1.013-.846h1.543v1.076c0 .48-.387.87-.863.87zM44.934 0H1.066A1.07 1.07 0 0 0 0 1.076v25.848A1.07 1.07 0 0 0 1.066 28h3.96a1.07 1.07 0 0 0 1.067-1.076v-5.413h5.23v1.076a3.02 3.02 0 0 0 2.29 2.934c.11.476.531.83 1.037.83h2.208c.474 0 .875-.311 1.014-.742h10.256c.14.43.54.742 1.014.742h2.208c.506 0 .928-.354 1.038-.83a3.02 3.02 0 0 0 2.29-2.934v-1.076h5.23v5.413A1.07 1.07 0 0 0 40.973 28h3.96A1.07 1.07 0 0 0 46 26.924V1.076A1.07 1.07 0 0 0 44.934 0z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="checkbox_text">Garage</span>
                  </span>
                </label>
              </div>
              <div className="row_two">
                <div className="select_wrap">
                  <label>Status</label>
                  <div className="form_select_wrap">
                    <select name="status" id="search_status">
                      <option value="For sale">For sale</option>
                      <option value="Sold">Sold</option>
                    </select>
                  </div>
                </div>
                <div className="select_wrap select_wrap_location">
                  <label>Location</label>
                  <div className="form_select_wrap">
                    <select name="status">
                      <option value="All locations">All locations</option>
                      <option value="Spain">Spain</option>
                    </select>
                  </div>
                </div>
                <div className="text_wrap">
                  <label>Property ID</label>
                  <input type="text" placeholder="ID-1713" />
                </div>
              </div>
              <div className="row_three">
                <div className="number_wrap">
                  <div className="name">Bedrooms</div>
                  <div className="number-block">
                    <input
                      className="num"
                      type="number"
                      id="bedrooms_number"
                      defaultValue={1}
                    />
                  </div>
                </div>
                <div className="number_wrap">
                  <div className="name">Bathrooms</div>
                  <div className="number-block">
                    <input
                      className="num"
                      type="number"
                      id="bath_number"
                      defaultValue={1}
                    />
                  </div>
                </div>
                <div className="checkbox_wrap">
                  <label className="checkbox_my">
                    <input type="checkbox" defaultValue="Sea view?" />
                    <span className="checkmark" />
                    Sea view?
                  </label>
                </div>
                <div className="all_param_wrap">
                  <div className="name" id="all_param_link">
                    All parameters <i className="fa fa-angle-down" />
                  </div>
                </div>
              </div>
              <div className="row_four" id="row_four_id">
                <div className="number_wrap">
                  <div className="name">Number of neighbors</div>
                  <div className="number-block">
                    <input
                      className="num"
                      type="number"
                      id="number_three"
                      defaultValue={1}
                    />
                  </div>
                </div>
                <div className="number_wrap">
                  <div className="name">Number of stairs</div>
                  <div className="number-block">
                    <input
                      className="num"
                      type="number"
                      id="number_four"
                      defaultValue={1}
                    />
                  </div>
                </div>
                <div className="checkbox_wrap">
                  <label className="checkbox_my">
                    <input type="checkbox" defaultValue="Sea view?" />
                    <span className="checkmark" />
                    Have a garden?
                  </label>
                </div>
              </div>
              <div className="row_five">
                <div className="range_wrap">
                  <div className="name">
                    Area: <span id="area-result-polzunok" /> m2
                  </div>
                  <div id="area-polzunok"></div>
                  <input
                    type="hidden"
                    name="area-send-result-polzunok"
                    id="area-send-result-polzunok"
                  />
                </div>
                <div className="range_wrap">
                  <div className="name">
                    Land: <span id="ground-result-polzunok" /> m2
                  </div>
                  <div id="ground-polzunok"></div>
                  <input
                    type="hidden"
                    name="ground-send-result-polzunok"
                    id="ground-send-result-polzunok"
                  />
                </div>
                <div className="range_wrap">
                  <div className="name">
                    Price: <span id="price-result-polzunok" /> EUR
                  </div>
                  <div id="price-polzunok"></div>
                  <input
                    type="hidden"
                    name="price-send-result-polzunok"
                    id="price-send-result-polzunok"
                  />
                </div>
              </div>
              <div className="row_six">
                <div className="button_wrap">
                  <button type="submit" className="main_button long">
                    Search
                  </button>
                </div>
                <div className="reset_wrap">
                  <div className="name" id="reset_button_id">
                    Reset Filters
                  </div>
                </div>
              </div>
            </form>
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
                <div className="sec_title">Searching results</div>
                <div className="sec_result">(45)</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec_result_sort">
                <div className="form_select_wrap">
                  <select name="status" id="search_sort">
                    <option value="Sort by">Sort by</option>
                    <option value="Price">Price</option>
                    <option value="Rooms">Rooms</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <PropertiesGrid properties={data} />
          <div className="col-md-12">
            <nav className="pagination">
              <div className="pag_wrap">
                <a
                  className="nav-prev"
                  onClick={() => setPageIndex(pageIndex - 1)}
                />
                <a href="#" className="current">
                  {pageIndex + 1}
                </a>
                {/* <a href="#">2</a>
                <a href="#">3</a> */}
                <a
                  href="#"
                  className="nav-next"
                  onClick={() => setPageIndex(pageIndex + 1)}
                />
              </div>
            </nav>
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
                  <img src="img/BANCO-POPULAR.png" alt />
                </div>
                <div className="one">
                  <img src="img/Banco-Sabadell.png" alt />
                </div>
                <div className="one">
                  <img src="img/bbva.png" alt />
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
                <img src="img/call_img2.jpg" alt className="left_img" />
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
  const properties = await getAllProperties(1, PAGE_LIMIT);
  return {
    props: {
      properties,
    },
  };
};
