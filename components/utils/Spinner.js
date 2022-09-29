import css from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={css.spinner_box}>
      <div className={css.lds_ripple}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
