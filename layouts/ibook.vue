<template>
<div class="ibook-layout">
  <Header/>
  <Container>
    <Nuxt/>
  </Container>
  <Footer/>
</div>
</template>

<style lang="scss" scoped>
.ibook-layout {
  margin-top: 4.313rem;
  display: grid;
  grid-gap: 0rem;
  .container {
    padding-bottom: 0rem;
  }
}
</style>
