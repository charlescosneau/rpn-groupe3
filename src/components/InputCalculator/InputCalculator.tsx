import { Button, Input } from "@mui/material";

export default function InputCalculator() {
  return (
    <div>
      <div>
        <Input/>
        <Button variant="contained">Calculer</Button>
      </div>
        <Input disabled={true} placeholder="Resultat"/>
    </div>
  );
}
