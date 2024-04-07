/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  InvalidCredentials: {};
  Like: { // root type
    likeId: string; // String!
    postId: string; // String!
    userId: string; // String!
  }
  Mutation: {};
  NotUniqueEmailError: {};
  Post: { // root type
    postCaption?: string | null; // String
    postId: string; // ID!
    postImage?: string | null; // String
    userId: string; // String!
  }
  Query: {};
  User: { // root type
    dateOfBirth?: string | null; // String
    email: string; // String!
    isDataFilled: boolean; // Boolean!
    password?: string | null; // String
    profilePicture?: string | null; // String
    userId: string; // ID!
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
  LoginResponse: NexusGenRootTypes['AuthPayload'] | NexusGenRootTypes['InvalidCredentials'];
  SignupResponse: NexusGenRootTypes['AuthPayload'] | NexusGenRootTypes['NotUniqueEmailError'];
}

export type NexusGenRootTypes = NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  InvalidCredentials: { // field return type
    error: string; // String!
  }
  Like: { // field return type
    likeId: string; // String!
    postId: string; // String!
    userId: string; // String!
  }
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post'] | null; // Post
    dataFill: NexusGenRootTypes['User'] | null; // User
    deletePost: string | null; // String
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
  }
  NotUniqueEmailError: { // field return type
    error: string; // String!
  }
  Post: { // field return type
    isLiked: boolean | null; // Boolean
    likeCount: number | null; // Int
    postCaption: string | null; // String
    postId: string; // ID!
    postImage: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
    userId: string; // String!
  }
  Query: { // field return type
    getPosts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
  }
  User: { // field return type
    dateOfBirth: string | null; // String
    email: string; // String!
    isDataFilled: boolean; // Boolean!
    password: string | null; // String
    profilePicture: string | null; // String
    userId: string; // ID!
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  InvalidCredentials: { // field return type name
    error: 'String'
  }
  Like: { // field return type name
    likeId: 'String'
    postId: 'String'
    userId: 'String'
  }
  Mutation: { // field return type name
    createPost: 'Post'
    dataFill: 'User'
    deletePost: 'String'
    login: 'AuthPayload'
    signup: 'AuthPayload'
  }
  NotUniqueEmailError: { // field return type name
    error: 'String'
  }
  Post: { // field return type name
    isLiked: 'Boolean'
    likeCount: 'Int'
    postCaption: 'String'
    postId: 'ID'
    postImage: 'String'
    user: 'User'
    userId: 'String'
  }
  Query: { // field return type name
    getPosts: 'Post'
  }
  User: { // field return type name
    dateOfBirth: 'String'
    email: 'String'
    isDataFilled: 'Boolean'
    password: 'String'
    profilePicture: 'String'
    userId: 'ID'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      caption?: string | null; // String
      postImage?: string | null; // String
    }
    dataFill: { // args
      dateOfBirth: string; // String!
      username: string; // String!
    }
    deletePost: { // args
      postId: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  LoginResponse: "AuthPayload" | "InvalidCredentials"
  SignupResponse: "AuthPayload" | "NotUniqueEmailError"
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "LoginResponse" | "SignupResponse";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}