import {useEffect} from "react";

//Nettoit les ressources du composant
//setState: Fonction du useState
//base_value: Valeur de base du useState ([], {}, "", 0 ...)
const NettoyerComposant = (setState, base_value) => {
    useEffect(() => {
        return () => {
          if(typeof(base_value) == "object") 
            setState([]);
          else if(typeof(base_value) == "string") 
            setState("");
          else
            console.log("Aucun nettoyage");
        };
      }, []);
};

export default NettoyerComposant;