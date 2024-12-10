import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.isConnected = true;
    this.client.on('error', (err) => {
      console.log('Redis Client Error', err);
      this.isConnected = false;
    });
    this.client.on('connect', () => {
      this.isConnected = true;
    });
  }

  isAlive() {
    if (this.isConnected) { return true; }
    return false;
  }

  async get(key) {
    const value = await this.client.get(key);
    return value;
  }

  async set(key, value, dur) {
    await this.client.set(key, value);
    await this.client.expire(key, dur);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = RedisClient();
export default redisClient;
