import Image from "next/image";

export default function Automate() {
    return (
        <section className="py-[70px] px-[30px] bg-automate-bg">
            <div className="px-[40px] bg-white py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <div className="max-w-[1209px] flex gap-[65px] mx-auto items-center">
                    <h2 className="text-[33px] font-medium">
                        <span className="text-primary-dark font-bold">
                            Automate monitoring
                        </span>{" "}
                        of your trading accounts 24/7. Control your risks and
                        manage your portfolio like a PRO.
                    </h2>
                    <div className="min-w-[470px] scale-125 relative h-[636px] bg-automate-card-bg">
                        <div className="absolute left-0 right-0 top-[40%] -translate-y-[40%] flex flex-col gap-4">
                            <Image
                                className="hover:scale-[1.2] transition-transform"
                                src="/automate-pic-1.png"
                                width={600}
                                height={350}
                                alt="Automate Illustrations"
                            />
                            <Image
                                className="hover:scale-[1.2] transition-transform"
                                src="/automate-pic-2.png"
                                width={600}
                                height={350}
                                alt="Automate Illustrations"
                            />
                            <Image
                                className="hover:scale-[1.2] transition-transform"
                                src="/automate-pic-3.png"
                                width={600}
                                height={350}
                                alt="Automate Illustrations"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
