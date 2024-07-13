
export const postCertificateState = async (idCertificate, buttonState) => {

    const api = `http://localhost/data/postCertificateState.php?idCertificate=${idCertificate}&buttonState=${buttonState}`

    const getData = await fetch(api, {
        method: 'GET'
    }
    )
    const json = await getData.json()
    console.log(json)

    return json
}
