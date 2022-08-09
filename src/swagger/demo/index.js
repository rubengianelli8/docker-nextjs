export const demo_api = {
  "/api/demo": {
    get: {
      tags: ["Demo"],
      summary: "Get Demo",
      description: "Get list of Demo",
      parameters: [
        {
          name: "id",
          in: "query",
          description: "Demo ID",
          required: false,
          type: "integer",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  $ref: "#/components/schemas/Demo",
                },
              },
            },
          },
        },
      },
    },
  },
};

export const demo_schemas = {
  Demo: {
    properties: {
      id: {
        title: "Demo.id",
        type: "integer",
      },
      name: {
        title: "Demo.name",
        type: "string",
      },
    },
    required: ["id", "name"],
    additionalProperties: false,
    title: "Demo",
    type: "object",
  },
};
