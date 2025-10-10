"use client";
import React, { useState } from "react";
import SolicitationManager from "../Solicitacoes/page";
import ResidentsManager from "../Residentes/page";
import ScheduleManager from "../Agendamentos/page";
import ColaboradoresPage from "../Colaboradores/page";

// Definindo os tipos das abas (tabs)
type TabType = "home" | "solicitations" | "residents" | "schedules" | "colaboradores";


const AdminPage: React.FC = () => {
  const [tab, setTab] = useState<TabType>("home"); // Estado tipado para TabType

  return (
      <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-600 text-white p-4 flex flex-col">
        <div>
          <h1 className="text-2xl font-bold mb-6">KomunityON</h1>
          <nav>
            <ul>
              <li>
                <button
                  className={`block py-2 px-4 mb-2 rounded ${tab === "solicitations" ? "bg-blue-700" : ""}`}
                  onClick={() => setTab("solicitations")}
                >
                  Solicitações
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 mb-2 rounded ${tab === "residents" ? "bg-blue-700" : ""}`}
                  onClick={() => setTab("residents")}
                >
                  Moradores
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 mb-2 rounded ${tab === "schedules" ? "bg-blue-700" : ""}`}
                  onClick={() => setTab("schedules")}
                >
                  Agendamentos
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 mb-2 rounded ${tab === "colaboradores"? "bg-blue-700" : ""}`}
                  onClick={() => setTab("colaboradores")}
                >
                  Colaboradores
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer fixado ao final da sidebar */}
        <footer className="mt-auto text-center pt-6 border-t border-blue-500">
          <p className="text-sm">Administrador</p>
          <p className="text-sm">admin@komunityon.com</p>
        </footer>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Painel do Administrador</h1>

        {/* Conteúdo das abas */}
        {tab === "home" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">📌 Solicitações Recentes</h2>
            <SolicitationManager />
          </section>
        )}

        {tab === "solicitations" && <SolicitationManager />}
        {tab === "residents" && <ResidentsManager />}
        {tab === "schedules" && <ScheduleManager />}
        {tab=== "colaboradores" && <ColaboradoresPage/>}
      </main>
    </div>
  );
};

export default AdminPage;
