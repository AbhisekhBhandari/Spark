export const signupQuery = (userId: string, email: string, password: string, date:string) =>
  `INSERT INTO public."User"("userId", "username", "email", "isDataFilled", "profilePicture", "password", "dateOfBirth", "createdAt")
  VALUES ('${userId}', '', '${email}', false, null, '${password}', null, '${date}') RETURNING *;
`;

export const findUserByEmail = (email: string) =>
  `SELECT  *  fROM public."User" where email='${email}';`;
export const findUserById = (id: string) =>
  `SELECT  *  fROM public."User" where "userId"='${id}';`;

export const dataFill = (
  username: string,
  dateOfBirth: string,
  userId: string
) =>
  `UPDATE public."User" SET "username" = '${username}', "dateOfBirth" = '${dateOfBirth}', "isDataFilled" = True WHERE "userId"= '${userId}' RETURNING *; `;
