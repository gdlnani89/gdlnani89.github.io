const bodyEstudos = () =>{
    const ele = []
    let divCadastrados = $cria('div')
    divCadastrados.setAttribute('id','estudos')
    let btnEditar = $cria('button')
    btnEditar.setAttribute('id', 'estudantesEditar')
    btnEditar.innerHTML = '<ion-icon name="create" style="color: white; font-size: 20px"></ion-icon>'
    btnEditar.addEventListener('click',function(){
        const btnsLi = $all('.btnLi')
        btnsLi.forEach(item => item.classList.remove('invisivel'))
    })
    if(estudos.length === 0){
        divCadastrados.innerText = 'Nenhum estudo cadastrado'
    }else{
        divCadastrados.appendChild(ulEstudos(estudos)) 
        divCadastrados.appendChild(btnEditar)
    }
    let divInclusao = $cria('div')
    divInclusao.setAttribute('class', 'inclusao')
    let lNome = $cria('label') 
    lNome.setAttribute('for', 'nome')
    lNome.innerText = 'Nome'
    let iNome = $cria('input')
    iNome.setAttribute('type', 'text')
    iNome.setAttribute('id', 'nome')
    iNome.setAttribute('name', 'nome')
    // iNome.setAttribute('style', 'width: 150px;')
    lNome.appendChild(iNome)   
    let lObs = $cria('label') 
    lObs.setAttribute('for', 'obs')
    lObs.innerText = 'Obs.'
    let iObs = $cria('input')
    iObs.setAttribute('type', 'text')
    iObs.setAttribute('id', 'obs')
    iObs.setAttribute('name', 'obs')
    // iObs.setAttribute('style', 'width: 150px;')
    lObs.appendChild(iObs)   
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
    divInclusao.appendChild(lNome)
    divInclusao.appendChild(lObs)
    divInclusao.appendChild(btnIncluir)
    ele.push(divCadastrados,divInclusao)
    // ele.push(div,lNome,lObs,btnIncluir)
    return ele
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

    btns.push(btnIncluir)
    return btns
}

function ulEstudos(estudos){
    let ul = $cria('ul')
    ul.setAttribute('id', 'ul-estudos')
    estudos.forEach((item,i) =>{
        console.log(estudos[i]);
        let li = $cria('li')
        // li.setAttribute('id', )
        let iNome = $cria('input')
        iNome.setAttribute('value',item.nome)
        iNome.setAttribute('class', 'i-estudo')
        iNome.setAttribute('disabled', true)
        let taObs = $cria('textArea')
        taObs.setAttribute('class', 'ta-estudo')
        taObs.setAttribute('disabled', true)
        item.obs ? taObs.innerText = item.obs : taObs.style.display = 'none'
        let divBtns = $cria('div')
        divBtns.setAttribute('class', 'btns-estudantes-edit')
        let bEx = $cria('button')//exclui elemento do array
        bEx.classList.add('btnLi')
        bEx.classList.add('invisivel')
        bEx.innerHTML = '<ion-icon name="person-remove" style="color: white; font-size: 10px"></ion-icon>'
        bEx.addEventListener('click', function(){
            this.parentNode.parentNode.remove()
            estudos.splice(i,1)
            atualiza.estudosSpan()
            atualiza.estudosLS()
            const lis = $all('#ul-estudos li')
            if(lis.length == 0){
             const btnEditaEstudante = $id('estudantesEditar')   
             const divCadastrados = $id('estudos')   
             btnEditaEstudante.classList.add('invisivel')
             divCadastrados.innerText = 'Nenhum estudo cadastrado'
            }
        })
        let bEd = $cria('button')
        bEd.classList.add('btnLi')
        bEd.classList.add('invisivel')
        bEd.innerHTML = '<ion-icon name="pencil" style="color: white; font-size: 10px"></ion-icon>'
        divBtns.appendChild(bEx)
        divBtns.appendChild(bEd)
        li.appendChild(iNome)
        li.appendChild(taObs)
        li.appendChild(divBtns)

        ul.appendChild(li)
    })
    

    return ul
}