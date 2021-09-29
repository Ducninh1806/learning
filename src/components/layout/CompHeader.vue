<template>
    <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/user">User</router-link>
      <div class="dropdown">
        <button class="dropbtn" @click="handleDropdown">Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content" v-if="isColapse">
          <a >Link 1</a>
          <a >Link 2</a>
          <a >Link 3</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "CompHeader",
    data (){
      return {
        isColapse: false,
      }
    },
    methods: {
      handleDropdown() {
        this.isColapse =!this.isColapse
      }
    }
}
</script>

<style scope>
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: rgb(153, 165, 170);
  font-family: Arial; 
  position: relative;
  display: inherit;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: black !important;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: rgb(206, 101, 101);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  position: fixed;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>