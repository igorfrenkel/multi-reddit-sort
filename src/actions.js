export const changeMultiMembership = (multiId, subId) => {
  return {
    type: "CHANGE_MULTI_MEMBERSHIP",
    multiId,
    subId
  }
}