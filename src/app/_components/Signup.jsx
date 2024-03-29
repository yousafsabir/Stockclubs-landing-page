import Image from "next/image";

export default function Signup() {
    return (
        <>
            <section className="hidden sm:block bg-signup-bg pt-[180px] pb-[70px]">
                <div className="px-[30px] max-w-[1512px] gap-[25px] mx-auto flex">
                    {/* QR Code */}
                    <div className="rounded-[50px] p-[25px] bg-white">
                        <div className="rounded-[25px] p-[100px] pb-[85px] bg-primary flex content-center">
                            <div className="space-y-[30px]">
                                <Image
                                    src={"/signup-qr.svg"}
                                    width={220}
                                    height={220}
                                    alt="Signup QR Code"
                                />
                                <h3 className="font-medium text-white text-[45px] text-center">
                                    Sign Up
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-1 pr-[63px] bg-white rounded-[25px] items-center ">
                        <Image
                            className="scale-[1.6] -translate-x-7 translate-y-6"
                            src={"/signup-ladies.svg"}
                            width={220}
                            height={220}
                            alt="Signup QR Code"
                        />
                        <h2 className="text-[30px] ml-auto max-w-[522px] leading-[40px]">
                            <span className="text-primary-dark font-bold">
                                Sign up today
                            </span>{" "}
                            and manage your portfolio like a pro with
                            personalized assistant and access to a trusted tech
                            community of 1,200 members who connected $150M+ of
                            total assets.
                        </h2>
                    </div>
                </div>
            </section>
            {/* Mobile Section */}
            <section className="sm:hidden px-5 pb-[50px]">
                <div className="w-fit mx-auto space-y-5 mb-[35px]">
                    <Image
                        src={"/app-store-button.svg"}
                        alt="App Store Button"
                        width={210}
                        height={60}
                    />
                    <Image
                        src={"/play-store-button.svg"}
                        alt="Play Store Button"
                        width={210}
                        height={60}
                    />
                </div>
                <h2 className="text-[20px] text-center mx-auto max-w-[263px] leading-[24px]">
                    <span className="text-primary-dark font-bold">
                        Sign up today
                    </span>{" "}
                    and manage your portfolio like a pro with personalized
                    assistant and access to a trusted tech community of 1,200
                    members who connected $150M+ of total assets.
                </h2>
            </section>
        </>
    );
}
