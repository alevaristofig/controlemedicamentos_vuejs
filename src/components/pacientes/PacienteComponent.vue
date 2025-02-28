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
                </tr>
            </thead>
        </table>
    </div>
</template>