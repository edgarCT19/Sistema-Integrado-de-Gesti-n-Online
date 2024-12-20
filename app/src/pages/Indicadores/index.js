import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SelectUR from "../../components/SelectUR";

const Indicadores_inventarios = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="indicator-section-title justify-content-center d-flex">
              Indicadores de inventarios energéticos
        </div>
        <div className="card">
          <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
           <SelectUR></SelectUR>
           <select className="select-filter mx-2">
            <option>Edificio</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
            <option value="">D</option>
            <option value="">E</option>
            <option value="">F</option>
            <option value="">LAB. PESADO</option>
           </select>
          </div>
        </div>
        {/** Colocar acá el titulo de la sección */}
        <div className="mt-3">
          <div className="card">
            <div className="d-flex justify-content-center align-items-center flex-column p-3">
              <div className="indicator-section-title">
                Nivel 1: Indicadores para dependencias/zonas/pisos
              </div>
              <div className="indicator-subtitle">
                El primer grupo de indicadores busca monitorear el consumo
                específico de las diferentes dependencias/pisos dentro de la
                universidad.
              </div>

              <table className="indicator-table">
                <thead>
                  <tr>
                    <th className="indicator-header">Aspecto a Medir</th>
                    <th className="indicator-header">Indicador</th>
                    <th className="indicator-header">Unidad de Medida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="indicator-row">
                    <td className="indicator-cell" rowSpan="2">
                      Consumo de energía eléctrica y potencia instalada de la
                      dependencia/piso, relacionada con el área
                    </td>
                    <td className="indicator-cell">4.83</td>
                    <td className="indicator-cell">kWh/mes-m²</td>
                  </tr>
                  <tr className="indicator-row">
                    <td className="indicator-cell">0.08</td>
                    <td className="indicator-cell">kW/m²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="card">
            <div className="d-flex justify-content-center align-items-center flex-column p-3">
              <div className="indicator-section-title">
                Nivel 2: Indicadores para equipos/sistemas principales
              </div>
              <div className="indicator-subtitle">
                Este grupo de indicadores, busca monitorear el consumo
                específico de las diferentesfuentes consumidoras de energia
                dentro de la instalación junto a la potencia instalada, con el
                fin de encontrar el nivel tecnológico para cada sistema evaluado
              </div>

              <table className="indicator-table">
                <thead>
                  <tr>
                    <th className="indicator-header">Aspecto a Medir</th>
                    <th className="indicator-header">Índices</th>
                    <th className="indicator-header">Indicador</th>
                    <th className="indicator-header">Unidad de Medida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="indicator-row">
                    <td className="indicator-cell" rowSpan="3">
                      Consumo de energía eléctrica y potencia instalada de la
                      dependencia/piso, relacionada con el área
                    </td>
                    <td className="indicator-cell">
                      Índice de consumo energetico por Misceláneo
                    </td>
                    <td className="indicator-cell">4.83</td>
                    <td className="indicator-cell">kWh/mes-m²</td>
                  </tr>
                  <tr className="indicator-row">
                    <td className="indicator-cell">
                      Índice de consumo energetico por Iluminación
                    </td>
                    <td className="indicator-cell">4.83</td>
                    <td className="indicator-cell">kW/m²</td>
                  </tr>
                  <tr className="indicator-row">
                    <td className="indicator-cell">
                      Índice de consumo energetico por Aires Acondicionados
                    </td>
                    <td className="indicator-cell">4.83</td>
                    <td className="indicator-cell">kW/m²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="card">
            <div className="d-flex justify-content-center align-items-center flex-column p-3">
              <div className="indicator-section-title">
                Nivel 3: Indicadores para el establecimiento
              </div>
              <div className="indicator-subtitle">
                Con estos indicadores, se busca monitorear el consumo específico
                del Edificio y compararlo con edificaciones similares dentro de
                la Universidad.
              </div>

              <table className="indicator-table">
                <thead>
                  <tr>
                    <th className="indicator-header">Aspecto a Medir</th>
                    <th className="indicator-header">Indicador</th>
                    <th className="indicator-header">Unidad de Medida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="indicator-row">
                    <td className="indicator-cell" rowSpan="2">
                      Consumo de energía eléctrica y potencia instalada del
                      sistema, relacionada con el área y la ocupación
                    </td>
                    <td className="indicator-cell">4.83</td>
                    <td className="indicator-cell">kWh/mes-m²</td>
                  </tr>
                  <tr className="indicator-row">
                    <td className="indicator-cell">0.08</td>
                    <td className="indicator-cell">kW/m²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Indicadores_inventarios;
