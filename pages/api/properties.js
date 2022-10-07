import { getAllProperties } from "lib/api";

export default async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  let propertyType = req.query.propertyType;
  let propertyStatus = req.query.propertyStatus;
  let propertyLocation = req.query.propertyLocation;
  let types;

  if (!propertyType) propertyType = " ";
  if (!propertyStatus) propertyStatus = " ";
  if (!propertyLocation) propertyLocation = " ";

  // if (!req.query.types) types = " ";
  // else types = req.query.types.split(",");

  console.log(
    "=======" + Math.random(),
    page,
    limit,
    propertyType,
    propertyStatus,
    propertyLocation
  );
  // console.log("typeof: ", typeof propertyType);
  const properties = await getAllProperties(
    page,
    limit,
    propertyType,
    propertyStatus,
    propertyLocation
  );

  res.status(200).json(properties);
};
