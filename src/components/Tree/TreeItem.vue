<template>
    <li class="tree-item">
        <slot />
    </li>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'TreeItem',
    })
</script>