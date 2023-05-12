import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Button } from "@material-ui/core";
import { Labellisation_ws } from "../../services/Labellisation_ws";

export function Formulaire_final() {
  const params = useParams();
  const idIdentite = params.idIdentite;
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "experience", headerName: "Experience", width: 200 },
    { field: "numero", headerName: "N°", width: 100 },
    { field: "reference_contrat", headerName: "Réference contrat", width: 200 },
    {
      field: "description_marche",
      headerName: "Description du marche",
      width: 300,
    },
    { field: "file_marche", headerName: "Nom du fichier", width: 100 },
  ];

  useEffect(() => {
    Labellisation_ws.AgexMarcheWithExperience(idIdentite).then((result) => {
      if (result && result.status) {
        setRows(result.data.map((row) => ({ ...row, id: row.id })));
        console.log(result.data);
      } else {
        console.log("Aucune donnée  ");
      }
    });
  }, []);

  return (
    <>
      <div className="main_container">
        <div className="title">Labellisation des partenaires</div>
        <div className="container1">
          <div style={{ height: 300, width: "80%", marginLeft: "50px" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              // getRowId={(row: any) =>  row.first_name + row.salary}
              pageSize={7}
              rowsPerPageOptions={[7]}
            />
          </div>
          <div className="message">
           <Button>
              <DoneAllIcon style={{ color: "green" }} />
            </Button>
            Votre dossier a bien été envoyé !
          </div>
        </div>
      </div>
    </>
  );
}
