import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import UsuarioCompoment from "@/components/usuarios/UsuarioCompoment.vue";
import CadastroUsuarioView from "@/views/CadastroUsuarioView.vue";
import EditarUsuarioCompoment from "@/components/usuarios/EditarUsuarioCompoment.vue";
import PacienteComponent from "@/components/pacientes/PacienteComponent.vue";
import EditarPacienteComponent from "@/components/pacientes/EditarPacienteComponent.vue";
import CadastroPacienteComponent from "@/components/pacientes/CadastroPacienteComponent.vue";
import MedicamentoCompoment from "@/components/medicamentos/MedicamentoCompoment.vue";
import EditarMedicamentoComponent from "@/components/medicamentos/EditarMedicamentoComponent.vue";
import CadastroMedicamentoComponent from "@/components/medicamentos/CadastroMedicamentoComponent.vue";
import IndexAplicacao from "@/components/aplicacao/IndexAplicacao.vue";
import CadastroAplicacao from "@/components/aplicacao/CadastroAplicacao.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path : 'paciente',
        component: PacienteComponent,
        name: 'pacientes',
        /*children: [
          {
            path: 'cadastropaciente',
            component: CadastroPacienteComponent,
            name: 'cadastropaciente'
          }         
        ]*/
      },
      {
        path: 'usuario',
        component: UsuarioCompoment,
        name: 'usuario'
      },
      {
        path: 'usuario/:id',
        component: EditarUsuarioCompoment,
        name: 'editarusuario'
      },
      {
        path: 'paciente/:id',
        component: EditarPacienteComponent,
        name: 'editarpaciente'
      },
      {
        path: 'cadastropaciente',
        component: CadastroPacienteComponent,
        name: 'cadastropaciente'
      },
      {
        path: 'medicamento',
        component: MedicamentoCompoment,
        name: 'medicamentos'
      },
      {
        path: 'medicamento/:id',
        component: EditarMedicamentoComponent,
        name: 'editarmedicamento'
      },
      {
        path: 'cadastromedicamento',
        component: CadastroMedicamentoComponent,
        name: 'cadastromedicamento'
      },
      {
        path: 'aplicacao',
        component: IndexAplicacao,
        name: 'aplicacao'
      },
      {
        path: 'cadastroaplicacao',
        component: CadastroAplicacao,
        name: 'cadastroaplicacao'
      }
    ]
  },
  {
    path: "/cadastrousuario",
    name: "cadastrousuario",
    component: CadastroUsuarioView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
