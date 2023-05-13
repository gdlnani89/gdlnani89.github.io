function bodyGastos(){
    const ele = []
    
    const divDia = $cria('div')
    divDia.setAttribute('class','dIncDec')
    const lDia = $cria('label') 
    lDia.setAttribute('for', 'diaGasto')
    lDia.innerText = 'Dia'
    const iDia = $cria('input')
    iDia.setAttribute('value', dia)
    iDia.setAttribute('type', 'number')
    iDia.setAttribute('id', 'diaGasto')
    iDia.setAttribute('name', 'dia')
    iDia.setAttribute('min', '1')
    iDia.setAttribute('max', '31')
    iDia.setAttribute('pattern','[1-9]|[12][0-9]|3[01]')
    iDia.setAttribute('style', 'width: 35px;')
    lDia.appendChild(iDia)
    const btnMais = $cria('BUTTON')
    btnMais.innerHTML = '<ion-icon name="add-circle-outline" style="color: black; font-size: 40px;"></ion-icon>'
    btnMais.onclick = () => {
        btnAnimation(btnMais)
        iDia.value++
    }
    const btnMenos = $cria('BUTTON')
    btnMenos.innerHTML = '<ion-icon name="remove-circle-outline" style="color: black; font-size: 40px;"></ion-icon>'
    btnMenos.onclick = () => {
        btnAnimation(btnMenos)
        iDia.value--
    }
    divDia.appendChild(lDia)
    divDia.appendChild(btnMais)
    divDia.appendChild(btnMenos)

    const lDesc = $cria('LABEL')
    lDesc.innerText = 'Descrição'
    const ipDesc= $cria('INPUT')    
    ipDesc.setAttribute('type', 'text')
    ipDesc.setAttribute('id', 'descGasto')
    lDesc.appendChild(ipDesc)

    const lValor = $cria('LABEL')
    lValor.innerText = 'Valor'
    const ipValor = $cria('INPUT')    
    ipValor.setAttribute('type', 'text')
    ipValor.setAttribute('id', 'valorGasto')
    ipValor.setAttribute('placeHolder', 'R$ 0,00')
    lValor.appendChild(ipValor)

    ele.push(divDia, lDesc, lValor)
    
    return ele
}
function addGasto() {
    contas.forEach(i => {
        console.log(i.anoServico);
        if(i.anoServico === spAno.innerText)console.log(spAno.innerText);
    })
    console.log(contas.mes[countMes]);
    const ipDia = $id('diaGasto')
    const ipDesc = $id('descGasto')
    const ipValor = $id('valorGasto')
    if(ipDia.value && ipDesc.value && ipValor.value){
        const alvoCria = incluiMovimentacao(
            ipDia.value,
            ipDesc.value,
            'd',
            ipValor.value
        )
        contas.forEach(i => {
            if(i.anoServico == spAno.innerText)console.log(spAno.innerText);
        })
        console.log(contas.mes[countMes]);
        divCxDialogo.classList.remove('caixa-dialogo-aberta');
    }
    // localStorage.setItem('alvo', JSON.stringify(alvoCria))

}
function calculaDiferenca(){
    const lsAlvo = JSON.parse(localStorage.getItem('alvo'))
    const tempoAtual = totalMinutos() || 0
    const tempoAlvo = lsAlvo.horas * 60
    const calculaDiferenca = tempoAlvo-tempoAtual

    return calculaDiferenca
}
function setAlvoDiv(){
    if (calculaDiferenca()>0) {
        iconRocket.setAttribute('style','color:white; font-size:18px;')
        spHorasFalta.setAttribute('style','color:#b71c1c')
        return minutosParaHoras(calculaDiferenca())
    }else{
        iconRocket.setAttribute('style','color:#4A148C; font-size:18px;')
        spHorasFalta.setAttribute('style','color:blue')
        return minutosParaHoras(calculaDiferenca()*-1)
    }
}