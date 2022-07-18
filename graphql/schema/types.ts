import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = undefined | T;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum CookingMeasures {
  cup = 'cup',
  grams = 'grams',
  kilograms = 'kilograms',
  litres = 'litres',
  millilitres = 'millilitres',
  piece = 'piece',
  tablespoon = 'tablespoon',
  teaspoon = 'teaspoon'
}

export type CreateNewRecipeIngredientsInput = {
  measure: CookingMeasures;
  name: Scalars['String'];
  quantity: Scalars['Int'];
};

export type CreateNewRecipeInput = {
  ingredients: Array<CreateNewRecipeIngredientsInput>;
  instructions: Scalars['String'];
  name: Scalars['String'];
  source?: InputMaybe<Scalars['String']>;
  time: CreateNewRecipeTimeInput;
};

export type CreateNewRecipeTimeInput = {
  hours?: InputMaybe<Scalars['Int']>;
  minutes: Scalars['Int'];
};

export type CustomRecipe = {
  __typename?: 'CustomRecipe';
  id?: Maybe<Scalars['ID']>;
  listOfIngredients?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberOfIngredients?: Maybe<Scalars['Int']>;
  preperationInstructions?: Maybe<Scalars['String']>;
  preperationTime?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewRecipe?: Maybe<Scalars['ID']>;
  root?: Maybe<Scalars['String']>;
};


export type MutationCreateNewRecipeArgs = {
  input: CreateNewRecipeInput;
};

export type Query = {
  __typename?: 'Query';
  ingredientList?: Maybe<Array<Maybe<Ingredient>>>;
  recipeById?: Maybe<Recipe>;
  recipeList?: Maybe<Array<Maybe<CustomRecipe>>>;
  root?: Maybe<Scalars['String']>;
};


export type QueryRecipeByIdArgs = {
  recipeId: Scalars['ID'];
};


export type QueryRecipeListArgs = {
  filter?: InputMaybe<RecipeListFilterInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  Ingredients?: Maybe<Array<Maybe<RecipeIngredient>>>;
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  preperationInstructions?: Maybe<Scalars['String']>;
  preperationTimeMin?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  measure?: Maybe<CookingMeasures>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
};

export type RecipeListFilterInput = {
  ingredient?: InputMaybe<Scalars['String']>;
  maxTimeMin?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CookingMeasures: CookingMeasures;
  CreateNewRecipeIngredientsInput: CreateNewRecipeIngredientsInput;
  CreateNewRecipeInput: CreateNewRecipeInput;
  CreateNewRecipeTimeInput: CreateNewRecipeTimeInput;
  CustomRecipe: ResolverTypeWrapper<CustomRecipe>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Ingredient: ResolverTypeWrapper<Ingredient>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Recipe: ResolverTypeWrapper<Recipe>;
  RecipeIngredient: ResolverTypeWrapper<RecipeIngredient>;
  RecipeListFilterInput: RecipeListFilterInput;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateNewRecipeIngredientsInput: CreateNewRecipeIngredientsInput;
  CreateNewRecipeInput: CreateNewRecipeInput;
  CreateNewRecipeTimeInput: CreateNewRecipeTimeInput;
  CustomRecipe: CustomRecipe;
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Ingredient: Ingredient;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Recipe: Recipe;
  RecipeIngredient: RecipeIngredient;
  RecipeListFilterInput: RecipeListFilterInput;
  String: Scalars['String'];
};

export type CustomRecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomRecipe'] = ResolversParentTypes['CustomRecipe']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  listOfIngredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfIngredients?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  preperationInstructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preperationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type IngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createNewRecipe?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateNewRecipeArgs, 'input'>>;
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ingredientList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ingredient']>>>, ParentType, ContextType>;
  recipeById?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryRecipeByIdArgs, 'recipeId'>>;
  recipeList?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomRecipe']>>>, ParentType, ContextType, Partial<QueryRecipeListArgs>>;
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = {
  Ingredients?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecipeIngredient']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preperationInstructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preperationTimeMin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecipeIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeIngredient'] = ResolversParentTypes['RecipeIngredient']> = {
  measure?: Resolver<Maybe<ResolversTypes['CookingMeasures']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CustomRecipe?: CustomRecipeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Ingredient?: IngredientResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  RecipeIngredient?: RecipeIngredientResolvers<ContextType>;
};

