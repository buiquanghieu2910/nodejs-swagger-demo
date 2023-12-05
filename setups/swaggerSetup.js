// Swagger setup

module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "List API",
      description: "Demo by Bui Quang Hieu",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};
