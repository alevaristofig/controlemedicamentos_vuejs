import axios from "axios";

export default {
    data: () => ({
        aplicacoes: [],
        classPaciente: false,
        classMedicamento: false,
        finalizado: '',
        paciente: '',
        pacientes: [
            { id: 1, nome: 'Rubi' },
            { id: 2, nome: 'Maia' },
            { id: 3, nome: 'Lua' },
            { id: 4, nome: 'Tuntun' }
        ],
        medicamento: '',
        medicamentos: [
            { id: 1, nome: 'Apoquel' },
            { id: 2, nome: 'Braveto' },
            { id: 3, nome: 'Predinsona' },
            { id: 4, nome: 'Cortotic' }
        ],
    }),
    methods: {
        listar() {
            axios.get('http://localhost:8083/v1/aplicacao')
                    .then((response) => {
                        this.aplicacoes = response.data
                    })
                    .catch((error) =>{                        
                        console.log(error);
                });
        },
        aplicarMedicamentos() {
            if(this.validarCampos()) {                 
                let dataAtual = new Date();

                let data = {
                    'pacienteId': this.paciente,
                    'medicamentoId': this.medicamento,
                    'dataAplicacao': dataAtual.toISOString()
                }

                axios.post('http://localhost:8080/v1/aplicacao',data)
                    .then(() => {
                        alert('Medicamento aplicado com sucesso');
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

            if(this.paciente === '') {                
                this.classPaciente = true;
                erro = true;
            } else {
                this.classPaciente = false;
            }

            if(this.medicamento === '') {                
                this.classMedicamento = true;
                erro = true;
            } else {
                this.classMedicamento = false;
            }            

            if(erro) {
                return false;
            }

            return true;
        }
    }
}