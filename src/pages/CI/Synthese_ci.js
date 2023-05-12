import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Session_management } from "../../services/Session_management";
import { LoadingButton } from '@mui/lab';
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export function Synthese_ci() {

    let navigate = useNavigate();
    const [columns, setColumns] = useState([

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
        }
    ]);

    const [liste_experiences, setListe_experiences] = useState([]);
    const [open_dialog, setOpen_dialog] = useState(false)

    function handleClose_dialog() {
        Session_management.viderSession()
        navigate("/formulaire_identite_ci/" + Session_management.getIdTypeCandidature())
    }


    function handleClick_soumettre_candidature(e) {
        e.preventDefault()
        setOpen_dialog(true)

    }
    function handleClick_back(e) {
        e.preventDefault()
        navigate("/formulaire_experience_ci")
    }

    useEffect(() => {
        setListe_experiences(
            Session_management
                .getListeExperience()
        );
    }, [])

    return (
        <>
            <div class="main_container">
                <div className="title">Synthèse de vos informations professionnelles</div>


                <div class="container1">

                    <div class="iteration">

                        <div class="container1_1 underlined">

                            IDENTITE DU CONSULTANT
                        </div>
                        <div class="container1_2">

                            <div class="container_row">
                                <div class="left">Nom du candidat</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.nom_identite}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Prénom du candidat</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.prenom_identite}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Numéro du CIN</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.num_cin}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Adresse du Consultant</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.adresse}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Télephone 1</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.contact1}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Télephone 2</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.contact2}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Email</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.email}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Diplome du consultant</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.diplome}
                                </div>
                            </div>
                            <div class="container_row">
                                <div class="left">Filière du consultant</div>
                                <div class="right">
                                    {Session_management.getCandidatureComplet.filiere}
                                </div>
                            </div>


                        </div>
                    </div>


                    <div class="iteration">

                        <div class="container1_1 underlined">
                            EXPERIENCES PROFESSIONNELLES
                        </div>
                        <div class="container1_2">
                            {/* {
                                liste_experiences !== [] &&
                                liste_experiences.map((result) => {
                                    return (
                                        <>
                                            <div className="container_row">
                                                <h1>Expérience {result.id}</h1>
                                            </div>
                                            <div class="container_row">
                                                <div class="left">Organisme</div>
                                                <div class="right">
                                                    {result.organisme_experience}
                                                </div>
                                            </div>
                                            <div class="container_row">
                                                <div class="left">Activité de la mission</div>
                                                <div class="right">
                                                    {result.activite_mission}
                                                </div>
                                            </div>
                                            <div class="container_row">
                                                <div class="left">Année de l'éxpérience</div>
                                                <div class="right">
                                                    {result.activite_mission}
                                                </div>
                                            </div>
                                            <div class="container_row">
                                                <div class="left">Nombre de mois de l'expérience</div>
                                                <div class="right">
                                                    {result.nombre_mois_experience} mois
                                                </div>
                                            </div>

                                            <div class="container_row">
                                                <div class="left">Description de l'expérience</div>
                                                <div class="right">
                                                    {result.description_experience}
                                                </div>
                                            </div>

                                            <div class="container_row">
                                                <div class="left">Domaine de l'expérience</div>
                                                <div class="right">
                                                    {result.domaine_experience}
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            } */}

                            <DataGrid
                                columns={columns}
                                rows={liste_experiences}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />

                        </div>
                    </div>

                    <div className="container1_3">

                        <div className="button">
                            <button type="button" onClick={handleClick_back}>
                                RETOUR
                            </button>
                        </div>
                        <div className="button">
                            <LoadingButton
                                type="button"
                                onClick={handleClick_soumettre_candidature}

                            >
                                Soumettre candidature
                            </LoadingButton>
                        </div>
                    </div>

                </div>



            </div>



            <Dialog
                open={open_dialog}
                onClose={handleClose_dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Votre candidature a bien été envoyé
                </DialogTitle>
                <DialogContent>
                    <Button onClick={handleClose_dialog} autoFocus>
                        OK
                    </Button>
                </DialogContent>

            </Dialog>
        </>
    )
}