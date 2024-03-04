import Image from "next/image";

export default function Reports() {
    return (
        <section className="py-[30px] sm:py-[70px] px-[20px] sm:px-[30px] bg-reports-bg">
            <div className="p-[40px] sm:pl-[280px] bg-white sm:py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <div className="max-w-[1209px] flex flex-col sm:flex-row gap-[60px] sm:gap-[266px] mx-auto items-center">
                    <div className="min-w-[217px] h-[233px] sm:min-w-[350px] group sm:h-[550px] sm:bg-cover bg-center scale-[1.25] relative bg-reports-card-2-bg sm:bg-reports-card-bg bg-contain">
                        <Image
                            className="absolute top-[60%] w-[60%] sm:w-auto -translate-y-[60%] right-0 sm:-right-[15%] sm:translate-x-[15%]"
                            src="/reports-pic-1.svg"
                            width={347}
                            height={442}
                            alt="Reports Illustrations"
                        />
                        <Image
                            className="absolute top-[60%] -translate-y-[60%] w-[55%] sm:w-auto group-hover:sm:left-[350%] group-hover:sm:-translate-x-[350%] left-1/2 -translate-x-1/2 transition-all duration-500"
                            src="/reports-pic-2.svg"
                            width={328}
                            height={428}
                            alt="Reports Illustrations"
                        />
                        <Image
                            className="absolute top-[60%] w-[60%] sm:w-auto -translate-y-[60%] left-0 sm:-left-[20%] -translate-x-[20%] group-hover:sm:-left-[28%] group-hover:sm:-translate-x-[28%] transition-all duration-500"
                            src="/reports-pic-3.svg"
                            width={377}
                            height={452}
                            alt="Reports Illustrations"
                        />
                    </div>
                    <h2 className="text-[20px] text-center sm:text-center sm:text-[33px] font-medium">
                        <span className="text-primary-dark font-bold">
                            Receive personalized investor reports
                        </span>{" "}
                        and understand how your trading activities contribute to
                        your overall wealth.
                    </h2>
                </div>
            </div>
        </section>
    );
}
