function bodyModalS30(){
    const ele = []
// Criação do elemento <div>
const divElement = document.createElement('div');

// Criação do elemento <h3> e texto "Entradas"
const h3ElementEntradas = document.createElement('h3');
h3ElementEntradas.textContent = 'Entradas';
h3ElementEntradas.style.color = 'green'

// Criação do elemento <h4> e texto "Congregação"
const h4ElementCongregacao = document.createElement('h4');
h4ElementCongregacao.textContent = 'Congregação';

// Criação da lista <ul> para as entradas da congregação
const ulElementCongregacao = document.createElement('ul');

// Criação do primeiro item da lista de entradas da congregação
const liElementCaixaDonativos = document.createElement('li');
const labelElementCaixaDonativos = document.createElement('label');
labelElementCaixaDonativos.textContent = 'Caixa de donativos';
const inputElementCaixaDonativos = document.createElement('input');
inputElementCaixaDonativos.type = 'text';
labelElementCaixaDonativos.appendChild(inputElementCaixaDonativos);
liElementCaixaDonativos.appendChild(labelElementCaixaDonativos);
ulElementCongregacao.appendChild(liElementCaixaDonativos);

// Criação do segundo item da lista de entradas da congregação
const liElementTransferenciasEletronicas = document.createElement('li');
const labelElementTransferenciasEletronicas = document.createElement('label');
labelElementTransferenciasEletronicas.textContent = 'Transfências eletrônicas';
const inputElementTransferenciasEletronicas = document.createElement('input');
inputElementTransferenciasEletronicas.type = 'text';
labelElementTransferenciasEletronicas.appendChild(inputElementTransferenciasEletronicas);
liElementTransferenciasEletronicas.appendChild(labelElementTransferenciasEletronicas);
ulElementCongregacao.appendChild(liElementTransferenciasEletronicas);

// Criação do terceiro item da lista de entradas da congregação
const liElementPeloSite = document.createElement('li');
const labelElementPeloSite = document.createElement('label');
labelElementPeloSite.textContent = 'Pelo site';
const inputElementPeloSite = document.createElement('input');
inputElementPeloSite.type = 'text';
labelElementPeloSite.appendChild(inputElementPeloSite);
liElementPeloSite.appendChild(labelElementPeloSite);
ulElementCongregacao.appendChild(liElementPeloSite);

// Criação do elemento <h4> e texto "Outras"
const h4ElementOutras = document.createElement('h4');
h4ElementOutras.textContent = 'Outras';

// Criação da lista <ul> para as outras entradas
const ulElementOutras = document.createElement('ul');

// Criação do item da lista de outras entradas
const liElementOMCaixaDonativos = document.createElement('li');
const labelElementOMCaixaDonativos = document.createElement('label');
labelElementOMCaixaDonativos.textContent = 'OM Caixa de donativos';
const inputElementOMCaixaDonativos = document.createElement('input');
inputElementOMCaixaDonativos.type = 'text';
labelElementOMCaixaDonativos.appendChild(inputElementOMCaixaDonativos);
liElementOMCaixaDonativos.appendChild(labelElementOMCaixaDonativos);
ulElementOutras.appendChild(liElementOMCaixaDonativos);

// Criação do elemento <h3> e texto "Despesas"
const h3ElementDespesas = document.createElement('h3');
h3ElementDespesas.textContent = 'Despesas';
h3ElementDespesas.style.color = 'red'
// Criação do elemento <h4> e texto "Congregação"
const h4ElementCongregacaoDespesas = document.createElement('h4');
h4ElementCongregacaoDespesas.textContent = 'Congregação';

// Criação da lista <ul> para as despesas da congregação
const ulElementCongregacaoDespesas = document.createElement('ul');

// Criação do primeiro item da lista de despesas da congregação
const liElementDespesasOperacionais = document.createElement('li');
const labelElementDespesasOperacionais = document.createElement('label');
labelElementDespesasOperacionais.textContent = 'Fixas do Salão do Reino';
const inputElementDespesasOperacionais = document.createElement('input');
inputElementDespesasOperacionais.type = 'text';
labelElementDespesasOperacionais.appendChild(inputElementDespesasOperacionais);
liElementDespesasOperacionais.appendChild(labelElementDespesasOperacionais);
ulElementCongregacaoDespesas.appendChild(liElementDespesasOperacionais);

// Criação do segundo item da lista de despesas da congregação
const liElementResolucaoMensal = document.createElement('li');
const labelElementResolucaoMensal = document.createElement('label');
labelElementResolucaoMensal.textContent = 'Resolução mensal';
const inputElementResolucaoMensal = document.createElement('input');
inputElementResolucaoMensal.type = 'text';
labelElementResolucaoMensal.appendChild(inputElementResolucaoMensal);
liElementResolucaoMensal.appendChild(labelElementResolucaoMensal);
ulElementCongregacaoDespesas.appendChild(liElementResolucaoMensal);

// Anexando todos os elementos criados à <div> principal
divElement.appendChild(h3ElementEntradas);
divElement.appendChild(h4ElementCongregacao);
divElement.appendChild(ulElementCongregacao);
divElement.appendChild(h4ElementOutras);
divElement.appendChild(ulElementOutras);
divElement.appendChild(h3ElementDespesas);
divElement.appendChild(h4ElementCongregacaoDespesas);
divElement.appendChild(ulElementCongregacaoDespesas);

// Inserindo a <div> criada no documento HTML
document.body.appendChild(divElement);


    ele.push(divElement)
    return ele
}