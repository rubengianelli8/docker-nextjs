import S3 from "aws-sdk/clients/s3";
import slugify from "slugify";

export const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: "s3v4",
});

/**
 * Recibe el nombre del archivo y lo busca en el bucket
 * de aws.
 * Retorna el path completo.
 */
export const getLogoUrl = (fileName) => {
  // 8 Horas expiración
  const fileExpire = 60 * 60 * 8;

  return s3.getSignedUrl("getObject", {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `logos/${fileName}`,
    Expires: fileExpire,
  });
};

export const getFile = async (fileName, directory) => {
  try {
    // 8 Horas expiración
    const fileExpire = 60 * 60 * 8;
    let response = {};
    const promise = await new Promise((resolve, reject) => {
      s3.getObject(
        {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `${directory}/${fileName}`,
        },
        function (error, data) {
          if (error != null) {
            reject({
              error: 500,
              message: "Failed to retrieve an object: " + error,
            });
          } else {
            response = data;
            resolve(data.Body);
          }
        }
      );
    });
    return promise;
  } catch (error) {
    throw error;
  }
};

/**
 * Recibe un archivo por parametro y lo sube al bucket de aws
 * configurado en el entorno.
 * Sobreescribe el nombre del archivo con slugify
 * para evitar caracteres extraños.
 * Retorna el nombre del archivo y el path completo.
 */
export const uploadFile = async (file, directory, optional_name) => {
  let fileName = "";
  if (!file.originalname) {
    fileName = optional_name;
  } else fileName = `${Date.now()}-${slugify(file.originalname)}`;
  if (file.originalname) {
    file = file.buffer;
  }
  try {
    await s3
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${directory}/${fileName}`,
        Body: file,
      })
      .promise();
    return fileName;
  } catch (e) {
    throw { code: 500, message: "Error uploading file" };
  }
};
