import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors,
    mainText: {
        margin: 3,
        color: colors.text,
        ...Platform.select({
            ios: {
                fontSize: 24,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 22,
                fontFamily: "Roboto",
            }
        }),


    },
    descriptionText: {
        margin: 1,
        color: colors.gray,
        ...Platform.select({
            ios: {
                fontSize: 16,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 14,
                fontFamily: "Roboto",
            }
        }),

    },
    titletext: {
        color: colors.text,
        ...Platform.select({
            ios: {
                fontSize: 30,
                fontFamily: "Avenir",

            },
            android: {
                fontSize: 28,
                fontFamily: "Roboto",
            }
        }),
        margin: 7,
        fontWeight: 'bold',
    }
}