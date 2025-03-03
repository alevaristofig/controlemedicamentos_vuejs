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
                let data = {
                    nome: this.nome,
                    raca: this.raca,
                    peso: this.peso,
                    cor:  this.cor,
                    idade: this.idade,
                }


                axios.post('http://localhost:8080/v1/pacientes',data)
                .then(() => {
                    alert('Usuario cadastrado com sucesso');
                    this.$router.push('/');
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');
                    console.log(error);
                })
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