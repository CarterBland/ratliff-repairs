import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import LatestProject from '../components/home-page/latest-project';

function HomePage({
    heroItems,
    services,
    projects,
    testimonialItems,
    brandItems,
    posts,
}) {
    return (
        <>
            <Head>
                <title>
                    Ratliff Repairs - Repairs & remodeling made simple
                </title>
                <meta
                    name="description"
                    content="Ratliff Repairs is a Joplin based repair company. We specialize in all types of repairs."
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            <Services services={services} />
            <About />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="Testimonials"
            />
            <Brand brandItems={brandItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            testimonialItems,
            brandItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
