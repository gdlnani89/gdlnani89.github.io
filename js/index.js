const $id = id => document.getElementById(id)
const $cria = tag => document.createElement(tag)

let data = new Date()
let dia = data.getDate()
let ano = data.getFullYear()
let meses = [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro' ]
let mesAtualNumero = data.getMonth()
let mesAtualString = meses[mesAtualNumero]

let relatorio = localStorage.getItem('relatorio') ? JSON.parse(localStorage.getItem('relatorio')) : criaRelatorio(ano)

function estudo(nome,obs){
 return {nome,obs}
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
function incluiAtividade(dia,tempo,videos,publicacoes,revisitas,estudos){
    return { dia,tempo,videos,publicacoes,revisitas,estudos }
}
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

function calculaHorasTotal(){
    if(relatorio.mes[mesAtualString.toLowerCase()].length>0){
        let tempoArray = relatorio.mes[mesAtualString.toLowerCase()].map(item => item.tempo)
        const somaTempo = tempoArray.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return minutosParaHoras(somaTempo)
    }else{
        return '00'
    }
}
function calculaRevisitasTotal(){
    if(relatorio.mes[mesAtualString.toLowerCase()].length>0){
        let somaArrya = relatorio.mes[mesAtualString.toLowerCase()].map(item => parseInt(item.revisitas))
        console.log(somaArrya);
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return '00'
    }
}
function calculaVideosTotal(){
    if(relatorio.mes[mesAtualString.toLowerCase()].length>0){
        let somaArrya = relatorio.mes[mesAtualString.toLowerCase()].map(item => parseInt(item.videos))
        console.log(somaArrya);
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        },0)
        return soma
    }else{
        return '00'
    }
}
function calculaPublicacoesTotal(){
    if(relatorio.mes[mesAtualString.toLowerCase()].length>0){
        let somaArrya = relatorio.mes[mesAtualString.toLowerCase()].map(item => parseInt(item.publicacoes))
        console.log(somaArrya);
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return '00'
    }
}
function modalConteudo(title) {
    //<h2>title</h2>
}