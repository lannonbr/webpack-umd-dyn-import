# Webpack UMD Dynamic Import Reproduction

This is a reproduction to show an issue that you cannot use dynamic imports properly if you are trying to build a UMD module and run it inside node.

## Steps

1) Install deps (`npm install`)
2) Build the bundle (`npm run build`)
3) Try running the test script that uses this bundle (`node test.js`)

This should pop out an error that looks like this:

```
ReferenceError: document is not defined
```