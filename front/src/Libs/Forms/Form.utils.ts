/// <reference path="./form.d.ts" />

import i18n from "../Trads/i18n";

function minLengthValidator(text: any, length: number) {
  if (!text) return;
  if (text.length < length) {
    throw i18n.t("FormMinLength", { length });
  }
}

function maxLengthValidator(text: any, length: number) {
  if (!text) return;
  if (text.length > length) {
    throw i18n.t("FormMaxLength", { length });
  }
}

function URLValidator(value: any) {
  if (!value) return;
  try {
    new URL(value);
  } catch (err) {
    throw i18n.t("WrongURLFormat");
  }
}

function matches(field1: any, field2: any) {
  if (!field1 || !field2) return;
  if (field1 !== field2) {
    throw i18n.t("PasswordNoMatch");
  }
}

export function validateForm(
  formDescription: FormDescription,
  form: FormState,
  key: string,
  value: any
) {
  const fieldName = key;
  const fieldValue = value;
  const validators = formDescription.fields[fieldName].validators;
  try {
    if (
      formDescription.fields[fieldName].required === true &&
      formDescription.fields[fieldName].type !== "bool" &&
      !fieldValue
    ) {
      return i18n.t("RequiredField");
    }
    if (validators) {
      Object.keys(validators).forEach((validator) => {
        switch (validator) {
          case "minLength":
            const length: number | undefined = validators["minLength"] || 0;
            minLengthValidator(fieldValue, length);
            break;
          case "maxLength":
            const maxLength: number | undefined =
              validators["maxLength"] || 150;
            maxLengthValidator(fieldValue, maxLength);
            break;
          case "isLink":
            URLValidator(fieldValue);
            break;
          case "matches":
            const field: any = validators["matches"];
            matches(fieldValue, form.fields[field].value);
            break;
        }
      });
    }
    return null;
  } catch (err) {
    return err;
  }
}

export function getParametersFromForm(
  form: FormState,
  formDescription: FormDescription,
  dispatch: any
) {
  const parameters: any = {};
  let hasError = null;
  Object.keys(formDescription.fields).forEach((key) => {
    const error = validateForm(
      formDescription,
      form,
      key,
      form.fields[key].value
    );
    if (error) {
      // dispatch(fieldError(key, error));
      hasError = true;
    }
    if (form.fields[key] !== null && form.fields[key] !== undefined) {
      parameters[key] = form.fields[key].value;
    }
  });
  if (hasError) {
    throw new Error(i18n.t("SomeFieldsAreNotValid"));
  }
  return parameters;
}

export function createFormFromParams(
  params: any,
  formDescription: FormDescription
): Fields {
  if (!params) params = {};
  const formParams: Fields = {};
  Object.keys(formDescription.fields).forEach((key) => {
    if (key === "baseUrl" || key === "field") {
      // do nothing
    } else if (
      params[key] === undefined &&
      formDescription.fields[key].default
    ) {
      formParams[key] = {
        value: formDescription.fields[key].default || "",
        error: "",
      };
    } else if (formDescription.fields[key].type === "file") {
      formParams[key] = { value: params[key], error: "" };
    } else if (formDescription.fields[key].type === "Date") {
      formParams[key] = { value: new Date(params[key]), error: "" };
    } else if (formDescription.fields[key].type === "bool") {
      formParams[key] = { value: params[key], error: "" };
    } else if (formDescription.fields[key].type === "Array") {
      formParams[key] = { value: params[key] || [], error: "" };
    } else {
      formParams[key] = { value: params[key] || "", error: "" };
    }
  });
  return formParams;
}
