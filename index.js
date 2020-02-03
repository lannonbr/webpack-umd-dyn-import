export function doStuff() {
  import('./extra-lib.js')
    .then(lib => lib.run())
}