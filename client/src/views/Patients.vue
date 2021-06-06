<template>
  <v-container>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="patients"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Paciêntes</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="add" x-small fab class="mb-2">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:body="{ items }">
        <tbody v-if="items.length">
          <tr v-for="patient in items" :key="patient.id">
            <td align="left" v-text="patient.nome"></td>
            <td align="left" v-text="patient.idade"></td>
            <td
              width="10%"
              align="left"
              v-text="`${patient.teste ? 'Positivo' : 'Negativo'}`"
            ></td>
            <td>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn fab icon x-small v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="edit(patient)">
                    Editar
                  </v-list-item>

                  <v-list-item @click="remove(patient)">
                    Deletar
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

    <PatientForm :patient="patient" v-model="dialog" @saved="initialize" />
  </v-container>
</template>

<script>
import {
  deletePatient,
  fetchAllPatients,
} from "../repositories/PatientRepository";

export default {
  name: "Patients",

  components: {
    PatientForm: () => import("../components/PatientForm.vue"),
  },

  data: () => ({
    dialog: false,
    loading: false,
    headers: [
      {
        text: "Nome",
        sortable: false,
        value: "name",
      },
      { text: "Idade", value: "age" },
      { text: "Covid-19", value: "has_covid" },
      { text: "", sortable: false },
    ],

    patients: [],

    patient: {
      name: null,
      age: null,
      has_covid: false,
    },
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.loading = true;
      fetchAllPatients()
        .then((res) => {
          this.patients = res.data;
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },

    add() {
      this.patient = {
        nome: null,
        idade: null,
        teste: false,
      };
      this.dialog = true;
    },

    edit(patient) {
      this.patient = { ...patient };
      this.dialog = true;
    },

    remove(patient) {
      if (confirm("Deseja realmente excluir?")) {
        deletePatient(patient.id)
          .then(() => {
            this.initialize();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>
