import Image from "next/image";

import Button from "../../components/Button";

export default function Contact() {
    return (
        <section className="bg-contact-us-bg pt-[30px] sm:pt-[70px] text-white pb-[30px]">
            <div className="max-w-[1266px] px-[30px] mx-auto ">
                <h2 className="uppercase text-[24px] sm:text-[36px] text-center font-semibold mb-[15px] sm:mb-5">
                    Contact Us
                </h2>
                <p className="text-[19px] sm:text-[30px] mx-auto mb-[19px] sm:mb-[35px] text-center max-w-[692px]">
                    We are here to answer any question you might have. We look
                    forward to hearing from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-[50px] mb-[44px] sm:mb-[120px] justify-between items-center">
                    <Image
                        className="w-[212px] h-[212px] sm:w-auto sm:h-auto"
                        src="/contact-us-person.svg"
                        alt="Contact Us Illustration"
                        width={562}
                        height={651}
                    />
                    <div className="rounded-[25px] sm:bg-primary px-[30px] sm:pt-[75px] sm:pb-[30px] flex-1 max-w-[591px]">
                        <div className="max-w-[420px] mx-auto flex flex-col gap-[30px]">
                            <div className="flex flex-col sm:flex-row gap-[18px]">
                                <input
                                    type="text"
                                    className="bg-white sm:max-w-[200px] outline-none w-[350px] sm:h-[63px] p-[10px] text-primary-dark placeholder:text-primary-light-2 rounded-[10px] text-xl font-medium "
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="bg-white sm:max-w-[200px] outline-none w-[350px] sm:h-[63px] p-[10px] text-primary-dark placeholder:text-primary-light-2 text-xl rounded-[10px] font-medium "
                                    placeholder="Last Name"
                                />
                            </div>
                            <input
                                type="email"
                                className="bg-white hidden sm:block sm:h-[63px] outline-none w-[350px] sm:w-full rounded-[10px] p-[10px] text-primary-dark placeholder:text-primary-light-2 text-xl font-medium "
                                placeholder="Email"
                            />
                            <textarea
                                placeholder="Write a message"
                                className="bg-white outline-none rounded-[10px] p-[10px] text-primary placeholder:text-primary-light-2 h-[160px] text-xl font-medium"
                            />
                            <Button
                                className="bg-secondary text-[17px] sm:text-[24px] "
                                type="button"
                            >
                                Submit
                            </Button>
                            <h3 className="sm:text-2xl font-bold text-center ">
                                Thanks for submitting!
                            </h3>
                        </div>
                    </div>
                </div>
                <h3 className="mb-[10px] text-[14px] sm:text-[21px] text-center">
                    ©2024 by Smartine Inc.
                </h3>
                <h3 className="sm:text-[21px] text-[14px] text-center">
                    2010 El Camino Real #1349, Santa Clara, CA 95050
                </h3>
            </div>
        </section>
    );
}
