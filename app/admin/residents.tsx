"use client";
import React, { useState } from "react";

type Resident = {
  id: number;
  name: string;
  apartment: string;
};

export default function ResidentsManager() {
  const [residents, setResidents] = useState<Resident[]>([
    { id: 1, name: "João Silva", apartment: "101" },
    { id: 2, name: "Maria Souza", apartment: "202" },
  ]);

  const [newResident, setNewResident] = useState({ name: "", apartment: "" });

  const addResident = () => {
    if (!newResident.name || !newResident.apartment) return;
    setResidents([
      ...residents,
      { id: Date.now(), name: newResident.name, apartment: newResident.apartment },
    ]);
    setNewResident({ name: "", apartment: "" });
  };

  const removeResident = (id: number) => {
    setResidents(residents.filter((r) => r.id !== id));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Gerenciar Moradores</h2>

      {/* Formulário para adicionar morador */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Nome"
          value={newResident.name}
          onChange={(e) => setNewResident({ ...newResident, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Apartamento"
          value={newResident.apartment}
          onChange={(e) => setNewResident({ ...newResident, apartment: e.target.value })}
        />
        <button
          onClick={addResident}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>

      {/* Lista de moradores */}
      <ul className="space-y-2">
        {residents.map((r) => (
          <li key={r.id} className="flex justify-between items-center border p-2 rounded">
            <span>
              {r.name} - Apto {r.apartment}
            </span>
            <button
              onClick={() => removeResident(r.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
