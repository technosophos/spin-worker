import { AutoRouter } from 'itty-router';
import Worker from '../cf-worker/src/index'

let router = AutoRouter();

router
    .get("/", () => new Response("Hello from Spin"))
    // When a client requests /worker, run the cf-worker function
    .get("/worker", Worker.fetch)

addEventListener('fetch', async (event) => {
    event.respondWith(router.fetch(event.request));
});
