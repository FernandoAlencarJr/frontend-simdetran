import React from "react";
//Ionic Import
import { IonImg, IonPage, IonCard } from "@ionic/react";
//images
import Logo from "../assets/images/nomeverde.png";

function HomePage() {
  return (
    <IonPage>
      <IonCard
        class="Card-HomePage"
        style={{
          width: 90 + "%",
          height: 100 + "vh",
          backgroundColor: "#c4c4c4",
          color: "#c4c4c4",
          margin: "auto",
          marginBottom: 3 + "vh",
          marginTop: 3 + "vh",
        }}
      ></IonCard>

      <IonCard
        class="Card-HomePage"
        style={{
          width: 90 + "%",
          height: 100 + "vh",
          backgroundColor: "#c4c4c4",
          color: "#c4c4c4",
          margin: "auto",
          marginBottom: 3 + "vh",
        }}
      ></IonCard>

      <IonCard
        class="Card-HomePage"
        style={{
          width: 90 + "%",
          height: 100 + "vh",
          backgroundColor: "#c4c4c4",
          color: "#c4c4c4",
          margin: "auto",
          marginBottom: 3 + "vh",
        }}
      ></IonCard>

      <IonCard
        class="Card-HomePage"
        style={{
          width: 90 + "%",
          height: 100 + "vh",
          backgroundColor: "#c4c4c4",
          color: "#c4c4c4",
          margin: "auto",
          marginBottom: 3 + "vh",
        }}
      ></IonCard>

      <IonImg
        src={Logo}
        style={{
          height: 10 + "%",
          marginBottom: 3 + "%",
        }}
      />
    </IonPage>
  );
}

export default HomePage;
