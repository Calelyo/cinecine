import styles from '../estilos/utilidad/footer.module.css'

import linkedInLogo from '../img/herramientas/linkedinblanco.png'
import gitHubLogo from '../img/herramientas/githubblanco.png'

import Image from 'next/image'

export default function Footer(){
    return(
        <section className={styles.seccionFooter}>
            <footer className={styles.pie}>
                <div className={styles.pieContenedor}>
                    <div className={styles.pieInformacion}>
                        <p className={styles.pieTexto}>Algunas de las tecnologías que se usaron para esta web fueron:</p>
                        <ul className={styles.pieLista}>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>Next13</li>
                        <li>Stable Diffusion</li>
                        <li>ChatGPT</li>
                        </ul>
                    </div>

                    <div className={styles.pieContacto}>
                        <div className={styles.pieIconos}>
                        <a href={ 'https://www.linkedin.com/in/calelsprumont/' } title='LinkedIn' target='_blank' rel='noopener noreferrer'>
                            <Image 
                            src={linkedInLogo}
                            alt={`LinkedIn`}
                            className={`${styles.linkedInImg} ${styles.logosContacto}`}
                            priority={true}
                            />
                        </a>
                        <a href={ 'https://github.com/Calelyo' } title='GitHub' target='_blank' rel='noopener noreferrer'>
                            <Image 
                            src={gitHubLogo} 
                            alt={`GitHub`}
                            className={`${styles.gitHubImg} ${styles.logosContacto}`}
                            priority={true}
                            />
                        </a>
                        </div>
                        <div className={`${styles.pieWeb}`}>
                        <a href={ 'https://calelsprumont.web.app/' } title='Calel Sprumont Web' target='_blank' rel='noopener noreferrer'>
                            calelsprumont.web.app
                        </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}