import Image from "next/image";

export default function Reports() {
    return (
        <section className="py-[70px] px-[30px] bg-reports-bg">
            <div className="px-[40px] pl-[280px] bg-white py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <div className="max-w-[1209px] flex gap-[266px] mx-auto items-center">
                    <div className="min-w-[350px] group h-[550px] bg-cover bg-center scale-[1.25] relative bg-reports-card-bg">
                        <Image
                            className="absolute top-[60%] -translate-y-[60%] -right-[15%] translate-x-[15%]"
                            src="/reports-pic-1.svg"
                            width={347}
                            height={442}
                            alt="Reports Illustrations"
                        />
                        <Image
                            className="absolute top-[60%] group-hover:left-[350%] group-hover:-translate-x-[350%] -translate-y-[60%] left-1/2 -translate-x-1/2 transition-all duration-500"
                            src="/reports-pic-2.svg"
                            width={328}
                            height={428}
                            alt="Reports Illustrations"
                        />
                        <Image
                            className="absolute top-[60%] -translate-y-[60%] -left-[20%] -translate-x-[20%] group-hover:-left-[28%] group-hover:-translate-x-[28%] transition-all duration-500"
                            src="/reports-pic-3.svg"
                            width={377}
                            height={452}
                            alt="Reports Illustrations"
                        />
                    </div>
                    <h2 className="text-[33px] font-medium">
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
