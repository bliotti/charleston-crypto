import { merge, replace, unnest, map, append } from "ramda"

const formatResourceObject = (fetch1, fetch2) => {
  const links = map(i => {
    return map(x => {
      return x.url
    }, i.href)
  }, fetch1)

  const title = map(i => {
    return i.title
  }, fetch1)

  const W = map(i => {
    return i.titleWithComment
  }, fetch1)

  const zipp = (a, b, c, d) => {
    var rv = []
    var idx = 0
    var len = Math.min(a.length, b.length, c.length)
    while (idx < len) {
      rv[idx] = [a[idx], b[idx], c[idx], d]
      idx += 1
    }
    return rv
  }

  let result = []
  let x = []

  for (var i = 0; i < links.length; i++) {
    x = zipp(links[i], title[i], W[i], fetch2[i])
    result = append(x, result)
  }

  const list = unnest(result)

  const list2 = map(
    arr => ({
      href: arr[0],
      title: arr[1],
      titleWithComment: arr[2],
      category: replace(/:/g, "", arr[3])
    }),
    list
  )

  const li = fR =>
    merge(fR, {
      comment: replace(
        /[-()]/g,
        "",
        fR.titleWithComment.substring(fR.title.length + 1)
      ),
      _id: `resource_${replace(
        /[-()\s]/g,
        "-",
        fR.titleWithComment + fR.href + fR.category
      )}`,
      key: `${replace(
        /[-()\s]/g,
        "-",
        fR.titleWithComment + fR.href + fR.category
      )}`,
      type: "resource"
    })

  const list3 = map(li, list2)

  return list3
}

export default formatResourceObject
