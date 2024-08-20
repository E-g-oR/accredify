export interface IDocument {
  id: number;
  status: string;
  expire_at: string;
  created_at: string;
  issuer_name: string;
  document_name: string;
  recipient_name: string;
  issuer_logo_url: string;
  updated_at: string | null;
  deleted_at: string | null;
  archived_at: string | null;
  received_on: string | null;
}
