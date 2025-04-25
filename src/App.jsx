import React, {Fragment} from 'react';
import Navbar from "./ui/navbar.jsx";
import Banner from "./ui/banner.jsx";
import Process from "./ui/process.jsx";
import Projects from "./ui/projects.jsx";
import WorkTogether from "./ui/worktogether.jsx";
import About from "./ui/about.jsx";
import Contact from "./ui/contact.jsx";
import Footer from "./ui/footer.jsx";

const App = () => {
    return (
        <Fragment>
            <Navbar/>
            <Banner/>
            <Process/>
            <Projects/>
            <WorkTogether/>
            <About/>
            <Contact/>
            <Footer/>

        </Fragment>
    );
};

export default App;