import { demo_schemas } from "@/swagger/demo";
import { demo_api } from "@/swagger/demo";
const swagger = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0",
  },
  paths: {
    ...demo_api,
  },
  components: {
    securitySchemes: {
      apiKeyAuth: { type: "Bearer", in: "header", name: "token" },
    },
    schemas: {
      ...demo_schemas,
    },
  },
  security: [{ apiKeyAuth: [] }],
};

export default swagger;
