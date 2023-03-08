/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { ChecklistItem as ChecklistItem0 } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ChecklistItem from "./ChecklistItem";
import { Collection } from "@aws-amplify/ui-react";
export default function ChecklistItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ChecklistItem0,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "ChecklistItemCollection")}
      {...rest}
    >
      {(item, index) => (
        <ChecklistItem
          checklistItem={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ChecklistItem>
      )}
    </Collection>
  );
}
