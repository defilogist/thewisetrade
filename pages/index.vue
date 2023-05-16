<template>
  <div class="container max-w-screen-md mx-auto">

    <div class="flex text-left m-auto header">
      <img class="pt-8 mr-4" src="~/assets/images/lion.png" />
      <div class="flex-1">
        <h1 class="text-4xl font-bold pt-6 mb-2">
          The Wise Trade
        </h1>
        <h2 class="mt-0 text-lg italic">
          Tips and guides for efficient NFT trading
        </h2>
      </div>
    </div>
    <h1 class="text-3xl font-bold mb-8 mt-12">Trading Guides</h1>
    <div class="grid md:grid-cols-4 gap-4">
      <NuxtLink class="guide-link" to="nft-trading-guide-part-1-basics">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/trading-guide-1.png"
        />
        <h3>NFT Trading Guide Basics</h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="nft-trading-guide-part-2-advanced">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/trading-guide-2.png"
        />
        <h3>
          NFT Trading Guide<br />
          Advanced
        </h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="nft-trading-guide-part-3-psychology">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/trading-guide-3.png"
        />
        <h3>NFT Trading Guide Psychology</h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="loan-trading-guide">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/loan-trading-guide.png"
        />
        <h3>Loan Trading Guide</h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="amm-trading-guide">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/amm-trading-guide.png"
        />
        <h3>AMM Trading Guide</h3>
      </NuxtLink>
    </div>

    <h1 class="text-3xl font-bold mb-8 mt-12">Tool Guides</h1>
    <div class="grid md:grid-cols-4 gap-4">
      <NuxtLink class="guide-link" to="solana-nft-tools">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/nft-tools-guide.png"
        />
        <h3>Solana NFT Tools</h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="tensor-trade-guide">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/tensor-trade-guide.png"
        />
        <h3>Tensor Trade Guide</h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="solana-dao-tools">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/nft-dao-tools-guide.png"
        />
        <h3>Solana DAO Tools</h3>
      </NuxtLink>
      <NuxtLink class="guide-link" to="foxylend-guide">
        <img
          class="mb-2"
          src="~/assets/images/illustrations/foxylend-guide.png"
        />
        <h3>Foxylend Guide</h3>
      </NuxtLink>
    </div>

    <h1 class="text-3xl font-bold mb-8 mt-12">Tiers list</h1>

    <div class="grid md:grid-cols-4 gap-4">
      <a
        class="guide-link"
        target="_blank"
        href="https://defilogist.notion.site/26dda503e2414cff9703e98ffbc71176"
      >
        <img
          class="mb-2"
          src="~/assets/images/illustrations/solana-nft-tiers-list.png"
        />
        <h3>My Solana NFT Tiers List</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
const description = 'Guides and tips for Solana NFT trading, avoid mistakes and increase your chances of success'
useHead({
  title: 'The Wise Trade | NFT trading guide - The Basics',
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'og:image', content: 'https://thewise.trade/lion_logo.png' },
    { name: 'og:type', content: 'website' },
  ]
})
</script>

<style lang="scss">
.header {
  max-width: 480px;
  margin-bottom: 4em;

  h1 {
    text-align: left;
  }

  img {
    width: 100px;
    height: fit-content;
  }
}
</style>
