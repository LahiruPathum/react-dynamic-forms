type QuestionItem = {
    key: string;
    id: string;
    type: string;
};

type FormContainer = {
    key: string;
    type: string;
    children?: Array<QuestionItem | FormContainer>;
};

type Question = {
    type: string;
    id: string;
    label?: string;
    options?: {value: string; text: string}[];
}

type QuestionsObject = {
    [key: string]: Question;
}