import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
// import Inputs from './Inputs.js'
import Videosearch from './videosearch.js'
import List from './videolist.js'

const App = () => {
    return (<View>
            <Videosearch/>
            <List/>
        </View>
    )
}
export default App
