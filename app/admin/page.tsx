"use client";
import React, { useState } from "react";
import SolicitationManager from "./solicitations";
import ResidentsManager from "./residents";
import ScheduleManager from "./schedules";

export default function AdminPage() {
  const [tab, setTab] = useState<"home" | "solicitations" | "residents" | "schedules">("home");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Administrador</h1>

      {/* Menu de navegação */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "home" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("home")}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "solicitations" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("solicitations")}
        >
          Solicitações
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "residents" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("residents")}
        >
          Moradores
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "schedules" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("schedules")}
        >
          Agendamentos
        </button>
      </div>

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
    </main>
  );
}
