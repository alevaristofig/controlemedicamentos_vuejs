<template>
    <div>        
        <router-link class="list-group-item mt-3" :to="{ name: 'cadastromedicamento'}">
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
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(medicamento,i) in medicamentos" :key="{i}">
                    <td>{{ medicamento.id }}</td>
                    <td>{{ medicamento.nome }}</td>
                    <td>{{ medicamento.preco }}</td>
                    <td>{{ medicamento.quantidade }}</td>
                    <td>{{ medicamento.manipulado == true ? 'Sim' : 'Não' }}</td>
                    <td>
                        <router-link :to="{name: 'editarmedicamento', params: {id: medicamento.id}}" class="btn btn-sm btn-primary">
                            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                        </router-link> 
                    </td>
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
