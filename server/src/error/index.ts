import { GraphQLFormattedError } from "graphql";

const errorMessages: { [key: string]: string } = {
  GRAPHQL_PARSE_FAILED: "GraphQL request parsing failed.",
  GRAPHQL_VALIDATION_FAILED: "GraphQL request validation failed.",
  BAD_USER_INPUT: "Invalid input provided by the user.",
  PERSISTED_QUERY_NOT_FOUND: "Persisted query not found.",
  PERSISTED_QUERY_NOT_SUPPORTED: "Persisted queries are not supported.",
  OPERATION_RESOLUTION_FAILURE: "GraphQL operation resolution failed.",
  BAD_REQUEST: "Bad request.",
  INTERNAL_SERVER_ERROR: "Internal server error occurred.",
  DUPLICATE_EMAIL: "Email is already in use.",
  INVALID_CREDENTIALS: "Email/password isn't valid.",
};

export function formatGraphQLError(formattedError: GraphQLFormattedError): {
  message: string;
} {
  let message = "Internal server error"; // Default error message

  if (formattedError.extensions && formattedError.extensions.code) {
    const errorCode = formattedError.extensions.code as string;
    if (errorMessages[errorCode]) {
      message = errorMessages[errorCode];
    }
  }
  console.error("Formatted Error:", formattedError);

  return { message };
}
