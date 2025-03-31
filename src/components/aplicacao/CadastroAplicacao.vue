<template>
    <div>        
        <div class="mb-3 mt-3 row">
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
        <div class="mb-3 row">
            <label class="col-sm-1 col-form-label">Finalizado*</label>
            <div class="col-sm-10 mt-2 justify-content-start">
                <div class="form-check-inline">
                    <input type="radio" class="me-1" value="S" v-model="finalizado">
                    <label class="form-check-label">Sim</label>
                </div>
                <div class="form-check form-check-inline">                    
                    <input type="radio" class="me-1" value="N" v-model="finalizado"/>
                    <label class="form-check-label">Não</label>
                </div>
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
