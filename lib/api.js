import client from "lib/sanity";

export const getAllProperties = async () => {
  const posts = await client.fetch(
    `*[_type=="property"]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date}`
  );
  return posts;
};
