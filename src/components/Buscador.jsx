import React, { useState } from "react";
import Data from "../Data";
 
import { Pagination } from "./Paginacion";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  let results = [];
  if (!searchTerm) {
    results = Data;    
  } else {
    results = Data.filter((dato) =>
      dato.nombre.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
    );
  }

  const totalIa = results.length;
  const [iaPorPagina, setIaPorPagina] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * iaPorPagina;
  const firstIndex = lastIndex - iaPorPagina;

  return (
    <>
      <div className="bg-slate-300 border mt-6 border-slate-600 p-4 rounded-md top-[262px] md:top-[480px] w-full">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
          name="buscar"
          type="text"
          placeholder="Ingresa por lo menos 3 letras de la empresa a buscar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div id="proveedor" className="grid grid-cols md:grid-cols-4 justify-center gap-1 my-10">
        {results
          .map((result) => (
            <div
              key={result.id}
              className="w-full p-4 bg-white border border-gray-400 rounded-lg shadow"
            >
              <img
                className="rounded-t-lg p-4"
                src={`../../proveedores/${result.img}`}
                alt={result.nombre}
              />

              <p className="mb-3 font-normal text-gray-900 ">
                Proveedor de internet de fibra óptica {result.nombre}
              </p>
              <a
                href={`/proveedor/${result.urlinterna}/`}
                className="inline-flex font-bold items-center text-amber-600 hover:underline"
              >
                Info {result.nombre}
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
          ))
          .slice(firstIndex, lastIndex)}
      </div>

      <Pagination
        iaPorPagina={iaPorPagina}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalIa={totalIa}
      />
    </>
  );
};
export default Buscador;
