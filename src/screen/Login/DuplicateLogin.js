
import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function DuplicateLogin() {
    const { data, setData } = useState('')
    // const reduxData = useSelector((state) => state)
    // console.log("reduxData", reduxData);
    return (
        <View style={{ flex: 1, backgroundColor: '#ffff' }}>
            <View style={{ height: 170, width: 170, marginVertical: 20, marginHorizontal: 10, backgroundColor: 'red' }}>
                <Text>{"hi"}</Text>

            </View>


        </View>
    )
}
