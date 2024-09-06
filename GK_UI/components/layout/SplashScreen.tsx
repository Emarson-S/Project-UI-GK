import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Alert, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interface/types';
import styles from '../../styles';
import { RouteProp } from '@react-navigation/native';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
    navigation: SplashScreenNavigationProp;
    // route: LoginScreenRouteProp;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
    const [videoEnded, setVideoEnded] = useState(false);
    const [loginWithOtp, setLoginWithOtp] = useState(false);

    // useEffect(() => {
    //     if (route.params?.loginWithOtp !== undefined) {
    //         setLoginWithOtp(route.params.loginWithOtp);
    //     }
    // }, [route.params]);

    const onVideoEnd = () => {
        setVideoEnded(true);
    };

    const onVideoError = (error: any) => {
        Alert.alert('Video Error', JSON.stringify(error));
    };

    return (
        <View style={styles.container}>
            {!videoEnded && (
                <Video
                    source={require('../../assets/videos/gk-logo-gif.mp4')}
                    style={styles.backgroundVideo}
                    onEnd={onVideoEnd}
                    onError={onVideoError}
                    resizeMode="cover"
                    repeat={false}
                    controls={false}
                    fullscreen={false}
                    paused={false}
                    // rate={0.5} // For slow down the video
                    ignoreSilentSwitch="ignore"
                />
            )}
            {videoEnded && (

                <View style={styles.containerWrap}>
                    <ImageBackground
                        source={require('../../assets/images/background/triangle-bg.jpg')} // Replace with your image URL
                        style={styles.backgroundImage}
                        resizeMode="stretch"
                    >
                        <View style={styles.logoTitleFlx}>
                            <View style={styles.logoBG}>
                                <Image source={require('../../assets/images/GK-Logo.png')} style={styles.logo} />
                            </View>

                            <View>
                                <Text style={styles.title}>Grama Kanaku</Text>
                            </View>

                        </View>
                    </ImageBackground>

                    <ImageBackground
                        source={require('../../assets/images/background/triangle-bg.jpg')} // Replace with your image URL
                        style={styles.backgroundImage}
                        resizeMode="stretch"
                    >

                        <View style={styles.loginWrap}>

                            <Text style={styles.welcomeText}>Welcome to Grama Kanaku</Text>
                            <Text style={styles.welcomeSubText}>All expenses in one hand</Text>


                            <View style={styles.buttons}>
                                <TouchableOpacity style={styles.loginWithOtp} onPress={() => navigation.navigate('Login', { loginWithOtp: true })}>
                                    <Text style={styles.buttonText}>Login with OTP</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.loginWithOtp} onPress={() => navigation.navigate('Login', { loginWithOtp: false })}>
                                    <Text style={styles.buttonText}>Login with Password</Text>
                                </TouchableOpacity>

                                <View style={styles.dontHaveContainer}>
                                    <Text style={styles.dontHaveAc}>Don't have an account ?</Text>

                                    <TouchableOpacity style={styles.registerBtn} onPress={() => Alert.alert('Register Success !!!')}>
                                        <Text style={styles.buttonText}>Register Here</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>

                        </View>
                    </ImageBackground>
                </View>

            )}
        </View>
    );
};

export default SplashScreen;
