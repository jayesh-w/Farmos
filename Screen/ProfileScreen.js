import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

// import Emoji from 'react-native-emoji';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            // borderColor: "#000",
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            paddingBottom: 10,
            backgroundColor:"#00F",
            marginTop:15
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Image
              source={require("../assets/crop.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            
          </View>

          <Text
            style={{
                textAlign:"center",
                fontSize:25
            }}
          >Raju Farmer</Text>
          <View style={styles.postFooter}>
              <TouchableOpacity style={styles.profilebtn} activeOpacity={0.5}>
                <Text style={{ textAlign: "center" }}> Add Friends</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.profilebtn} activeOpacity={0.5}>
                <Text style={{ textAlign: "center" }}> Message</Text>
              </TouchableOpacity>
            </View>
          

          <View
            style={{
              width: "50%",
              marginLeft: "auto",
            }}
          >

          </View>
        </View>

        <View>
          <View className="post" style={styles.post}>
            <View className="postHeader" style={styles.postHeader}>
              <Image
                source={require("../assets/crop.jpg")}
                style={styles.postImage}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.postHeaderText}>Hello Farmer</Text>
                <Text style={styles.postHeaderTextSub}>
                  Mumbai, Maharashtra
                </Text>
              </View>
            </View>

            <View style={styles.postBody}>
              <Text style={styles.postBodyText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                totam. Aliquid eveniet consequatur fugiat natus commodi quidem
                minus quo eaque rerum distinctio non, et similique alias
                perspiciatis sed nihil. Impedit!
              </Text>
            </View>

            <View style={styles.postFooter}>
              <TouchableOpacity style={styles.likebtn} activeOpacity={0.5}>
                <Text style={{ textAlign: "center" }}> 5 Likes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.likebtn} activeOpacity={0.5}>
                <Text style={{ textAlign: "center" }}> 5 Dislikes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: 5,
    marginBottom:15
  },
  postImage : {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: 5,
    marginBottom:15
  },
  
  postHeader: {
    display: "flex",
    flexDirection: "row",
  },
  postHeaderText: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
  },
  postHeaderTextSub: {
    marginLeft: 10,
  },
  postBody: {
    padding: 5,
  },
  postBodyText: {
    fontSize: 15,
  },
  postFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  likebtn: {
    backgroundColor: "#ccc",
    padding: 20,
    margin: 10,
    width: "50%",
    textAlign: "center",
  },
  profilebtn: {
    backgroundColor: "#eee",
    padding: 20,
    margin: 10,
    width: "50%",
    textAlign: "center",
  },
  post: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
});

export default ProfileScreen;
