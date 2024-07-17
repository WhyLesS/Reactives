import { Footer } from './Footer';
import { Header } from './header/header';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
