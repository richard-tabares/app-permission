
export const putCertificateState = async (idCertificate, buttonState) => {

    const api = `http://localhost/data/putCertificateState.php?idCertificate=${idCertificate}&buttonState=${buttonState}`

    const getData = await fetch(api, {
        method: 'PUT'
    }
    )
    const json = await getData.json()
    console.log(json)

    return json
}
