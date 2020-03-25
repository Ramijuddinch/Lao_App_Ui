import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AWSCognito from "amazon-cognito-identity-js";

@Injectable()
export class CognitoServiceProvider {
  _POOL_DATA = {
    UserPoolId: "us-east-2_aSvEj9Cz9",
    ClientId: "1d5mjvco21ih2gktutcafghfj3"
 };
  constructor(public http: HttpClient) {
    console.log('Hello CognitoServiceProvider Provider');
  }
  // signUp(userData) {
    signUp(userData) {
      console.log(userData,'cognito services');
      return new Promise((resolved, reject) => {
        const userPoolData = new AWSCognito.CognitoUserPool(this._POOL_DATA);
        let userAttribute = [];
        userAttribute.push(new AWSCognito.CognitoUserAttribute({ 
          Name: "username",
          Value: userData.mobileNo 
          }));
        userPoolData.signUp(userData.mobileNo, userData.Password, userAttribute, null, function (err, result) {
          if (err) {
            reject(err);
            console.log(err)
          } else {
            resolved(result);
            console.log(result)
          }
        });
      });
    }

    confirmUser(verificationCode, mobile) {
      console.log(verificationCode, mobile,'cognito')
      return new Promise((resolved, reject) => {
        const userPoolData = new AWSCognito.CognitoUserPool(this._POOL_DATA);
        const cognitoUser = new AWSCognito.CognitoUser({
          Username: mobile,
          Pool: userPoolData
        });
        cognitoUser.confirmRegistration(verificationCode, true, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolved(result);
          }
        });
      });
    }
  }
// }
