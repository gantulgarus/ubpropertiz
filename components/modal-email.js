const ModalEmail = () => {
  return (
    <div className="white-popup mfp-hide modal-my" id="modal_email">
      <div className="modal-header-my">
        <p>
          <a className="popup-modal-dismiss" href="#">
            <i className="fa  fa-times" />
          </a>
        </p>
      </div>
      <div className="modal-body-my">
        <div className="modal_title">Write to us</div>
        <div className="form_underline">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone number" />
            <textarea
              cols={30}
              rows={5}
              placeholder="Message"
              defaultValue={""}
            />
            <button type="submit" className="main_button">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEmail;
