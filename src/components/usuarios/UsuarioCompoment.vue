<template>
    <div>
        <h5>Usuários</h5>
        <router-link class="list-group-item" :to="{ name: 'cadastromedicamento'}">
            <button class="btn btn-primary">Adicionar</button>
        </router-link>        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">E-MAIL</th>
                    <th scope=""></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(usuario,i) in usuarios" :key="{i}">
                    <td>{{usuario.id}}</td>
                    <td>{{usuario.nome}}</td>
                    <td>{{usuario.email}}</td>
                    <td>
                        <button class="btn btn-info me-2">Editar</button>
                        <button class="btn btn-danger">Apagar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import UsuarioMixins from '@/mixins/UsuarioMixins';

export default {
   name: 'Usuarios',
   mixins: [UsuarioMixins],
   created() {
        this.listar();
   }
}
</script>
