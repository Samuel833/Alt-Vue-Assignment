export const range = (start, end, step = 1) => {

  let output = []
    if (typeof end === "undefined") {
        end = start;
        start = 0;
    }
    // const length = Math.floor(( end - start ) / step + 1)
    // const output = Array.from({ length },(v, i) => start + i * step)
    for (let i = start; i < end; i += step) {
      // loop code
      output.push(i);
    }

    return output;
}
// range(10)
console.log(range(1,4))
export function parseLinkHeader(header) {
    if (header.length == 0) {
      throw new Error('input must not be of zero length')
    }
  
    // Split parts by comma
    let parts = header.split(',')
    let links = {}
    // Parse each part into a named link
    parts.forEach(function (each) {
      let section = each.split(';')
      if (section.length != 2) {
        throw new Error("section could not be split on ';'")
      }
      let url = section[0].replace(/<(.*)>/, '$1').trim()
      let name = section[1].replace(/rel="(.*)"/, '$1').trim()
      links[name] = url
    })
  
    console.log(links)
    return links
  }
  
  export function extractPageNumber(url) {
    try {
    const parsed = new URL(url)
    const params = parsed.searchParams
  
    const page = params.get('page')
    if (page) {
      return parseInt(page)
    }
    return
  
    } catch (error) {
      return
    }
  }
