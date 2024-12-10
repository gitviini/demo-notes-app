export const handler = async () => {
console.log('functions/src/api.handler rodando');
return {
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    "Content-Type":"text/html",
  },
  body: '\
  <html>\
    <head>\
        <meta charset="utf-8" />\
    </head>\
    <body>\
        <h1>Olá</h1>\
    </body>\
  </html>',
};
};