import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SEO from '../components/seo'


export default function Home() {
    return (
      <>
        <SEO 
          description={ '¿Quieres traer tu emprendimiendo a Internet? ¡Te ayudamos a lograrlo!' }
          title={ process.env.APP_NAME }
          siteTitle={ 'Nuestros servicios'}
        />  
        <div
          className={'container d-flex flex-wrap flex-row'}
        >
        <section className={'col-12 col-md-7 col-sm-12 d-flex flex-column align-self-center'}>
          <h1 className={'accent'}>I'm Oscar Riascos</h1>
          <h3>
            Mi objetivo es ayudarte a aprovechar la tecnología.
          </h3>
          <section>
            <div className={'col-md-6 col-sm-8 d-flex justify-content-between mt-4'}>
              <a
                className={'btn btn-primary btn-lg col-6 col-sm-8 d-flex justify-content-evenly align-items-center'}
                href={'#servicios'}
                >
                Servicios 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                </a>
            </div>
          </section>
        </section>
        <section className={'col-5 d-md-flex align-items-center d-sm-none d-none'}>
          <Image
            src={"/guy_by_pikisuperstar.png"}
            title={'Imagen de @Pikisuperstar en Freepik'}
            alt={'Imágen de presentación sobre consultoría'}
            width={500}
            height={500}
            priority={true}
            className={'img-fluid img-ppal'}
          />
        </section>
        <section 
          className={'d-flex flex-row flex-wrap col-12 justify-content-around mt-5'}
          id={'servicios'}
          >
          <div className={'bg-ligth me-md-2 pt-2 text-center col-md-5 col-12 my-sm-2 my-2 tarjeta'}>
            <div className={'my-3 py-3'}>
              <h2 className={'display-6 fw-bolder'}>Redes Sociales</h2>
              <p className={'lead'}>Introducción y gestión</p>
            </div>
          </div>  
          <div className={'bg-ligth me-md-2 pt-2 text-center col-md-5 col-12 my-sm-2 my-2 tarjeta'}>
            <div className={'my-3 py-3'}>
              <h2 className={'display-6 fw-bolder'}>Soporte</h2>
              <p className={'lead'}>Asesorías</p>
            </div>
          </div>
          <div className={'bg-ligth me-md-2 pt-2 text-center col-md-5 col-12 my-sm-2 my-2 tarjeta'}>
            <div className={'my-3 py-3'}>
              <h2 className={'display-6 fw-bolder'}>Trámites Online</h2>
              <p className={'lead'}>Consulta de documentos</p>
            </div>
          </div> 
          <div className={'bg-ligth me-md-2 pt-2 text-center col-md-5 col-12 my-sm-2 my-2 tarjeta'}>
            <div className={'my-3 py-3'}>
              <h2 className={'display-6 fw-bolder'}>Páginas Web</h2>
              <p className={'lead'}>Diseño y creación</p>
            </div>
          </div>
          <div className={'bg-ligth me-md-2 pt-2 text-center col-md-5 col-12 my-sm-2 my-2 tarjeta'}>
            <div className={'my-3 py-3'}>
              <h2 className={'display-6 fw-bolder'}>Integraciones</h2>
              <p className={'lead'}>Con API`s de terceros</p>
            </div>
          </div>   
        </section>

        <div className={'d-flex justify-content-center col-12 mt-5'}>
          <Link
            href={'/contacto'}>
            <a className={'btn btn-primary btn-lg'}>
              Solicitar asesoría
            </a>
          </Link>
        </div>

      </div>
    </>
  )
}
