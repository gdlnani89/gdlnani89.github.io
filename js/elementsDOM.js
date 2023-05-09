document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
//header mes e setas
const btnVoltaMes = $id('voltarMes')
btnVoltaMes.addEventListener('click', function(){
    btnVoltaMes.classList.add('clicked');

    setTimeout(() => {
        btnVoltaMes.classList.remove('clicked');
    }, 300);
    countMes = meses[--mesAtualNumero]
    spMesRelatorio.innerText = countMes
    relatorioAnoAtual.mes[countMes.toLowerCase()] ? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
})
const btnAvancaMes = $id('avancarMes')
btnAvancaMes.addEventListener('click', function(){
    btnAvancaMes.classList.add('clicked');

    setTimeout(() => {
        btnAvancaMes.classList.remove('clicked');
    }, 300);
    countMes = meses[++mesAtualNumero]
    spMesRelatorio.innerText = countMes
    relatorioAnoAtual.mes[countMes.toLowerCase()]? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
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
const spAlvoHoras = $id('alvoHoras')
// alvo ? divAlvoTempo.innerHTML = `${setAlvoDiv()}<ion-icon name="rocket" style="font-size: 24px;color: #4A148C;"></ion-icon>` : ''
if(alvo){
    spAlvoHoras.innerText = setAlvoDiv()
}else{
    divAlvoTempo.classList.add('invisivel')
    spAlvoHoras.innerText = ''
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
