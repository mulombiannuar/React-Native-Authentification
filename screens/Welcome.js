import React, { useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
} from "../components/styles";

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage
          resizeMode="cover"
          source={require("./../assets/img/expo-bg2.png")}
        />

        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>{"Ann Kinuthia"}</SubTitle>
          <SubTitle welcome={true}>{"annkinuthia@gmail.com"}</SubTitle>

          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require("./../assets/img/expo-bg1.png")}
            />
            <StyledButton onPress={() => navigation.navigate("Login")}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
