import Image from "next/image";

export default function Brokerage() {
    return (
        <section className="py-[30px] sm:py-[70px] px-5 sm:px-[30px] bg-brokerage-bg">
            <div className="px-[40px] bg-white py-[40px] sm:py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <div className="max-w-[1209px] flex flex-col-reverse sm:flex-row gap-[30px] sm:gap-[65px] mx-auto items-center">
                    <h2 className="text-[20px] text-center sm:text-left sm:text-[33px] font-medium">
                        <span className="text-primary-dark font-bold">
                            Connect your brokerage accounts
                        </span>{" "}
                        and get access to trading ideas, aggregated stats and
                        discussions in your tech investing community right away.
                    </h2>
                    <div className="min-w-[250px] h-[200px] sm:min-w-[642px] group relative sm:h-[480px]">
                        <Image
                            className="absolute top-0 -translate-x-1/2 left-1/2 group-hover:top-[2%] transition-all duration-500"
                            src="/brokerage-pic-1.png"
                            width={600}
                            height={350}
                            alt="Brokerage Illustrations"
                        />
                        <Image
                            className="absolute top-[30%] -translate-y-[30%] group-hover:top-[35%] group-hover:-translate-y-[35%] left-0 group-hover:-left-[25%] group-hover:translate-x-[25%] transition-all duration-500"
                            src="/brokerage-pic-2.svg"
                            width={600}
                            height={350}
                            alt="Brokerage Illustrations"
                        />
                        <Image
                            className="absolute group-hover:scale-[1.10] duration-500 transition-all left-0 bottom-0 group-hover:bottom-[10%] group-hover:left-[4%]"
                            src="/brokerage-pic-3.svg"
                            width={600}
                            height={350}
                            alt="Brokerage Illustrations"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
