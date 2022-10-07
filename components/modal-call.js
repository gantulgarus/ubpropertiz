import { useState } from "react";

const ModalCall = (props) => {
  return (
    <>
      <div className="mfp-bg mfp-ready"></div>
      <div
        className="mfp-wrap mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <div className="white-popup modal-my" id="modal_call">
              <div className="modal-header-my">
                <p>
                  <a
                    className="popup-modal-dismiss"
                    href="#"
                    onClick={props.closeModal}
                  >
                    <i className="fa  fa-times" />
                  </a>
                </p>
              </div>
              <div className="modal-body-my">
                <div className="modal_title">Request a call back</div>
                <div className="form_underline">
                  <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone number" />
                    <textarea id="message" name="message"></textarea>

                    <button type="submit" className="main_button">
                      Order a free consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCall;
