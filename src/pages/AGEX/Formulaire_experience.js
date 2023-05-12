import "./assets/formulaire_identite_style.css";
import { useState, useRef, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import logo from "./assets/images/LOGO_FID_HORIZONTAL.png";
import { Select_component } from "../SELECT_COMPONENT/Select_component";
import { MultiSelect } from "react-multi-select-component";
import { Labellisation_ws } from "../../services/Labellisation_ws";
//import { Helmet } from "react-helmet";

export function Formulaire_experience() {
  const params = useParams();
  const idIdentite = params.idIdentite;
  const AgexName = params.AgexName;
  const navigate = useNavigate();
  const experienceAndName = "EXPERIENCE POUR " + AgexName.toUpperCase();
  const selectRef = useRef(null);
  const options = [
    { label: "Protection sociale ", value: "Protection_sociale" },
    { label: "Activités d'urgence ", value: "Activite_d_urgence" },
    { label: "Développement ", value: "Developpement" },
    { label: "Transferts monétaires ", value: "Transferts_monetaires" },
  ];
  const [selected, setSelected] = useState([]);

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

  const handleClose_flash_commentaire = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFlash_message({
      open_message: false,
      message: "",
      etat: true,
    });
  };

  const [experience, setExperience] = useState({
    id_identite: "",
    annee: "",
    organisme: "",
    domaine: "",
    activite: "",
    description: "",
    region: "",
    district: "",
    piece_jointe: "",
  });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "annee":
        setExperience((prev_value) => ({
          ...prev_value,
          annee: e.target.value,
        }));
        break;

      case "organisme":
        setExperience((prev_value) => ({
          ...prev_value,
          organisme: e.target.value,
        }));
        break;

      case "domaine":
        setExperience((prev_value) => ({
          ...prev_value,
          domaine: e.target.value,
        }));
        break;

      case "activite":
        setExperience((prev_value) => ({
          ...prev_value,
          activite: e.target.value,
        }));
        break;

      case "marche":
        setExperience((prev_value) => ({
          ...prev_value,
          marche: e.target.value,
        }));
        break;

      case "description":
        setExperience((prev_value) => ({
          ...prev_value,
          description: e.target.value,
        }));
        break;

      case "region":
        setExperience((prev_value) => ({
          ...prev_value,
          region: e.target.value,
        }));
        break;

      case "district":
        setExperience((prev_value) => ({
          ...prev_value,
          district: e.target.value,
        }));
        break;
      case "piece_jointe":
        setExperience((prev_value) => ({
          ...prev_value,
          piece_jointe: e.target.value,
        }));
        break;
    }
  };

  const [idExperience, setIdExperience] = useState(0);

  function handleClick() {
    console.log(idIdentite);
    Labellisation_ws.agex_experience(
      idIdentite,
      experience.annee,
      experience.organisme,
      experience.domaine,
      experience.activite,
      experience.description,
      experience.region,
      experience.district,
      experience.piece_jointe
    ).then((result) => {
      if (result.status) {
        console.log("nety");
        //console.log("experience inserée", result.data);
        setIdExperience(result.id_experience);
        console.log("id_experience: ", result.id_experience);

        navigate(
          "/formulaire_marche/" +
            idIdentite +
            "/" +
            result.id_experience +
            "/" +
            AgexName
        );
      } else {
        console.log("tsy nety");
      }
    });
  }

  return (
    <>
      <div class="main_container">
      <div className="title">Labellisation des partenaires</div>
        <div class="container1">
          <div class="container1_1"> {experienceAndName} </div>
          <div class="iteration">
            <div class="container1_2">
              <div class="container_row">
                <div class="left">Année de l'experience</div>
                <div class="right">
                  {/* <input
                    type="number"
                    name="annee"
                    id="annee"
                    value={experience.annee}
                    onChange={handleChange}
                  /> */}
                  <select name="annee" id="annee" onChange={handleChange}>
                    <option value="vide">--</option>
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
                <div class="left">Organisme</div>
                <div class="right">
                  <input
                    type="text"
                    name="organisme"
                    id="organisme"
                    value={experience.organisme}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">Domaine de l'experience</div>
                <div class="right">
                  {/* <input
                    type="text"
                    name="domaine"
                    id="domaine"
                    value={experience.domaine}
                    onChange={handleChange}
                  /> */}
                  {/* <select
                    name="domaine"
                    id="domaine"
                    size={4}
                    multiple
                     muliselect-search='true'
                    onChange={handleChange}
                  > */}
                  {/* <option selected="selected">Veuillez choisir le(s) domaine(s)</option> */}
                  {/* <option value="Protection_sociale" selected="selected">Protection sociale</option>
                    <option value="Activite_d_urgence">{" "}Activités d'urgence</option>
                    <option value="développement">Développement</option>
                    <option value="transferts_monétaires">Transferts monétaires</option>
                  </select> */}

                  {/* <pre>{JSON.stringify(selected)}</pre> */}
                  <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                    className="multiselect"
                    //name="domaine"
                    disableSearch={true}
                    disableSelectAll={true}
                  />
                  {/* <Select_component value={experience.domaine} /> */}
                </div>
              </div>

              <div class="container_row">
                <div class="left">Activité de la mission</div>
                <div class="right">
                  {/* <textarea
                    name="activite"
                    value={experience.activite}
                    id="activite"
                    onChange={handleChange}
                  ></textarea> */}
                  <MultiSelect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={[
                      "Option 1",
                      "Option 2",
                      "Option 3",
                      "Option 4",
                      "Option 5",
                    ]}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">Description de la mission</div>
                <div class="right">
                  {/* <input
                    type="text"
                    name="description"
                    id="description"
                    value={experience.description}
                    onChange={handleChange}
                  /> */}
                  <textarea
                    name="description"
                    value={experience.description}
                    id="description"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div class="container_row">
                <div class="left">Région</div>
                <div class="right">
                  <input
                    type="text"
                    name="region"
                    value={experience.region}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">District</div>
                <div class="right">
                  <input
                    type="text"
                    name="district"
                    value={experience.district}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="container_row">
                <div class="left">Pièce justificative </div>
                <div class="right">
                  <input
                    type="file"
                    name="piece_jointe"
                    value={experience.piece_jointe}
                    onChange={handleChange}
                    accept=".zip,.rar"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*<div class="container1_3">
                        <div class="button">
                            <input type="submit" value = "Retour">
                        </div>
                        <div class="button">
                            {<input type="submit" value = "Suivant" >
                        </div>
    </div>*/}

          <div className="container1_3">
            {/*  <div className="button">
              <button
                type="button"
                className="annuler"
              //onClick={handleCancel}
              >
                RETOUR
              </button>
            </div>*/}
            <div className="button">
              <button type="button" onClick={handleClick}>
                SUIVANT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
