import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
    return (
        <Link href="/">
            <a className="inline-block align-middle leading-[1]">
                <Image
                    src="/images/logo/logo.png"
                    alt="Logo"
                    width={192}
                    height={135.75}
                    quality={100}
                />
            </a>
        </Link>
    );
}

export default WhiteLogo;
