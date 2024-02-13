import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TabNavigator from "./TabNavigator";

import { fetchData } from "../db";
import { setPersonalInfo, setUser } from "../features/authSlice";

const MainNavigator = () => {

    const localId = useSelector(state => state.authReducer.localId)

    const dispatch = useDispatch()

    // carga de ususario en SQLite
    useEffect(() => {
        (async () => {
            try {
                const localData = await fetchData(localId)
                if (localData?.rows.length) {

                    const rows = localData.rows._array;
                    rows.forEach((row, index) => {
                        console.log(`Row ${index + 1}:`, row);
                    });

                    const user = localData.rows._array[0]
                    dispatch(setUser(user))
                    dispatch(setPersonalInfo(user))
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
