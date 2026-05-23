function getOpenIssues(issues, prs) {
  function isRotation(prIssue, issueNum) {
    if (prIssue === issueNum) return false;
    const prStr = prIssue.toString();
    const issueStr = issueNum.toString();
    const len = Math.max(prStr.length, issueStr.length);
    const paddedPr = prStr.padStart(len, 0);
    const paddedIssue = issueStr.padStart(len, 0);
    return (paddedPr + paddedPr).includes(paddedIssue);
  }

  return issues.filter((issue) => !prs.some((pr) => isRotation(pr, issue)));
}
