function tBodyCreate(inclusao){
    const tempo = minuHoras(inclusao.tempo)
    const tr = $cria('tr')
    const tdDia = $cria('td')
    const tdHoras = $cria('td')
    const tdVideo = $cria('td')
    const tdPub = $cria('td')
    const tdRev = $cria('td')
    tdDia.innerText = inclusao.dia
    tdHoras.innerText = `${tempo.horas}:${tempo.minutosRestantes}`
    tdVideo.innerText = inclusao.videos
    tdPub.innerText = inclusao.publicacoes
    tdRev.innerText = inclusao.revisitas

    tr.appendChild(tdDia)
    tr.appendChild(tdHoras)
    tr.appendChild(tdVideo)
    tr.appendChild(tdPub)
    tr.appendChild(tdRev)
    
    return tr
}