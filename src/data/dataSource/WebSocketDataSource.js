export class WebSocketDataSource {
    constructor(url) {
        this.url = url;
        this.ws = null;
        this.onMessageCallback = () => {};
        this.onOpenCallback = () => {};
        this.onCloseCallback = () => {};
    }

    connect() {
        this.ws = new WebSocket(this.url);

        this.ws.onopen = () => {
            this.onOpenCallback();
        };

        this.ws.onmessage = (event) => {
            this.onMessageCallback(event.data);
        };

        this.ws.onclose = () => {
            this.onCloseCallback();
        };
    }

    setOnMessage(callback) {
        this.onMessageCallback = callback;
    }

    setOnOpen(callback) {
        this.onOpenCallback = callback;
    }

    setOnClose(callback) {
        this.onCloseCallback = callback;
    }

    close() {
        if (this.ws) {
            this.ws.close();
        }
    }
}
