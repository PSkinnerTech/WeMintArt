# WeMintArt Frontend

This project is the frontend for the WeMintArt application. It is built using React and connects to a Whitelist Contract deployed on the Ethereum blockchain.

## Project Structure

The project is structured as a typical React application, with the main entry point being `src/index.tsx`. The `src` directory contains all the React components, services, and utilities used in the application.

## Connecting to the Whitelist Contract

To connect the frontend to the Whitelist Contract, follow these steps:

1. **Install Dependencies**: Make sure all the necessary dependencies are installed by running `npm install`.

2. **Update Contract Address**: In the `src/contract.ts` file, replace the placeholder contract address with the actual address of the deployed Whitelist Contract.

3. **Connect Wallet**: The application uses [MetaMask](https://metamask.io/) for wallet management. Make sure you have MetaMask installed and set up in your browser.

4. **Start the Application**: Start the application by running `npm start`. The application should now be connected to the Whitelist Contract and ready for use.

## Next Steps

The next steps for this project would be to implement the functionality for interacting with the Whitelist Contract. This includes functions for adding and removing addresses from the whitelist, as well as checking if an address is on the whitelist.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.
