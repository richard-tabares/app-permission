
export const getPermissionsByState = async (selectState = '') => {
    

    const api = `http://localhost/data/getPermissionsByState.php?selectState=${selectState}`

    const getData = await fetch(api, {
        method: 'GET',
    })

    const json = await getData.json()

    return json
}
