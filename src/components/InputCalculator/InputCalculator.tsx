import { useState } from 'react';
import { Button, Input } from "@mui/material";
import calculate from "../../utils/rpnInputCalculator";

export default function InputCalculator() {
  const [result, setResult] = useState<number | string>(5);
  const inputValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valued: (number | string)[] = [];
    const input = document.getElementById("inputCalculator") as HTMLInputElement;
    const value = input.value.split("");
    // TODO: NEGATE VALUE
    setResult(calculate(value));
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
    </div>
  );
}
