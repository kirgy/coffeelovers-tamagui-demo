# #cop-coffee-lovers
At Zoe a small community love our coffee and meet reguarly online to share and appreciate our morning cup. This app is a silly example of how we could create a cross-platform application to serve us in sharing our chosen coffees for the week and allow us to rate them. This isn't a serious app, contains daft code practices, doesn't persist data and doesn't connect to a server. It's a demo piece.

## 🔦 About
This is a demo Tamagui app, showing how to build a fully-fledged cross-platform app (iOS, Android, Web) from a single codebase, using Expo and NextJS as Native/Web development frameworks. This project was started with the `Tamagui + Solito + Next + Expo Monorepo` start kit provided by Tamagui. Some of the following documentation is ripped straight from their starter doc.

This was used as a demo piece for a talk on Tamagui at React Native London's event in Bristol UK on `2024-05-16` by Chris McKirgan; [Run Faster by Writing Less: Building Cross-Platform Apps with Tamagui](https://guild.host/events/react-native-bristol-5ux9l1).

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`

To run with optimizer on in dev mode (just for testing, it's faster to leave it off): `yarn web:extract`. To build for production `yarn web:prod`.

To see debug output to verify the compiler, add `// debug` as a comment to the top of any file.

- Expo local dev: `yarn native`
  - Note: you will have to first have deployed Expo go to the device you want to run the app on. You can do this by `cd apps/expo && yarn run ios`, 
  - Note: If prompted by expo, `switch (s)` to Expo Go before bundling/deploying the app to native
