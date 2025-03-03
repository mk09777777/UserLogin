import { ScaledSheet } from "react-native-size-matters";


const Cardstyles = ScaledSheet.create({
    background: {
        flex: 1,
        backgroundColor: "white",

    },
    headingcontainer: {
        display: "flex",
        flexDirection: "row",
        

    },
    profilecard: {
        marginTop: "20@vs",
        color: "black",
        fontWeight: "bold",
        fontSize: "21@ms",
        marginLeft: "120@s"
    },
    logoutimg: {
        height: "26@vs",
        width: "26@s",
        marginLeft: "87@s",
        position:"absolute",
        bottom:0

    },
    Card: {
        display: "flex",
        flexDirection: "column",
        marginTop: "20@vs",
       
    },
    profileimg: {
        height: "80@s",
        width: "80@s",
         marginLeft: "20@s"
    },
    T1:{
        color:"black",
        fontSize:"21@ms",
        marginTop:"12@vs",
        fontWeight:"bold",
         marginLeft: "20@s"
    },
    T12:{
        color:"black",
        fontSize:"21@ms",
        marginTop:"27@vs",
        fontWeight:"bold",
         marginLeft: "20@s"
    },
    T2:{
        color:" rgb(160, 158, 158)",
        fontSize:"19@ms",
        marginTop:"8@vs",
         marginLeft: "20@s"
    },
    logo:{
       height:"28@s",
       width:"28@s",
       

    },
    personalcontainer:{
        marginTop:"20@vs",
        display:"flex",
        flexDirection:"row",
         marginLeft: "20@s"
    },
    personalcontainer2:{
        marginTop:"10@vs",
        display:"flex",
        flexDirection:"row",
         marginLeft: "20@s"
    },
    personalcontainer3:{
        marginTop:"14@vs",
        display:"flex",
        flexDirection:"row",
         marginLeft: "20@s"
    },
    P1:{
        color:"black",
        fontSize:"16@ms",
        marginLeft:"6@s",
        
    },
    P12:{
        color:"black",
        fontSize:"16@ms",
        marginLeft:"6@s",
        marginTop:"5@vs",
        
    },
    Dietarycontainer:{
        marginTop:"16@vs",
        height:"26@vs",
        width:"110@s",
        borderRadius:"20@ms",
        backgroundColor:"rgb(198, 248, 220)",
        
          marginLeft: "17@s"
        
    },
    dietaryText:{
        color:"rgb(50, 175, 106)",
        fontSize:"14@ms",
        marginLeft:"18@s",
        marginTop:"4@vs",
        fontWeight:"bold"
    },
    Dietarycontainer2:{
        marginTop:"16@vs",
        height:"26@vs",
        width:"140@s",
        borderRadius:"20@ms",
        backgroundColor:"rgb(248, 198, 198)",
        display:"flex",
        flexDirection:"row",
     
         marginLeft: "17@s"
        
    },
    dietaryText2:{
        color:"rgb(213, 80, 80)",
        fontSize:"14@ms",
        marginLeft:"10@s",
        marginTop:"4@vs",
        fontWeight:"bold"
    },
    dangerLogo:{
        height:"22@s",
        width:"22@s",
        marginLeft:"15@s",
        marginTop:"2@vs"
    },
    logoutbutton:{
        marginTop:"34@vs",
        height:"38@vs",
        width:"270@s",
        borderRadius:"13@ms",
        backgroundColor:"rgb(124, 185, 151)",
        display:"flex",
        flexDirection:"row",
        marginLeft: "33@s",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
    ,
    outLogo:{
        height:"28@s",
        width:"28@s",
        marginLeft:"65@s",
        marginTop:"6@vs"
    },
    LogoutText:{
        color:"rgb(255, 255, 255)",
        fontSize:"24@ms",
        marginLeft:"30@s",
        marginTop:"4@vs",
        fontWeight:"bold"
    },


});
export default Cardstyles;