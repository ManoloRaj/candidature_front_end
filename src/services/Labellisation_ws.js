import axios from "axios";
import { Backend_url } from "./Backend_url";

const api = axios.create({
  baseURL: Backend_url + `Labellisation/`,
});

export const Labellisation_ws = {

  //AGEX
  async identite(
    idType,
    nom,
    lot,
    adresse,
    contact,
    nif,
    //raisonSociale,
    //numRcsCin,
    numstat,
    activite,
    finValiditeCf,
    delivranceCf,
    adresseCf,
    pj
  ) {



    try {
      const result = await api.post("identite/", {
        id_type: idType,
        nom: nom,
        lot: lot,
        adresse: adresse,
        contact: contact,
        nif: nif,
        numero_stat: numstat,
        activite: activite,
        fin_validite: finValiditeCf,
        date_delivrance_cf: delivranceCf,
        adresse_cf: adresseCf,
        file: null,
      });

      return result.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },

  async agex_experience(
    id_identite,
    annee_experience,
    organisme_experience,
    domaine_experience,
    experience_mission,
    description_experience,
    id_district,
    file_experience
  ) {
    console.log("id_identite", id_identite);
    console.log("annee_experience", annee_experience);
    console.log("organisme_experience", organisme_experience);
    console.log("domaine_experience", domaine_experience);
    console.log(" experience_mission", experience_mission);
    console.log("description_experience", description_experience);
    console.log("id_district", id_district);
    console.log("file_experience", file_experience);

    try {
      const result = await api.post("agex_experience/", {
        id_identite: id_identite,
        annee_experience: annee_experience,
        organisme_experience: organisme_experience,
        domaine_experience: domaine_experience,
        experience_mission: experience_mission,
        description_experience: description_experience,
        id_district: id_district,
        file_experience: file_experience,
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  },

  async agex_marche(
    id_identite,
    id_experience,
    reference_contrat,
    desc_marche,
    file_marche,
    experience_mission,
    description_experience,
    id_district,
    file_experience
  ) {
    console.log("id_identite", id_identite);
    console.log("id_experience", id_experience);
    console.log("reference_contrat", reference_contrat);
    console.log("desc_marche", desc_marche);
    console.log("file_marche", file_marche);

    try {
      const result = await api.post("agex_marche/", {
        id_identite: id_identite,
        id_experience: id_experience,
        reference_contrat: reference_contrat,
        desc_marche: desc_marche,
        file_marche: file_marche,
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  },





  //CI TMNC
  async ci_identite(
    id_type,
    nom_identite,
    prenom_identite,
    num_cin,
    genre_identite,
    num_carte_fiscal,
    numero_carte_stat,
    lot_identite,
    adresse,
    id_fokontany,
    id_district,
    id_region,
    contact1,
    contact2,
    email,
    numero_carte_fiscal,
    num_carte_stat,
    diplome,
    filiere,
    file_carte_fiscal
  ) {


    try {

      var myHeaders = new Headers();
      myHeaders.append("Cookie", "ci_session=s4ee6gkvokhk4cmo3n8th7sa2bo42m1l");

      var formdata = new FormData();
      formdata.append("id_type", id_type);
      formdata.append("nom_identite", nom_identite);
      formdata.append("prenom_identite", prenom_identite);
      formdata.append("num_cin", num_cin);
      formdata.append("genre_identite", genre_identite);
      formdata.append("num_carte_fiscal", num_carte_fiscal);
      formdata.append("numero_carte_stat", numero_carte_stat);
      formdata.append("lot_identite", lot_identite);
      formdata.append("adresse", adresse);
      formdata.append("id_fokontany", id_fokontany);
      formdata.append("id_district", id_district);
      formdata.append("id_region", id_region);
      formdata.append("contact1", contact1);
      formdata.append("contact2", contact2);
      formdata.append("email", email);
      formdata.append("numero_carte_fiscal", numero_carte_fiscal);
      formdata.append("num_carte_stat", num_carte_stat);
      formdata.append("diplome", diplome);
      formdata.append("filiere", filiere);

      formdata.append("file_carte_fiscal", file_carte_fiscal, file_carte_fiscal.name);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch(Backend_url + "Labellisation/ci_identite", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      // const result = await api.post("ci_identite/", {
      //   id_type,
      //   nom_identite,
      //   prenom_identite,
      //   num_cin,
      //   genre_identite,
      //   num_carte_fiscal,
      //   numero_carte_stat,
      //   lot_identite,
      //   adresse,
      //   id_fokontany,
      //   id_district,
      //   id_region,
      //   contact1,
      //   contact2,
      //   email,
      //   numero_carte_fiscal,
      //   num_carte_stat,
      //   diplome,
      //   filiere,
      //   file_carte_fiscal: ""
      // });

      return {
        "status": true,
        "message": "Insertion réussie",
        "id_identite": "1"
      };

    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },


  async set_ci_experience(
    id_identite,
    annee_experience,
    nombre_mois_experience,
    organisme_experience,
    domaine_experience,
    activite_mission,
    description_experience,
    id_region,
    id_district,
    file_experience
  ) {
    try {


      var myHeaders = new Headers();
      myHeaders.append("Cookie", "ci_session=s4ee6gkvokhk4cmo3n8th7sa2bo42m1l");

      var formdata = new FormData();

      formdata.append("id_identite", id_identite);
      formdata.append("annee_experience", annee_experience);
      formdata.append("nombre_mois_experience", nombre_mois_experience);
      formdata.append("organisme_experience", organisme_experience);
      formdata.append("domaine_experience", domaine_experience);
      formdata.append("activite_mission", activite_mission);
      formdata.append("description_experience", description_experience);
      formdata.append("id_region", id_region);
      formdata.append("id_district", id_district);

      formdata.append("file_experience", file_experience, file_experience.name);


      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch(Backend_url + "Labellisation/set_ci_experience", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



      return {
        "status": true,
        "message": "Insertion réussie",
        "id_identite": "1"
      };


    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },

  async deleteExperience(id) {

    try {
      const result = await api.get(`delete_experience/${id}`);
      if (result) {
        console.log('suppresssion');
        return result.data;
      }
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },

  async region() {
    try {
      const result = await api.get(`region_get`);
      if (result) {
        console.log('suppresssion');
        return result.data;
      }
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },
  async district($idRegion) {
    try {
      const result = await api.get(`district_get`);
      if (result) {
        console.log('suppresssion');
        return result.data;
      }
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },










  async AgexMarcheWithExperience(id) {
    try {
      const result = await api.get(`experience_with_marche/${id}`)
      if (result) {
        console.log(result.data);
        return result.data;
      }
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  },

  async get_ci_experience(idIdentite) {
    try {
      const result = await api.get(`get_ci_experience/${idIdentite}`)
      if (result) {
        //console.log(result.data);
        return result.data;
      }
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  }

};
