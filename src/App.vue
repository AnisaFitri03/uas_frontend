<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link to="/" class="navbar-brand">Buku Online</router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/books" class="nav-link">Buku</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categories" class="nav-link">Kategori</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/member" class="nav-link">Anggota</router-link>
          </li>
            <li class="nav-item">
                <router-link to="/desc" class="nav-link">Keterangan</router-link>
            </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}
.navbar-brand{
  border: 5px solid #191a18;
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  color: rgb(235, 233, 233);
}
.navbar-expand-lg {
    background-color: #aebd29;
}
</style>
