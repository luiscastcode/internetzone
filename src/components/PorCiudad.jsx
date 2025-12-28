import React, { useState } from "react";
import { Pagination } from "./Paginacion";

const PorCiudad = ({ ciudad, providers }) => {
  const results = providers;
  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * iaPorPagina;
  const firstIndex = lastIndex - iaPorPagina;
  return (
    <div
      id="buscaporciudad"
      className="flex flex-col bg-slate-300 border mt-2 border-slate-600 p-0 md:p-4 rounded-md w-full md:max-w-4xl"
    >
      <>
        <div className="grid grid-cols gap-1 my-2">
          {results
            .map((empresa) =>
              empresa.ciudades
                .filter((ciudadDato) => ciudadDato.ciudad === `${ciudad}`)
                .map((ciudadDato, index) => (
                  <div
                    key={`${empresa.id}-${index}`}
                    className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-gray-400 rounded-lg shadow"
                  >
                    <img
                      className="rounded-t-lg p-4"
                      width="200"
                      src={`../../proveedores/${empresa.img}`}
                      alt={empresa.nomempresa}
                    />
                    <div className="flex flex-col px-3 mx-1 text-sm text-gray-900 border-x-2 border-gray-500 w-full">
                      <p className="mb-1  ">
                        <span className="font-bold">
                          Oficina {empresa.nomempresa} en {ciudadDato.ciudad}:
                        </span>
                      </p>
                      <p className="mb-1">{ciudadDato.ofip}</p>

                      <p className="mb-0 font-bold">
                        Oficinas de Atención Al Cliente:
                      </p>
                      <p className="mb-1">
                        {ciudadDato.sucursales.join(" - ")}
                      </p>
                      <a
                        href={empresa.urlinterna}
                        target={empresa.target}
                        className="inline-flex font-bold items-center text-amber-200 hover:underline bg-blue-700 rounded-xl p-3"
                      >
                        Ver Info {empresa.nomempresa}
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
                      <p className="mb-1 font-bold">Precios desde: </p>
                      <h4 className="text-red-700 text-2xl">
                        {" "}
                        {empresa.precio}{" "}
                      </h4>
                      <p className="mb-1 font-bold">Velocidades desde: </p>
                      <h4 className="text-red-700 text-2xl">
                        {empresa.velocidad}{" "}
                      </h4>
                    </div>
                  </div>
                ))
            )
            .slice(firstIndex, lastIndex)}
        </div>
        <Pagination
          iaPorPagina={iaPorPagina}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalIa={totalIa}
        />
      </>
    </div>
  );
};
export default PorCiudad;
