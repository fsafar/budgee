<template>
  <div class="min-h-screen bg-black">
    <NuxtRouteAnnouncer />
    <div class="relative overflow-hidden rounded px-4 py-2 text-rose-950 bg-rose-300">
      <!-- white "scratches" -->
      <div
        class="pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.9)_0px,rgba(255,255,255,0.9)_1px,transparent_1px,transparent_9px)]"
      />
      <span class="relative">hello</span>
    </div>
  </div>
</template>
