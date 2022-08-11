import multer from "multer";

export const multerMiddleware = async (req, res, fieldName) => {
  const upload = multer({
    storage: multer.memoryStorage(),
  }).single(fieldName);

  const promise = await new Promise((resolve, reject) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError)
        reject({ code: "400", message: "Bad request" });
      else if (err) reject({ code: "500", message: "Internal server error" });

      resolve(req);
    });
  });

  return promise;
};
