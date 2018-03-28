import { IPlayer } from "./player";

export interface IRoom {
  code: string;
  name: string;
  creator: number;
  players: Array<IPlayer>;
}