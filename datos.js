/* ============================================================================
   INVITACIÓN XV AÑOS · SOFFIA CRYSTINA MOLINA GONZÁLEZ
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para actualizar la invitación.
   Todo lo que está en `null` todavía está pendiente: la sección correspondiente
   se oculta sola hasta que lo completes.

   Mientras `vistaPrevia` sea true verás contenido de EJEMPLO marcado como tal,
   para poder revisar el diseño. Ponlo en false antes de compartir la invitación.
   ========================================================================== */

const DATOS = {

  vistaPrevia: true,              // ← ponlo en false cuando los datos sean reales

  festejada: {
    nombre:    'Soffia Crystina',
    apellidos: 'Molina González',
    corto:     'Soffia'
  },

  celebracion: 'Mis XV años',

  /* La tarjeta del sobre -----------------------------------------------------
     Lo primero que se ve, y lo único que se ve antes de bajar. No lleva nombre
     ni fecha ni lugar: solo insinúa y empuja a seguir. El nombre de Soffia
     llega después, cuando se desvela la fotografía.
     Si un renglón se pasa de largo, el texto se encoge para caber y pierde
     fuerza, así que conviene respetar los límites:
       epigrafe → versales finas arriba        (hasta ~14 caracteres · opcional)
       frase    → la caligrafía grande         (hasta ~15 caracteres)
       apoyo    → versales bajo la caligrafía  (hasta ~17 caracteres)
       pie      → versales pequeñas al pie     (hasta ~27 caracteres)
     Déjalo todo en null y la tarjeta vuelve a mostrar nombre y fecha.          */
  portada: {
    epigrafe: null,
    frase:    'Algo muy especial',
    apoyo:    'está por suceder',
    // el pie lo pone la flecha de «Desliza»: repetirlo aquí sobraba
    pie:      null
  },

  /* Ciudad, solo para el pie de la firma final */
  ciudad: 'Tepic · Nayarit',

  /* Fecha ------------------------------------------------------------------
     iso: 'AAAA-MM-DDTHH:MM:SS' en hora local del evento.  Ej: '2026-05-16T19:00:00'
     Con una fecha válida se activa la cuenta regresiva.                      */
  fecha: {
    // Viernes 22 de enero de 2027, 5:00 p.m. CONFIRMADO.
    // La hora es la de la misa: el contador apunta ahí, no a la recepción.
    // Decidido así; no es un valor provisional.
    iso:      '2027-01-22T17:00:00',
    zona:     'America/Mazatlan',
    ejemplo:  '2026-05-16T19:00:00'
  },

  /* Sedes ------------------------------------------------------------------
     Añade solo los momentos que existan. No se presupone ceremonia religiosa. */
  sedes: [
    {
      tipo:      'Misa',
      nombre:    'Parroquia de Nuestra Señora de Fátima',
      hora:      '5:00 p.m.',
      direccion: null,                       // ← pendiente
      mapa:      null                        // ← pendiente
    },
    {
      tipo:      'Recepción',
      nombre:    'Salón de eventos Las Marías',
      hora:      null,                       // ← pendiente
      direccion: 'C. Camino Viejo a San Blas 228, Villas de San Juan, ' +
                 '63129 Tepic, Nayarit',
      mapa:      'https://www.google.com/maps/search/?api=1&query=21.5047164%2C-104.921863'
    }
  ],
  sedesEjemplo: [
    { tipo:'Ceremonia', nombre:'Nombre del recinto', hora:'6:00 p.m.',
      direccion:'Calle y número, colonia, ciudad', mapa:null },
    { tipo:'Recepción', nombre:'Nombre del salón',  hora:'8:00 p.m.',
      direccion:'Calle y número, colonia, ciudad', mapa:null }
  ],

  /* Itinerario -------------------------------------------------------------
     icono: arco · tacones · brindis · cena · fiesta                          */
  itinerario: [],
  itinerarioEjemplo: [
    { hora:'6:00 p.m.',  titulo:'Ceremonia',   icono:'arco'    },
    { hora:'8:00 p.m.',  titulo:'Recepción',   icono:'cena'    },
    { hora:'8:40 p.m.',  titulo:'Vals',        icono:'tacones' },
    { hora:'9:15 p.m.',  titulo:'Brindis',     icono:'brindis' },
    { hora:'10:00 p.m.', titulo:'Baile',       icono:'fiesta'  }
  ],

  vestimenta: null,
  vestimentaEjemplo: { codigo:'Etiqueta', nota:'Vestido largo · traje oscuro' },

  /* Confirmación -----------------------------------------------------------
     tipo: 'whatsapp' | 'formulario' | null
     whatsapp: número con lada internacional y sin signos. Ej: '523111234567'
     formulario: URL real que reciba el POST (Formspree o similar)            */
  confirmacion: {
    tipo:       null,
    whatsapp:   null,
    formulario: null,
    fechaLimite: null
  },

  /* Fotografías ------------------------------------------------------------
     Coloca los archivos en assets/fotos/ y escribe aquí sus nombres.         */
  fotos: {
    portada:  'assets/fotos/soffia-portada.webp',
    momentos: []                 // ej: ['assets/fotos/soffia-1.jpg', ...]
  },

  /* Música -----------------------------------------------------------------
     Coloca tu archivo en assets/musica.mp3. Nunca arranca sola al cargar:
     empieza al abrir el sobre y siempre se puede silenciar.                  */
  musica: {
    /* En null no se pide nada. Con la ruta puesta y el archivo ausente, el
       navegador lanzaba una petición que moría en 404 y costaba 2 s en 3G.
       Cuando tengas el mp3, lo dejas en assets/musica.mp3 y pones aquí
       'assets/musica.mp3'. */
    archivo: null,
    titulo:  null
  },

  mensajes: {
    /* Tres momentos encadenados, y en este orden:
       1 · presentacion → intriga. No dice a qué se invita: solo que hay algo.
       2 · puente       → tiende la mano al tercero, señalando a una persona.
       3 · lo dice la propia sección de Soffia: «Te invito · mis XV años».
       Si en el 1 ya se nombran los quince años, el final deja de ser final. */
    presentacion: 'Hay días que se sueñan mucho antes de llegar. ' +
                  'El mío ya tiene fecha, y me encantaría que me acompañaras.',
    puente:       'Solo falta que conozcas a quien lo soñó.',
    invitacion:   'Con la bendición de mis padres y el cariño de quienes me ' +
                  'han acompañado, te invito a celebrar conmigo.',
    cierre:       'Lo más especial de esta noche será compartirla contigo.'
  },

  /* El tercer momento, el que llega con la fotografía. Es la respuesta al
     puente: «conoce a quien lo soñó» → aquí está, y te invita. Por eso es una
     frase seguida y no dos rótulos sueltos encima y debajo del nombre.
     `antes` en null deja el nombre solo, que es como respira mejor. */
  revelacion: {
    antes:    null,
    despues:  'Te invito a mis',
    destacado:'XV años'            // el golpe final: va en grande y en versales
  },

  /* Apertura ---------------------------------------------------------------
     'dom'   → animación por capas (recomendada: más nítida y sin esperas)
     'video' → encadena assets/apertura-1.mp4 y apertura-2.mp4                                  */
  apertura: { modo: 'video' }
};
