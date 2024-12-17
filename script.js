const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


function generarProductos() {
    
    let productos = [         
        { id: 1, name: "Esferas Mágicas x4", description: "Esferas aromáticas ideales para meditación y relajación", amount: 850, category: "Esferas", idimage: "1esferasmagicas" },
        { id: 2, name: "Sagrada Madre Esferas x4", description: "Set de esferas mágicas de alta calidad", amount: 600, category: "Esferas", idimage: "2sagradamadreesferas" },
        { id: 3, name: "Esferas Mágicas Bolsa x4", description: "Bolsa con esferas mágicas para múltiples usos", amount: 700, category: "Esferas", idimage: "3esferasmagicasbolsa" },
        { id: 4, name: "Sahumerios Rama Sin Palo x8", description: "Sahumerios ideales para espacios reducidos", amount: 2900, category: "Sahumerios", idimage: "4sahumeriosramasinpalo" },
        { id: 5, name: "Aromanza Tibetanos x8", description: "Sahumerios tibetanos con fragancia intensa", amount: 2850, category: "Sahumerios", idimage: "5aromanzatibetanos" },
        { id: 6, name: "Nag Champa Caja Negra", description: "Clásico Nag Champa en presentación premium", amount: 1900, category: "Sahumerios", idimage: "6nagchampa" },
        { id: 7, name: "Aromanza Slim x10", description: "Sahumerios finos y duraderos", amount: 1550, category: "Sahumerios", idimage: "7aromanza" },
        { id: 8, name: "Aromanza Palo Santo x8", description: "Aromáticos de palo santo puro", amount: 1750, category: "Sahumerios", idimage: "8aromanzapalosanto" },
        { id: 9, name: "Bangladesh Sueltos x50", description: "Pack económico de sahumerios sueltos", amount: 4800, category: "Sahumerios", idimage: "9bangladesh" },
        { id: 10, name: "Aromanza Magistrales x30", description: "Sahumerios de larga duración y fragancia intensa", amount: 8850, category: "Sahumerios", idimage: "10aromanza" },
        { id: 11, name: "Bombas 7 Días x7", description: "Bombas aromáticas para una semana completa", amount: 2200, category: "Esferas", idimage: "11bombas7dias" },
        { id: 12, name: "Kit Humito", description: "Kit completo para aromatización del hogar", amount: 2000, category: "Accesorios", idimage: "12kithumito" },
        { id: 13, name: "Sahumitos x1", description: "Sahumerios individuales para pruebas", amount: 1600, category: "Sahumerios", idimage: "13sahumitos" },
        { id: 14, name: "Conitos x100", description: "Set de conos aromáticos para meditación", amount: 9400, category: "Sahumerios", idimage: "14conitos" },
        { id: 15, name: "Esencias", description: "Botellas de esencia para hornillos", amount: 1300, category: "Accesorios", idimage: "15esencias" },
        { id: 16, name: "Velas Noche Blanca x12", description: "Velas ideales para cenas y reuniones", amount: 2250, category: "Velas", idimage: "16velasnocheblanca" },
        { id: 17, name: "Velas Noche Color x12", description: "Velas de colores vibrantes para decoración", amount: 3300, category: "Velas", idimage: "17velasnochecolor" },
        { id: 18, name: "Velas Cortas x12", description: "Velas prácticas para iluminación de corta duración", amount: 2400, category: "Velas", idimage: "18velascortas" },
        { id: 19, name: "Velones Colores x3", description: "Velones grandes para eventos o decoración", amount: 4150, category: "Velas", idimage: "19velonescolores" },
        { id: 20, name: "Rocío Áurico", description: "Spray para limpiar energías del ambiente", amount: 1800, category: "Accesorios", idimage: "20rocioaurico" },
        { id: 21, name: "Spray Aromatizante", description: "Aromatizante ambiental en spray", amount: 2500, category: "Accesorios", idimage: "21sprayaromatizante" },
        { id: 22, name: "Porta Sahumerio Madera", description: "Porta sahumerio hecho a mano en madera", amount: 1000, category: "Accesorios", idimage: "22portasahumeriomadera" },
        { id: 23, name: "Porta Sahumerio Plástico", description: "Porta sahumerio económico y resistente", amount: 1500, category: "Accesorios", idimage: "23portasahumerioplastico" },
        { id: 24, name: "Cascada Madera", description: "Cascada decorativa de madera natural", amount: 2100, category: "Decoración", idimage: "24cascadamadera" },
        { id: 25, name: "Cascada Mediana Cerámica", description: "Cascada de cerámica para aromatización", amount: 2800, category: "Decoración", idimage: "25cascadamediana" },
        { id: 26, name: "Hornitos Cerámica", description: "Hornillos decorativos de cerámica", amount: 2400, category: "Accesorios", idimage: "26hornitosceramica" },
        { id: 27, name: "Sahumador Colgante", description: "Sahumador colgante para esencias", amount: 5000, category: "Accesorios", idimage: "27sahumadorcolgante" },
        { id: 28, name: "Búho", description: "Figura decorativa de un búho tallado", amount: 9900, category: "Decoración", idimage: "28buho" },
        { id: 29, name: "Monje Ciego", description: "Figura de monje ciego decorativa", amount: 5800, category: "Decoración", idimage: "29monjeciego" },
        { id: 30, name: "Pirámides Chicas", description: "Pirámides decorativas en miniatura", amount: 1600, category: "Decoración", idimage: "30piramideschicas" },
        { id: 31, name: "Pirámides Medianas", description: "Pirámides de tamaño medio para decoración", amount: 4000, category: "Decoración", idimage: "31piramidesmedianas" },
        { id: 32, name: "Lámpara de Sal Piedra", description: "Lámpara de sal tallada en piedra natural", amount: 17000, category: "Decoración", idimage: "32lamparadesalpiedra" },
        { id: 33, name: "Lámpara de Sal Canasta", description: "Lámpara de sal con diseño en canasta", amount: 16400, category: "Decoración", idimage: "33lamparadesalcanasta" },
        { id: 34, name: "Sahumador", description: "Práctico sahumador para esencias y sahumerios", amount: 1550, category: "Accesorios", idimage: "34sahumador" },
        { id: 35, name: "Olibanos", description: "Resinas naturales para sahumar ambientes", amount: 2150, category: "Accesorios", idimage: "35olibanos" },
        { id: 36, name: "Conos Bolsita x10", description: "Conos aromáticos en presentación compacta", amount: 1100, category: "Sahumerios", idimage: "36conosbolsita" },
        { id: 37, name: "Porta Sahumerio Rústico", description: "Porta sahumerio artesanal de estilo rústico", amount: 2700, category: "Accesorios", idimage: "37portasahumeriorustico" },
        { id: 38, name: "Tibetanos XS x5", description: "Sahumerios tibetanos pequeños para uso diario", amount: 1850, category: "Sahumerios", idimage: "38tibetanosxs" },
        { id: 39, name: "Tibetanos XL x5", description: "Sahumerios tibetanos de gran tamaño", amount: 3500, category: "Sahumerios", idimage: "39tibetanosxl" },
        { id: 40, name: "Aromatizantes", description: "Aromatizantes en diferentes fragancias", amount: 2250, category: "Accesorios", idimage: "40aromatizantes" },
        { id: 41, name: "Cascada 7 Chakras", description: "Cascada decorativa con representación de los 7 chakras", amount: 4600, category: "Decoración", idimage: "41cascada7chakras" },
        { id: 42, name: "Porta Sahumerio Chakras", description: "Porta sahumerio con diseño inspirado en los chakras", amount: 600, category: "Accesorios", idimage: "42portasahumeriochakras" },
        { id: 43, name: "Lechuza Mini Madera", description: "Figura decorativa de lechuza tallada en madera", amount: 5400, category: "Decoración", idimage: "43lechuzaminimadera" },
        { id: 44, name: "Buda Príncipe", description: "Figura de Buda Príncipe para meditación y decoración", amount: 10000, category: "Decoración", idimage: "44budapríncipe" },
        { id: 45, name: "Cascada Pequeña Cerámica", description: "Cascada compacta de cerámica para ambientes pequeños", amount: 3400, category: "Decoración", idimage: "45cascadapequeñacerámica" },
        { id: 46, name: "Ganesha Mini", description: "Figura de Ganesha en tamaño mini para atraer prosperidad", amount: 2800, category: "Decoración", idimage: "46ganeshamini" },
        { id: 47, name: "Velas de Noche Aroma x12", description: "Velas aromáticas perfectas para ambientación nocturna", amount: 5100, category: "Velas", idimage: "47velasdenochearoma" },
        { id: 48, name: "Sahumerios Premium", description: "Sahumerios de alta calidad con fragancias exclusivas", amount: 3450, category: "Sahumerios", idimage: "48sahumeriospremium" },
        { id: 49, name: "Carbón Neutro x24", description: "Carbones neutros para uso con sahumerios o esencias", amount: 2800, category: "Accesorios", idimage: "49carbonneutrox24" },
        { id: 50, name: "Carbón Fragancia x24", description: "Carbones con fragancia para un toque aromático especial", amount: 4000, category: "Accesorios", idimage: "50carbonfraganciax24" },
        { id: 51, name: "Hornitos Rústicos", description: "Hornitos artesanales con diseño rústico", amount: 3900, category: "Accesorios", idimage: "51hornitosrusticos" },
        { id: 52, name: "Monje Mini Porta Vela", description: "Figura de monje con espacio para velas", amount: 5800, category: "Decoración", idimage: "52monjeminiportavela" },
        


        
    ];



    

    console.log(productos)

// Generación dinámica del contenido de los productos
let contenido = '';
const contenedor = document.getElementById('productos-container');

productos.forEach((producto) => {
    contenido += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="static/${producto.idimage}.jpg" class="card-img-top" alt="${producto.name}">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text"><strong>Precio: $${producto.amount}</strong></p>
                    <button class="btn btn-success btn-agregar" data-id="${producto.id}" data-name="${producto.name}" data-price="${producto.amount}">Agregar al carrito</button>
                    <button id="mostrarInfo-${producto.id}" type="button" class="btn btn-primary">Ver más</button>
                    <div id="descripcion-${producto.id}" class="descripcion-ampliada" style="display: none;"></div>
                </div>
            </div>
        </div>
    `;
});

contenedor.innerHTML = contenido;

productos.forEach((producto) => {
    const botonInfo = document.getElementById(`mostrarInfo-${producto.id}`);
    const contenedorDescripcion = document.getElementById(`descripcion-${producto.id}`);
    
    botonInfo.addEventListener("click", function() {
        if (contenedorDescripcion.style.display === "none" || contenedorDescripcion.style.display === "") {
            contenedorDescripcion.style.display = "block";
            contenedorDescripcion.innerHTML = `<p>${producto.description} </p>`;
        } else {
            contenedorDescripcion.style.display = "none";
            contenedorDescripcion.innerHTML = ""; 
        }
    });
});

let carrito = [];

// Recuperar carrito del sessionStorage si existe
if (sessionStorage.getItem("carrito")) {
    carrito = JSON.parse(sessionStorage.getItem("carrito"));
}

// Agregar funcionalidad a los botones "Agregar al carrito"
document.querySelectorAll(".btn-agregar").forEach((boton) => {
    boton.addEventListener("click", () => {
        const id = boton.getAttribute("data-id");
        const name = boton.getAttribute("data-name");
        const price = boton.getAttribute("data-price");

        // Crear un objeto con el producto
        const producto = { id, name, price };

        // Agregar al carrito
        carrito.push(producto);

        // Guardar en sessionStorage
        sessionStorage.setItem("carrito", JSON.stringify(carrito));

        mostrarCarrito(); // Actualiza el carrito automáticamente
        alert(`${name} ha sido agregado al carrito.`);
    });
});

function mostrarCarrito() {
    const carritoContenedor = document.getElementById("carrito-contenedor");
    carritoContenedor.innerHTML = ""; // Limpiar el contenedor

    if (carrito.length === 0) {
        carritoContenedor.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        carritoContenedor.innerHTML = carrito.map((producto, index) => `
            <p>${producto.name} - $${producto.price} 
                <button class="btn btn-sm btn-danger btn-eliminar" data-index="${index}">Eliminar</button>
            </p>
        `).join('');
    }

    // Asignar eventos a los botones de eliminar dentro de la función
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', () => {
            const index = boton.getAttribute('data-index');
            eliminarProducto(index);
        });
    });

    function eliminarProducto(index) {
        carrito.splice(index, 1); // Elimina el producto del array por índice
        sessionStorage.setItem("carrito", JSON.stringify(carrito)); // Actualiza el sessionStorage
        mostrarCarrito(); // Vuelve a mostrar el carrito actualizado
    }
    
}


    // Asignar eventos a los botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', () => {
            const index = boton.getAttribute('data-index');
            eliminarProducto(index);
        });
    });

// Vaciar todo el carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
    carrito = [];
    sessionStorage.removeItem("carrito");
    mostrarCarrito();
});

mostrarCarrito(); // Mostrar el carrito al cargar la página


}




generarProductos();


























































