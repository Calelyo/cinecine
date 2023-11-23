import styles from '../estilos/utilidad/pantallaCarga.module.css'
import Image from 'next/image'
import logoUno from '../img/utilidad/cinecinelogo1.png'
import logoDos from '../img/utilidad/cinecinelogo2.png'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PantallaCarga(){
    const [cargando, setCargando] = useState(true)
    useEffect(()=>{
        document.addEventListener('load', setCargando(false))
    })

    return(
        <section className={`${styles.seccionCargando}`}>
            <div className={`${styles.contenedorAnimacionCargando} ${!cargando && styles.listo}`}>
                <div className={`${styles.contenedorLogosAmbos} ${!cargando && styles.logosListo}`}>
                    <div className={styles.contenedorLogoCargando}>
                        <Image
                            src={logoUno}
                            alt={`Logotipo CineCine`}
                            className={`${styles.imgLogoAnimacion} ${styles.imgLogoAnimacionUno}`}
                            priority={true}
                        />
                    </div>
                    <div className={styles.contenedorLogoCargando}>
                        <Image
                            src={logoDos}
                            alt={`Logotipo CineCine`}
                            className={`${styles.imgLogoAnimacion} ${styles.imgLogoAnimacionDos}`}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}