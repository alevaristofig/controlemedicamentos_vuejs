<template>
    <div>
        <h5>Pacientes</h5>
        <router-link class="list-group-item" :to="{ name: 'cadastropaciente'}">
            <button class="btn btn-primary">Adicionar</button>
        </router-link>        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">RAÇA</th>
                    <th scope="col">COR</th>
                    <th scope="col">IDADE</th>
                    <th scope=""></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(paciente,i) in pacientes" :key="{i}">
                    <td>{{ paciente.id }}</td>
                    <td>{{ paciente.nome }}</td>
                    <td>{{ paciente.raca }}</td>
                    <td>{{ paciente.cor }}</td>
                    <td>{{ paciente.idade }}</td>
                    <td>
                        <router-link :to="{name: 'editarpaciente', params: {id: paciente.id}}" class="btn btn-sm btn-primary">
                            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                        </router-link>                        
                       <!-- <button class="btn btn-danger">Apagar</button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import PacienteMixins from '@/mixins/PacienteMixins';

export default {
    name: 'Pacientes',
    mixins: [PacienteMixins],
    created() {
        this.listar();
    }
}
</script>
