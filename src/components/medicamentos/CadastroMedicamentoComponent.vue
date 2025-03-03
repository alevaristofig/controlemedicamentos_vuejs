<template>
    <div>
        <h5>Cadastro Medicamentos</h5>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Nome*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classNome}" v-model="nome"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Preço*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classPreco}" v-model="preco"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Quantidade*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classQuantidade}" v-model="quantidade"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Manipulado*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :class="{'border-danger': classManipulado}" v-model="manipulado"/>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="salvarMedicamentos">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import MedicamentoMixins from '@/mixins/MedicamentoMixins';

export default {
    name: 'CadastroMedicamento',
    mixins: [MedicamentoMixins]
}

</script>