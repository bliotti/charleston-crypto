import { merge, replace, unnest, map, append, head } from 'ramda'

const formatCategoriesObject = fetchScrapeTwo =>
  map(
    arr => ({
      _id: `category_${replace(/:\s/g, '', arr)}`,
      key: `category_${replace(/:\s/g, '', arr)}`,
      name: `${replace(/:/g, '', arr)}`,
      icon: head(arr),
      type: 'category'
    }),
    fetchScrapeTwo
  )

const formatResourceObject = (fetchScrapOne, fetchScrapeTwo) => {
  // Resources formated at input as [ [],[],... ]

  const resourceLinks = map(i => {
    return map(x => {
      return x.url
    }, i.href)
  }, fetchScrapOne)

  const resourceTitle = map(i => {
    return i.title
  }, fetchScrapOne)

  const resourceTitleWithComment = map(i => {
    return i.titleWithComment
  }, fetchScrapOne)

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

  console.log('fetchScrapOne', fetchScrapOne)
  console.log('fetchScrapeTwo', fetchScrapeTwo)
  console.log('resourceTitle', resourceTitle)
  console.log('resourceLinks', resourceLinks)
  console.log('resourceTitleWithComment', resourceTitleWithComment)

  for (var i = 0; i < resourceLinks.length; i++) {
    x = zipp(
      resourceLinks[i],
      resourceTitle[i],
      resourceTitleWithComment[i],
      fetchScrapeTwo[i]
    )
    result = append(x, result)
  }

  const list = unnest(result)

  const list2 = map(
    arr => ({
      href: arr[0],
      title: arr[1],
      titleWithComment: arr[2],
      category: replace(/:/g, '', arr[3])
    }),
    list
  )

  const li = fR =>
    merge(fR, {
      comment: replace(
        /[-()]/g,
        '',
        fR.titleWithComment.substring(fR.title.length + 1)
      ),
      _id: `resource_${replace(
        /[-()\s]/g,
        '-',
        fR.titleWithComment + fR.href + fR.category
      )}`,
      key: `${replace(
        /[-()\s]/g,
        '-',
        fR.titleWithComment + fR.href + fR.category
      )}`,
      type: 'resource'
    })

  const list3 = map(li, list2)

  return list3
}

export { formatResourceObject, formatCategoriesObject }
