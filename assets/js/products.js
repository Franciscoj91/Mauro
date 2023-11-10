let productsTemplate = {
    url: 'url("./assets/imgs/header/products.png")',
    lg: 'url("./assets/imgs/header/products-lg.png")',
    template: `<p class="fw-bold">Caffè Mauro</p>
    <hr>

    <div class="products-large">

      <div class="card">
        <h5 class="card-header fw-bold">CAFFÈ MAURO 100% ARÁBICA</h5>
        <img src="./assets/imgs/productos/caffe-mauro/arabica.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Refinada y exclusiva, la mezcla de granos de Arábica de Caffè Mauro
            Centopercento está compuesta por finos cafés arábigos procedentes de plantaciones
            naturales de café brasileño y lavado de América Central. De sabor dulce y aromático,
            presenta agradables notas cítricas y aromas florales dulces.</p>
          <h6 class="fw-bold">Formato: 1000g</h6>
        </div>
      </div>


      <div class="card">
        <h5 class="card-header fw-bold">CAFFÈ MAURO DE LUXE</h5>
        <img src="./assets/imgs/productos/caffe-mauro/deluxe.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Es una mezcla elegante y aromática. Al degustarlo se evidencia mucho
            cuerpo y un sabor redondo. Los finos arábicas brasileños naturales aportan notas
            florales, los centroamericanos lavados dan una agradable acidez frutal equilibrada por
            el final de cacao típico de los robustas naturales indios.</p>
          <h6 class="fw-bold">Formato: 1000g</h6>
        </div>
      </div>


      <div class="card">
        <h5 class="card-header fw-bold">CAFFÈ MAURO PREMIUM</h5>
        <img src="./assets/imgs/productos/caffe-mauro/premium.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Una mezcla equilibrada y envolvente. Notas de cacao y especias llenan
            el paladar, realzando la particularidad de las mejores robustas africanas naturales. La
            fusión entre la floralidad sudamericana y la brillante acidez frutal típica de las
            tierras altas de Etiopía completa una taza con una personalidad única.</p>
          <h6 class="fw-bold">Formato: 1000g</h6>
        </div>
      </div>


      <div class="card">
        <h5 class="card-header fw-bold">CAFFÈ MAURO SPECIAL BAR</h5>
        <img src="./assets/imgs/productos/caffe-mauro/special.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Mezcla de sabor fuerte, con la dulzura de los arábicas brasileños sobre
            el fondo de finos robustas del sudeste asiático y africano que le dan cuerpo, floralidad
            con un agradable final a madera y tabaco.</p>
          <h6 class="fw-bold">Formato: 1000g</h6>
        </div>
      </div>


      <div class="card">
        <h5 class="card-header fw-bold">CAFFÈ MAURO PERÚ ORGÁNICO</h5>
        <img src="./assets/imgs/productos/caffe-mauro/peru.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Desarrollo solidario, reforestación y protección de la biodiversidad
            Respect Perù 100% Arábica representa el compromiso de la empresa tostadora Caffè Mauro
            con el apoyo a los productores, la biodiversidad y la protección del medio ambiente.</p>
          <h6 class="fw-bold">Formato: 1000g</h6>
        </div>
      </div>


    </div>

    <p class="fw-bold">Café descafeinado Cialde</p>
    <hr>

    <p class="text-product mx-auto mx-lg-0 me-lg-auto">Nuestra mezcla descafeinada es un café delicado con
      notas dulces y
      afrutadas. Para una taza con mucho cuerpo, con aromas de fruta madura y flores frescas. Es ideal
      para
      cualquier momento del día.</p>

    <div class="products-medium">

      <div class="card card-medium">
        <h5 class="card-header fw-bold">CAFFÈ MAURO DESCAFEINADO</h5>
        <img src="./assets/imgs/productos/caffe-descaf/Group 20.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="fw-bold">Formato caja: 18 compostables</h6>
        </div>
      </div>


    </div>

    <div class="collapse d-lg-block" id="collapseProducts">

      <p class="fw-bold">Cápsulas compatibles Nesspreso</p>
      <hr>

      <div class="products-medium">

        <div class="card card-medium">
          <h5 class="card-header fw-bold">CAFFÈ MAURO 100% ARÁBICA</h5>
          <img src="./assets/imgs/productos/capsulas/arabica.svg" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="fw-bold">Formato caja: 10 cápsulas</h6>
          </div>
        </div>



        <div class="card card-medium">
          <h5 class="card-header fw-bold">CAFFÈ MAURO DE LUXE</h5>
          <img src="./assets/imgs/productos/capsulas/deluxe.svg" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="fw-bold">Formato caja: 10 cápsulas</h6>
          </div>
        </div>


      </div>

      <p class="fw-bold">PODS Aluminios compatibles
        Nespresso</p>
      <hr>

      <p class="text-product mx-auto mx-lg-0 me-lg-auto">Cápsulas Compatibles con máquinas marca
        Nespresso®</p>

      <div class="products-medium">

        <div class="card card-medium">
          <h5 class="card-header fw-bold">CAFFÈ MAURO 100% ARÁBICA</h5>
          <img src="./assets/imgs/productos/pods/arabica.svg" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="fw-bold">Formato caja: 50 vainas</h6>
          </div>
        </div>



        <div class="card card-medium">
          <h5 class="card-header fw-bold">CAFFÈ MAURO DE LUXE</h5>
          <img src="./assets/imgs/productos/pods/deluxe.svg" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="fw-bold">Formato caja: 50 vainas</h6>
          </div>
        </div>


      </div>

      <p class="fw-bold">Café molido</p>
      <hr>

      <div class="products-medium">

        <div class="card card-medium">
          <h5 class="card-header fw-bold">CAFFÈ MAURO 100% ARÁBICA</h5>
          <img src="./assets/imgs/productos/cafe-molido/arabica.svg" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="fw-bold">Formato lata: 250 g</h6>
          </div>
        </div>



        <div class="card card-medium">
          <h5 class="card-header fw-bold">CAFFÈ MAURO DE LUXE</h5>
          <img src="./assets/imgs/productos/cafe-molido/deluxe.svg" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="fw-bold">Formato lata: 250 g</h6>
          </div>
        </div>


      </div>
    </div>
    <p class="fw-bold d-lg-none" data-bs-toggle="collapse" href="#collapseProducts" role="button"
      aria-expanded="false" aria-controls="collapseExample" id="collapseText">ver más <img
        src="./assets/imgs/flecha.svg" alt="icono"></p>`
}

