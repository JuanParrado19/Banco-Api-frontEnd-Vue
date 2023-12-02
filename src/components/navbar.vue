<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" width="190" />
      <div class="brand"></div>
    </div>

    <div class="links">
    
      <ul>
        <li><RouterLink to="/home" >Soluciones</RouterLink></li>
        <li><RouterLink to="/home" >Colegios</RouterLink></li>
        <li><RouterLink to="/" >Compañia</RouterLink></li>
        <li><RouterLink to="/home" >Mi Cuenta</RouterLink></li>      
      </ul>
      <div class="Div-Colors">
          <li class="btn-Home"><RouterLink to="/home" ><span>Comunicarse con ventas</span></RouterLink></li>
      </div>
    </div>

  </nav>
</template>
<script setup>
const props = defineProps(['loginId']);
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--navbar-color);
  padding: 1vh;
  margin-bottom: 0;
}

.Div-Colors{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-left: 5vw ;
}
.brand {
  font-size: 2rem;
}
.logo{
  display: flex;
  align-items: center;
}

.btn-Home{
  display: inline-flex;
  position: relative;
  margin-left: 5vw;
  font-size: 30px;
  margin-right: 6vw;
  align-items: center;
  justify-content: center;
}
.btn-Home span{
  position: relative;
  z-index: 2;
}

.btn-Home::after{
  margin-right: 50vw;
  content: "";
  background: #3B6967;
  height: 9.8%;
  max-height: 105px;
  width: 6.9vw;
  position: fixed;
  border-right: 10.2vw solid #225352;
  border-left: 6.2vw solid #36736A;
  left: 74.2%;
  top: 0.01%;
  
  border-bottom-left-radius: 10% ;
  
}

.links{
  display: inline-flex;
  padding: 0.005vw;
  position: relative;
  margin-right: 2vw;
}
.links ul{
  display: flex;
  align-items: center;
  padding: 0px;
  list-style: none;
}
.links a{
  font-size: 1.1vw;
  margin-left: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-color);
} 

a.router-link-active{
  color: var(--accent-color);
}
@media(max-width: 680px){
  .navbar{
    display: block;
  }
  .logo img{
    width: 80px;
  }
  .links{
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .links ul{
    margin: 0;
    padding: 0;
  }

  .links a{
    font-size: 1.35vw;
  }
  .btn-Home{
    font-size: 1vw;
    margin-right: 3vw;
  }
  .btn-Home::after{
  margin-right: 50vw;
  content: "";
  background: #3B6967;
  /* height: 9.8vh; */
  height: 8.5%;

  width: 6.9vw;
  position: fixed;
  border-right: 10.2vw solid #225352;
  border-left: 6.2vw solid #36736A;
  left: 74.2%;
  top: 0.01%;
}

}
</style>