import Main from '@components/Main'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    return (
        <div className="container">
            <main>
                <Main/>
            </main>

            <Footer/>
        </div>
    )
}
