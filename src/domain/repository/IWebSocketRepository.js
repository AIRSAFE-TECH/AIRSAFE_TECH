export class IWebSocketRepository {
    connect() {
        throw new Error("connect() not implemented");
    }

    setOnMessage(callback) {
        throw new Error("setOnMessage() not implemented");
    }

    close() {
        throw new Error("close() not implemented");
    }
}