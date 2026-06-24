import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

function Home(){
    return (
        <>
         <Header/>
            <div className="home">
                <h1>Home</h1>
                <p>Welcome to the home page!</p>
            </div>
            <Footer/>
        </>
    );
}

export default Home;