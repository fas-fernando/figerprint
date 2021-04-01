<template>
  <v-app>
    <v-main>
      <v-container>
        <h3>Formulário de Paciente</h3>

        <v-form ref="form" @submit.prevent="salvar">
          <v-text-field
            placeholder="Nome do Paciente"
            v-model="paciente.nome"
          ></v-text-field>
          <v-text-field
            placeholder="Idade do Paciente"
            v-model="paciente.idade"
          ></v-text-field>
          <v-text-field v-model="paciente.teste"> </v-text-field>
          <v-btn color="success" @click="salvar">Enviar</v-btn>
        </v-form>
        <hr class="mt-6" />

        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">
                Paciente
              </th>
              <th class="text-left">
                Idade
              </th>
              <th class="text-left">
                COVID-19
              </th>
              <th class="text-left">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="paciente of pacientes" :key="paciente.id">
              <td>{{ paciente.nome }}</td>
              <td>{{ paciente.idade }}</td>
              <td>{{ paciente.teste }}</td>
              <td>
                <v-icon small class="mr-2">mdi-pencil</v-icon>
                <v-icon @click="remover(paciente)" small>mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Paciente from "./services/pacientes";

export default {
  data() {
    return {
      paciente: {
        nome: "",
        idade: "",
        teste: "",
      },
      pacientes: [],
    };
  },

  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      Paciente.listar().then((res) => {
        this.pacientes = res.data;
      });
    },

    salvar() {
      Paciente.salvar(this.paciente).then(() => {
        this.paciente = {};
        alert("Salvo com sucesso!");
        this.listar();
      });
    },

    remover(paciente) {
      Paciente.apagar(paciente).then(() => {
        //
      });
    },
  },
};
</script>
