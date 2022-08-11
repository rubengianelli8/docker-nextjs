import handlers from "@/utils/auth/auth-handler.ts";
import { uploadFile } from "@/models/upload-file";
import { multerMiddleware } from "@/utils/multer";

const handler = handlers.handle();

handler.post(async (req, res) => {
  await multerMiddleware(req, res, "logo");
  const file = req.file;
  const data = req.body;
  const response = await uploadFile.addDemo(null, { file, data }, { req, res });
  res.status(200).json(response);
});
