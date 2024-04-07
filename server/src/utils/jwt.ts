import jwt from "jsonwebtoken";

export function createJWT(userId: string, email: string) {
  const token = jwt.sign(
    {
      userId: userId,
      email: email,
    },
    process.env.JWT_SECRET as string
  );
  return token;
}

export async function verifyJWT(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  
  } catch (err) {
    return null;
  }
}
