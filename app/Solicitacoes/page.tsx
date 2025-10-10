"use client";
import React, { useState } from "react";
import SolicitationBox from "../components/solicitationBox";

type Solicitation = {
  id: number;
  title: string;
  description: string;
  status: "aberto" | "em andamento" | "finalizado";
};

export default function SolicitationManager() {
  const [mockSolicitations, setMockSolicitations] = useState<Solicitation[]>([
    { id: 1, title: "Lâmpada queimada", description: "Trocar lâmpada do hall", status: "aberto" },
    { id: 2, title: "Barulho", description: "Reclamação sobre barulho na garagem", status: "em andamento" },
    { id: 3, title: "Limpeza", description: "Solicitar limpeza extra no salão de festas", status: "finalizado" },
  ]);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Gerenciar Solicitações</h2>

      <div className="space-y-3">
        {mockSolicitations.map((s) => (
          <SolicitationBox
                key={s.id}
                title={s.title}
                description={s.description}
                status={s.status} text={""} date={""}          />
        ))}
      </div>
    </section>
  );
}

