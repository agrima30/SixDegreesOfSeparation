import styles from "./Add.module.css";
import { Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import { useState, useContext } from "react";
import Context from "../../context/Context";

const Add = () => {
  const c = useContext(Context);
  const [person, setPerson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person) {
      c.newUser(person);
    }
  };
  return (
    <Container className={styles.container}>
      <Typography variant="h2" gutterBottom style={{ fontWeight: "bold", color: "rgba(255, 132, 0, 0.893)" }}>
        DEGREE OF SEPARATION
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setPerson(e.target.value)}
          label="Person Name"
          variant="outlined"
          color="success"
          fullWidth
          style={{ marginTop: "1em", marginBottom: "1em" }}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "rgba(255, 132, 0, 0.893)" }}
        >
          ADD
        </Button>
      </form>
    </Container>
  );
};

export default Add;
