<template>
  <div>
    <header class="header">
      <nav class="ul items">
        <li>
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </li>
        <li class="item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink to="/about">Sobre</NuxtLink>
        </li>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  justify-content: center;

  nav {
    box-shadow: -1px 8px 26px 5px rgba(0, 0, 0, 0.12);
    background: color(dark, darkest);
    width: 308px;
    height: 50px;
    padding: 0 10px;
    border-radius: 35px;
    align-items: center;
    display: flex;
    align-content: center;
    justify-content: space-around;
    .items {
      display: grid;
      grid-template-columns: repeat(3, auto);
      align-items: center;
      justify-content: space-around;
      height: 100%;
    }

    .item a {
      color: color('light', 'darkest');
      position: relative;
      font-weight: 500;

      &.nuxt-link-exact-active:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: white;
        left: 0;
        bottom: -16px;
      }
    }
  }
}</style>
