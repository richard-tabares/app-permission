
export const getPermissionsByState = async (selectState = '', idUser = '') => {
    

    const api = `http://localhost/data/getPermissionsByState.php?selectState=${selectState}&idUser=${idUser}`

    const getData = await fetch(api, {
        method: 'GET',
    })

    const json = await getData.json()

    return json
}
