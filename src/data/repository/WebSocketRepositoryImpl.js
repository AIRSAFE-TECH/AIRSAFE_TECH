import { IWebSocketRepository } from "../../domain/repository/IWebSocketRepository";
import { WebSocketDataSource } from "../dataSource/WebSocketDataSource";

export class WebSocketRepositoryImpl extends IWebSocketRepository {
    constructor(url) {
        super();
        this.dataSource = new WebSocketDataSource(url);
    }

    connect(onOpen, onClose, onMessage) {
        this.dataSource.setOnOpen(onOpen);
        this.dataSource.setOnClose(onClose);
        this.dataSource.setOnMessage(onMessage);
        this.dataSource.connect();
    }

    close() {
        this.dataSource.close();
    }
}