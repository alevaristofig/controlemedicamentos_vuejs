import axios from "axios";

export default {
    data: () => ({
        nome: '',
        email: '',
        senha: '',
        classNome: false,
        classEmail: false,
        classSenha: false
    }),
    methods: {
        salvarUsuario() {

            if(this.validarCampos()) {               
                let data = {
                    'nome': this.nome,
                    'email': this.email,
                    'senha': this.senha
                }

                axios.post('http://localhost:8080/v1/usuarios',data)
                .then(() => {
                    alert('Usuario cadastrado com sucesso');
                    this.$router.push('/');
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');
                    console.log(error);
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

            if(this.email === '') {                
                this.classEmail = true;
                erro = true;
            } else {
                this.classEmail = false;
            }

            if(this.senha === '') {                
                this.classSenha = true;
                erro = true;
            } else {
                this.classSenha = false;
            }

            if(erro) {
                return false;
            }

            return true;
        }
    }
}