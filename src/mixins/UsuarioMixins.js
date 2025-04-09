import axios from "axios";
import bcrypt from "bcryptjs";

export default {
    data: () => ({
        url: JSON.parse(sessionStorage.getItem('linksUrls')),
        usuarios: [],
        nome: '',
        email: '',
        senha: '',
        classNome: false,
        classEmail: false,
        classSenha: false
    }),
    methods: {
        listar() {
            axios.get(this.url.usuarios.href)
                .then((response) => {                    
                    this.usuarios = response.data;
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });
        },
        buscar(id) {
            axios.get(`${this.url.usuarios.href}/${id}`)
                .then((response) => {                                        
                    this.nome = response.data.nome;
                    this.email = response.data.email;
                    this.senha = response.data.senha;
                                    
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });           
        },
        editarUsuario(id) {           
            if(this.validarCampos()) {                                 
                let salt = bcrypt.genSaltSync(10);
                let senha = bcrypt.hashSync(this.senha,salt);

                let data = {
                    'nome': this.nome,
                    'email': this.email,
                    'senha': senha
                }

                axios.put(`${this.url.usuarios.href}/${id}`,data)
                    .then(() => {
                        alert('Usuario atualizado com sucesso');
                        this.$router.push({ name: 'usuario'});
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