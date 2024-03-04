import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <section className="px-[30px] pt-5 sm:py-5 max-w-[1512px] mx-auto">
            <nav className="flex justify-end sm:justify-between items-center">
                <Link href={"/"} className="hidden sm:block">
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={259}
                        height={52}
                    />
                </Link>
                <ul className="gap-[34px] hidden sm:flex">
                    <li className="text-xl leading-6 font-bold">App</li>
                    <li className="text-xl leading-6 font-bold">
                        <Link href={"#security"}>Security</Link>
                    </li>
                    <li className="text-xl leading-6 font-bold">
                        <Link href={"#contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="sm:hidden flex justify-center mb-[5px]">
                <Image
                    src="/logo-2.svg"
                    width={113}
                    height={60}
                    alt="Menu Icon"
                />
            </div>
        </section>
    );
}
