import CommonInput from "../common-input";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) {
  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-5">
      {formControls.map((singleFormControls) =>
        renderFormElement(singleFormControls, formData)
      )}
      <button type="submit" className="bg-black text-white px-3 py-2 rounded-sm cursor-pointer">{buttonText || "Submit"}</button>
    </form>
  );
}

export default CommonForm;
