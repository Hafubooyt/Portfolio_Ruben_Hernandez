let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

        // JavaScript para cambiar el color al desplazarse
        document.addEventListener('scroll', function() {
            const logoLink = document.querySelector('.contenedor-header header .logo a');
            const scrollPosition = window.scrollY;

            // Cambia el color según la posición del scroll
            if (scrollPosition > 4880) { // Cambia 100 por la cantidad de píxeles que desees
                logoLink.style.color = '#FF5733'; // Color cuando se ha desplazado
            } else if (scrollPosition > 4230){
                logoLink.style.color = '#86106db0'
            } else if (scrollPosition > 2190){
                logoLink.style.color = '#1CB698'
            } else if (scrollPosition > 1590){
                logoLink.style.color = '#7320b8'
            } else if (scrollPosition > 900){
                logoLink.style.color = '#6e4fc4'
            } else {
                logoLink.style.color = '#229beb'; // Color inicial
            }
        });

        // Descargar CV //
        document.getElementById("download-btn").addEventListener("click", function() {
            // Crear un enlace
            const link = document.createElement("a");
        
            // Establecer la ruta del archivo que deseas descargar (puedes usar una URL absoluta o relativa)
            link.href = "https://drive.google.com/uc?id=1KH3AQJ_NF4ZhPPmEQLZ_TbLFd06Tjxqq&export=download"; // Asegúrate de colocar aquí la ruta correcta del archivo
        
            // Establecer el nombre del archivo que se descargará
            link.download = "Ruben_Hernandez_CV.pdf"; 
        
            // Añadir el enlace al DOM (necesario para activar la descarga)
            document.body.appendChild(link);
        
            // Simular el clic en el enlace para iniciar la descarga
            link.click();
        
            // Eliminar el enlace del DOM después de la descarga
            document.body.removeChild(link);
        });

        // Enviar Correo //
        document.getElementById('enviar-correo').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        window.open(this.href, '_blank'); // Abrir el enlace en una nueva pestaña
        });



        