declare namespace Express {
  export interface Request { 
    user_id: string, // Adding this variable to the Express Request interface
  }
}