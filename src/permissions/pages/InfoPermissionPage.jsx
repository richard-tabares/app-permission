import { InfoPermission } from "../components/InfoPermission";

export const InfoPermissionPage = () => {
    return (

        <section className="p-8 grid gap-6">

            <header className="grid gap-2">

                <h2 className="title">Permisos</h2>
                <p className="subtitle">Permisos radicados por mi personal a cargo</p>

            </header>

            <InfoPermission />

        </section>

    )
}
