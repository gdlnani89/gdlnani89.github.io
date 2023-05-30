function bodyModalCarteira(){
    let mes = $id('mes')
    const {
        mesAtualObj : atual,
        getSaldoInicial : sInicial,
        getSaldoInicialBetel : sIniBetel,
        somaConta,
        somaBetel
    } = atualizaCarteira(mes.innerText.toLowerCase())

    const ele = []
    //saldo anterior
    const divSaldoAnterior = $cria('div')
    divSaldoAnterior.classList.add('d-c')
    const lSaldoAnterior = $cria('label')
    lSaldoAnterior.innerText = 'Saldo inicial'
    lSaldoAnterior.style.width = '80%'
    const iSaldo = $cria('input')
    iSaldo.setAttribute('disabled', true)
    iSaldo.style.width = '90%'
    iSaldo.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')
    // iSaldo.value = mesAtualObj.saldoContaInicial || ''
    iSaldo.value =  atual.saldoContaInicial || ''
    lSaldoAnterior.appendChild(iSaldo)
    const btnEdita = $cria('button')
    btnEdita.classList.add('c-sa-s')
    btnEdita.innerHTML ='<ion-icon name="create-outline" style="color: black; font-size: 20px;"></ion-icon>'
    btnEdita.addEventListener('click', function(){
        this.classList.add('db')
        btnSalva.classList.remove('db')
        iSaldo.removeAttribute('disabled')
        iSaldo.focus()
    })
    const btnSalva = $cria('button')
    btnSalva.innerHTML ='<ion-icon name="checkmark-outline" style="color: green; font-size: 20px;"></ion-icon>'
    btnSalva.classList.add('c-sa-s')
    btnSalva.classList.add('db')
    btnSalva.addEventListener('click', function(){
        this.classList.add('db')
        btnEdita.classList.remove('db')
        iSaldo.setAttribute('disabled', true)
        atual.saldoContaInicial = iSaldo.value
        atualiza.contasLS()
        let atual2 = atualizaCarteira()
        iSaldoFinal.value = 'R$ '+mask.valor(atual2.somaConta) || ''
    })
    divSaldoAnterior.appendChild(lSaldoAnterior)
    divSaldoAnterior.appendChild(btnEdita)
    divSaldoAnterior.appendChild(btnSalva)

    const divSaldoEmBetelAnterior = $cria('div')    
    divSaldoEmBetelAnterior.classList.add('d-c')
    const lSaldoEmBetelAnterior = $cria('label')
    lSaldoEmBetelAnterior.style.width = '80%'
    lSaldoEmBetelAnterior.innerText = 'Saldo inicial em Betel'
    const iSaldoEmBetelAnterior = $cria('input')
    iSaldoEmBetelAnterior.setAttribute('disabled', true)
    iSaldoEmBetelAnterior.style.width = '90%'
    iSaldoEmBetelAnterior.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')
    iSaldoEmBetelAnterior.value
        =atual.saldoBetelInicial || ''
    lSaldoEmBetelAnterior.appendChild(iSaldoEmBetelAnterior)
    const btnEditaBetel = $cria('button')
    btnEditaBetel.classList.add('c-sa-s')
    btnEditaBetel.innerHTML ='<ion-icon name="create-outline" style="color: black; font-size: 20px;"></ion-icon>'
    btnEditaBetel.addEventListener('click', function(){
        this.classList.add('db')
        btnSalvaBetel.classList.remove('db')
        iSaldoEmBetelAnterior.removeAttribute('disabled')
        iSaldoEmBetelAnterior.focus()
    })
    const btnSalvaBetel = $cria('button')
    btnSalvaBetel.innerHTML ='<ion-icon name="checkmark-outline" style="color: green; font-size: 20px;"></ion-icon>'
    btnSalvaBetel.classList.add('c-sa-s')
    btnSalvaBetel.classList.add('db')
    btnSalvaBetel.addEventListener('click', function(){
        this.classList.add('db')
        btnEditaBetel.classList.remove('db')
        iSaldoEmBetelAnterior.setAttribute('disabled', true)
        contasAnoAtual.mes[mesAtualString.toLowerCase()].saldoBetelInicial = iSaldoEmBetelAnterior.value
        atualiza.contasLS()
        let atual2 = atualizaCarteira()
        iSaldoFinalBetel.value = 'R$ '+mask.valor(atual2.somaBetel) || ''
    })
    divSaldoEmBetelAnterior.appendChild(lSaldoEmBetelAnterior)
    divSaldoEmBetelAnterior.appendChild(btnEditaBetel)
    divSaldoEmBetelAnterior.appendChild(btnSalvaBetel)

    const divSaldoFinal = $cria('div')    
    divSaldoFinal.classList.add('d-c')
    const lSaldoFinal = $cria('label')
    lSaldoFinal.style.width = '80%'
    lSaldoFinal.innerText = 'Saldo final'
    const iSaldoFinal = $cria('input')
    iSaldoFinal.setAttribute('disabled', true)
    iSaldoFinal.style.width = '90%'
    
    iSaldoFinal.value = 'R$ '+mask.valor(somaConta) || ''
    lSaldoFinal.appendChild(iSaldoFinal)
   
    divSaldoFinal.appendChild(lSaldoFinal)

    const divSaldoFinalBetel = $cria('div')    
    divSaldoFinalBetel.classList.add('d-c')
    const lSaldoFinalBetel = $cria('label')
    lSaldoFinalBetel.style.width = '80%'
    lSaldoFinalBetel.innerText = 'Saldo final em Betel'
    const iSaldoFinalBetel = $cria('input')
    iSaldoFinalBetel.setAttribute('disabled', true)
    iSaldoFinalBetel.style.width = '90%'
    iSaldoFinalBetel.value = 'R$ '+mask.valor(somaBetel) || ''
    lSaldoFinalBetel.appendChild(iSaldoFinalBetel)
   
    divSaldoFinalBetel.appendChild(lSaldoFinalBetel)

    ele.push(divSaldoAnterior, divSaldoEmBetelAnterior, divSaldoFinal, divSaldoFinalBetel)

    return ele
}