export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg text-white">
            Archibald<span className="text-cyan-400">.ai</span>
          </span>
          <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#systems" className="hover:text-cyan-400">Systems</a>
            <a href="#stack" className="hover:text-cyan-400">Tech Stack</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs mb-5">
          AI Automation Engineer &amp; Full-Stack Builder
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white max-w-3xl leading-tight">
          I build production AI workflows that eliminate manual operations.
        </h1>
        <p className="mt-5 text-lg text-slate-400 max-w-2xl leading-relaxed">
          Hi, I&apos;m <strong className="text-slate-200">Archibald Calaway Ezeomah</strong>. I design end-to-end automation pipelines connecting Next.js interfaces, n8n orchestration, structured AI agents, and reliable databases.
        </p>
      </section>

      <section id="systems" className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Automation Systems</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <span className="text-xs font-semibold text-cyan-400">LEAD OPERATIONS</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-2">
              VertexFlow AI Lead Intake &amp; Priority Router
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Captures structured prospect inquiries in Next.js, scores budget, timeline, and business challenges via an AI agent, logs records, and routes High, Medium, and Low priority leads to tailored actions.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <span className="text-xs font-semibold text-cyan-400">MEDIA AUTOMATION</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-2">
              Automated Storytelling &amp; Media Pipeline
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Multi-stage n8n workflow combining local and cloud LLMs, vector deduplication, and neural text-to-speech to script, narrate, and package content automatically.
            </p>
          </article>
        </div>
      </section>

      <section id="stack" className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-3">Core Stack</h2>
        <p className="text-sm text-slate-400">
          Next.js, TypeScript, Tailwind CSS, n8n, AI Agents, MCP Servers, Ollama, Pinecone, Supabase, Docker, and Cloudflare Pages.
        </p>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800">
        <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
        <a href="mailto:archibaldzvault@gmail.com" className="text-cyan-400 underline text-sm">
          archibaldzvault@gmail.com
        </a>
      </section>
    </main>
  );
}