import { merge, replace } from "ramda"

const commentPuller = fetchedResource =>
  merge(fetchedResource, {
    comment: replace(
      /[-\(\)]/g,
      "",
      fetchedResource.titleWithComment.substring(
        fetchedResource.title.length + 1
      )
    )
  })

export default commentPuller
