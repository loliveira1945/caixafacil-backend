import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface AuthTokenPayload {
  sub: string; 
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const authorizationHeader = req.headers.authorization;

  if(!authorizationHeader) throw new Error('Access is denied due to invalid credentials');
  
  const [scheme, token] = authorizationHeader.split(" ");

  if (scheme?.toLowerCase() !== 'bearer' || !token) throw new Error('Invalid token format');

  try{
    const decoded = verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as AuthTokenPayload;

    req.user_id = decoded.sub;

  }catch(err){
    return res.status(401).json({ 
      error: 'Invalid or expired token. Access denied.' 
    });
  }

  return next();
}