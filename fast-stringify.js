/**
 *  'fast-json-stringify' and other similar structured 
 *  schema-based JSON rendering can offer a significant
 *  improvement than JSON.stringify, especially with
 *  smaller payloads.
 *  See example code below and README.md.
 */
const http = require('http'),
  fastJson = require('fast-json-stringify')

const stringify = fastJson({
    type: 'object',
    properties: { hello: {type: 'string'} }
})

function handle (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(stringify({ hello: 'world'}));
}