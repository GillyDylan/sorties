<template>
    <div>
        <h1>{{ title }}</h1>
        <p>Feed page, go to auth page <router-link to="/auth">here</router-link> </p>
    </div>
</template>

<script>
    export default {
        computed: {
            title () {
                return this.$store.getters.title
            }
        }
    }
</script>
