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

export type TCard = { id?: number; src: string; text: string };

interface CardType {
  id: number;
  attributes: TCard[];
}

export interface CardsData {
  data: CardType[];
}

export type TCase = { id: number; title: string; text: string };

interface CaseType {
  id: number;
  attributes: TCase[];
}

export interface CaseData {
  data: CaseType[];
}
