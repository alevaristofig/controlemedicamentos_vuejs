import axios from "axios";

export default {
    data: () => ({
        usuarios: [],
        nome: '',
        email: '',
        senha: '',
    }),
    methods: {
        listar() {
            axios.get('http://localhost:8083/v1/usuarios')
                .then((response) => {                    
                    this.usuarios = response.data;
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });
        },
        buscar(id) {
            axios.get(`http://localhost:8083/v1/usuarios/${id}`)
                .then((response) => {                                        
                    this.nome = response.data.nome;
                    this.email = response.data.email;
                    this.senha = response.data.senha;
                                    
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
            });           
        },
        editarUsuario() {
            console.log(this.nome)
        }
    }
}