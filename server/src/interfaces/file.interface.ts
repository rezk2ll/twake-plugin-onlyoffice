export type FileType = {
  id: string;
  name: string;
  company_id: string;
  user_id: string;
  metadata: {
    name: string;
    mime: string;
  };
};

export type FileRequestParams = {
  file_id: string;
  company_id: string;
  url?: string;
};

export interface IFileService {
  get: (params: FileRequestParams) => Promise<FileType>;
  download: (params: FileRequestParams) => Promise<any>;
}
