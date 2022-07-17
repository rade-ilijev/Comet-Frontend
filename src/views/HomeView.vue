<template>
  <main>
    <section id="welcome">
      <div class="hero">
        <div class="left">
          <img src="../assets/logo.png" />
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss">
#welcome {
  max-width: 100%;
  margin: 0 auto;
  font-weight: 400;

  .hero {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;

    .left {
      width: 50%;
    }

    .right {
      width: 50%;
    }
  }
}
</style>
