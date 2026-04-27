import React from "react";
import { PenTool, Code, Layout, Smartphone, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="flex flex-col gap-10 w-full scroll-mt-32">
            <div className="flex flex-col gap-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">About Me</h2>
                <div className="text-slate-300 text-lg leading-relaxed flex flex-col gap-4 font-medium">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium nobis cum ex eveniet modi, officia porro voluptates hic,
                        temporibus exercitationem a.
                    </p>
                    <p>
                        Iste blanditiis beatae aliquam qui, id neque porro asperiores reiciendis quia sint laboriosam impedit
                        labore sequi ea, modi ipsum enim distinctio aperiam natus!
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-100 mb-8">What I'm Doing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Bento Box 1 */}
                    <div className="glass rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:bg-slate-800/80 group border-slate-700/50">
                        <div className="p-4 bg-emerald-500/10 w-fit rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                            <Layout size={28} className="text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-100 mb-3">Web Design</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </div>
                    {/* Bento Box 2 */}
                    <div className="glass rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] hover:bg-slate-800/80 group border-slate-700/50">
                        <div className="p-4 bg-sky-500/10 w-fit rounded-2xl group-hover:bg-sky-500/20 transition-colors">
                            <Code size={28} className="text-sky-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-100 mb-3">Web Development</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">High-quality development of sites at the professional level.</p>
                        </div>
                    </div>
                    {/* Bento Box 3 */}
                    <div className="glass rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:bg-slate-800/80 group border-slate-700/50">
                        <div className="p-4 bg-emerald-500/10 w-fit rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                            <PenTool size={28} className="text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-100 mb-3">UI/UX Design</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Creating clean, engaging user interfaces and experiences.</p>
                        </div>
                    </div>
                    {/* Bento Box 4 */}
                    <div className="glass rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] hover:bg-slate-800/80 group border-slate-700/50">
                        <div className="p-4 bg-sky-500/10 w-fit rounded-2xl group-hover:bg-sky-500/20 transition-colors">
                            <Smartphone size={28} className="text-sky-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-100 mb-3">Mobile Apps</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Professional level development of native/hybrid mobile apps.</p>
                        </div>
                    </div>
                     {/* Bento Box 5 */}
                    <div className="glass rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:bg-slate-800/80 group border-slate-700/50 md:col-span-2 lg:col-span-1">
                        <div className="p-4 bg-emerald-500/10 w-fit rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                            <Globe size={28} className="text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-100 mb-3">SEO Optimization</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Improving website visibility and organic reach continuously.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About