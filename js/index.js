const $ = s => document.querySelector(s)
const $all = s => document.querySelectorAll(s)
const $id = id => document.getElementById(id)
const $cria = tag => document.createElement(tag)

let data = new Date()
let dia = data.getDate()
let ano = data.getFullYear()
let meses = [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro' ]
let mesAtualNumero = data.getMonth()//0,1,2,3,4,5,6,7,8,9,10,11
let mesAtualString = meses[mesAtualNumero]
let countMes = meses[mesAtualNumero]
let anoNovo

let contas = localStorage.getItem('contas') ? JSON.parse(localStorage.getItem('contas')) : [criaContas(ano)]
let contasAnoAtual
contas.forEach(i => i.ano === ano ? contasAnoAtual = i :  contas.push(criaContas(anoNovo))) 

function criaContas(ano){ 
    return { 
        ano : ano,
         mes : { 
            janeiro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            fevereiro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            marco : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            abril : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            maio : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            junho : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            julho : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            agosto : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            setembro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            outubro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            novembro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            }, 
            dezembro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelInicial : 0, 
                saldoBetelFinal : 0 
            } 
        } 
    } 
}

function incluiMovimentacao(dia,desc,dc,valor,tipo){
    return { dia,desc,dc,valor,tipo }
}

//fn do array das atividades cadastradas
const om = item => item.desc === 'Donativos OM' ? parseFloat(item.valor) : 0.00
const cong = item => item.desc === 'Don. Cong. Cx' ? parseFloat(item.valor) : 0.00
const congElet = item => item.desc === 'Don. Cong. Eletronico' ? parseFloat(item.valor) : 0.00
const congSite = item => item.desc === 'Don. Cong. Site' ? parseFloat(item.valor) : 0.00
const gastos = item => 
    (item.desc !== 'Don. Cong. Eletronico' && 
    item.desc !== 'Don. Cong. Cx' && 
    item.desc !== 'Donativos OM' && 
    item.desc !== 'Don. Cong. Site') ? 
    parseFloat(item.valor) : 0.00
const gastosOutros = item => item.tipo === 'outros' ? parseFloat(item.valor) : 0.00
const gastosFixo = item => item.tipo === 'fixo' ? parseFloat(item.valor) : 0.00
function calculaSoma(contaMesArray, descMap){
    if(contaMesArray.length>0){
        let somaArrya = contaMesArray.map(descMap)
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        },0)
        return soma
    }else{
        return 0
    }
}

