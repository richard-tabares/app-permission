import { Link } from 'react-router-dom'

export const Requests = () => {
  return (


    <section className=" grid place-content-center w-screen h-screen p-10 bg-gray-dark">

      <header className="text-center">

        <div className='flex justify-center'>

          <img src="/assets/images/logo.webp" alt="Logo" className="mb-10" />

        </div>

        <h2 className="title mb-2 text-white">Peticiones</h2>
        <p className="subtitle text-white">Aca puedes hacer tus peticiones para permisos y cartas laborales</p>

      </header>

      <section className='grid gap-5 text-center mt-10'>

        <Link to={'/radicarPermiso'} >

          <span className="btn-peticiones">
            Permisos
          </span>

        </Link>

        <Link to={'/radicarCertificado'} >

          <span className="btn-peticiones">
            Certificados
          </span>

        </Link>

      </section>

    </section>
  )
}
