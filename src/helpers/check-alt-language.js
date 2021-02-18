'use strict'

module.exports = (str, ver, pageUrl, currentLang, { data: { root } }) => {
  // Get current component name and constuct the possible alternative language equivalent using "currentLang"
  str = str.substr(0, str.length - 3)
  str = str + '-' + currentLang
  // Get the current page filename.html part from the current url
  let htmlFileName = ''
  htmlFileName = pageUrl.substr(pageUrl.lastIndexOf('/'), pageUrl.length)
  // Get all the site components
  const components = root.site.components
  // See if a alternative language component version ('-fr' or '-en') exists
  if (Object.keys(components).includes(str)) {
    // Loop through this component's versions to check if there's a matching version of the other language
    const componentVersions = components[str].versions
    let altLangUrl = ''
    componentVersions.forEach((element) => {
      if (element.version === ver) {
        altLangUrl = element.url
      } else {
        // If the current version is not found, use the latest version
        altLangUrl = components[str].latest.url
      }
    })
    // Trim the filename.html part from the url and replace it with the filename.html part of the current page
    // Otherwise multi-page components will only switch to the index of the component
    altLangUrl = altLangUrl.substr(0, altLangUrl.lastIndexOf('/'))
    altLangUrl = altLangUrl + htmlFileName
    return altLangUrl
  }
}
