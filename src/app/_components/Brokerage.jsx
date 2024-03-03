import Image from "next/image";

export default function Brokerage() {
    return (
        <section className="py-[70px] px-[30px] bg-brokerage-bg">
            <div className="px-[40px] bg-white py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <div className="max-w-[1209px] flex gap-[65px] mx-auto items-center">
                    <h2 className="text-[33px] font-medium">
                        <span className="text-primary-dark font-bold">
                            Connect your brokerage accounts
                        </span>{" "}
                        and get access to trading ideas, aggregated stats and
                        discussions in your tech investing community right away.
                    </h2>
                    <div className="min-w-[642px] relative h-[480px]">
                        <Image
                            className="absolute top-0 -translate-x-1/2 left-1/2"
                            src="/brokerage-pic-1.png"
                            width={600}
                            height={350}
                            alt="Brokerage Illustrations"
                        />
                        <Image
                            className="absolute top-[30%] -translate-y-[30%] left-0"
                            src="/brokerage-pic-2.png"
                            width={600}
                            height={350}
                            alt="Brokerage Illustrations"
                        />
                        <Image
                            className="absolute left-0 bottom-0"
                            src="/brokerage-pic-3.png"
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
