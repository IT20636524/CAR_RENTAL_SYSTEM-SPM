import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cards from '../.././components/Card/Card';
import CardForm from '../.././components/Card/CardForm';
import {
  CreditCard,
  updateLocalStorageCards,
} from '../.././components/Card/CreditCard';
import Card from 'react-bootstrap/Card';
import CreditCardBox from '../Card/Card';
import axios from 'axios';

const initialState: CreditCard = {
  _id:'',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export default function CardView() {

  const navigate = useNavigate();
  const [state, setState] = useState<CreditCard>(initialState);
  const [cardsData, setCardsData] = useState<CreditCard[]>([]);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const [cardsDatas, setCardsDatas] = useState<CreditCard[]>([]);


  useEffect(() => {
    const fetchcloth = async () => {

      const res = await axios.get('http://localhost:5000/api/cards')
      const cards: CreditCard[]=res.data
      setCardsDatas(cards)
      console.log(cards)

    }
    fetchcloth()
  }, [])


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const cards: CreditCard[] = await axios.get('http://localhost:5000/api/cards')
    setCardsData(cards);
    if (cards && cards.length > 0) {
      const selectedCard = cards.find((card) => card._id);
      setState(selectedCard ?? initialState);
    }
  }

  async function selectCard(id: any) {

    setState(cardsDatas[id]);

  }

  const [id, setID] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvv, setCardCVV] = useState("");



  const updateStateValues = useCallback(
    (keyName: any, value: any) => {
      setState({
        ...state,
        [keyName]: value || '',
      });
    },
    [state],
  );

  function handleSubmitAction() {
    
    const cardData ={
      cardNumber:state.cardNumber,
      cardHolder:state.cardHolder ,
      cardMonth:state.cardMonth ,
      cardYear:state.cardYear,
      cardCvv:state.cardCvv,
      };
    console.log(cardData)
  
    console.log("st",state);

    axios.put(`http://localhost:5000/api/cards/update/${state._id}`,cardData)
  
      .then(function (response) {
        console.log(response.data);
        setID('');
        setCardNumber('');
        setCardHolder('');
        setCardMonth('');
        setCardYear('');
        setCardCVV('');
        window.location.replace("/view-cards");  
      });

  }
  function handleDeleteAction() {
      
        axios.delete('http://localhost:5000/api/cards/delete/' + state._id)
           
      window.location.replace('/view-cards');
  
  }

  return (
    <>

      <div>


        <div>

          <br /><br />
          <h1 className="home-page-heading text-center">Your Cards</h1><br /><br />
          <Container>
            <Row className="d-flex justify-content-center">
              {cardsDatas.length === 0 && (
                <Card style={{ width: '50%', margin: '25px' }}>
                  <Card.Body>
                    <Card.Title>No card exist</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Go to add card for create a new card.
                    </Card.Subtitle>
                    <Card.Text>
                      You can add,edit and delete card any time..
                    </Card.Text>

                  </Card.Body>
                </Card>
              )}


              {cardsDatas.map((card: CreditCard, id) => (
                <Col md={4} key={id} className="mb-3">
                  <button type="button" onClick={() => selectCard(id)} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "Transparent", border: "none", width: "100%" }}>
                    <CreditCardBox
                      cardNumber={card.cardNumber}
                      cardHolder={card.cardHolder}
                      cardMonth={card.cardMonth}
                      cardYear={card.cardYear}
                      cardCvv={card.cardCvv}
                      isCardFlipped={false}
                    ></CreditCardBox>
                  </button>
                </Col>
              ))}


              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content" style={{ width: "600px" }}>
                    <div className="modal-header" >
                      <h2 className="modal-title" id="exampleModalLabel">Edit Card</h2>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" style={{ width: "600px", height: "800px" }}>



                      <Fragment>
                        <div className="add-card-content">
                          <div className="wrapper">
                            <CardForm
                              selectedCreditCard={state}
                              onUpdateState={updateStateValues}
                              setIsCardFlipped={setIsCardFlipped}
                              handleSubmitAction={handleSubmitAction}
                            >
                              <Cards
                                cardNumber={state.cardNumber}
                                cardHolder={state.cardHolder}
                                cardMonth={state.cardMonth}
                                cardYear={state.cardYear}
                                cardCvv={state.cardCvv}
                                isCardFlipped={isCardFlipped}
                              ></Cards>
                            </CardForm>
                          </div>
                        </div>
                        <Container>
                          <Row className="justify-content-center">
                            <Col md={3} className="">
                              <div className="d-grid gap-1 delete-card">
                                <Button variant="link" size="lg" onClick={handleDeleteAction}>
                                  Delete Card
                                </Button>{' '}
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Fragment>


                    </div>

                  </div>
                </div>
              </div>


            </Row>

          </Container>
        </div>

      </div>

    </>


  );
}
