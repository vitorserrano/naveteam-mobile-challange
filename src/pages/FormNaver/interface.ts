export interface IForm {
  id?: string;
  name: string;
  job_role: string;
  birthdate?: Date | string;
  admission_date?: Date | string;
  project: string;
  url: string;
}

export interface INaverSchema {
  name: string;
  job_role: string;
  project: string;
  url: string;
}
