import Link from 'next/link';
import Image from 'next/image';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <span className={subTitle}>About</span>
                        <h2 className={title}>Meet Liam</h2>
                        <h3 className="text-secondary text-2xl mb-12">
                            A trust-worthy repair man
                        </h3>
                        <p className={desc}>
                            My name is Liam and I specialize in providing
                            quality home repair and improvement services to
                            homeowners and businesses alike. We understand that
                            maintaining a property can be time-consuming and
                            stressful, which is why we are here to help you with
                            all your repair and maintenance needs.
                            <br />
                            <br />
                            At Ratliff Repairs, we are experienced in a wide
                            range of home improvement projects, including
                            plumbing, electrical work, carpentry, painting, and
                            more. Whether you need a minor repair or a major
                            renovation, we are committed to delivering results
                            that exceed your expectations.
                            <br />
                            <br />
                            We believe in providing our customers with the best
                            possible experience, from the moment they contact us
                            to the completion of the job. Our team is committed
                            to ensuring that every job is completed efficiently,
                            safely, and to the highest standard. We strive to
                            build long-lasting relationships with our clients by
                            providing reliable, affordable, and professional
                            services. So if you&apos;re in need of a handyman,
                            look no further than Ratliff Repairs.
                        </p>
                        <Link
                            href="https://www.markate.com/public/widget/booking/products/84ddbf220ce2d9bbb1463cafc4e417ef:50476:5cb9bfe4"
                            target="_blank"
                        >
                            <a className="boxed-btn text-[18px] leading-[30px] right-5">
                                Schedule a Consultation
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="boxed-btn text-[18px] leading-[30px]">
                                Contact Us
                            </a>
                        </Link>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/1.jpg"
                            alt="Service Image"
                            width={390}
                            height={760}
                            quality={70}
                            layout="fixed"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
