import "./assets/formulaire_identite_style.css";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Labellisation_ws } from "../../services/Labellisation_ws";

export function Formulaire_marche() {
  const params = useParams();
  const idExperience = params.idExperience;
  const idIdentite = params.idIdentite;
  const Agex_name = params.AgexName;
  const [rows, setRows] = useState([]);

  const navigate = useNavigate();

  const [marche, setMarche] = useState({
    reference_contrat: "",
    description: "",
    piece_jointe: "",
  });

  const [flash_message, setFlash_message] = useState({
    open_message: false,
    message: "",
    etat: false,
  });

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleChange = (e) => {
    switch (e.target.name) {
      case "reference_contrat":
        setMarche((prev_value) => ({
          ...prev_value,
          reference_contrat: e.target.value,
        }));
        break;

      case "description":
        setMarche((prev_value) => ({
          ...prev_value,
          description: e.target.value,
        }));
        break;

      case "piece_jointe":
        setMarche((prev_value) => ({
          ...prev_value,
          piece_jointe: e.target.value,
        }));
        break;
    }
  };

  function handleExperience() {
    navigate("/formulaire_experience/" + idIdentite + "/" + Agex_name);
  }

  const handleDelete = (id) => (ev) => {
    setIsid(id);
    console.log("id selectionné: ", id);
    Labellisation_ws.deleteRow(id).then((result) => {
      if (result.status) {
        console.log("nifafa");
        Labellisation_ws.AgexMarcheWithExperience(idIdentite).then(
          (results) => {
            if (results.status) {
              console.log("result apres suppression: ", results);
              console.log(typeof results);
              setRows(results.data.map((row) => ({ ...row, id: row.id })));
            } else {
              setRows([]);
            }
          }
        );
      } else {
        console.log("tsy nifafa");
      }
    });
  };

  function handleClick() {
    console.log("Id_identite recu dans le marche ", idIdentite);
    Labellisation_ws.agex_marche(
      idIdentite,
      idExperience,
      marche.reference_contrat,
      marche.description,
      marche.piece_jointe
    ).then((result) => {
      if (result.status) {
        console.log(result.data);
        console.log(typeof result.data);
        // setRows(result.data.map((row) => ({ ...row, id: row.id })));
        // setRows([
        //   {
        //     ...result.data, //avadika tableau aloha ilay result.data satria objet
        //     id: result.data.id,
        //   },
        // ]);

        // setRows((prevRows) => [
        //   ...prevRows,
        //   {
        //     ...result.data,
        //     id: result.data.id,
        //   },
        // ]);
        setFlash_message({
          open_message: true,
          message: "Marché bien insérer",
          etat: true,
        });

        setMarche({
          reference_contrat: "",
          description: "",
          piece_jointe: "",
        });
      } else {
        setFlash_message({
          open_message: true,
          message: "Erreur de l'insertion",
          etat: false,
        });
        console.log("Erreur !");
      }
    });
  }
  function handleClose_flash_commentaire() {
    setFlash_message({
      open_message: false,
      message: "",
      etat: false,
    });
  }

  const columns = [
    // { field: "id", headerName: "Id", width: 200 },
    { field: "experience", headerName: "Experience", width: 200 },
    { field: "numero", headerName: "N°", width: 100 },
    { field: "reference_contrat", headerName: "Réference contrat", width: 200 },
    {
      field: "description_marche",
      headerName: "Description du marche",
      width: 300,
    },
    { field: "file_marche", headerName: "Nom du fichier", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Button title="Supprimer" onClick={handleDelete(params.id)}>
              <DeleteOutlineIcon style={{ color: "red" }} />
            </Button>
          </div>
        );
      },
    },
  ];

  const [isid, setIsid] = useState(0);
  useEffect(() => {
    Labellisation_ws.AgexMarcheWithExperience(idIdentite).then((result) => {
      if (result && result.status) {
        setRows(result.data.map((row) => ({ ...row, id: row.id })));
        console.log(result.data);
      } else {
        console.log("Aucune donnée  ");
      }
    });
  }, [flash_message]);

  const handleClose = () => {
    navigate("/formulaire_identite");
  };

  const handleFinal = () => {
    navigate('/formulaire_final/' + idIdentite);
  }

  return (
    <>
      <div class="main_container">
        <div className="title">Labellisation des partenaires</div>
        <div class="container1">
          <div class="container1_1">
            <div className="marche">MARCHES</div>
            {/* <div className="doneIcon">
              <Button>
                <DoneAllIcon style={{ color: "green" }} onClick={handleClose} />
              </Button>
            </div> */}
          </div>

          <div class="container1_2">
            <div className="tableau">
              <h2>Recapitulatif</h2>
              {/* <Experience_table className="tab" lines={rows} /> */}
              <div style={{ height: 300, width: "90%", marginLeft: "50px" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  // getRowId={(row: any) =>  row.first_name + row.salary}
                  pageSize={7}
                  rowsPerPageOptions={[7]}
                />
              </div>
            </div>
            <div class="container_row">
              <div class="left">Réference contrat</div>
              <div class="rigth">
                <input
                  type="text"
                  name="reference_contrat"
                  id="reference_contrat"
                  value={marche.reference_contrat}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="container_row">
              <div class="left">Description du marché</div>
              <div class="rigth">
                <textarea
                  name="description"
                  id="description"
                  value={marche.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div class="container_row">
              <div class="left">Pièce justificative</div>
              <div class="rigth">
                <input
                  type="file"
                  name="piece_jointe"
                  id=""
                  value={marche.piece_jointe}
                  onChange={handleChange}
                  accept=".zip,.rar"
                />
              </div>
            </div>
          </div>
          <div className="container1_3">
            <div className="button">
              <button
                type="button"
                className="annuler"
                onClick={handleExperience}
              >
                AUTRE EXPERIENCE
              </button>
            </div>
            <div className="button">
              {/* <input type="submit" value="Suivant" onClick={handleClick}/> */}
              <button type="button" onClick={handleClick}>
                AJOUTER LE MARCHE
              </button>
            </div>
            <div className="button">
              <button
                type="button"
                className="terminer"
                onClick={handleFinal}
              >TERMINER</button>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={flash_message.open_message}
        autoHideDuration={3000}
        onClose={handleClose_flash_commentaire}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose_flash_commentaire}
          autoHideDuration={3000}
          variant="filled"
          severity={flash_message.etat === true ? "success" : "error"}
        >
          {flash_message.message}
        </Alert>
      </Snackbar>
    </>
  );
}
