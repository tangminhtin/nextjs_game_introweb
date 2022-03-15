import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Lore from "../components/Lore";
import SplashArt from "../components/SplashArt";
import Sponsor from "../components/Sponsor";
import styles from "../styles/Home.module.css";
import customStyle from "../styles/Sponsor.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Canvas from "../styles/LeavesRain";
export default function Home() {
    // Canvas();
    return (
        <div className={styles.container}>
            <Head>
                <title>Game</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Header/>
                <SplashArt/>
                <div className="slogan">GAME HOT NHẤT VIỆT NAM</div>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <div id="about">
                            <section>
                                <About/>
                            </section>
                        </div>
                        <div id="lore">
                            <section>
                                <Lore/>
                            </section>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <section>
                            <Sponsor/>

                        </section>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <div id="contact">
                        <section>
                            <Contact/>
                        </section>
                    </div>
                </footer>
            </main>
        </div>
    );
}
