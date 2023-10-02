const postersPeliculas = require.context('../img/posters', true)
// import lluviaTemp from '../img/posters/lluvia_en_el_desierto.jpg'

export const Peliculas = [
        {
            id: 0,
            nombre: 'Lluvia Del Desierto',
            PEGI: '13',
            sinopsis: 'En un mundo post-apocalíptico donde el agua es un recurso escaso, un grupo de supervivientes se embarca en un peligroso viaje a través de un implacable desierto en busca de una legendaria fuente de agua. Mientras luchan contra bandidos sedientos y condiciones extremas, descubren secretos del pasado que podrían cambiar el destino de la humanidad.',
            estreno: true,
            poster:  postersPeliculas('./lluvia_en_el_desierto.jpg'),
            imagen: 'lluvia_poster',
            hay_funcion: true
        },
        {
            id: 1,
            nombre: 'No Creo en Héroes',
            PEGI: 'ATP',
            sinopsis: 'Cuando los superpoderes son reales pero los héroes no existen, un joven escéptico se ve envuelto en una conspiración gubernamental después de descubrir accidentalmente una serie de experimentos secretos. Mientras lucha por revelar la verdad, se da cuenta de que a veces la línea entre héroe y villano es más difusa de lo que jamás imaginó.',
            estreno: false,
            poster:  postersPeliculas('./no_creo_en_heroes.jpg'),
            imagen: 'heroes_poster',
            hay_funcion: true
        },
        {
            id: 2,
            nombre: 'Préstame un Sentimiento',
            PEGI: 'ATP',
            sinopsis: 'Cuando los superpoderes son reales pero los héroes no existen, un joven escéptico se ve envuelto en una conspiración gubernamental después de descubrir accidentalmente una serie de experimentos secretos. Mientras lucha por revelar la verdad, se da cuenta de que a veces la línea entre héroe y villano es más difusa de lo que jamás imaginó.',
            estreno: false,
            poster:  postersPeliculas('./prestame_un_sentimiento.jpg'),
            imagen: 'prestame_poster',
            hay_funcion: true
        },
        {
            id: 3,
            nombre: 'El Polo Sur de la Luna',
            PEGI: '13',
            sinopsis: 'En la bulliciosa ciudad de Nueva Esperanza, dos almas heridas por el pasado, una talentosa violinista y un escritor bloqueado, se cruzan en el momento menos esperado. Con la música como su lenguaje común, comienzan a sanar mientras colaboran en la creación de una emotiva composición musical. A medida que sus mundos chocan y entrelazan, descubren que a veces es necesario prestar un sentimiento para encontrar la verdadera armonía.',
            estreno: true,
            poster:  postersPeliculas('./el_polo_sur_de_la_luna.jpg'),
            imagen: 'luna_poster',
            hay_funcion: true
        },
        {
            id: 4,
            nombre: 'Sanguchito de Miga',
            PEGI: '13',
            sinopsis: 'En un futuro no muy lejano, una misión espacial de última generación se embarca en un viaje audaz para establecer la primera base lunar en el polo sur de la Luna. Mientras la tripulación enfrenta peligros desconocidos, conflictos internos y el aislamiento en la superficie lunar, descubren secretos que podrían cambiar la comprensión de la humanidad sobre el cosmos.',
            estreno: false,
            poster:  postersPeliculas('./sanguchito_de_miga.jpg'),
            imagen: 'sanguchito_poster',
            hay_funcion: true
        },
        {
            id: 5,
            nombre: 'Cómo Tocar el Bandoneón',
            PEGI: 'ATP',
            sinopsis: 'En una pequeña y encantadora cafetería de Buenos Aires, la historia gira en torno a la creación de uno de los sanguchitos de miga más icónicos de la ciudad. A través de los ojos del chef y su devoción por la comida, la película narra las historias de los clientes habituales y cómo este modesto platillo llega a ser más que una simple comida, convirtiéndose en un símbolo de amor y comunidad en el corazón de la ciudad.',
            estreno: false,
            poster: '',
            imagen: '',
            hay_funcion: false
        },
        {
            id: 6,
            nombre: 'La Hora del Reloj',
            PEGI: '13',
            sinopsis: 'En un pequeño pueblo, un relojero descubre que un misterioso reloj antiguo que ha estado en su familia durante generaciones tiene el poder de detener el tiempo. A medida que explora su uso, se ve envuelto en una trama de secretos y decisiones que desafían la realidad tal como la conocemos.',
            estreno: false,
            poster:  postersPeliculas('./la_hora_del_reloj.jpg'),
            imagen: 'reloj_poster',
            hay_funcion: true
        },
        {
            id: 7,
            nombre: 'Azul',
            PEGI: '13',
            sinopsis: 'Una exploración visual de las emociones humanas a través del color azul. Esta película única lleva a los espectadores a un viaje abstracto y emotivo a través de una serie de paisajes y momentos, todo unidos por el poderoso simbolismo del color azul. Desde la calma y la serenidad hasta la tristeza y la melancolía, Azul nos lleva a un mundo de emociones universales representadas en este tono sorprendentemente versátil.',
            estreno: true,
            poster:  postersPeliculas('./azul.jpg'),
            imagen: 'azul_poster',
            hay_funcion: true
        },
        {
            id: 8,
            nombre: 'Maestro y Estudiante',
            PEGI: 'ATP',
            sinopsis: 'En una escuela prestigiosa, un joven estudiante brillante lucha con desafíos académicos y personales. Su vida da un giro cuando conoce a un maestro excéntrico y sabio que lo inspira a superar sus límites. A medida que su relación se profundiza, descubren que tienen mucho que aprender el uno del otro y que la educación va más allá de las aulas. La película narra su viaje conjunto de autodescubrimiento y crecimiento.',
            estreno: false,
            poster: '',
            imagen: '',
            hay_funcion: false
        },
        {
            id: 9,
            nombre: 'Falso',
            PEGI: '13',
            sinopsis: 'En un mundo de secretos y engaños, un hábil falsificador de obras de arte se ve atrapado en una conspiración peligrosa cuando acepta un último trabajo. A medida que se adentra en el submundo del arte y la falsificación, se enfrenta a dilemas morales y descubre que la línea entre lo auténtico y lo falso es más difusa de lo que jamás imaginó.',
            estreno: false,
            poster:  postersPeliculas('./falso.jpg'),
            imagen: 'falso_poster',
            hay_funcion: true
        },
        {
            id: 10,
            nombre: 'Dedo Sangriento',
            PEGI: '16',
            sinopsis: 'En una tranquila ciudad, un extraño incidente en una casa aparentemente abandonada conduce a un investigador escéptico a desentrañar un misterio siniestro. A medida que profundiza en la investigación, descubre oscuros secretos que desafían la explicación racional. "Dedo Sangriento" es un escalofriante thriller que explora los límites entre lo real y lo paranormal.',
            estreno: false,
            poster:  postersPeliculas('./dedo_sangriento.jpg'),
            imagen: 'dedo_poster',
            hay_funcion: true
        },
        {
            id: 11,
            nombre: 'Adoquines',
            PEGI: '13',
            sinopsis: 'En el corazón de una ciudad antigua, un arqueólogo obsesionado por el pasado descubre una serie de misteriosos adoquines que parecen tener un origen desconocido. A medida que profundiza en su investigación, descubre que estos adoquines esconden secretos que podrían cambiar la historia de la ciudad para siempre. "Adoquines" es un viaje arqueológico que desentierra conexiones perdidas en el tiempo y revela la belleza oculta en la simplicidad de la historia urbana.',
            estreno: false,
            poster:  postersPeliculas('./adoquines.jpg'),
            imagen: 'adoquines_poster',
            hay_funcion: true
        },
        {
            id: 12,
            nombre: 'Sospecha Infinita',
            PEGI: 'ATP',
            sinopsis: 'Un detective brillante se enfrenta al caso más desafiante de su carrera cuando se ve atrapado en una conspiración global que parece no tener fin. A medida que sigue las pistas en un juego mortal del gato y el ratón, descubre que nada es lo que parece y que la verdad está enterrada bajo capas de engaño. Sospecha Infinita es un thriller trepidante que explora los límites de la paranoia y la lealtad en un mundo donde la verdad es esquiva.',
            estreno: false,
            poster:  postersPeliculas('./sospecha_infinita.jpg'),
            imagen: 'sospecha_poster',
            hay_funcion: true
        },
        {
            id: 13,
            nombre: 'Vida y Obra',
            PEGI: '13',
            sinopsis: 'A lo largo de las décadas, un artista visionario ha plasmado su vida en una obra maestra en constante evolución. Esta película revela la conexión íntima entre su vida personal, sus experiencias y su creación artística. Este película es un retrato emocional y conmovedor de un individuo cuyo arte trasciende el lienzo y se convierte en un reflejo de su alma en constante transformación.',
            estreno: false,
            poster:  postersPeliculas('./vida_y_obra.jpg'),
            imagen: 'vida_poster',
            hay_funcion: true
        },
    ]