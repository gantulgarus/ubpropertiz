import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import { urlFor } from "lib/api";
import Sidebar from "components/post-sidebar";
import { getAllPosts, getPostBySlug } from "lib/api";

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const BlogDetailPage = ({ post }) => {
  // console.log("Blog detail page post: ", post);
  return (
    <div className="sec_ba_first sec_blog_article_first">
      <div className="container">
        <div className="row">
          {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="article_wrap">
              <div className="title">{post.title}</div>
              <div className="meta_info">
                <div className="author">
                  <a href="#">
                    <img
                      className="rounded-circle"
                      src={urlFor(post.agent.image).width(30).height(30).url()}
                      alt="publisher"
                    />
                    <span className="name">
                      {post.agent.name},{" "}
                      {moment(post.date).format("YYYY-MM-DD")}
                    </span>
                  </a>
                </div>
              </div>
              <div className="article_body">
                <img
                  className="img_article1"
                  src={urlFor(post.featured_image).width(900).url()}
                  loading="lazy"
                  alt="featured_image"
                />
                <div className="text">
                  <PortableText
                    value={post.content}
                    components={{
                      types: {
                        image: SampleImageComponent,
                        // Any other custom types you have in your content
                        // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
                      },
                      list: {
                        // Ex. 1: customizing common list types
                        bullet: ({ children }) => (
                          <ul className="mt-xl content-list">{children}</ul>
                        ),
                        number: ({ children }) => (
                          <ol
                            className="mt-lg content-list"
                            aria-current="step"
                          >
                            {children}
                          </ol>
                        ),

                        // Ex. 2: rendering custom lists
                        checkmarks: ({ children }) => (
                          <ol className="m-auto text-lg content-list">
                            {children}
                          </ol>
                        ),
                      },
                    }}
                  />
                </div>
                <div className="body_meta">
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths: data,
    fallback: "blocking",
  };
};
