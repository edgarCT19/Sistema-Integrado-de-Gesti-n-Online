import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <div className="dashboardBox">Mostrar diseño intuitivo de totales e indicadores</div>

              <div className="dashboardBox">Mostrar diseño intuitivo de totales e indicadores</div>

              <div className="dashboardBox">Mostrar diseño intuitivo de totales e indicadores</div>

              <div className="dashboardBox">Mostrar diseño intuitivo de totales e indicadores</div>
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box"><h5>Gráfica de pastel</h5></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="card">
            <h5>Gráfica de frecuencias</h5>
          </div>
        </div>
        <div class="mt-4">
          <div class="row">
            <div class="col-sm"><div className="card"><h3>Gráfica de barras</h3></div></div>
            <div class="col-sm"><div className="card"><h3>Otro estilo de gráficas</h3></div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
