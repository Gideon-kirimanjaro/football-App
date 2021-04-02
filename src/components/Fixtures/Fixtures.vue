<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="team"
            label="Enter Team"
            required
          ></v-text-field> </v-col
      ></v-row>
      <button class="add">Add</button>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Fixtures",
};
</script>

<style lang="scss" scoped>
.add {
  color: green;
  border-radius: 0px 4px;
  border: 2px solid;
  padding: 7px;
  margin-left: 140px;
}
</style>
