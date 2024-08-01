import { BiBody } from "react-icons/bi"

export const postRequestPermission = async (dataPermissoin) => {
  
    const api = `http://localhost/data/postRequestPermission.php`

    const getData = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPermissoin)
    }
    )
    const json = await getData.json()
    return json
}
