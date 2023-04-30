document.addEventListener('click', (event) => {
    if(event.target.className === 'caixa-dialogo caixa-dialogo-aberta')divCxDialogo.classList.remove('caixa-dialogo-aberta');      
}
)
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
estudos.lenght === 0 ? spEstudosTotal.innerText = '00' : atualiza.estudosSpan()
const btnQtdEstudos = $id('qtdEstudos')
btnQtdEstudos.addEventListener('click',function () {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Estudos')
    modalCorpo(bodyEstudos())
    modalFooter(btnsEstudantes())
})
//tabela relatorio
const tBody = $id('tbody')
relatorio.mes[mesAtualString.toLowerCase()].forEach(item => tBody.appendChild(tBodyCreate(item)))
//modal elementos
const h2Title = $id('titleModal')
const divBodyModal = $id('corpoModal')
const divBtnsFooter = $id('btnsFooter')
const btnDialogo = $id('add')
const divCxDialogo = $id('minha-caixa-dialogo')
const btnFecharDialogo = $id('fechar-dialogo')
const inpForm = document.querySelectorAll('.form-adiciona input')
//footer elementos
const btnAlvos = $id('alvo')
const btnAdd = $id('add')
const btnSend = $id('send')
const text = 
btnSend.setAttribute('href', `whatsapp://send?text=${atualiza.mensagemWhats()}`)

btnAdd.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Adicionar atividade')
    modalCorpo(bodyRelatorio())
    modalFooter([btnCancel(),btnSalvar(addAtividade)])
    }
);
btnAlvos.addEventListener('click', function() {
    divCxDialogo.classList.add('caixa-dialogo-aberta');
    modalTitulo('Alvos')
    modalCorpo([])
    modalFooter([btnCancel(),btnSalvar(addAlvo)])
    }
);

// btnFecharDialogo.addEventListener('click', function() {
//     divCxDialogo.classList.remove('caixa-dialogo-aberta');
// });
