<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/characters" class="nav-item">Character</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
body {
  background: linear-gradient(to bottom, #152B55, #7788AA);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
#nav {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
</style>
