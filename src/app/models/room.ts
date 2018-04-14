import { Player } from "./player";

export class Room {
  code: string;
  name: string;
  creator: string;
  players: Array<Player>;
}