function mascaraReal(valor){
    if(valor){
        return `R$ ${valor.toFixed(2).replace('.',',')}`
    }else{
        return 'R$ 0,00'
    }
}
function calculaEntradas(contaMesArray){
    let somaOM = calculaSoma(contaMesArray,om)
    let somaCongCxs = calculaSoma(contaMesArray,cong)
    let somaCongElet = calculaSoma(contaMesArray,congElet)
    let somaGastos = calculaSoma(contaMesArray,gastos)
    let entradas = somaOM + somaCongCxs + somaCongElet 
    
    return entradas - somaGastos
}
//render MODAL
const modalConstrutor = {
    modalTitulo(title){
        h2Title.innerText = title
    },
    modalCorpo(corpo,bottomStyle = '25%'){
        divBodyModal.innerHTML = ''
        divModalDialogo.style.bottom = bottomStyle//ajustar o bottom do modal
        corpo.forEach(element => {
            divBodyModal.appendChild(element)
        });
    },
    modalFooter(btns){
        divBtnsFooter.innerHTML = ''
        btns.forEach(btn => divBtnsFooter.appendChild(btn))
    }
}
function modalTitulo(title) {
    h2Title.innerText = title
}
function modalCorpo(corpo,bottomStyle = '25%'){
    divBodyModal.innerHTML = ''
    divModalDialogo.style.bottom = bottomStyle//ajustar o bottom do modal
    corpo.forEach(element => {
        divBodyModal.appendChild(element)
    });
}
function modalFooter(btns){
    divBtnsFooter.innerHTML = ''
    btns.forEach(btn => divBtnsFooter.appendChild(btn))
}
//funçoes para atualizar tela apos inclusoes
const atualiza = {
    contasLS(){
        localStorage.setItem('contas', JSON.stringify(contas))
    },
    contasTotalVazio(){
        tBody.innerHTML = ''
        spOMtotal.innerText = 0
        spCongTotal.innerText = 0
        spGastosTotal.innerText = 0
        spCongElet.innerText = 0
    },
    contasTotais(mes = mesAtualString.toLowerCase()){
        const {
            somaBetel : betel,
            somaCongCx : congCx,
            somaCongElet,
            somaCongSite,
            OMsoma,
            somaGastos,
        } = atualizaCarteira(mes)
        let cAAm = contasAnoAtual.mes[countMes.toLowerCase()].lancamentos
        tBody.innerHTML = ''
        cAAm
            .sort((a,b)=> a.dia - b.dia)
            .forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        spOMtotal.innerText = `R$ ${OMsoma}`
        spCongTotal.innerText = `R$ ${congCx}`
        spCongSite.innerText = `R$ ${somaCongSite}`
        spGastosTotal.innerText = `R$ ${somaGastos}`
        spCongElet.textContent = `R$ ${somaCongElet}`
    },
    mensagemWhats(mes){
        let {envio} = atualizaCarteira(mes)
        return `Irmão, segue o valor a ser enviado para Obra Mundial R$${mask.valor(envio.toFixed(2))}`
    }
}
// Btns
const btnCancel = () =>{
    const btnCancel = $cria('button')
    btnCancel.setAttribute('id', 'fechar-dialogo')
    btnCancel.innerHTML = '<ion-icon name="close-circle" style="color: red"></ion-icon>'
    btnCancel.addEventListener('click', function(){
        divCxDialogo.classList.remove('caixa-dialogo-aberta');
    })
    return btnCancel
}
const btnSalvar = (fn,id) =>{
    const btnSalvar = $cria('button')
    btnSalvar.setAttribute('id', id)
    btnSalvar.innerHTML = '<ion-icon name="checkmark-circle" style="color: green"></ion-icon>'
    btnSalvar.addEventListener('click', fn)
    return btnSalvar
}
const noneHabilita = {
    habilitaInps(arrayElemInp,verdadeiroParaDesbloquear){
        if(verdadeiroParaDesbloquear){
            arrayElemInp.forEach(element => {
                element.removeAttribute('disabled')
                }
            )
        }else{
            arrayElemInp.forEach(element => {
                element.setAttribute('disabled', true)
                }
            )
        }
    },
    none(elemento,verdadeiroParaDesbloquear){
        verdadeiroParaDesbloquear ? elemento.classList.add('invisivel') : elemento.classList.remove('invisivel')
    }
}
function btnAnimation(btn){
    btn.classList.add('clicked');

    setTimeout(() => {
        btn.classList.remove('clicked');
    }, 300);
}
function avancaVolta(countMes){
    spMesConta.innerText = countMes
    contasAnoAtual.mes[countMes.toLowerCase()]? atualiza.contasTotais(countMes.toLowerCase()) : atualiza.contasTotalVazio()
}

String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  };
  
