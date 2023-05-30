const {
    somaBetel : betel,
    somaCongCx : congCx,
    somaCongElet,
    somaCongSite,
    somaOM,
    somaGastos,
} = atualizaCarteira(mesAtualString.toLowerCase())

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
let mesLancamentosAtual = 
    contasAnoAtual.
    mes[mesAtualString.toLowerCase()].
    lancamentos

const spOMtotal = $id('om')
spOMtotal.innerText = somaOM
const spCongTotal = $id('cong')
spCongTotal.innerText = congCx
const spCongElet = $id('congElet')
spCongElet.innerText = somaCongElet
const spCongSite = $id('congSite')
spCongSite.innerText = somaCongSite
const spGastosTotal = $id('gastos')
spGastosTotal.innerText = somaGastos

const tBody = $id('tbody')
// if()
contasAnoAtual.mes[mesAtualString.toLowerCase()].lancamentos
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
    modalTitulo('Donativos')
    modalCorpo(bodyDonativos())
    modalFooter([btnCancel(),btnSalvar(addDonativo,'fechar-incluirAtividade')])
    }
);
btnCarteira.addEventListener('click', function() {
    btnAnimation(this)
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Conta')
    modalCorpo(bodyModalCarteira())
    modalFooter([btnCancel(),btnSalvar(()=> divCxDialogo.classList.remove('caixa-dialogo-aberta'))])
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