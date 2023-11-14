const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const mesAtual = dataAtual.getMonth()
const diaAtual = dataAtual.getDate()

new Vue({
    el: "#app",
    data : {
        mesString : [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro'
        ],
        listaDescricao : [
            { desc : 'Obra mundial', tipo : 'c'},
            { desc : 'Congregação' , tipo : 'c'},
            { desc : 'Congregação (pix)', tipo: 'c'},
            { desc : 'Congregação (jw)', tipo: 'c'},
            { desc : 'Luz', tipo : 'd'},
            { desc : 'Água', tipo : 'd'},
            { desc : 'Telefone', tipo : 'd'},
            { desc : 'Compra NF', tipo : 'd'},
        ],
        id : '',
        ano : dataAtual.getFullYear(),
        mesIndice : dataAtual.getMonth(),
        mes : '',
        dia : dataAtual.getDate(),
        descricao : '',
        valor : '',
        tipo : 'c',
        totalOM : '0,00',
        totalCong : '0,00',
        totalCongPix : '0,00',
        totalCongJW : '0,00',
        totalSaidas : '0,00',
        totalOperacional : '0,00',
        contas : [],
        contaSelecionada : [],
        showTabela: false,
        showListaDescrisao : false,
        showIncluir : false,
        btnMaisIncluir : true,
        btnMenosIncluir: false,
        btnEditar: true,
        btnVoltar: false,
        showTotal : false,
        btnMaisTotal : true,
        btnMenosTotal: false,
        showFooter : false,
        habilitaBtnEditar: true
    },
    methods: {
        gerarId(){        
            let resultado = ''
            const caracteres = 'abcde0123456789'
            for(let i = 0; i < 5; i++){
                resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
            }

            return resultado
        },
        conferirId(id){
            this.contas.forEach(item =>{
                if(item.id == id){
                    return true
                }
            })
        },
        btnsIncluir(){
            this.btnMaisIncluir = !this.btnMaisIncluir
            this.btnMenosIncluir = !this.btnMenosIncluir
            this.showIncluir = !this.showIncluir
        },
        btnsTotal(){
            this.showTotal = !this.showTotal
            this.btnMaisTotal = !this.btnMaisTotal
            this.btnMenosTotal = !this.btnMenosTotal
        },
        btnsTabela(){
            this.btnEditar = !this.btnEditar
            this.btnVoltar = !this.btnVoltar
        },
        lancamento(){
            const idGera = this.gerarId()
            
            return {
                id : idGera,
                ano : this.ano,
                mes : this.mesIndice,
                dia : this.dia,
                descricao : this.descricao,
                valor : this.valor,
                tipo : this.tipo
            }
        },
        clearData(){
            this.ano = dataAtual.getFullYear()
            this.mes = dataAtual.getMonth
            this.dia = dataAtual
            this.descricao = ''
            this.valor = ''
            this.tipo = 'c'
        },
        mesAnterior(){
            // this.mesIndice--
            if(this.mesIndice <= 0 ){
                this.mesIndice = 11
                this.ano--  
                this.atualizaConta()
            }else{
                this.mesIndice--
                this.atualizaConta()
            }  
        },
        mesProximo(){
            if(this.mesIndice >= 11){
                this.mesIndice = 0
                this.ano++
            }else{
                this.mesIndice++
                this.atualizaConta()
            }
        },
        atualizaLs(){
            localStorage.setItem('contas', JSON.stringify(this.contas))
        },
        addLancamento(){
            const dado = this.lancamento()
            this.contas.push(dado)
            this.atualizaLs()
            this.atualizaConta()
            this.descricao = ''
            this.valor = ''
            this.tipo = 'c'
        },
        selecionaElemento(e){
            this.habilitaBtnEditar = true
            const target = e.target.parentElement
            this.showFooter = true;
            this.id = target.getAttribute('id')
            this.contas.forEach(item =>{
                if(item.id == this.id){
                    this.dia = item.dia
                    this.descricao = item.descricao
                    this.valor = item.valor
                    this.tipo = item.tipo
                }
            })
        },
        selecionaDescricao(e){
            this.descricao = e.target.innerHTML
            this.tipo = e.target.getAttribute('tipo')
            this.showListaDescrisao = false
        },
        excluirElemento(){
            const novaLista = this.contas.filter(item => item.id !== this.id)
            this.contas = novaLista
            this.atualizaLs()
            this.atualizaConta()
            this.showFooter = false
            this.habilitaBtnEditar = false
        },
        alteraElemento(){
            this.excluirElemento()
            this.addLancamento()
        },
        filtrarLista(){
            if(this.contas.length){
                this.contaSelecionada = 
                    this.contas.filter((item)=> item.ano === this.ano && item.mes === this.mesIndice)
                this.contaSelecionada.sort((a,b)=> a.dia - b.dia)
            }   
        },
        mapDescricao(desc){
            const arrayValor = 
                this.contaSelecionada.map(item => item.descricao === desc ? this.parseValor(item.valor) : 0)
            
            return arrayValor
        },
        mapTipo(tp){
            const arrayValor = 
                this.contaSelecionada.map(item => item.tipo === tp ? this.parseValor(item.valor) : 0)
            
            return arrayValor
        },
        totaisConta(array){
            const soma =
                array.reduce((acumulador, elemento)=>{
                return acumulador + elemento
            },0)

            return soma.toFixed(2)
        },
        totalOperacionalCalcula(){
            let soma = 0

            this.contaSelecionada.forEach(item =>{

                if(item.descricao === 'Luz') soma = soma + this.parseValor(item.valor)

                if(item.descricao === 'Água') soma = soma + this.parseValor(item.valor)

                if(item.descricao === 'Telefone') soma = soma + this.parseValor(item.valor)
            
            })

            return soma.toFixed(2)
        },
        totalDescricao(desc){
            let arrayDesc
            desc === 'd' ? arrayDesc = this.mapTipo(desc) : arrayDesc = this.mapDescricao(desc)
            const calc = this.totaisConta(arrayDesc)
            return calc.replace('.',',')
        },
        atualizaConta(){
            this.filtrarLista()

            this.totalOM = this.totalDescricao(this.listaDescricao[0].desc)

            this.totalCong = this.totalDescricao(this.listaDescricao[1].desc)

            this.totalCongPix = this.totalDescricao(this.listaDescricao[2].desc)
            
            this.totalCongJW = this.totalDescricao(this.listaDescricao[3].desc)
            
            this.totalSaidas = this.totalDescricao('d')

            this.totalOperacional = this.totalOperacionalCalcula().replace('.',',')
        },
        parseValor(valor){
            if(valor.includes('.')) valor.replace('.','')
            valor = valor.replace(',','.')
            return parseFloat(valor)
        }
    },
    mounted(){
        this.mes = this.mesString[this.mesIndice]
        this.contas = JSON.parse(localStorage.getItem('contas')) || []
        this.atualizaConta()
    }
})