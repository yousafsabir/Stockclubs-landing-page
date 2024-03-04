import Image from "next/image";

import Button from "../../components/Button";

export default function Contact() {
    return (
        <section className="bg-contact-us-bg pt-[70px] text-white pb-[30px]">
            <div className="max-w-[1266px] px-[30px] mx-auto ">
                <h2 className="uppercase text-[36px] text-center font-semibold mb-5">
                    Contact Us
                </h2>
                <p className="text-[30px] mx-auto mb-[35px] text-center max-w-[692px]">
                    We are here to answer any question you might have. We look
                    forward to hearing from you!
                </p>
                <div className="flex gap-[50px] mb-[120px] justify-between items-center">
                    <Image
                        src="/contact-us-person.png"
                        alt="Contact Us Illustration"
                        width={562}
                        height={651}
                    />
                    <div className="rounded-[25px] bg-primary px-[30px] pt-[75px] pb-[30px] flex-1 max-w-[591px]">
                        <div className="max-w-[420px] mx-auto flex flex-col gap-[30px]">
                            <div className="flex gap-[18px]">
                                <input
                                    type="text"
                                    className="bg-white max-w-[200px] outline-none h-[63px] p-[10px] text-primary placeholder:text-primary-light-2 rounded-[10px] text-xl font-medium "
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="bg-white max-w-[200px] outline-none h-[63px] p-[10px] text-primary placeholder:text-primary-light-2 text-xl rounded-[10px] font-medium "
                                    placeholder="Last Name"
                                />
                            </div>
                            <input
                                type="email"
                                className="bg-white h-[63px] outline-none rounded-[10px] p-[10px] text-primary placeholder:text-primary-light-2 text-xl font-medium "
                                placeholder="Email"
                            />
                            <textarea
                                placeholder="Write a message"
                                className="bg-white outline-none rounded-[10px] p-[10px] text-primary placeholder:text-primary-light-2 h-[160px] text-xl font-medium"
                            />
                            <Button className="bg-secondary" type="button">
                                Submit
                            </Button>
                            <h3 className="text-2xl font-bold text-center ">
                                Thanks for submitting!
                            </h3>
                        </div>
                    </div>
                </div>
                <h3 className="mb-[10px] text-[21px] text-center">©2024 by Smartine Inc.</h3>
                <h3 className="text-[21px] text-center">2010 El Camino Real #1349, Santa Clara, CA 95050</h3>
            </div>
        </section>
    );
}
