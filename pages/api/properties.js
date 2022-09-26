import { getAllProperties } from "lib/api";

export default async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  let propertyType = req.query.propertyType;
  let propertyStatus = req.query.propertyStatus;

  if (!propertyType) propertyType = " ";
  if (!propertyStatus) propertyStatus = " ";

  console.log(
    "=======" + Math.random(),
    page,
    limit,
    propertyType,
    propertyStatus
  );
  // console.log("typeof: ", typeof propertyType);
  const properties = await getAllProperties(
    page,
    limit,
    propertyType,
    propertyStatus
  );

  res.status(200).json(properties);
};
