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
              <a href="#">Interesting about Spain</a>
            </li>
            <li>
              <a href="#">Top bloggers in Spain</a>
            </li>
          </ul>
        </div>
        <div className="tags">
          <div className="title">Таг</div>
          <div className="tags_wrap">
            <a href="#">Residence permit of Spain</a>
            <a href="#">Beautiful places</a>
            <a href="#">Tag</a>
            <a href="#">Tag name</a>
            <a href="#">Tag name 2</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
