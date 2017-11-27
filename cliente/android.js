var http = require('http'); // carregando módulo http nativo do NodeJS

var opcoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    headers: {
        'Accept' : 'application/json'
    }
};

var bufferCorpoResponse = [];
http.get(opcoes, function (res) {

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