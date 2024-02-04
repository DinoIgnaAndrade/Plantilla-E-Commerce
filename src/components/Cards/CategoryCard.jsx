import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { setCategorySelected } from '../../features/shopSlice'

const CategoryCard = ({

    category,
    navigation

 }) => {

    const dispatch = useDispatch()

    return (
        <Pressable
            onPress={()=>{
                navigation.navigate('Category')
                dispatch(setCategorySelected(category))
                
            }}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                    borderRadius: 30,
                },
                styles.container
            ]}
            android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
        >
            <Text style={styles.text}>{category}</Text>
        </Pressable>
    )
}
export default CategoryCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginHorizontal: 2,
        borderRadius: 50,
    },
    text: {
        color: 'white',
        fontSize: 17,
    }
})