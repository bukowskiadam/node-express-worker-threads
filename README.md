# node express worker threads

This repo demonstrates the usage of worker threads to separate part of the app
in order not to block the rest of the endpoints

## Summary

My goal was to run separate express.Router in the thread and pass request,
response objects, but that's not possible due to the limitations of postMessage
data.

For now, the example shows offloading the work to the worker.

## Test it yourself

### Blocking

1. Run the server `npm run blocking`
2. Open a separate terminal and run the test `npm run test`

### Threads

1. Run the server `npm run threads`
2. Open a separate terminal and run the test `npm run test`