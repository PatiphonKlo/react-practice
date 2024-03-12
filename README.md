## React+Vite+Firebase

## Setting up .env with firebase api key

VITE_APP_FIREBASE_API_KEY= firebase api key

## Installation

install Node.js  
https://nodejs.org/en

Install pagkage with npm

```bash
  npm install react-vite-firebase
```

Install firebase tools on terminal

```bash
  curl -sL firebase.tools | bash
```

Install Java  
https://www.oracle.com/java/technologies/downloads/#jdk17-windows

Install firebase emulators for firebase test  
https://firebase.google.com/docs/emulator-suite/connect_and_prototype

```bash
  cd react-vite-firebase
  firebase login
  firebase init
```

Setting Ports ## auth: 9099 firestore: 8080 database: 9000 storage: 9199

Start emulators  
https://firebase.google.com/docs/emulator-suite/install_and_configure

```bash
  firebase emulators:start --export-on-exit=export_directory
  ### if import_directory exists ###
  firebase emulators:start --import=import_directory --export-on-exit=export_directory
```

Run development server

```bash
  cd react-vite-firebase
  npm run dev
```

deploy rules

```bash
firebase deploy --only firestore
```

deploy hosting

```bash
firebase deploy --only hosting
```
