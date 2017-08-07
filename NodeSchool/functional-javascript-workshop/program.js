function checkUsersValid(goodUsers) {

  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submit) {
      return goodUsers.some(function (good) {
        return submit.id == good.id
      })
    })
  };
}

module.exports = checkUsersValid
