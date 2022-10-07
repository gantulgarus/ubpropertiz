import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ModalEmail = (props) => {
  const [state, handleSubmit] = useForm("mlevnvgo");
  // if (state.succeeded) {
  //   return <p>Email sent. Thanks for joining!</p>;
  // }

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
            <div className="white-popup modal-my" id="modal_email">
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
                <div className="modal_title">Бидэнтэй холбогдох</div>
                <div className="form_underline">
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Нэр" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Имэйл"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <input type="number" name="phone" placeholder="Утас" />
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Мессеж"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button
                      type="submit"
                      className="main_button"
                      disabled={state.submitting}
                    >
                      Илгээх
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

export default ModalEmail;
