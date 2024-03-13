import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from "./components/common/Header"
import Footer from "./components/common/Footer";
import LogInForm from "./components/auth/LogInForm";
import './index.css';

function App() {
    return(
        <div id="app-container">
            <GoogleOAuthProvider clientId="299692494667-6jpjhf1dknvlp59lug9f8sg6dtl87kvn.apps.googleusercontent.com">
                <Header isLoggedIn= {false}/>
                <section className="content">
                <LogInForm />
                </section>
                <Footer />
            </GoogleOAuthProvider>;
        </div>
    );
}

export default App
