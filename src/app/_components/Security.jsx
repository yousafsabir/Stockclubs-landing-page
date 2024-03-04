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
        <section className="py-[70px] px-[30px] bg-security-bg">
            <div className="px-[20px] py-[60px] max-w-[1512px] rounded-[25px] mx-auto">
                <h2 className="text-4xl text-center mb-[35px] font-semibold text-white ">
                    SECURITY IS OUR PRIORITY
                </h2>
                <div className="grid grid-cols-3 gap-6 mb-[35px]">
                    {content.map((item, idx) => (
                        <div
                            className="px-[25px] py-10 bg-white rounded-[25px]"
                            key={idx}
                        >
                            <div className="w-fit mx-auto mb-11">
                                <img src={item.logo} alt="Card Logo" />
                            </div>
                            <h3 className="text-[33px] whitespace-nowrap text-center text-primary-dark tracking-[1px] mb-6">
                                {item.heading}
                            </h3>
                            <p className="text-[30px] text-center">
                                {item.para}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button className={"bg-secondary px-[100px] py-6"}>
                        Learn More About Security
                    </Button>
                </div>
            </div>
        </section>
    );
}
