//header mes e setas
const spMesRelatorio = $id('mesRelatorio')
spMesRelatorio.innerText = mesAtualString
//relatório totais
const spHorasTotal = $id('horasTotal')
spHorasTotal.innerText = calculaHorasTotal()
const spRevTotal = $id('revisitasTotal')
spRevTotal.innerText = calculaRevisitasTotal()
const spVideosTotal = $id('videosTotal')
spVideosTotal.innerText = calculaVideosTotal()
const spPubTotal = $id('pubTotal')
spPubTotal.innerText = calculaPublicacoesTotal()
const spEstudosTotal = $id('estudosTotal')
const btnQtdEstudos = $id('qtdEstudos')

//tabela relatorio
const tBody = $id('tbody')
relatorio.mes[mesAtualString.toLowerCase()].forEach(item => tBody.appendChild(tBodyCreate(item)))
//modal elementos
const btnDialogo = $id('add')
const divCxDialogo = $id('minha-caixa-dialogo')
const btnFecharDialogo = $id('fechar-dialogo')
const ipDia = $id('dia')
ipDia.value = dia
const ipHoras = $id('horas')
const ipMin = $id('min')
const ipVideos = $id('videos')
const ipPub = $id('publicacoes')
const ipRev = $id('revisitas')
const inpForm = document.querySelectorAll('.form-adiciona input')
//footer elementos
const btnIncluirAtividade = $id('incluirAtividade')
const btnSend = $id('send')
const text = `Segue o relatório de ${mesAtualString}: Horas ${calculaHorasTotal()}, Revisitas ${calculaRevisitasTotal()}, Videos ${calculaVideosTotal()}, Publicações ${calculaPublicacoesTotal()} e Estudos 0`;
btnSend.setAttribute('href', `whatsapp://send?text=${text}`)

btnDialogo.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
  });
btnFecharDialogo.addEventListener('click', function() {
    divCxDialogo.classList.remove('caixa-dialogo-aberta');
});

btnIncluirAtividade.addEventListener('click', function(){
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
})