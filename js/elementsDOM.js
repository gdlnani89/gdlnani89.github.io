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
const spMesConta = $id('mes')
spMesConta.innerText = mesAtualString
const spAno = $id('ano')
//contas-totais
const spOMtotal = $id('om')
spOMtotal.innerText = calculaOM
    (contasAnoAtual.mes[mesAtualString.toLowerCase()])
const spCongTotal = $id('cong')
spCongTotal.innerText = calculaCong
    (contasAnoAtual.mes[mesAtualString.toLowerCase()])
const spGastosTotal = $id('gastos')
spGastosTotal.innerText = calculaGastos
    (contasAnoAtual.mes[mesAtualString.toLowerCase()])
const btnQtdEstudos = $id('qtdEstudos')

const tBody = $id('tbody')
contasAnoAtual.mes[mesAtualString.toLowerCase()]
    .sort((a,b)=> a.dia - b.dia)
    .forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
const btnEditaLinhas = $id('editaLinhas')
const btnVoltaLinhas = $id('voltaLinhas')
//modal elementos
const divModalDialogo = $id('caixa-dialogo-conteudo')
const h2Title = $id('titleModal')
const divBodyModal = $id('corpoModal')
const divBtnsFooter = $id('btnsFooter')
const btnDialogo = $id('add')
const divCxDialogo = $id('minha-caixa-dialogo')
const btnFecharDialogo = $id('fechar-dialogo')
const inpForm = document.querySelectorAll('.form-adiciona input')
//footer elementos
const btnGastos = $id('gastosAdd')
const btnDonativos = $id('donativosAdd')
const btnCarteira = $id('carteiraAdd')
const btnS30 = $id('s-30')
const btnSend = $id('send')

btnSend.addEventListener('click', function(){
    btnAnimation(this)
    btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats(countMes,relatorioAnoAtual.mes[countMes.toLowerCase()])}`)
})

btnDonativos.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
<<<<<<< HEAD
    modalTitulo('Donativos')
    modalCorpo(bodyDonativos())
=======
    modalTitulo('Donativos(c)')
    modalCorpo(bodyDonativos(),'addRelatorio')
>>>>>>> cad93269282b158729e28fb03244d467308ca682
    modalFooter([btnCancel(),btnSalvar(addDonativo,'fechar-incluirAtividade')])
    }
);
btnCarteira.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Conta')
    modalCorpo(bodyModalCarteira())
    modalFooter([btnCancel(),btnSalvar(addGasto,'sair-incluirAlvo')])
    }
);
btnS30.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Relatório Mensal')
    modalCorpo(bodyModalS30(),'10%')
    modalFooter([btnCancel(),btnSalvar(addGasto,'sair-incluirAlvo')])
    }
);
btnGastos.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Gastos(d)')
    modalCorpo(bodyGastos())
    modalFooter([btnCancel(),btnSalvar(addGasto,'sair-incluirAlvo')])
    }
);
/* contas.forEach(i => {
    console.log(typeof(parseInt(spAno.innerText)));
    console.log(i.anoServico = spAno.innerText);
    if(i.anoServico === spAno.innerText){
        contasAnoAtual = i.mes[countMes.toLocaleLowerCase()]
        console.log(contasAnoAtual);
        console.log(contas);
    }else{
        contas.push(criaContas(ano))
    }
}) */