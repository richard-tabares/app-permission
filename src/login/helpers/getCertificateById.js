
export const getCertificateById = async (idCertificate) => {
    const api = `http://localhost/data/getCertificateById.php?idCertificate=${idCertificate}`

    const getData = await fetch(api, {
        method: 'GET',
    })

    const json = await getData.json()

    return json
}
