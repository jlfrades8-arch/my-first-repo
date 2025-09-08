import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function SampleComment() {
  const [comment, setComment] = useState(""); // current input
  const [comments, setComments] = useState([]); // list of comments

  const addComment = () => {
    if (comment.trim() === "") return; // prevent empty comments
    setComments([...comments, comment]); // add new comment to array
    setComment(""); // clear input
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>                     Comment App                   </Text>

      {/* Comment input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment...."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.button} onPress={addComment}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Comment list */}
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentBox}>
            <Text style={styles.commentText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  commentBox: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  commentText: {
    fontSize: 16,
  },
});