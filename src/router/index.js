import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsuarioView from "@/views/CadastroUsuarioView.vue";
import PacienteComponent from "@/components/pacientes/PacienteComponent.vue";
import CadastroPacienteComponent from "@/components/pacientes/CadastroPacienteComponent.vue";
import MedicamentoCompoment from "@/components/medicamentos/MedicamentoCompoment.vue";

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
        path: 'cadastropaciente',
        component: CadastroPacienteComponent,
        name: 'cadastropaciente'
      },
      {
        path: 'medicamento',
        component: MedicamentoCompoment,
        name: 'medicamentos'
      }
    ]
  },
  {
    path: "/cadastrousuario",
    name: "cadastrousuario",
    component: UsuarioView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
