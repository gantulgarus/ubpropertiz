import client from "lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getAllProperties = async (page = 0, limit = 3) => {
  const properties = await client.fetch(
    `*[_type=="property"]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date, imagesGallery, price, 'status':status->{name}, 'type':property_type->{name}, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url}, propertyId, square, livingroom, bathroom, bedroom, garage, description}|order(date desc)[${
      page * limit
    }...${(page + 1) * limit}]`
  );
  return properties;
};

export const getPropertyBySlug = async (slug) => {
  const property = await client.fetch(
    `*[_type=="property" && slug.current==$slug]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date, imagesGallery[]{'src':asset->url}, price, 'status':status->{name}, 'type':property_type->{name}, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url}, propertyId, square, livingroom, bathroom, bedroom, garage, description}`,
    { slug }
  );
  return property;
};
