import axios from "axios";

export default {
    data: () => ({
        aplicacoes: [],
        classPaciente: false,
        classMedicamento: false,
        finalizado: '',
        paciente: '',
        pacientes: [],
        medicamento: '',
        medicamentos: [],
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
        listarPacientes() {
            axios.get('http://localhost:8083/v1/pacientes')
                    .then((response) => {                        
                        this.pacientes = response.data
                    })
                    .catch((error) =>{                        
                        console.log(error);
            })
        },
        listarMedicamentos() {
            axios.get('http://localhost:8083/v1/medicamentos')
                .then((response) => {                    
                    this.medicamentos = response.data;
                })
                .catch((error) =>{
                    alert('Ocorreu um erro');                    
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