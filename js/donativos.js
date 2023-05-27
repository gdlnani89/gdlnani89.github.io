//modal corpo relatorio form
const bodyDonativos = () =>{
    const ele = []
    const divDia = $cria('div')
    divDia.setAttribute('class','dIncDec')
    const lDia = $cria('label') 
    lDia.setAttribute('for', 'diaDon')
    lDia.innerText = 'Dia'
    const iDia = $cria('input')
    iDia.setAttribute('value', dia)
    iDia.setAttribute('type', 'number')
    iDia.setAttribute('id', 'diaDon')
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

    const lOm = $cria('label')
    lOm.setAttribute('for', 'om')
    lOm.innerText = 'Obra Mundial'
    const iValorOM = $cria('input')
    iValorOM.setAttribute('type', 'numberInp')
    iValorOM.setAttribute('id', 'omDon')
    iValorOM.setAttribute('placeHolder', 'R$ 0,00')
    iValorOM.setAttribute('style', 'text-align: end;')
    iValorOM.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')
    lOm.appendChild(iValorOM)

    // Cria o elemento <div>
    const divElement = document.createElement('div');
    divElement.classList.add('don-cong');
    
    // Cria o elemento <label> para Congregação
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'sTipoCong');
    labelElement.setAttribute('id', 'lTipoCong');
    labelElement.textContent = 'Congregação';

    // Cria o elemento <select>
    const selectElement = document.createElement('select');
    selectElement.setAttribute('name', '');
    selectElement.setAttribute('id', 'sTipoCong');

    // Cria as opções do <select>
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'cx');
    option1.textContent = 'Caixas';
    
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'ele');
    option2.textContent = 'Eletrônico';
    
    const option3 = document.createElement('option');
    option3.setAttribute('value', 'site');
    option3.textContent = 'Betel';
    
    // Adiciona as opções ao <select>
    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    selectElement.appendChild(option3);
    
    // Adiciona o <select> ao <label>
    labelElement.appendChild(selectElement);
    
    // Cria o elemento <input>
    const iValorCong = document.createElement('input');
    iValorCong.setAttribute('type', 'text');
    iValorCong.setAttribute('id', 'congInp')
    iValorCong.setAttribute('placeHolder', 'R$ 0,00')
    iValorCong.setAttribute('style', 'text-align: end;')
    iValorCong.setAttribute('onKeyUp', 'mascaraMoeda(this,event)')

    // Adiciona o <label> e o <input> ao <div>
    divElement.appendChild(labelElement);
    divElement.appendChild(iValorCong);

    // Adiciona o <div> ao elemento pai (por exemplo, o <body>)
    const parentElement = document.querySelector('body');
    parentElement.appendChild(divElement);


    ele.push(divDia, lOm,divElement)

    return ele
}
//tabela dos lançamentos na tag main
function tBodyCreate(inclusao, indice=''){
    const arrayMesAtual = contasAnoAtual.mes[countMes.toLocaleLowerCase()].lancamentos
    const contasAtual = arrayMesAtual[indice]

    const tr = $cria('tr')
    const tdDia = $cria('td')
    const tdDesc = $cria('td')
    const tdTipo = $cria('td')
    const tdValor = $cria('td')
    const tdEdit = $cria('td')
    
    const ipDia = $cria('input')
    ipDia.setAttribute('style', 'width: 18px')
    ipDia.setAttribute('value', inclusao.dia)
    ipDia.setAttribute('disabled', true)
    tdDia.appendChild(ipDia)
    const ipDesc = $cria('input')
    ipDesc.setAttribute('style', 'width: 90%')
    ipDesc.setAttribute('value', inclusao.desc)
    ipDesc.setAttribute('disabled', true)
    tdDesc.appendChild(ipDesc)
    const ipTipo = $cria('input')
    ipTipo.setAttribute('style', 'width: 18px')
    ipTipo.setAttribute('value', inclusao.tipo)
    ipTipo.setAttribute('disabled', true)
    tdTipo.appendChild(ipTipo)
    const ipValor = $cria('input')
    ipValor.setAttribute('style', 'width: 65px')
    ipValor.setAttribute('value', inclusao.valor)
    ipValor.setAttribute('disabled', true)
    tdValor.appendChild(ipValor)
    
    const btnExcluiLinha = $cria('button')
    btnExcluiLinha.innerHTML = '<ion-icon name="trash" style="font-size: 15px; color: red"></ion-icon>'
    btnExcluiLinha.addEventListener('click', function(){
        this.parentNode.parentNode.remove()
        const mesInc = spMesConta.innerText.toLowerCase()
        const arrayMesContaAtual = contasAnoAtual.mes[mesInc].lancamentos
        arrayMesContaAtual.splice(indice,1)
        atualiza.contasLS()
        atualiza.contasTotais()
    })
    const btnEditaLinha = $cria('button')
    // btnEditaLinha.setAttribute('id','editaLinha')
    btnEditaLinha.innerHTML = '<ion-icon name="create" style="font-size: 15px; color: #4A148C"></ion-icon>'
    btnEditaLinha.addEventListener('click', function(){
        const avo = this.parentNode.parentNode
        const btn = this
        btnsEditar(avo,btn,true)
    })
    const btnEditSalvar = $cria('button')
    btnEditSalvar.setAttribute('id','btnSalvarEditEst')
    noneHabilita.none(btnEditSalvar,true)
    btnEditSalvar.innerHTML = '<ion-icon name="checkmark-circle" style="font-size: 15px; color: #009688"></ion-icon>'
    btnEditSalvar.addEventListener('click',function(){
        console.log(inclusao);
        const inicial = {...inclusao}//cria uma copia 
        if(inclusao.dia !== ipDia.value){
            contasAtual.dia = ipDia.value
            console.log(inclusao);
        }
        if(inclusao.desc !== ipDesc.value){
            contasAtual.desc = ipDesc.value
            console.log(inclusao);
        }
        if(inclusao.tipo !== ipTipo.value){
            contasAtual.tipo = ipTipo.value
            console.log(inclusao);
        }
        if(inclusao.valor !== ipValor.value){
            contasAtual.valor = ipValor.value
            console.log(inclusao);
        }
        const isModified = JSON.stringify(inicial) !== JSON.stringify(inclusao)
        if(isModified){
            atualiza.contasLS() 
            atualiza.contasTotais()
        }
        const avo = this.parentNode.parentNode
        const btn = this
        noneHabilita.habilitaInps(avo.querySelectorAll('INPUT'),false)
        noneHabilita.none(btnEditSalvar,true)//botão check verde da linha
        noneHabilita.none(btnEditaLinha,true)//
        noneHabilita.none(btn,true)
        noneHabilita.none(btnEditVoltar,true)
        noneHabilita.none(btnExcluiLinha,false)
    })
    const btnEditVoltar = $cria('button')
    btnEditVoltar.addEventListener('click',function(){
        const avo = this.parentNode.parentNode
        const btn = this
        btnsEditar(avo,btn,false)
    })
    btnEditVoltar.classList.add('invisivel')
    btnEditVoltar.innerHTML = '<ion-icon name="return-up-back" style="font-size: 15px; color: #4A148C"></ion-icon>'
    btnEditVoltar.setAttribute('style', 'flex: 2')
    tdEdit.setAttribute('class','edita-n')
    tdEdit.appendChild(btnExcluiLinha)
    tdEdit.appendChild(btnEditaLinha)
    tdEdit.appendChild(btnEditVoltar)
    tdEdit.appendChild(btnEditSalvar)
    tr.appendChild(tdDia)
    tr.appendChild(tdDesc)
    tr.appendChild(tdTipo)
    tr.appendChild(tdValor)
    tr.appendChild(tdEdit)

    function btnsEditar(avo,btn,b){
        const inp = avo.querySelectorAll('INPUT')
        if(b){
            noneHabilita.habilitaInps(inp,true)
            noneHabilita.none(btnEditSalvar,false)
            noneHabilita.none(btnEditVoltar,false)
            noneHabilita.none(btn,true)
            noneHabilita.none(btnExcluiLinha,true)
        }else{
            noneHabilita.habilitaInps(inp,false)
            noneHabilita.none(btnEditSalvar,true)
            noneHabilita.none(btnEditaLinha,false)
            noneHabilita.none(btn,true)
            noneHabilita.none(btnExcluiLinha,false)
        }
    }
    
    return tr
}
function addDonativo(){
    const ipDia = $id('diaDon')
    const ipOm = $id('omDon')
    const ipCong = $id('congInp')
    const slCong = $id('sTipoCong')
    if(ipDia.value && (ipOm.value || ipCong.value) ){
        const mesInclusao = spMesConta.innerText.toLowerCase()//pego da SPAN do header
        const arrayContas = contasAnoAtual.mes[mesInclusao].lancamentos
        if(ipOm.value){
            arrayContas.push(incluiMovimentacao(
                    ipDia.value,
                    'Donativos OM',
                    'C',
                    ipOm.value.replace(/\./g, '').replace(',', '.')
                )
            )
        }
        if(ipCong.value){
            if(slCong.value === 'cx'){
                console.log('cx');
                arrayContas.push(incluiMovimentacao(
                        ipDia.value,
                        'Don. Cong. Cx',
                        'C',
                        ipCong.value.replace(/\./g, '').replace(',', '.')
                    )
                )
            }
            if(slCong.value === 'ele'){
                console.log('ele');
                arrayContas.push(incluiMovimentacao(
                        ipDia.value,
                        'Don. Cong. Eletronico',
                        'C',
                        ipCong.value.replace(/\./g, '').replace(',', '.')
                    )
                )
            }
            if(slCong.value === 'site'){
                console.log('jw');
                arrayContas.push(incluiMovimentacao(
                        ipDia.value,
                        'Don. Cong. Site',
                        'C',
                        ipCong.value.replace(/\./g, '').replace(',', '.')
                    )
                )
            }
        }
        tBody.innerHTML = ''
        arrayContas.sort((a,b)=> a.dia - b.dia).forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        inpForm.forEach(inp => inp.value = '')
        ipDia.value = dia
        divCxDialogo.classList.remove('caixa-dialogo-aberta');  
        localStorage.setItem('contas', JSON.stringify(contas))
        atualiza.contasTotais()
        // btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats(mesInclusao,arrayContas)}`)
    }else{
        console.log('falta dados');
    }
}
// function spHorasTotal(){
//     const sHorasTotal = $cria('SPAN')
//     sHorasTotal.setAttribute('id', 'horasTotal')
// }
function editaLinhas(){
    btnVoltaLinhas.classList.add('edL-v')
    btnEditaLinhas.classList.add('edL-v')
    const iconEdit = $all('.edita-n')
    iconEdit.forEach(i => i.style.display = 'flex')
}
function editaLinhasVolta(){
    btnVoltaLinhas.classList.remove('edL-v')
    btnEditaLinhas.classList.remove('edL-v')
    const iconEdit = $all('.edita-n')
    iconEdit.forEach(i => i.style.display = 'none')
}