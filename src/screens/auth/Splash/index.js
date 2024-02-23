import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {stylesSplash} from '../Splash/styles'
import Button from '../../../components/Button';
const Splash = ({navigation}) => {
  return (
           <View style={stylesSplash.container}>
            <Image
                resizeMode='contain'
                style = {stylesSplash.img}
                source={require('../../../assets/imSplash.png')}
            />
            <View style={stylesSplash.titleContainer}>
                <Text style={stylesSplash.title}>You'll Find</Text>
                <Text style={[stylesSplash.title, stylesSplash.innerTitle]}>All you need</Text>
                <Text style={stylesSplash.title}>Here!</Text>
            </View>

            <Button 
             onPress={() => navigation.navigate('SignUp')}
             title="Sign Up"/>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text style={stylesSplash.footerText}>Sign in</Text>
            </Pressable>
        </View>
  );
};

export default Splash;
// const Splash = () =>{
//     return(
//         <View style={stylesSplash.container}>
//             <Image
//                 resizeMode='contain'
//                 style = {stylesSplash.img}
//                 source={require('../../../assets/imSplash.png')}
//             />
//             <View style={stylesSplash.titleContainer}>
//                 <Text style={stylesSplash.title}>You'll Find</Text>
//                 <Text style={[stylesSplash.title, stylesSplash.innerTitle]}>All you need</Text>
//                 <Text style={stylesSplash.title}>Here!</Text>
//             </View>

//             <Button title="Sign Up"></Button>
//             <Pressable>
//                 <Text style={stylesSplash.footerText}>Sign in</Text>
//             </Pressable>
//         </View>
//     );
// };

// export default Splash;

