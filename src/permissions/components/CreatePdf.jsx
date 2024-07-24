import { Page, Document, Text, StyleSheet, View, Image, Font } from '@react-pdf/renderer'

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
    
});
// Font.register({
//     family: 'Roboto',
//     fonts: [
//         { src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2' }, // Regular
//         { src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.woff2', fontWeight: 'bold' }, // Bold
//     ],
// });
const styles = StyleSheet.create({
    page: {
        // flexDirection: 'row',
        backgroundColor: 'white',
        padding: 50,
        fontSize: '12px',
        fontFamily: 'Oswald',
    },
    section: {
        // margin: 10,
        // padding: 10,
        // flexGrow: 1
    },
    image: {
        width: 100,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    city: {
        fontWeight: '900'
    },
    date: {
        marginBottom: 20,
    },
    to: {
        marginBottom: 20,
    },
    subject: {
        fontWeight: 'bold',
        marginBottom: 20,
        textDecoration: 'underline'
    },
    resposne: {
        textAlign: 'justify',
        marginBottom: 30,
    },
    titlePermission: {
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    permission: {
        marginBottom: 30,
    },
    titleState: {
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    state: {
        marginBottom: 30,
    },
    footer: {
        marginBottom: 30,
    },
    att: {
        marginBottom: 50,
    },
    sign: {
        width: 120,
    },
    name: {
        fontWeight: 'bold',
    }
});

export const Pdf = ({ dataPermssion, dataBoss }) => (

    <Document>
        <Page size="letter" style={styles.page}>
            <View style={styles.section}>
                <Image style={styles.image} src="/assets/images/logo.png" />
                {/* <Text style={styles.title}>Respuesta Solicitud de Permiso</Text> */}
                <Text style={styles.city}>Remedios Antioquia</Text>
                <Text style={styles.date}>17/07/2024</Text>
                <Text style={styles.to}>Sr(Sra) {dataPermssion.name } </Text>
                <Text style={styles.subject}>ASUNTO: RESPUESTA SOLICITUD PERMISO</Text>
                <Text style={styles.resposne}>
                    Por medio de la presente, se certifica que el Sr./Sra. {dataPermssion.name}, con identificación número {dataPermssion.idUser}, quien se desempeña como {dataPermssion.position}, tiene registrado una peticion de permiso desde el día { dataPermssion.date }, con el siguiente estado.
                </Text>
                <Text style={styles.titlePermission}>MOTIVO:</Text>
                <Text style={styles.permission}>{ dataPermssion.description }</Text>
                <Text style={styles.titleState}>ESTADO DEL PERMISO:</Text>
                <Text style={styles.state}>{ dataPermssion.state }</Text>
                <Text style={styles.footer}>Este permiso ha sido autorizado conforme a las políticas de la empresa y a solicitud del empleado, quien ha cumplido con los requisitos establecidos.</Text>
                <Text style={styles.att}>Atentamente,</Text>

                <Image style={styles.sign} src={ dataBoss.sign } alt="signBoss" />
                <Text style={styles.name}>{ dataBoss.name }</Text>
                <Text style={styles.role}>{ dataBoss.position }</Text>
            </View>
        </Page>
    </Document>

)