import { CardProps } from "../../interface";
import "./Card.css"

// Компонент Card
function Card({ cardHeader, content }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{cardHeader}</div>
      <div className="card-content">

            {("email" in content) && ( 
            <div>
                Email: {content.email}<br />
                Телефон: {content.phone ?? 'Телефон не указан'}
            </div>
            )}

            {("city" in content && "country" in content) && ( 
            <div>
                Страна: {content.country}<br />
                Город: {content.city}<br />
                Адрес: {content.address ?? 'Адрес не указан'}
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