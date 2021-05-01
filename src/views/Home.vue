<template>
  <div class="container" style="margin: 70px auto">
    <Breadcrumb :title="title" :breadcrumb="breadcrumb" />
    <div class="card shadow-lg border-0">
      <div class="card-body">
        <h4>Hello</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue"; // @ is an alias to /src
import { BreadcrumbItems } from "@/types";
import TrendingRepoService from "@/services/index";
export default defineComponent({
  name: "Home",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      title: "Trending Repos" as string,
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

  async created() {
    try {
      let res = await TrendingRepoService.index();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
});
</script>
