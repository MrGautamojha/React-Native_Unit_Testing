import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { navigateToClearStack } from "../../services/navigationService";

class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',

    }

  }
  navigateToClearStack1 = () => {
    navigateToClearStack('Detail')
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={{ marginTop: 60 }}></View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            value={this.state.email}
            onChangeText={(email) => {
              // setUser({ ...user, email: email })x/
              this.setState({ email: email })
            }}
            testID="EmailIds"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={''}
            onChangeText={(password) =>
              // setPassword(password)
              this.setState({ password: password })
            }

            testID="PasswordID"
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={navigateToClearStack} testID={"NavigationID"}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    profile: state,
  }
}
export default connect(mapStateToProps)(Login)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignSelf: "center",
    //justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "100%",
    height: 50,
    alignItems: "center",
    marginVertical: 20,
  },

  textInput: {
    height: 120,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginHorizontal: 20
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    alignSelf: 'center'


  },
});