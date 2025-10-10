"use client";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

type Colaborador = {
  id: number;
  nome: string;
  funcao: string;
  email: string;
  telefone: string;
  horario: string;
};

export default function ColaboradoresPage() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([
    {
      id: 1,
      nome: "Pedro Ferreira",
      funcao: "Zelador",
      email: "pedro@komunityon.com",
      telefone: "(11) 97777-1111",
      horario: "Segunda a Sexta, 8h às 17h",
    },
    {
      id: 2,
      nome: "Ana Costa",
      funcao: "Técnica de Manutenção",
      email: "ana.tec@komunityon.com",
      telefone: "(11) 97777-2222",
      horario: "Segunda a Sábado, 9h às 18h",
    },
    {
      id: 3,
      nome: "José Lima",
      funcao: "Segurança",
      email: "jose@komunityon.com",
      telefone: "(11) 97777-3333",
      horario: "Escala 12x36",
    },
  ]);

  const actionTemplate = (rowData: Colaborador) => {
    return (
      <div className="flex gap-3">
        <Button
          icon="pi pi-pencil"
          className="p-button-text p-button-sm"
          severity="secondary"
          tooltip="Editar"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-text p-button-sm"
          severity="danger"
          tooltip="Excluir"
        />
      </div>
    );
  };

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold">Colaboradores</h2>
          <p className="text-gray-500">Gerencie a equipe de colaboradores do condomínio</p>
        </div>
        <Button label="Novo Colaborador" icon="pi pi-plus" className="p-button-primary" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Lista de Colaboradores ({colaboradores.length})</h3>
        <DataTable value={colaboradores} stripedRows responsiveLayout="scroll">
          <Column field="nome" header="Nome" />
          <Column field="funcao" header="Função" />
          <Column field="email" header="Email" />
          <Column field="telefone" header="Telefone" />
          <Column field="horario" header="Horário" />
          <Column header="Ações" body={actionTemplate} style={{ width: "100px" }} />
        </DataTable>
      </div>
    </section>
  );
}
