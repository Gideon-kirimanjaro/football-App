<template>
  <div class="home">
<<<<<<< HEAD
    <template>
      <v-card>
        <v-toolbar color="cyan" dark flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Your Dashboard</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <Fixtures />
          </v-tab-item>
          <v-tab-item>
            <Standings />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>
=======
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> 13ce7fae2295ad5dc97dff2db26c805ac2012dd9
  </div>
</template>

<script>
<<<<<<< HEAD
import Fixtures from "../components/Fixtures/Fixtures";
import Standings from "../components/Standings/Standings";
export default {
  name: "Home",
  data() {
    return {
      tab: null,
      items: ["Fixtures", "Standings"],
      text: "Lorem",
    };
  },
  components: {
    Fixtures,
    Standings,
  },
};
=======
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
>>>>>>> 13ce7fae2295ad5dc97dff2db26c805ac2012dd9
</script>
