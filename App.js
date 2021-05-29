// import React from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
// // import Inputs from './Inputs.js'
//
// // import Image_ from "./imageshow";
// // import Videosearch from './videosearch.js'
// // import List from './videolist.js'
// import Video2 from "./video2";
// // import Mainmodule from './mainmodule.js'
//
// // import MyWeb from './webviewtest'
// const App = () => {
//     return (
//             <Video2/>
//
//     )
// }
// export default App
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}
