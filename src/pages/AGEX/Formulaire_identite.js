import "./assets/formulaire_identite_style.css";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { Labellisation_ws } from "../../services/Labellisation_ws";

export function Formulaire_identite() {

    const [identite, setIdentite] = useState({
        nom: "",
        lot: "",
        adresse: "",
        contact: "",
        nif: "",
        raison_sociale: "",
        numero_rcs_cin: "",
        numero_stat: "",
        activite: "",
        fin_validite: "",
        date_delivrance: "",
        adresse_cf: "",
        piece_jointe: "",
    });

    const navigate = useNavigate();

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

    const handleChange = (e) => {
        switch (e.target.name) {
            case "nom":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    nom: e.target.value,
                }));
                break;

            case "lot":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    lot: e.target.value,
                }));
                break;

            case "adresse":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    adresse: e.target.value,
                }));
                break;

            case "contact":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    contact: e.target.value,
                }));
                break;

            case "nif":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    nif: e.target.value,
                }));
                break;

            case "raison_sociale":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    raison_sociale: e.target.value,
                }));
                break;

            case "numero_rcs_cin":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    numero_rcs_cin: e.target.value,
                }));
                break;

            case "numero_stat":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    numero_stat: e.target.value,
                }));
                break;

            case "activite":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    activite: e.target.value,
                }));
                break;

            case "fin_validite":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    fin_validite: e.target.value,
                }));
                break;

            case "date_delivrance":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    date_delivrance: e.target.value,
                }));
                break;

            case "adresse_cf":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    adresse_cf: e.target.value,
                }));
                break;

            case "piece_jointe":
                setIdentite((prev_value) => ({
                    ...prev_value,
                    piece_jointe: e.target.value,
                }));
                break;
        }
    };

    function handleClick() {
        Labellisation_ws.identite(
            "1",
            identite.nom,
            identite.lot,
            identite.adresse,
            identite.contact,
            identite.nif,
            //identite.raison_sociale,
            //identite.numero_rcs_cin,
            identite.numero_stat,
            identite.activite,
            identite.fin_validite,
            identite.date_delivrance,
            identite.adresse_cf,
            identite.piece_jointe
        ).then((result) => {
            console.log(result.status);

            if (result.status) {
                setFlash_message({
                    open_message: true,
                    message: result.message,
                    etat: true,
                });

                console.log('valiny: ', result);
                console.log(result.nom_agex['nom_identite']);
            

                navigate("/formulaire_experience/" + result.id_identite + "/" + result.nom_agex['nom_identite']);


            } else {
                console.log("erreur");

                setFlash_message({
                    open_message: true,
                    message: result.message,
                    etat: false,
                });
                navigate("/formulaire_experience")  //aveo alana
            }
        });
    }

    function handleCancel() {
        setIdentite({
            nom: "",
            lot: "",
            adresse: "",
            contact: "",
            nif: "",
            raison_sociale: "",
            numero_rcs_cin: "",
            numero_stat: "",
            activite: "",
            fin_validite: "",
            date_delivrance: "",
            adresse_cf: "",
            piece_jointe: ""
        })
        //setPj([]);
    };

    return (
        <>
            {/* <div className="logo">
        <img src="assets/logo.png"/>
      </div>*/}
            <div className="main_container">
                <div className="title">Formulaire de labellisation des partenaires <br/>AGEX</div>
                <div className="container1">
                    <div className="container1_1">
                        IDENTITE
                    </div>
                    <div className="container1_2">
                        <div className="container_row">
                            <div className="left">Nom / Raison sociale</div>
                            <div className="rigth">
                                <input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    value={identite.nom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="container_row">
                            <div className="left">Adresse</div>
                            <div className="rigth adr">
                                <input
                                    type="text"
                                    name="lot"
                                    id="lot"
                                    placeholder="44 A 55 Bis"
                                    value={identite.lot}
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
                            <div className="left">Contact</div>
                            <div className="rigth">
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    value={identite.contact}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="container_row">
                            <div class="left">NIF</div>
                            <div class="rigth">
                                <input
                                    type="number"
                                    name="nif"
                                    id="nif"
                                    value={identite.nif}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {/* <div className="container_row">
                            <div class="left">Raison sociale</div>
                            <div class="rigth">
                                <input
                                    type="text"
                                    name="raison_sociale"
                                    id="raison_sociale"
                                    value={identite.raison_sociale}
                                    onChange={handleChange}
                                />
                            </div>
                        </div> */}
                        {/* <div className="container_row">
                            <div class="left">Numéro RCS/CIN</div>
                            <div class="rigth">
                                <input
                                    type="number"
                                    name="numero_rcs_cin"
                                    id="numero_rcs_cin"
                                    value={identite.numero_rcs_cin}
                                    onChange={handleChange}
                                />
                            </div>
                        </div> */}
                        <div class="container_row">
                            <div class="left">Numéro statistique</div>
                            <div class="rigth">
                                <input
                                    type="number"
                                    name="numero_stat"
                                    id="numero_stat"
                                    value={identite.numero_stat}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="container_row">
                            <div class="left">Activité dans la carte fiscale</div>
                            <div class="rigth">
                                {/* <input
                                    type="text"
                                    name="activite"
                                    id="activite"
                                    value={identite.activite}
                                    onChange={handleChange}
                                /> */}
                                <textarea 
                                type="text"
                                name="activite"
                                id="activite"
                                value={identite.activite}
                                onChange={handleChange}>

                                </textarea>
                            </div>
                        </div>
                        <div class="container_row">
                            <div class="left">Fin de validité de la carte fiscale</div>
                            <div class="rigth">
                                <input
                                    type="date"
                                    name="fin_validite"
                                    id="fin_validite"
                                    value={identite.fin_validite}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="container_row">
                            <div class="left">Délivrance de la carte fiscale</div>
                            <div class="rigth">
                                <input
                                    type="date"
                                    name="date_delivrance"
                                    id="date_delivrance"
                                    value={identite.date_delivrance}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="container_row">
                            <div className="left">Adresse dans la carte fiscale</div>
                            <div className="rigth">
                                <input
                                    type="text"
                                    name="adresse_cf"
                                    id="adresse_cf"
                                    value={identite.adresse_cf}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="container_row">
                            <div clasNames="left">Fichier NIF STAT (Zip/Rar)</div>
                            <div className="rigth">
                                <input
                                    type="file"
                                    name="piece_jointe"
                                    id="piece_jointe"
                                    value={identite.piece_jointe}
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
                                onClick={handleCancel}
                            >
                                ANNULER
                            </button>
                        </div>
                        <div className="button">
                            {/* <input type="submit" value="Suivant" onClick={handleClick}/> */}
                            <button type="button" onClick={handleClick}>
                                SUIVANT
                            </button>
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
