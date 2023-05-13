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
let anoNovo

let contas = localStorage.getItem('contas') ? JSON.parse(localStorage.getItem('contas')) : [criaContas(ano)]
let contasAnoAtual
contas.forEach(i =>{
    // console.log(i);
    if(i.anoServico === ano){
        contasAnoAtual = i
        console.log(contasAnoAtual);
    }else{
        contas.push(criaContas(anoNovo))
    }
}) 
function criaContas(ano){
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

function incluiMovimentacao(dia,desc,tipo,valor){
    return { dia,desc,tipo,valor }
}

//fn do array das atividades cadastradas
const om = item => parseInt(item.valor)
function calculaOM(contaMesArray){
    if(contaMesArray.length>0){
        let somaArrya = contaMesArray.map(om) 
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return 'R$ 0,00'
    }
}
const cong = valor => parseInt(valor)
function calculaCong(contaMesArray){
    if(contaMesArray.length>0){
        let somaArrya = contaMesArray.map(cong)
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        },0)
        return soma
    }else{
        return 'R$ 0,00'
    }
}
function calculaGastos(contaMesArray){
    if(contaMesArray.length>0){
        let somaArrya = contaMesArray.map(item => parseInt(item.publicacoes))
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return 'R$ 0,00'
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
    contasLS(){
        localStorage.setItem('contas', JSON.stringify(contas))
    },
    /* mensagemWhats(mesSelecionado,arrayRelatorio){
        return `Segue o relatório de ${mesSelecionado}: Horas ${calculaHorasTotal(arrayRelatorio)}, Revisitas ${calculaRevisitasTotal(arrayRelatorio)}, Videos ${calculaVideosTotal(arrayRelatorio)}, Publicações ${calculaPublicacoesTotal(arrayRelatorio)} e Estudos ${estudos.length}`;
    }, */
    contasTotalVazio(){
        tBody.innerHTML = ''
        spHorasTotal.innerText = 0
        spRevTotal.innerText = 0
        spVideosTotal.innerText = 0
        spPubTotal.innerText = 0
    },
    contasTotais(){
        tBody.innerHTML = ''
        contasAnoAtual.mes[countMes.toLowerCase()]
            .sort((a,b)=> a.dia - b.dia)
            .forEach((item,i) => tBody.appendChild(tBodyCreate(item,i)))
        spOMtotal.innerText = calculaOM(contasAnoAtual.mes[countMes.toLowerCase()])
        spCongTotal.innerText = calculaCong(contasAnoAtual.mes[countMes.toLowerCase()])
        spGastosTotal.innerText = calculaGastos(contasAnoAtual.mes[countMes.toLowerCase()])
        // spPubTotal.innerText = calculaPublicacoesTotal(contasAnoAtual.mes[countMes.toLowerCase()])
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
    console.log(contasAnoAtual);
    contasAnoAtual.mes[countMes.toLowerCase()]? atualiza.contasTotais() : atualiza.contasTotalVazio()
/*     if((countMes === alvo.mes) && (alvo.ano === contasAnoAtual.anoServico)){
        spHorasFalta.innerText = setAlvoDiv()
        spAlvoHoras.innerText = alvo.horas+'h'
        divAlvoTempo.classList.remove('invisivel')
    }else{
        divAlvoTempo.classList.add('invisivel')
        spHorasFalta.innerText = ''
    } */
}
// // Obtém o elemento <link> do favicon
// const favicon = document.querySelector('link[rel="icon"]');

// // Array com as URLs dos ícones
// const icones = [
// 'icone1.png',
// 'icone2.png',
// 'icone3.png',
// 'icone4.png'
// ];

// // Função para alterar o ícone
// function alterarIcone() {
//     // Gera um índice aleatório para selecionar um ícone do array
//     const indice = Math.floor(Math.random() * icones.length);

//     // Atualiza o atributo href do elemento <link> com a URL do ícone selecionado
//     favicon.href = icones[indice];
// }

// // Altera o ícone a cada 5 segundos
// setInterval(alterarIcone, 5000);
