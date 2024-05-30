<template>
  <div class="max-w-3xl mx-auto px-8 mb-24">
    <!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
    <div ref="ttEmbed" class="tt-widget">
      <div class="tt-widget-fallback">
        <div class="font-serif bg-m-blue-700 p-12 text-center rounded-lg flex flex-col items-center space-y-4">

          <p class="text-2xl text-white">
            The online box office is loading.
          </p>
          <p class="text-xl text-white">
            If this message is not replaced with the box office within a few seconds, use the link below to book your tickets.
          </p>
          <a
            class="rounded-md bg-m-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-m-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m-blue-400"
            href="https://www.tickettailor.com/events/coopjuniorstheatrecompany/1271666/select-date?ref=website_widget&srch=academy"
            target="_blank"
            >Click here to buy tickets</a
          >
        </div>

        
      </div>
    </div>
    <!-- End of Ticket Tailor Widget -->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    let scriptEl = document.createElement('script')
    scriptEl.setAttribute(
      'src',
      'https://cdn.tickettailor.com/js/widgets/min/widget.js',
    )
    scriptEl.setAttribute(
      'data-url',
      'https://www.tickettailor.com/events/coopjuniorstheatrecompany/1271666/select-date?ref=website_widget&srch=academy',
    )
    scriptEl.setAttribute('data-type', 'inline')
    scriptEl.setAttribute('data-inline-minimal', 'true')
    scriptEl.setAttribute('data-inline-show-logo', 'false')
    scriptEl.setAttribute('data-inline-bg-fill', 'true')
    scriptEl.setAttribute('data-inline-inherit-ref-from-url-param', '')
    scriptEl.setAttribute('data-inline-ref', 'website_widget')

    this.$refs.ttEmbed.appendChild(scriptEl)
  },
}
</script>
