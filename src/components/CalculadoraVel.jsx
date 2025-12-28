import { useState } from "react";

const CalculadoraVel = () => {
  const bandwidthRequirements = {
    "Streaming SD Video": 3,
    "Streaming HD Video": 5,
    "Streaming 4K Video": 15,
    "Online Gaming Casual": 3,
    "Online Gaming Multijugador": 10,
    "Video Llamadas": 2,
    "Uso de Redes Sociales": 5,
    "Descarga de Archivos": 40,
    "Uso de Servicios en la Nube": 2,
    "Navegar en Internet": 1,
  };

  const [numDevices, setNumDevices] = useState(1);
  const [recommendedSpeed, setRecommendedSpeed] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState("");

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    if (event.target.checked) {
      setSelectedActivities([...selectedActivities, activity]);
    } else {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity));
    }
  };

  const calculateSpeed = () => {
    let totalBandwidth = 0;
    selectedActivities.forEach((activity) => {
      totalBandwidth += bandwidthRequirements[activity] || 0;
    });

    // Considerar el número de personas y dispositivos (lógica simplificada)
    // const baseRequirement = numPeople + numDevices;  Ajustar estos valores según sea necesario
    const calculatedSpeed = numDevices * totalBandwidth;

    setRecommendedSpeed(calculatedSpeed);
  };
  return (
    <div className="App">
      <div className="calculator-container">
        <h3>Calculadora de Velocidad de Internet</h3>

        <div className="my-4">
          <label
            for="numDevices"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Número de dispositivos conectados a internet:
          </label>
          <input
            type="number"
            id="numDevices"
            min="1"
            value={numDevices}
            onChange={(e) => setNumDevices(parseInt(e.target.value))}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div className="activities-group">
          <label>Seleccione las actividades en línea comunes:</label>
          <div className="flex items-center my-4">
            <input
              type="checkbox"
              value="Streaming SD Video"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Streaming de video en SD
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Streaming HD Video"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Streaming de video en HD
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Streaming 4K Video"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Streaming de video en 4K
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Online Gaming Casual"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Juegos en línea casuales
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Online Gaming Multijugador"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Juegos en línea multijugador
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Video Llamadas"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Video llamadas
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Uso de Redes Sociales"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Uso de redes sociales
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Descarga de Archivos"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Descarga de archivos
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Uso de Servicios en la Nube"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Uso de servicios en la nube
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              value="Navegar en Internet"
              onChange={handleActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Navegación Web y Correo
            </label>
          </div>
        </div>
        <button
          onClick={calculateSpeed}
          className="bg-blue-800 text-slate-100 p-2 w-full"
        >
          Calcular
        </button>
        {recommendedSpeed > 0 && (
          <div className="flex flex-col my-6 bg-indigo-900 p-2 rounded-md">
            <span className="text-white">Velocidad de internet recomendada:</span>
            <span className="font-bold text-amber-500 text-2xl text-center">
              {recommendedSpeed} Mbps
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculadoraVel;
