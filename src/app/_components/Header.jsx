import Button from "../../components/Button";
import Image from "next/image";

export default function Header() {
    // TODO: set the pb manually
    return (
        <section className="py-[35px] sm:pt-[50px] sm:pb-[200px] relative">
            <header className="max-w-[1266px] px-5 sm:px-[30px] mx-auto flex justify-between items-center">
                <div className="max-w-[512px]">
                    <h2 className="text-[30px] sm:text-[60px] text-center sm:text-left leading-normal font-semibold mb-[35px] sm:mb-4">
                        FAANG INVESTING COMMUNITY
                    </h2>
                    <p className="text-primary-dark sm:leading-normal font-medium text-[19px] sm:text-3xl text-center sm:text-left leading-[24px] sm:leading-[40px]">
                        We help people working in BigTech
                        <br className="hidden sm:block" /> make better financial
                        decisions
                        <br className="hidden sm:block" /> with the data and
                        insights
                        <br className="hidden sm:block" /> provided by AI
                    </p>
                </div>
                <div className="flex-1 hidden max-w-[591px] sm:block">
                    <Form />
                </div>
            </header>
            <Image
                className="hidden sm:block absolute left-1/2 -translate-x-1/2  min-w-[1590px] mx-auto -bottom-20"
                src={"/header-faces-cards.svg"}
                width={1590}
                height={258}
                alt="Faces"
            />
        </section>
    );
}

const Form = () => {
    return (
        <form className="bg-header-form bg-no-repeat rounded-[50px] w-full p-[25px] ">
            <div className="rounded-[25px] bg-white px-5 py-10">
                <div className="mx-auto max-w-[420px] flex flex-col">
                    <h2 className="text-center text-[28px] font-semibold leading-[36px] -tracking-[0.28px] mb-[30px]">
                        Welcome Back
                    </h2>
                    <input
                        type="text"
                        className="rounded-[10px] p-[10px] h-[63px] w-full bg-primary-light border text-xl border-primary text-primary-dark outline-none mb-[10px]"
                        defaultValue={"gracelebon@gmail.com"}
                    />
                    <div className="w-full flex-1 flex justify-between min-h-[19px]"></div>
                    <input
                        type="password"
                        className="rounded-[10px] p-[10px] text-sm h-[63px] w-full bg-primary-light border border-primary text-primary-dark outline-none mb-[10px]"
                        defaultValue={"••••••••••••••••••••••"}
                    />
                    <div className="w-full mb-[30px] flex-1 flex justify-between min-h-[19px]">
                        <span></span>
                        <span className="font-medium cursor-pointer">
                            Forgot Password?
                        </span>
                    </div>
                    <Button className="mb-[30px]" type="button">
                        Log In
                    </Button>
                    <div className="py-[10px] space-x-[30px] mx-auto">
                        <span className="text-[21px] text-primary-dark">
                            Don’t have an account?
                        </span>
                        <span className="text-[21px] font-bold cursor-pointer">
                            Create One
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
};
