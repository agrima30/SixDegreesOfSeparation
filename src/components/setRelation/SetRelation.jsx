import styles from "./SetRelation.module.css";
import { TextField, Button} from "@mui/material";
import { Container } from "@mui/system";
import { useState, useContext } from "react";
import Context from "../../context/Context";

const SetRelation = () => {
  const c = useContext(Context);
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person1 && person2) {
      c.newRelationship(person1, person2);
      console.log(person1, person2);
    }
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
          style={{ marginTop: "1em",
            marginBottom: "1em" }}
        />
        <Button variant="contained" type="submit" style={{ backgroundColor: "rgba(255, 132, 0, 0.893)" }}>ADD RELATION</Button>
      </form>
      
    </Container>
  );
};

export default SetRelation;
