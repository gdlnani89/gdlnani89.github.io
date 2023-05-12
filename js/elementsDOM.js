document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
//header mes e setas
const btnVoltaMes = $id('voltarMes')
btnVoltaMes.addEventListener('click', function(){
    btnAnimation(this)
    countMes = meses[--mesAtualNumero]
    avancaVolta(countMes)
})
const btnAvancaMes = $id('avancarMes')
btnAvancaMes.addEventListener('click', function(){
    btnAnimation(this)
    countMes = meses[++mesAtualNumero]
    avancaVolta(countMes)
})
const spMesRelatorio = $id('mesRelatorio')
spMesRelatorio.innerText = mesAtualString
//relatório-totais
const spOM = $id('om')
spOM.innerText = calculaOM
    (contasAnoAtual.mes[mesAtualString.toLowerCase()])
const spCong = $id('cong')
spCong.innerText = calculaCong
    (contasAnoAtual.mes[mesAtualString.toLowerCase()])
const spGastos = $id('gastos')
spGastos.innerText = calculaGastos
    (contasAnoAtual.mes[mesAtualString.toLowerCase()])
const btnQtdEstudos = $id('qtdEstudos')
// btnQtdEstudos.addEventListener('click',function () {
//     divCxDialogo.classList.add('caixa-dialogo-aberta');
//     modalTitulo('Estudos')
//     modalCorpo(bodyEstudos())
//     modalFooter([])
// })
const divAlvoTempo = $id('alvoDiv')
const iconRocket = $id('rocket')
const spHorasFalta = $id('horasFalta')
const spAlvoHoras = $id('alvoHoras')
// alvo ? divAlvoTempo.innerHTML = `${setAlvoDiv()}<ion-icon name="rocket" style="font-size: 24px;color: #4A148C;"></ion-icon>` : ''
/* if(alvo){
    spHorasFalta.innerText = setAlvoDiv()
    spAlvoHoras.innerText = alvo.horas+'h'
}else{
    divAlvoTempo.classList.add('invisivel')
    spHorasFalta.innerText = ''
} */
//tabela relatorio
const tBody = $id('tbody')
contasAnoAtual.mes[mesAtualString.toLowerCase()]
    .sort((a,b)=> a.dia - b.dia)
    .forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
//modal elementos
const h2Title = $id('titleModal')
const divBodyModal = $id('corpoModal')
const divBtnsFooter = $id('btnsFooter')
const btnDialogo = $id('add')
const divCxDialogo = $id('minha-caixa-dialogo')
const btnFecharDialogo = $id('fechar-dialogo')
const inpForm = document.querySelectorAll('.form-adiciona input')
//footer elementos
const btnAlvos = $id('gastosAdd')
const btnAdd = $id('add')
const btnSend = $id('send')

btnSend.addEventListener('click', function(){
    btnAnimation(this)
    btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats(countMes,relatorioAnoAtual.mes[countMes.toLowerCase()])}`)
})

btnAdd.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Donativos')
    modalCorpo(bodyRelatorio(),'addRelatorio')
    modalFooter([btnCancel(),btnSalvar(addAtividade,'fechar-incluirAtividade')])
    }
);
btnAlvos.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Gastos')
    modalCorpo(bodyAlvo())
    modalFooter([btnCancel(),btnSalvar(addAlvo,'sair-incluirAlvo')])
    }
);
