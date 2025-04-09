export class SensorData {
    constructor({ temperatura_dht, humedad, temperatura_bmp, presion, calidad_aire, gas_inflamable }) {
        this.temperatura_dht = temperatura_dht || 0;
        this.humedad = humedad || 0;
        this.temperatura_bmp = temperatura_bmp || 0;
        this.presion = presion || 0;
        this.calidad_aire = calidad_aire || 0;
        this.gas_inflamable = gas_inflamable || 0;
    }
}