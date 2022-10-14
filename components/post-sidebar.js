const Sidebar = () => {
  return (
    <div className="col-lg-4 order-1 order-lg-2">
      <div className="sidebar sidebar_blog">
        <div className="search form_underline">
          <div className="search_adapt">
            <i className="fa fa-search" />
            <i className="fa fa-close" />
          </div>
          <form className>
            <input type="search" className="search_field" placeholder="Хайх" />
            <button type="submit" className="search-submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        <div className="categories">
          <div className="title">Категори</div>
          <ul>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Photo news</a>
            </li>
            <li>
              <a href="#">Top bloggers in UB</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
