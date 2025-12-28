import React, { useState } from "react";
import { companies } from "../data/companies";

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
const BuscarCiudad = () => {
  const [ciudad, setCiudad] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCiudad(e.target.value);
  };

  const empresas = companies;
  const resultadosFiltrados = empresas.filter((empresa) =>
    empresa.ciudades.some(
      (ciudadData) =>
        removeAccents(ciudadData.ciudad.toLowerCase()) ===
        removeAccents(ciudad.toLowerCase())
    )
  );

  return (
    <div
      id="buscaporciudad"
      className="flex flex-col bg-blue-800 border-2 mt-6 border-yellow-300 p-4 rounded-md top-[262px] md:top-[480px] w-full"
    >
      <input
        className="placeholder:italic placeholder:text-slate-800 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="text"
        value={removeAccents(ciudad)}
        onChange={handleSearch}
        placeholder="Ingrese el nombre completo de la ciudad. Ejemp: san juan de los morros"
      />

      {resultadosFiltrados.length === 0 ? (
        <p className="font-bold text-slate-100 mt-4">¡Escribe el nombre de tu ciudad y mira cuáles empresas de internet
          hay en tu zona!</p>
      ) : (
        <>
          <p className="my-2 text-2xl text-gray-900">
            Proveedores de internet en:
          </p>
          <p className="my-2">
            <span className="text-4xl capitalize text-slate-100 font-bold"> {ciudad}</span>
          </p>

          <div className="grid grid-cols gap-1 my-10 max-w-3xl">
            {resultadosFiltrados.map((empresa) =>
              empresa.ciudades
                .filter(
                  (ciudadData) =>
                    removeAccents(ciudadData.ciudad.toLowerCase()) ===
                    removeAccents(ciudad.toLowerCase())
                )
                .map((ciudadData, index) => (
                  <div
                    key={`${empresa.id}-${index}`}
                    className="flex flex-col md:flex-row items-center w-full p-4 bg-white border border-gray-400 rounded-lg shadow"
                  >
                    <img
                      className="rounded-t-lg p-4 w-[70%] md:w-[40%]"
                      width="100%"
                      src={`../../proveedores/${empresa.img}`}
                      alt={empresa.nomempresa}
                    />
                    <div className="flex flex-col px-3 mx-1 text-sm text-gray-900 border-x-2 border-gray-500">
                      <p className="mb-1  ">
                        <span className="font-bold">Oficina Principal:</span>
                      </p>
                      <p className="mb-1">{ciudadData.ofip}</p>

                      <p className="mb-0 font-bold">
                        Oficinas de Atención Al Cliente:
                      </p>
                      <p className="mb-1">
                        {ciudadData.sucursales.join(" - ")}
                      </p>
                      <a
                        href={empresa.urlinterna}
                        className="inline-flex font-bold items-center text-amber-600 hover:underline"
                      >
                        Info {empresa.nomempresa}
                        <svg
                          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="flex flex-col text-sm text-gray-900 px-3 w-full md:w-[400px]">
                      <h3>Residencial</h3>
                      <p className="mb-1 font-bold">
                        Precios desde:{" "}
                      </p>
                      <h4 className="text-red-700 text-2xl">
                        {" "}
                        {empresa.precio}{" "}
                      </h4>
                      <p className="mb-1 font-bold">
                        Velocidades desde:{" "}
                      </p>
                      <h4 className="text-red-700 text-2xl">
                        {empresa.velocidad}{" "}
                      </h4>
                    </div>
                  </div>
                ))
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default BuscarCiudad;
