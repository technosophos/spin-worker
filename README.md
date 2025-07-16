# Example of running a Cloudflare Worker inside of a Spin app

To build:

```
spin build --up
```

To build and run just the Worker:

```
cd cf-worker
npx wrangler dev
``

## Testing

The Worker listens on just one endpoint: `/`.

The Spin app returns a response on `/`, and executes the worker on `/worker`.

```
$ curl localhost:8787
Hello from a worker
$ curl localhost:3000
Hello from Spin
$ curl localhost:3000/worker
Hello from a worker
```
