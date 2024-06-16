import { useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const WalletConnect = () => {
	const [account, setAccount] = useState<null | string>(null);

	const providerOptions = {
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				rpc: {
					43114:
						"https://api.glacier.avacloud.io/v1/mainnet/0xCf7fcf8455615B65eCa3fcAe200cd814Fb3fa1c1",
				},
				supportedChainIds: [43114],
				qrcode: true,
			},
		},
	};

	const web3Modal = new Web3Modal({
		cacheProvider: true,
		providerOptions,
	});

	const connectWallet = async () => {
		const provider = await web3Modal.connect();
		const web3 = new Web3(provider);

		const accounts = await web3.eth.getAccounts();
		setAccount(accounts[0]);

		// Подключение событий
		provider.on("accountsChanged", (accounts: string[]) => {
			setAccount(accounts[0]);
		});

		provider.on("disconnect", () => {
			setAccount(null);
		});
	};

	return (
		<div>
			<button onClick={connectWallet}>Connect Wallet</button>
			{account && <p>Connected account: {account}</p>}
		</div>
	);
};
