import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="bg-white drop-shadow-xl p-4">
        <div class="text-black justify-between items-center flex mx-auto container">
          <h1 class="text-xl font-bold">Dev Roberto</h1>
          <nav>
            <ul class="flex space-x-4 items-end">
              <li>Início</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
      </header>
      <section class="bg-blue-400 gap-4 flex items-center mx-auto justify-center flex-col max-h-80 text-white h-96 ">
        <h1 class="text-5xl">Bem-vindo à minha empresa!</h1>
        <p class="text-xl ">
          Aqui você encontra as melhores soluções tecnológicas para o seu negócio
        </p>
        <button
          type="submit"
          class="text-blue-400 rounded-3xl bg-white w-30 h-12 center hover:bg-sky-200"
        >
          Saiba mais
        </button>
      </section>

      <section class="py-16 container mx-auto text-center">
        <h3 class="text-2xl font-bold">Nossos Diferenciais</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div class="p-6 bg-white shadow-md rounded-lg ">
            <h4 class="text-xl font-semibold">Qualidade</h4>
            <p>Oferecemos o melhor serviço para você</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h4 class="text-xl font-semibold">Suporte 24h</h4>
            <p>Estamos sempre disponíveis para te ajudar.</p>
          </div>
          <div class=" p-6 shadow-md rounded-lg">
            <h4 class="text-xl font-semibold">Preço Justo</h4>
            <p>Planos acessíveis para todos os públicos.</p>
          </div>
        </div>
      </section>
      <footer class="bg-gray-800 mx-auto text-white text-center">
        <p>&copy; 2025 Minha Marca - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
