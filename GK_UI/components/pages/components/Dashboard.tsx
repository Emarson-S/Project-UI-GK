import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../../styles';

const Dashboard: React.FC = () => {
    return (
        <View style={styles.container}>

            <View style={styles.logoTitleFlx}>
                <View style={styles.logoBG}>
                    <Image source={require('../../../assets/images/GK-Logo.png')} style={styles.logo} />
                </View>

                <View>
                    <Text style={styles.title}>Grama Kanaku</Text>
                </View>

                <Text style={styles.dashboardTitle}>Welcome to Dashboard</Text>
            </View>
        </View>
    )
}

export default Dashboard;