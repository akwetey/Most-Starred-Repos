<template>
  <div class="card shadow-lg border-0 mt-4" v-for="(item, i) in items" :key="i">
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
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref, onMounted } from "vue";
import { Items } from "@/types";
import TrendingRepoService from "@/services/index";

async function fetchRepos(page: number) {
  try {
    let { data: res } = await TrendingRepoService.index(page);
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

export default defineComponent({
  name: "TrendingRepo",
  async setup() {
    onMounted(() => {
      window.addEventListener("scroll", async () => {
        let bottomOfWindow =
          document.documentElement.scrollTop +
            document.documentElement.clientHeight >=
          document.documentElement.scrollHeight;
        if (bottomOfWindow) {
          const data = await fetchRepos((page.value = page.value + 1));
          items.value = [...items.value, ...data];
        }
      });
    });

    const items = ref<Items[]>([]);
    const page = ref<number>(1);
    items.value = await fetchRepos(page.value);
    return {
      items,
    };
  },
});
</script>
