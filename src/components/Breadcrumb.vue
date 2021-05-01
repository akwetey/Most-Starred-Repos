<template>
  <div class="d-flex justify-content-between">
    <h5 class="text-uppercase h5 mt-2">{{ title }}</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white">
        <li
          :class="b.isActive ? 'breadcrumb-item active' : 'breadcrumb-item'"
          v-for="(b, i) in breadcrumb"
          :key="i"
        >
          <template v-if="b.isActive">
            {{ b.name }}
          </template>
          <template v-else>
            <router-link :to="{ name: `${b.to}` }" class="b-anchor">{{
              b.name
            }}</router-link>
          </template>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BreadcrumbItems } from "@/types";

export default defineComponent({
  name: "Breadcrumb",
  props: {
    breadcrumb: {
      type: Array as PropType<BreadcrumbItems[]>,
      required: true,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    title: {
      type: String,
      required: true,
      default: "Page",
    },
  },
});
</script>
<style scoped>
.b-anchor:hover {
  color: #0056b3;
  text-decoration: none;
}
</style>
