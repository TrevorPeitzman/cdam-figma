/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChecklistItem = /* GraphQL */ `
  mutation CreateChecklistItem(
    $input: CreateChecklistItemInput!
    $condition: ModelChecklistItemConditionInput
  ) {
    createChecklistItem(input: $input, condition: $condition) {
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
export const updateChecklistItem = /* GraphQL */ `
  mutation UpdateChecklistItem(
    $input: UpdateChecklistItemInput!
    $condition: ModelChecklistItemConditionInput
  ) {
    updateChecklistItem(input: $input, condition: $condition) {
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
export const deleteChecklistItem = /* GraphQL */ `
  mutation DeleteChecklistItem(
    $input: DeleteChecklistItemInput!
    $condition: ModelChecklistItemConditionInput
  ) {
    deleteChecklistItem(input: $input, condition: $condition) {
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
export const createChecklist = /* GraphQL */ `
  mutation CreateChecklist(
    $input: CreateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    createChecklist(input: $input, condition: $condition) {
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
export const updateChecklist = /* GraphQL */ `
  mutation UpdateChecklist(
    $input: UpdateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    updateChecklist(input: $input, condition: $condition) {
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
export const deleteChecklist = /* GraphQL */ `
  mutation DeleteChecklist(
    $input: DeleteChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    deleteChecklist(input: $input, condition: $condition) {
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
