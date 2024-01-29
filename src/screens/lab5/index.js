import { ImageBackground, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import Button9 from "../../components/button9";


const Lab5 = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
                source={require('../../assets/images/cogai.png')}
                style={styles.image}>
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}>Discover   </Text>
                        <Text style={styles.secondLine}>would with us</Text>
                    </Text>
                    <Text style={styles.textStyle}>Discover would with us </Text>
                    <Button9 onPress={() => navigation.navigate('Flex')}></Button9>
                </View>
            </ImageBackground>
            
        </View>
    );
};
export default Lab5;