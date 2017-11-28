module.exports = function (application) {
	application.get('/', function (req, res) {
		res.format({
			// se o cliente aceita HTML, então envia o texto abaixo
			html: function () {
				res.send('Bem vindo a sua app NodeJS!');
			},

			// se o cliente não aceita HTML, mas aceita JSON, então envia o texto abaixo como JSON
			json: function () {
				var retorno = {
					body: 'Bem vindo a sua app NodeJS!'
				};
				res.json(retorno);
			}
		});

		// res.render('blah'); // para ocorrer erro interno (500)
	});

	application.post('/', function (req, res) {
		var dados = req.body;
		res.send(dados);
	});
}