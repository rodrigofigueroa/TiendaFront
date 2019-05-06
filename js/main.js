$(document).ready(function(){
   //OWLsliderPersonajes
   if($('.cont-slider-equipo').length){
       $('.cont-slider-equipo').owlCarousel({
           items: 1,
           nav: true,
           loop:false,
           URLhashListener:true,
           autoplayHoverPause:true,
           startPosition: 'URLHash',
           onDragged: callback
       });
       findActive();   
        $('.sidebar-gris a .cuadrito-personaje').click(function() {
           $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');    
            $(this).addClass('cuadrito-personaje-active');
            $(this).siblings('a').removeClass('cuadrito-personaje-active');
        });
        $(".owl-next").click(function(){
           $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');    
            findActive();
          });
          $(".owl-prev").click(function(){
            $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');    
             findActive();
           });
           if(prebv = document.querySelector('.owl-next')){
               navowlscambio();
           }
        }
    //end Owlslider PErsonajes
    /* funciones para el input y el Drag and Drop */
    if(document.getElementById('archivos')){
        desabilitarInputs();
        dragguerJS();
        inputClick();
    }
    /* End Drag and Drop Inputs */
    // Owl slider Quienes
        if(document.getElementsByTagName('cont-slider-quienes')){
            // $('.cont-slider-quienes').owlCarousel({
            //     items: 1,
            //     dots:false,
            //     nav: false,
            //     loop:false,
            //     lazyLoad:true,
            //     URLhashListener:true,
            //     autoplayHoverPause:true,
            //     startPosition: 'URLHash',
            //     video:true,
            //     onDragged: callbackQuienes
            // });            
            inputQuienesClick();
        }
    //End Owlslider Quienes
    // logo
    // if(document.getElementsByClassName('slider-molino').length){
        logoScrollNav();
    // }
    //end Logo
    // Inpuyts formulario
    if(document.getElementsByTagName('input').length){
        inputsLabel();
    }
    // End Inpuyts formulario
    if(document.getElementsByClassName('botton-noticias')[0]){
        noticiasButon();
    }
    //end Inputs
    //Butons Quienes
    if(document.getElementsByClassName('botones-slider-quienes-somos').length){
        botonesQuienesSomos();
        mouseFollowme();        
    }
    //Butones Quienes    
    if(window.innerWidth <= 676){
        menuResponsvie();
    }
   /*end Jquery*/     
});

function navowlscambio(){
    var prebv = document.querySelector('.owl-next');
        prebv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="11" viewBox="0 0 60 11" class="ml-3 f-recta">
                <g fill="none" fill-rule="evenodd" stroke="#fe6e4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M1 5h10M17 4.95h27M53.5 9.5l5-3.795-5-4.205"/>
                </g>
            </svg>
        `;
        var next = document.querySelector('.owl-prev');
        next.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="11" viewBox="0 0 60 11" class="ml-3 f-recta">
                <g fill="none" fill-rule="evenodd" stroke="#fe6e4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M1 5h10M17 4.95h27M53.5 9.5l5-3.795-5-4.205"/>
                </g>
            </svg>
        `;
}

function findActive(){    
    var ow = document.getElementsByClassName('owl-item');
    var cuadrito = document.getElementsByClassName('cuadrito-personaje');
    for(i = 0; i < ow.length; i++){
        var cl = ow[i].classList        
        var cd = cuadrito[i].parentElement;  
        if(cl[1] == 'active'){
            var chi = ow[i].children;
            var hi = chi[0].getAttribute('data-hash');            
            var fhi = '#'+hi;
            var ar = cd.getAttribute('href');            
            if(ar === fhi){
                var cdPersonaje = cd.children;
                cdPersonaje[0].classList = 'cuadrito-personaje cuadrito-personaje-active'
            }
        }
    }
}

function callback(event) {   
    var item      = event.item.index;  
    var cuadritoDos = $('.cuadrito-personaje');
    $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');
    cuadritoDos[item].className = 'cuadrito-personaje cuadrito-personaje-active';
}

function desabilitarInputs(){
    var inputEnviar = $('.inputDisabledKnows').attr('disabled');
    if(inputEnviar === 'disabled'){
        $('.cont-inpu').css({
            'opacity': '0.4'
        })
    }else{
        $('.cont-inpu').css({
            'opacity': '1'
        })
    }
}

