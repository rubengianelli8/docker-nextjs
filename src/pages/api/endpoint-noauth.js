import handlers from "@/utils/auth/noauth-handler.ts";
import { demo } from "@/models/demo";

const handler = handlers.handle();

handler.get(async (req, res) => {
  const { page, page_size } = req.query;
  const response = await demo.getDemo(
    undefined,
    {
      page: page ? parseInt(page) : 0,
      page_size: page_size ? parseInt(page_size) : 100,
      country_id: country_id ? parseInt(country_id) : undefined,
      lang,
      ordering,
    },
    {}
  );

  res.status(200).json(response);
});

export default handler;
