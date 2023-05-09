import Head from 'next/head';
import PropTypes from 'prop-types';
import HeaderOne from '../components/header/header-1';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import { getAllItems } from '../lib/items-util';
import Brand from '../components/home-page/brand';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team';

function ServicesPage({ services, testimonialItems, brandItems, teamItems }) {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <HeaderOne />
            <PageBanner />
            <Services services={services} showFull />
        </>
    );
}

export function getStaticProps() {
    const services = getAllItems('services');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const teamItems = getAllItems('teams');

    return {
        props: {
            services,
            testimonialItems,
            brandItems,
            teamItems,
        },
    };
}

ServicesPage.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServicesPage;
