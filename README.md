# Aptos Wallet Adapter

## Overview

The **Aptos Wallet Adapter** is a TypeScript-based library designed for integrating Aptos blockchain wallets into applications. This adapter utilizes **Redux Toolkit** to manage wallet states efficiently and provides seamless interactions with Aptos-compatible wallets.

## Features

-   🚀 **Easy Integration**: Simplifies the process of connecting and managing Aptos wallets.
    
-   🔄 **State Management**: Powered by Redux Toolkit for efficient state handling.
    
-   🔐 **Secure Authentication**: Ensures secure communication with Aptos wallets.
    
-   📜 **TypeScript Support**: Fully typed and optimized for modern frontend applications.
    
-   💡 **Extensible**: Easily extendable to support multiple wallets and custom configurations.
    

## Installation

To install the package, use npm or yarn:

```
npm install aptos-wallet-adapter
```

or

```
yarn add aptos-wallet-adapter
```

## Usage

### Setting up the Wallet Adapter

Integrate the wallet adapter into your application using Redux Toolkit:

```
import { configureStore } from '@reduxjs/toolkit';
import walletReducer from 'aptos-wallet-adapter';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
```

### Connecting a Wallet

To connect a wallet, use the provided hooks:

```
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet } from 'aptos-wallet-adapter';

const WalletComponent = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

  return (
    <div>
      {wallet.connected ? (
        <button onClick={() => dispatch(disconnectWallet())}>Disconnect</button>
      ) : (
        <button onClick={() => dispatch(connectWallet())}>Connect Wallet</button>
      )}
    </div>
  );
};
```

## Supported Wallets

-   Martian Wallet
    
-   Petra Wallet
    
-   Fewcha Wallet
    
-   Pontem Wallet
    

## Contributing

We welcome contributions! Feel free to submit issues, feature requests, or pull requests to improve this project.

## License

This project is licensed under the MIT License.
