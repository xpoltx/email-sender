import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Email sender API',
            description: 'Email sender application on Node.js',
            version: '1.0.0'
        },
        components: {
            securitySchemes:{
                basicAuth: {
                    type: 'http',
                    scheme: 'basic'
                }
            }
        }
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;