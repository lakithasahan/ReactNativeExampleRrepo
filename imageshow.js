import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch'
    }
});

class Image_ extends Component {

    state = {
        images: [
            {
                id: 0,
                url: 'https://i.ytimg.com/vi/3IjO1sKhP_8/hqdefault.jpg',
            },
        ]
    }

    render() {

        return (


            <View>
                <Image style={styles.stretch} source={{uri: 'https://i.ytimg.com/vi/3IjO1sKhP_8/hqdefault.jpg'}}>

                </Image>


            </View>


        )


    }


}

export default Image_
