$(document).foundation(); // lanzamos foundation

    // las opciones
      var options = {
        strings: ['Soy Sergio, tengo 4 años de experiencia desarrollando aplicaciones web.<br>-PHP | MySQL<br>-JavaScript | Node.js'],
        // loop : true,
        typeSpeed: 27
      };

      // // las opciones
      // var poderes = {
      //   strings: ['-PHP | MySQL<br>-JavaScript | Node.js | Express<br>-Python | Flask'],
      //   typeSpeed: 17
      // };


      // cargamos y lanzamos
      var opciones = new Typed('.titulo_intro', options);
      // var poderes = new Typed('.titulo_poderes', poderes);

     // cargamos el js de foundation
     $(document).foundation();
       
 // el docuemtno cargado
$(function(){


/*agregamos las particulas*/
particlesJS("particles-js", {
           "particles": {
             "number": {
               "value": 111,
               "density": {
                 "enable": true,
                 "value_area": 356
               }
             },
             "color": {
               "value": "#ffffff"
             },
             "shape": {
               "type": "circle",
               "stroke": {
                 "width": 0,
                 "color": "#000000"
               },
               "polygon": {
                 "nb_sides": 5
               },
               "image": {
                 "src": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/circle.svg",
                 "width": 8,
                 "height": 8
               }
             },
             "opacity": {
               "value": 0.7,
               "random": false,
               "anim": {
                 "enable": false,
                 "speed": 1,
                 "opacity_min": 0.3,
                 "sync": false
               }
             },
             "size": {
               "value": 2,
               "random": true,
               "anim": {
                 "enable": false,
                 "speed": 40,
                 "size_min": 0.1,
                 "sync": false
               }
             },
             "line_linked": {
               "enable": false,
               "distance": 30,
               "color": "#ffffff",
               "opacity": 0.4,
               "width": 1
             },
             "move": {
               "enable": true,
               "speed": 4,
               "direction": "top",
               "random": false,
               "straight": false,
               "out_mode": "out",
               "bounce": false,
               "attract": {
                 "enable": true,
                 "rotateX": 600,
                 "rotateY": 1200
               }
             }
           },
           "interactivity": {
             "detect_on": "canvas",
             "events": {
               "onhover": {
                 "enable": false,
                 "mode": "bubble"
               },
               "onclick": {
                 "enable": false,
                 "mode": "push"
               },
               "resize": false
             },
             "modes": {
               "grab": {
                 "distance": 140,
                 "line_linked": {
                   "opacity": 1
                 }
               },
               "bubble": {
                 "distance": 400,
                 "size": 12,
                 "duration": 2,
                 "opacity": 8,
                 "speed": 3
               },
               "repulse": {
                 "distance": 50,
                 "duration": 0.4
               },
               "push": {
                 "particles_nb": 10
               },
               "remove": {
                 "particles_nb": 2
               }
             }
           },
           "retina_detect": true
         });
         // fin de las particulas

      });
    