function dragguerJS(){
    let dropArea = document.getElementsByClassName('input-file-convert-seleciona');

    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea[0].addEventListener(eventName, preventDefaults, false)
      })
      
      function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
      }

      ;['dragenter', 'dragover'].forEach(eventName => {
        dropArea[0].addEventListener(eventName, highlight, false)
      })
      
      ;['dragleave', 'drop'].forEach(eventName => {
        dropArea[0].addEventListener(eventName, unhighlight, false)
      })
      
      function highlight(e) {
        dropArea[0].classList.add('input-file-convert-seleciona-dos')
      }
      
      function unhighlight(e) {
        dropArea[0].classList.remove('input-file-convert-seleciona-dos')
      }
      
      dropArea[0].addEventListener('drop', handleDrop, false)

        function handleDrop(e) {
            let dt = e.dataTransfer
            let files = dt.files
            console.log(files[0].name);
            let childs = document.getElementsByClassName('input-file-convert');
            let inpFiles = document.getElementById('archivos');
            let chid = childs[0].childNodes;
            chid[2].innerHTML = files[0].name;
            inpFiles.setAttribute('name', files[0].name);

            // handleFiles(files)
        }

      

}

function inputClick(){
    let inputC = document.getElementById('archivos');
    let childs = document.getElementsByClassName('input-file-convert');
    let chid = childs[0].childNodes;

    function handleFileSelect(evt) {
        var files = evt.target.files;
        chid[2].innerHTML = files[0].name;
        inputC.setAttribute('value',files[0].name);
      }
      document.getElementById('archivos').addEventListener('change', handleFileSelect, false);
}

function callbackQuienes(event){
    console.log('slider quienes')
    // var item      = event.item.index;
    // var cuadritoDos = $('.botones-slider-quienes-somos a span');
    // $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');
    // cuadritoDos[item].className = 'dot-activo-azul';
}

function inputQuienesClick(){
    $('.botones-slider-quienes-somos a').click(function() {
        $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
        // $(this).siblings('span').addClass('dot-activo-azul');
        var hijoA= this.childNodes;
        hijoA[1].className = 'dot-activo-azul';

     });
}

function logoScrollNav(){
    var logoTope = $('nav').offset().top,
        contTextologoTrue = $('.contenedor-logo-texto'),           
        flag = false,
        scroll;
        if(contTextologoTrue.length){
            $(window).scroll(function(){
                 scroll = $(window).scrollTop();
                 if(parseInt(scroll) > parseInt(logoTope)){
                     if(!flag){
                         $('#logo-svg-ezquierda').animate({
                             'top':'3.5%',
                             'left': '10%'
                         }, 500);
                         $('#logo-svg-ezquierda a img').animate({
                            'width': '100px'
                         }, 500);
                         $('.contenedor-logo-texto').css({
                             'display': 'none'
                         });    
                         if(window.innerWidth > 768){                            
                         $('nav').show(600);
                         }      
                        $('.slider-molino').css({
                            'opacity': '0.9'
                        });    

                         flag =  true;
                     }
                 }else {  
                        if(flag){
                        // $('.contenedor-logo-texto').css({
                        //     'display': 'block'
                        // }, 500);    
                        // $('#logo-svg-ezquierda').animate({
                        //     'top':'6%',
                        //     'left': '50%'
                        // }, 500);
                        // $('#logo-svg-ezquierda a img').animate({
                        //     'width': '200px'
                        // });
                        // if(window.innerWidth > 768){

                        // $('nav').hide(600);
                        // }
                        
                        // $('.slider-molino').css({
                        //     'opacity': '0.5'
                        // });    
                        //    flag = false;              
                        }  
                 }
                 if(parseInt(scroll) > (parseInt(logoTope) + 200)){
                    $('.botton-noticias').show(500); 
                 }
            });
        }else{
            if(window.innerWidth > 768){
                $('nav').show(600);
                $('#logo-svg-ezquierda').css({
                    'top':'120px',
                    'left': '10%'
                });
                $('#logo-svg-ezquierda a img').css({
                    'width': '100px'
                 } );
            }
        }    
}

function inputsLabel(){
    var input =  document.getElementsByTagName('input'),
        textArea = document.getElementsByTagName('textarea');
    for(i = 0; i < input.length;i++){
        input[i].addEventListener('click',function(){
            var padre = this.parentNode;
            var hijos = padre.getElementsByTagName('label')[0];
            hijos.style.fontSize = '10px';
            
        });
    }

    if(textArea.length){
        textArea[0].addEventListener('click',function(){
            var padre = this.parentNode;
            var hijos = padre.getElementsByTagName('label')[0];
            hijos.style.fontSize = '10px';
            
        });
    }
}

