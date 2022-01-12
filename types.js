import { gql } from 'apollo-server';

const typeDefs = gql`
  type Round {
    id: ID,
    number: Int!,
    market_closed: Boolean!,
    finished: Boolean!,
    golden: Boolean!,
    status: String,
    dispute: Dispute
  }
  type Season {
    id: ID!
    year: Int!
    rounds: [Round]
    disputes: [Dispute]
  }
  type Dispute {
    id: ID!
    name: String!
    order: Int
    status: String
    season: Season
    rounds: Round
  }
  type Score {
    id: ID,
    team: Team,
    team_name: String,
    player_name: String,
    round: Round,
    partial_score: Float,
    finalScore: Float
  }
  type Team {
    id: ID,
    name: String,
    slug: String,
    active: Boolean,
    id_tag: Int!,
    url_escudo_png: String,
    player_name: String
  }
  type DisputeScore {
    team: Team!,
    score: Float!,
    scores: [Score]
  }
  type Query {
    disputes: [Dispute]!,
    scores(disputeId: Int!): [DisputeScore]
  }
`;

export default typeDefs;