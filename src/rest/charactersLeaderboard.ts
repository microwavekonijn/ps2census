import { defineCensusType } from './Base';

export type charactersLeaderboardData = {
};

export default defineCensusType<Partial<charactersLeaderboardData>, charactersLeaderboardData[]>('characters_leaderboard');
