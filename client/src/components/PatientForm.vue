<template>
  <v-dialog v-model="value" persistent max-width="500px">
    <v-card :loading="saving">
      <v-card-title>
        <span class="headline" v-text="title"></span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                autofocus
                v-model="patient.nome"
                label="Nome do Paciênte"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="patient.idade"
                label="Idade do Paciênte"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-switch
                v-model="patient.teste"
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
import { storePatient, updatePatient } from "../repositories/PatientRepository";

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

  data: () => ({
    saving: false,
  }),

  computed: {
    title() {
      return !this.patient.id ? "Novo Paciênte" : "Editar Paciênte";
    },
  },

  methods: {
    save() {
      this.saving = true;

      if (this.patient.id) {
        return updatePatient(this.patient)
          .then(() => {
            this.$emit("saved");
            this.close();
          })
          .finally(() => {
            this.saving = false;
          });
      }

      return storePatient(this.patient)
        .then(() => {
          this.$emit("saved");
          this.close();
        })
        .finally(() => {
          this.saving = false;
        });
    },
    close() {
      this.$emit("input", false);
    },
  },
};
</script>
