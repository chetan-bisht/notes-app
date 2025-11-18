import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),// Use UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from environment variables
    limiter: Ratelimit.slidingWindow(30, '60 s'),// allow 30 requests per 60 seconds
});

export default ratelimit;