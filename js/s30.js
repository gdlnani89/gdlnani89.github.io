function bodyModalS30(){
    const ele = []
    // Criação do elemento <div>
    const divElement = document.createElement('div');
    const divSaldoInicial = document.createElement('div');
    divSaldoInicial.style.display = 'flex'
    divSaldoInicial.style.width = '90%'
    const labelSaldoInicial = document.createElement('label');
    labelSaldoInicial.textContent = 'Saldo Inicial'
    const inputSaldoInicial = document.createElement('input');
    inputSaldoInicial.type = 'text';
    inputSaldoInicial.setAttribute('disabled', true);
    inputSaldoInicial.style.width = '95%'
    labelSaldoInicial.appendChild(inputSaldoInicial)
    const btnSaldoInicial = btnEditaCria(inputSaldoInicial)
    divSaldoInicial.appendChild(labelSaldoInicial)
    divSaldoInicial.appendChild(btnSaldoInicial.edita)
    divSaldoInicial.appendChild(btnSaldoInicial.salva)
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
    inputElementTransferenciasEletronicas.setAttribute('disabled', true);
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
    // inputElementDespesasOperacionais.setAttribute('disabled', true);
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
    //saldo final
    const labelSaldoFinal = $cria('label')
    labelSaldoFinal.textContent = 'Saldo Final'
    const inpSaldoFinal = $cria('input')
    inpSaldoFinal.setAttribute('id', 's30saldoFinal')
    labelSaldoFinal.appendChild(inpSaldoFinal)
    // Anexando todos os elementos criados à <div> principal
    divElement.appendChild(divSaldoInicial);
    divElement.appendChild(h3ElementEntradas);
    divElement.appendChild(h4ElementCongregacao);
    divElement.appendChild(ulElementCongregacao);
    divElement.appendChild(h4ElementOutras);
    divElement.appendChild(ulElementOutras);
    divElement.appendChild(h3ElementDespesas);
    divElement.appendChild(h4ElementCongregacaoDespesas);
    divElement.appendChild(ulElementCongregacaoDespesas);
    divElement.appendChild(labelSaldoFinal);

    // Inserindo a <div> criada no documento HTML
    document.body.appendChild(divElement);

    function btnEditaCria(inpHab){
        console.log(inpHab);
        const btnEdita = $cria('button')
        btnEdita.innerHTML ='<ion-icon name="create-outline" style="color: green; font-size: 20px;"></ion-icon>'
        btnEdita.classList.add('c-sa-s')
        // btnEdita.classList.add('db')
        btnEdita.addEventListener('click', function(){
            this.classList.add('db')
            btnSalva.classList.remove('db')
            inpHab.removeAttribute('disabled')
            inpHab.focus()
        })
        const btnSalva = $cria('button')
        btnSalva.innerHTML ='<ion-icon name="checkmark-outline" style="color: green; font-size: 20px;"></ion-icon>'
        btnSalva.classList.add('c-sa-s')
        btnSalva.classList.add('db')
        btnSalva.addEventListener('click', function(){
            this.classList.add('db')
            btnEdita.classList.remove('db')
            inpHab.setAttribute('disabled', true)
        })

        const btns = {
            edita : btnEdita,
            salva : btnSalva
        }
        return btns
    }

    ele.push(divElement)
    return ele
}