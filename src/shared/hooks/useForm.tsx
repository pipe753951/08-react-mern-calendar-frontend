import { useMemo, useState } from "react";

type FormValidationResults = Record<string, string | null>;

/**
 * Hook to handle form values.
 * @param initialForm The initial form values, this defines the form values validations.
 * @param formValidations A object containing a array with a callback to validate the value, and a error message to throw if validation fails.
 * @returns A object containing form values, form editing methods, and validation information.
 */
const useForm = function <FormObject extends Record<string, unknown>>(
  initialForm: FormObject,
  formValidations?: {
    [Property in keyof FormObject]: (
      value: FormObject[Property],
    ) => string | null;
  },
) {
  const [formState, setFormState] = useState<FormObject>(initialForm);

  const formValidationResults = useMemo<FormValidationResults>(() => {
    if (!formValidations) return {};

    const validatedFormValues: FormValidationResults = {};

    const formFieldsToValidate = Object.keys(
      formValidations,
    ) as (keyof typeof formState)[];

    formFieldsToValidate.forEach((formField) => {
      const validateFormField = formValidations[formField];

      validatedFormValues[formField as string] = validateFormField(
        formState[formField],
      );
    });

    return validatedFormValues;
  }, [formState, formValidations]);

  const isFormValid = useMemo<boolean>(() => {
    if (!formValidations) return true;

    Object.keys(formValidationResults).forEach((formValue) => {
      if (formValidationResults[formValue] !== null) return false;
    });

    return true;
  }, [formValidationResults, formValidations]);

  const changeInput = ({
    target,
  }: {
    target: { name: keyof FormObject | string; value: unknown };
  }) => {
    const { name, value } = target;

    if (!formState[name] && formState[name] !== "") {
      if (!name) throw new Error("You didn't provided a input name");
      console.debug(name);

      throw new Error(
        `Input "${name as string}" doesn't exist on formState of useForm`,
      );
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialForm);
  };

  return {
    changeInput,
    resetForm,

    formState,
    formValidationResults,
    isFormValid,
  };
};

export default useForm;
