# node express worker threads

This repo demonstrates the usage of worker threads to separate part of the app
in order not to block the rest of the endpoints

## Summary

My goal was to run separate express.Router in the thread and pass request,
response objects, but that's not possible due to the limitations of postMessage
data.

The first example `threads` shows offloading the work to the worker.

The second example `threads` app takes a different approach. It uses worker
to spin up a new server on a random assigned port and message back port to the
main thread. The main thread is responsible for proxying the request to the
child server. It works, so it does not block the main thread.

## Test it yourself

### Blocking

1. Run the server `npm run blocking`
2. Open a separate terminal and run the test `npm run test`

### Threads

1. Run the server `npm run threads`
2. Open a separate terminal and run the test `npm run test`

### Threads app

1. Run the server `npm run threads-app`
2. Open a separate terminal and run the test `npm run test`
