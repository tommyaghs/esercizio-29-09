import React from 'react';
import './App.css';
import { IPnOS, IPnDeviceMetadata, IPnMessage, IPnDevice, IPnUser, IPnAppConfig, IPnApp, IPnMessageOptions, IPnMessageDeliver, IPnUserMetadata } from './App-interfaces';

// CLASSI BASATE SU E.R. PUSH NOTIFICATION

class PnMessage implements IPnMessage {
  constructor(
    public id: number,
    public correlationId: number,
    public title: string,
    public body: string,
    public subtitle: string,
    public language: string,
    public sender: string,
    public sentDate: Date,
    public link: string,
    public image: string
  ) {
  }
}

class PnMessageOptions implements IPnMessageOptions {
  constructor(
    public id: number,
    public androidIcon: string,
    public androidIconColor: string,
    public androidSound: string,
    public iosSound: string,
    public Message: PnMessage,
  ) { }
}

class MessageDeliver implements IPnMessageDeliver {
  constructor(
    public id: number,
    public message: PnMessage,
    public device: PnDevice,
    public user: PnUser,
    public sentDate: Date,
    public status: string,
    public readDate: Date
  ) { }
}

class PnDevice implements IPnDevice {
  constructor(
    public id: number,
    public app: PnApp,
    public os: PnOS,
    public registrationDate: Date,
    public lastLog: Date,
    public language: string,
    public enabled: number,
    public tester: number,
    public user: PnUser,
  ) { }
}

class PnDeviceMetadata implements IPnDeviceMetadata {
  constructor(
    public code: string,
    public value: string
  ) { }
}


class PnUser implements IPnUser {
  constructor(
    public id: number,
    public identifier: string,
    public registrationDate: Date,
    public lastLog: Date,
    public tester: number,
    public app: PnApp,
  ) { }
}
class PnUserMetadata implements IPnUserMetadata {
  constructor(
    public code: string,
    public value: string
  ) { }
}


class PnApp implements IPnApp {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public description: string
  ) { }
}

class PnAppConfig implements IPnAppConfig {
  constructor(
    public id: number,
    public app: PnApp,
    public os: PnOS,
    public appPackage: string,
    public senderService: string,
    public serverKey: string,
    public certPath: string,
    public secret: string,
    public production: number,
  ) { }
}

class PnOS implements IPnOS {
  constructor(
    public id: number,
    public name: string,
    public code: string
  ) { }
}


// Creazione istanze di prova
const app = new PnApp(1, "Instagram", "203", "Condividi le tue immagini");
const OperativeSystem = new PnOS(1, "Android", "12");
const user = new PnUser(1, "thomas@gmail.com", new Date(), new Date(), 0, app);
const device = new PnDevice(1, app, OperativeSystem, new Date(), new Date(), "it", 1, 0, user);
const deviceMetadata = new PnDeviceMetadata("metadataCode", "metadataValue");
const userMetadata = new PnUserMetadata("metadata1", "value1");
const appConfig = new PnAppConfig(1, app, OperativeSystem, "com.applicazione", "serviceprova", "keyprova", "certprova", "secretprova", 1);
const message = new PnMessage(1, 234, "Titolo Messaggio", "Questo e' il testo del messaggio", "Sottotitolo", "it", "Thomas Colamedici", new Date(), "https://links.com", "image.jpeg");
const messageOptions = new PnMessageOptions(1, "icona.png", "red", "sound.mp3", "android-sound.mp3", message);
console.log("Opzioni messaggio:", messageOptions);
const messageDeliver = new MessageDeliver(1, message, device, user, new Date(), "delivered", new Date());
console.log("Messaggio consegnato:", messageDeliver);



function App() {
  return (
    <div className="App">
      <div>
        <h2>Compito 29/09/2023</h2>
        <div className="mobile-phone">
          <div className="brove">
            <span className="speaker"></span>
          </div>
          <div className="screen"><div>
            <h1>ELENCO DELLE ISTANZE:</h1>
            <h1>Messaggio</h1>
            <p>ID Messaggio: {message.id}</p>
            <p>Titolo Messaggio: {message.title}</p>
            <p>Testo Messaggio: {message.body}</p>
            <h1>Informazioni dell'Applicazione</h1>
            <p>Nome App: {app.name}</p>
            <p>Codice App: {app.code}</p>
            <p>Descrizione App: {app.description}</p>

            <h1>Informazioni del Sistema Operativo</h1>
            <p>Nome OS: {OperativeSystem.name}</p>
            <p>Codice OS: {OperativeSystem.code}</p>

            <h1>Informazioni dell'Utente</h1>
            <p>Identificatore Utente: {user.identifier}</p>
            <p>Data Registrazione Utente: {user.registrationDate.toString()}</p>

            <h1>Informazioni del Dispositivo</h1>
            <p>ID Dispositivo: {device.id}</p>
            <p>Lingua Dispositivo: {device.language}</p>

            <h1>Metadati del Dispositivo</h1>
            <p>Codice Metadato: {deviceMetadata.code}</p>
            <p>Valore Metadato: {deviceMetadata.value}</p>

            <h1>Metadati dell'Utente</h1>
            <p>Codice Metadato: {userMetadata.code}</p>
            <p>Valore Metadato: {userMetadata.value}</p>

            <h1>Configurazione dell'App</h1>
            <p>Package App: {appConfig.appPackage}</p>
            <p>Service Sender: {appConfig.senderService}</p>
            <p>Server Key: {appConfig.serverKey}</p>
            <p>Cert Path: {appConfig.certPath}</p>
            <p>Secret: {appConfig.secret}</p>
            <p>Produzione: {appConfig.production}</p>
          </div>
          </div>
        </div>
      </div></div>
  );
}

export default App;
