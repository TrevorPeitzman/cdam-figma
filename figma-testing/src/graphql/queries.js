/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChecklistItem = /* GraphQL */ `
  query GetChecklistItem($id: ID!) {
    getChecklistItem(id: $id) {
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
export const listChecklistItems = /* GraphQL */ `
  query ListChecklistItems(
    $filter: ModelChecklistItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklistItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChecklistItems = /* GraphQL */ `
  query SyncChecklistItems(
    $filter: ModelChecklistItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChecklistItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getChecklist = /* GraphQL */ `
  query GetChecklist($id: ID!) {
    getChecklist(id: $id) {
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
export const listChecklists = /* GraphQL */ `
  query ListChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChecklists = /* GraphQL */ `
  query SyncChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChecklists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
