
export const getAllBosses = async () => {
  
    const api = `http://localhost/data/getAllBosses.php`

    const getData = await fetch(api, {
        method: 'GET'
    }
    )
    const json = await getData.json()

    return json

}
