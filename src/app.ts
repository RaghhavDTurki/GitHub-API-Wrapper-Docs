import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: "1.0.0",
      title: "GitHub-API Wrapper",
      description: "A wrapper over GitHub API to automate some tasks    |  Tech Stack: Typescript, Express.js, OctoKit, Sentry.io",
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      contact: {
        email: "raghhavdturki@gmail.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1/",
        description: "Dev Server"
      },
      {
        url: "https://githubapiwrapper.herokuapp.com/api/v1",
        description: "Prod Server"
      }
    ]
  },
  apis: ['swagger.yml'],
};

const specs = swaggerJSDoc(options);

const app = express();
app.set("port", process.env.PORT || 3000);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});


// export interface Routes {
//   path?: string;
//   router: Router;
// }


// class App {
//   public app: express.Application;
//   public env: string;
//   public port: string | number;

//   constructor(routes: Routes[]) {
//     this.app = express();
//     this.port = process.env.PORT || 3000;

//     this.initializeMiddlewares();
//     this.initializeRoutes(routes);
//     this.initializeSwagger();
//   }

//   public listen() {
//     this.app.listen(this.port, () => {
//       console.log(`Server listening on port ${this.port}`);
//     });
//   }

//   public getServer() {
//     return this.app;
//   }

//   private initializeMiddlewares() {
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({ extended: true }));
//   }

//   private initializeRoutes(routes: Routes[]) {
//     routes.forEach(route => {
//       this.app.use('/', route.router);
//     });
//   }

  // private initializeSwagger() {
  //   const options = {
  //     swaggerDefinition: {
  //       info: {
  //         title: 'REST API',
  //         version: '1.0.0',
  //         description: 'Example docs',
  //       },
  //     },
  //     apis: ['swagger.yaml'],
  //   };

  //   const specs = swaggerJSDoc(options);
    // this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//   }

// }

// export default App;
