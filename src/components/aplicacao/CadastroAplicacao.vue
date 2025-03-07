<template>
    <div>
        <h5>Aplicação Medicamentos</h5>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Paciente*</label>
            <div class="col-sm-10">
                <select class="form-select" :class="{'border-danger': classPaciente}" v-model="paciente">
                    <option value="" disabled>-- Selecione uma opção</option>
                    <option 
                        v-for="pac in pacientes" 
                        :key="pac.id"
                        :value="pac.id"
                    >
                        {{ pac.id }} - {{ pac.nome }}
                    </option>
                </select>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Medicamento*</label>
            <div class="col-sm-10">
                <select class="form-select" :class="{'border-danger': classMedicamento}" v-model="medicamento">
                    <option value="" disabled>-- Selecione uma opção</option>
                    <option 
                        v-for="med in medicamentos" 
                        :key="med.id"
                        :value="med.id"
                    >
                        {{ med.id }} - {{ med.nome }}
                    </option>
                </select>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="aplicarMedicamentos">Aplicar</button>
        </div>
    </div>
</template>

<script>

import AplicacaoMixins from '@/mixins/AplicacaoMixins';

export default {
    name: 'CadastroAplicacao',
    mixins: [AplicacaoMixins]
}
</script>
