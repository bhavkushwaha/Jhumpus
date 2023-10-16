function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div class='cards__container'>
        <div class='cards__wrapper'>
          <ul class='cards__items'>
            <CardItem
              src = './images/logo.jpg'
              
            />
            <CardItem
              src={require('../images/img-2.jpg')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-3.jpg')}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={require('../images/img-4.jpg')}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={require('../images/img-8.jpg')}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();