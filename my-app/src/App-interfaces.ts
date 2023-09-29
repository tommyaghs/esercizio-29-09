  // INTERFACES BASATE SU E.R. PUSH NOTIFICATION

  export interface IPnMessage {
    title: string;
    body: string;
    subtitle: string;
    language: string;
    sender: string;
    sentDate: Date;
    link: string;
    image: string;
  }

  export interface IPnMessageOptions {
    androidIcon?: string;
    androidIconColor?: string;
    androidSound?: string;
    iosSound?: string;
  }
  
 export interface IPnMessageDeliver {
    sentDate: Date;
    status: string;
    readDate: Date;
  }

 export interface IPnUserMetadata {
    code: string;
    value: string;
  }
  
 export interface IPnOS {
    name: string;
    code: string;
  }
  
 export interface IPnDevice {
    registrationDate: Date;
    lastLog: Date;
    language: string;
    enabled: number;
    tester: number;
  }
  
 export interface IPnDeviceMetadata {
    code: string;
    value: string;
  }

 export interface IPnUser {
    identifier: string;
    registrationDate: Date;
    lastLog: Date;
    tester: number;
  }
  
 export interface IPnAppConfig {
    appPackage: string;
    senderService: string;
    serverKey: string;
    certPath: string;
    secret: string;
    production: number;
  }
  
 export interface IPnApp {
    name: string;
    code: string;
    description: string;
  }
  