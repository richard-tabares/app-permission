import { BiBody } from "react-icons/bi"

export const putRequestPermission = async (dataPermissoin) => {
  
    const api = `http://localhost/data/putRequestPermission.php`

    const getData = await fetch(api, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPermissoin)
    }
    )
    const json = await getData.json()
    return json
}
