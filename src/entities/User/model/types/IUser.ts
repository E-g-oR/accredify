export interface IUser {
  id: number;
  name: string;
  email: string;
  profile_picture_url: string;
  email_verified_at: string;
  identification_number: string;
  current_organisation: {
    id: number;
    name: string;
    logo_url: string;
    is_personal: boolean; // true if Personal User
  };
}
