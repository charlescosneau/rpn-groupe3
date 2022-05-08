import { useState } from 'react';
import { Button, Input } from "@mui/material";
import { calculate }from "../../utils/rpnInputCalculator";
import { transformInputToValues } from '../../utils/transformInputToValues';

export default function InputCalculator() {
  const inputValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById("inputCalculator") as HTMLInputElement;
    const inputValue = input.value;
    const toCalculate = transformInputToValues(inputValue);
    setResult(calculate(toCalculate));
  };
  const [result, setResult] = useState<number | string>(0);

  return (
    <div>
      <div>
        <form action='' onSubmit={inputValue}>
          <Input id="inputCalculator" name="inputCalculator"/>
          <Button variant="contained" type='submit'>Calculer</Button>
        </form>
      </div>
      <Input disabled={true} placeholder="Resultat" value={result}/>
      <div>
        <h4>Consignes d'utilisation</h4>
        <ul>
          <li>Séparez chque élément par un espace. (" ") Exemple: "2 3 10 + *".</li>
          <li>Pour les chiffres et nombres négatifs, ajoutez un N en majuscule collé juste après. (3N = -3) Exemple: "2 3N 10 + *".</li>
          <li>Les chiffres et nombres a virgule sont représenter par des points. (.) Exemple: "2.3 3N 10 + *"</li>
          <li>Le premier et dernier caractère ne doit pas être un espace</li>
        </ul>
      </div>
    </div>
  );
}
