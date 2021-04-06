<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="homeTeam"
            label="Enter Home Team"
            required
          ></v-text-field>
          <v-text-field
            v-model="awayTeam"
            label="Enter Away Team"
            required
          ></v-text-field>
        </v-col>
        <v-row class="mt-5">
          <v-container class="d-flex align-end flex-column">
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Home Team
                    </th>
                    <th class="text-left">
                      Away Team
                    </th>
                    <th class="text-left">
                      Date
                    </th>
                    <th class="text-left">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="team.key" v-for="team in teams">
                    <td>{{ team.fixtureHomeTeam }}</td>
                    <td>{{ team.fixtureAwayTeam }}</td>
                    <td>{{ team.fixtureDate }}</td>
                    <td>{{ team.fixtureTime }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table></v-container
          ></v-row
        >
      </v-row>

      <div class="clock">
        <v-row>
          <v-date-picker
            class="mr-4"
            v-model="datePicker"
            color="green lighten-1"
          ></v-date-picker
          ><v-time-picker v-model="timePicker" ampm-in-title></v-time-picker>
        </v-row>
      </div>

      <button
        :disabled="homeTeam && awayTeam === ''"
        @click="addTeamFixture"
        class="add"
      >
        Add
      </button>
      <h4 v-if="awayTeam === ''">
        <h4 class="red--text">rules:</h4>
        {{ error }}
      </h4>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

const fixtureApi = "https://gidi-epl-default-rtdb.firebaseio.com/fixtures.json";
export default {
  name: "Fixtures",
  computed: {},
  data() {
    return {
      homeTeam: "",
      awayTeam: "",
      error: "You cannot add an empty home or away team",
      teams: [],
      datePicker: "",
      timePicker: "",
    };
  },
  methods: {
    //----------------Adding Team to db--------------
    async addTeamFixture() {
      if (this.homeTeam && this.awayTeam === "") {
        return this.error;
      } else {
        await axios
          .post(fixtureApi, {
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
            date: this.datePicker,
            time: this.timePicker,
          })
          .then((this.awayTeam = ""))
          .then((this.homeTeam = ""))
          .then((this.datePicker = ""))
          .then((this.timePicker = ""))
          .then((response) => {
            console.log(response);
          });
      }
    },
    async getTeamFixture() {
      const teams = [];
      const response = await axios.get(fixtureApi);
      const obj = response.data;
      console.log(obj);
      for (let id in obj) {
        teams.push({
          fixtureAwayTeam: obj[id].awayTeam,
          fixtureHomeTeam: obj[id].homeTeam,
          fixtureTime: obj[id].time,
          fixtureDate: obj[id].date,
        });
      }
      this.teams = teams;
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  color: green;
  border-radius: 0px 4px;
  border: 2px solid;
  padding: 7px;
  margin-left: 140px;
  margin-top: 30px;
}
</style>
