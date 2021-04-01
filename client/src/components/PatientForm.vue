<template>
  <v-dialog v-model="value" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline" v-text="title"></span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                autofocus
                v-model="patient.name"
                label="Nome do Paciênte"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="patient.age"
                label="Idade do Paciênte"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-switch
                v-model="patient.has_covid"
                label="Resultado do teste de Covid-19"
                hide-details
              ></v-switch>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none" text @click="close">
          Cancelar
        </v-btn>
        <v-btn class="text-none" color="blue darken-1" text @click="save">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PatientForm",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    patient: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return !this.patient.id ? "Novo Paciênte" : "Editar Paciênte";
    },
  },

  methods: {
    save() {},
    close() {
      this.$emit("input", false);
    },
  },
};
</script>
