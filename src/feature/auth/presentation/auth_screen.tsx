import { View, StyleSheet, Text } from 'react-native';
import { images } from '../../../assets/images/index';
import CustomTextInput from '../../../core/components/text_input';
import { Formik } from 'formik';
import { authValidationSchema } from '../../../core/validations/auth_validation';


export default function AuthScreen() {
  const EmailIconSvg = images.EmailIconSvg;
  const LockIcon = images.LockIconSvg;
  const ObscureIconSvg = images.ObscureIconSvg;


  return (

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
            <View style={style.container}>
              <CustomTextInput
                leftIcon={<EmailIconSvg width={25} height={25} />}
                placeholder='Enter your email'
                containerStyle={style.input}
                value={values.email}
                onChange={(text) => {
                  setFieldValue('email', text);
                  handleChange('email');
                  console.log("email:", text);
                }}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={{ color: 'red', marginTop: 10, marginLeft: 30, alignSelf: 'flex-start' }}>{errors.email}</Text>
              )}
              <View style={{ height: 25 }}></View>
              <CustomTextInput
                leftIcon={<LockIcon width={25} height={25} />}
                rightIcon={<ObscureIconSvg width={25} height={25} />}
                placeholder='Enter your password'
                containerStyle={style.input}
                secureTextEntry={true}
                value={values.password}
                onBlur={handleBlur('password')}
                onChange={(text) => {
                  setFieldValue('password', text);
                  handleChange('password')
                  console.log("Text:", text);
                }}
              />
              {touched.password && errors.password && (
                <Text style={{ color: 'red', marginTop: 10, marginLeft: 30, alignSelf: 'flex-start' }}>{errors.password}</Text>
              )}
            </View>
          );
        }
      }
    </Formik>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '90%',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row'
  },

})
