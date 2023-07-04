const popUp = () => {
  const meals = [{
    image: '',
    title: 'Big Mac',
    price: '5 USD',
    proteins: '300g',
    type: 'Food',
    spicy: 'No',
  },{
    image: '',
    title: 'General Tso chiken',
    price: '7 USD',
    proteins: '400g',
    type: 'Food',
    spicy: 'Yes',
  },{
    image: '',
    title: 'Mushroom & chestnut Rotolo',
    price: '6 USD',
    proteins: '350g',
    type: 'Food',
    spicy: 'No',
  },{
    image: '',
    title: 'Eton Mess',
    price: '3 USD',
    proteins: '250g',
    type: 'Dessert',
    spicy: 'No',
  },{
    image: '',
    title: 'Rocky Road Fudge',
    price: '4 USD',
    proteins: '280g',
    type: 'Dessert',
    spicy: 'No',
  },{
    image: '',
    title: 'Pancakes',
    price: '5 USD',
    proteins: '300g',
    type: 'Dessert',
    spicy: 'No',
  }];

const mealsArr = [];
meals.forEach((meal, i) => {
  const popWindow = document.createElement('div');
  popWindow.classList.add('window');
  popWindow.innerHTML =
  `
  <img class="popImage${i + 1}" src="${meal.image}" />
  <h2>${meal.title}</h2>
  <div class="description1">
  <ul>
  <li>Price:${meal.price}</li>
  <li>Proteins:${meal.proteins}</li>
  </ul>
  </div>
  <div class="description2">
  <ul>
  <li>Type:${meal.type}</li>
  <li>Spicy:${meal.spicy}</li>
  </ul>
  </div>
  `;
  mealsArr.push(popWindow);
});
return mealsArr;
}

export default popUp();