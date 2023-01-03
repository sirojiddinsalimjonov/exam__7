import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import { PORT } from "./config.js";

const router = Router()

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "API",
        variables: {
          port: {
            enum: [PORT],
            default: PORT,
          },
        },
      },
    ],

    info: {
      version: '1.0.0',
      title: 'EVENT API',
      description: "Event API"
    },

    components: {
      securitySchemes: {
        Bearer: {
          type: 'apiKey',
          name: 'token',
          in: 'header',
          description: "succes_token"
        },
      },
    },
  },
  apis: [
    `${process.cwd()}/src/swagger/components/*.yaml`,
    `${process.cwd()}/src/swagger/docs/*.yaml`,
  ],
});


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
export default router;