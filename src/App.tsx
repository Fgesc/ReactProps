import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';
import Description from './components/Description/Description';
import Card from './components/Card/Card';
import { UserProfile } from "./interface";

function App() {
  const userProfile: UserProfile  = {
    userName: 'Артём', // обязательное свойство
    protoUrl: null, // необязательное свойство
    userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
    openForWork: true, // необязательное свойство
    contactInfo: {
      // обязательное свойство
      email: 'spb_sochi@example.com', // обязательное свойство
      phone: '+1234567890', // необязательное свойство
    },
    location: {
      // // необязательное свойство
      city: 'Сочи', // обязательное свойство
      country: 'Россия', // обязательное свойство
      address: 'Красная поляна', // необязательное свойство
    },
    interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
  };

  return (
    <>
      <Description defaultUserPhoto={defaultUserPhoto} userProfile={userProfile}/>
      <div className="main">
        <Card content={userProfile.contactInfo} cardHeader= "Контактная информация"/>
        {userProfile.location && Object.keys(userProfile.location).length > 0 && <Card content={userProfile.location} cardHeader="Местоположение"/>}
        {userProfile.interests && userProfile.interests.length > 0 && <Card content={{ interests: userProfile.interests }} cardHeader="Интересы"/>}
      </div>
    </>
  );
}

export default App;

