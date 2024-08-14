
export const putPermissionState = async (idPermission, buttonState) => {

    const api = `http://localhost/data/putPermissionState.php?idPermission=${idPermission}&buttonState=${buttonState}`

    const getData = await fetch(api, {
        method: 'PUT'
    }
    )
    const json = await getData.json()
    console.log(json)

    return json
}
