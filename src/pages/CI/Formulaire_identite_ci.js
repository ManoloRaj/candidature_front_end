import "./assets/formulaire_identite_style.css";
import { useEffect, useState } from "react";
//import { Labellisation_ws } from "../../services/Labellisation_ws";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Labellisation_ws } from "../../services/Labellisation_ws";
import { Session_management } from "../../services/Session_management";
// import { Labellisation_ws } from "../../services/Labellisation_ws";

export function Formulaire_identite_ci() {
    const navigate = useNavigate();
    const params = useParams();

    //const [candidature_complet, setCandidatureComplet] = useState({})

    const [error, setError] = useState(false)
    useEffect(() => {
        Session_management.setIdTypeCandidature(params.mode)
    }, [params])

    const [identite, setIdentite] = useState({
        id_type: Session_management.getIdTypeCandidature(),
        nom_identite: "",
        prenom_identite: "",
        num_cin: "",
        genre_identite: "",
        num_carte_fiscal: "",
        numero_carte_stat: "",
        lot_identite: "",
        adresse: "",
        id_fokontany: "",
        id_district: "",
        id_region: "",
        contact1: "",
        contact2: "",
        email: "",
        diplome: "",
        filiere: "",

        file_carte_fiscal: ""
    });

    useEffect(() => {
        console.log("session----", Session_management.getCandidatureComplet())
        if (Session_management.getCandidatureComplet() !== null) {
            setIdentite(Session_management.getCandidatureComplet());
        }
    }, [])

    const handleChange = (e) => {
        switch (e.target.name) {
            case "nom_identite":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    nom_identite: e.target.value,
                }));
                break;

            case "prenom_identite":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    prenom_identite: e.target.value,
                }));
                break;

            case "num_cin":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    num_cin: e.target.value,
                }));
                break;


            case "genre_identite":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    genre_identite: e.target.value,
                }));
                break;
            case "num_carte_fiscal":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    num_carte_fiscal: e.target.value,
                }));
                break;
            case "numero_carte_stat":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    numero_carte_stat: e.target.value,
                }));
                break;

            case "lot_identite":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    lot_identite: e.target.value,
                }));
                break;

            case "adresse":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    adresse: e.target.value,
                }));
                break;

            case "id_fokontany":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    id_fokontany: e.target.value,
                }));
                break;

            case "id_district":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    id_district: e.target.value,
                }));
                break;

            case "id_region":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    id_region: e.target.value,
                }));
                break;

            case "contact1":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    contact1: e.target.value,
                }));
                break;
            case "contact2":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    contact2: e.target.value,
                }));
                break;

            case "email":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    email: e.target.value,
                }));
                break;

            case "diplome":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    diplome: e.target.value,
                }));
                break;


            case "filiere":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    filiere: e.target.value,
                }));
                break;

            case "file_carte_fiscal":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    file_carte_fiscal: e.target.files[0],
                }));
                break;
        }
    };

    function handleClick(e) {
        e.preventDefault();

        Labellisation_ws.ci_identite(
            identite.id_type,
            identite.nom_identite,
            identite.prenom_identite,
            identite.num_cin,
            identite.genre_identite,
            identite.num_carte_fiscal,
            identite.numero_carte_stat,
            identite.lot_identite,
            identite.adresse,
            identite.id_fokontany,
            identite.id_district,
            identite.id_region,
            identite.contact1,
            identite.contact2,
            identite.email,
            identite.num_carte_fiscal,
            identite.numero_carte_stat,
            identite.diplome,
            identite.filiere,

            identite.file_carte_fiscal
        )
            .then((result) => {
                if(result === undefined){
                    setError(true)
                }
                if (result.status) {

                    console.log(" IDENTITE,---", identite)

                    Session_management.setIdIdentite(result.id_identite)
                    Session_management.setCandidatureComplet(identite)

                    navigate("/formulaire_experience_ci/");

                } else {
                    console.log("UNDIFINED")
                }
                

            });
    }


    return (
        <>
            <div className="logo">
                <img src="assets/logo.png" />
            </div>
            <div className="main_container">
                <div className="title">Formulaire AMI<br />
                    {
                        params.mode === "1" &&
                        <div>CI TMNC</div>
                    }
                    {
                        params.mode === "2" &&
                        <div>CI EMS</div>
                    }

                </div>

                <div className="container1">

                    {error === true &&
                        <div className="error">
                            Veuillez remplir tous les champs
                        </div>
                    }


                    <div className="container1_1">
                        IDENTITE
                    </div>
                    <div className="container1_2">
                        <div className="container_row">
                            <div className="left">Nom du candidat *</div>
                            <div className="rigth">
                                <input
                                    required
                                    type="text"
                                    name="nom_identite"
                                    id="nom"
                                    value={identite.nom_identite}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Prénom(s) du candidat</div>
                            <div className="rigth">
                                <input
                                    type="text"
                                    name="prenom_identite"
                                    id="prenom"
                                    value={identite.prenom_identite}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Numéro du CIN</div>
                            <div className="rigth">
                                <input
                                    type="number"
                                    name="num_cin"
                                    id="prenom"
                                    value={identite.num_cin}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>



                        <div className="container_row">
                            <div className="left">Adresse *</div>
                            <div className="rigth adr">
                                <input
                                    type="text"
                                    name="lot_identite"
                                    id="lot"
                                    placeholder="44 A 55 Bis"
                                    value={identite.lot_identite}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="adresse"
                                    id="adresse"
                                    placeholder="Longozoa"
                                    value={identite.adresse}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="container_row">
                            <div className="left">Telephone 1 *</div>
                            <div className="rigth">
                                <input
                                    type="number"
                                    name="contact1"
                                    id="contact"
                                    value={identite.contact1}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="container_row">
                            <div className="left">Telephone 2 </div>
                            <div className="rigth">
                                <input
                                    type="number"
                                    name="contact2"
                                    id="contact"
                                    value={identite.contact2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Email *</div>
                            <div className="rigth">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={identite.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Numéro d'Identité Fiscal</div>
                            <div className="rigth">
                                <input
                                    type="number"
                                    name="num_carte_fiscal"
                                    id="num_carte_fiscal"
                                    value={identite.num_carte_fiscal}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Numéro de la carte statistique</div>
                            <div className="rigth">
                                <input
                                    type="number"
                                    name="numero_carte_stat"
                                    id="numero_carte_stat"
                                    value={identite.numero_carte_stat}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div class="container_row">
                            <div class="left">Diplôme</div>
                            <div class="rigth">
                                <select
                                    name="diplome"
                                    id="diplome"
                                    value={identite.diplome}
                                    onChange={handleChange}>
                                    <option value="" selected="selected">Choisir le diplôme le plus élevé correspondant à la filière requise</option>
                                    <option value="Master" >Master</option>
                                    <option value="Maîtrise">Maîtrise</option>
                                    <option value="Niveau supérieur à Master/Maîtrise"> Niveau supérieur à Master/Maîtrise </option>

                                </select>
                            </div>
                        </div>
                        <div className="container_row">
                            <div class="left">Filière</div>
                            <div class="rigth">
                                <select
                                    name="filiere"
                                    id="filiere"
                                    value={identite.filiere}
                                    onChange={handleChange}
                                >
                                    <option value="Gestion, Finance, Comptabilité, Economie">
                                        Gestion, Finance, Comptabilité, Economie
                                    </option>
                                    <option value="Administration, Management">
                                        Administration, Management
                                    </option>
                                    <option value="Sciences humaines, Lettres, Communication">
                                        Sciences humaines, Lettres, Communication
                                    </option>
                                    <option value="Droit, Philosophie, Sociologie">
                                        Droit, Philosophie, Sociologie
                                    </option>
                                    <option value="Sciences sociales et développement">
                                        Sciences sociales et développement
                                    </option>
                                    <option value="Géographie, Histoire, Anthropologie">
                                        Géographie, Histoire, Anthropologie
                                    </option>
                                    <option value="Agronomie, Environnement, Sciences de la terre, Sciences Naturelles">
                                        Agronomie, Environnement, Sciences de la terre, Sciences Naturelles
                                    </option>
                                    <option value="Science de l'éducation, Travail social, développement social">
                                        Science de l'éducation, Travail social, développement social
                                    </option>
                                    <option value="Sciences politiques ">
                                        Sciences politiques
                                    </option>
                                    <option value="Gestion des risques et catastrophes">
                                        Gestion des risques et catastrophes
                                    </option>
                                    <option value="Tourisme, ecotourisme">
                                        Tourisme, ecotourisme
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">
                                Pièce justificative du diplome le plus élevé qui correspond a la filière
                            </div>
                            <div className="rigth">
                                <input
                                    type="file"
                                    name="file_carte_fiscal"
                                    id="piece_jointe"
                                    file={identite.file_carte_fiscal}
                                    onChange={handleChange}
                                    accept=".pdf, .jpeg, .jpg" required
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Localité choisi *</div>
                            <div className="rigth adr">

                                <input
                                    type="text"
                                    name="id_region"
                                    placeholder="Region"
                                    value={identite.id_region}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="id_district"
                                    placeholder="District"
                                    value={identite.id_district}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="container1_3">
                        <div className="button">
                            {/* <button
                                type="button"
                                className="annuler"
                            //onClick={handleCancel}
                            >
                                ANNULER
                            </button> */}
                        </div>
                        <div className="button">
                            {/* <input type="submit" value="Suivant" onClick={handleClick}/> */}
                            <button type="button"
                                onClick={handleClick}
                            >
                                SUIVANT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}