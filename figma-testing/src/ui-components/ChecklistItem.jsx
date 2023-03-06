/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, CheckboxField, Flex, Text } from "@aws-amplify/ui-react";
export default function ChecklistItem(props) {
  const { checklistItem, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        CheckboxField: {},
        Button: {},
        "OG ChecklistItem": {},
        owner: { display: "none" },
        tier: { display: "none" },
        reference: { display: "none" },
        Details: { display: "none" },
        ChecklistItem: {},
      },
      variantValues: { view: "Default" },
    },
    {
      overrides: {
        CheckboxField: {},
        Button: {},
        "OG ChecklistItem": {},
        owner: {},
        tier: {},
        reference: {},
        Details: {},
        ChecklistItem: {},
      },
      variantValues: { view: "MoreDetails" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ChecklistItem")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 20px 10px 20px"
        display="flex"
        {...getOverrideProps(overrides, "OG ChecklistItem")}
      >
        <CheckboxField
          width="610px"
          height="40px"
          label="Checklist item placeholder text this is the title hello hhhhhhh"
          padding="5px 0px 5px 0px"
          overflow="hidden"
          shrink="0"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          aria-valuetext={checklistItem?.itemName}
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="More Info"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 20px 10px 70px"
        display="flex"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={checklistItem?.itemName}
          {...getOverrideProps(overrides, "owner")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This is the tier of the checklist item"
          {...getOverrideProps(overrides, "tier")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This is the Reference & Paragraph"
          {...getOverrideProps(overrides, "reference")}
        ></Text>
      </Flex>
    </Flex>
  );
}
