
export const getCertificateByState = async (selectState = '') => {

    const api = `http://localhost/data/getCertificatesByState.php?selectState=${selectState}`

    const getData = await fetch(api, {
        method: 'GET',
    })

    const json = await getData.json()

    return json

}
