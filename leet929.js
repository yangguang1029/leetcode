/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let s = new Set()
  emails.forEach(email => {
    let arr = email.split('@')
    let s1 = arr[0].split('+')[0].replace(/\./g, '')
    s.add(s1 + '@' + arr[1])
  })
  return s.size
};