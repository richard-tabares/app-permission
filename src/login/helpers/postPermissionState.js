
export const postPermissionState = async (idPermission, buttonState) => {

    const api = `http://localhost/data/postPermissionState.php?idPermission=${idPermission}&buttonState=${buttonState}`

    const getData = await fetch(api, {
        method: 'GET'
    }
    )
    const json = await getData.json()
    console.log(json)

    return json
}
