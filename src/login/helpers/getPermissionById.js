
export const getPermissionById = async (idPermission) => {
    const api = `http://localhost/data/getPermissionById.php?idPermission=${idPermission}`

    const getData = await fetch(api, {
        method: 'GET',
    })

    const json = await getData.json()

    return json
}
