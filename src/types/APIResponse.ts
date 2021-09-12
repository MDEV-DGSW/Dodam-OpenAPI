export interface GetTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
}

export interface GetUserResponse {
  unique_id: string;
  grade: number;
  room: number;
  number: number;
  name: string;
  profile_image: string;
  access_level: number;
}
