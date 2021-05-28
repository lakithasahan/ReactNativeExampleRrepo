import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class Videosearch extends Component {
    state = {
        search_text: '',
    }
    handleSearchText = (text) => {
        this.setState({search_text: text})
    }

    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }


    get_videos = (text) => {
        fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC6FrQm2ZR2e6M3po4MWjvEA&maxResults=25&key=AIzaSyBZYJJ2m5w4yQphS7ngipFjJ4xCQaoeNR4', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);

                var data=responseJson['items']
                // console.log(data)

                for(var i=0;i<data.length;i++){
                    var play_list_title=data[i]['snippet']['localized']['title']
                    console.log(play_list_title)
                }

                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Email"
                           placeholderTextColor="#9a73ef"
                           autoCapitalize="none"
                           onChangeText={this.handleSearchText}/>


                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.get_videos(this.state.search_text)}>
                    <Text style={styles.submitButtonText}> Get videos </Text>
                </TouchableOpacity>



            </View>
        )
    }
}

export default Videosearch

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
