export type QuestionItem = {
  key: string;
  id: string;
  type: string;
};

export type FormContainer = {
  key: string;
  type: string;
  children?: Array<QuestionItem | FormContainer>;
};

export type Question = {
  type: string;
  id: string;
  label?: string;
  options?: { value: string; text: string }[];
};
