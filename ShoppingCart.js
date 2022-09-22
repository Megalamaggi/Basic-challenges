const { product} = require("@laufire/utils/reducers");
const {map} = require('@laufire/utils/collection');

const rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };
  
  const discounts = {
    // values are in percentages.
    Apple: 10,
  };
  
  const taxes = {
    // values are in percentages.
    Carrot: 5,
    Guava: 10,
  };
  
  const purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  }
];
const getDiscount = (productName) => (discounts[productName] || 0)/100;

const getTax = (productName) => (taxes[productName] || 0)/100;

const getUnitRate = (itemName) =>{
    const discount = rates[itemName] * getDiscount(itemName);
    const tax = rates[itemName] * getTax(itemName);
    const totalRate = (rates[itemName] - discount) + tax;
    return totalRate;
}

const getTotalPrice = (totalPrice) => getUnitRate(totalPrice.item) * (totalPrice.units); 

const getSum = () => map(purchases,(getTotalPrice)).reduce((preValue,curValue) => preValue + curValue,0);

const main=()=> {
    console.log(getSum());
}
main();


