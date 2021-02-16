interface FormElement {
  type: string;
  required: boolean;
  validators?: {
    maxLength?: number;
    minLength?: number;
    isLink?: boolean;
    loadedEnded?: boolean;
    matches?: string;
  };
  default?: Date | string | number;
}

interface FormDescription {
  fieldName?: string;
  baseUrl?: string;
  fields: {
    [x: string]: FormElement;
  };
}

interface InputElement {
  value: string | number | Date | boolean;
  error: string;
}
interface Fields {
  [x: string]: InputElement;
}
interface FormState {
  error: string;
  success: string;
  isSubmitted: boolean;
  fields: Fields;
  formDescription: FormDescription;
}
