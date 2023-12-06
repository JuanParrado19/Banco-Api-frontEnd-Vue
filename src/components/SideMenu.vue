<template>
    <div class="SideMenu-Container">
        <a>Solicitar transporte escolar</a>
        <a>Tutoriales</a>
        <a>Pagos</a>
        <a>Información Legal</a>
        <img src="../assets/logo.png" alt="">
    </div>
</template>
<style scoped>
.SideMenu-Container{
    display: flex;
    flex-direction: column;
    background-color: var(--navbar-color);
    border-radius: 10px;
    width: 15%;
    padding-left: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-right: 2em;
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em;
    justify-content: center;
}

.SideMenu-Container a{
    margin-bottom: 1em;
    font-size: large;
}

.SideMenu-Container a:hover{
    text-decoration: underline;
}
.SideMenu-Container img{
    margin-top: 10em;

}
</style>
