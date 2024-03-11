import Header from "./components/common/Header"
import Footer from "./components/common/Footer";
import LogInForm from "./components/auth/LogInForm";
import './index.css';

function App() {
    return(
        <div id="app-container">
        <Header isLoggedIn= {false}/>
        <section className="content">
            <LogInForm />
        </section>
        <Footer />
        </div>
    );
}

export default App
