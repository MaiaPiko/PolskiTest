const _reorderForward = (l, start, end) => {
  const temp = l[start]

  for (let i = start; i < end; i++) {
    if (i + 1 < l.length) l[i] = l[i + 1]
  }

  l[end - 1] = temp

  return l
}

const _reorderBackward = (l, start, end) => {
  const temp = l[start]

  for (let i = start; i > end; i--) {
    if (i > 0) l[i] = l[i - 1]
  }

  l[end] = temp

  return l
}

const reorderList = (l, startIndex, endIndex) => {
  if (startIndex < endIndex)
    return _reorderForward(l.slice(), startIndex, endIndex)
  else if (startIndex > endIndex)
    return _reorderBackward(l.slice(), startIndex, endIndex)
  else return l
}

export default reorderList
