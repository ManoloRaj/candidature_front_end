import "./assets/formulaire_identite_style.css";
import { useState, useRef, useEffect } from "react";
import { Alert, Snackbar, Tooltip } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import logo from "./assets/images/LOGO_FID_HORIZONTAL.png";
import { Select_component } from "../SELECT_COMPONENT/Select_component";
import { MultiSelect } from "react-multi-select-component";
import { Labellisation_ws } from "../../services/Labellisation_ws";
import { DataGrid } from "@mui/x-data-grid";
import { data_domaine_experience } from "./data_domaine_experience";
import { data_activite_mission } from "./data_activite_misson";
import { Label } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@material-ui/core";
import { Session_management } from "../../services/Session_management";

export function Formulaire_experience_ci() {
  //const [candidatureComplet, setCandidatureComplet] = useState({});

  const navigate = useNavigate();
  //const experienceAndName = "EXPERIENCE POUR " + AgexName.toUpperCase();

  // const [id_identite, setIdentite] = useState(null);
  const [experience, setExperience] = useState({

    id_identite: Session_management.getIdIdentite(),
    annee_experience: "",
    nombre_mois_experience: "",
    organisme_experience: "",
    domaine_experience: "",
    activite_mission: "",
    description_experience: "",
    id_region: "",
    id_district: "",
    file_experience: "",
  });

  const [columns, setColumns] = useState([
    // {
    //   field: "id",
    //   headerName: "ID",
    //   width: 10,
    // },
    {
      field: "activite_mission",
      headerName: "Activité de la mission",
      width: 200,
    },
    {
      field: "annee_experience",
      headerName: "Année de l'éxpérience",
      width: 200,
    },
    {
      field: "description_experience",
      headerName: "Description de l'éxpérience",
      width: 300,
    },
    {
      field: "nombre_mois_experience",
      headerName: "Nombre de mois",
      width: 200,
    },
    {
      field: "organisme_experience",
      headerName: "Organisme",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Button
              title="Supprimer pour modifier"
              onClick={(e) => handleDeleteExperience((params.row.id_experience))}
            >
              <DeleteOutlineIcon style={{ color: "red" }} />
            </Button>
          </div>
        );
      },
    },
  ]);

  const [liste_experiences, setListe_experiences] = useState([]);

  const [isid, setIsid] = useState(0)

  useEffect(() => {
    Labellisation_ws
      .get_ci_experience(Session_management.getIdIdentite())
      .then((results) => {

        if (results.status) {
          // setListe_experiences(
          //   results.data.map((row) => ({ ...row, id: row.id }))
          // );
          setListe_experiences(results.data)
          Session_management.setListeExperience(results.data)

        }
      });
  }, []);

  useEffect(() => {
    Labellisation_ws
      .get_ci_experience(Session_management.getIdIdentite())
      .then((results) => {

        if (results.status) {
          // setListe_experiences(
          //   results.data.map((row) => ({ ...row, id: row.id }))
          // );
          setListe_experiences(results.data)
          Session_management.setListeExperience(results.data)

        }
      });
  }, [experience]);




  function handleChange(e) {
    switch (e.target.name) {
      case "annee_experience":
        setExperience((prev_value) => ({
          ...prev_value,
          annee_experience: e.target.value,
        }));
        break;

      case "nombre_mois_experience":
        setExperience((prev_value) => ({
          ...prev_value,
          nombre_mois_experience: e.target.value,
        }));
        break;

      case "organisme_experience":
        setExperience((prev_value) => ({
          ...prev_value,
          organisme_experience: e.target.value,
        }));
        break;

      case "domaine_experience":
        setExperience((prev_value) => ({
          ...prev_value,
          domaine_experience: e.target.value,
        }));
        break;

      case "activite_mission":
        setExperience((prev_value) => ({
          ...prev_value,
          activite_mission: e.target.value,
        }));
        break;

      case "description_experience":
        setExperience((prev_value) => ({
          ...prev_value,
          description_experience: e.target.value,
        }));
        break;

      case "id_region":
        setExperience((prev_value) => ({
          ...prev_value,
          id_region: e.target.value,
        }));
        break;

      case "id_district":
        setExperience((prev_value) => ({
          ...prev_value,
          id_district: e.target.value,
        }));
        break;

      case "file_experience":
        setExperience((prev_value) => ({
          ...prev_value,
          file_experience: e.target.files[0],
        }));
        break;
    }
  }

  function handleClick_ajouter_domaine_exp(domaine) {
    setExperience((prev_value) => ({
      ...prev_value,
      domaine_experience: experience.domaine_experience + "-" + domaine,
    }));
  }
  function handleClick_ajouter_activite_mission(activite_mission) {
    setExperience((prev_value) => ({
      ...prev_value,
      activite_mission: experience.activite_mission + "-" + activite_mission,
    }));
  }

  function handleClick_back(e) {
    e.preventDefault();
    if (Session_management.getIdTypeCandidature() === "1") {
      navigate("/formulaire_identite_ci/1");
    } else if (Session_management.getIdTypeCandidature() === "2") {
      navigate("/formulaire_identite_ci/2");
    }
  }

  function handleClick_ajouter() {


    Labellisation_ws.set_ci_experience(
      Session_management.getIdIdentite(),
      experience.annee_experience,
      experience.nombre_mois_experience,
      experience.organisme_experience,
      experience.domaine_experience,
      experience.activite_mission,
      experience.description_experience,
      experience.id_region,
      experience.id_district,
      experience.file_experience

    ).then((result) => {
      if (result.status) {
        console.log("mety");
        setExperience({
          id_identite: Session_management.getIdIdentite(),
          annee_experience: "",
          nombre_mois_experience: "",
          organisme_experience: "",
          domaine_experience: "",
          activite_mission: "",
          description_experience: "",
          id_region: "",
          id_district: "",
          file_experience: "",
        });

        //manisy

        //Session_management.setCandidatureComplet(candidatureComplet)
        Session_management.setListeExperience(liste_experiences)

      } else {
        console.log("tsy mety");
      }
    });
  }

  function handleClick_terminer(e) {
    e.preventDefault();
    navigate("/synthese_ci");
  }

  const handleDeleteExperience = (id) => {
    console.log(id)
    setIsid(id);
    console.log("id selectionné: ", id);
    Labellisation_ws.deleteExperience(id).then((result) => {
      if (result.status) {
        console.log("nifafa");

      } else {
        console.log("tsy nifafa");
      }
    });
  };







  return (
    <>
      <div class="main_container">
        <div className="title">Formulaire AMI</div>
        <div class="container1">
          <div class="container1_1">
            EXPERIENCE DU CONSULTANT : {Session_management.getCandidatureComplet().nom_identite}{" "}
            {Session_management.getCandidatureComplet().prenom_identite}
          </div>
          <div className="resumer_experience">
            <DataGrid
              columns={columns}
              rows={liste_experiences}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>

          <div class="iteration">
            <div class="container1_2">
              <div class="container_row">
                <div class="left">Année de l'experience</div>
                <div class="right">
                  <select
                    name="annee_experience"
                    value={experience.annee_experience}
                    id="annee"
                    onChange={handleChange}
                  >
                    <option value="">Choisir l'année de l'éxpérience</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
              </div>

              <div class="container_row">
                <div class="left">Durée du contrat en mois</div>
                <div class="right">
                  <input
                    type="number"
                    min="1"
                    max="12"
                    name="nombre_mois_experience"
                    id="nombre_mois_experience"
                    value={experience.nombre_mois_experience}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">Employeur</div>
                <div class="right">
                  <input
                    type="text"
                    name="organisme_experience"
                    id="organisme_experience"
                    value={experience.organisme_experience}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">Domaine de l'experience</div>
                <div class="right">
                  <div className="multiselect_pers">
                    <div className="list_item_top">
                      {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
                      <Tooltip title="Cliquez pour réinitialiser">
                        <div
                          className="item"
                          onClick={() =>
                            setExperience((prev_value) => ({
                              ...prev_value,
                              domaine_experience: "",
                            }))
                          }
                        >
                          {experience.domaine_experience}
                          <strong style={{ textAlign: "right" }}> x</strong>
                        </div>
                      </Tooltip>
                    </div>
                    <div className="list_item_bottom">
                      {data_domaine_experience.map((result) => {
                        return (
                          <div
                            className="item"
                            onClick={() =>
                              handleClick_ajouter_domaine_exp(result)
                            }
                          >
                            {result}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="container_row">
                <div class="left">Activité de la mission</div>
                <div class="right">

                  <div className="multiselect_pers">
                    <div className="list_item_top">
                      {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
                      <Tooltip title="Cliquez pour réinitialiser">
                        <div
                          className="item"
                          onClick={() =>
                            setExperience((prev_value) => ({
                              ...prev_value,
                              activite_mission: "",
                            }))
                          }
                        >
                          {experience.activite_mission}
                          <strong style={{ textAlign: "right" }}> x</strong>
                        </div>
                      </Tooltip>
                    </div>
                    <div className="list_item_bottom">
                      {data_activite_mission.map((result) => {
                        return (
                          <div
                            className="item"
                            onClick={() =>
                              handleClick_ajouter_activite_mission(result)
                            }
                          >
                            {result}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="container_row">
                <div class="left">Description de la mission</div>
                <div class="right">
                  <textarea
                    name="description_experience"
                    id="description"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">Région</div>
                <div class="right">
                  <input
                    type="text"
                    name="id_region"
                    value={experience.id_region}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">District</div>
                <div class="right">
                  <input
                    type="text"
                    name="id_district"
                    value={experience.id_district}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">
                  Joindre ici les pièces justificatives <br />
                  (Justifiant l'éxpérience, attestation de bonne fin ...)
                </div>
                <div class="right">
                  <input
                    type="file"
                    name="file_experience"
                    file={experience.file_experience}
                    onChange={handleChange}
                    accept=".pdf, .jpeg, .jpg" required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container1_3">
            <div className="button">
              <button type="button" onClick={handleClick_back}>
                RETOUR
              </button>
            </div>
            <div className="button">
              <button type="button" onClick={handleClick_ajouter}>
                AJOUTER EXPERIENCE
              </button>
            </div>
            <div className="button">
              <button type="button" onClick={handleClick_terminer}>
                TERMINER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
