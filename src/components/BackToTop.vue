<template>
    <div class="back-to-container">
        <a class="back" href="#">Top</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .back-to-container {
        position: fixed;
        right: 1.7rem;
        bottom: 1.4rem;

        .back {
            text-decoration: none;
            background-color: rgb(21, 21, 31);
            background-color: var(--background-color);
            color: white;
            padding: 1.4rem;
            font-weight: bold;
        }
    }
</style>
