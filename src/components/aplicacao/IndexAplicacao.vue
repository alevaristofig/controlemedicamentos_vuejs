<template>
    <div>
        <h5>Aplicação de Medicamentos</h5>
        <router-link class="list-group-item" :to="{ name: 'cadastroaplicacao'}">
            <button class="btn btn-primary">Aplicar</button>
        </router-link>        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>  
                    <th scope="col">MEDICAMENTO</th>  
                    <th scope="col">DATA APLICAÇÃO</th>                  
                </tr>
            </thead>
            <tbody>
                <tr v-for="(aplicacao,i) in aplicacoes" :key="{i}">
                    <td>{{ aplicacao.id }}</td>
                    <td>{{ aplicacao.paciente.nome }}</td>
                    <td>{{ aplicacao.medicamento.nome }}</td>
                    <td>{{ $moment(aplicacao.dataAplicacao).format('DD/MM/YYYY H:m:s') }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AplicacaoMixins from '@/mixins/AplicacaoMixins';

export default {
    name: 'Aplicacao',
    mixins: [AplicacaoMixins],
    created() {
        this.listar()
    }
}

</script>
