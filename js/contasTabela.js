function tBodyCreate(inclusao, indice=''){
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
    ipDia.setAttribute('id', indice+'dia')
    ipDia.setAttribute('value', inclusao.dia)
    ipDia.setAttribute('disabled', true)
    tdDia.appendChild(ipDia)

    const ipHoras = $cria('input')
    ipHoras.setAttribute('style', 'width: 35px')
    ipHoras.setAttribute('id', indice+'horas')
    ipHoras.setAttribute('value', `${tempo.horas}:${tempo.minutosRestantes}`)
    ipHoras.setAttribute('disabled', true)
    tdHoras.appendChild(ipHoras)
    const ipVideos = $cria('input')
    ipVideos.setAttribute('style', 'width: 18px')
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
    noneHabilita.none(btnEditSalvar,true)
    btnEditSalvar.innerHTML = '<ion-icon name="checkmark-circle" style="font-size: 20px; color: #009688"></ion-icon>'
    btnEditSalvar.addEventListener('click', function(){
        const ipDia = $id(indice+'dia')
        const ipHoras = $id(indice+'horas')
        const tempo = (ipHoras.value.split(':')[0]*60)+(parseInt(ipHoras.value.split(':')[1]))
        
        console.log('indice da inclusão '+indice)
        console.log(inclusao);
        
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