let suppliesTemplate = {
    url: 'url("./assets/imgs/header/insumos.png")',
    lg: 'url("./assets/imgs/header/insumos-lg.png")',
    template: `<p class="fw-bold">Cápsulas compatibles Nesspreso</p>
    <hr>

    <div class="products-small">
      <div class="card-sponsor">
        <div class="card-sponsor-img">
          <img src="./assets/imgs/insumos/sponsor.svg" alt="logo sponsor">
        </div>
      </div>


      <div class="card card-small ">
        <h5 class="card-header fw-bold">CHOCOLATE EN POLVO</h5>
        <img src="./assets/imgs/insumos/chocolate-1.svg" class="card-img-top" alt="...">

      </div>

      <div class="card card-small ">
        <h5 class="card-header fw-bold">CHOCOLATE EN POLVO</h5>
        <img src="./assets/imgs/insumos/chocolate-2.svg" class="card-img-top" alt="...">
      </div>


      <div class="card card-small d-lg-none">
        <h5 class="card-header fw-bold">CHOCOLATE EN POLVO</h5>
        <img src="./assets/imgs/insumos/chocolate-3.svg" class="card-img-top" alt="...">

      </div>


      <div class="card card-small d-none d-lg-block">
        <h5 class="card-header fw-bold">CHAI TEA</h5>
        <img src="./assets/imgs/insumos/chocolate-3.svg" class="card-img-top" alt="...">

      </div>


      <div class="card card-small d-none d-lg-block">
        <h5 class="card-header fw-bold">FRAPPÉ</h5>
        <img src="./assets/imgs/productos/caffe-mauro/peru.svg" class="card-img-top" alt="...">

      </div>


      <div class="card card-small mx-auto">
        <h5 class="card-header fw-bold">OTRAS VARIEDADES</h5>
        <ul>
          <li>Frappés pistacho</li>
          <li>Frappés toffee</li>
          <li>Frappés caramelo</li>
          <li>Frappés café</li>
          <li>Frappés frozen mocka</li>
        </ul>

      </div>


    </div>

    <p class="fw-bold">Salsas y syrups</p>
    <hr>

    <p class="text-product mx-auto mx-lg-0 me-lg-auto">Todo lo necesario para tu barra: Baristas
      y bartenders.</p>

    <div class="products-small">

      <div class="card card-sponsor">
        <div class="card-sponsor-img">
          <img src="./assets/imgs/insumos/sponsor-2.png" alt="logo sponsor">
        </div>
      </div>



      <div class="card card-small">
        <h5 class="card-header fw-bold">SALSA DE CARAMELO</h5>
        <img src="./assets/imgs/insumos/salsa-caramelo.svg" class="card-img-top" alt="...">
      </div>


      <div class="card card-small">
        <h5 class="card-header fw-bold">SALSA DE CHOCOLATE</h5>
        <img src="./assets/imgs/insumos/salsa-chocolate.svg" class="card-img-top" alt="...">

      </div>
      <div class="card card-small">
        <h5 class="card-header fw-bold">SYRUP DE AMARETTO</h5>
        <img src="./assets/imgs/insumos/syrup-amaretto.svg" class="card-img-top" alt="...">
      </div>
      <div class="card card-small d-none d-lg-block">
        <h5 class="card-header fw-bold">SYRUP DE VAINILLA</h5>
        <img src="./assets/imgs/insumos/syrup-amaretto.svg" class="card-img-top" alt="...">
      </div>
      <div class="card card-small">
        <h5 class="card-header fw-bold">OTRAS VARIEDADES</h5>
        <ul>
          <li>Syrup de vainilla</li>
          <li>Syrup de avellana</li>
          <li>Syrup té chai</li>
          <li>Syrup de coco</li>
          <li>Syrup crema Irlandesa</li>
          <li>Syrup canela</li>
          <li>Syrup menta verde</li>
        </ul>
      </div>
    </div>

    <p class="fw-bold">Té orgánico</p>
    <hr>

    <p class="text-product mx-auto mx-lg-0 me-lg-auto">Elige tu sabor preferido. Tambien tenemos bolsitas
      infusionadoras y teteras con filtros. Formato de 250 gramos.</p>

    <div class="products-small">
      <div class="card card-sponsor">
        <div class="card-sponsor-img">
          <img src="./assets/imgs/insumos/sponsor-3.svg" alt="logo sponsor">
        </div>
      </div>
      <div class="card card-small">
        <h5 class="card-header fw-bold">ENGLISH BREAKFAST</h5>
        <img src="./assets/imgs/insumos/english-breakfast.svg" class="card-img-top" alt="...">
      </div>
      <div class="card card-small">
        <h5 class="card-header fw-bold">CHAI MALASA</h5>
        <img src="./assets/imgs/insumos/chai-malasa.svg" class="card-img-top" alt="...">
      </div>
      <div class="card card-small">
        <h5 class="card-header fw-bold">EARL GREY</h5>
        <img src="./assets/imgs/insumos/earl-grey.svg" class="card-img-top" alt="...">
      </div>
      <div class="card card-small d-none d-lg-block">
        <h5 class="card-header fw-bold">ROOIBOS</h5>
        <img src="./assets/imgs/insumos/earl-grey.svg" class="card-img-top" alt="...">
      </div>
      <div class="card card-small">
        <h5 class="card-header fw-bold">OTRAS VARIEDADES</h5>
        <ul>
          <li>Gunpowder</li>
          <li>Te verde maracuya y mango</li>
          <li>Matcha organico</li>
          <li>Berries silvestres</li>
          <li>Pu-erh</li>
          <li>Infusion manzanilla</li>
        </ul>
      </div>
    </div>`
}

