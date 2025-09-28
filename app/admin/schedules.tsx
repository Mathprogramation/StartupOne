"use client";
import React, { useState } from "react";

type Schedule = {
  id: number;
  resident: string;
  date: string;
  place: string;
  status: "pendente" | "aprovado" | "rejeitado";
};

export default function ScheduleManager() {
  const [schedules, setSchedules] = useState<Schedule[]>([
    { id: 1, resident: "João Silva", date: "2025-10-15", place: "Salão de festas", status: "pendente" },
    { id: 2, resident: "Maria Souza", date: "2025-10-20", place: "Churrasqueira", status: "aprovado" },
    { id: 3, resident: "Pedro Costa", date: "2025-10-22", place: "Quadra", status: "pendente" },
  ]);

  const updateStatus = (id: number, newStatus: "aprovado" | "rejeitado") => {
    setSchedules(schedules.map(s =>
      s.id === id ? { ...s, status: newStatus } : s
    ));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Gerenciar Agendamentos</h2>

      <div className="space-y-3">
        {schedules.map((s) => (
          <div key={s.id} className="flex justify-between items-center border p-3 rounded">
            <div>
              <p><strong>{s.place}</strong> - {s.date}</p>
              <p className="text-sm text-gray-600">Morador: {s.resident}</p>
              <p className={`text-sm font-medium ${
                s.status === "pendente" ? "text-yellow-600" : 
                s.status === "aprovado" ? "text-green-600" : "text-red-600"
              }`}>
                Status: {s.status}
              </p>
            </div>
            {s.status === "pendente" && (
              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(s.id, "aprovado")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Aprovar
                </button>
                <button
                  onClick={() => updateStatus(s.id, "rejeitado")}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Rejeitar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
