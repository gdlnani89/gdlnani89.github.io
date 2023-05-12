document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
//header mes e setas
const btnVoltaMes = $id('voltarMes')
btnVoltaMes.addEventListener('click', function(){
    btnEfeito(this)
    if(mesAtualNumero)countMes = meses[--mesAtualNumero] 
    spMesRelatorio.innerText = countMes
    console.log(relatorioAnoAtual.mes);
    if(countMes === 'março'){
        relatorioAnoAtual.mes['marco'] ? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
    }else{
        relatorioAnoAtual.mes[countMes.toLowerCase()] ? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
    }
    if((countMes === alvo.mes) && (alvo.ano === relatorioAnoAtual.anoServico)){
        spHorasFalta.innerText = setAlvoDiv()
        spAlvoHoras.innerText = alvo.horas+'h'
        divAlvoTempo.classList.remove('invisivel')
    }else{
        divAlvoTempo.classList.add('invisivel')
        spHorasFalta.innerText = ''
    }

})
const btnAvancaMes = $id('avancarMes')
btnAvancaMes.addEventListener('click', function(){
    btnEfeito(this)
    countMes = meses[++mesAtualNumero]
    spMesRelatorio.innerText = countMes
    // relatorioAnoAtual.mes[countMes.toLowerCase()]? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
    if(countMes === 'março'){
        relatorioAnoAtual.mes['marco'] ? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
    }else{
        relatorioAnoAtual.mes[countMes.toLowerCase()] ? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
    }
    if((countMes === alvo.mes) && (alvo.ano === relatorioAnoAtual.anoServico)){
        spHorasFalta.innerText = setAlvoDiv()
        spAlvoHoras.innerText = alvo.horas+'h'
        divAlvoTempo.classList.remove('invisivel')
    }else{
        divAlvoTempo.classList.add('invisivel')
        spHorasFalta.innerText = ''
    }
})
const spMesRelatorio = $id('mesRelatorio')
spMesRelatorio.innerText = mesAtualString
//relatório-totais
const spHorasTotal = $id('horasTotal')
spHorasTotal.innerText = calculaHorasTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spRevTotal = $id('revisitasTotal')
spRevTotal.innerText = calculaRevisitasTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spVideosTotal = $id('videosTotal')
spVideosTotal.innerText = calculaVideosTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spPubTotal = $id('pubTotal')
spPubTotal.innerText = calculaPublicacoesTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()])
const spEstudosTotal = $id('estudosTotal')
estudos.lenght === 0 ? spEstudosTotal.innerText = '00' : atualiza.estudosSpan()
const btnQtdEstudos = $id('qtdEstudos')
btnQtdEstudos.addEventListener('click',function () {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Estudos')
    modalCorpo(bodyEstudos())
    modalFooter([])
})
const divAlvoTempo = $id('alvoDiv')
const iconRocket = $id('rocket')
const spHorasFalta = $id('horasFalta')
const spAlvoHoras = $id('alvoHoras')
// alvo ? divAlvoTempo.innerHTML = `${setAlvoDiv()}<ion-icon name="rocket" style="font-size: 24px;color: #4A148C;"></ion-icon>` : ''
if(alvo){
    spHorasFalta.innerText = setAlvoDiv()
    spAlvoHoras.innerText = alvo.horas+'h'
}else{
    divAlvoTempo.classList.add('invisivel')
    spHorasFalta.innerText = ''
}
//tabela relatorio
const tBody = $id('tbody')
relatorioAnoAtual.mes[mesAtualString.toLowerCase()].sort((a,b)=> a.dia - b.dia).forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
//modal elementos
const h2Title = $id('titleModal')
const divBodyModal = $id('corpoModal')
const divBtnsFooter = $id('btnsFooter')
const btnDialogo = $id('add')
const divCxDialogo = $id('minha-caixa-dialogo')
const btnFecharDialogo = $id('fechar-dialogo')
const inpForm = document.querySelectorAll('.form-adiciona input')
//footer elementos
const btnAlvos = $id('alvo')
const btnAdd = $id('add')
const btnSend = $id('send')

btnSend.addEventListener('click', function(){
    btnSend.classList.add('clicked');

    setTimeout(() => {
        btnSend.classList.remove('clicked');
    }, 300);
    // event.preventDefault()
    btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats(countMes,relatorioAnoAtual.mes[countMes.toLowerCase()])}`)
    // this.onclick = window.open(`whatsapp://send?text=${atualiza.mensagemWhats()}`)
})

btnAdd.addEventListener('click', function() {
    btnAdd.classList.add('clicked');

    setTimeout(() => {
        btnAdd.classList.remove('clicked');
    }, 300);
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    modalCorpo(bodyRelatorio(),'addRelatorio')
    modalFooter([btnCancel(),btnSalvar(addAtividade,'fechar-incluirAtividade')])
    }
);
btnAlvos.addEventListener('click', function() {
    btnAlvos.classList.add('clicked');

    setTimeout(() => {
        btnAlvos.classList.remove('clicked');
    }, 300);
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Alvos')
    modalCorpo(bodyAlvo())
    modalFooter([btnCancel(),btnSalvar(addAlvo,'sair-incluirAlvo')])
    }
);

// btnFecharDialogo.addEventListener('click', function() {
//     divCxDialogo.classList.remove('caixa-dialogo-aberta');
// });
