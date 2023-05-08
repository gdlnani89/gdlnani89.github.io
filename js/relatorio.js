//modal corpo relatorio form
const bodyRelatorio = () =>{
    const ele = []
    {/* <label for="dia">Dia
        <input value='${dia}' type="number" id="dia" style="width: 25px;" name="dias" min="1" max="31" pattern="[1-9]|[12][0-9]|3[01]" >
    </label> */}
    let lDia = $cria('label') 
    lDia.setAttribute('for', 'dia')
    lDia.innerText = 'Dia'
    let iDia = $cria('input')
    iDia.setAttribute('value', dia)
    iDia.setAttribute('type', 'number')
    iDia.setAttribute('id', 'dia')
    iDia.setAttribute('name', 'dia')
    iDia.setAttribute('min', '1')
    iDia.setAttribute('max', '31')
    iDia.setAttribute('pattern','[1-9]|[12][0-9]|3[01]')
    iDia.setAttribute('style', 'width: 35px;')
    lDia.appendChild(iDia)
    {/* <label for="horas">Horas
        <input type="number" id="horas" style="width: 25px; text-align: end;" >:
        <input type="number" id="min" style="width: 25px;" value="00" name="minutos" min="0" max="59">
    </label> */}
    let lHoras = $cria('label')
    lHoras.setAttribute('for', 'horas')
    lHoras.innerText = 'Horas'
    let iHoras = $cria('input')
    iHoras.setAttribute('type', 'number')
    iHoras.setAttribute('id', 'horas')
    iHoras.setAttribute('value', '0')
    iHoras.setAttribute('style', 'width: 25px; text-align: end;')
    lHoras.appendChild(iHoras)
    let p = $cria('p')
    p.innerText = ':'
    lHoras.appendChild(p)
    let iMin = $cria('input')
    iMin.setAttribute('type', 'number')
    iMin.setAttribute('id', 'min')
    iMin.setAttribute('value', '00')
    iMin.setAttribute('style', 'width: 25px; text-align: end;')
    lHoras.appendChild(iMin)
    {/* <label for="videos">Vídeos
        <input type="number" id="videos" style="width: 25px;" value="0">
    </label> */}
    let lVideos = $cria('label')
    lVideos.setAttribute('for', 'videos')
    lVideos.innerText = 'Vídeos'
    let iVideos = $cria('input')
    iVideos.setAttribute('type', 'number')
    iVideos.setAttribute('id', 'videos')
    iVideos.setAttribute('value', '0')
    iVideos.setAttribute('style', 'width: 25px; text-align: end;')
    lVideos.appendChild(iVideos)
    {/* <label for="publicacao">Publicações
        <input type="number" id="publicacoes" style="width: 25px;" value="0">
    </label> */}
    let lPub = $cria('label')
    lPub.setAttribute('for', 'publicacao')
    lPub.innerText = 'Publicações'
    let iPub = $cria('input')
    iPub.setAttribute('type', 'number')
    iPub.setAttribute('id', 'publicacoes')
    iPub.setAttribute('value', '0')
    iPub.setAttribute('style', 'width: 25px; text-align: end;')
    lPub.appendChild(iPub)
    {/* <label for="revisita">Revisitas
        <input type="number" id="revisitas" style="width: 25px;" value="0">
    </label> */}
    let lRev = $cria('label')
    lRev.setAttribute('for', 'revisita')
    lRev.innerText = 'Revisitas'
    let iRev = $cria('input')
    iRev.setAttribute('type', 'number')
    iRev.setAttribute('id', 'revisitas')
    iRev.setAttribute('value', '0')
    iRev.setAttribute('style', 'width: 25px; text-align: end;')
    lRev.appendChild(iRev)
    ele.push(lDia,lHoras,lVideos,lPub,lRev)

    return ele
}
//tabela no main
function tBodyCreate(inclusao, indice=''){
    const arrayMesAtual = relatorioAnoAtual.mes[countMes.toLocaleLowerCase()]
    const atividadeAtual = arrayMesAtual[indice]

    const tempo = minuHoras(inclusao.tempo)
    const tr = $cria('tr')
    const tdDia = $cria('td')
    const tdHoras = $cria('td')
    const tdVideo = $cria('td')
    const tdPub = $cria('td')
    const tdRev = $cria('td')
    const tdEdit = $cria('td')
    
    const ipDia = $cria('input')
    ipDia.setAttribute('style', 'width: 18px')
    ipDia.setAttribute('value', inclusao.dia)
    ipDia.setAttribute('disabled', true)
    tdDia.appendChild(ipDia)
    
    const ipHoras = $cria('input')
    ipHoras.setAttribute('style', 'width: 35px')
    ipHoras.setAttribute('value', `${tempo.horas}:${tempo.minutosRestantes}`)
    ipHoras.setAttribute('disabled', true)
    tdHoras.appendChild(ipHoras)
    const ipVideos = $cria('input')
    ipVideos.setAttribute('style', 'width: 18px')
    ipVideos.setAttribute('value', inclusao.videos)
    ipVideos.setAttribute('disabled', true)
    tdVideo.appendChild(ipVideos)
    const ipPub = $cria('input')
    ipPub.setAttribute('style', 'width: 18px')
    ipPub.setAttribute('value', inclusao.publicacoes)
    ipPub.setAttribute('disabled', true)
    tdPub.appendChild(ipPub)
    const ipRev = $cria('input')
    ipRev.setAttribute('style', 'width: 18px')
    ipRev.setAttribute('value', inclusao.revisitas)
    ipRev.setAttribute('disabled', true)
    tdRev.appendChild(ipRev)
    
    const btnEditExc = $cria('button')
    btnEditExc.innerHTML = '<ion-icon name="trash" style="font-size: 20px; color: red"></ion-icon>'
    btnEditExc.addEventListener('click', function(){
        this.parentNode.parentNode.remove()
        const mesInc = spMesRelatorio.innerText.toLowerCase()
        const arrayRelatorio = relatorioAnoAtual.mes[mesInc]
        arrayRelatorio.splice(indice,1)
        atualiza.relatorioLS()
        atualiza.relatorioTotais()
    })
    const btnEditEdita = $cria('button')
    // btnEditEdita.setAttribute('id','editaLinha')
    btnEditEdita.innerHTML = '<ion-icon name="create" style="font-size: 20px; color: #4A148C"></ion-icon>'
    btnEditEdita.addEventListener('click', function(){
        const avo = this.parentNode.parentNode
        const btn = this
        btnsEditar(avo,btn,true)
    })
    const btnEditSalvar = $cria('button')
    btnEditSalvar.setAttribute('id','btnSalvarEditEst')
    noneHabilita.none(btnEditSalvar,true)
    btnEditSalvar.innerHTML = '<ion-icon name="checkmark-circle" style="font-size: 20px; color: #009688"></ion-icon>'
    btnEditSalvar.addEventListener('click',function(){
        const inicial = {...inclusao}
        let tempoInputSplit = ipHoras.value.split(':')
        let tempoInput = tempoInputSplit[0]*60+parseInt(tempoInputSplit[1])
        if(inclusao.dia !== ipDia.value){
            atividadeAtual.dia = ipDia.value
            console.log(inclusao);
        }
        if(inclusao.tempo !== tempoInput){
            atividadeAtual.tempo = tempoInput
            console.log(inclusao);
        }
        if(inclusao.videos !== ipVideos.value){
            atividadeAtual.videos = ipVideos.value
            console.log(inclusao);
        }
        if(inclusao.publicacoes !== ipPub.value){
            atividadeAtual.publicacoes = ipPub.value
            console.log(inclusao);
        }
        if(inclusao.revisitas !== ipRev.value){
            atividadeAtual.revisitas = ipRev.value
            console.log(inclusao);
        }
        const isModified = JSON.stringify(inicial) !== JSON.stringify(inclusao)
        if(isModified){
            atualiza.relatorioLS() 
            atualiza.relatorioTotais()
        }
        const avo = this.parentNode.parentNode
        const btn = this
        noneHabilita.habilitaInps(avo.querySelectorAll('INPUT'),false)
        noneHabilita.none(btnEditSalvar,true)
        noneHabilita.none(btnEditEdita,false)
        noneHabilita.none(btn,true)
        noneHabilita.none(btnEditVoltar,true)
        noneHabilita.none(btnEditExc,false)
    })
    const btnEditVoltar = $cria('button')
    btnEditVoltar.addEventListener('click',function(){
        const avo = this.parentNode.parentNode
        const btn = this
        btnsEditar(avo,btn,false)
    })
    btnEditVoltar.classList.add('invisivel')
    btnEditVoltar.innerHTML = '<ion-icon name="return-up-back" style="font-size: 20px; color: #4A148C"></ion-icon>'
    btnEditVoltar.setAttribute('style', 'flex: 2')
    tdEdit.appendChild(btnEditExc)
    tdEdit.appendChild(btnEditEdita)
    tdEdit.appendChild(btnEditVoltar)
    tdEdit.appendChild(btnEditSalvar)
    tr.appendChild(tdDia)
    tr.appendChild(tdHoras)
    tr.appendChild(tdVideo)
    tr.appendChild(tdPub)
    tr.appendChild(tdRev)
    tr.appendChild(tdEdit)

    function btnsEditar(avo,btn,b){
        const inp = avo.querySelectorAll('INPUT')
        if(b){
            noneHabilita.habilitaInps(inp,true)
            noneHabilita.none(btnEditSalvar,false)
            noneHabilita.none(btnEditVoltar,false)
            noneHabilita.none(btn,true)
            noneHabilita.none(btnEditExc,true)
        }else{
            noneHabilita.habilitaInps(inp,false)
            noneHabilita.none(btnEditSalvar,true)
            noneHabilita.none(btnEditEdita,false)
            noneHabilita.none(btn,true)
            noneHabilita.none(btnEditExc,false)
        }
    }
    
    return tr
}
function addAtividade(){
    const ipDia = $id('dia')
    const ipHoras = $id('horas')
    const ipMin = $id('min')
    const ipVideos = $id('videos')
    const ipPub = $id('publicacoes')
    const ipRev = $id('revisitas')
    if(ipDia.value && ipHoras.value || ipMin.value ){
        const atividade = {
            dia : ipDia.value,
            tempo : (parseInt(ipHoras.value)*60)+(parseInt(ipMin.value)),
            videos : ipVideos.value,
            publicacoes : ipPub.value,
            revisitas : ipRev.value
        }
        const totalMinutos = (parseInt(ipHoras.value)*60)+(parseInt(ipMin.value))
        // tBody.appendChild(tBodyCreate(atividade))
        const mesInc = spMesRelatorio.innerText.toLowerCase()
        const arrayRelatorio = relatorioAnoAtual.mes[mesInc]
        arrayRelatorio.push(incluiAtividade(
            atividade.dia,
            totalMinutos,
            atividade.videos,
            atividade.publicacoes,
            atividade.revisitas,
            spEstudosTotal.innerText
            )
        )
        tBody.innerHTML = ''
        arrayRelatorio.sort((a,b)=> a.dia - b.dia).forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        inpForm.forEach(inp => inp.value = '0')
        ipDia.value = dia
        ipMin.value = '00'      
        divCxDialogo.classList.remove('caixa-dialogo-aberta');  
        localStorage.setItem('relatorio', JSON.stringify(relatorio))
        atualiza.relatorioTotais()
        btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats(mesInc,arrayRelatorio)}`)
    }else{
        console.log('falta horas');
    }
}
// function spHorasTotal(){
//     const sHorasTotal = $cria('SPAN')
//     sHorasTotal.setAttribute('id', 'horasTotal')
// }