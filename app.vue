<template>
  <NuxtLayout>
    <NuxtPage />
    <CookieCop />
  </NuxtLayout>
</template>

<script setup>
provideHeadlessUseId(() => useId())
useHead({
  bodyAttrs: {
    class: 'bg-m-blue-900',
  },
})

useSeoMeta({
  title:
    'Magic of Christmas - A Spectacular Holiday Show by Co-op Juniors Theatre Company',
  description:
    'Journey to another world this Christmas with a magical Big Top spectacle featuring stunning performances, dance, and music. A heartwarming story of wishes and self-discovery, perfect for all ages.',

  // Open Graph meta tags for social sharing
  ogTitle: 'Magic of Christmas - A Spectacular Holiday Show',
  ogDescription:
    'Experience a magical Christmas adventure with stunning performances, dance numbers, and festive surprises in our Big Top theatre. Perfect family entertainment from Co-op Juniors Theatre Company.',
  ogType: 'website',
  ogLocale: 'en_GB',

  // Twitter Card meta tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'Magic of Christmas - Family Holiday Spectacular',
  twitterDescription:
    'Join us for a magical Christmas adventure with stunning performances and festive surprises. Book now for this spectacular Big Top show!',

  // Keywords and additional meta information
  keywords:
    'Christmas show, theatre, family entertainment, Big Top, Co-op Juniors, Magic of Christmas, live performance, Suffolk theatre, holiday show',
  author: 'Co-op Juniors Theatre Company',
  robots: 'index, follow',

  // Rich snippets for events
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: 'Magic of Christmas',
    description:
      'A magical Christmas show featuring stunning performances, dance numbers, and festive surprises.',
    performer: {
      '@type': 'TheaterGroup',
      name: 'Co-op Juniors Theatre Company',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '12',
      highPrice: '26',
      priceCurrency: 'GBP',
    },
    eventStatus: 'EventScheduled',
    accessibility: 'Wheelchair accessible with companion tickets available',
  },
})
</script>
