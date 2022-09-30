const Pagination = ({ pageIndex, setPageIndex, total, limit, pagination }) => {
  // const goToFirstPage = () => setPageIndex(1);

  // const goToLastPage = () => setPageIndex(getLastPage());

  const goToPage = (page) => setPageIndex(page);

  const incrementPage = () =>
    pageIndex < getLastPage() && setPageIndex(pageIndex + 1);

  const decrementPage = () => pageIndex > 1 && setPageIndex(pageIndex - 1);

  // const atFirstPage = () => pageIndex === 1;

  // const atLastPage = () => pageIndex === getLastPage();

  const getLastPage = () => Math.ceil(total / limit);

  const pageN = Math.ceil(total / limit);

  const page = pagination(pageIndex, pageN);

  return (
    <nav className="pagination">
      <div className="pag_wrap">
        <a className="nav-prev" onClick={decrementPage} />
        {page.map((i) => (
          <a
            href="#"
            className={pageIndex === i ? "current" : ""}
            onClick={() => goToPage(i)}
          >
            {i}
          </a>
        ))}

        <a href="#" className="nav-next" onClick={incrementPage} />
      </div>
    </nav>
  );
};

export default Pagination;
