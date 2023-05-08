import Link from 'next/link';
import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';
import * as FaIcons from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
    });
    const FacebookIcon = FaIcons.FaFacebookF;
    return (
        <footer className="footer-area md:pt-[120px] pt-[60px]">
            <div className="footer-top">
                <div className="custom-container">
                    <div className="lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]">
                        <div className="max-lg:col-span-12">
                            <div className="footer-logo">
                                <Image
                                    src="/images/logo/footer-logo.png"
                                    alt="Logo"
                                    width={192}
                                    height={135.75}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Contact</h2>
                                <ul className="contact-info mt-[25px]">
                                    <li>
                                        <Link href="mailto:hello@Rusticstudio.co">
                                            <a className="hover:text-black transition-all">
                                                contact@ratliffrepairs.com
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+0084-912-3548-073">
                                            <a className="hover:text-black transition-all">
                                                (417) 228-0626
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Quick Links</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/about">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
                        <div className="md:grid md:grid-cols-12 flex flex-col">
                            <div className="md:col-span-4 max-lm:order-last max-lm:pt-[10px]">
                                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                                    © {currentYear}
                                    <span className="mx-1">
                                        Ratliff Repairs LLC
                                    </span>
                                </div>
                            </div>
                            <div className="md:col-span-6" />
                            <div className="md:col-span-2">
                                <ul className="footer-language flex md:justify-end justify-center">
                                    <li>
                                        <Link href="https://www.facebook.com/profile.php?id=100077744520617">
                                            <a>
                                                <FacebookIcon />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
