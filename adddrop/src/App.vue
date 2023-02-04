<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="navbarz">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tawan Surina</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><router-link to="/">Home</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/new">New</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/plan">Plan</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/add">Add-Drop</router-link></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="view"><router-view></router-view></div>
</template>

<style scoped>
nav {
  color: black;
}
</style>
