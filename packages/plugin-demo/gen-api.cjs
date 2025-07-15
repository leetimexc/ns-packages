/* eslint-disable  no-undef */
const path = require('path')
const {generateApi} = require('swagger-typescript-api')

function genApi(){
  return generateApi({
    name:'Api',
    // url: 'http://localhost:3000/swagger.json',
    input: path.resolve(__dirname, './swagger.json'),
    output: path.resolve(__dirname, './src/api'),
    httpClient:'axios',
    silent:true,
  })
}

genApi()