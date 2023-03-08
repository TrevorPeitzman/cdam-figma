/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Checklist } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChecklistCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    commandName: "",
    commandPOC: "",
    percentCompletion: "",
    lastEdited: "",
  };
  const [commandName, setCommandName] = React.useState(
    initialValues.commandName
  );
  const [commandPOC, setCommandPOC] = React.useState(initialValues.commandPOC);
  const [percentCompletion, setPercentCompletion] = React.useState(
    initialValues.percentCompletion
  );
  const [lastEdited, setLastEdited] = React.useState(initialValues.lastEdited);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCommandName(initialValues.commandName);
    setCommandPOC(initialValues.commandPOC);
    setPercentCompletion(initialValues.percentCompletion);
    setLastEdited(initialValues.lastEdited);
    setErrors({});
  };
  const validations = {
    commandName: [{ type: "Required" }],
    commandPOC: [{ type: "Required" }, { type: "Email" }],
    percentCompletion: [{ type: "Required" }],
    lastEdited: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          commandName,
          commandPOC,
          percentCompletion,
          lastEdited,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Checklist(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChecklistCreateForm")}
      {...rest}
    >
      <TextField
        label="Command Name"
        isRequired={true}
        isReadOnly={false}
        value={commandName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              commandName: value,
              commandPOC,
              percentCompletion,
              lastEdited,
            };
            const result = onChange(modelFields);
            value = result?.commandName ?? value;
          }
          if (errors.commandName?.hasError) {
            runValidationTasks("commandName", value);
          }
          setCommandName(value);
        }}
        onBlur={() => runValidationTasks("commandName", commandName)}
        errorMessage={errors.commandName?.errorMessage}
        hasError={errors.commandName?.hasError}
        {...getOverrideProps(overrides, "commandName")}
      ></TextField>
      <TextField
        label="Command POC Email"
        isRequired={true}
        isReadOnly={false}
        value={commandPOC}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              commandName,
              commandPOC: value,
              percentCompletion,
              lastEdited,
            };
            const result = onChange(modelFields);
            value = result?.commandPOC ?? value;
          }
          if (errors.commandPOC?.hasError) {
            runValidationTasks("commandPOC", value);
          }
          setCommandPOC(value);
        }}
        onBlur={() => runValidationTasks("commandPOC", commandPOC)}
        errorMessage={errors.commandPOC?.errorMessage}
        hasError={errors.commandPOC?.hasError}
        {...getOverrideProps(overrides, "commandPOC")}
      ></TextField>
      <TextField
        label="Percent Completion"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={percentCompletion}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              commandName,
              commandPOC,
              percentCompletion: value,
              lastEdited,
            };
            const result = onChange(modelFields);
            value = result?.percentCompletion ?? value;
          }
          if (errors.percentCompletion?.hasError) {
            runValidationTasks("percentCompletion", value);
          }
          setPercentCompletion(value);
        }}
        onBlur={() =>
          runValidationTasks("percentCompletion", percentCompletion)
        }
        errorMessage={errors.percentCompletion?.errorMessage}
        hasError={errors.percentCompletion?.hasError}
        {...getOverrideProps(overrides, "percentCompletion")}
      ></TextField>
      <TextField
        label="Last edited"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={lastEdited && convertToLocal(new Date(lastEdited))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              commandName,
              commandPOC,
              percentCompletion,
              lastEdited: value,
            };
            const result = onChange(modelFields);
            value = result?.lastEdited ?? value;
          }
          if (errors.lastEdited?.hasError) {
            runValidationTasks("lastEdited", value);
          }
          setLastEdited(value);
        }}
        onBlur={() => runValidationTasks("lastEdited", lastEdited)}
        errorMessage={errors.lastEdited?.errorMessage}
        hasError={errors.lastEdited?.hasError}
        {...getOverrideProps(overrides, "lastEdited")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
