/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChecklistItem = /* GraphQL */ `
  subscription OnCreateChecklistItem(
    $filter: ModelSubscriptionChecklistItemFilterInput
  ) {
    onCreateChecklistItem(filter: $filter) {
      id
      itemName
      completion
      mandatory
      description
      reference
      tier
      responsibleParty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChecklistItem = /* GraphQL */ `
  subscription OnUpdateChecklistItem(
    $filter: ModelSubscriptionChecklistItemFilterInput
  ) {
    onUpdateChecklistItem(filter: $filter) {
      id
      itemName
      completion
      mandatory
      description
      reference
      tier
      responsibleParty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChecklistItem = /* GraphQL */ `
  subscription OnDeleteChecklistItem(
    $filter: ModelSubscriptionChecklistItemFilterInput
  ) {
    onDeleteChecklistItem(filter: $filter) {
      id
      itemName
      completion
      mandatory
      description
      reference
      tier
      responsibleParty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChecklist = /* GraphQL */ `
  subscription OnCreateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onCreateChecklist(filter: $filter) {
      id
      commandName
      commandPOC
      percentCompletion
      lastEdited
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChecklist = /* GraphQL */ `
  subscription OnUpdateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onUpdateChecklist(filter: $filter) {
      id
      commandName
      commandPOC
      percentCompletion
      lastEdited
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChecklist = /* GraphQL */ `
  subscription OnDeleteChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onDeleteChecklist(filter: $filter) {
      id
      commandName
      commandPOC
      percentCompletion
      lastEdited
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
