import Button from "../../components/Button";

const content = [
    {
        logo: "/aws-logo.svg",
        heading: "Cloud Infrastructure",
        para: "Our application is built on the same reliable, scalable infrastructure used to power AMAZON.com’s global web properties. We ensure that the data can only be accessed by authorized roles and services with audited access.",
    },
    {
        logo: "plaid-logo.svg",
        heading: "Secure Broker Connection",
        para: "Brokerage Account Linking is done though our partner Plaid which handles credential validation (including multi-factor authentication) for each institution it supports and provides your account transaction history and holdings structure to StockClubs using secure access tokens.",
    },
    {
        logo: "encryption-logo.svg",
        heading: "Data Encryption",
        para: "The combination of the Advanced Encryption Standard (AES-256) and Transport Layer Security (TLS) keeps your personal infomation safe. We encrypt data in transit between our services and at rest.",
    },
];

export default function Security() {
    return (
        <section className="py-[30px] sm:py-[70px] px-[20px] sm:px-[30px] bg-security-bg">
            <div className="py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <h2 className="text-4xl text-center mb-[35px] font-semibold text-white ">
                    SECURITY IS OUR PRIORITY
                </h2>
                <div className="grid sm:grid-cols-3 py-[30px] sm:py-0 rounded-[25px] sm:rounded-none bg-white sm:bg-transparent sm:gap-6 mb-[35px]">
                    {content.map((item, idx) => (
                        <>
                            <div
                                className="px-[25px] sm:py-10 bg-white rounded-[25px]"
                                key={idx}
                            >
                                <div className="w-fit mx-auto mb-5 sm:mb-11">
                                    <img src={item.logo} alt="Card Logo" />
                                </div>
                                <h3 className="text-[24px] sm:text-[33px] whitespace-nowrap text-center text-primary-dark tracking-[1px] mb-1 sm:mb-6">
                                    {item.heading}
                                </h3>
                                <p className="text-[17px] sm:text-[30px] text-center">
                                    {item.para}
                                </p>
                            </div>
                            {idx !== 2 && (
                                <div className="sm:hidden w-[275px] border-b border-primary-dark my-[30px] mx-auto"></div>
                            )}
                        </>
                    ))}
                    <div className="flex justify-center sm:hidden mt-[30px]">
                        <Button
                            className={
                                "bg-secondary text-[17px] w-[300px] h-[50px]  p-0"
                            }
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="hidden sm:flex justify-center">
                    <Button className={"bg-secondary px-[100px] py-6"}>
                        Learn More About Security
                    </Button>
                </div>
            </div>
        </section>
    );
}
