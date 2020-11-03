import React from "react";
import { IonImg, IonRow, IonSpinner } from "@ionic/react";

//components
import Logo from "../assets/images/logo.png";

function FullLoading() {
  return (
    <div>
      <IonRow
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IonImg src={Logo} style={{ width: 150 + "px", height: 150 + "px" }} />

        <IonSpinner
          name="crescent"
          style={{
            width: 50 + "px",
            height: 50 + "px",
            color: "#20d662",
            marginTop: -50 + "px",
            marginLeft: 60 + "px",
            
          }}
        />
      </IonRow>
    </div>
  );
}

export default FullLoading;
