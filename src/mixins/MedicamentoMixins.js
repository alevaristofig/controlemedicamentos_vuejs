import axios from "axios";

export default {
    data: () => ({
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
            axios.get('http://localhost:8083/v1/medicamentos')
                .then((response) => {                    
                    this.medicamentos = response.data;
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });
        },
        buscar(id) {
            axios.get(`http://localhost:8083/v1/medicamentos/${id}`)
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
                alert('entrou')
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