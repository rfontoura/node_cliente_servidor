var http = require('http'); // carregando módulo http nativo do NodeJS

var opcoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var html = 'nome=José'; // content type x-www-form-urlencoded
var json = { nome: 'José' };
var stringJson = JSON.stringify(json);

var bufferCorpoResponse = [];

// o request() permite fazer requisições POST, GET e outros
var req = http.request(opcoes, function (res) {

    // ao carregar cada pedaço (chunk) da página
    res.on('data', function (pedaco) {
        bufferCorpoResponse.push(pedaco);
    });

    // ao finalizar carregamento da página
    res.on('end', function () {
        var corpoResponse = Buffer.concat(bufferCorpoResponse).toString();
        console.log(corpoResponse);
    })

    // ao ocorrer erro carregando a aplicação
    res.on('error', function () {

    })
});

req.write(stringJson);
req.end();