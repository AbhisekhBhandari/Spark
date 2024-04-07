import { useMutation as RuseMutation, UseMutationOptions } from "@tanstack/react-query"

// const mutation = useMutation({
//     mutationFn: (data: SignupSchemaType) => {
//       console.log("data in mutate", data);

//       return request("http://localhost:4000/graphql", Signup_Query, {
//         email: data.email,
//         password: data.password,
//       });
//     },
//     onSuccess: (data) => {
//       console.log("created user successsfully", data);
//       navigate.push("/");
//     },
//   });
