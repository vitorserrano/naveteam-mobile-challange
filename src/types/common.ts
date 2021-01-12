export interface INaver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

export interface INaverEdit {
  id?: string;
  name?: string;
  admission_date?: string;
  job_role?: string;
  project?: string;
  birthdate?: string;
  url?: string;
}

export interface IModal {
  isVisible: boolean;
  title?: string;
  message?: string;
  type?: string;
  onSubmit?(): void;
  onRequestClose?(): void;
}
