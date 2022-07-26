import Image from "next/image";
import styles from "../styles/Coins.module.scss";
import BitcoinImg from "../assets/images/bitcoin.png";
import EthereumImg from "../assets/images/ethereum.png";
import DogeCoin from "../assets/images/dogecoin.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCryptos } from "../redux/crypto";

export default function Coins() {
	const [coins, setCoins] = useState([]);

	const myCoins = useSelector((state) => state.reducers.cryptos);
	const isLoading = useSelector((state) => state.reducers.isLoading);
	const dispatch = useDispatch();
	setInterval(function () {
		dispatch(fetchCryptos());
	}, 20000);

	if (isLoading)
		return (
			<div suppressHydrationWarning className={styles.coinList}>
				Loading...
			</div>
		);
	const { lastPrice: bitcoinPrice } = myCoins?.find(
		(coin) => coin.symbol === "BTCUSDT"
	);
	const { lastPrice: ethereumPrice } = myCoins?.find(
		(coin) => coin.symbol === "ETHUSDT"
	);
	const { lastPrice: dogecoinPrice } = myCoins?.find(
		(coin) => coin.symbol === "DOGEUSDT"
	);

	return (
		<div className={styles.coinList} suppressHydrationWarning>
			<div className={styles.coin}>
				<Image src={BitcoinImg} width="40px" height="40px" />
				<div className={styles.coinText}>
					<h3>${Number(bitcoinPrice).toFixed(2)}</h3>
					<p>Bitcoin</p>
				</div>
			</div>
			<div className={styles.coin}>
				<Image src={EthereumImg} width="40px" height="40px" />
				<div className={styles.coinText}>
					<h3>${Number(ethereumPrice).toFixed(2)}</h3>
					<p>Ethereum</p>
				</div>
			</div>
			<div className={styles.coin}>
				<Image src={DogeCoin} width="40px" height="40px" />
				<div className={styles.coinText}>
					<h3>${Number(dogecoinPrice).toFixed(4)}</h3>
					<p>Dogecoin</p>
				</div>
			</div>
		</div>
	);
}
