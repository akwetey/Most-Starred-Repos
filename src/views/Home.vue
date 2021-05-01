<template>
  <div class="container" style="margin: 70px auto">
    <Breadcrumb :title="title" :breadcrumb="breadcrumb" />
    <Suspense>
      <template #default>
        <TrendingRepo />
      </template>
      <template #fallback>
        <h5 class="display-6">Loading please wait...</h5>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue"; // @ is an alias to /src
import TrendingRepo from "@/components/TrendingRepo.vue"; // @ is an alias to /src
import { BreadcrumbItems } from "@/types";
export default defineComponent({
  name: "Home",
  components: {
    Breadcrumb,
    TrendingRepo,
  },
  data() {
    return {
      title: "Trending Repos Last 30 Days" as string,
      breadcrumb: [
        {
          name: "Home",
          isActive: false,
          to: "Home",
        },
        {
          name: "Trending Repos",
          isActive: true,
        },
      ] as BreadcrumbItems[],
    };
  },
});
</script>
