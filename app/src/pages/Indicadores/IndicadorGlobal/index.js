import React from "react";

const GlobalIndicator = () => {
    return(
        <div className="right-content">
            <div className="indicator-section-title justify-content-center d-flex">
              Indicadores globales de inventarios energéticos
            </div>
            <div className="mt-2">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Indicador del año 0000
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">#</th>
                            <th className="table-title text-center">Tipo de indicador</th>
                            <th className="table-title text-center">Cantidad</th>
                            <th className="table-title text-center">Unidad</th>
                            <th className="table-title text-center">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Índice de consumo energético </td>
                            <td>100</td>
                            <td>kWh/mes - m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>2</td>
                            <td>Índice de potencia instalada </td>
                            <td>100</td>
                            <td>kW/m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Índice de consumo energético por equipo Misceláneo</td>
                            <td>100</td>
                            <td>kWh/mes - m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>4</td>
                            <td>Índice de consumo energético por Iluminación</td>
                            <td>100</td>
                            <td>kWh/mes - m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Índice de consumo energético por Aire Acondiconado</td>
                            <td>100</td>
                            <td>kWh/mes - m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>6</td>
                            <td>Índice de potencia instalada por equipo Misceláneo</td>
                            <td>100</td>
                            <td>kw/m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Índice de potencia instalada por Iluminación</td>
                            <td>100</td>
                            <td>kw/m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>8</td>
                            <td>Índice de potencia instalada  por Aire Acondiconado</td>
                            <td>100</td>
                            <td>kw/m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>Índice de consumo energético por área total</td>
                            <td>100</td>
                            <td>kWh/mes-m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>10</td>
                            <td>Índice de potencia instalada por área total</td>
                            <td>100</td>
                            <td>kW/m <sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>11</td>
                            <td>Índice de consumo energético por persona</td>
                            <td>100</td>
                            <td>kWh/mes-persona</td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>12</td>
                            <td>Índice de potencia instalada por persona</td>
                            <td>100</td>
                            <td>kW/persona</td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>13</td>
                            <td>Personas</td>
                            <td>100</td>
                            <td>personas</td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr className="active-row">
                            <td>14</td>
                            <td>Superficie</td>
                            <td>100</td>
                            <td>m<sup>2</sup></td>
                            <td>00-00-0000</td>
                            </tr>
                            <tr>
                            <td>15</td>
                            <td>Factor de potencia</td>
                            <td>100</td>
                            <td>s/u</td>
                            <td>00-00-0000</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Consumo promedio mensual de energía electrica/superficie construida</td>
                            <td>100</td>
                            <td>kWh/mes-m<sup>2</sup></td>
                            <td></td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default GlobalIndicator;