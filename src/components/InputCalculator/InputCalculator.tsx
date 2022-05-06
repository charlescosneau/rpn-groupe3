import { useState } from 'react';
import { Button, Input } from "@mui/material";
import calculate from "../../utils/rpnInputCalculator";

export default function InputCalculator() {
  const [result, setResult] = useState<number | string>(0);
  const inputValue = (e: React.FormEvent<HTMLFormElement>) => {
    const toCalculate: (number | string)[] = [];
    e.preventDefault();
    const input = document.getElementById("inputCalculator") as HTMLInputElement;
    const values = input.value.split(" ");
    values.forEach((value:string, index: number) => {
      if (String(value).includes('N')) {
        const negate: number = Number(value.replace('N', ''));
        toCalculate.push(-negate);
      } else {
        toCalculate.push(value);
      }
      setResult(calculate(toCalculate));
    })
  };

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
