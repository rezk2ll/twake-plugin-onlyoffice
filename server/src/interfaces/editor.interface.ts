export type EditorInitRequestParams = {
  file_id: string;
  preview: string;
  company_id: string;
  token: string;
};

export type EditConfigInitResult = {
  user_id: string;
  username: string;
  language: string;
  user_image: string;
  mode: string;
  onlyoffice_server: string;
  color: string;
  company_id: string;
  file_id: string;
  filename: string;
  file_type: string;
  preview: string;
};

export interface IEditorService {
  init: (req: EditorInitRequestParams, mode: string) => Promise<EditConfigInitResult>;
}

export type ModeParametersType = {
  mode: string;
  color: string;
};
