

function getIdTypeCandidature() {
    return localStorage.getItem("id_type_candidature")
}
function setIdTypeCandidature(id_type_candidature) {
    if (id_type_candidature !== Session_management.getIdTypeCandidature()) {
        Session_management.viderSession()
    }
    localStorage.setItem("id_type_candidature", id_type_candidature)
}
function setCandidatureComplet(candidatureComplet) {
    localStorage.setItem('candidatureComplet', JSON.stringify(candidatureComplet));
}
function getCandidatureComplet() {
    return JSON.parse(localStorage.getItem('candidatureComplet'))
}

function setIdIdentite(id_identite) {
    localStorage.setItem("id_identite", id_identite);
}
function getIdIdentite() {
    return localStorage.getItem("id_identite");
}
function setListeExperience(liste_experience) {
    localStorage.setItem("liste_experiences", JSON.stringify(liste_experience));
}
function getListeExperience() {
    return JSON.parse(localStorage.getItem("liste_experiences"))
}
function viderSession() {
    localStorage.removeItem("id_identite");
    localStorage.removeItem("liste_experiences");
    localStorage.removeItem("candidatureComplet");
}


export const Session_management = {
    getIdTypeCandidature,
    setIdTypeCandidature,

    setCandidatureComplet,
    getCandidatureComplet,

    setIdIdentite,
    getIdIdentite,

    setListeExperience,
    getListeExperience,

    viderSession
}