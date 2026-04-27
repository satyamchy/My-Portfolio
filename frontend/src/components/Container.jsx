import Feed from "./Feed"
import Header from "./Header"
import Projects from "./Projects"
import Footer from "./Footer"
import Contact from "./Contact"
import Experience from "./Experience"
import About from "./About"

const Container = () => {
    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-50 selection:bg-emerald-500/30 font-['Outfit']">
            <Header />
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col gap-32">
                <Feed />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            
            <Footer />
        </div>
    )
}

export default Container