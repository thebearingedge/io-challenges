/**
 * create a directory named "blog"
 * get all blog posts
 * using the api at https://jsonplaceholder.typicode.com
 * make a directory inside "blog" for each userId found in the list
 * write each blog post into its own .json file inside the correct directory
 *
 * https://nodejs.org/docs/latest-v10.x/api/index.html
 */
const fs = require('fs')
const path = require('path')
const https = require('https')
const rimraf = require('rimraf')

rimraf(path.join(__dirname, 'blog'), err => {

  if (err) {
    console.error(err)
    process.exit(1)
  }

  // begin solution

})