let accessoriesTemplate = {
    url: 'url("./assets/imgs/header/accesorios.png")',
    lg: 'url("./assets/imgs/header/accesorios-lg.png")',
    template: `<p class="fw-bold">Accesorios</p>
    <hr>

    <p class="text-product mx-auto">Todo lo que tú barra necesita, esta aquí.</p>

    <div class="row">
            <div class="col">
                    <div class="card card-medium">
                            <h5 class="card-header fw-bold">ATRIL METÁLICO SYRUP</h5>
                            <img src="./assets/imgs/accesorios/atril-metalico.svg" class="card-img-top" alt="...">
                            <div class="card-body">
                                    <h6 class="fw-bold">Capacidad: 4-6 botellas</h6>
                            </div>
                    </div>

            </div>
            <div class="col">
                    <div class="card card-medium">
                            <h5 class="card-header fw-bold">TAMPER PROFESIONAL MADERA</h5>
                            <img src="./assets/imgs/accesorios/tamper.svg" class="card-img-top" alt="...">
                            <div class="card-body">
                                    <h6 class="fw-bold">Unidad</h6>
                            </div>
                    </div>

            </div>
            <div class="col">
                    <div class="card card-medium">
                            <h5 class="card-header fw-bold">JARRA LATTIERA 50 ML
                                    LOGO CAFFÉ MAURO</h5>
                            <img src="./assets/imgs/accesorios/jarra.svg" class="card-img-top" alt="...">
                            <div class="card-body">
                                    <h6 class="fw-bold">Unidad acero inoxidable</h6>
                            </div>
                    </div>

            </div>
            <div class="col">
                    <div class="card card-medium">
                            <h5 class="card-header fw-bold">CAFIZA, DETERGENTE
                                    LIMPIADOR CAFETERAS</h5>
                            <img src="./assets/imgs/accesorios/cafiza.svg" class="card-img-top" alt="...">
                            <div class="card-body">
                                    <h6 class="fw-bold">Formato: 900 g</h6>
                            </div>
                    </div>

            </div>

            <div class="col">
                    <div class="card card-extra">
                            <h5 class="card-header fw-bold">OTRAS VARIEDADES</h5>
                            <ul>
                                    <li>Bomba syrup, unidad dispensadora</li>
                                    <li>Bomba Salsa, unidad dispensadora</li>
                                    <li>Filtros Bunn, caja 500 undidades</li>
                                    <li>Apoya Tamper, Unidad antideslizante</li>
                                    <li>Filtro ciego metálico, unidad para limpieza cafetera</li>
                                    <li>Knockbox profesional metálico, unidad para descarga borra de café</li>
                                    <li>Escobilla limpiadora, unidad plástica</li>
                                    <li>Sachets sucralosa logo Caffè Mauro, caja 1000 unidades</li>
                                    <li>Sachets Azúcar logo Caffé Mauro: caja 1000 unidades</li>
                                    <li>Jarra Lattiera 75 ml logo Caffé Mauro. Unidad acero inoxidable</li>
                                    <li>Vaso Shot de café. Unidad, vidrio con registro de medida</li>
                                    <li>Rinza. detergente limpiador  lancetas vaporizador. Formato de 1L</li>
                                    <li>Grindz. Detergente limpiador molinos. Formato 430 g</li>
                                    <li>Apoya Tamper, Unidad antideslizante</li>
                            </ul>

                    </div>
            </div>


    </div>

    <a href="#">Contáctanos</a>`
}

