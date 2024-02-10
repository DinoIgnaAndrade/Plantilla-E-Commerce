import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TabNavigator from "./TabNavigator";

import { fetchData } from "../db";
import { setUser } from "../features/authSlice";

const MainNavigator = () => {

    const localId = useSelector(state => state.authReducer.localId)

    const dispatch = useDispatch()

// carga de ususario en SQLite
    useEffect(() => {
        (async ()=>{
            try {
                const localData = await fetchData(localId)
                if(localData?.rows.length){
                    const user = localData.rows._array[0]
                    dispatch(setUser(user))
                    console.log('Sesion Iniciada') 
                }
            } catch (error) {
                console.log('Data Error', error) 
            }
        })()
    }, [])

    return (
        <NavigationContainer>

            <TabNavigator />

        </NavigationContainer>
    )
}

export default MainNavigator;
