import './load-env';
import app from './server';
import getConfig from './config/get-config';

/**
 * Port at which server will run
 */
const port = Number(getConfig.port);

/**
 * Starting the server
 * @param port Port at which server will run
 */
const server = app.listen(port, () => {
    console.log(`express server started (${getConfig.nodeEnv}) on port ${port}`);
});

/**
 * Exporting server instance
 */
export default server;
