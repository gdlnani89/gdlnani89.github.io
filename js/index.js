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

let relatorio = localStorage.getItem('relatorio') ? JSON.parse(localStorage.getItem('relatorio')) : criaRelatorio(ano)
let estudos = localStorage.getItem('estudos') ? JSON.parse(localStorage.getItem('estudos')) : []

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
//fn do array das atividades cadastradas
function calculaRevisitasTotal(){
    if(relatorio.mes[mesAtualString.toLowerCase()].length>0){
        let somaArrya = relatorio.mes[mesAtualString.toLowerCase()].map(item => parseInt(item.revisitas)) 
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
        const soma = somaArrya.reduce(function(acumulador,atual){
            return acumulador+atual
        })
        return soma
    }else{
        return '00'
    }
}
//render MODAL
function modalTitulo(title) {
    h2Title.innerText = title
}
function modalCorpo(corpo){
    divBodyModal.innerHTML = ''
    corpo.forEach(element => {
        divBodyModal.appendChild(element)
    });
}
function modalFooter(btns){
    divBtnsFooter.innerHTML = ''
    btns.forEach(btn => divBtnsFooter.appendChild(btn))
}
//bodys MODAL
const bodyEstudos = () =>{
    const ele = []
    let div = $cria('div')
    div.setAttribute('id','estudos')
    estudos.length === 0 ? div.innerText = 'Nenhum estudo cadastrado' : div.appendChild(ulEstudos(estudos))
    let lNome = $cria('label') 
    // lNome.setAttribute('style','width : 100%')
    lNome.setAttribute('for', 'nome')
    lNome.innerText = 'Nome'
    let iNome = $cria('input')
    iNome.setAttribute('type', 'text')
    iNome.setAttribute('id', 'nome')
    iNome.setAttribute('name', 'nome')
    iNome.setAttribute('style', 'width: 150px;')
    lNome.appendChild(iNome)   

    let lObs = $cria('label') 
    lObs.setAttribute('for', 'obs')
    lObs.innerText = 'Obs.'
    let iObs = $cria('input')
    iObs.setAttribute('type', 'text')
    iObs.setAttribute('id', 'obs')
    iObs.setAttribute('name', 'obs')
    iObs.setAttribute('style', 'width: 150px;')
    lObs.appendChild(iObs)   

    ele.push(div,lNome,lObs)
    // ele.push(div,lNome,lObs,btnIncluir)
    return ele
}

const bodyRelatorio = () =>{
    const ele = []
    {/* <label for="dia">Dia
        <input value='${dia}' type="number" id="dia" style="width: 25px;" name="dias" min="1" max="31" pattern="[1-9]|[12][0-9]|3[01]" >
    </label> */}
    let lDia = $cria('label') 
    lDia.setAttribute('for', 'dia')
    lDia.innerText = 'Dia'
    let iDia = $cria('input')
    iDia.setAttribute('value', dia)
    iDia.setAttribute('type', 'number')
    iDia.setAttribute('id', 'dia')
    iDia.setAttribute('name', 'dia')
    iDia.setAttribute('min', '1')
    iDia.setAttribute('max', '31')
    iDia.setAttribute('pattern','[1-9]|[12][0-9]|3[01]')
    iDia.setAttribute('style', 'width: 35px;')
    lDia.appendChild(iDia)
    {/* <label for="horas">Horas
        <input type="number" id="horas" style="width: 25px; text-align: end;" >:
        <input type="number" id="min" style="width: 25px;" value="00" name="minutos" min="0" max="59">
    </label> */}
    let lHoras = $cria('label')
    lHoras.setAttribute('for', 'horas')
    lHoras.innerText = 'Horas'
    let iHoras = $cria('input')
    iHoras.setAttribute('type', 'number')
    iHoras.setAttribute('id', 'horas')
    iHoras.setAttribute('value', '0')
    iHoras.setAttribute('style', 'width: 25px; text-align: end;')
    lHoras.appendChild(iHoras)
    let p = $cria('p')
    p.innerText = ':'
    lHoras.appendChild(p)
    let iMin = $cria('input')
    iMin.setAttribute('type', 'number')
    iMin.setAttribute('id', 'min')
    iMin.setAttribute('value', '00')
    iMin.setAttribute('style', 'width: 25px; text-align: end;')
    lHoras.appendChild(iMin)
    {/* <label for="videos">Vídeos
        <input type="number" id="videos" style="width: 25px;" value="0">
    </label> */}
    let lVideos = $cria('label')
    lVideos.setAttribute('for', 'videos')
    lVideos.innerText = 'Vídeos'
    let iVideos = $cria('input')
    iVideos.setAttribute('type', 'number')
    iVideos.setAttribute('id', 'videos')
    iVideos.setAttribute('value', '0')
    iVideos.setAttribute('style', 'width: 25px; text-align: end;')
    lVideos.appendChild(iVideos)
    {/* <label for="publicacao">Publicações
        <input type="number" id="publicacoes" style="width: 25px;" value="0">
    </label> */}
    let lPub = $cria('label')
    lPub.setAttribute('for', 'publicacao')
    lPub.innerText = 'Publicações'
    let iPub = $cria('input')
    iPub.setAttribute('type', 'number')
    iPub.setAttribute('id', 'publicacoes')
    iPub.setAttribute('value', '0')
    iPub.setAttribute('style', 'width: 25px; text-align: end;')
    lPub.appendChild(iPub)
    {/* <label for="revisita">Revisitas
        <input type="number" id="revisitas" style="width: 25px;" value="0">
    </label> */}
    let lRev = $cria('label')
    lRev.setAttribute('for', 'revisita')
    lRev.innerText = 'Revisitas'
    let iRev = $cria('input')
    iRev.setAttribute('type', 'number')
    iRev.setAttribute('id', 'revisitas')
    iRev.setAttribute('value', '0')
    iRev.setAttribute('style', 'width: 25px; text-align: end;')
    lRev.appendChild(iRev)
    ele.push(lDia,lHoras,lVideos,lPub,lRev)

    return ele
}

