import axios from "axios";

export default {
    data: () => ({
        url: JSON.parse(sessionStorage.getItem('linksUrls')),
        medicamentos: [],
        nome: '',
        preco: '',
        quantidade: '',
        manipulado: '',
        classNome: false,
        classPreco: false,
        classQuantidade: false,
        classManipulado: false
    }),
    methods: {
        listar() {
            axios.get(this.url.medicamentos.href)
                .then((response) => {                    
                    this.medicamentos = response.data;
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });
        },
        buscar(id) {
            axios.get(`${this.url.medicamentos.href}/${id}`)
                .then((response) => {                    
                    this.nome = response.data.nome
                    this.preco = response.data.preco
                    this.quantidade = response.data.quantidade
                    this.manipulado = response.data.manipulado ? 'S' : 'N';                    
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });
        },
        salvarMedicamentos() {
            if(!this.validarCampos()) {  
                let data = {
                    nome: this.nome,
                    preco: this.preco,
                    quantidade: this.quantidade,
                    manipulado: this.manipulado === 'S' ? true : false
                }

                axios.post(`http://localhost:8080/v1/medicamentos`,data)
                    .then((response) => {                    
                        alert('Medicamento cadastrado com sucesso');
                       // this.$router.push({ name: 'medicamentos'});

                       this.nome = '';
                       this.preco = '',
                       this.quantidade = '',
                       this.manipulado = '';
                    })
                    .catch((error) =>{
                        console.log(error)
                        alert('Ocorreu um erro');                    
                });
            }            
        },
        atualizar(id) {
            if(!this.validarCampos()) {  
                let data = {
                    nome: this.nome,
                    preco: this.preco,
                    quantidade: this.quantidade,
                    manipulado: this.manipulado === 'S' ? true : false
                }

                axios.put(`${this.url.medicamentos.href}/${id}`,data)
                    .then((response) => {                    
                        alert('Medicamento atualizado com sucesso');
                        this.$router.push({ name: 'medicamentos'});
                    })
                    .catch((error) =>{
                        console.log(error)
                        alert('Ocorreu um erro');                    
                });
            } 
        },
        validarCampos() {  
            let erro = false;
    
            if(this.nome === '') {                
                this.classNome = true;
                erro = true;
            } else {
                this.classNome = false;
            }

            if(this.preco === '') {                
                this.classPreco = true;
                erro = true;
            } else {
                this.classPreco = false;
            }

            if(this.quantidade === '') {                
                this.classQuantidade = true;
                erro = true;
            } else {
                this.classQuantidade = false;
            }

            if(this.manipulado === '') {                
                this.classManipulado = true;
                erro = true;
            } else {
                this.classManipulado = false;
            }            

            if(erro) {
                return true;
            }

            return erro;
        }
    }
}