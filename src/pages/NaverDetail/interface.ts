export interface IParams {
  id: string;
}

export interface IModal {
  isVisible: boolean;
  title?: string;
  message?: string;
  type?: string;
  onSubmit?(): void;
}

export interface IButtonStyled {
  transparent?: boolean;
}

export interface IButtonTitleStyled {
  dark?: boolean;
}
