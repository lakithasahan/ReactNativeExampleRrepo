import React, {Component, useRef} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";


class Video2 extends Component {

    render() {
        const playerRef = useRef();
        return (




                <YoutubePlayer
                    ref={playerRef}
                    height={400}
                    width={400}
                    videoId={'pj6k-EFxqAI'}
                />





        )


    }


}

export default Video2
