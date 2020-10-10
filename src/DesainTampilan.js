import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesainTampilan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Belajar Desain Tampilan & Flexbox</Text>
                <View style={styles.garis} />

                {/* Isi  */}
                <View style={styles.isi}>
                    <Text>Flex Direction Row (Vertikal)</Text>
                    <View style={styles.flexVertikal}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakHijau}/>
                    </View>


                    <Text>Flex Direction Column (Horisontal)</Text>
                    <View>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakHijau}/>
                    </View>

                    <Text>Justify Content</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakHijau}/>
                    </View>

                    <Text>Align Item</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakHijau}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : { padding: 30 },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10
    },
    isi: {
        marginTop: 30
    },
    flexVertikal: {
        flexDirection: 'row'
    },
    kotakBiru: {
        width: 50,
        height: 30,
        backgroundColor: 'blue'
    },
    kotakMerah: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    kotakHijau: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    }      
})
