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

    // Cria o elemento <div>
    const divElement = document.createElement('div');
    divElement.classList.add('don-cong');
    
    // Cria o elemento <label> para Congregação
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'sTipoCong');
    labelElement.setAttribute('id', 'lTipoCong');
    labelElement.textContent = 'Tipo';

    // Cria o elemento <select>
    const selectElement = document.createElement('select');
    selectElement.setAttribute('name', '');
    selectElement.setAttribute('id', 'sTipoGasto');

    // Cria as opções do <select>
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'fixo');
    option1.textContent = 'Recorrente';
    
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'outros');
    option2.textContent = 'Outros';
    
    // Adiciona as opções ao <select>
    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    
    // Adiciona o <select> ao <label>
    labelElement.appendChild(selectElement);
    
    // Cria o elemento <input>
    const iValorCong = document.createElement('input');
    iValorCong.setAttribute('type', 'text');
    iValorCong.setAttribute('id', 'valorGasto')
    iValorCong.setAttribute('placeHolder', 'R$ 0,00')
    iValorCong.setAttribute('style', 'text-align: end;')
    iValorCong.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')

    // Adiciona o <label> e o <input> ao <div>
    divElement.appendChild(labelElement);
    divElement.appendChild(iValorCong);

    ele.push(divDia, lDesc,divElement)
    
    return ele
}
function addGasto() {
    const ipDia = $id('diaGasto')
    const ipDesc = $id('descGasto')
    const ipValor = $id('valorGasto')
    const sTipo = $id('sTipoGasto')
    if(ipDia.value && ipDesc.value && ipValor.value){
        const mesInclusao = spMesConta.innerText.toLowerCase()
        const arrayContas = contasAnoAtual.mes[mesInclusao].lancamentos
        console.log(sTipo.value);
        arrayContas.push(
            incluiMovimentacao(
                ipDia.value,
                ipDesc.value,
                'D',
                ipValor.value.replace(/\./g, '').replace(',', '.'),
                sTipo.value
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

