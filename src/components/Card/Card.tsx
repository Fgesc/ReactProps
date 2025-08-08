import { CardProps } from "../../interface";
import "./Card.css"

function Card({ cardHeader, content }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{cardHeader}</div>
      <div className="card-content">

            {("email" in content) && ( 
            <div>
                <p>Email: {content.email}</p>
                <p>Телефон: {content.phone ?? 'Телефон не указан'}</p>
            </div>
            )}

            {("city" in content && "country" in content) && ( 
            <div>
                <p>Страна: {content.country}</p>
                <p>Город: {content.city}</p>
                <p>Адрес: {content.address ?? 'Адрес не указан'}</p>
            </div>
            )}

            {("interests" in content) && ( 
            <ul>
                {content.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
                ))}
            </ul>
            )}
            
      </div>
    </div>
  );
}

export default Card;