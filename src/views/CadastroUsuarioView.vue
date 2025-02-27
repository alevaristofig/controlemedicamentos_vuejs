<template>
    <div>
        <div class="mb-3 row">
            <h5>Cadastro de Usuário</h5>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Nome:</label>
            <div class="col-sm-8">
                <input type="text" id="nome" class="form-control" :class="{'border-danger': classNome}" v-model="nome" />
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">E-mail:</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" :class="{'border-danger': classEmail}" v-model="email"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Senha:</label>
            <div class="col-sm-8">
                <input type="password" class="form-control" :class="{'border-danger': classSenha}" v-model="senha"/>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="salvarUsuario">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import ApiMixins from '@/mixins/ApiMixins';

export default {
    name: 'CadastroUsuario',
    mixins: [ApiMixins]   
}
</script>
