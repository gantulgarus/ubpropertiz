import client from "lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getAllProperties = async (
  page = 1,
  limit = 6,
  propertyType = "",
  propertyStatus = ""
) => {
  const properties = await client.fetch(
    `*[_type=="property" && property_type->name match $propertyType+"*" && status->name match $propertyStatus+"*"]|order(date asc)[${
      (page - 1) * limit
    }...${
      page * limit
    }]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date, imagesGallery, price, 'status':status->name, 'type':property_type->name, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url}, propertyId, square, livingroom, bathroom, bedroom, garage, description, 'location':location->name, property_feature}`,
    { propertyType, propertyStatus }
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
