// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useMemo } from 'react';
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';
import './styles.scss';

const CARDS = {
  visa: '^4',
  mastercard: '^5[1-5]', //first digit 5 , 2nd digit from 1-5 ..
  discover: '^6011',
  unionpay: '^62',
};

const cardBackgroundName = () => {
  return `${'credit_card_bg'}.jpeg`;
};

const BACKGROUND_IMG = cardBackgroundName();
interface CardProp {
  cardHolder: any;
  cardNumber: any;
  cardMonth: any;
  cardYear: any;
  cardCvv: any;
  isCardFlipped: any;
}
function Cards(props: CardProp) {
  const {
    cardHolder,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvv,
    isCardFlipped,
  } = props;

  const cardType = (cardNumber: any) => {
    const number = cardNumber;
    let re;
    for (const [card, pattern] of Object.entries(CARDS)) {
      re = new RegExp(pattern);
      if (number.match(re) != null) {
        return card;
      }
    }

    return 'visa'; // default type
  };

  const useCardType = useMemo(() => {
    return cardType(cardNumber);
  }, [cardNumber]);

  const maskCardNumber = (cardNumber: string) => {
    const cardNumberArr = cardNumber.split('');
    cardNumberArr.forEach((val, index) => {
      if (index > 4 && index < 14) {
        if (cardNumberArr[index] !== ' ') {
          cardNumberArr[index] = '*';
        }
      }
    });

    return cardNumberArr;
  };

  return (
    <div className={'card-item ' + (isCardFlipped ? '-active' : '')}>
      <div className="card-item__side -front">
        <div className={`card-item__focus`} />
        <div className="card-item__cover">
          <img
            alt=""
            src={`/card-background/${BACKGROUND_IMG}`}
            className="card-item__bg"
          />
        </div>

        <div className="card-item__wrapper">
          <div className="card-item__top">
            <img
              src={'/card-asserts/chip.png'}
              alt=""
              className="card-item__chip"
            />
            <div className="card-item__type">
              <img
                alt={useCardType}
                src={`/card-type/${useCardType}.png`}
                className="card-item__typeImg"
              />
            </div>
          </div>

          <label className="card-item__number">
            <TransitionGroup className="slide-fade-up" component="div">
              {cardNumber ? (
                maskCardNumber(cardNumber).map((val, index) => (
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={250}
                    key={index}
                  >
                    <div className="card-item__numberItem">{val}</div>
                  </CSSTransition>
                ))
              ) : (
                <CSSTransition classNames="slide-fade-up" timeout={250}>
                  <div className="card-item__numberItem">#</div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </label>
          <div className="card-item__content">
            <label className="card-item__info">
              <div className="card-item__holder">Card Holder</div>
              <div className="card-item__name">
                <TransitionGroup component="div" className="slide-fade-up">
                  {cardHolder === 'FULL NAME' ? (
                    <CSSTransition classNames="slide-fade-up" timeout={250}>
                      <div>FULL NAME</div>
                    </CSSTransition>
                  ) : (
                    cardHolder
                      .split('')
                      .map(
                        (
                          val: boolean | string | null | undefined,
                          index: React.Key | null | undefined,
                        ) => (
                          <CSSTransition
                            timeout={250}
                            classNames="slide-fade-right"
                            key={index}
                          >
                            <span className="card-item__nameItem">{val}</span>
                          </CSSTransition>
                        ),
                      )
                  )}
                </TransitionGroup>
              </div>
            </label>
            <div className="card-item__date">
              <label className="card-item__dateTitle">Expires</label>
              <label className="card-item__dateItem">
                <SwitchTransition in-out>
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={200}
                    key={cardMonth}
                  >
                    <span>{!cardMonth ? 'MM' : cardMonth} </span>
                  </CSSTransition>
                </SwitchTransition>
              </label>
              /
              <label htmlFor="cardYear" className="card-item__dateItem">
                <SwitchTransition out-in>
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={250}
                    key={cardYear}
                  >
                    <span>
                      {!cardYear ? 'YY' : cardYear.toString().substr(-2)}
                    </span>
                  </CSSTransition>
                </SwitchTransition>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="card-item__side -back">
        <div className="card-item__cover">
          <img
            alt=""
            src={`/card-background/${BACKGROUND_IMG}`}
            className="card-item__bg"
          />
        </div>
        <div className="card-item__band" />
        <div className="card-item__cvv">
          <div className="card-item__cvvTitle">CVV</div>
          <div className="card-item__cvvBand">
            <TransitionGroup>
              {cardCvv
                .split('')
                .map((val: any, index: React.Key | null | undefined) => (
                  <CSSTransition
                    classNames="zoom-in-out"
                    key={index}
                    timeout={250}
                  >
                    <span>*</span>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </div>
          <div className="card-item__type">
            <img
              alt="card-type"
              src={`/card-type/${useCardType}.png`}
              className="card-item__typeImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
