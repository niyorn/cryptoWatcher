<template>
    <header>
        <span>Top 100 Coins</span>

        <form class="search">
            <input type="text">
            <button disabled="disabled">Search</button>
        </form>
    </header>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style lang="scss">
    header {
        span {
            color: purple;
        }
    }
</style>

