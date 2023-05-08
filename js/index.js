const $ = s => document.querySelector(s)
const $all = s => document.querySelectorAll(s)
const $id = id => document.getElementById(id)
const $cria = tag => document.createElement(tag)

let data = new Date()
let dia = data.getDate()
let ano = data.getFullYear()
let meses = [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro' ]
let mesAtualNumero = data.getMonth()
let mesAtualString = meses[mesAtualNumero]
let countMes = meses[mesAtualNumero]

let relatorio = localStorage.getItem('relatorio') ? JSON.parse(localStorage.getItem('relatorio')) : [criaRelatorio(ano)]
let estudos = localStorage.getItem('estudos') ? JSON.parse(localStorage.getItem('estudos')) : []
let alvo = localStorage.getItem('alvo') ? JSON.parse(localStorage.getItem('alvo')) : null

let relatorioAnoAtual
relatorio.forEach(i =>{
    if(i.anoServico === ano){
        relatorioAnoAtual = i
    }
}) 

class Estudo {
    constructor(nome, obs = '') {
        this.nome = nome
        this.obs = obs
    }
}

function criaRelatorio(ano){
    const anoServico = ano
    const mes = {
        'janeiro' : [],
        'fevereiro' : [],
        'marco' : [],
        'abril' : [],
        'maio' : [],
        'junho' : [],
        'julho' : [],
        'agosto' : [],
        'setembro' : [],
        'outubro' : [],
        'novembro' : [],
        'dezembro' : []
    }
    
    return {anoServico,mes}
}

function incluiAtividade(dia,tempo,videos,publicacoes,revisitas){
    return { dia,tempo,videos,publicacoes,revisitas}
}
function alvosCria(tipo,horas){
    return {tipo,horas}
}
//fn para calculos de minutos
function minutosParaHoras(minutos) {
    var horas = Math.floor(minutos / 60);
    var minutosRestantes = minutos % 60;
    if(minutosRestantes.toString().length == 1){
        minutosRestantes = '0'+minutosRestantes
    }
    return horas + ":" + minutosRestantes;
}

function minuHoras(minutos) {
    var horas = Math.floor(minutos / 60);
    var minutosRestantes = minutos % 60;
    if(minutosRestantes.toString().length == 1){
        minutosRestantes = '0'+minutosRestantes
    }
    return {horas,minutosRestantes};
}

function calculaHorasTotal(relatorioMesArray){
    if(relatorioMesArray.length>0){
        let tempoArray = relatorioMesArray.map(item => item.tempo)
        const somaTempo = tempoArray.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return minutosParaHoras(somaTempo)
    }else{
        return '0'
    }
}
function totalMinutos(){
    const tempoAtualArray = calculaHorasTotal(relatorioAnoAtual.mes[mesAtualString.toLowerCase()]).split(':')
    const tempoAtualTotal = (tempoAtualArray[0]*60)+parseInt(tempoAtualArray[1])
    return tempoAtualTotal
}
//fn do array das atividades cadastradas
function calculaRevisitasTotal(relatorioMesArray){
    if(relatorioMesArray.length>0){
        let somaArrya = relatorioMesArray.map(item => parseInt(item.revisitas)) 
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return '0'
    }
}
function calculaVideosTotal(relatorioMesArray){
    if(relatorioMesArray.length>0){
        let somaArrya = relatorioMesArray.map(item => parseInt(item.videos))
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        },0)
        return soma
    }else{
        return '0'
    }
}
function calculaPublicacoesTotal(relatorioMesArray){
    if(relatorioMesArray.length>0){
        let somaArrya = relatorioMesArray.map(item => parseInt(item.publicacoes))
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return '0'
    }
}
//render MODAL
function modalTitulo(title) {
    h2Title.innerText = title
}
function modalCorpo(corpo, cls = ''){
    cls ? divBodyModal.classList.add(cls) : divBodyModal.classList.remove('addRelatorio')
    divBodyModal.innerHTML = ''
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
    relatorioLS(){
        localStorage.setItem('relatorio', JSON.stringify(relatorio))
    },
    estudosSpan(){
        spEstudosTotal.innerText = estudos.length 
    },
    estudosLS(){
        localStorage.setItem('estudos', JSON.stringify(estudos))
    },
    mensagemWhats(mesSelecionado,arrayRelatorio){
        return `Segue o relatório de ${mesSelecionado}: Horas ${calculaHorasTotal(arrayRelatorio)}, Revisitas ${calculaRevisitasTotal(arrayRelatorio)}, Videos ${calculaVideosTotal(arrayRelatorio)}, Publicações ${calculaPublicacoesTotal(arrayRelatorio)} e Estudos ${estudos.length}`;
    },
    relatorioTotalVazio(){
        tBody.innerHTML = ''
        spHorasTotal.innerText = 0
        spRevTotal.innerText = 0
        spVideosTotal.innerText = 0
        spPubTotal.innerText = 0
    },
    relatorioTotais(){
        tBody.innerHTML = ''
        relatorioAnoAtual.mes[countMes.toLowerCase()].sort((a,b)=> a.dia - b.dia).forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        spHorasTotal.innerText = calculaHorasTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        // spAlvoHoras.innerText = setAlvoDiv()
        atualiza.alvo()
        spRevTotal.innerText = calculaRevisitasTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spVideosTotal.innerText = calculaVideosTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
        spPubTotal.innerText = calculaPublicacoesTotal(relatorioAnoAtual.mes[countMes.toLowerCase()])
    },
    alvo(){
        if(alvo){
            if(setAlvoDiv()< 0)console.log(setAlvoDiv());
            spAlvoHoras.innerText = setAlvoDiv()
        }else{
            divAlvoTempo.classList.add('invisivel')
            spAlvoHoras.innerText = ''
        }
        // spAlvoHoras.innerText = setAlvoDiv()
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
    habilitaInps(array,b){
        if(b){
            array.forEach(element => {
                element.removeAttribute('disabled')
                }
            )
        }else{
            array.forEach(element => {
                element.setAttribute('disabled', true)
                }
            )
        }
    },
    none(elemento,b){
        b ? elemento.classList.add('invisivel') : elemento.classList.remove('invisivel')
    }
}
