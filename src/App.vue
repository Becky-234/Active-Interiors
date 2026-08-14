<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import Hero from './components/Hero.vue'
import DimensionDivider from './components/DimensionDivider.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import WhyUs from './components/WhyUs.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <Hero />
    <DimensionDivider sheet="A-01" label="SERVICES" />
    <Services />
    <DimensionDivider sheet="A-02" label="PORTFOLIO" />
    <Portfolio />
    <DimensionDivider sheet="A-03" label="WHY ACTIVE" />
    <WhyUs />
    <DimensionDivider sheet="A-04" label="CONTACT" />
    <Contact />
  </main>
  <SiteFooter />
</template>