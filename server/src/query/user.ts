export const getUserByIdQuery = (userId:string) =>`
    SELECT * FROM public."User" where "userId" = '${userId}'
`