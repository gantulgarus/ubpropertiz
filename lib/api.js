import client from "lib/sanity";

export const getAllProperties = async () => {
  const properties = await client.fetch(
    `*[_type=="property"]{_id, _createdAt, title, 'slug':slug.current, 'featured_image':featured_image.asset->url, date, imagesGallery, price, 'status':status->{name}, 'type':property_type->{name}, 'agent':agent->{name, phone, email, 'image':agent_image.asset->url}, propertyId, square, livingroom, bathroom, bedroom, garage, description}`
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
