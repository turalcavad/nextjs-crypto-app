import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<Main />
		</div>
	);
}
