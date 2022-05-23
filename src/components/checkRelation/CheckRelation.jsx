import styles from "./CheckRelation.module.css";
import { TextField, Button} from "@mui/material";
import { Container } from "@mui/system";
import { useState, useContext } from "react";
import Context from "../../context/Context";

const CheckRelation = () => {
  const c = useContext(Context);
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person1 && person2) {
      c.onSearch(person1, person2);
    }
    setPerson1("");
    setPerson2("");
  };
  return (
    <Container className={styles.container}>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          className={styles.name}
          onChange={(e) => setPerson1(e.target.value)}
          label="Person 1"
          variant="outlined"
          color="success"
          fullWidth
          value={person1}
          style={{ marginTop: "1em",
            marginBottom: "1em" }}
        />
        <TextField
          className={styles.name}
          onChange={(e) => setPerson2(e.target.value)}
          label="Person 2"
          variant="outlined"
          color="success"
          fullWidth
          value={person2}
          style={{ marginTop: "1em",
            marginBottom: "1em" }}
        />
        <Button variant="contained" type="submit" style={{ backgroundColor: "rgba(255, 132, 0, 0.893)" }}>CHECK RELATION</Button>
      </form>
      
    </Container>
  );
};

export default CheckRelation;
