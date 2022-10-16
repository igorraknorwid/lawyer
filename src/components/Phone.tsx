import { IPhone } from "../types";

export default function Phone({number_phone,visible_phone}:IPhone) {
 
  return (
    <a class='' href={`tel:${number_phone}`}>{visible_phone}</a>
  );
}
