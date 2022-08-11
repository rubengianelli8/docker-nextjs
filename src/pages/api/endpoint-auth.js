import handlers from "@/utils/auth/auth-handler.ts";
import { demo } from "@/models/demo";

const handler = handlers.handle();

handler.get(async (req, res) => {
  const { page, page_size } = req.query;
  const response = await demo.getDemo(
    undefined,
    {
      page: page ? parseInt(page) : 0,
      page_size: page_size ? parseInt(page_size) : 100,
    },
    { req, res } //se envia req y res para tener acceso al context, el cual se redefine en el auth-handler.ts
  );
  res.status(200).json(response);
});

export default handler;
