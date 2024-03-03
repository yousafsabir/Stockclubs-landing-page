import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <section className="px-[30px] py-5 max-w-[1512px] mx-auto">
            <nav className="flex justify-between text-primary items-center">
                <Link href={"/"}>
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={259}
                        height={52}
                    />
                </Link>
                <ul className="flex gap-[34px]">
                    <li className="text-xl leading-6 font-bold">App</li>
                    <li className="text-xl leading-6 font-bold">
                        <Link href={"#security"}>Security</Link>
                    </li>
                    <li className="text-xl leading-6 font-bold">
                        <Link href={"#contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
