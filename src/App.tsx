
import ApplicationForm from "./components/ApplicationForm";
import logoEcto from '/logo-ecto.png';


export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5">
      {/* CONTAINER ESQUERDA */}
      <div className="flex flex-col justify-between p-7 bg-white">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <img src={logoEcto} alt="Ecto" className="h-8" />
          <a
            href="#"
            className="text-sm text-black max-[640px]:text-xs max-[640px]:ml-2"
          >
            Falar com um especialista
          </a>
        </header>

        {/* FORMULARIO */}
        <main className="flex-grow flex items-center justify-center">
          <ApplicationForm />
        </main>

        {/* FOOTER */}
        <footer className="flex flex-col items-center gap-2 text-xs mt-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <a href="#" className="text-black">
              Políticas de privacidade
            </a>
            <a href="#" className="text-black">
              Termos de uso
            </a>
          </div>
          <span className="text-gray-400">Teste de estágio 2025</span>
        </footer>
      </div>

      {/* CONTAINER DIREITA */}
      <div
        className="hidden lg:flex items-end justify-center bg-cover bg-center rounded-xl p-10 relative"
        style={{ backgroundImage: "url(/imagem.png)" }}
      >
        {/* EFEITO GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101b2b] to-transparent rounded-xl"></div>

        <div className="relative text-left text-white max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">Tudo em um só lugar</h2>
          <p className="text-sm opacity-90">
            Tenha visibilidade total da operação de SEO, mídia e conteúdo com a
            Ecto Tools - nossa plataforma exclusiva para acompanhar entregas, dados e
            performance em tempo real.
          </p>
        </div>
      </div>
    </div>
  );
}
