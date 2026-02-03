import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
        < Header />
        <main>
            {children}
        </main>
        < Footer />
        </>
    );
}

export default MainLayout;