import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import styles from '../../../styles';
import { TextInput } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../interface/types';
import { RouteProp } from '@react-navigation/native';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
};


const LoginScreen: React.FC<Props> = ({ navigation, route }) => {

    const [loginWithOtp, setLoginWithOtp] = useState(route.params.loginWithOtp);
    const [showOtpField, setShowOtpField] = useState(false);

    // setLoginWithOtp(route.params);

    // useEffect(() => {
    //     setShowOtpField(loginWithOtp);
    // }, [loginWithOtp]);

    const [mobileNo, setmobileNo] = useState('');
    const [password, setPassword] = useState('');
    const [otpField, setOtpField] = useState('');

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isButtonDisabledByOTP, setIsButtonDisabledByOTP] = useState(true);
    const [isButtonDisabledForSendBtn, setIsButtonDisabledForSendBtn] = useState(true);

    const loginWithPassword = () => {
        if (mobileNo == '9360158201' && password == 'Admin@1') {
            Alert.alert('Login Successfull !!!');
            navigation.navigate('Dashboard');
            setmobileNo('');
            setPassword('');
        }
        else {
            Alert.alert('Login Failed.');
        }
    }

    const loginWithOTP = () => {
        if (mobileNo == '9360158201' && otpField == '123456') {
            Alert.alert('Login Successfull !!!');
            navigation.navigate('Dashboard');
            setmobileNo('');
            setOtpField('');
            setShowOtpField(false);
        }
        else {
            Alert.alert('Login Failed.');
        }
    }

    const loginOTP = () => {
        setLoginWithOtp(true);
        setmobileNo('');
        setPassword('');
    }

    const loginPassword = () => {
        setLoginWithOtp(false);
        setmobileNo('');
        setPassword('');
        setOtpField('');
        setShowOtpField(false);
    }

    const handleChangeMobileNo = (text: string) => {
        setmobileNo(text);

        // Enable the button only when the mobile number length is 10
        if (text.length === 10) {
            setIsButtonDisabled(false);
            setIsButtonDisabledForSendBtn(false);
        } else {
            setIsButtonDisabled(true);
            setIsButtonDisabledForSendBtn(true);
        }
    }

    const handleOtp = (text: string) => {
        setOtpField(text);

        // Enable the button only when the mobile number length is 10
        if (text.length === 6) {
            setIsButtonDisabledByOTP(false);
        } else {
            setIsButtonDisabledByOTP(true);
        }
    }

    const sendOtp = () => {
        if (mobileNo.length === 10) {
            Alert.alert('OTP Sent Successfully !!!');
            setShowOtpField(true);
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/background/triangle-bg.jpg')} // Replace with your image URL
                style={styles.backgroundImage}
                resizeMode="stretch"
            >
                <View style={styles.logoTitleFlx}>
                    <View style={styles.logoBG}>
                        <Image source={require('../../../assets/images/GK-Logo.png')} style={styles.logo} />
                    </View>

                    <View>
                        <Text style={styles.title}>Grama Kanaku</Text>
                    </View>

                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/images/background/triangle-bg.jpg')} // Replace with your image URL
                style={styles.backgroundImage}
                resizeMode="stretch"
            >

                <View style={styles.loginWrap}>

                    <Text style={styles.loginTextTitle}>Login to Grama Kanaku</Text>


                    {/* FOR LOGIN WITH PASSWORD */}

                    {!loginWithOtp ? (

                        // Password Login
                        <View style={styles.loginContainer}>

                            <Text style={styles.loginLabel}>Mobile Number</Text>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Enter Mobile Number"
                                placeholderTextColor={'#818181'}
                                value={mobileNo}
                                maxLength={10}
                                keyboardType='number-pad'
                                onChangeText={setmobileNo}
                            />

                            <Text style={styles.loginLabel}>Password</Text>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Enter Password"
                                placeholderTextColor={'#818181'}
                                value={password}
                                secureTextEntry
                                onChangeText={setPassword}
                            />

                            <TouchableOpacity style={styles.loginBtn} onPress={loginWithPassword}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.loginWithOtpLoginPage} onPress={loginOTP}>
                                <Text style={styles.loginWithOtpText}>Login with OTP</Text>
                            </TouchableOpacity>

                        </View>
                    ) : (
                        // Otp Login
                        <>
                            <View style={styles.loginContainer}>

                                <Text style={styles.loginLabel}>Mobile Number</Text>
                                <TextInput
                                    style={styles.loginInput}
                                    placeholder="Enter Mobile Number"
                                    placeholderTextColor={'#818181'}
                                    value={mobileNo}
                                    maxLength={10}
                                    keyboardType='number-pad'
                                    onChangeText={handleChangeMobileNo}

                                />

                                {showOtpField ? (
                                    <View>
                                        <Text style={styles.loginLabel}>OTP</Text>
                                        <TextInput
                                            style={styles.loginInput}
                                            placeholder="Enter OTP"
                                            placeholderTextColor={'#818181'}
                                            value={otpField}
                                            maxLength={6}
                                            keyboardType='number-pad'
                                            secureTextEntry
                                            onChangeText={handleOtp}
                                        />
                                    </View>
                                ) : (
                                    <>
                                    </>
                                )}

                                {!loginWithOtp ? (
                                    <TouchableOpacity style={styles.loginBtn} onPress={loginWithPassword}>
                                        <Text style={styles.buttonText}>Login</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <>
                                        {showOtpField ? (
                                            <TouchableOpacity style={[styles.loginBtn, isButtonDisabledByOTP && styles.disabledBtn]} disabled={isButtonDisabledByOTP} onPress={loginWithOTP}>
                                                <Text style={styles.buttonText}>Login</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity style={[styles.loginBtn, isButtonDisabledForSendBtn && styles.disabledBtn]} disabled={isButtonDisabledForSendBtn} onPress={sendOtp}>
                                                <Text style={styles.buttonText}>Send OTP</Text>
                                            </TouchableOpacity>
                                        )}
                                    </>
                                )}

                                {!loginWithOtp ? (
                                    <TouchableOpacity style={styles.loginWithOtpLoginPage} onPress={loginOTP}>
                                        <Text style={styles.loginWithOtpText}>Login</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <>
                                        <TouchableOpacity style={styles.loginWithOtpLoginPage} onPress={loginPassword}>
                                            <Text style={styles.loginWithOtpText}>Login with Password</Text>
                                        </TouchableOpacity>
                                    </>
                                )}



                                {/* <TouchableOpacity style={styles.loginWithOtpLoginPage} onPress={loginOTP}>
                                    <Text style={styles.loginWithOtpText}>Login with OTP</Text>
                                </TouchableOpacity> */}

                            </View>
                        </>
                    )}


                    {/* ENDS */}


                    {/* <Text style={styles.welcomeSubText}>All expenses in one hand</Text> */}


                    {/* <View style={styles.buttons}>
                                <TouchableOpacity style={styles.loginWithOtpLoginPage} onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.buttonText}>Login with OTP</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.loginWithOtpLoginPage} onPress={() => Alert.alert('Login with otp Success !!!')}>
                                    <Text style={styles.buttonText}>Login with Password</Text>
                                </TouchableOpacity>

                                <View style={styles.dontHaveContainer}>
                                    <Text style={styles.dontHaveAc}>Don't have an account ?</Text>

                                    <TouchableOpacity style={styles.registerBtn} onPress={() => Alert.alert('Login with otp Success !!!')}>
                                        <Text style={styles.buttonText}>Register Here</Text>
                                    </TouchableOpacity>
                                </View>


                            </View> */}

                </View>
            </ImageBackground >
        </View >
    );
};

export default LoginScreen;