const atualiza = {
    estudosSpan(){
        spEstudosTotal.innerText = estudos.length 
    },
    estudosLS(){
        localStorage.setItem('estudos', JSON.stringify(estudos))
    }
}
function ulEstudos(estudos){
    let ul = $cria('ul')
    ul.setAttribute('id', 'ul-estudos')
    estudos.forEach((item,i) =>{
        console.log(estudos[i]);
        let li = $cria('li')
        // li.setAttribute('id', )
        let pNome = $cria('span')
        pNome.innerText = item.nome
        let pObs = $cria('span')
        pObs.innerText = item.obs
        let bEx = $cria('button')//exclui elemento do array
        bEx.classList.add('btnLi')
        bEx.classList.add('invisivel')
        bEx.innerHTML = '<ion-icon name="person-remove" style="color: white; font-size: 10px"></ion-icon>'
        bEx.addEventListener('click', function(){
            this.parentNode.remove()
            estudos.splice(i,1)
            atualiza.estudosSpan()
            atualiza.estudosLS()
            // event.target.remove()
            // if(event.target.tagName == 'BUTTON' || event.target.tagName == 'ION-ICON' )event.target.parentNode.remove()
            // event.target.parentNode.remove()
        })
        let bEd = $cria('button')
        bEd.classList.add('btnLi')
        bEd.classList.add('invisivel')
        bEd.innerHTML = '<ion-icon name="pencil" style="color: white; font-size: 10px"></ion-icon>'
        li.appendChild(pNome)
        li.appendChild(pObs)
        li.appendChild(bEx)
        li.appendChild(bEd)
        ul.appendChild(li)
    })

    return ul
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
const btnSalvar = (fn) =>{
    const btnSalvar = $cria('button')
    btnSalvar.setAttribute('id', 'fechar-incluirAtividade')
    btnSalvar.innerHTML = '<ion-icon name="checkmark-circle" style="color: green"></ion-icon>'
    btnSalvar.addEventListener('click', fn)
    return btnSalvar
}
const btnsEstudantes = ()=>{
    const btns = []
    let btnIncluir = $cria('button')
    btnIncluir.setAttribute('id', 'estudanteAdd')
    btnIncluir.innerHTML = '<ion-icon name="person-add" style="color: white; font-size: 20px"></ion-icon>'
    btnIncluir.addEventListener('click',function(){
        const iNome = $id('nome')
        const iObs = $id('obs')
        const div = $id('estudos')
        if(iNome.value){
            const estudanteNovo = new Estudo(iNome.value,iObs.value)
            estudos.push(estudanteNovo)
            iNome.value = ''
            iObs.value = ''
            iNome.setAttribute('placeholder', '')
            atualiza.estudosLS(estudos)
            atualiza.estudosSpan()
            div.innerHTML = ''
            div.appendChild(ulEstudos(estudos))
        }else{
            iNome.focus()
            iNome.setAttribute('placeholder', 'Nome obrigatório')
        }
    })
    let btnEditar = $cria('button')
    btnEditar.setAttribute('id', 'estudantesEditar')
    btnEditar.innerHTML = '<ion-icon name="create" style="color: white; font-size: 20px"></ion-icon>'
    btnEditar.addEventListener('click',function(){
        // bEx.classList.add('btnLi')
        const btnsLi = $all('.btnLi')
        btnsLi.forEach(item => item.classList.remove('invisivel'))
        console.log(btnsLi);
    })
    btns.push(btnEditar,btnIncluir)
    return btns
}
//funções dos botões 
function addAtividade(){
    const ipDia = $id('dia')
    const ipHoras = $id('horas')
    const ipMin = $id('min')
    const ipVideos = $id('videos')
    const ipPub = $id('publicacoes')
    const ipRev = $id('revisitas')
    if(ipDia.value && ipHoras.value || ipMin.value ){
        const atividade = {
            dia : ipDia.value,
            tempo : (parseInt(ipHoras.value)*60)+(parseInt(ipMin.value)),
            videos : ipVideos.value,
            publicacoes : ipPub.value,
            revisitas : ipRev.value
        }
        const totalMinutos = (parseInt(ipHoras.value)*60)+(parseInt(ipMin.value))
        console.log(totalMinutos);
        tBody.appendChild(tBodyCreate(atividade))
        const mesInc = mesAtualString.toLowerCase()
        relatorio.mes[mesInc].push(incluiAtividade(
            atividade.dia,
            totalMinutos,
            atividade.videos,
            atividade.publicacoes,
            atividade.revisitas,
            spEstudosTotal.innerText
            )
        )
        console.log(relatorio.mes[mesInc]);
        inpForm.forEach(inp => inp.value = '0')
        ipDia.value = dia
        ipMin.value = '00'      
        divCxDialogo.classList.remove('caixa-dialogo-aberta');  
        localStorage.setItem('relatorio', JSON.stringify(relatorio))
        spHorasTotal.innerText = calculaHorasTotal()
        spRevTotal.innerText = calculaRevisitasTotal()
        spPubTotal.innerText = calculaPublicacoesTotal()
        spVideosTotal.innerText = calculaRevisitasTotal()
        btnSend.setAttribute('href', `whatsapp://send?text=${text}`)
    }else{
        console.log('falta horas');
    }
}


function addAlvo(){
    
}