function noticiasButon(){
    var botonNoticias = document.getElementsByClassName('botton-noticias')
        noticiasBarraDerecha = $('.noticias')
        trianguloCerrar = document.getElementsByClassName('triangulo-cerrar');
    botonNoticias[0].addEventListener('click', cliqueasteButon);
    function cliqueasteButon(){
        noticiasBarraDerecha.animate({
            'right': '0px'
        }, 1000);
    }
    trianguloCerrar[0].addEventListener('click', clickeasteTriangulo);
    function clickeasteTriangulo(){
        noticiasBarraDerecha.animate({
            'right': '-100%'
        }, 1000);
    }
}

function botonesQuienesSomos(){
    butonesQuienes = $('.botones-slider-quienes-somos'),
    botonesTop =  butonesQuienes.offset().top,
    scroll,
    flagDos = false,
    nuestraEmpres = $('.nuestra-empresa').offset().top,
    pCuadro = $('.primer-cuadro'),
    pCuadroOff = $('.primer-cuadro').offset().top,
    sCuadro = $('.segundo-cuadro'),
    sCuadroOff = $('.segundo-cuadro').offset().top,
    tCuadro = $('.tercer-cuadro'),
    tCuadroOff = $('.tercer-cuadro').offset().top,
    pImagen = $('.primer-imagen'),
    pImagenOff = $('.primer-imagen').offset().top,
    sImagen = $('.segunda-imagen'),
    sImagenOff = $('.segunda-imagen').offset().top;

    
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll > botonesTop){
            if(!flagDos){
                butonesQuienes.css({
                    'position': 'fixed'
                });
                butonesQuienes.addClass('botones-slider-quienes-somos-top');
                butonesQuienes.removeClass('botones-slider-quienes-somos-bottom');
                flagDos = true;
            }
        }else {
            butonesQuienes.css({
                'position': 'absolute'
            });
            butonesQuienes.addClass('botones-slider-quienes-somos-bottom');
            butonesQuienes.removeClass('botones-slider-quienes-somos-top');
            flagDos = false;
        }
        if (scroll > (nuestraEmpres - 100)){            
                pCuadro.css({
                    'left': '5%'
                });
                pImagen.animate({
                    'right': '0%'
                }, 2000);         
        }
        if (scroll > pCuadroOff){            
                sCuadro.css({
                    'right': '7%'
                });            
        }
        if (scroll > sCuadroOff){            
                sImagen.animate({
                    'right': '0%'
                }, 1000);
        }
        if (scroll > sCuadroOff){
                tCuadro.css({
                    'left': '15%'
                });
        }
    });
    var btnAQuienes = butonesQuienes.children();
    for(i = 0; i < btnAQuienes.length; i++){
        btnAQuienes[i].addEventListener('click', function(){
            var atributo = this.getAttribute('id');
            var scrollTopP = $('.'+atributo).offset().top;
            $('html, body').animate({
                scrollTop: scrollTopP + "px"
            }, 1500);
        });
    }
}

function mouseFollowme(){
    var imagenes = $('.cont-imagen-figura-circulo'); 
    console.log(window.innerWidth);
    imagenes.on('mousemove', function(e){

        var t = $(this);
        var a = e.clientX - window.innerWidth / 2;
        var o = e.clientY - window.innerHeight / 2;
        TweenMax.to(t.find("figure"), .5, {
            x: a * .1,
            y: o * .1
        });
        TweenMax.to(t.find("p"), .5, {
            x: a * .01,
            y: o * .01
        });
    });

    imagenes.on('mouseleave', function(){
        var t = $(this);
        var a = 0;        
        TweenMax.to(t.find("figure"), .5, {
            x: a,
            y: 0
        });
        TweenMax.to(t.find("p"), .5, {
            x: 0,
            y: 0
        });
    });
    
        
}

function menuResponsvie(){
    var hamburguer = document.createElement('div'),
        shadowBlack = document.createElement('div'),
        insertH = document.getElementsByClassName('contenedor-aplicacion')[0];
        insertH.appendChild(hamburguer);
        insertH.appendChild(shadowBlack);
        hamburguer.className = "hamburguer";
        shadowBlack.className = 'shadow-black'
        hamburguer.innerHTML = '<i class="fas fa-bars"></i>';

        var haction =  document.getElementsByClassName('hamburguer')[0].children;
        haction[0].addEventListener('click', () =>{
            $('nav').show(1000);
            $('nav').css({
                'left': '0'
            });
            $('.shadow-black').show(1000);
        });
        var shadowSB = document.getElementsByClassName('shadow-black')[0];
            shadowSB.addEventListener('click', () =>{
                $('nav').hide(1000);
                    $('nav').css({
                        'left': '-100%',
                        'transition': '1s all ease'
                    });     
                    $('.shadow-black').hide(800);
            });
}
