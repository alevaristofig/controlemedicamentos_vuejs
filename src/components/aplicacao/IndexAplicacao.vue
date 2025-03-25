<template>
    <div>
        <h5>Aplicação de Medicamentos</h5>
        <router-link class="list-group-item" :to="{ name: 'cadastroaplicacao'}">
            <button class="btn btn-primary">Aplicar</button>
        </router-link>        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>  
                    <th scope="col">DATA APLICAÇÃO</th>                  
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
import AplicacaoMixins from '@/mixins/AplicacaoMixins';

export default {
    name: 'Aplicacao',
    mixins: [AplicacaoMixins]
}

</script>
