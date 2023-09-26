import Image from 'next/image'
import styles from './page.module.css'
import imgPortadaTemp from './img/portadas/el_polo_sur_de_la_luna.png'
import postUnoTemp from './img/posters/adoquines.jpg'
import postDosTemp from './img/posters/azul.jpg'
import postTresTemp from './img/posters/dedo_sangriento.jpg'
import postCuatroTemp from './img/posters/el_polo_sur_de_la_luna.jpg'
import postCincoTemp from './img/posters/falso.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.portada}>
        <div className={styles.carrusel}>
        <Image
              src={imgPortadaTemp}
              alt='PORTADA'
              className={styles.portadaImg}
            />
        </div>
      </div>

      <div className={styles.configContenedor}>
        <div className={styles.config}>
          <div className={styles.botonesPEGI}>
            <button>Todo público</button>
            <button>Todas</button>
          </div>
          <div className={styles.botonesDimensiones}>
            <button>2D</button>
            <button>3D</button>
          </div>
          <div className={styles.botonesIdioma}>
            <button>Español</button>
            <button>Subtítuladas</button>
          </div>
          <div className={styles.botonSoloEstrenos}>
            <button>Solo Estrenos</button>
          </div>
          <div className={styles.verTodas}>
            <button>Ver Todas</button>
          </div>
        </div>
      </div>

      <div className={styles.buscador}>
        <input className={styles.inputBuscador} placeholder='Buscar' />
      </div>

      <div className={styles.funciones}>

      <div className={styles.posterContenido}>
          <div className={styles.posterIndividual}>
            <Image src={postUnoTemp}
              alt='POSTER'
              className={styles.postImgTemp}
            />
            <div className={styles.nombrePelicula}>
              NOMBRE
            </div>
          </div>
        </div>
        
        <div className={styles.posterContenido}>
          <div className={styles.posterIndividual}>
            <Image src={postDosTemp}
              alt='POSTER'
              className={styles.postImgTemp}
            />
            <div className={styles.nombrePelicula}>
              NOMBRE
            </div>
          </div>
        </div>
        
        <div className={styles.posterContenido}>
          <div className={styles.posterIndividual}>
            <Image src={postTresTemp}
              alt='POSTER'
              className={styles.postImgTemp}
            />
            <div className={styles.nombrePelicula}>
              NOMBRE
            </div>
          </div>
        </div>

        <div className={styles.posterContenido}>
          <div className={styles.posterIndividual}>
            <Image src={postCuatroTemp}
              alt='POSTER'
              className={styles.postImgTemp}
            />
            <div className={styles.nombrePelicula}>
              NOMBRE
            </div>
          </div>
        </div>

        <div className={styles.posterContenido}>
          <div className={styles.posterIndividual}>
            <Image src={postCincoTemp}
              alt='POSTER'
              className={styles.postImgTemp}
            />
            <div className={styles.nombrePelicula}>
              NOMBRE
            </div>
          </div>
        </div>

      </div>

      <footer className={styles.pie}>
        <div className={styles.pieWeb}>
          calelsprumont.web.app
        </div>
        <div className={styles.pieContacto}>
          LinedIn
        </div>
      </footer>
    </main>
  )
}
