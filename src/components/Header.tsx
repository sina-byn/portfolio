// * components
import Container from "./Container";

const Header = () => {
    return (
        <header className="header fixed inset-0 z-50 w-screen h-fit bg-primary">
            <Container className="flex justify-between items-center py-4">
                <img src="/logo.svg" alt="personal logo" className="w-10" />
                <nav className="space-x-24">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </Container>
        </header>
    );
};

export default Header;