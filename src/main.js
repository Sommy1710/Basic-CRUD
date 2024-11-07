import {server} from './bootstrap/server.js';

(() =>
{
    try {
        server.listen(43025, () => {
            console.info('server is running on port 43023')
        })
    } catch (error) {
        console.error('could not start the server', error)
        process.exit(1)
    }
})()