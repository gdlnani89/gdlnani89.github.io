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
    ipValor.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')
    lValor.appendChild(ipValor)

    ele.push(divDia, lDesc, lValor)
    
    return ele
}
function addGasto() {
    const ipDia = $id('diaGasto')
    const ipDesc = $id('descGasto')
    const ipValor = $id('valorGasto')
    if(ipDia.value && ipDesc.value && ipValor.value){
        const mesInclusao = spMesConta.innerText.toLowerCase()
        const arrayContas = contasAnoAtual.mes[mesInclusao].lancamentos
        arrayContas.push(
            incluiMovimentacao(
                ipDia.value,
                ipDesc.value,
                'D',
                ipValor.value.replace(/\./g, '').replace(',', '.')
            )
        )
        tBody.innerHTML = ''
        arrayContas.sort((a,b)=> a.dia - b.dia).forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        inpForm.forEach(inp => inp.value = '')
        ipDia.value = dia
        divCxDialogo.classList.remove('caixa-dialogo-aberta');  
        localStorage.setItem('contas', JSON.stringify(contas))
        atualiza.contasTotais()
    }
}

