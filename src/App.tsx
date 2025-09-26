import ApplicationForm from "./components/ApplicationForm";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-4">
      {/* Coluna Esquerda */}
      <div className="flex flex-col justify-between p-8 bg-white ">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <img src="/logo.png" alt="Ecto" className="h-8" />
          <a href="#" className="text-sm text-black">
            Falar com um especialista
          </a>
        </header>

        {/* Formulário */}
        <main className="flex-grow flex items-center justify-center">
          <ApplicationForm />
        </main>

        {/* Footer */}
        <footer className="flex justify-between text-xs mt-8 font-">
          <a href="#" className="text-black">Políticas de privacidade</a>
          <a href="#" className="text-black">Termos de uso</a>
          <span className="text-gray-400"> Teste de estágio 2025</span>
        </footer>
      </div>

      {/* Coluna Direita */}
      <div className="lg:flex items-center justify-center bg-[url('imagem.png')] bg-cover bg-center rounded-xl bg-linear-65 from-black to-blue-600 p-14">

        <div className="text-left text-justify text-white">
          <h2 className="text-2xl font-bold mb-4">Tudo em um só lugar</h2>
          <p className="text-sm opacity-90">
            Tenha visibilidade total da operação de SEO, mídia e conteúdo com a
            Ecto Tools — nossa plataforma exclusiva para acompanhar entregas,
            dados e performance em tempo real.
          </p>
        </div>
      </div>
    </div>
  );
}
