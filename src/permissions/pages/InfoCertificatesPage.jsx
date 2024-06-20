import { InfoCertificates } from '../components/InfoCertificates'

export const InfoCertificatesPage = () => {
    return (

        <section className="p-8 grid gap-6">

            <header className="grid gap-2">

                <h2 className="title">Certificados</h2>
                <p className="subtitle">Cartas laborales radicadas por mi personal a cargo</p>

            </header>

            <InfoCertificates />

        </section>

    )
}
