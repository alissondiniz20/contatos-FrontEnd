import { ContatoPage } from "./pages/ContatoPage/index";
import { Route, Routes } from "react-router-dom";
import { Autenticacao } from "./pages/Autenticacao";
import { CadastrarContato } from "./pages/Cadastro";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Autenticacao />} />
      <Route path="/contatos" element={<ContatoPage />} />
      <Route path="/cadastro" element={<CadastrarContato />} />
    </Routes>
  );
}
