<template>
    <div>        
        <div class="mb-3 row mt-3">
            <label class="col-sm-1 col-form-label">Nome*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classNome}" v-model="nome"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Raça*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classRaca}" v-model="raca"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Peso*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classPeso}" v-model="peso"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Cor*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classCor}" v-model="cor"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Idade*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classIdade}" v-model="idade"/>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="salvarPaciente">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import PacienteMixins from '@/mixins/PacienteMixins';

export default {
    name: 'CadastroPaciente',
    mixins: [PacienteMixins]
}

</script>
