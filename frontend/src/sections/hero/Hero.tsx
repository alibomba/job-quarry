


import styles from './hero.module.css';

const Hero = () => {
    return (
        <section style={{ backgroundImage: `url('${import.meta.env.VITE_API_URL}/storage/hero-img.jpg')` }} className={styles.hero}>
            <h2 className={styles.hero__heading}>Znajdź Wymarzoną Pracę</h2>
        </section>
    )
}

export default Hero
