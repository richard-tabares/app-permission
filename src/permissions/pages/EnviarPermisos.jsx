import { useState } from "react"

export const EnviarPermisos = () => {


    const permiso = {
        idUser: 1017155071,
        date: "2024-06-23",
        description: "Otro permiso de mierda",
        state: "Pendiente"
    }

    const [data, setData] = useState(permiso)

    const onChange = () => {

    }


    const enviarInfo = async () => {

        const res = await fetch('http://localhost/data/postPermission.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respuesta = await res.json()
        console.log(respuesta)

    }



    return (

        <>
            <div><label>idUser</label><input type="text" value={data.idUser} onChange={onChange} /></div>
            <div><label>date</label><input type="text" value={data.date} onChange={onChange} /></div>
            <div><label>descr</label><input type="text" value={data.description} onChange={onChange} /></div>
            <div><label>state</label><input type="text" value={data.state} onChange={onChange} /></div>
            <button onClick={enviarInfo}>Enviar</button>
        </>

    )
}
