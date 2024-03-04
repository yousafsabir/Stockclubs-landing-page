import Image from "next/image";

export default function Brokerage() {
    return (
        <section className="py-[30px] sm:py-[70px] px-5 sm:px-[30px] bg-track-bg">
            <div className="px-[40px] bg-white py-[40px] sm:py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <div className="max-w-[1209px] flex flex-col sm:flex-row gap-[30px] sm:gap-[65px] mx-auto items-center">
                    <div className="min-w-[250px] h-[200px] sm:min-w-[642px] group relative sm:h-[480px]">
                        <Image
                            className="absolute -top-[7%] group-hover:top-[3%] left-0 transition-all duration-500"
                            src="/track-pic-1.svg"
                            width={600}
                            height={350}
                            alt="Track Illustrations"
                        />
                        <Image
                            className="absolute top-[50%] -translate-y-[50%] group-hover:top-[80%] group-hover:-translate-y-[80%] left-0 sm:left-6 transition-all duration-500"
                            src="/track-pic-2.svg"
                            width={600}
                            height={350}
                            alt="Track Illustrations"
                        />
                        <Image
                            className="absolute group-hover:scale-[1.10] transition-all duration-500 left-0 bottom-0"
                            src="/track-pic-3.svg"
                            width={600}
                            height={350}
                            alt="Track Illustrations"
                        />
                    </div>
                    <h2 className="text-[20px] text-center sm:text-left sm:text-[33px] font-medium">
                        <span className="text-primary-dark font-bold">
                            Track your net worth
                        </span>{" "}
                        automatically and spend less time managing your personal
                        finances. No need to update spreadsheets manually
                        anymore.
                    </h2>
                </div>
            </div>
        </section>
    );
}
