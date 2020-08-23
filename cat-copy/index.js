/**
 * read the current directory with `fs.readdir`
 * read the contents of each `.txt` file in the directory listing
 * concatenate all file contents
 * write it to a new file "combined.txt"
 *
 * https://nodejs.org/docs/latest-v10.x/api/index.html
 */
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

rimraf(path.join(__dirname, 'combined.txt'), err => {

  if (err) {
    console.error(err)
    process.exit(1)
  }

  // begin solution

})
