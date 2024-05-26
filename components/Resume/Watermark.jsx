import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const Watermark = ({ text }) => (
    <View style={styles.watermarkContainer}>
        <Text style={styles.watermarkText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    watermarkContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.2,
    },
    watermarkText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        transform: 'rotate(-45deg)'
    },
});

export default Watermark;
