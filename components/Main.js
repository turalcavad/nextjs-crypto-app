import styles from "../styles/Main.module.scss";
import Coins from "./Coins";

export default function Home() {
	return (
		<main className={styles.container}>
			<h1>
				BUY & <br /> SELL <span>Crypto</span>
			</h1>
			<p>
				World's biggest Cryptocurrency exchange available on web <br /> as well
				as mobile phone
			</p>
			<a className={styles.btn}>Explore more</a>

			<Coins />
		</main>
	);
}
