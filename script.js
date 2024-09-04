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
                logoLink.style.color = '#229beb'; // Color cuando se ha desplazado
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

        // Spotify //
        document.addEventListener("DOMContentLoaded", function() {
            // Crear el contenedor del reproductor
            const container = document.getElementById('spotify-player-container');
            
            // Configuración del iframe
            const iframe = document.createElement('iframe');
            iframe.style.borderRadius = '12px';
            iframe.src = 'https://open.spotify.com/embed/playlist/1qRpBJHkpwN5pevXlZYz4e?utm_source=generator&theme=0';
            iframe.width = '300';
            iframe.height = '152';
            iframe.frameBorder = '0';
            iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
            iframe.loading = 'lazy';
            
            // Configuración del enlace
            const link = document.createElement('a');
            link.href = 'https://open.spotify.com/playlist/1qRpBJHkpwN5pevXlZYz4e?si=4340b6a05f094da3';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Escucha mi playlist';
            link.style.display = 'inline-block';
            link.style.marginTop = '10px';
            link.style.fontSize = '14px';
            link.style.color = '#fff';
            link.style.backgroundColor = 'rgba(29, 185, 84, 0.8)';
            link.style.padding = '5px';
            link.style.borderRadius = '8px';
            link.style.textDecoration = 'none';
            
            // Crear el contenedor para el iframe y el enlace
            const playerDiv = document.createElement('div');
            playerDiv.style.position = 'fixed';
            playerDiv.style.top = '0';
            playerDiv.style.right = '0';
            playerDiv.style.width = '300px';
            playerDiv.style.zIndex = '1000';
            playerDiv.style.textAlign = 'center';
            playerDiv.style.padding = '10px';
            playerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            playerDiv.style.borderRadius = '12px';
            
            // Agregar iframe y enlace al contenedor
            playerDiv.appendChild(iframe);
            playerDiv.appendChild(link);
            
            // Agregar el contenedor al cuerpo del documento
            container.appendChild(playerDiv);
            
            // Configuración del botón de ocultar/mostrar
            const toggleButton = document.getElementById('toggle-player');
            let isVisible = true;
    
            toggleButton.addEventListener('click', function() {
             if (isVisible) {
            playerDiv.style.display = 'none';
            toggleButton.textContent = 'Mostrar Reproductor';
             } else {
            playerDiv.style.display = 'block';
            toggleButton.textContent = 'Ocultar Reproductor';
             }
                isVisible = !isVisible;
             });
        });

        