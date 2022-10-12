import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostGrid = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="col-md-6" key={post._id}>
          <div className="article_wrap article_card">
            <div className="article_body">
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <Image
                    className="img_article1"
                    src={post.featured_image}
                    alt="зураг"
                    height={250}
                    width={380}
                  />
                </a>
              </Link>
              <div className="date">
                {moment(post.date).format("YYYY-MM-DD")}
              </div>
              <div className="title">
                <a href="blog-article.html">{post.title}</a>
              </div>
              {/* <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, liber diceret no nam. His jauis
                  invidunt percipitur eu. Est alijauid incorrupte elaboraret ut.
                  Ad pri modo inermis efficiantur, at lorem latine mel...
                </p>
              </div> */}
            </div>
            <div className="meta_info">
              <div className="author">
                <a href="#">
                  <Image
                    src={post.agent.image}
                    alt="зураг"
                    height={30}
                    width={30}
                  />
                  <span className="name" style={{ marginLeft: 14 }}>
                    {post.agent.name}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostGrid;
