import { Hero, OffersHomepage, HowItWorks, Testimonials } from '../../sections';

import styles from './homepage.module.css';

const Homepage = () => {
    return (
        <>
            <Hero />
            <OffersHomepage />
            <HowItWorks />
            <Testimonials />
        </>
    )
}

export default Homepage
