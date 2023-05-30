function bodyModalS30(){
    let mes = $id('mes')
    let {
        mesAtualObj,
        somaCongCx,
        somaCongElet,
        somaCongSite,
        somaOM,
        somaGastosFixos,
        somaGastosOutros,
        saldoInicialS30,
        resolucao
    } = atualizaCarteira(mes.innerText.toLowerCase())
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
    inputSaldoInicial.setAttribute('id', 'iSaldoInicialS30');
    inputSaldoInicial.style.width = '95%'
    inputSaldoInicial.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')
    inputSaldoInicial.value = saldoInicialS30.toFixed(2)
    labelSaldoInicial.appendChild(inputSaldoInicial)
    const btnSaldoInicial = btnEditaCria(inputSaldoInicial,saldoInicialSalva)
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
    inputElementCaixaDonativos.setAttribute('readonly', true)
    inputElementCaixaDonativos.value = somaCongCx
    labelElementCaixaDonativos.appendChild(inputElementCaixaDonativos);
    liElementCaixaDonativos.appendChild(labelElementCaixaDonativos);

    ulElementCongregacao.appendChild(liElementCaixaDonativos);

    // Criação do segundo item da lista de entradas da congregação
    const liElementTransferenciasEletronicas = document.createElement('li');
    const labelElementTransferenciasEletronicas = document.createElement('label');
    labelElementTransferenciasEletronicas.textContent = 'Transfências eletrônicas';
    const inputElementTransferenciasEletronicas = document.createElement('input');
    inputElementTransferenciasEletronicas.type = 'text';
    inputElementTransferenciasEletronicas.value = somaCongElet;
    inputElementTransferenciasEletronicas.setAttribute('readonly', true);
    labelElementTransferenciasEletronicas.appendChild(inputElementTransferenciasEletronicas);
    liElementTransferenciasEletronicas.appendChild(labelElementTransferenciasEletronicas);

    ulElementCongregacao.appendChild(liElementTransferenciasEletronicas);

    // Criação do terceiro item da lista de entradas da congregação
    const liElementPeloSite = document.createElement('li');
    const labelElementPeloSite = document.createElement('label');
    labelElementPeloSite.textContent = 'Pelo site';
    const inputElementPeloSite = document.createElement('input');
    inputElementPeloSite.type = 'text';
    inputElementPeloSite.value = somaCongSite;
    inputElementPeloSite.setAttribute('readonly', true)
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
    inputElementOMCaixaDonativos.value = somaOM;
    inputElementOMCaixaDonativos.setAttribute('readonly', true)
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
    labelElementDespesasOperacionais.textContent = 'Recorrentes do Salão do Reino';
    const inputElementDespesasOperacionais = document.createElement('input');
    inputElementDespesasOperacionais.type = 'text';
    inputElementDespesasOperacionais.value = somaGastosFixos;
    inputElementDespesasOperacionais.setAttribute('readonly', true)
    labelElementDespesasOperacionais.appendChild(inputElementDespesasOperacionais);
    liElementDespesasOperacionais.appendChild(labelElementDespesasOperacionais);
    ulElementCongregacaoDespesas.appendChild(liElementDespesasOperacionais);

    //Criação do segundo item da lista - Resolução
    const liElementResolucaoMensal = document.createElement('li');
    const divResolucao = document.createElement('div');
    divResolucao.style.display = 'flex'
    divResolucao.style.width = '90%'
    const labelResolucao = document.createElement('label');
    labelResolucao.textContent = 'Resolução'
    const inputResolucao = document.createElement('input');
    inputResolucao.type = 'text';
    inputResolucao.setAttribute('disabled', true);
    inputResolucao.setAttribute('id', 'iResolucao')
    inputResolucao.style.width = '95%'
    inputResolucao.value = resolucao.toFixed(2)
    inputResolucao.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')
    labelResolucao.appendChild(inputResolucao)
    const btnResolucao = btnEditaCria(inputResolucao,resolucaoSalva)
    divResolucao.appendChild(labelResolucao)
    divResolucao.appendChild(btnResolucao.edita)
    divResolucao.appendChild(btnResolucao.salva)
    liElementResolucaoMensal.appendChild(divResolucao)
    ulElementCongregacaoDespesas.appendChild(liElementResolucaoMensal);
    
    //Criação de terceiro item da lisata - Outras despesas
    const liOutraDespesas = document.createElement('li');
    const labelOutrasDespesas = document.createElement('label');
    labelOutrasDespesas.textContent = 'Outros gastos';
    const iOutrasDespesas = document.createElement('input');
    iOutrasDespesas.type = 'text';
    iOutrasDespesas.value = somaGastosOutros;
    iOutrasDespesas.setAttribute('readonly', true)
    labelOutrasDespesas.appendChild(iOutrasDespesas);
    liOutraDespesas.appendChild(labelOutrasDespesas);
    ulElementCongregacaoDespesas.appendChild(liOutraDespesas);

    //Criação de h4 e texto "Outras Despesas"
    const h4OutrasDespesas = document.createElement('h4');
    h4OutrasDespesas.textContent = 'Outras despesas';

    // Criação da lista <ul> para as outras despesas
    const ulOutrasDespesas = document.createElement('ul');

    // Criação do item da lista de outras despesas
    const liOmOutrasDespesas = document.createElement('li');
    const labelOmOutrasDespesas = document.createElement('label');
    labelOmOutrasDespesas.textContent = 'OM Caixa de donativos';
    const iOmOutrasDespesas = document.createElement('input');
    iOmOutrasDespesas.type = 'text';
    iOmOutrasDespesas.value = somaOM;
    iOmOutrasDespesas.setAttribute('readonly', true)
    labelOmOutrasDespesas.appendChild(iOmOutrasDespesas);
    liOmOutrasDespesas.appendChild(labelOmOutrasDespesas);
    ulOutrasDespesas.appendChild(liOmOutrasDespesas);
    //saldo final
    const labelSaldoFinal = $cria('label')
    labelSaldoFinal.textContent = 'Saldo Final'
    const inpSaldoFinal = $cria('input')
    inpSaldoFinal.setAttribute('id', 's30saldoFinal')
    inpSaldoFinal.value = mascaraReal(saldoFinal())
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
    divElement.appendChild(h4OutrasDespesas);
    divElement.appendChild(ulOutrasDespesas);
    divElement.appendChild(labelSaldoFinal);

    // Inserindo a <div> criada no documento HTML
    document.body.appendChild(divElement);
    //funções
    function btnEditaCria(inpHab,fn){
        const btnEdita = $cria('button')
        btnEdita.setAttribute('id', 'btnEdita')
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
        // btnSalva.setAttribute
        btnSalva.innerHTML ='<ion-icon name="checkmark-outline" style="color: green; font-size: 20px;"></ion-icon>'
        btnSalva.classList.add('c-sa-s')
        btnSalva.classList.add('db')
        btnSalva.addEventListener('click', fn)
        const btns = {
            edita : btnEdita,
            salva : btnSalva
        }
        return btns
    }
    function resolucaoSalva(){
        const btnEdita = $id('btnEdita')
        this.classList.add('db')
        btnEdita.classList.remove('db')
        const inpResolucao = $id('iResolucao')
        contasAnoAtual.mes[mesAtualString.toLowerCase()].resolucao = inpResolucao.value
        atualiza.contasLS()
    }
    function saldoInicialSalva(){
        const btnEdita = $id('btnEdita')
        const iSaldoFinal = $id('s30saldoFinal')
        this.classList.add('db')
        btnEdita.classList.remove('db')
        const inpSaldoInicial = $id('iSaldoInicialS30')
        contasAnoAtual.mes[mesAtualString.toLowerCase()].saldoInicialS30 = inpSaldoInicial.value  
        // console.log(contasAnoAtual.mes[mesAtualString.toLowerCase()]);
        atualiza.contasLS()
        iSaldoFinal.value = mascaraReal(saldoFinal())
    }
    function saldoFinal(){
        let {lancamentos, saldoInicialS30, resolucao} = mesAtualObj
        let congCx = calculaSoma(lancamentos,cong)
        let congEle = calculaSoma(lancamentos,congElet)
        let congBetel = calculaSoma(lancamentos,congSite)
        let oM = calculaSoma(lancamentos,om)
        let todasEntradas = congCx + congEle + congBetel + oM + valorCalculavel(saldoInicialS30)

        let saidaGastos = calculaSoma(lancamentos,gastos)
        let todasSaida = saidaGastos + oM + valorCalculavel(resolucao)
        
        let saldoFinal = todasEntradas - todasSaida
        return saldoFinal
    }
    saldoFinal()
    ele.push(divElement)
    return ele
}