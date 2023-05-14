
// Seleciona o elemento form
const form = document.querySelector('form');

// Adiciona um ouvinte de evento de envio
form.addEventListener('submit', (event) => {
	// Impede o envio padrão do formulário
	event.preventDefault();
	
	// Seleciona o elemento input do bairro
	const inputBairro = document.querySelector('#bairro');
	// Seleciona o elemento input do preço
	const inputPreco = document.querySelector('#preco');
	
	// Obtém o valor do bairro
	const bairro = inputBairro.value;
	// Obtém o valor do preço
	const preco = inputPreco.value;
	
	// Seleciona todos os elementos com a classe "dormitorio"
	const dormitorios = document.querySelectorAll('.dormitorio');
	
	// Percorre cada dormitório
	dormitorios.forEach((dormitorio) => {
		// Seleciona o elemento p do bairro
		const pBairro = dormitorio.querySelector('p:nth-of-type(1)');
		// Seleciona o elemento p do preço
		const pPreco = dormitorio.querySelector('p:nth-of-type(2)');
		
		// Obtém o valor do bairro do dormitório
		const bairroDormitorio = pBairro.textContent.split(': ')[1];
		// Obtém o valor do preço do dormitório
		const precoDormitorio = pPreco.textContent.split(': ')[1].replace(',', '.');
		
		// Verifica se o bairro do dormitório é igual ao bairro procurado e se o preço do dormitório é menor ou igual ao preço procurado
		if (bairroDormitorio === bairro && precoDormitorio <= preco) {
			// Exibe o dormitório
			dormitorio.style.display = 'block';
		} else {
			// Oculta o dormitório
			dormitorio.style.display = 'none';
		}
	});
});

// Seleciona todos os elementos button
const botoesReservar = document.querySelectorAll('button');

// Percorre cada botão
botoesReservar.forEach((botao) => {
	// Adiciona um ouvinte de evento de clique
	botao.addEventListener('click', () => {
		// Seleciona o elemento h2 do dormitório
		const h2Dormitorio = botao.previousElementSibling;
		
		// Obtém o texto do h2 do dormitório
		const textoDormitorio = h2Dormitorio.textContent;
		
		// Exibe uma mensagem de sucesso
		alert('Dormitório "' + textoDormitorio + '" reservado com sucesso!');
	});
});