<template>
  <v-row>
    <!-- breakpoint changes do affect v-cols -->
    <v-col cols="12" sm="4" class="bg-success">
      <p class="text-h1">text-h1</p>
    </v-col>
    <v-col cols="12" sm="4" class="bg-info d-none d-sm-flex">
      <!-- breakpoint changes do not affect display/utility classes -->
      <p class="text-h3">d-none d-sm-flex (>= 800px)</p>
    </v-col>
    <v-col cols="12" sm="4" class="bg-warning d-sm-none">
      <p class="text-h4">d-sm-none (800px)</p>
    </v-col>
  </v-row>

  <!-- overriding $font-size-root does not work -->
  <v-row>
    <v-col cols="12" class="bg-error"> $font-size-root: 6px </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" class="bg-yellow text-black text-h4">
      useDisplay: smAndUp (threshold 800px): {{ smAndUp }}
    </v-col>

    <v-col cols="12" class="bg-purple text-white text-h4">
      current window width: {{ width }}px
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

const { smAndUp, width } = useDisplay();
</script>
