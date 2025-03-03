<template>
  <div>
    <nav class="navbar navbar-light bg-light menu_superior">
      <div class="container">
        <div>Sitema de Controle de Medicamentos</div>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu_esquerdo">
        <router-link class="list-group-item" to="" exact-active-class="true">
          <i class="bi bi-person-vcard-fill">Usuário</i>
        </router-link>
        <router-link class="list-group-item" :to="{ name: 'pacientes'}" exact-active-class="true">
          <i class="bi bi-clipboard2-heart">Paciente</i>
        </router-link>
        <router-link class="list-group-item" :to="{ name: 'medicamentos'}" exact-active-class="true">
          <i class="bi bi-capsule">Paciente</i>
        </router-link>
      </div>

      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .menu_superior {
    border-bottom: solid 1px #ccc;
  }

  .menu_esquerdo {
    border-right: solid 1px #ccc;
    width: 250px;
  }
</style>
