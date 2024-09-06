import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // Splash Screen CSS Satrts
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        // opacity: 0.8
        width: "100%"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
    containerWrap: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#ddd',
        width: "100%",
        // paddingBottom: 10
    },
    logoTitleFlx: {
        paddingTop: 0,
        padding: 20,
        // backgroundColor: '#fff',
        // background: rgb(76,175,80);
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: 0,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    logoBG: {
        marginTop: 0,
        height: 200,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
        margin: 'auto'
    },
    title: {
        marginTop: -30,
        color: '#1abc54',
        // opacity: 0.8,
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 2

    },
    backgroundImage: {

    },
    loginWrap: {
        backgroundColor: '#000',
        height: '100%',
        padding: 20,
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#1abc54',
        fontWeight: '500',
        marginBottom: 5,
    },
    welcomeSubText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#ddd',
        fontWeight: '400',
        marginBottom: 50
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
    },
    loginWithOtp: {
        marginTop: 20,
        borderColor: '#1abc54',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#1abc54',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    loginWithOtpText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1abc54',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    loginWithPassword: {
        backgroundColor: '#1abc54',
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',
        // marginBottom: 20
    },
    dontHaveContainer: {
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#1abc54',
        height: '100%'
    },
    dontHaveAc: {
        // backgroundColor: '#1abc54',
        fontSize: 15,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        // marginTop: 50,
        marginBottom: 15
    },
    registerBtn: {
        borderColor: '#1abc54',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#1abc54',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    register: {
        backgroundColor: '#1abc54',
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

    // Splash Screen CSS Ends

    // Login Css Starts 

    loginTextTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#1abc54',
        fontWeight: '600',
        marginBottom: 5,
    },

    loginContainer: {
        marginTop: 30
    },

    loginLabel: {
        color: '#fff',
        marginBottom: 10
    },

    loginInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
        color: '#ccc',
        width: "100%"
    },

    loginBtn: {
        marginTop: 40,
        borderColor: '#1abc54',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#1abc54',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    disabledBtn: {
        opacity: 0.65,
    },

    loginWithOtpLoginPage: {
        marginTop: 20,
        borderColor: '#1abc54',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    // Ends

    // Dashboard

    dashboardWrap: {
        padding: 20
    },

    dashboardTitle: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20
    }

    // 

});
export default styles;