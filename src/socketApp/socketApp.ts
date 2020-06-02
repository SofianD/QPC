import express = require('express');
import socketIo = require('socket.io');
import { createServer, Server } from 'http';
import { User } from 'src/shared/models/user.interface';

export class SocketApp {
    private static readonly PORT = 8080;
    private app!: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    waitingPlayers: any[] = [];
    
    constructor() {
        this.initialize();
    }

    initialize(): void {
        this.app = express();
        this.server = createServer(this.app);
        this.io = socketIo(this.server);

        this.listen();
    }

    listen(): void {
        this.server.listen(SocketApp.PORT, () => {
            console.log('WebSockets server running on port ' + SocketApp.PORT);
        });

        this.io.on('connect', (socket: SocketIO.Socket) => {
            socket.on('searchClassicalGame', (user: User) => {
                this.waitingPlayers.push({...user, socket});

                if (this.waitingPlayers.length === 2) {
                    for (const user of this.waitingPlayers) {
                        user.socket.emit('foundClassicalGame', this.waitingPlayers.map<any>(user => { return { name: user.name, _id: user._id } }).filter(user => user._id !== user._id));
                    }
                    this.waitingPlayers = [];
                }
            });
        });
    }
}
new SocketApp();