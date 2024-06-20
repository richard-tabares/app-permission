import { PermissionCard } from "../components/PermissionCard"
import { SelectFilter } from "../components/SelectFilter"
//importar el helper que nos muestra todas los permisos del jefe pasandole el parametro de idUser

export const PermissionsPage = () => {
  return (

      <section className="p-8 grid gap-6">

        <header className="grid gap-2">

          <h2 className="title">Permisos</h2>
          <p className="subtitle">Permisos radicados por mi personal a cargo</p>

        </header>

        {/* a este componente le pasamos las consulta de los usuarios a cargo */}
        <SelectFilter />
        
      {/* a este componente le enviamos el objeto de la consulta de permisos */}
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
