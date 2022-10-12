import client from "lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getAllProperties = async (
  page = 1,
  limit = 8,
  propertyType = "",
  propertyStatus = "",
  propertyLocation = ""
) => {
  const properties = await client.fetch(
    `*[_type=="property" && property_type->name match $propertyType+"*" && status->name match $propertyStatus+"*" && (location->name match $propertyLocation+"*" || location->name==$propertyLocation)]|order(date desc)[${
      (page - 1) * limit
    }...${
      page * limit
    }]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date, imagesGallery, price, 'status':status->name, 'type':property_type->name, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url}, propertyId, square, livingroom, bathroom, bedroom, garage, description, 'location':location->name, property_feature}`,
    { propertyType, propertyStatus, propertyLocation }
  );
  return properties;
};

export const getPropertyBySlug = async (slug) => {
  const property = await client.fetch(
    `*[_type=="property" && slug.current==$slug]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date, imagesGallery[]{'src':asset->url}, price, 'status':status->name, 'type':property_type->name, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url}, propertyId, square, livingroom, bathroom, bedroom, garage, description, 'location':location->name, property_feature}`,
    { slug }
  );
  return property;
};

export const getAllPropertyTypes = async () => {
  const propertyTypes = await client.fetch(`*[_type=="property_type"]{name}`);
  return propertyTypes;
};

export const getAllPropertyStatus = async () => {
  const propertyStatus = await client.fetch(`*[_type=="status"]{name}`);
  return propertyStatus;
};

export const getAllLocations = async () => {
  const propertyLocations = await client.fetch(`*[_type=="location"]{name}`);
  return propertyLocations;
};

export const getAllAgents = async () => {
  const agents = await client.fetch(
    `*[_type=="agent"]{name, phone, email, 'image':agent_image.asset->url, facebook}`
  );
  return agents;
};

export const getAllPosts = async (page = 1, limit = 8) => {
  const posts = await client.fetch(
    `*[_type=="post"][${(page - 1) * limit}...${
      page * limit
    }]{title, 'slug':slug.current, content, 'featured_image':featured_image.asset->url, date, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url }}`
  );
  return posts;
};

export const getPostBySlug = async (slug) => {
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{title, 'slug':slug.current, content, 'featured_image':featured_image.asset->url, date, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url }}`,
    { slug }
  );
  return post;
};
