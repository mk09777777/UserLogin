import { ScaledSheet } from "react-native-size-matters";


const Detailstyles = ScaledSheet.create({
    background: {
        flex: "1",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column"
    },
    H1: {
        color: "black",
        fontWeight: "bold",
        marginTop: "20@vs",
        fontSize: "25@ms",
        marginLeft: "50@s"
    },
    H2: {
        color: "black",
        fontWeight: "bold",
        marginTop: "25@vs",
        fontSize: "25@ms",
        marginLeft: "60@s"
    },
    P1: {
        color: "rgb(139, 139, 139)",
        fontSize: "15@ms",
        marginLeft: "40@s",
        marginTop: "5@vs",
    },
    P12: {
        color: "rgb(139, 139, 139)",
        fontSize: "15@ms",
        marginLeft: "50@s",
        marginTop: "5@vs",
    },
    P22: {
        color: "rgb(107, 107, 107)",
        fontSize: "15@ms",
        marginLeft: "30@s",
        marginTop: "25@vs",
        fontWeight: "bold"
    },
    P2: {
        color: "rgb(107, 107, 107)",
        fontSize: "15@ms",
        marginLeft: "30@s",
        marginTop: "30@vs",
        fontWeight: "bold"
    },
    P3: {
        color: "rgb(107, 107, 107)",
        fontSize: "15@ms",
        marginLeft: "30@s",
        marginTop: "50@vs",
        fontWeight: "bold"
    },
    picker: {
        height: "20@vs",
        width: "280@s",
        marginTop: "10@vs",
        marginLeft: "30@s",
        borderRadius: "10@ms",
        borderColor: "rgba(125, 125, 125, 0.729)",
        color: "black",
        backgroundColor: "  rgb(244, 243, 243)",
        fontSize: "15@ms",


    },
    date: {
        height: "40@vs",
        width: "280@s",
        marginTop: "10@vs",
        marginLeft: "30@s",
        borderRadius: "10@ms",
        borderColor: "rgba(125, 125, 125, 0.729)",
        borderWidth: 1,  
        color: "black",
        backgroundColor: "rgb(244, 243, 243)",
        fontSize: "14@ms",
        paddingLeft: 20,
    },
    
    dropdown: {
        height: "1000@vs",
        width: "280@s",
        marginTop: "10@vs",
        marginLeft: "30@s",
        borderRadius: "10@ms",
        borderColor: "rgba(125, 125, 125, 0.729)",
        color: "black",
        backgroundColor: "  rgb(244, 243, 243)",
        top: 50,
        zIndex: 1000,
        fontSize: "15@ms",
    },
    genderselect:{
        height:"45@vs",
        width:"130@s",
        backgroundColor: " rgb(244, 243, 243)",
        color: "black",
        fontSize: "15@ms",
        display:"flex",
        flexDirection:"row",
        marginLeft: "30@s",
        marginTop:"14@vs",
        borderRadius:"10@ms",
        borderColor:"rgba(125, 125, 125, 0.729)",
        borderWidth: 1,  
        
    },
    genderselect2:{
        height:"45@vs",
        width:"130@s",
        backgroundColor: " rgb(169, 241, 201)",
        color: "white",
        fontSize: "15@ms",
        display:"flex",
        flexDirection:"row",
        marginLeft: "30@s",
        marginTop:"14@vs",
        borderRadius:"10@ms",
        borderColor:"rgba(125, 125, 125, 0.729)",
        borderWidth: 1,  
        
    },
    genderimg:{
        height:"20@vs",
        width:"20@s",
        marginLeft:"20@s",
        marginTop:"15@vs",
    },
    gendertext:{
        color:"black",
        fontSize:"14@ms",
        marginLeft:"10@ms",
        marginTop:"15@vs",
    },
    gendertext2:{
        color:"black",
        fontSize:"14@ms",
        marginLeft:"10@ms",
        marginTop:"15@vs",
    },
    signupbutton: {
        height: "45@vs",
        width: "280@s",
        marginLeft: "34@s",
        backgroundColor: "  rgb(124, 185, 151)",
        borderRadius: "10@ms",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "27@vs",
        marginBottom:"10@vs"
    
      },
      signup: {
        marginRight: "8@s",
        fontSize: "22@ms",
        fontWeight: "normal",
        color: "white"
      },
});
export default Detailstyles;