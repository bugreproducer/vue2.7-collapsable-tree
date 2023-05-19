<template>
    <div class="pim__tree-view-root">
        <TreeGroup :tree="tree" @add-subcategory="handlerAddSubcategory" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TreeGroup from "@/components/Tree/TreeGroup.vue";

export default Vue.extend({
    components: {
        TreeGroup
    },
    props: {
      tree: {
        type: Array,
        required: true,
      }
    },
    methods: {
      handlerAddSubcategory(parent_id : number) {
        this.$emit('add-subcategory', parent_id);
      }
    },
})
</script>

<style lang="scss">
.pim__tree-view-root {
    padding: .25rem 0rem;
    margin-bottom: 1rem;
    ul {
        list-style: none;
        padding: 0 0 0 1rem;
        margin: 0 0 0;

        &:first-child {
            padding: 0;
        }
        li {
          padding: 0 0 0 .5rem;
        }
    }

    > .tree-group {
        padding-left: 1rem;
    }
}
</style>