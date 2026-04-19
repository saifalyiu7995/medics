import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { images } from '../../../assets/images/index';
import CustomTextInput from '../../../core/components/text_input';
import { Formik } from 'formik';
import { authValidationSchema } from '../../../core/validations/auth_validation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { inter18Regular } from '../../../theme/fonts';


export default function AuthScreen() {
  const EmailIconSvg = images.EmailIconSvg;
  const LockIcon = images.LockIconSvg;
  const ObscureIconSvg = images.ObscureIconSvg;
  const BackArrow = images.BackArrow;
  const AppleIcon = images.Apple;
  const GoogleIcon = images.Google;


  return (
    <SafeAreaView style={style.container}>
      <View style={{
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <BackArrow width={17} height={17} />
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Login</Text>
        <View></View>
      </View>
      <View style={{ height: 60 }}></View>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={() => { }}
        validationSchema={authValidationSchema}
        validateOnChange={true}
      >
        {
          ({ values, setFieldValue, handleChange,
            handleBlur,
            errors,
            touched, }) => {
            return (
              <View style={style.form}>
                <CustomTextInput
                  leftIcon={<EmailIconSvg width={25} height={25} />}
                  placeholder='Enter your email'
                  containerStyle={[style.input, touched.password && errors.password ? { borderColor: '#FF5C5C', } : { borderColor: '#E5E7EB', }]}
                  value={values.email}
                  onChange={(text) => {
                    setFieldValue('email', text);
                    handleChange('email');
                    console.log("email:", text);
                  }}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <View style={{ marginTop: 10, marginHorizontal: 25, alignSelf: 'flex-start' }}><Text numberOfLines={1} style={{ color: 'red', overflow: 'scroll', alignSelf: 'flex-start', fontSize: 11, }}>{errors.email}</Text></View>
                )}
                <View style={{ height: 25 }}></View>
                <CustomTextInput
                  leftIcon={<LockIcon width={25} height={25} />}
                  rightIcon={<ObscureIconSvg width={25} height={25} />}
                  placeholder='Enter your password'
                  containerStyle={[style.input, touched.password && errors.password ? { borderColor: '#FF5C5C', } : { borderColor: '#E5E7EB', }]}
                  secureTextEntry={true}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChange={(text) => {
                    setFieldValue('password', text);
                    handleChange('password')
                    console.log("Text:", text);
                  }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10, }}>
                  {touched.password && errors.password && (
                    <View style={{ width: '60%' }}><Text numberOfLines={1} style={{ color: 'red', overflow: 'scroll', alignSelf: 'flex-start', fontSize: 11, }}>{errors.password}</Text></View>
                  )}
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#199A8E', alignSelf: 'flex-end' }}>Forgot Password?</Text>
                </View>
                <View style={{ height: 50 }}></View>
                <TouchableOpacity style={style.loginButton}>
                  <Text style={style.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>


            );
          }
        }
      </Formik>
      <View style={{ height: 10 }}></View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 14, color: '#717784' }}>Don’t have an account?</Text>
        <Text style={{ fontSize: 14, color: '#199A8E' }}> Sign Up</Text>
      </View>
      <View style={{ height: 50 }}></View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
        <View style={{ backgroundColor: '#A1A8B0', width: '38%', height: 0.5 }}></View>
        <Text style={{ fontSize: 16, color: '#717784' }}>OR</Text>
        <View style={{ backgroundColor: '#A1A8B0', width: '38%', height: 0.5 }}></View>
      </View>
      <View style={{ height: 50 }}></View>
      <TouchableOpacity style={style.hollowButton}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <GoogleIcon width={20} height={20} style={{ marginLeft: 20, flex: 2, }} />
          <Text style={[style.hollowButtonText, { flex: 8, }]}>Sign in with Google</Text>
          <View style={{ flex: 1 }}></View>
        </View>
      </TouchableOpacity>
      <View style={{ height: 30 }}></View>
      <TouchableOpacity style={style.hollowButton}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <AppleIcon width={20} height={20} style={{ marginLeft: 20, flex: 2, }} />
          <Text style={[style.hollowButtonText, { flex: 8, }]}>Sign in with Apple</Text>
          <View style={{ flex: 1 }}></View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  /** Full width so children using `width: '%'` resolve against the screen, not a shrink-wrapped parent. */
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '90%',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginButton: {
    backgroundColor: '#199A8E',
    height: 55,
    width: '90%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  hollowButton: {
    backgroundColor: '#fff',
    borderColor: '#199A8E',
    borderWidth: 1,
    height: 55,
    width: '90%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: inter18Regular,
  },
  hollowButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: inter18Regular,
  },

})
