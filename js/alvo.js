function bodyAlvo(){
    const ele = []
    const lTipo = $cria('LABEL')
    lTipo.innerText = 'Tipo'
    const slTipos = $cria('SELECT')
    slTipos.setAttribute('id', 'tipoPrevilegio')
    const opPub = $cria('OPTION')
    opPub.value = 0
    opPub.innerText = 'Publicador'
    slTipos.appendChild(opPub)
    const opPioAux = $cria('OPTION')
    opPioAux.innerText = 'Pioneiro Auxiliar 15 horas'
    opPioAux.setAttribute('value', 15)
    slTipos.appendChild(opPioAux)
    const opPioAux2 = $cria('OPTION')
    opPioAux2.setAttribute('value', 30)
    opPioAux2.innerText = 'Pioneiro Auxiliar 30 horas'
    slTipos.appendChild(opPioAux2)
    const opPioReg = $cria('OPTION')
    opPioReg.setAttribute('value', 50)
    opPioReg.innerText = 'Pioneiro Regular' 
    slTipos.appendChild(opPioReg)
    lTipo.appendChild(slTipos)
    const lHorasAlvo = $cria('LABEL')
    lHorasAlvo.innerText = 'Alvo de horas'
    const ipHorasAlvo = $cria('INPUT')
    lHorasAlvo.appendChild(ipHorasAlvo)
    alvo ? ipHorasAlvo.value = alvo.horas : ipHorasAlvo.value = 0
    ipHorasAlvo.setAttribute('type', 'number')
    ipHorasAlvo.setAttribute('id', 'horasAlvo')
    slTipos.addEventListener('change', function () {
        ipHorasAlvo.value = slTipos.value
    })
    ele.push(lTipo, lHorasAlvo)
    
    return ele
}
function addAlvo() {
    const slTipo = $id('tipoPrevilegio')
    const slOption = slTipo.options[slTipo.selectedIndex]
    const slTexto = slOption.textContent
    const ipHoras = $id('horasAlvo')
    const alvoCria = alvosCria(ano,countMes,slTexto,ipHoras.value)
    localStorage.setItem('alvo', JSON.stringify(alvoCria))
    spHorasFalta.innerText = setAlvoDiv()
    spAlvoHoras.innerHTML = ''
    spAlvoHoras.innerText = alvoCria.horas+'h'
    divAlvoTempo.classList.remove('invisivel')
    divCxDialogo.classList.remove('caixa-dialogo-aberta');
}
function calculaDiferenca(){
    const lsAlvo = JSON.parse(localStorage.getItem('alvo'))
    const tempoAtual = totalMinutos() || 0
    const tempoAlvo = lsAlvo.horas * 60
    const calculaDiferenca = tempoAlvo-tempoAtual

    return calculaDiferenca
}
function setAlvoDiv(){
    if (calculaDiferenca()>0) {
        iconRocket.setAttribute('style','color:white; font-size:18px;')
        spHorasFalta.setAttribute('style','color:#b71c1c')
        return minutosParaHoras(calculaDiferenca())
    }else{
        iconRocket.setAttribute('style','color:#4A148C; font-size:18px;')
        spHorasFalta.setAttribute('style','color:blue')
        return minutosParaHoras(calculaDiferenca()*-1)
    }
}