import React, { useState } from "react";
import "./Assets/style.css";

export function Select_component() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const [tableau, setTableau] = useState([]);
  //values = array();
  var temptable = [];

  const [myArray, setMyArray] = useState([]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "protection_sociale":
        setSelected((prev_value) => ({
          ...prev_value,
          protection_sociale: event.target.value,
        }));
        console.log("ps: ", event.target.checked);

        var element = event.target.value;

        for (var i = 0; i < temptable.length; i++) {
          if (element !== temptable[i]) {
            if (event.target.checked == true) {
              temptable.push(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            } else {
              temptable.pop(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            }
          }
        }

        // if (event.target.checked == true) {
        //   temptable.push(event.target.value);
        //   //setTableau(...temptable);
        //   setMyArray((oldArray) => [...oldArray, temptable]);
        //   console.log("tableau: ", myArray);
        // } else {
        //   temptable.pop(event.target.value);
        //   //setTableau(temptable);
        //   setMyArray((oldArray) => [...oldArray, temptable]);
        //   console.log("tableau: ", myArray);
        // }
        break;

      case "activite_d_urgence":
        setSelected((prev_value) => ({
          ...prev_value,
          activite_d_urgence: event.target.value,
        }));
        console.log("a: ", event.target.checked);
        var element = event.target.value;
        for (var i = 0; i < temptable.length; i++) {
          if (element !== temptable[i]) {
            if (event.target.checked == true) {
              temptable.push(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            } else {
              temptable.pop(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            }
          }
        }
        // if (event.target.checked == true) {
        //   temptable.push(event.target.value);
        //   //setTableau(...temptable);
        //   setMyArray((oldArray) => [...oldArray, temptable]);
        //   console.log("tableau: ", myArray);
        // } else {
        //   temptable.pop(event.target.value);
        //   //setTableau(...temptable);
        //   setMyArray((oldArray) => [...oldArray, temptable]);
        //   console.log("tableau: ", myArray);
        // }

        break;

      case "developpement":
        setSelected((prev_value) => ({
          ...prev_value,
          developpement: event.target.value,
        }));
        console.log("d: ", event.target.checked);

        var element = event.target.value;

        for (var i = 0; i < temptable.length; i++) {
          if (element !== temptable[i]) {
            if (event.target.checked == true) {
              temptable.push(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            } else {
              temptable.pop(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            }
          }
        }

        // if (event.target.checked == true) {
        //   temptable.push(event.target.value);
        //   setTableau(...temptable);
        //   console.log("tableau: ", temptable);
        // } else {
        //   temptable.pop(event.target.value);
        //   setTableau(...temptable);
        //   console.log("tableau: ", temptable);
        // }
        break;

      case "transferts_monétaires":
        setSelected((prev_value) => ({
          ...prev_value,
          transferts_monétaires: event.target.value,
        }));
        console.log("tm: ", event.target.checked);

        var element = event.target.value;

        for (var i = 0; i < temptable.length; i++) {
          if (element !== temptable[i]) {
            if (event.target.checked == true) {
              temptable.push(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            } else {
              temptable.pop(event.target.value);
              setMyArray((oldArray) => [...oldArray, temptable]);
              //console.log("tableau: ", myArray);
            }
          }
        }

        // if (event.target.checked == true) {
        //   temptable.push(event.target.value);
        //   setTableau(...temptable);
        //   console.log("tableau: ", temptable);
        // } else {
        //   temptable.pop(event.target.value);
        //   setTableau(...temptable);
        //   console.log("tableau: ", temptable);
        // }

        break;
    }
  };

  return (
    <>
      <div className="main_container_select">
        <div className="options_title" onClick={() => setOpen(!open)}>
          Selectionnez un ou plusieurs options
        </div>

        <div
          className="liste"
          style={{
            display: open === true ? "" : "none",
          }}
        >
          <div className="container_rows">
            <div className="left">
              <input
                type="checkbox"
                name="protection_sociale"
                id="protection_sociale"
                value="protection_sociale"
                onChange={handleChange}
                ckecked={selected === 1 ? true : false}
              />
            </div>
            <div className="right">protection sociale</div>
          </div>

          <div className="container_rows">
            <div className="left">
              <input
                type="checkbox"
                name="activite_d_urgence"
                id="activite_d_urgence"
                value="activite_d_urgence"
                onChange={handleChange}
                ckecked={selected === 1 ? true : false}
              />
            </div>
            <div className="right">activités d'urgence</div>
          </div>

          <div className="container_rows">
            <div className="left">
              <input
                type="checkbox"
                name="developpement"
                id="developpement"
                value="developpement"
                onChange={handleChange}
                ckecked={selected === 1 ? true : false}
              />
            </div>
            <div className="right">développement</div>
          </div>

          <div className="container_rows">
            <div className="left">
              <input
                type="checkbox"
                name="transferts_monétaires"
                id="transferts_monétaires"
                value="transferts_monétaires"
                onChange={handleChange}
                ckecked={selected === 1 ? true : false}
              />
            </div>
            <div className="right">transferts monétaires</div>
          </div>
        </div>
      </div>
    </>
  );
}
