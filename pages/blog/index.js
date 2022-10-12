import { useState } from "react";
import { getAllPosts } from "lib/api";
import { usePosts } from "hooks/usePosts";
import Sidebar from "components/post-sidebar";
import Pagination from "components/pagination";
import { pagination } from "components/utils/Paginate";
import Spinner from "components/utils/Spinner";
import PostGrid from "components/post/post-grid";

const limit = 8;

const Posts = ({ posts }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isValidating } = usePosts(posts, pageIndex, limit);

  return (
    <div>
      <div className="sec_sub_header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sub_header">
                <div className="title">Мэдээ, мэдээлэл</div>
                <div className="sub_title">
                  Бүх шилдэг нийтлэлүүдийг нэг дороос
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END.Header text without background */}
      {/* Blog article: First screen */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div className="sec_ba_first sec_blog_first">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="row">
                {isValidating ? <Spinner /> : <PostGrid posts={data} />}

                <div className="col-md-12">
                  <Pagination
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    limit={limit}
                    total={data.length}
                    pagination={pagination}
                  />
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Blog article: First screen */}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
