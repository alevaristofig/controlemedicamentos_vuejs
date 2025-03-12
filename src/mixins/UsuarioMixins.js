import axios from "axios";

export default {
    data: () => ({
        usuarios: []
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
        }
    }
}