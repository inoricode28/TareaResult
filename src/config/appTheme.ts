import { StyleSheet } from 'react-native';

export const colors = {
    darkGray: '#2D2D2D',
    ligthGray: '#9B9B9B',
    orange: '#FF9427',
    backgroundColor: 'black',
    resultColor: '#FFFFFF'
}

export  const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: colors.resultColor,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400'
    },
    subResult: {
        color: colors.ligthGray,
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '400'
    },
    button:{
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    containerResult:{
        paddingHorizontal: 20,
        paddingBottom: 20
    }
  })