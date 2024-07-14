
export const getUserById = async (idUser, password) => {


    
    const api = `http://localhost/data/getUserById.php?idUser=${idUser}&password=${password}`

    const getData = await fetch(api, {
        method: 'GET'
    }
    )
    const json = await getData.json()

    return json

}
