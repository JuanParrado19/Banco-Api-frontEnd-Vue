<template>
    <div class="RequestMenu-Container">
        <div class="Transport-Container">
            <div class="Request-Container">
                <div class="Request-Header">
                    <h2>Solicitud de transporte escolar</h2>
                </div>

                <div class="RequestForm-Container">
                    <label for="colegio">Colegio</label>
                    <input type="text" id="colegio">
                    <label for="periodo">Periodo escolar</label>
                    <input type="text" id="periodo">
                </div>
            </div>
            <div class="Student-Container">
                <div class="Student-Header">
                    <h2>Datos Alumno 1</h2>
                </div>
                <div class="StudentForm-Container">
                    <label for="apellidos">Apellidos</label>
                    <input id="apellidos" type="text">

                    <label for="nombres">Nombres</label>
                    <input type="text" id="nombres">

                    <label for="direccionam">Dirección<br/>AM</label>
                    <input type="text" id="direccionam">

                    <label for="barrio">Barrio</label>
                    <input type="text" id="barrio">

                    <label id="labeltipodeam" for="tipodevivienda">Tipo <br/>de vivienda </label>
                    <label id='labelcasa' for="tipodevivienda">Casa</label>
                    <input type="checkbox" name="Casa" id="tipodevivienda">

                    <label id='labelapto' for="apto">Apto</label>
                    <input type="checkbox" name="Apto" id="apto">
                </div>
                <hr>
                <div class="StudentForm-Container">
                    <label for="direccionam">Dirección<br/>PM</label>
                    <input type="text" id="direccionam">

                    <label for="barrio">Barrio</label>
                    <input type="text" id="barrio">

                    <label id="labeltipode" for="tipodeviviendapm">Tipo <br/>de vivienda </label>
                    <label id='labelcasapm' for="tipodevivienda">Casa</label>
                    <input type="checkbox" name="Casa" id="tipodeviviendapm">

                    <label id='labelaptopm' for="apto">Apto</label>
                    <input type="checkbox" name="Apto" id="aptopm">
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
hr{
    height: 2px;
    background-color: white;
    margin-bottom: 1em;
}

label{
    font-size: 1.3em;
}
.RequestMenu-Container {
    width: 75%;
    margin-top: 2em;
    margin-right: 1em;
}

.Request-Header {
    display: flex;
    justify-content: center;
    background-color: var(--navbar-color);
    border-radius: 10px;
    margin-bottom: 2em;

}

.RequestForm-Container {
    display: flex;
    justify-content: space-between;
}

.RequestForm-Container input{
    margin-bottom: 2em;
    margin-right: 2em;
    margin-left: 2em;

}

.Student-Header {
    display: flex;
    justify-content: center;
    background-color: var(--navbar-color);
    border-radius: 10px;
    margin-bottom: 2em;
    margin-top: 2em;
}

.StudentForm-Container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    align-items: baseline;
    
}

.StudentForm-Container input{
    margin-bottom: 2em;
    margin-right: 2em;
    margin-left: 2em;
}

#labelapto{
    grid-row: 3;
    grid-column: 3;
}

#apto{
    grid-row: 3;
    grid-column: 4;
}

#tipodevivienda{
    grid-row: 4;
    grid-column: 4;
}

#labelcasa{
    grid-row: 4;
    grid-column: 3;
}

#labelaptopm{
    grid-row: 2;
    grid-column: 3;
}

#aptopm{
    grid-row: 2;
    grid-column: 4;
}

#tipodeviviendapm{
    grid-row: 3;
    grid-column: 4;
}

#labelcasapm{
    grid-row: 3;
    grid-column: 3;
}
#labeltipode{
    grid-row: 2;
    grid-column: 2;
}
#labeltipodeam{
    grid-row: 3;
    grid-column: 2;
}

@media (max-width: 950px){
    .StudentForm-Container{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .RequestForm-Container{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        flex-direction: column;
    }
}
</style>