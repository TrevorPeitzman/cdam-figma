import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerChecklistItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChecklistItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName: string;
  readonly completion: boolean;
  readonly mandatory?: boolean | null;
  readonly description?: string | null;
  readonly reference?: string | null;
  readonly tier?: number | null;
  readonly responsibleParty?: string | null;
  readonly checklistID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChecklistItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChecklistItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName: string;
  readonly completion: boolean;
  readonly mandatory?: boolean | null;
  readonly description?: string | null;
  readonly reference?: string | null;
  readonly tier?: number | null;
  readonly responsibleParty?: string | null;
  readonly checklistID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChecklistItem = LazyLoading extends LazyLoadingDisabled ? EagerChecklistItem : LazyChecklistItem

export declare const ChecklistItem: (new (init: ModelInit<ChecklistItem>) => ChecklistItem) & {
  copyOf(source: ChecklistItem, mutator: (draft: MutableModel<ChecklistItem>) => MutableModel<ChecklistItem> | void): ChecklistItem;
}

type EagerChecklist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Checklist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly commandName: string;
  readonly commandPOC: string;
  readonly percentCompletion: number;
  readonly lastEdited: string;
  readonly ChecklistItems?: (ChecklistItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChecklist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Checklist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly commandName: string;
  readonly commandPOC: string;
  readonly percentCompletion: number;
  readonly lastEdited: string;
  readonly ChecklistItems: AsyncCollection<ChecklistItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Checklist = LazyLoading extends LazyLoadingDisabled ? EagerChecklist : LazyChecklist

export declare const Checklist: (new (init: ModelInit<Checklist>) => Checklist) & {
  copyOf(source: Checklist, mutator: (draft: MutableModel<Checklist>) => MutableModel<Checklist> | void): Checklist;
}