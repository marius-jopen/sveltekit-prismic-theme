export default function (doc) {
  switch (doc.type) {
    case ('page'):
      return (doc.uid)
    case ('project'):
      return ('/projects/' + doc.uid)
    case ('projects'):
      return '/projects'
    case ('home'):
    case ('all_modules'):
    case ('setup'):
    default:
      return '/'
  }
}
