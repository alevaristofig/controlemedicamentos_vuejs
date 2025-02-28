import axios from "axios";

export default {
    data: () => ({
        nome: '',
        raca: '',
        peso: '',
        cor: '',
        idade: '',
        classNome: false,
        classRaca: false,
        classPeso: false,
        classCor: false,
        classIdade: false,
    }),
    methods: {
        salvarPaciente() {
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

            if(this.raca === '') {                
                this.classRaca = true;
                erro = true;
            } else {
                this.classRaca = false;
            }

            if(this.peso === '') {                
                this.classPeso = true;
                erro = true;
            } else {
                this.classPeso = false;
            }

            if(this.cor === '') {                
                this.classCor = true;
                erro = true;
            } else {
                this.classCor = false;
            }

            if(this.idade === '') {                
                this.classIdade = true;
                erro = true;
            } else {
                this.classIdade = false;
            }

            if(erro) {
                return true;
            }

            return erro;
        }
    }
}