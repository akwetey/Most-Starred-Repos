<template>
  <div class="container" style="margin: 70px auto">
    <Breadcrumb :title="title" :breadcrumb="breadcrumb" />
    <div class="col-md-6 mb-5 pl-0">
      <input type="search" class="form-control" placeholder="search" />
    </div>
    <div
      class="card shadow-lg border-0 mt-4"
      v-for="(item, i) in items"
      :key="i"
    >
      <div class="card-body">
        <div class="row">
          <div class="col-md-2">
            <img
              :src="item.owner.avatar_url"
              class="image-fluid"
              width="150"
              height="150"
            />
          </div>
          <div class="col-md-10">
            <h5>{{ item.name }}</h5>
            <p>{{ item.description }}</p>
            <div class="d-flex">
              <span
                class="badge badge-secondary mr-3 d-flex justify-content-center align-items-center"
                >Stars: {{ item.stargazers_count }}</span
              >
              <span
                class="badge badge-secondary mr-3 d-flex justify-content-center align-items-center"
                >Issues: {{ item.open_issues_count }}</span
              >
              <span>30 days by {{ item.owner.login }}</span>
            </div>
          </div>
        </div>
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
      items: [],
    };
  },

  async created() {
    try {
      let res = await TrendingRepoService.index();
      console.log(res);
      this.items = res.data.items;
    } catch (error) {
      console.log(error);
    }
  },
});
</script>
