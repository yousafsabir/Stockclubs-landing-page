import Header from "./_components/Header";
import Signup from "./_components/Signup";
import Brokerage from "./_components/Brokerage";
import Track from "./_components/Track";
import Contact from "./_components/Contact";
import Automate from "./_components/Automate";
import Reports from "./_components/Reports";

export default function Home() {
    return (
        <>
            <Header />
            <Signup />
            <Brokerage />
            <Track />
            <Automate />
            <Reports />
            <Contact />
        </>
    );
}
