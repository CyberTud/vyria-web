import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <Image
              src="/vyria.png"
              alt="Vyria Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold">Vyria</h3>
              <p className="text-slate-400 text-sm">Chat and learn any language</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="https://github.com/CyberTud/vyria" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <span>•</span>
            <span>Coming Q1 2025</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © 2024 Vyria. All rights reserved.
        </div>
      </div>
    </footer>
  )
}