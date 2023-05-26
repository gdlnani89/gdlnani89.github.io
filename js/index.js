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
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            fevereiro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            marco : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            abril : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            maio : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            junho : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            julho : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            agosto : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            setembro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            outubro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            novembro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            }, 
            dezembro : { 
                lancamentos : [], 
                saldoContaInicial : 0, 
                saldoContaFinal : 0, 
                saldoBetelIncial : 0, 
                saldoBetelFinal : 0 
            } 
        } 
    } 
}

function incluiMovimentacao(dia,desc,tipo,valor){
    return { dia,desc,tipo,valor }
}

//fn do array das atividades cadastradas
const om = item => item.desc === 'Donativos OM' ? parseFloat(item.valor) : 0.00
const cong = item => item.desc === 'Don. Cong. Cx' ? parseFloat(item.valor) : 0.00
const congElet = item => item.desc === 'Don. Cong. Eletronico' ? parseFloat(item.valor) : 0.00
const gastos = item => (item.desc !== 'Don. Cong. Eletronico' && item.desc !== 'Don. Cong. Cx' && item.desc !== 'Donativos OM') ? parseFloat(item.valor) : 0.00
function calculaSoma(contaMesArray, descMap){
    if(contaMesArray.length>0){
        let somaArrya = contaMesArray.map(descMap)
        console.log(somaArrya);
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        },0)
        return soma
    }else{
        return 0
    }
}
// function calculaSoma(contaMesArray, descMap){
//     if(contaMesArray.length>0){
//         let somaArrya = contaMesArray.map(descMap)
//         console.log(somaArrya);
//         const soma = somaArrya.reduce(function(acumulador,atual){
//             return acumulador+atual
//         },0)
//         return `R$ ${soma.toFixed(2).replace('.',',')}`
//     }else{
//         return 'R$ 0,00'
//     }
// }
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
    /* mensagemWhats(mesSelecionado,arrayRelatorio){
        return `Segue o relatório de ${mesSelecionado}: Horas ${calculaHorasTotal(arrayRelatorio)}, Revisitas ${calculaRevisitasTotal(arrayRelatorio)}, Videos ${calculaVideosTotal(arrayRelatorio)}, Publicações ${calculaPublicacoesTotal(arrayRelatorio)} e Estudos ${estudos.length}`;
    }, */
    contasTotalVazio(){
        tBody.innerHTML = ''
        spOMtotal.innerText = 0
        spCongTotal.innerText = 0
        spGastosTotal.innerText = 0
        spCongElet.innerText = 0
    },
    contasTotais(){
        let cAAm = contasAnoAtual.mes[countMes.toLowerCase()].lancamentos
        tBody.innerHTML = ''
        cAAm
            .sort((a,b)=> a.dia - b.dia)
            .forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        spOMtotal.innerText = mascaraReal(calculaSoma(cAAm,om))
        spCongTotal.innerText = mascaraReal(calculaSoma(cAAm,cong))
        spGastosTotal.innerText = mascaraReal(calculaSoma(cAAm,gastos))
        spCongElet.textContent = mascaraReal(calculaSoma(cAAm,congElet))
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
    console.log(countMes);
    contasAnoAtual.mes[countMes.toLowerCase()]? atualiza.contasTotais() : atualiza.contasTotalVazio()
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