import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../assets/images/logo.png";

export default function Header() {
	return (
		<header className={styles.header}>
			<Image src={logo} width="50px" height={"50px"} />
			<ul>
				<li>
					{" "}
					<a>Market</a>
				</li>
				<li>
					<a>Features</a>
				</li>
				<li>
					<a>White Papers</a>
				</li>
				<li>
					<a>About Us</a>
				</li>
			</ul>

			<a className={styles.btn}>EN</a>
		</header>
	);
}
