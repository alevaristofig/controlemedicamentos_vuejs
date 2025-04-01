<template>
    <div>
        <div class="mb-3 mt-3 row">
            <label class="col-sm-1 col-form-label">Nome*:</label>
            <div class="col-sm-8">
                <input type="text" id="nome" class="form-control" :class="{'border-danger': classNome}" v-model="nome"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">E-mail*:</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" :class="{'border-danger': classEmail}" v-model="email"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Senha*:</label>
            <div class="col-sm-8">
                <input type="password" class="form-control" :class="{'border-danger': classSenha}" v-model="senha"/>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="editarUsuario(this.$route.params.id)">Editar</button>
        </div>
    </div>
</template>

<script>
import UsuarioMixins from '@/mixins/UsuarioMixins';

export default {
   name: "EditarUsuario",
   mixins: [UsuarioMixins],
   created() {
        this.buscar(this.$route.params.id);
   }
}
</script>
