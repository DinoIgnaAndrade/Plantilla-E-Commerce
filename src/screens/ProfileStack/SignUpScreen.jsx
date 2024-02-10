import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/Inputs/Input';

import { useSignUpMutation } from '../../services/authServices';
import { setUser } from '../../features/authSlice';
import { signupSchema } from '../../validations/signupSchema';

const SignUpScreen = ({ navigation }) => {
  //States del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //AuthServices
  const [triggerSignUp, result] = useSignUpMutation();

  //SignUp Schema errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //Redux
  const dispatch = useDispatch();

  const onSubmit = () => {
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")
    try {
      signupSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
    } catch (error) {
      //console.log(error.errors)
      error.errors.map(e => {
        console.log(Object.keys(e)[0])
        const customError = Object.values(e)[0]
        switch (Object.keys(e)[0]) {
          case "empty_email":
            //console.log(customError)
            setEmailError(customError)
          case "invalid_email":
            //console.log(customError)
            setEmailError(customError)
          case "empty_password":
            //console.log(customError)
            setPasswordError(customError)
          case "invalid_password":
            //console.log(customError)
            setPasswordError(customError)
          case "invalid_confirm_password":
            //console.log(customError)
            setConfirmPasswordError(customError)
          case "invalid_match_password":
            //console.log(customError)
            setConfirmPasswordError(customError)
          default:
            break
        }

      });
    }
    triggerSignUp({ email, password })
  }

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data))
    }
  }, [result])


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <Input
          label={"Email:"}
          onChange={setEmail}
          error={emailError} />

        <Input
          label={"Contraseñá:"}
          onChange={setPassword}
          isSecureEntry={true}
          error={passwordError} />

        <Input
          label={"Repetir Contraseña:"}
          onChange={setConfirmPassword}
          isSecureEntry={true}
          error={confirmPasswordError} />

        <Pressable
          onPress={onSubmit}
          style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                borderRadius: 30,
            },
            styles.buttom
        ]}
        android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
    >
          <Text style={styles.text}>Registrarme</Text>
        </Pressable>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
        <Pressable
          onPress={null}
          style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                borderRadius: 30,
            },
            styles.subtitleLink
        ]}
        android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
    >
          <Text style={styles.subtitleText}>Ingresar</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 100,

    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    margin: 10,
    textAlign: 'center',
    fontSize: 60,
  },
  inputContainer: {
    borderRadius: 30,
    margin: 10,
    padding: 20,
    width: 400,
    backgroundColor: 'white'
  },
  buttom: {
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 20,
    marginTop:30,
    borderRadius: 50
  },
  text: {
    fontSize: 15,
    color: 'white'
  },
  signUpContainer: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    width: 400,
    backgroundColor: 'white'
  },
  subtitleLink: {
    alignSelf: 'center',
    backgroundColor: 'black',
    marginTop: 10,
    padding: 15,
    borderRadius: 50
  },
  subtitleText: {
    fontSize: 15,
    color: 'white'
  }
})