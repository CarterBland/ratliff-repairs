import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function Services({ services, showFull }) {
    return (
        <div className="service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
            <div className="container max-w-full lg:pl-[70px] lg:pr-0">
                <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
                    <div className="lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]">
                        <div className="service-content xl:w-[490px] w-full ml-auto">
                            <span className="sub-title text-secondary text-[18px] leading-[32px] uppercase mb-[25px] block">
                                Services
                            </span>
                            <h2 className="title text-black lm:text-[32px] lm:leading-[50px] text-[32px] mb-[60px]">
                                Residential & Commercial
                            </h2>
                            <div className="grid grid-cols-3">
                                {services?.map((service) => {
                                    const Icon = AiIcons[service?.icon];
                                    return (
                                        <div
                                            key={service?.title}
                                            className="justify-center flex flex-col items-center text-center service-card"
                                        >
                                            <div className="icon">
                                                <Icon />
                                            </div>
                                            <h3 className="title">
                                                <Link href="/projects">
                                                    <a className="hover:underline">
                                                        {service?.title}
                                                    </a>
                                                </Link>
                                            </h3>
                                            {showFull && (
                                                <p className="desc">
                                                    {service?.content}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Services.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    showFull: PropTypes.instanceOf(Boolean),
};

export default Services;
