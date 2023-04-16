import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Top Contributors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://th.bing.com/th/id/R.89644de223dd6be3e07e12659ab172ea?rik=H0qKm77RjT0dEw&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2016%2f11%2f24%2f522523-ratan-tata.jpg&ehk=U81TCQHMlchRlKHZIhGrtFXG%2fEAguCsB36s3LUwWr4Q%3d&risl=&pid=ImgRaw&r=0'
              text='Mr. Singh - No. of donations : 90'
              label='Donor1'
              path='/sign-up'
            />
            <CardItem
              src='https://th.bing.com/th/id/R.89644de223dd6be3e07e12659ab172ea?rik=H0qKm77RjT0dEw&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2016%2f11%2f24%2f522523-ratan-tata.jpg&ehk=U81TCQHMlchRlKHZIhGrtFXG%2fEAguCsB36s3LUwWr4Q%3d&risl=&pid=ImgRaw&r=0'
              text='Mrs. Sharma - No. of donations : 70'
              label='Donor2'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://th.bing.com/th/id/R.89644de223dd6be3e07e12659ab172ea?rik=H0qKm77RjT0dEw&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2016%2f11%2f24%2f522523-ratan-tata.jpg&ehk=U81TCQHMlchRlKHZIhGrtFXG%2fEAguCsB36s3LUwWr4Q%3d&risl=&pid=ImgRaw&r=0'
              text='Mr. Kumar - No. of donations : 50'
              label='Donor3'
              path='/sign-up'
            />
            <CardItem
              src='https://th.bing.com/th/id/R.89644de223dd6be3e07e12659ab172ea?rik=H0qKm77RjT0dEw&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2016%2f11%2f24%2f522523-ratan-tata.jpg&ehk=U81TCQHMlchRlKHZIhGrtFXG%2fEAguCsB36s3LUwWr4Q%3d&risl=&pid=ImgRaw&r=0'
              text='Mr. Tripathi - No. of donations : 40'
              label='Donor4'
              path='/sign-up'
            />
            <CardItem
              src='https://th.bing.com/th/id/R.89644de223dd6be3e07e12659ab172ea?rik=H0qKm77RjT0dEw&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2016%2f11%2f24%2f522523-ratan-tata.jpg&ehk=U81TCQHMlchRlKHZIhGrtFXG%2fEAguCsB36s3LUwWr4Q%3d&risl=&pid=ImgRaw&r=0'
              text='Mrs. Prasad - No. of donations : 30'
              label='Donor5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
