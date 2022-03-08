import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/cardSlice";
import { Link } from "react-router-dom";
const Home = ({ deactivatedCardsArray, setDeactivatedCardsArray }) => {
  const name = useSelector((state) => state.card.name);
  const cardnumber = useSelector((state) => state.card.cardnumber);
  const expirydate = useSelector((state) => state.card.expirydate);
  const cvc = useSelector((state) => state.card.cvc);
  const vendor = useSelector((state) => state.card.vendor);

  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);
  console.log(card.card);

  const activateCard = (theCardToActivate) => {
    dispatch(
      update({
        name: theCardToActivate.name,
        cvc: theCardToActivate.cvc,
        cardnumber: theCardToActivate.cardnumber,
        vendor: theCardToActivate.vendor,
        expirydate: theCardToActivate.expirydate,
        id: theCardToActivate.id,
        activated: theCardToActivate.activated,
      })
    );

    deactivatedCardsArray.push(card);
    console.log(deactivatedCardsArray, "deactivated");
    const newCard = deactivatedCardsArray.filter(
      (theCard, id) => theCard.id !== theCardToActivate.id
    );
    console.log(newCard, "newcard");
    setDeactivatedCardsArray(newCard);
  };

  const remove = (index) => {
    const newDeactivatedCardsArray = [...deactivatedCardsArray];

    newDeactivatedCardsArray.splice(index, 1);

    setDeactivatedCardsArray(newDeactivatedCardsArray);
  };

  return (
    <div>
      <Typography gutterBottom variant="h4" component="div">
        Home
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Active card
      </Typography>

      <Card sx={{ maxWidth: 345, backgroundColor: "pink" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Name:{name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            cardnumber:{cardnumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            cvc: {cvc}
          </Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            <CreditCardIcon></CreditCardIcon>
            {vendor}
          </Typography>
        </CardContent>
      </Card>

      <Typography gutterBottom variant="h5" component="div">
        Inactive cards
      </Typography>
      {deactivatedCardsArray.map((theDeactivatedCard, index) => (
        <Card sx={{ maxWidth: 345, backgroundColor: "lightGray" }}>
          <CardContent key={theDeactivatedCard.id}>
            <Typography gutterBottom variant="h6" component="div">
              Name:{theDeactivatedCard.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              cardnumber:{theDeactivatedCard.cardnumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              cvc: {theDeactivatedCard.cvc}
            </Typography>{" "}
            <Typography variant="body2" color="text.secondary">
              <CreditCardIcon></CreditCardIcon>
              {theDeactivatedCard.vendor}
            </Typography>
          </CardContent>

          {!theDeactivatedCard.activated ? (
            <CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => activateCard(theDeactivatedCard)}
                >
                  Make this card active
                </Button>
                <Button size="small" onClick={() => remove(index)}>
                  Remove<DeleteIcon></DeleteIcon>
                </Button>
              </CardActions>
              <Typography gutterBottom variant="body2" component="div">
                This card is inactive
              </Typography>
            </CardContent>
          ) : (
            <CardContent></CardContent>
          )}
        </Card>
      ))}

      <Button size="large">
        <Link to="addcard">Create new Cards</Link>
      </Button>
    </div>
  );
};
export default Home;
