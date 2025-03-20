<template>
    <div>
        <h5>Medicamentos</h5>
        <router-link class="list-group-item" :to="{ name: 'cadastromedicamento'}">
            <button class="btn btn-primary">Adicionar</button>
        </router-link>        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">PREÇO</th>
                    <th scope="col">QUANTIDADE</th>
                    <th scope="col">MANIPULADO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(medicamento,i) in medicamentos" :key="{i}">
                    <td>{{ medicamento.id }}</td>
                    <td>{{ medicamento.nome }}</td>
                    <td>{{ medicamento.preco }}</td>
                    <td>{{ medicamento.quantidade }}</td>
                    <td>{{ medicamento.manipulado == true ? 'Sim' : 'Não' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import MedicamentoMixins from '@/mixins/MedicamentoMixins';

export default {
   name: 'Medicamentos',
   mixins: [MedicamentoMixins],
   created() {
        this.listar();
   }
}
</script>
