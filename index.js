exports.doStuff = () => {
  import('./extra-lib.js')
    .then(lib => {
      lib.default.run()
    })
}