import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddCard = ({ deactivatedCardsArray, setDeactivatedCardsArray }) => {
  const [inputVal, setInputVal] = React.useState({
    id: "",
    name: "",
    cardnumber: "",
    expirydate: "",
    cvc: "",
    activated: false,
    vendor: "",
  });

  //

  const handleUpdate = (inputVal, index) => {
    if (deactivatedCardsArray.length === 3) {
      alert(
        "You can create maximum 3 cards, please remove an already existing card in order to create new one"
      );
    } else {
      const newCard = [
        ...deactivatedCardsArray,
        {
          id: Date.now().toString(),
          name: inputVal.name,
          cardnumber: inputVal.cardnumber,
          cvc: inputVal.cvc,
          vendor: inputVal.vendor,
          expirydate: inputVal.expirydate,
          activated: false,
        },
      ];
      setDeactivatedCardsArray(newCard);
    }

    setInputVal("");
  };

  const handleChange = (evt) => {
    setInputVal({
      ...inputVal,
      [evt.target.name]: evt.target.value,

      [evt.target.cardnumber]: evt.target.value,
      [evt.target.expirydate]: evt.target.value,
      [evt.target.cvc]: evt.target.value,
      [evt.target.vendor]: evt.target.value,
    });
  };

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <Grid container>
      <Grid container item justifyContent="space-evenly">
        <Grid>
          {" "}
          <Typography gutterBottom variant="h4" component="div">
            Create Cards
          </Typography>
        </Grid>
        <Grid>
          {" "}
          <Button
            variant="contained"
            endIcon={<HomeIcon />}
            onClick={backToHome}
            size="small"
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item>
          {" "}
          <Card sx={{ maxWidth: 345, backgroundColor: "pink" }}>
            <CardContent key={inputVal.id}>
              <Typography gutterBottom variant="h6" component="div">
                Card beholder: {inputVal.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                cardnumber: {inputVal.cardnumber}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                expirydate: {inputVal.expirydate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ccv: {inputVal.cvc}
              </Typography>{" "}
              <Typography variant="body2" color="text.secondary">
                <CreditCardIcon></CreditCardIcon>
                {inputVal.vendor}
              </Typography>
            </CardContent>
          </Card>{" "}
        </Grid>
        <Grid item>
          {" "}
          <Card>
            <TextField
              name="name"
              placeholder="Name Surname"
              onChange={handleChange}
            />

            <TextField
              name="cardnumber"
              placeholder=" Cardnumber (16 characters)"
              onChange={handleChange}
            />

            <TextField
              name="expirydate"
              placeholder=" Expirydate MM/YY"
              onChange={handleChange}
            />

            <TextField
              name="cvc"
              placeholder="Cvc (3 characters)"
              onChange={handleChange}
            />

            <CardContent>
              <label for="Visa">Visa</label>
              <input
                name="vendor"
                type="radio"
                id="Visa"
                value="Visa"
                checked={inputVal.vendor === "Visa"}
                onChange={handleChange}
              />

              <label for="Mastercard">Mastercard</label>
              <input
                type="radio"
                id="Mastercard"
                name="vendor"
                value="Mastercard"
                checked={inputVal.vendor === "Mastercard"}
                onChange={handleChange}
              />

              <label for="American express">American express</label>
              <input
                value="American express"
                type="radio"
                name="vendor"
                checked={inputVal.vendor === "American express"}
                onChange={handleChange}
              />
            </CardContent>

            <Button variant="outlined" onClick={() => handleUpdate(inputVal)}>
              Update
            </Button>
            {deactivatedCardsArray.length ? (
              <Button variant="outlined" onClick={backToHome}>
                Click here to see your created card/cards
              </Button>
            ) : (
              <Typography></Typography>
            )}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddCard;
