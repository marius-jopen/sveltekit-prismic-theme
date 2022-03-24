export default function (doc) {
  switch (doc.type) {
    case ('setup'):
      break
    case ('page'):
      break
    case ('project'):
      break
    case ('projects'):
      return '/projects'
    case ('home'):
    case ('all_modules'):
    default:
      return '/'
  }
}
