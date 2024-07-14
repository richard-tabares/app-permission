
export const getUser = async (idUser) => {
  
    const api = `http://localhost/data/getUserById.php?idUser=${idUser}`

    const getData = await fetch(api, {
        method: 'GET'
    }
    )
    const json = await getData.json()

    return json

}
