import { ScaledSheet } from "react-native-size-matters";

const Loginstyles = ScaledSheet.create({
  backgroundimage: {
    flex: 1,
    resizeMode: "cover",

  },
  headingcontainer: {
    marginLeft: "20@s",
    marginTop: "39@vs",
  },
  heading1: {
    color: "black",
    fontFamily: "san-serif",
    fontSize: "29@ms",
    marginLeft:"40@s",
    marginTop:"15@vs",
    fontWeight:"bold"
    

  },
  namelabel:{
    color:"black",
    fontSize:"18@ms",
    marginTop:"30@vs",
    marginLeft:"40@s"
  },
  emaillabel:{
    color:"black",
    fontSize:"18@ms",
    marginTop:"16@vs",
    marginLeft:"40@s"
  },
  heading2: {
    color: "white",
    fontFamily: "san-serif",
    fontSize: "15@ms",
    marginTop: "7@vs",
  },
  heading3: {
    color: "white",
    fontFamily: "san-serif",
    fontSize: "15@ms",
    marginTop: "3@vs",
  },
  logincontainer: {
    marginLeft: "24@s",
    marginRight: "20@s",
    marginTop: "70@vs",
    height: "430@vs",
    width: "300@s",
    borderWidth: "1@ms",
    borderRadius: "30@ms",
    borderColor: "#d3d3d3",
    backgroundColor: " rgba(240, 248, 255, 0.7)",
    backdropFilter: "blur(100px)",
    WebkitBackdropFilter: "blur(100px)",
  },
  loginbutton: {
    height: "50@vs",
    width: "220@s",
    marginLeft: "70@s",
    backgroundColor: "white",
    borderRadius: "10@ms",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "25@vs",
  },
  login: {
    marginRight: "8@s",
    fontSize: "22@ms",
    fontWeight: "normal"
  },
  namesignin: {
    height: "47@vs",
    width: "230@s",
    marginLeft: "40@s",
    marginTop: "4@vs",
    borderWidth: "1@ms",
    borderRadius: "10@ms",
    borderColor: "rgba(180, 180, 180, 0.795)",
    fontSize: "18@ms",
    backgroundColor:"rgba(240, 240, 240, 0.73)",
    paddingLeft: 20,
  },
  emailsignin: {
    height: "47@vs",
    width: "230@s",
    marginLeft: "40@s",
    marginTop: "4@vs",
    borderWidth: "1@ms",
    borderRadius: "10@ms",
    borderColor: "rgba(180, 180, 180, 0.795)",
    fontSize: "18@ms",
     backgroundColor:"rgba(240, 240, 240, 0.73)",
     paddingLeft: 20,
  },
  signupbutton: {
    height: "45@vs",
    width: "240@s",
    marginLeft: "30@s",
    backgroundColor: "  rgb(124, 185, 151)",
    borderRadius: "10@ms",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "27@vs",

  },
  signup: {
    marginRight: "8@s",
    fontSize: "22@ms",
    fontWeight: "normal",
    color: "white"
  },
  emailcontainer:{
     display:"flex",
     flexDirection:"row",
     
  },
  sendotpbutton: {
    height: "40@vs",
    width: "70@s",
    marginLeft: "10@s",
    backgroundColor: "  rgb(124, 185, 151)",
    borderRadius: "20@ms",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "19@vs",
  },
  sendotp: {
    fontSize: "15@ms",
    fontWeight: "normal",
    color: "white"
  },

});

export default Loginstyles;
