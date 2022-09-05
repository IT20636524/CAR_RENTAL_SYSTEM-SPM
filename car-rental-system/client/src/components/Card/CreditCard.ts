export interface CreditCard {
  _id: string;
  cardNumber: string;
  cardHolder: string;
  cardMonth: string;
  cardYear: string;
  cardCvv: string;
}
export interface AddEditCard extends CreditCard {
  isCardFlipped: boolean;
}

//Data Layer
export class CreditCardAPI {
  async fetchCreditCardList(): Promise<CreditCard[]> {
    const apiData: CreditCard[] = [];
    let creditCardsList: CreditCard[] = [];
    //first check local storage if local storage is empty then add api mock data as seed
    if (localStorage.getItem('cards')) {
      const localStorageData: CreditCard[] = JSON.parse(
        localStorage.getItem('cards') ?? '',
      );
      creditCardsList = [...localStorageData];
    } else {
      creditCardsList = [...apiData];
      updateLocalStorageCards(creditCardsList);
    }

    return creditCardsList;
    //TODO:integrate API module when got API from backend team :)
    /*
    private readonly api = new Api();//it will have all Restful verbs functions
    return axios.get(`ENDPOINT_GOES_HERE`)
    .then((res: { data: any; }) => {
      return res.data;
    });
    */
  }
} //CreditCardAPI Class End

//Business Layer
export async function fetchCreditCardList(): Promise<CreditCard[]> {
  const api = new CreditCardAPI();
  return api.fetchCreditCardList();
}
export function updateLocalStorageCards(cards: CreditCard[]) {
  localStorage.setItem('cards', JSON.stringify(cards));
}
