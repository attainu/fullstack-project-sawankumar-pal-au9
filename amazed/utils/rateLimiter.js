import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 500,
  message: 'You have exceeded the 100 requests in 24 hrs limit!', 
  headers: true,
});

export const rateLimiterRouter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hrs in milliseconds
  max: 10,
  message: 'You have exceeded the 10 requests in 1 hr limit!', 
  headers: true,
});