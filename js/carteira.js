function bodyModalCarteira(){
    const ele = []
    //saldo anterior
    const divSaldoAnterior = $cria('div')
    divSaldoAnterior.classList.add('d-c')
    const lSaldoAnterior = $cria('label')
    lSaldoAnterior.innerText = 'Saldo anterior'
    const iSaldo = $cria('input')
    iSaldo.setAttribute('disabled', true)
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
    })
    divSaldoAnterior.appendChild(lSaldoAnterior)
    divSaldoAnterior.appendChild(btnEdita)
    divSaldoAnterior.appendChild(btnSalva)

    const divSaldoEmBetelAnterior = $cria('div')    
    divSaldoEmBetelAnterior.classList.add('d-c')
    const lSaldoEmBetelAnterior = $cria('label')
    lSaldoEmBetelAnterior.innerText = 'Saldo anterior em Betel'
    const iSaldoEmBetelAnterior = $cria('input')
    iSaldoEmBetelAnterior.setAttribute('disabled', true)
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
    })
    divSaldoEmBetelAnterior.appendChild(lSaldoEmBetelAnterior)
    divSaldoEmBetelAnterior.appendChild(btnEditaBetel)
    divSaldoEmBetelAnterior.appendChild(btnSalvaBetel)
    ele.push(divSaldoAnterior, divSaldoEmBetelAnterior)
    return ele
}