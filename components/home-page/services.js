import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function Card({ title, content }) {
    return (
        <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-medium mb-2">{title}</h2>
            <p>{content}</p>
        </div>
    );
}

function Services({ services, showFull }) {
    return (
        <div className="service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
            <div className="container max-w-full lg:pl-[70px] lg:pr-0">
                <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
                    <div className="lg:col-span-8 ml-auto mr-auto">
                        <div className="service-content w-full">
                            <span className="sub-title text-secondary text-[18px] leading-[32px] uppercase mb-[25px] block">
                                Services
                            </span>
                            <h2 className="title text-black lm:text-[32px] lm:leading-[50px] text-[32px] mb-[60px]">
                                Residential & Commercial
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                {services?.map((service) => {
                                    const Icon = AiIcons[service?.icon];
                                    return (
                                        <Card
                                            title={service?.title}
                                            content={
                                                showFull ? service?.content : ''
                                            }
                                        />
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
