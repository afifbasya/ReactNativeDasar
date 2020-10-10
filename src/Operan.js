import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Operan extends Component {
    render() {
        const { sekolah } = this.props
        return (
            <View>
                <Text>Ini adalah Props : {sekolah} </Text>
            </View>
        )
    }
}

export default Operan
