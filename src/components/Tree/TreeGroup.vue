<template>
    <ul class="tree-group">
        <TreeItem v-for="(currentTree, index) in tree" :key="index">
            <span v-if="currentTree.label">
                <a :href="currentTree.link.location" v-if="currentTree.link" class="link">
                  {{ currentTree.label }}
                </a>

                <template v-else>
                  {{ currentTree.label }}
                </template>

                <BButton v-if="currentTree.children"
                 @click="toggleCollapse"
                 size="xs" variant="transparent"
                 class="icon rounded-pill">
                  <span>
                    {{ isOpen ? 'v' : '>' }}
                  </span>
                </BButton>
            </span>

            <BCollapse v-if="currentTree.children" v-model="isOpen" class="tree-group-children">
              <TreeGroup :tree="currentTree.children" @add-subcategory="handlerAddSubcategory" />
            </BCollapse>
        </TreeItem>
    </ul>
</template>

<style lang="scss">
  .tree-group {
    padding-left: 1rem;

    .tree-group-children {
      display: flex;
      gap: .5rem;
      border-left: 1px solid #ccc;
      margin-left: 1rem;
      &:first-child {
        border-left: none;
      }
      .body {
        margin-top: 0;
      }
    }

    .icon {
        font-size: .5rem;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 1rem;
        height: 1rem;
        margin-right: .25rem;
        &:last-child {
          margin-right: 0;
        }
    }
  }
</style>

<script lang="ts">
  import Vue from 'vue'
  import TreeItem from "@/components/Tree/TreeItem.vue";

  import { BButton, BCollapse } from 'bootstrap-vue';

  export default Vue.extend({
    name: 'TreeGroup',
    components: {
      BButton,
      BCollapse,
      TreeItem,
    },
    data() {
      return {
        isOpen: true,
      }
    },
    props: {
      tree: {
        type: Array,
        required: true
      },
    },
    methods: {
      handlerAddSubcategory(parent_id: number) {
        this.$emit('add-subcategory', parent_id);
      },

      toggleCollapse() {
        this.isOpen = !this.isOpen
      },
    },
  })
</script>