function mascaraMoeda(campo,evento){
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
        if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
        } else {
        resultado += valor.charAt(y);
        y++;
        x++;
        }
    }
    campo.value = resultado.reverse();
}
const mask = {
    inputValor(campo,evento){
        var tecla = (!evento) ? window.event.keyCode : evento.which;
        var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
        var resultado  = "";
        var mascara = "##.###.###,##".reverse();
        for (var x=0, y=0; x<mascara.length && y<valor.length;) {
            if (mascara.charAt(x) != '#') {
            resultado += mascara.charAt(x);
            x++;
            } else {
            resultado += valor.charAt(y);
            y++;
            x++;
            }
        }
        campo.value = resultado.reverse();
    },
    valor(v){
        var valor  =  v.replace(/[^\d]+/gi,'').reverse();
        var resultado  = "";
        var mascara = "##.###.###,##".reverse();
        for (var x=0, y=0; x<mascara.length && y<valor.length;) {
            if (mascara.charAt(x) != '#') {
            resultado += mascara.charAt(x);
            x++;
            } else {
            resultado += valor.charAt(y);
            y++;
            x++;
            }
        }
        return resultado.reverse();
    }

}
function valorCalculavel(valor) {
    if (valor.length > 6 && valor.length < 10) {
        let vSemPonto = valor.replace(/\./g, '').replace(/,/g, '.');

        return parseFloat(vSemPonto);
    }
    if (valor.length > 10) {
        let vSemPonto1 = valor.replace(/\./g, '');
        let vSemPonto2 = vSemPonto1.replace(/,/g, '.');

        return parseFloat(vSemPonto2);
    }
    if (valor.length <= 6) {
        let vSemPonto = valor.replace(/,/g, '.');
        return parseFloat(vSemPonto);
    }

    // Adicione um retorno padrão caso nenhum dos casos anteriores seja atendido.
    return 0;
}
function atualizaCarteira(mes){
    let mesAtualObj = contasAnoAtual.mes[mes] 
    let getSaldoInicial = mesAtualObj.saldoContaInicial ? valorCalculavel(mesAtualObj.saldoContaInicial) : 0.00
    let getSaldoInicialBetel = mesAtualObj.saldoBetelInicial ? valorCalculavel(mesAtualObj.saldoBetelInicial) : 0.00
    let betelLancamento = mesAtualObj.lancamentos ? calculaSoma(mesAtualObj.lancamentos, congSite) : 0.00
    let contaLancamentos = mesAtualObj.lancamentos ? calculaEntradas(mesAtualObj.lancamentos) : 0.00
    let resolucao = mesAtualObj.resolucao ? valorCalculavel(mesAtualObj.resolucao) : 0.00
    let saldoInicialS30 = mesAtualObj.saldoInicialS30 ? valorCalculavel(mesAtualObj.saldoInicialS30) : 0.00
    let somaBetel = (getSaldoInicialBetel+betelLancamento).toFixed(2)
    let somaConta = (contaLancamentos+parseFloat(getSaldoInicial)).toFixed(2)
    let somaCongCx = mask.valor(calculaSoma(mesAtualObj.lancamentos, cong).toFixed(2))
    let somaCongElet = mask.valor(calculaSoma(mesAtualObj.lancamentos,congElet).toFixed(2))
    let somaCongSite = mask.valor(calculaSoma(mesAtualObj.lancamentos,congSite).toFixed(2))
    let OMsoma = mask.valor(calculaSoma(mesAtualObj.lancamentos, om).toFixed(2))
    // let somaOM = mascaraReal(OMsoma)
    let somaGastos = mask.valor(calculaSoma(mesAtualObj.lancamentos,gastos).toFixed(2))
    let somaGastosFixos = mask.valor(calculaSoma(mesAtualObj.lancamentos,gastosFixo).toFixed(2))
    let somaGastosOutros = mask.valor(calculaSoma(mesAtualObj.lancamentos,gastosOutros).toFixed(2))
    let envio = resolucao + calculaSoma(mesAtualObj.lancamentos, om)
    return {
        mesAtualObj,
        getSaldoInicial,
        getSaldoInicialBetel,
        betelLancamento,
        contaLancamentos,
        resolucao,
        saldoInicialS30,
        somaConta,
        somaBetel,
        somaCongCx,
        somaCongElet,
        somaCongSite,
        // somaOM,
        somaGastos,
        somaGastosFixos,
        somaGastosOutros,
        OMsoma,
        envio
    }
}