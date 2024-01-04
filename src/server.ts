import helmet from 'helmet';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import getConfig from './config/get-config';
import { RegisterRoutes } from './routes';
import { ValidateError } from '@tsoa/runtime';

// Init express
const app = express();

/**
 * Set basic express settings
 */
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));


/**
 * Registering API routes for swagger
 */
if (getConfig.swagger) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

/**
 * Helmet for basic security in production
 */
if (getConfig.nodeEnv === 'production') {
    app.use(helmet());
}

/**
 * Registering base API routes
 */
RegisterRoutes(app);

/**
 * Catch API errors throughout the application
 */
app.use(function notFoundHandler(_req, res: Response) {
    res.status(404).send({
        message: "API Not Found",
    });
});
app.use(function errorHandler(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): Response | void {
    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
            message: 'Validation Failed',
            details: err?.fields,
        });
    }
    if (err instanceof Error) {
        return res.status(500).json({
            message: err.message || 'Something looks wrong',
        });
    }
    next();
});


/**
 * Exporting express app instance
 */
export default app;
