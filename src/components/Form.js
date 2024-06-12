import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, MaskedTextBox, TextArea } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Label } from "@progress/kendo-react-labels";
import "./ContactUs.scss";

const MyForm = () => {
  const handleSubmit = (dataItem) => {
    console.log("Form data submitted:", dataItem);
  };

  return (
    <div className="form-container">
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement className="form-element">
            <fieldset className="k-form-fieldset">
              <legend className="k-form-legend">Please fill in the form:</legend>

              <div className="mb-3">
                <Label editorId="name">Name</Label>
                <Field id="name" name="name" component={Input} />
              </div>

              <div className="mb-3">
                <Label editorId="email">Email</Label>
                <Field id="email" name="email" type="email" component={Input} />
              </div>

              <div className="mb-3">
                <Label editorId="phone">Phone Number</Label>
                <Field
                  id="phone"
                  name="phone"
                  component={MaskedTextBox}
                  mask="(999) 000-0000"
                />
              </div>

              <div className="mb-3">
                <Label editorId="address">Address</Label>
                <Field
                  id="address"
                  name="address"
                  component={TextArea}
                  rows={3}
                />
              </div>
            </fieldset>
            <div className="k-form-buttons">
              <Button
                type="submit"
                primary={true}
                disabled={!formRenderProps.allowSubmit}
              >
                Submit
              </Button>
              <Button type="button" onClick={formRenderProps.onFormReset}>
                Clear
              </Button>
            </div>
          </FormElement>
        )}
      />
    </div>
  );
};

export default MyForm;
