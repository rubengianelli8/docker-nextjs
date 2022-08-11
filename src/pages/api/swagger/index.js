import swagger from "./swagger.js";
const handler = (req, res) => {
  if (req.method !== "GET")
    res.status(405).send({ error: "Method not allowed" });

  res.status(200).send(swagger);
};
export default handler;
