<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="patients"
      sort-by="calories"
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
    </v-data-table>

    <PatientForm :patient="patient" v-model="dialog" />
  </v-container>
</template>

<script>
export default {
  name: "Patients",

  components: {
    PatientForm: () => import("../components/PatientForm.vue"),
  },

  data: () => ({
    dialog: false,
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
      this.patients = [];
    },

    add() {
      this.patient = {
        name: null,
        age: null,
        has_covid: false,
      };
      this.dialog = true;
    },

    edit() {
      console.log("edit");
    },

    remove() {
      console.log("delete");
    },
  },
};
</script>
