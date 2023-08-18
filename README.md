This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Live Video

https://github.com/Aryan123-rgb/User-location-chrome-extension/assets/118872531/30760d71-ab20-4434-9896-f4dcfb52d47d

## Some Screenshot

![Screenshot from 2023-08-18 23-08-14](https://github.com/Aryan123-rgb/User-location-chrome-extension/assets/118872531/010469ab-a08e-4553-98d6-2b4cb7f5e0cc)

![Screenshot from 2023-08-18 23-08-38](https://github.com/Aryan123-rgb/User-location-chrome-extension/assets/118872531/8d792118-fd07-41f1-a7f4-f374c550deca)

![Screenshot from 2023-08-18 23-08-51](https://github.com/Aryan123-rgb/User-location-chrome-extension/assets/118872531/bd0ea3ed-91ce-4f36-b6d7-19fee00f0355)


## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
