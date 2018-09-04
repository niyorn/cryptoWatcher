<template>
    <article class="cryptoItem">
        <div class="image-container">
            <img src="https://bestebank.r.worldssl.net/wp-content/uploads/2017/12/ethereum.png" alt="">
        </div> 
        <div class="name-container">
            <span class="label">name</span>
            <h2>Ethereum</h2>
        </div>
        <div class="price-container">
            <span class="label">price</span>
            <span class="price">$918</span>
        </div>
        <div class="change-container">
            <div class="change change-24h">
                <span class="label">24 hour</span>
                <span class="change-percentage">10%</span>
            </div>
            
            <div class="change change-7d">
                <span class="label">7 days</span>
                <span class="change-percentage">14%</span>
            </div>
        </div>       
    </article>
</template>

<script>
export default {
    name: "CryptoItem"
}
</script>

<style lang="scss">
    .cryptoItem {
        background-color: var(--primary-color);
        color: var(--text-color);
        display: grid;
        grid-template-areas: "image price"
                             "name change";
        grid-template-columns: 1fr 2fr;
        grid-gap: 1rem;
        padding: 1rem;

        &:hover {
            background-color: var(--hover-background-color);
            color: black;
            cursor: pointer;
        }
    }

    .label {
        opacity: 0.6;
    }

    .image-container {
        grid-area: image;

        img {
            width: 100%;
            height: 7rem;
            object-fit: contain;
        }
    }

    .name-container {
        grid-area: name;
        text-align: center;
    }

    .price-container {
        grid-area: price;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            text-align: center;
        }

        .price {
            font-size: 1.7em;
            @media screen and (min-width:30rem){
                font-size: 4rem;
            }
        }
    }

    .change-container {
        grid-area: change;

        text-align: center;

        .label {
            display: block;
        }

        .change {
            display: inline-block;
            width: 50%;
            
            span {
                display: block;
            }

            .change-percentage {
                font-size: 1em;
                @media screen and (min-width:30rem) {
                    font-size: 2em;
                }
            }
        }
    }
</style>

