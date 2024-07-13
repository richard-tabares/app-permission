
export const getUserById = async (user, password) => {


    
    const api = `http://localhost/data/getUserById.php?user=${user}&password=${password}`

    const getData = await fetch(api, {
        method: 'GET'
    }
    )
    const json = await getData.json()

    return json

}
