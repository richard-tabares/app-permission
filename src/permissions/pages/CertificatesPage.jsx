import { PermissionCard } from "../components/PermissionCard"
import { SelectFilter } from "../components/SelectFilter"

export const CertificatesPage = () => {
  return (

    <section className="p-8 grid gap-6">

        <header className="grid gap-2">

          <h2 className="title">Certificados </h2>
          <p className="subtitle">Cartas laborales radicadas por mi personal a cargo</p>

        </header>

        <SelectFilter />
        
        <PermissionCard />
        <PermissionCard />
        <PermissionCard />
        <PermissionCard />
        <PermissionCard />
        <PermissionCard />
        <PermissionCard />

    </section>
    
  )
}
