// Общий интерфейс для контакта
export interface ContactInfoType {
  email: string;
  phone?: string | null;
}

// Интерфейс для местоположения
export interface LocationType {
  city: string;
  country: string;
  address?: string | null;
}

// Интерфейс для интересов
export interface InterestsType {
  interests: Array<string>;
}

// Интерфейс для пользователя
export interface UserProfile {
  userName: string;
  protoUrl?: string | null;
  userDescription: string;
  openForWork?: boolean;
  contactInfo: ContactInfoType;
  location?: LocationType;
  interests?: InterestsType['interests'];
}

// Интерфейс для компонента Description
export interface UserProfileType {
  defaultUserPhoto: string;
  userProfile: UserProfile;
}

// Интерфейс для пропсов компонента Card
export interface CardProps {
  cardHeader: string;
  content: ContactInfoType | LocationType | InterestsType;
}