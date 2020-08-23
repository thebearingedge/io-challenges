/**
 * download the HTML from https://example.com
 * write it to a file named "index.html"
 */
const path = require('path')
const https = require('https')
const rimraf = require('rimraf')

rimraf(path.join(__dirname, 'index.html'), err => {

  if (err) {
    console.error(err)
    process.exit(1)
  }

  // begin solution

})
