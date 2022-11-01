export interface IProduct {
  title: string;
  price: number;
  id: number;
  image: string;
  description: string;
}

export type TAward = { id: number; src: string; myalt: string };

interface dataType {
  id: number;
  attributes: TAward;
}

export interface AwardsData {
  data: dataType[];
}

export type TPrime = { title: number; subtitle: string; button: string };

interface dataPrime {
  id: number;
  attributes: TPrime;
}

export interface PrimeData {
  data: dataPrime;
}

export type TContact = { number_phone: number; visible_phone: string };

interface dataContact {
  id: number;
  attributes: TContact;
}

export interface ContactData {
  data: dataContact;
}

export interface TCard {
  id?: number;
  src: string;
  text: string;
}

export interface CardType {
  id: number;
  attributes: TCard;
}

export interface CardsData {
  data: CardType[];
}

export type TCase = {
  id: number;
  slug: string;
  title: string;
  text: string;
  content: string;
};

export interface CaseType {
  id: number;
  attributes: TCase;
}

export interface CaseData {
  data: CaseType[];
}

export interface IPhone {
  number_phone: string;
  visible_phone: number;
}

export interface ITestimonial {
  id: number;
  text: string;
  name: string;
}

export type aboutAtributes = { job: string; name: string; about: string };

export type adoutDataType = {
  id: number;
  attributes: aboutAtributes;
};

export interface AboutData {
  data: adoutDataType;
}

export interface IBlog {
  id: number;
  data?: string;
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

export type blogDataType = {
  id: number;
  attributes: IBlog;
};

export interface IBlogData {
  data: blogDataType[];
}