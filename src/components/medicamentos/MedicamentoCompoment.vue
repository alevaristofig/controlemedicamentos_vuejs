<template>
    <div>
        <h5>Medicamentos</h5>
        <router-link class="list-group-item" :to="{ name: 'cadastropaciente'}">
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
                </tr>
            </thead>
        </table>
    </div>
</template>