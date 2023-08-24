

// Confirmar asistencia parallax
// $('.parallax-asistencia').parallax({
//     imageSrc: 'assets/img/confirmar-asistencia.jpg'
  
//   });
  
//   // Portada parallax
//   $('.parallax-portada').parallax({
//     imageSrc: 'assets/img/portada.jpg'
//   });

  
//   // Gracias parallax
//   $('.parallax-gracias').parallax({
//     imageSrc: 'assets/img/portada.jpg'
//   });
  
  // ----------------------
  
  
  
  
  // Cuenta regresiva
  var fechaInicio = new Date().getTime();
  var fechaFin = new Date(fechaCuentaRegresiva).getTime();
  var diff = (fechaFin - fechaInicio) / 1000;
  
  
  
    // Config countdown
    $('.countdown').ClassyCountdown({
  
      theme: "black",
  
      labelsOptions: {
        style: 'font-size: 15px;font-family: \'Cinzel 27px\', serif;'
      },
  
      style: {
        // textResponsive: 0.6,
        secondsElement: {
          gauge: {
            fgColor: "#F00"
          }
        },
  
        days: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Cinzel 27px\', serif;'
        },
  
  
        hours: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Cinzel 27px\', serif;'
        },
  
  
        minutes: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Cinzel 27px\', serif;'
        },
  
  
        seconds: {
          gauge: {
            thickness: 0.01,
            fgColor: colorCirculosCuentaRegresiva
          },
          textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Cinzel 27px\', serif;'
        }
  
  
      },
  
      // Fecha finalizacion
      end: $.now() + diff,
  
      // Al finalizar
      onEndCallback: function () {
        $('.cuenta-regresiva').hide();
      }
  
    });


    // Obtén la cadena de consulta de la URL actual
var queryString = window.location.search;

// Crea un objeto URLSearchParams para manejar la cadena de consulta
var params = new URLSearchParams(queryString);

// Obtén los valores de los parámetros individuales
var nombre = params.getAll('nombre');
var edad = params.get('edad');
var ciudad = params.get('ciudad');


// Ahora puedes utilizar los valores como desees
console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('Ciudad:', ciudad);

const invitados = document.getElementById('invitados')
const invitado = document.getElementById('invitado')

if(nombre.length > 1) {
  invitados.classList.remove('is-hidden')
  invitados.innerHTML = `${nombre.join(', ')}, los queremos invitar a nuestra celebración`
} else {
  invitado.classList.remove('is-hidden')
  invitado.innerHTML = `${nombre[0]}, te queremos invitar a nuestra celebración`
}