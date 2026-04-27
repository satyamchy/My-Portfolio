import { ABOUT_DATA } from '../data';

const About = () => {
    return (
        <section id="about" className="flex flex-col gap-8 w-full scroll-mt-32">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">{ABOUT_DATA.title}</h2>
            <div className="glass rounded-3xl p-8 md:p-12 border-slate-700/50 shadow-xl">
                <div className="text-slate-300 text-lg leading-relaxed flex flex-col gap-6 font-medium">
                    <p>{ABOUT_DATA.description1}</p>
                    <p>{ABOUT_DATA.description2}</p>
                </div>
            </div>
        </section>
    )
}
export default About