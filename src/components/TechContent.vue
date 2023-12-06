<template>
    <div class="Main-Container">
        <div class="Info-Container">
            <h2>
                TECH SAS, Revolucionando el transporte escolar desde 1983
            </h2>
            <p>
                La respuesta integral para colegios y empresas, ¡descubre nuestra revolución en movilidad educativa y corporativa!
            </p>
        </div>
        
        <img src="../assets/techpersonal.png" alt="personal">
    </div>
    
</template>
<style>
.Main-Container{
    display: inline-flex;
    
}

.Info-Container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 10vw;
    padding-left: 1.5rem;
}

.Info-Container h2{
    font-size: 1em;
}

.Info-Container p{
    font-size: 0.7em;
}


.Main-Container img{
    margin-top: 5rem;
    width: 100%;
    height: auto;
    max-width: 300px;
    border-radius: 25px;
    margin-right: 1em;


}

@media (max-width: 600px) {

    .Main-Container img{
        margin-top: 2rem;
        max-width: 160px;

    }
}
@media(max-width: 350px) {
    .Info-Container{
        margin-right: 15vw;
    }
    .Info-Container h2 {
        font-size: 0.7em;
    }
    .Info-Container p{
        font-size: 0.3em;
    }
    .Main-Container{
        width: 100%;
        max-width: 140px;
        height: 140px;
    }
}

</style>