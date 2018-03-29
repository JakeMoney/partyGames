import { IPlayer } from "./player";

export interface IRoom {
  code: string;
  name: string;
  creator: string;
  players: Array<IPlayer>;
}