// TODO crear template para la vista de maquinas
let machinesTemplate = {
    url: 'url("./assets/imgs/header/maquinas.png")',
    lg: 'url("./assets/imgs/header/maquinas-lg.png")',
    template: `<h1> Maquinas </h1>`
}

let merchandisingTemplate = {
    url: 'url("./assets/imgs/header/merchandising.png")',
    lg: 'url("./assets/imgs/header/merchandising-lg.png")',
    template: `<p class="fw-bold">Merchandising</p>
    <hr>

    <p class="text-product mx-auto">Todo lo que tú barra necesita, esta aquí.</p>

    <div class="row">
        <div class="col">
            <div class="card card-medium">
                    <h5 class="card-header fw-bold">TAZA ESPRESSO LOGO CAFFÈ MAURO</h5>
                    <img src="./assets/imgs/merchandising/taza-expresso.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                            <h6 class="fw-bold">Unidad plato/taza</h6>
                    </div>
            </div>

        </div>
        <div class="col">
            <div class="card card-medium">
                    <h5 class="card-header fw-bold">TAZA CAPPUCCINO
                        LOGO CAFFÉ MAURO</h5>
                    <img src="./assets/imgs/merchandising/taza-capuccino.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                            <h6 class="fw-bold">Unidad plato/taza</h6>
                    </div>
            </div>

        </div>
        <div class="col">
            <div class="card card-medium">
                    <h5 class="card-header fw-bold">LECHERO PEQUEÑO
                        LOGO CAFFÈ MAURO</h5>
                    <img src="./assets/imgs/merchandising/lechero.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                            <h6 class="fw-bold">Unidad porcelana</h6>
                    </div>
            </div>

        </div>
        <div class="col">
            <div class="card card-medium">
                    <h5 class="card-header fw-bold">PLACA VINILO
                        PUBLICIDAD CAFFÈ MAURO</h5>
                    <img src="./assets/imgs/merchandising/placa.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                            <h6 class="fw-bold">Unidad acrílica</h6>
                    </div>
            </div>

        </div>
        <div class="col">
            <div class="card card-medium">
                    <h5 class="card-header fw-bold">MÁS MERCHANDISING</h5>
                    <ul> 
                        <li>Taza Latte logo Caffè Mauro, unidad plato/taza</li>
                        <li>Vaso vidrio logo Caffè Mauro, unidad</li>
                        <li>Vaso Cafeino logo Caffè Mauro, unidad vidrio</li>
                        <li>Delantal barista logo Caffè Mauro, unidad</li>
                        
                </ul>
            </div>

        </div>
    </div>

    <a href="#">Contáctanos</a>`
}

let templates = [productsTemplate, suppliesTemplate, accessoriesTemplate, machinesTemplate, merchandisingTemplate];

let menu = document.querySelectorAll('ol li');
let productsSection = document.querySelector('.products');
let headerBackground = document.querySelector('.dinamic-header');
let headerText = document.querySelector('.dinamic-header p');
let collapseText = document.querySelector('#collapseText');


menu.forEach((item, i) => {
    item.addEventListener('click', () => {

        menu.forEach((item) => {
            item.classList.remove('fw-bold');
        })

        item.classList.add('fw-bold');

        console.log(screen.width)
        
        screen.width >= 992 ? headerBackground.style.backgroundImage = templates[i].lg : headerBackground.style.backgroundImage = templates[i].url;
        headerText.innerText = item.innerText;
        productsSection.innerHTML = templates[i].template;
    })
})

collapseText.addEventListener('click', () => {
    collapseText.innerText === 'ver más ' ? collapseText.innerHTML = `ver menos <img src="./assets/imgs/flecha-inversa.svg" alt="icono">` : collapseText.innerHTML = `ver más <img src="./assets/imgs/flecha.svg" alt="icono">`;
})
