import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Room } from './models/room';
import { Player } from './models/player';
import { Game } from './models/game';

//"socket.io": "^2.0.4",
import * as io from 'socket.io-client';

enum GameState {
  Home = 'Home', Create = 'Create', Join = 'Join', Wait = 'Wait',
  Choose = 'Choose', Team = 'Team', Began = 'Began'
}

@Injectable()
export class GameService {

  public roomKey: string = 'room';
  public playerKey: string = 'player';
  public gameKey: string = 'game';
  public gameStateKey: string = 'gameState';

  private api_url: string = 'http://api.dev.partygames.profusiondev.net/';
  private socket: any;

  private player: Player;
  private room: Room;
  private game: Game;

  private gameState: GameState;

  constructor(private http: Http) {

    this.socket = io.connect(this.api_url);

    this.player = new Player();
    if (sessionStorage.getItem(this.playerKey) !== null) {
      this.player = JSON.parse(sessionStorage.getItem(this.playerKey));
      console.log(this.player);
    }
    this.room = new Room();
    if (sessionStorage.getItem(this.roomKey) !== null) {
      this.room = JSON.parse(sessionStorage.getItem(this.roomKey));
      console.log(this.room);
    }
    this.game = new Game();
    if (sessionStorage.getItem(this.gameKey) !== null) {
      this.game = JSON.parse(sessionStorage.getItem(this.gameKey));
      console.log(this.game);
    }
    this.gameState = GameState.Home;
    if (sessionStorage.getItem(this.gameStateKey) !== null) {
      this.gameState = JSON.parse(sessionStorage.getItem(this.gameStateKey));
      console.log(this.gameState);
    }

    // Room listeners
    this.socket.on('room.created', (room) => {
      console.log(room);
      // Store the room in the session
      this.room = room;
      sessionStorage.setItem(this.roomKey, JSON.stringify(room));
      // Store the updated player in the session
      let player = JSON.parse(sessionStorage.getItem(this.playerKey));
      player.id = room.creator;
      sessionStorage.setItem(this.playerKey, JSON.stringify(player));
      console.log(player);
      this.gameState = GameState.Wait;
      sessionStorage.setItem(this.gameStateKey, JSON.stringify(this.gameState));
    })

    this.socket.on('room.joined', (room) => {
      console.log(room);
      // Store the room in the session
      this.room = room;
      sessionStorage.setItem(this.roomKey, JSON.stringify(this.room));
      // Set player id and store in session
      this.player.id = this.getPlayerId();
      sessionStorage.setItem(this.playerKey, JSON.stringify(this.player));
      this.gameState = GameState.Wait;
      sessionStorage.setItem(this.gameStateKey, JSON.stringify(this.gameState));
    })

    this.socket.on('room.started', () => {
      console.log('room started!');
      this.gameState = GameState.Choose;
      sessionStorage.setItem(this.gameStateKey, JSON.stringify(this.gameState));
    })

    // Game listeners
    this.socket.on('game.choosen', (data) => {
      console.log(data);
      this.game = data.game;
      sessionStorage.setItem(this.gameKey, JSON.stringify(this.game));
      this.gameState = GameState.Team;
      sessionStorage.setItem(this.gameStateKey, JSON.stringify(this.gameState));
    })

    this.socket.on('game.cycledTeam', (data) => {
      console.log(data);
      this.game = data.game;
      sessionStorage.setItem(this.gameKey, JSON.stringify(this.game));
    })

    this.socket.on('game.began', (data) => {
      console.log(data);
      this.game = data.game;
      sessionStorage.setItem(this.gameKey, JSON.stringify(this.game));
      this.gameState = GameState.Began;
      sessionStorage.setItem(this.gameStateKey, JSON.stringify(this.gameState));
    })

    this.socket.on('error.created', (error) => {
      console.error(error);
    })
  }

  public create() {
    this.gameState = GameState.Create;
  }
  
  public join() {
    this.gameState = GameState.Join;
  }

  public cancel() {
    this.gameState = GameState.Home;
    sessionStorage.removeItem(this.gameStateKey);
    this.room = new Room();
    sessionStorage.removeItem(this.roomKey);
    this.game = new Game();
    sessionStorage.removeItem(this.gameKey);
    this.player = new Player();
    sessionStorage.removeItem(this.playerKey);
  }

  // Room endpoints
  public createRoom(data: any) {
    this.socket.emit('room.create', data);
    this.player.name = data.playerName;
    sessionStorage.setItem(this.playerKey, JSON.stringify(this.player));
  }

  public joinRoom(data: any) {
    this.socket.emit('room.join', data)
    this.player.name = data.playerName;
    sessionStorage.setItem(this.playerKey, JSON.stringify(this.player));
  }

  public startRoom() {
    this.socket.emit('room.start');
  }

  // Game endpoints
  public chooseGame(data) {
    this.socket.emit('game.choose', data);
  }

  public cycleTeam() {
    this.socket.emit('game.cycleTeam');
  }

  public beginGame() {
    this.socket.emit('game.begin');
  }

  // Helpers
  private getPlayerId() {
    for (let p of this.room.players) {
      if (p.name === this.player.name) {
        return p.id;
      }
    }
    return '';
  }
  private getPlayerTeam() {
    for (let team of this.game.teams) {
      for (let p of team.players) {
        if (p.id === this.player.id) {
          return team.id;
        }
      }
    }
    return -1;
  }

  public getPlayer() {
    return this.player;
  }
  public getRoom() {
    return this.room;
  }
}