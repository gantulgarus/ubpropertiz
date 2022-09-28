const Pagination = ({ pageIndex, setPageIndex, total, limit }) => {
  const goToFirstPage = () => setPageIndex(1);

  const goToLastPage = () => setPageIndex(getLastPage());

  const incrementPage = () =>
    pageIndex < getLastPage() && setPageIndex(pageIndex + 1);

  const decrementPage = () => pageIndex > 1 && setPageIndex(pageIndex - 1);

  const atFirstPage = () => pageIndex === 1;

  const atLastPage = () => pageIndex === getLastPage();

  const getLastPage = () => Math.ceil(total / limit);
  console.log("Last page: ", Math.ceil(total / limit));

  return (
    <nav className="pagination">
      <div className="pag_wrap">
        <button
          className={atFirstPage() ? "pageBtn disabled-link" : "pageBtn"}
          onClick={goToFirstPage}
        >
          First
        </button>
        <a className="nav-prev" onClick={decrementPage} />
        <a href="#" className="current">
          {pageIndex}
        </a>
        <a href="#" className="nav-next" onClick={incrementPage} />
        <button
          className={atLastPage() ? "pageBtn disabled-link" : "pageBtn"}
          onClick={goToLastPage}
        >
          Last
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
