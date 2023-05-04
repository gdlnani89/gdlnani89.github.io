document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
//header mes e setas
const btnVoltaMes = $id('voltarMes')
btnVoltaMes.addEventListener('click', function(){
    countMes = meses[--mesAtualNumero]
    spMesRelatorio.innerText = countMes
    relatorioAnoAtual.mes[countMes.toLowerCase()] ? atualiza.relatorioTotais() : atualiza.relatorioTotalVazio()
})
const btnAvancaMes = $id('avancarMes')
btnAvancaMes.addEventListener('click', function(){
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
    // event.preventDefault()
    btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats()}`)
    // this.onclick = window.open(`whatsapp://send?text=${atualiza.mensagemWhats()}`)
})

btnAdd.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    modalCorpo(bodyRelatorio())
    modalFooter([btnCancel(),btnSalvar(addAtividade)])
    }
);
btnAlvos.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Alvos')
    modalCorpo([])
    modalFooter([])
    }
);

// btnFecharDialogo.addEventListener('click', function() {
//     divCxDialogo.classList.remove('caixa-dialogo-aberta');
// });
